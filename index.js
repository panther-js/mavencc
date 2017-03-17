'use strict';

const roi = require('roi');

const BASE_URL = 'http://search.maven.org/solrsearch/select?q=';

const genericSearch = function (a, rows) {
  const url = `${BASE_URL}${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
};

module.exports = {
  genericSearch
};
