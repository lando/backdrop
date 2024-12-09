---
description: Learn how to get started with the Lando Backdrop recipe.
---

# Getting Started

## Requirements

Before you get started with this recipe we assume that you have:

1. [Installed Lando](https://docs.lando.dev/getting-started/installation.html) and gotten familiar with [its basics](https://docs.lando.dev/cli/)
2. [Initialized](https://docs.lando.dev/cli/init.html) a [Landofile](https://docs.lando.dev/landofile/) for your codebase for use with this recipe
3. Read about the various [services](https://docs.lando.dev/services/lando-3.html), [tooling](https://docs.lando.dev/landofile/tooling.html), [events](https://docs.lando.dev/landofile/events.html) and [routing](https://docs.lando.dev/landofile/proxy.html) Lando offers.

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

# Enter folder and install Backdrop
cd backdrop
lando bee site-install

# Create a one time login link, to log in as administrator
lando bee uli
```

