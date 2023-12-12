'use strict';

const getServiceConfig = require('./get-service-config');

module.exports = options => ({
  appserver: {
    build_as_root_internal: options.build_root,
    build_internal: options.build,
    composer: options.composer,
    composer_version: options.composer_version,
    config: getServiceConfig(options),
    run_as_root_internal: options.run_root,
    ssl: true,
    type: `backdrop-php:${options.php}`,
    via: options.via,
    xdebug: options.xdebug,
    webroot: options.webroot,
    nginxServiceType: `backdrop-${options.webserver.type}`,
  },
  database: {
    config: getServiceConfig(options, ['database']),
    authentication: 'mysql_native_password',
    type: `backdrop-${options.database}`,
    portforward: true,
    creds: {
      user: options.recipe,
      password: options.recipe,
      database: options.recipe,
    },
  },
});
