const express = require("express")
//const auth = require("../middleware/auth")

const {addsub,getsub} = require("../controllers/subchapter")

const router = new express.Router()

//router.get("/subchapter/:id",getsub)
router.post("/add/subchapter",addsub)

module.exports = router