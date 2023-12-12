'use strict';

module.exports = database => ({
  type: database.split(':')[0],
  version: database.split(':')[1],
});
