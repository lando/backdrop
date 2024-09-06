'use strict';

// Modules
const _ = require('lodash');

module.exports = options => {
  // if the user has not manually set the proxy service then its one of two things
  if (!_.has(options, 'proxyService') && options.webserver.type === 'nginx') options.proxyService = 'appserver_nginx';
  else if (!_.has(options, 'proxyService') && options.webserver.type === 'apache') options.proxyService = 'appserver';

  // get any intial proxy stuff for proxyService
  const urls = _.get(options, `_app.config.proxy.${options.proxyService}`, []);
  // add
  urls.push(`${options.app}.${options._app._config.domain}`);
  // set
  options.proxy[options.proxyService] = _.uniq(_.compact(urls));
  // return
  return options.proxy;
};
