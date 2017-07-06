/**
* Module dependencies
*/

const express = require('express');
const converter = require('..');

const app = express();

app.get('/toCelsius', function (req, res) {
  var temperature = req.query.temperature;
  res.send(converter.toCelsius(temperature).toString());
});

app.get('/toFahrenheit', function (req, res) {
  var temperature = req.query.temperature;
  res.send(converter.toFahrenheit(temperature).toString());
});

app.listen(3000, () => {
  console.log('Server listenin on port: 3000');
});
