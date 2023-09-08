const express = require('express')



const app = express()

app.get('/phones', (req, res, next) => {
    res.json(phoneList);
})


app.listen(3000, () => console.log("Phone cave listening at port 3000"))