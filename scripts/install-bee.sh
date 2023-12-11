#!/bin/sh

set -e

# args
version="${1:-"1.x-1.x"}"

# computed things
burl="https://github.com/backdrop-contrib/bee/archive/${version}.zip"
bfolder="bee-${version}"
btmp="/tmp/${bfolder}"

# clean and ensure
rm -rf "$btmp" "$btmp.zip" ~/.bee/$bfolder
mkdir -p /tmp /usr/local/bin ~/.bee

# fetch
wget -qO "$btmp.zip" "$burl" && unzip -qo "$btmp.zip" -d ~/.bee && rm "$btmp.zip"
