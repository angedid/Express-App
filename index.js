const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><h4><i>Exercise:3.1. Your pipeline first half and Second half completed.<br> Completed CI/CD</i></h4>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})