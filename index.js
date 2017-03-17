'use strict';

const roi = require('roi');

const BASE_URL = 'http://search.maven.org/solrsearch/select?q=';

function genericSearch (a, rows) {
  const url = `${BASE_URL}${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function listVersions (g, a, rows) {
  const url = `${BASE_URL}${g}+AND+a:${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

module.exports = {genericSearch, listVersions};
