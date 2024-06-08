require('dotenv').config()
console.log(process.env)
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/Twitter', (req,res) =>{
    res.send('Wasim khan')
})

app.get('/login', (req,res)=>{
    res.send('<h1>Plese Login on ths side</h1>')
})

app.get('/instagram', (req,res)=>{
    res.send('<h2>Instagram is availble</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
