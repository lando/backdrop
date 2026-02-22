## {{ UNRELEASED_VERSION }} - [{{ UNRELEASED_DATE }}]({{ UNRELEASED_LINK }})

* Updated `@lando/php` to `^1.11.1` [#87](https://github.com/lando/backdrop/issues/87)

## v1.9.1 - [February 19, 2026](https://github.com/lando/backdrop/releases/tag/v1.9.1)

* Updated `@lando/php` to `^1.11.0` for MySQL client auto-detection fix [#82](https://github.com/lando/backdrop/pull/82)

## v1.9.0 - [February 18, 2026](https://github.com/lando/backdrop/releases/tag/v1.9.0)

* Added dependabot config
* Bumped actions/add-to-project from 1.0.0 to 1.0.2 [#76](https://github.com/lando/backdrop/pull/76)
* Bumped actions/cache from 4 to 5 [#77](https://github.com/lando/backdrop/pull/77)
* Bumped actions/checkout from 4 to 6 [#74](https://github.com/lando/backdrop/pull/74)
* Bumped actions/setup-node from 4 to 6 [#78](https://github.com/lando/backdrop/pull/78)
* Fixed release workflow trigger from `created` to `published`
* Updated to [@lando/argv@1.2.0](https://github.com/lando/argv/releases/tag/v1.2.0) [#72](https://github.com/lando/backdrop/pull/72)
* Updated to [@lando/mariadb@1.8.0](https://github.com/lando/mariadb/releases/tag/v1.8.0) [#75](https://github.com/lando/backdrop/pull/75)
* Updated to [@lando/php@1.10.0](https://github.com/lando/php/releases/tag/v1.10.0) [#71](https://github.com/lando/backdrop/pull/71)
* Updated to [@lando/postgres@1.6.0](https://github.com/lando/postgres/releases/tag/v1.6.0) [#73](https://github.com/lando/backdrop/pull/73)

## v1.8.0 - [September 4, 2025](https://github.com/lando/backdrop/releases/tag/v1.8.0)

* Switched images to [bitnamilegacy](https://github.com/bitnami/containers/issues/83267) namespace
* Updated to [@lando/mariadb@1.7.0](https://github.com/lando/mariadb/releases/tag/v1.7.0)
* Updated to [@lando/mysql@1.6.0](https://github.com/lando/mysql/releases/tag/v1.6.0)
* Updated to [@lando/php@1.8.0](https://github.com/lando/php/releases/tag/v1.8.0)
* Updated to [@lando/postgres@1.5.0](https://github.com/lando/postgres/releases/tag/v1.5.0)
* Updated default `nginx` version to `1.29`

## v1.7.0 - [December 9, 2024](https://github.com/lando/backdrop/releases/tag/v1.7.0)

* Optimized for `midcore`
* Updated to [@lando/mariadb@1.6.3](https://github.com/lando/mariadb/releases/tag/v1.6.3).
* Updated to [@lando/mssql@1.4.3](https://github.com/lando/mssql/releases/tag/v1.4.3).
* Updated to [@lando/mysql@1.4.4](https://github.com/lando/mysql/releases/tag/v1.4.4).
* Updated to [@lando/php@1.6.3](https://github.com/lando/php/releases/tag/v1.6.3).
* Updated to [@lando/postgres@1.4.4](https://github.com/lando/postgres/releases/tag/v1.4.4).

## v1.6.3 - [December 6, 2024](https://github.com/lando/backdrop/releases/tag/v1.6.3)

* Updated the version index.md to get "Docuverse" page to build correctly.

## v1.6.2 - [December 4, 2024](https://github.com/lando/backdrop/releases/tag/v1.6.2)

* Updated to [@lando/vitepress-theme-default-plus@v1.1.0-beta.24](https://github.com/lando/vitepress-theme-default-plus/releases/tag/v1.1.0-beta.24).

## v1.6.1 - [November 4, 2024](https://github.com/lando/backdrop/releases/tag/v1.6.1)

* Updated to [@lando/vitepress-theme-default-plus@v1.1.0-beta.18](https://github.com/lando/vitepress-theme-default-plus/releases/tag/v1.1.0-beta.18).

## v1.6.0 - [October 25, 2024](https://github.com/lando/backdrop/releases/tag/v1.6.0)

* Updated release process to generate an edge release when stable releases are created.
* Removed unnecessary dependency lando/nginx.

## v1.5.0 - [September 30, 2024](https://github.com/lando/backdrop/releases/tag/v1.5.0)

* Updated lando/mariadb to v1.5.0.
* Updated lando/mysql to v1.3.0.

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
