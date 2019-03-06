'use strict';

const test = require('tape');
const mavencc = require('../index');
const fs = require('fs');

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
      t.equal(artifact, 'testsuite', 'testsuite found.');
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
      t.notEqual(artifact, '', 'one result was found');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('artifacts by sha1.', (t) => {
  mavencc.artifactBySHA1('35379fb6526fd019f331542b4e9ae2e566c57933', 5)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[0].a;
      t.equal(artifact, 'jetty-webapp', 'jetty-webapp found.');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('list tags', (t) => {
  mavencc.searchTags('sbtplugin', 5)
    .then(response => {
      const artifact = JSON.parse(response.body).response.docs[0].a;
      t.notEqual(artifact, '', 'one result was found');
      t.end();
    })
    .catch(e => {
      console.error(e.stack);
      t.fail(e);
    });
});

test('should download artifact', (t) => {
  mavencc.downloadArtifact('com/jolira/guice/3.0.0/guice-3.0.0.pom', '/tmp/guice.pom')
  .then(x => {
    try {
      t.equal(fs.statSync('/tmp/guice.pom').isFile(), true, 'File found.');
    } catch (e) {
      console.error(e);
      t.fail(e);
    }
    t.end();
  });
});
