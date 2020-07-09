const jwt = require("jsonwebtoken");
const { User } = require("../models");

exports.auth = (req, res, next) => {
  let header, token;

  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    return res.status(401).send({ message: "Require header token" });

  try {
    const verified = jwt.verify(token, process.env.MY_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({
      message: "Wrong token",
    });
  }
};

exports.admin = async (req, res, next) => {
  {
    try {
      const { id } = req.user;
      const user = await User.findOne({
        where: {
          id,
        },
      });

      if (user.role === true) {
        next();
      } else {
        res.status(400).send({ message: "Admin account required!" });
      }
    } catch (error) {
      res.status(400).send({ message: "Wrong admin token" });
    }
  }
};
