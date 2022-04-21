const express = require('express')
const { Provinces, Districts } = require('rwanda');
const app = express()
app.get('/', function (req, res) {
  res.send('Hello World')
})
console.log(Provinces()); // [ 'East', 'Kigali', 'North', 'South', 'West' ]
console.log(Districts()); // [ 'Bugesera', 'Gatsibo', 'Kayonza', 'Kirehe',...]
app.listen(3000)
console.log('app running on port: 3000 ');
