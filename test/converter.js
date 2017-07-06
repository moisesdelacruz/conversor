/**
* Module dependencies
*/

const expect = require('chai').expect; // para comparar valores detro de los test.
const converter = require('..');

describe('Temperature Conversor', function () {

  describe('Celsius to Fahrenheit conversion', function () {

    it('Converts 100°C to Fahrenheit', function () {
      var fh = converter.toFahrenheit(100);
      expect(fh).to.equal(212);
    });
  });

  describe('Fahrenheit to Celsius conversion', function () {

    it('Converts 212°F to Celsius', function () {
      var fh = converter.toCelsius(212);
      expect(fh).to.equal(100);
    });
  });
});
