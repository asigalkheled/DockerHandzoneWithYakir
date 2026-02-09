const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Lab 2 - Env')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
