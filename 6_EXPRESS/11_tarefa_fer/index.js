const express = require('express')
const app = express()
const port = 5000
const projects = require('./projects')

app.use('/principal', projects)

// carrega o css ou qualquer outro arquivo estático nesta pasta
app.use(
  express.static('public'))




app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})
