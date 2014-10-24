Package.describe({
  name: 'test-package',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.0.1');
  api.addFiles('test-package.js');

  api.addFiles('face.png', 'client');
  api.addFiles('style.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('test-package');
  api.addFiles('test-package-tests.js');
});
