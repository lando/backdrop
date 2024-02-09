---
description: Learn how to get started with the Lando Backdrop recipe.
---

# Getting Started

## Requirements

Before you get started with this recipe we assume that you have:

1. [Installed Lando](https://docs.lando.dev/getting-started/installation.html) and gotten familiar with [its basics](https://docs.lando.dev/cli/)
2. [Initialized](https://docs.lando.dev/cli/init.html) a [Landofile](https://docs.lando.dev/core/v3) for your codebase for use with this recipe
3. Read about the various [services](https://docs.lando.dev/core/v3/lando-service.html), [tooling](https://docs.lando.dev/core/v3/tooling.html), [events](https://docs.lando.dev/core/v3/events.html) and [routing](https://docs.lando.dev/core/v3/proxy.html) Lando offers.

## Quick Start

Try out the relevant commands below to spin up a new Landoified vanilla Backdrop site.

```bash
# Create folder and enter it
mkdir backdrop && cd backdrop

# Initialize a backdrop recipe using the latest backdrop version
lando init \
  --source remote \
  --remote-url https://objects.githubusercontent.com/github-production-release-asset-2e65be/12285928/c6a129e8-867d-45b3-a307-c46e22076739?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20240201%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240201T224039Z&X-Amz-Expires=300&X-Amz-Signature=9edb500048b3a1bddb9f26468aa97a4fdb85951e90232de6f590231752dfcb52&X-Amz-SignedHeaders=host&actor_id=0&key_id=0&repo_id=12285928&response-content-disposition=attachment%3B%20filename%3Dbackdrop.zip&response-content-type=application%2Foctet-stream \
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

