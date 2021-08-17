const express = require("express");
const controller = require("../controllers/teste.controllers");
const router = express.Router();

router.get("/teste", controller.teste);
module.exports = router;
