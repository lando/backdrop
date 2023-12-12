#!/bin/sh

set -e

# args
version="${1:-"1.x-1.x"}"

# computed things
burl="https://github.com/backdrop-contrib/bee/archive/${version}.zip"
bfolder="bee-${version}"
btmp="/tmp/${bfolder}"

# clean and ensure
rm -rf "$btmp" "$btmp.zip" "/var/www/.bee/$bfolder"
mkdir -p /tmp /usr/local/bin /var/www/.bee

# fetch
wget -qO "$btmp.zip" "$burl" && unzip -qo "$btmp.zip" -d "/var/www/.bee" && rm "$btmp.zip"

# replace symlink
ln -sf /var/www/.bee/${bfolder}/bee.php /usr/local/bin/bee
