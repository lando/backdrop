# Backdrop MySQL 5.7 SSL Test

This example tests that the backdrop recipe with MySQL 5.7 correctly handles
database client connectivity. MySQL 5.7 uses self-signed certificates that can
cause TLS/SSL errors with the MySQL 8.0 client.

See: https://github.com/lando/lando/issues/3833

## Start up tests

Run the following commands to get up and running with this example.

```bash
# Should download and extract Backdrop
lando poweroff
rm -rf web && mkdir -p web
curl -fsSL https://github.com/backdrop/backdrop/releases/download/1.33.1/backdrop.zip -o /tmp/backdrop.zip
unzip -q /tmp/backdrop.zip -d web
mv web/backdrop/* web/backdrop/.* web/ 2>/dev/null || true
rmdir web/backdrop 2>/dev/null || true
```

```bash
# Should start up successfully
lando start
```

```bash
# Should install Backdrop with bee
cd web && chmod +x core/scripts/*
lando bee site-install --db-name=backdrop --db-user=backdrop --db-pass=backdrop --db-host=database --username=admin --password=admin --email=test@lando.dev --site-name="MySQL 5.7 Test" --auto
```

## Verification commands

Run the following commands to validate things are rolling as they should.

```bash
# Should auto-detect MySQL and install the MySQL client (not MariaDB)
lando exec appserver -- mysql --version | grep -qiv "MariaDB"
```

```bash
# Should be able to connect to MySQL 5.7 without SSL errors
lando mysql backdrop -e "SELECT 1"
```

```bash
# Should be able to run mysql from appserver without SSL errors
lando exec appserver -- mysql -h database -u backdrop -pbackdrop backdrop -e "SELECT 1"
```

```bash
# Should be able to export with bee without SSL errors
cd web
lando bee db-export /tmp/bee-export.sql
lando exec appserver -- bash -c "zcat /tmp/bee-export.sql.gz | head -5" | grep -i "dump"
```

```bash
# Should be able to export with db-export without SSL errors
lando db-export --stdout > /tmp/lando-export.sql
head -5 /tmp/lando-export.sql | grep -i "dump"
```

## Destroy tests

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
lando destroy -y
lando poweroff
```
