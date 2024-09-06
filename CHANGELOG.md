## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

## v1.4.1 - [September 6, 2024](https://github.com/lando/backdrop/releases/tag/v1.4.1)

## Bug Fixes

* Fixed bug causing default `proxy` settings to be clobbered by user specified ones

## Internal

* Updated DevOps to use new `lando exec`
* Updated `ubuntu` test runners to `24.04`

## v1.4.0 - [May 1, 2024](https://github.com/lando/backdrop/releases/tag/v1.4.0)

* Fixed spelling errors. [#48](https://github.com/lando/backdrop/issues/48)
* Updated mariadb plugin. [#51](https://github.com/lando/mariadb/issues/51)

## v1.3.0 - [March 8, 2024](https://github.com/lando/backdrop/releases/tag/v1.3.0)

* Updated to latest database services.

## v1.2.1 - [March 4, 2024](https://github.com/lando/backdrop/releases/tag/v1.2.1)

### Fixes

* Improved `database` selection for purposes of `config` loading, fixes some `database` bootup issues when the `database` type is overridden downstream

## v1.2.0 - [February 24, 2024](https://github.com/lando/backdrop/releases/tag/v1.2.0)

### New Features

* Added support for `php:8.3`.
* Added config testing.

### Fixes

* Fixed `CRITICAL` issue with default config files not loading correctly

### Internal

* Updated to `@lando/php@1.2.0`

## v1.0.0 - [December 7, 2023](https://github.com/lando/backdrop/releases/tag/v1.0.0)

* Changed default `php` version to `8.2`
* Changed default `database` version to `mariadb:10.6`
* Deprecated `drush` in favor of `bee` [#13](https://github.com/lando/backdrop/issues/13)
* Dialed fully for `lando update`

## v0.9.0 - [July 3, 2023](https://github.com/lando/backdrop/releases/tag/v0.9.0)

* Removed bundle-dependencies and version-bump-prompt from plugin.
* Updated package to use prepare-release-action.
* Updated documentation to reflect new release process.

## v0.8.0 - [February 26, 2022](https://github.com/lando/backdrop/releases/tag/v0.8.0)

* Add compatibility for MySQL 8.x [lando/lando#1426](https://github.com/lando/lando/issues/1462)

## v0.7.0 - [December 12, 2022](https://github.com/lando/backdrop/releases/tag/v0.7.0)

* Added bundle-dependencies to release process.
* Fixed bug in plugin dogfooding test.

## v0.6.0 - [September 8, 2022](https://github.com/lando/backdrop/releases/tag/v0.6.0)

* Hyperdrived

## v0.5.1 - [April 21, 2022](https://github.com/lando/backdrop/releases/tag/v0.5.1)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Clean up unused dependencies

## v0.5.0 - [January 10, 2022](https://github.com/lando/backdrop/releases/tag/v0.5.0)

Lando is **free** and **open source** software that relies on contributions from developers like you! If you like Lando then help us spend more time making, updating and supporting it by [contributing](https://github.com/sponsors/lando).

* Initial Release
