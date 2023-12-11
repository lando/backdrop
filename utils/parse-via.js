'use strict';

module.exports = via => ({
  type: via.split(':')[0],
  version: via.split(':')[1],
});
