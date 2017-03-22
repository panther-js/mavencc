'use strict';

const test = require('tape');
const mavencc = require('../index');

test('basic artifact search.', (t) => {
  mavencc.basicArtifactSearch('wildfly-swarm', 3)
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

test('artifact search.', (t) => {
  mavencc.artifactSearch('wildfly-swarm', 3)
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

test('list versions.', (t) => {
  mavencc.listVersions('org.wildfly.swarm', 'wildfly-swarm', 5)
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

test('artifacts by groupId.', (t) => {
  mavencc.artifactsByGroupId('org.wildfly.swarm', 5)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[4].a;
      t.equal(artifact, 'microprofile', 'microprofile found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('artifacts by className.', (t) => {
  mavencc.artifactByClassname('junit', 5)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[4].a;
      t.equal(artifact, 'junit', 'junit found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('artifacts by fully-classname.', (t) => {
  mavencc.artifactByFullyClassname('org.specs.runner.JUnit', 5)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[0].a;
      t.equal(artifact, 'specs', 'specs found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});
