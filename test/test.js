'use strict';

const test = require('tape');
const mavencc = require('../index');

test('generic search.', (t) => {
  t.plan(2);
  mavencc.genericSearch('aesh', 3)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[0].a;
      t.equal(artifact, 'aesh', 'aesh found.');
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });

  mavencc.genericSearch('wildfly-swarm', 3)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[0].a;
      t.equal(artifact, 'wildfly-swarm', 'wildfly-swarm found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});
