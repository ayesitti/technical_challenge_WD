const router = require("express").Router()

router.get('/', (req, res) => {
    res.json("All good in here")
})

const phoneRouting = require("./phones.routes")
router.use("/phones", phoneRouting)

module.exports = router