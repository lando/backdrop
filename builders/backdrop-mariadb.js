'use strict';

const _ = require('lodash');
const LandoMysql = require('./../node_modules/@lando/mariadb/builders/mariadb.js');

// Builder
module.exports = {
  name: 'wordpress-mariadb',
  parent: '_service',
  builder: (parent, config) => class BackdropMariaDB extends LandoMysql.builder(parent, LandoMysql.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    };
  },
};
