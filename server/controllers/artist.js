const { Artist, Song } = require("../models");

exports.read = async (req, res) => {
  try {
    const artist = await Artist.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({ data: artist });
  } catch (error) {
    console.log(error);
  }
};

exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.findOne({
      include: {
        model: Song,
        attributes: {
          exclude: ["createdAt", "updatedAt", "artistId", "ArtistId"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        id,
      },
    });

    res.send({ data: artist });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const artist = await Artist.create(req.body);
    res.send({ data: artist });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Artist.findOne({
      where: {
        id,
      },
    });

    if (!check) {
      return res.status(400).send({ message: "no data with id: " + id });
    } else {
      const update = await Artist.update(req.body, {
        where: { id: check.id },
      });
      if (update < 1) {
        return res
          .status(400)
          .send({ message: "you make no difference in Artist with id: " + id });
      }

      const updated = await Artist.findOne({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
        where: { id: id },
      });
      res.send(updated);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const artist = await Artist.destroy({
      where: {
        id,
      },
    });
    res.send({ message: "success deleting artist with id: " + id });
  } catch (error) {
    console.log(error);
  }
};
