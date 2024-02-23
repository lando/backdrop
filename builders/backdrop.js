'use strict';

// Modules
const _ = require('lodash');
const path = require('path');

/*
 * Build Backdrop
 */
module.exports = {
  name: 'backdrop',
  parent: '_recipe',
  config: {
    backdrush: false,
    bee: '1.x-1.x',
    build: [],
    build_internal: [],
    build_root: [],
    build_as_root_internal: [],
    confSrc: path.resolve(__dirname, '..', 'config'),
    composer_version: '2',
    defaultFiles: {
      php: 'php.ini',
    },
    database: 'mariadb:10.6',
    drush: '8.4.12',
    php: '8.2',
    proxy: {},
    run_root: [],
    tooling: {},
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
      // add relevant build steps for backdrush
      if (options.backdrush !== false) options.build.unshift(require('../utils/get-backdrush')(options));
      // add relevant build steps for bee
      if (options.bee !== false) options.build.unshift(require('../utils/get-bee')(options));

      // get the big three
      options.services = _.merge({}, require('../utils/get-services')(options), options.services);
      options.tooling = _.merge({}, require('../utils/get-tooling')(options), options.tooling);
      options.proxy = _.merge({}, require('../utils/get-proxy')(options), options.proxy);

      // Downstream
      super(id, options);
    };
  },
};
