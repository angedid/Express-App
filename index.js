const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World! <i><h4>Exercise:3.1. Your pipeline first half.</h4></i></h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})