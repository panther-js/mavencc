'use strict';

const roi = require('roi');

const URL = 'http://search.maven.org/solrsearch/select?q=';
const DOWNLOAD = 'http://search.maven.org/remotecontent?filepath=';

const listVersions = (g, a, rows) => roi.get({ endpoint: `${URL}${g}+AND+a:${a}&rows=${rows}&wt=json` });

const artifactsByGroupId = (g, rows) => roi.get({ endpoint: `${URL}${g}&rows=${rows}&wt=json` });

const artifactSearch = (a, rows) => roi.get({ endpoint: `${URL}a:${a}&rows=${rows}&wt=json` });

const basicArtifactSearch = (a, rows) => roi.get({ endpoint: `${URL}${a}&rows=${rows}&wt=json` });

const artifactByClassname = (c, rows) => roi.get({ endpoint: `${URL}${c}&rows=${rows}&wt=json` });

const artifactByFullyClassname = (fc, rows) => roi.get({ endpoint: `${URL}fc:${fc}&rows=${rows}&wt=json` });

const artifactBySHA1 = (s, rows) => roi.get({ endpoint: `${URL}1:${s}&rows=${rows}&wt=json` });

const searchTags = (s, rows) => roi.get({ endpoint: `${URL}tags:${s}&rows=${rows}&wt=json` });

const downloadArtifact = (f, path) => roi.download({ endpoint: `${DOWNLOAD}${f}` }, path);

module.exports = {
  artifactSearch,
  basicArtifactSearch,
  listVersions,
  artifactsByGroupId,
  artifactByClassname,
  artifactByFullyClassname,
  artifactBySHA1,
  searchTags,
  downloadArtifact
};
