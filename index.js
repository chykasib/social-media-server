const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('social media');
})

app.listen(port, () => {
    console.log(`new social media website coming soon${port}`)
})
