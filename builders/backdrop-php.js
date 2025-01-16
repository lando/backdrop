'use strict';

const path = require('path');
const landoPhpPath = path.join(__dirname, '../node_modules/@lando/php');
const LandoPhp = require(`${landoPhpPath}/builders/php.js`);

/**
 * Backdrop PHP builder class that extends Lando PHP builder.
 * Uses the bundled version of @lando/php plugin instead of user's version.
 *
 * @module backdrop-php
 */
module.exports = {
  name: 'backdrop-php',
  parent: '_appserver',
  /**
   * Builder function that returns the BackdropPhp class
   * @param {Object} parent - Parent builder class
   * @return {Class} BackdropPhp class extending LandoPhp builder
   */
  builder: parent => class BackdropPhp extends LandoPhp.builder(parent, LandoPhp.config) {
    /**
     * Create a new BackdropPhp instance
     * @param {string} id - Service id
     * @param {Object} options - Service options
     * @param {Object} factory - App factory instance
     */
    constructor(id, options = {}, factory) {
      options.nginxServiceType = 'backdrop-nginx';
      super(id, options, factory);
    }
  },
};
