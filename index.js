const express = require('express')
const { Provinces, Districts, Sectors, Cells } = require("rwanda");
const app = express()
app.get('/', function (req, res) {
    res.send('Hello World')
})
app.get('/provinces', function (req, res) {
    res.send(Provinces())
  })

app.get('/districts', function (req, res) {
    res.send(Districts())
  })

app.get('/sectors', function (req, res) {
    res.send(Sectors())
  })
  app.get('/cells', function (req, res) {
    res.send(Cells())
  })

console.log(Districts("kigali")); 
console.log(Districts("East"));
console.log(Districts("North"));



app.listen(3000)
console.log('app running on port: 3000 ');
