# Backdrop Init Example

This example exists primarily to test the following documentation:

* [Backdrop Recipe](https://docs.lando.dev/backdrop/getting-started.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Should clone Backdrop code and init a backdrop recipe landofile
rm -rf backdrop && mkdir -p backdrop && cd backdrop
lando init --source remote --remote-url https://github.com/backdrop/backdrop/releases/download/1.26.2/backdrop.zip --recipe backdrop --webroot backdrop --name backdrop
cp -f ../../.lando.upstream.yml .lando.upstream.yml && cat .lando.upstream.yml

# Should start up successfully
cd backdrop
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should return the Backdrop installation page by default
cd backdrop
lando ssh -s appserver -c "curl -L localhost" | grep "Backdrop CMS 1"

# Should use 8.2 as the default php version
cd backdrop
lando php -v | grep "PHP 8.2"

# Should be running apache 2.4 by default
cd backdrop
lando ssh -s appserver -c "apachectl -V | grep 2.4"
lando ssh -s appserver -c "curl -IL localhost" | grep Server | grep 2.4

# Should be running mariadb 10.6 by default
cd backdrop
lando mysql -V | grep 10.6 | grep MariaDB

# Should not enable xdebug by default
cd backdrop
lando php -m | grep xdebug || echo $? | grep 1

# Should be able to connect to the database with the default creds
cd backdrop
lando mysql backdrop -e quit

# Should use bee 1.x-1.x by default
cd backdrop/backdrop
lando bee version | grep "Bee for Backdrop CMS" | grep "1.x-1.x"

# Should be able to install Backdrop with bee and verify it installed
cd backdrop/backdrop
chmod +x core/scripts/*
lando bee site-install --db-name=backdrop --db-user=backdrop --db-pass=backdrop --db-host=database --username=admin --password=a --email=mike@lando.dev --site-name="Vibes Rising" --auto
lando bee status | grep "Site name" | grep "Vibes Rising"
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd backdrop
lando destroy -y
lando poweroff
```
