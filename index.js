'use strict';

const roi = require('roi');

const BASE_URL = 'http://search.maven.org/solrsearch/select?q=';

function listVersions (g, a, rows) {
  const url = `${BASE_URL}${g}+AND+a:${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function artifactsByGroupId (g, rows) {
  const url = `${BASE_URL}${g}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function artifactSearch (a, rows) {
  const url = `${BASE_URL}a:${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function basicArtifactSearch (a, rows) {
  const url = `${BASE_URL}${a}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function artifactByClassname (c, rows) {
  const url = `${BASE_URL}${c}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

function artifactByFullyClassname (cf, rows) {
  const url = `${BASE_URL}${cf}&rows=${rows}&wt=json`;
  return roi.get({ endpoint: url });
}

module.exports = {
  artifactSearch,
  basicArtifactSearch,
  listVersions,
  artifactsByGroupId,
  artifactByClassname,
  artifactByFullyClassname
};
