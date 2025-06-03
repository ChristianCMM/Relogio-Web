const express = require('express')
const path = require('path')
const porta = 5001

const app = express()
const caminho = path.join(__dirname,'..')

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','index.html'))
})


app.listen(porta,()=>console.log(`Servidor aberto na porta ${porta}`))
