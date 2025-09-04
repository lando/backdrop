
'use strict';

const _ = require('lodash');
const PhpNginx = require('@lando/php/builders/php-nginx.js');

// Builder
module.exports = {
  name: 'backdrop-nginx',
  parent: '_webserver',
  config: {
    version: '1.29',
  },
  builder: (parent, config) => class BackdropNginx extends PhpNginx.builder(parent, PhpNginx.config) {
    constructor(id, options = {}) {
      super(id, _.merge({}, config, options), {services: _.set({}, options.name)});
    }
  },
};
