'use strict';

module.exports = ({
  'composer': {
    service: 'appserver',
    cmd: 'composer --ansi',
  },
  'db-import <file>': {
    service: ':host',
    description: 'Imports a dump file into a database service',
    cmd: '/helpers/sql-import.sh',
    user: 'root',
    options: {
      'host': {
        description: 'The database service to use',
        default: 'database',
        alias: ['h'],
      },
      'no-wipe': {
        description: 'Do not destroy the existing database before an import',
        boolean: true,
      },
    },
  },
  'db-export [file]': {
    service: ':host',
    description: 'Exports database from a database service to a file',
    cmd: '/helpers/sql-export.sh',
    user: 'root',
    options: {
      host: {
        description: 'The database service to use',
        default: 'database',
        alias: ['h'],
      },
      stdout: {
        description: 'Dump database to stdout',
      },
    },
  },
  'php': {
    service: 'appserver',
    cmd: 'php',
  },
  'mariadb': {
    service: ':host',
    description: 'Drops into a MariaDB shell on a database service',
    cmd: 'mariadb -uroot',
    options: {
      host: {
        description: 'The database service to use',
        default: 'database',
        alias: ['h'],
      },
    },
  },
});
