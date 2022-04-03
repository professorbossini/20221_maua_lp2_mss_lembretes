const express = require('express')
const axios = require ('axios')
const app = express()

app.use(express.json())
const lembretes = {}
contador = 0
//GET
//exemplo.com.br/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})
 
//POST
//exemplo.com.br/lembretes
app.post('/lembretes', async (req, res) => {
    contador++
    //{texto: "Fazer café"}
    const { texto } = req.body
    lembretes[contador] = {contador, texto}
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado",
        dados: {
            contador, texto
        }
    })
    res.status(201).send(lembretes[contador])
})



app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})

