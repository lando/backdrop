'use strict';

const _ = require('lodash');
const LandoMysql = require('@lando/mysql/builders/mysql.js');

// Builder
module.exports = {
  name: 'backdrop-mysql',
  parent: '_service',
  builder: parent => class BackdropMysql extends LandoMysql.builder(parent, LandoMysql.config) {
    constructor(id, options = {}) {
      super(id, options, {services: _.set({}, options.name)});
    }
  },
};
