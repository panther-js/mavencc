# mavencc

[![Build Status](https://travis-ci.org/panther-js/mavencc.svg?branch=master)](https://travis-ci.org/panther-js/mavencc)
[![dependencies Status](https://david-dm.org/panther-js/mavencc/status.svg)](https://david-dm.org/panther-js/mavencc)

[![NPM](https://nodei.co/npm/mavencc.png)](https://npmjs.org/package/mavencc)

A simple maven central client.

|                 | Project Info  |
| --------------- | ------------- |
| License:        | MIT |
| Build:          | npm |
| Engines:        | Node.js 4.x, 6.x, 7.x |

## Installation

```bash
npm install mavencc -S
```

## Usage

```javascript
const mavencc = require('mavencc');

mavencc.basicArtifactSearch('wildfly-swarm', 5)
.then(console.log)
.catch(error => console.log(error));

mavencc.artifactSearch('wildfly-swarm', 5)
.then(console.log)
.catch(error => console.log(error));

mavencc.listVersions('org.wildfly.swarm', 'wildfly-swarm', 5)
.then(console.log)
.catch(error => console.log(error));

mavencc.artifactsByGroupId('org.wildfly.swarm', 5)
.then(console.log)
.catch(error => console.log(error));
```

## You can use to

* A basic artifact search.
* Search any artifactId irrespective of groupId
* List all versions of an artifact.
* Search for all artifacts in a groupId.
