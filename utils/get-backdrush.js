'use strict';

module.exports = ({
  backdrush = '1.4.0',
  drush = '8.4.12',
} = {}) => {
  return `/helpers/install-backdrush.sh ${backdrush} ${drush}`;
};
