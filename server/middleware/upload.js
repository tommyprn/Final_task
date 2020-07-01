const multer = require("multer");

exports.upload = async (req, res, next) => {
  const storage = multer.diskStorage({
    destination: "./storage",
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err);

        cb(null, raw.toString("hex") + path.extname(file.originalname));
      });
    },
  });

  const upload = multer({ storage: storage });

  upload(req, res, function (error) {
    if (error instanceof multer.MulterError) {
      console.log(error);
      return res.status(500).json(error);
    } else if (error) {
      return res.status(500).json(error);
    }
    next();
  });
};
