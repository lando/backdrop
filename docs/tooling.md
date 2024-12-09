---
title: Tooling
description: Learn about Lando Backdrop tooling commands like composer, php, drush, etc
---

# Tooling

By default, each Lando Backdrop recipe will also ship with helpful dev utilities.

This means you can use things like `drush`, `composer` and `php` via Lando and avoid mucking up your actual computer trying to manage `php` versions and tooling.

```bash
lando bee               Runs bee commands
lando composer          Runs composer commands
lando db-export [file]  Exports database from a service into a file
lando db-import <file>  Imports a dump file into database service
lando mysql             Drops into a MySQL shell on a database service
lando php               Runs php commands
```

**Usage examples**

```bash
# Download a module with bee
lando bee dl webform

# Check the app's installed php extensions
lando php -m
```

You can also run `lando` from inside your app directory for a complete list of commands. This is always advisable as your list of commands may not be 100% the same as above.

## Using bee

#### Configuring your root directory

If you are using a webroot besides `.`, you will need to `cd` into that directory and run `lando bee` from there. This is because many site-specific `bee` commands will only run correctly if you run `bee` from a directory that also contains a Backdrop site.

If you are annoyed by having to `cd` into that directory every time you run a `bee` command, you can get around it by [overriding](https://docs.lando.dev/landofile/tooling.html#overriding) the `bee` tooling command in your [Landofile](https://docs.lando.dev/landofile/) so that bee always runs from your `webroot`.

**Note that hard coding the `root` like this may have unforeseen and bad consequences for some `bee` commands such as `bee scr`.**

```yaml
tooling:
  bee:
    service: appserver
    cmd: /usr/local/bin/bee --root=/app/webroot
```

For full documentation of using and extending `bee`, visit the [Wiki](https://github.com/backdrop-contrib/bee/wiki)

## Using xdebug

This is just a passthrough option to the [xdebug setting](https://docs.lando.dev/plugins/php/config.html#using-xdebug) that exists on all our [php services](https://docs.lando.dev/plugins/php). The `tl;dr` is `xdebug: true` enables and configures the php xdebug extension and `xdebug: false` disables it.

```yaml
recipe: backdrop
config:
  xdebug: true|false
```

However, for more information we recommend you consult the [php service documentation](https://docs.lando.dev/plugins/php).

## Importing Your Database

Once you've started up your Backdrop site, you will need to pull in your database and files before you can really start to dev all the dev. Pulling your files is as easy as downloading an archive and extracting it to the correct location. Importing a database can be done using our helpful `lando db-import` command.

```bash
# Grab your database dump
curl -fsSL -o database.sql.gz "https://url.to.my.db/database.sql.gz"

# Import the database
# NOTE: db-import can handle uncompressed, gzipped or zipped files
# Due to restrictions in how Docker handles file sharing your database
# dump MUST exist somewhere inside of your app directory.
lando db-import database.sql.gz
```

You can learn more about the `db-import` command [over here](https://docs.lando.dev/guides/db-import.html).
