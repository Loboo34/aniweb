const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 4000


app.get('/', (req, res) =>{
    res.send('hell0')
})

app.listen(PORT, () => {
    console.log(`listening on prt ${PORT}`)
})