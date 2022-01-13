const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('<h1>App de Demonstração Express</h1><h4>Mensagem: Sucesso </h4> <p>Verção 0.0.1</p>')
})

app.get('/produto', (req, res) => {
  res.send([
    {
      id: '1',
      produto: 'Pera',
      preço: 15.65,
      undMed: 'kg'
    },
    {
      id: '2',
      produto: 'Maçã',
      preço: 9.43,
      undMed: 'kg'
    }
  ])
})

app.listen(port, () => {
  console.log(`Aplicação iniciada na porta: ${port}`)
})
