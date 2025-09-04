---
title: Configuration
description: Learn how to configure the Lando Backdrop recipe.
---

# Configuration

While Lando [recipes](https://docs.lando.dev/landofile/recipes.html) set sane defaults so they work out of the box, they are also [configurable](https://docs.lando.dev/landofile/recipes.html#config).

Here are the configuration options, set to the default values, for this recipe's [Landofile](https://docs.lando.dev/landofile/). If you are unsure about where this goes or what this means, we *highly recommend* scanning the [recipes documentation](https://docs.lando.dev/landofile/recipes.html) to get a good handle on how the magicks work.

```yaml
recipe: backdrop
config:
  bee: 1.x-1.x
  composer_version: 2
  database: mysql:5.7
  php: 8.2
  via: apache:2.4
  webroot: .
  xdebug: false
  config:
    database: SEE BELOW
    php: SEE BELOW
    server: SEE BELOW
    vhosts: SEE BELOW

  # DEPRECATED
  backdrush: false
```

Note that if the above config options are not enough, all Lando recipes can be further [extended and overridden](https://docs.lando.dev/landofile/recipes.html#extending-and-overriding-recipes).

## Choosing a php version

You can set `php` to any version that is available in our [php service](https://docs.lando.dev/plugins/php/index.html). However, you should consult the [Backdrop requirements](https://docs.backdropcms.org/documentation/system-requirements) to make sure that version is actually supported by Backdrop itself.

The [recipe config](https://docs.lando.dev/landofile/recipes.html#config) to set the Backdrop recipe to use `php` version `5.5` is shown below:

```yaml
recipe: backdrop
config:
  php: '5.5'
```

## Choosing a composer version

You can set `composer_version` to any version that is available in our [php service](https://docs.lando.dev/plugins/php/config.html#installing-composer).

```yaml
recipe: backdrop
config:
  composer_version: '1.10.1'
```

## Choosing a web server

By default, this recipe will be served by the default version of our [apache](https://docs.lando.dev/plugins/apache/index.html) service but you can also switch this to use [`nginx`](https://docs.lando.dev/plugins/nginx/index.html). We *highly recommend* you check out both the [apache](https://docs.lando.dev/plugins/apache/index.html) and [nginx](https://docs.lando.dev/plugins/nginx/index.html) services before you change the default `via`.

#### With Apache (default)

```yaml
recipe: backdrop
config:
  via: apache
```

#### With nginx

```yaml
recipe: backdrop
config:
  via: nginx
```

## Choosing a database backend

By default, this recipe will use the default version of our [mysql](https://docs.lando.dev/plugins/mysql/index.html) service as the database backend but you can also switch this to use [`mariadb`](https://docs.lando.dev/plugins/mariadb/index.html) instead. Note that you can also specify a version *as long as it is a version available for use with lando* for either `mysql` or `mariadb`.

If you are unsure about how to configure the `database`, we *highly recommend* you check out both the [mysql](https://docs.lando.dev/plugins/mysql/index.html) and [mariadb](https://docs.lando.dev/plugins/mariadb/index.html) services before you change the default.

Also note that like the configuration of the `php` version, you should consult the [Backdrop requirements](https://docs.backdropcms.org/documentation/system-requirements) to make sure the `database` and `version` you select is actually supported by Backdrop itself.

#### Using MySQL (default)

```yaml
recipe: backdrop
config:
  database: mysql
```

#### Using MariaDB

```yaml
recipe: backdrop
config:
  database: mariadb
```

#### Using a custom version

```yaml
recipe: backdrop
config:
  database: mariadb:10.2
```

## Connecting to your database

Unlike other unnamed php-based CMSes, Backdrop's database connection information can be set by an environmental variable named [`BACKDROP_SETTINGS`](https://docs.backdropcms.org/api/backdrop/core%21includes%21bootstrap.inc/function/backdrop_settings_initialize/1). Lando will set this variable for you which means that unless you explicitly hijack the default functionality, *you should not need to do anything* to configure your database connection.

You can also examine and use this variable in-code similarly to how you would with [`LANDO_INFO`](https://docs.lando.dev/guides/lando-info.html).

```bash
lando php -r "print_r(getenv('BACKDROP_SETTINGS'));"
# {"databases":{"default":{"default":{"driver":"mysql","database":"backdrop","username":"backdrop","password":"backdrop","host":"database","port":3306}}}}
```

If you find that you still cannot connect to your database, the default information about your Backdrop database is shown below:

Note that the `host` is not `localhost` but `database`.

```yaml
database: backdrop
username: backdrop
password: backdrop
host: database
```

You can get also get the above information, and more, by using the [`lando info`](https://docs.lando.dev/cli/info.html) command.

## Using custom config files

You may need to override our [default Backdrop config](https://github.com/lando/backdrop/tree/main/builders) with your own.

If you do this, you must use files that exist inside your application and express them relative to your project root as shown below:

Note that the default files may change based on how you set both `ssl` and `via`. Also note that the `vhosts` and `server` config will be either for `apache` or `nginx` depending on how you set `via`. We *highly recommend* you check out both the [apache](https://docs.lando.dev/plugins/apache/config.html) and [nginx](https://docs.lando.dev/plugins/nginx/config.html) if you plan to use a custom `vhosts` or `server` config.

**A hypothetical project**

Note that you can put your configuration files anywhere inside your application directory. We use a `config` directory but you can call it whatever you want such as `.lando` in the example below:

```bash
./
|-- config
   |-- default.conf
   |-- my-custom.cnf
   |-- php.ini
   |-- server.conf
|-- index.php
|-- .lando.yml
```

**Landofile using custom backdrop config**

```yaml
recipe: backdrop
config:
  config:
    database: config/my-custom.cnf
    php: config/php.ini
    server: config/server.conf
    vhosts: config/default.conf
```
