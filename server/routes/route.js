const express = require("express");
const route = express.Router();
const { auth: auth, admin: admin } = require("../middleware/auth");
const { upload } = require("../middleware/upload");

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
route.get("/user/:id", findUser);
route.delete("/user/:id", auth, admin, destroyUser); //PRIVATE

route.post("/transaction", auth, upload, addTransaction);
route.get("/transaction", findTransactions); //PRIVATE
route.get("/transaction/:id", auth, findTransaction);
route.patch("/transaction/:id", patchTransaction); //PRIVATE
route.delete("/transaction/:id", auth, admin, destroyTransaction); //PRIVATE

route.post("/artist", addArtist); //PRIVATE
route.get("/artist", findArtists);
route.get("/artist/:id", auth, findArtist);
route.patch("/artist/:id", auth, admin, patchArtist); //PRIVATE
route.delete("/artist/:id", auth, admin, destroyArtist); //PRIVATE

route.post("/song", addSong); //PRIVATE
route.get("/song", findSongs);
route.get("/song/:id", auth, findSong);
route.patch("/song/:id", patchSong); //PRIVATE
route.delete("/song/:id", auth, admin, destroySong); //PRIVATE

module.exports = route;
