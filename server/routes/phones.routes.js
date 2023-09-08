const router = require("express")
const phoneList = require('../data/phones.json')

router.get('/phones', (req, res, next) => {
    res.json(phoneList)
})

router.get('/phones/:id', (req, res, next) => {
    res.json
})
