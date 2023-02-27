Backdrop Example
================

This example exists primarily to test the following documentation:

* [Backdrop Recipe](https://docs.devwithlando.io/tutorials/backdrop.html)

Start up tests
--------------

Run the following commands to get up and running with this example.

```bash
# Should poweroff
lando poweroff

# Should initialize the latest Backdrop codebase
rm -rf mysql8 && mkdir -p mysql8 && cd mysql8
lando init --source remote --remote-url https://github.com/backdrop/backdrop/releases/download/1.20.3/backdrop.zip --recipe backdrop --webroot backdrop --name lando-backdrop-mysql8 --option database=mysql:8.0.22

# Should start up successfully
cd mysql8
echo -e "\nplugins:\n  \"@lando/backdrop/\": ./../../" >> .lando.yml
lando start
```

Verification commands
---------------------

Run the following commands to validate things are rolling as they should.

```bash
# Should return the Backdrop installation page by default
cd mysql8
lando ssh -s appserver -c "curl -L localhost" | grep "Backdrop CMS 1"

# Should use 7.4 as the default php version
cd mysql8
lando php -v | grep "PHP 7.4"

# Should be running apache 2.4 by default
cd mysql8
lando ssh -s appserver -c "apachectl -V | grep 2.4"
lando ssh -s appserver -c "curl -IL localhost" | grep Server | grep 2.4

# Should be running mysql 8.0.x by default
cd mysql8
lando mysql -V | grep 8.0

# Should not enable xdebug by default
cd mysql8
lando php -m | grep xdebug || echo $? | grep 1

# Should use the default database connection info
cd mysql8
lando mysql -ubackdrop -pbackdrop backdrop -e quit

# Should be able to install Backdrop
cd mysql8/backdrop
lando drush si --db-url=mysql://backdrop:backdrop@database/backdrop -y

# Should use drush 8.3.x by default
cd mysql8/backdrop
lando drush version | grep 8.3
```

Destroy tests
-------------

Run the following commands to trash this app like nothing ever happened.

```bash
# Should be destroyed with success
cd mysql8
lando destroy -y
lando poweroff
```
