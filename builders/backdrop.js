'use strict';

// Modules
const _ = require('lodash');
const fs = require('fs');
const path = require('path');

/*
 * Helper to return backdrush download url
 */
const backdrushUrl = version =>
  `https://github.com/backdrop-contrib/backdrop-drush-extension/archive/${version}.tar.gz`;

/*
 * Get backdrush install command
 */
const backdrushInstall = version => [
  'mkdir -p', '~/.drush', '&&',
  'curl', '-fsSL', backdrushUrl(version), '|', 'tar', '-xz', '--strip-components=1', '-C', '~/.drush', '&&',
  'drush', 'cc', 'drush',
].join(' ');

/*
 * Build Backdrop
 */
module.exports = {
  name: 'backdrop',
  parent: '_recipe',
  config: {
    backdrush: '1.4.0',
    bee: '1.x-1.x',
    build: [],
    build_root: [],
    build_as_root_internal: [],
    confSrc: path.resolve(__dirname, '..', 'config'),
    composer_version: '2',
    defaultFiles: {},
    database: 'mariadb:10.6',
    drush: '8.4.12',
    php: '8.2',
    run_root: [],
    via: 'apache:2.4',
    xdebug: false,
    webroot: '.',
    services: {appserver: {overrides: {
      environment: {
        BACKDROP_SETTINGS: JSON.stringify({
          databases: {
            default: {
              default: {
                driver: 'mysql',
                database: 'backdrop',
                username: 'backdrop',
                password: 'backdrop',
                host: 'database',
                port: 3306,
              },
            },
          },
        }),
      },
    }}},
  },
  builder: (parent, config) => class LandoBackdrop extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);

      // parse some stuff
      // @NOTE: we want to separate this out because via can have the thing:version form
      options.db = require('../utils/parse-database')(options.database);
      options.webserver = require('../utils/parse-via')(options.via);

      // Rebase on top of any default config we might already have
      options.defaultFiles = _.merge({}, require('../utils/get-config-defaults')(_.cloneDeep(options)), options.defaultFiles); // eslint-disable-line max-len

      // get the big three
      options.services = _.merge({}, require('../utils/get-services')(options), options.services);
      // options.tooling = _.merge({}, require('../utils/get-tooling')(options), options.tooling);
      // options.proxy = _.merge({}, require('../utils/get-proxy')(options), options.proxy);
      options.tooling = {};

      console.log(options.services);
      // @TODO: try nginx verison
      // @TODO: nginxServiceType when apache?
      // @TODO: verify default files

      // @TODO: add backdrush?
      // @TODO: add bee?

      // Switch the proxy if needed
      // if (!_.has(options, 'proxyService')) {
      //   if (_.startsWith(options.via, 'nginx')) options.proxyService = 'appserver_nginx';
      //   else if (_.startsWith(options.via, 'apache')) options.proxyService = 'appserver';
      // }
      // options.proxy = _.set(options.proxy, options.proxyService, [`${options.app}.${options._app._config.domain}`]);

      // Downstream
      super(id, options);
    };
  },
};
