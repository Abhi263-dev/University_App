const express = require("express")
//const auth = require("../middleware/auth")

const {createChapter,getChapter} = require("../controllers/chapter")

const router = new express.Router()

router.get("/chapter/:id",getChapter)
router.post("/add/chapters",createChapter)

module.exports = router