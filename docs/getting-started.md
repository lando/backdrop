---
description: Learn how to get started with the Lando Backdrop recipe.
---

# Getting Started

## Requirements

Before you get started with this recipe we assume that you have:

1. [Installed Lando](https://docs.lando.dev/basics/installation.html) and gotten familiar with [its basics](https://docs.lando.dev/basics/)
2. [Initialized](https://docs.lando.dev/basics/init.html) a [Landofile](https://docs.lando.dev/config/lando.html) for your codebase for use with this recipe
3. Read about the various [services](https://docs.lando.dev/config/services.html), [tooling](https://docs.lando.dev/config/tooling.html), [events](https://docs.lando.dev/config/events.html) and [routing](https://docs.lando.dev/config/proxy.html) Lando offers.

## Quick Start

Try out the relevant commands below to spin up a new Landoified vanilla Backdrop site.

```bash
# Create folder and enter it
mkdir backdrop && cd backdrop

# Initialize a backdrop recipe using the latest backdrop version
lando init \
  --source remote \
  --remote-url https://github.com/backdrop/backdrop/releases/latest/download/backdrop.zip \
  --recipe backdrop \
  --webroot backdrop \
  --name my-first-backdrop-app

# Start it up
lando start

# List information about this app.
lando info

# Enter folder and install Backdrop, Drush integration is included in Lando
# https://github.com/backdrop-contrib/backdrop-drush-extension
cd backdrop
drush site:install --db-url=mysql://backdrop:backdrop@database/backdrop -y

# Create a one time login link, to log in as administrator
drush uli -l https://my-first-backdrop-app.lndo.site/
```

## Custom Installation

This plugin is included with Lando by default. That means if you have Lando version `3.0.8` or higher then this plugin is already installed!

However if you would like to manually install the plugin, update it to the bleeding edge or install a particular version then use the below. Note that this installation method requires Lando `3.5.0+`.

:::: code-group
::: code-group-item DOCKER
```bash:no-line-numbers
# Ensure you have a global plugins directory
mkdir -p ~/.lando/plugins

# Install plugin
# NOTE: Modify the "yarn add @lando/backdrop" line to install a particular version eg
# yarn add @lando/platform@0.5.2
docker run --rm -it -v ${HOME}/.lando/plugins:/plugins -w /tmp node:14-alpine sh -c \
  "yarn init -y \
  && yarn add @lando/backdrop --production --flat --no-default-rc --no-lockfile --link-duplicates \
  && yarn install --production --cwd /tmp/node_modules/@lando/backdrop \
  && mkdir -p /plugins/@lando \
  && mv --force /tmp/node_modules/@lando/backdrop /plugins/@lando/backdrop"

# Rebuild the plugin cache
lando --clear
```
:::
::: code-group-item HYPERDRIVE
```bash:no-line-numbers
# @TODO
# @NOTE: This doesn't actaully work yet
hyperdrive install @lando/backdrop
```
::::

You should be able to verify the plugin is installed by running `lando config --path plugins` and checking for `@lando/backdrop`. This command will also show you _where_ the plugin is being loaded from.
