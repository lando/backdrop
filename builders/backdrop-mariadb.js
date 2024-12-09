'use strict';

const _ = require('lodash');
const LandoMysql = require('./../node_modules/@lando/mariadb/builders/mariadb.js');

// Builder
module.exports = {
  name: 'backdrop-mariadb',
  parent: '_service',
  builder: parent => class BackdropMariaDB extends LandoMysql.builder(parent, LandoMysql.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    }
  },
};
