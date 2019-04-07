const express = require('express')
const bP = require ('body-parser')
const app = express()

app.get("/", function(req, res) {
    res.render('index.ejs')
})

app.use(bP.urlencoded({ extended: true }))

app.set('view engine','ejs')

app.post('/show', (req, res)=>{
    console.log(req.body)    
})


app.listen(3000,function () {
    console.log('Funcionando na porta 3000')
    
})

