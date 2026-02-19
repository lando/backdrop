# Backdrop MySQL Client Compatibility Example

This example tests that the backdrop recipe with MySQL correctly auto-detects
and installs the native MySQL client, avoiding SSL/TLS errors and MariaDB dump
format issues when using `bee db-export`.

See: https://github.com/lando/lando/issues/3833

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should start up successfully
lando poweroff
lando start
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should auto-detect MySQL and install the MySQL client (not MariaDB)
lando exec appserver -- mysql --version | grep -qiv "MariaDB"
```

```bash
# Should be able to connect to MySQL without SSL errors
lando mysql backdrop -e "SELECT 1"
```

```bash
# Should be able to export with bee without SSL errors and use MySQL dump format
lando bee db-export --file=/tmp/bee-export.sql
lando exec appserver -- bash -c "zcat /tmp/bee-export.sql.gz | head -5" | grep -i "dump" | grep -iq "MySQL"
```

```bash
# Should be able to export with db-export without SSL errors
lando db-export --stdout > /tmp/lando-export.sql
head -5 /tmp/lando-export.sql | grep -i "dump" | grep -iq "MySQL"
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
