const express = require ('express')
const path = require('path')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname + 'client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log(`App started and listening on ${port}`)
