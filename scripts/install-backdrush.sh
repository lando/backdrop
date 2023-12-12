#!/bin/sh

set -e

# args
version="${1:-"1.4.0"}"
drush="${2:-"8.4.12"}"

# computed things
burl="https://github.com/backdrop-contrib/backdrop-drush-extension/archive/${version}.tar.gz"
durl="https://github.com/drush-ops/drush/releases/download/${drush}/drush.phar"
dtmp="/tmp/drush.phar"
dbin="/usr/local/bin/drush"

# install drush if we dont have it
# @TODO: what about different versions? in the recipe maybe some validation?
if ! command -v drush &> /dev/null; then
  # cleanup
  mkdir -p /tmp /usr/local/bin && rm -rf "$dtmp"
  # fetch
  curl -fsSL -o "$dtmp" "$durl"
  # execute
  chmod +x "$dtmp"
  # move and finalize
  mv "$dtmp" "$dbin" && drush --version
fi

# get the backdrush ext and install it
curl -fsSL "$burl" | tar -xz --strip-components=1 -C ~/.drush

# clear drush caches
drush cc drush
