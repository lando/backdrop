'use strict';

module.exports = options => {
  // start with defaults
  const tooling = require('./get-tooling-defaults');

  // add backdrush
  if (options.backdrush !== false) tooling.drush = {service: 'appserver'};
  // add bee
  if (options.bee !== false) tooling.bee = {service: 'appserver', cmd: `/var/www/.bee/bee-${options.bee}/bee.php`};

  return tooling;
};
