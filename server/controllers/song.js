const { Song, Artist } = require("../models");

exports.read = async (req, res) => {
  try {
    const song = await Song.findAll({
      include: {
        model: Artist,
        attributes: {
          exclude: ["createdAt", "updatedAt", "role"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "artistId", "ArtistId"],
      },
    });
    if (!song)
      return res.status(400).send({
        songs: {
          message: "No Song",
        },
      });
    res.status(200).send({ songs: song });
  } catch (error) {
    res.status(500).send({
      error: {
        message: "server error",
      },
    });
    console.log(error);
  }
};

exports.readOne = async (req, res) => {
  try {
    const { id } = req.params;
    const song = await Song.findOne({
      include: {
        model: Artist,
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt", "artistId", "ArtistId"],
      },
      where: {
        id,
      },
    });

    res.send({ songs: song });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const song = await Song.create({
      ...req.body,
    });
    res.send({ songs: song });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const check = await Song.findOne({
      where: {
        id,
      },
    });

    if (!check) {
      return res.status(400).send({ message: "no data with id: " + id });
    } else {
      const update = await Song.update(req.body, {
        where: { id: check.id },
      });
      if (update < 1) {
        return res
          .status(400)
          .send({ message: "you make no difference in Artist with id: " + id });
      }

      const updated = await Song.findOne({
        attributes: {
          exclude: ["createdAt", "updatedAt", "ArtistId", "artistId"],
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
    const song = await Song.destroy({
      where: {
        id,
      },
    });
    res.send({ message: "success deleting song with id: " + id });
  } catch (error) {
    console.log(error);
  }
};
