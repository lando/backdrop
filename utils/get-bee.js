'use strict';

module.exports = ({bee = '1.x-1.x'} = {}) => `/helpers/install-bee.sh ${bee}`;
