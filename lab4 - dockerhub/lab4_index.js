const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Lab4 - DockerHub by Anastasia')
})

app.listen(port, () => {
  console.log(`Lab4 by Anastasia listening on port ${port}`)
})