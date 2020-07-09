const express = require("express");
const route = express.Router();
const { auth: auth, admin: admin } = require("../middleware/auth");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

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

const {
  register,
  login,
  read: findUsers,
  readOne: findUser,
  delete: destroyUser,
} = require("../controllers/user");

const {
  create: addTransaction,
  read: findTransactions,
  readOne: findTransaction,
  update: patchTransaction,
  delete: destroyTransaction,
} = require("../controllers/transaction");

const {
  create: addArtist,
  read: findArtists,
  readOne: findArtist,
  update: patchArtist,
  delete: destroyArtist,
} = require("../controllers/artist");

const {
  create: addSong,
  read: findSongs,
  readOne: findSong,
  update: patchSong,
  delete: destroySong,
} = require("../controllers/song");

//============================================================

// User Routes
route.post("/register", register);
route.post("/login", login);
route.get("/user", auth, admin, findUsers); //PRIVATE
route.get("/user/:id", auth, findUser);
route.delete("/user/:id", auth, admin, destroyUser); //PRIVATE

route.post("/transaction", auth, [upload.single("attachment")], addTransaction);
route.get("/transaction", findTransactions); //PRIVATE
route.get("/transaction/:id", auth, findTransaction);
route.patch("/transaction/:id", auth, admin, patchTransaction); //PRIVATE
route.delete("/transaction/:id", auth, admin, destroyTransaction); //PRIVATE

route.post("/artist", auth, admin, addArtist); //PRIVATE
route.get("/artist", findArtists);
route.get("/artist/:id", auth, findArtist);
route.patch("/artist/:id", auth, admin, patchArtist); //PRIVATE
route.delete("/artist/:id", auth, admin, destroyArtist); //PRIVATE

route.post("/song", auth, admin, addSong); //PRIVATE
route.get("/song", findSongs);
route.get("/song/:id", auth, findSong);
route.patch("/song/:id", auth, admin, patchSong); //PRIVATE
route.delete("/song/:id", auth, admin, destroySong); //PRIVATE

module.exports = route;
