const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req.headers)
  res.send('Hello World! on /(root)')
})

app.get('/users', (req, res) => {
  res.send('Hello World! on /users')
})

app.get('/todos', (req, res) => {
  res.send('Hello World! on / todos')
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})