require ('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res)=>{
    res.send('Hello world')
})
app.get('/', ()=>{
    res.send('Shagufta')
})
app.get('/github', (req, res)=>{
    res.send('<h1>Hey! this is me Shagufta fatima and Iam from jaipur')
})
app.listen(process.env.PORT,()=>{
    console.log(`example app to lisening on port ${port}`)
})