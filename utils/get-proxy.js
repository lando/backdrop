'use strict';

// Modules
const _ = require('lodash');

module.exports = options => {
  // if the user has not manually set the proxy service then its one of two things
  if (!_.has(options, 'proxyService') && options.webserver.type === 'nginx') options.proxyService = 'appserver_nginx';
  else if (!_.has(options, 'proxyService') && options.webserver.type === 'apache') options.proxyService = 'appserver';

  // set and return
  return _.set({}, options.proxyService, [`${options.app}.${options._app._config.domain}`]);
};
