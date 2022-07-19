// acesso via browser
const express = require('express')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

// rotas OU endpoints
app.get('/', (req, res) => {
  res.json({ message: 'Primeira rota criada com sucesso!' })
})

app.listen(3000)
