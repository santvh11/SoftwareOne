const express = require('express');
const countriesRoutes = express.Router();
const fs = require('fs');

const dataPath = './details/countries.json';

// util functions

const getCountries = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

countriesRoutes.get('/account/list', (req, res) => {
  const countries = getCountries();
  res.send(countries);
});

module.exports = countriesRoutes;
