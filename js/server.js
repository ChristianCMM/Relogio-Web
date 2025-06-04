const path = require('path')
const moment = require("moment/moment");
const express = require('express')
const app = express()
const porta = 5001

app.use(express.static(path.join(__dirname,'..')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','index.html'))
})

app.listen(porta,()=>console.log(`Servidor aberto na porta ${porta}`))

