#!/usr/bin/env bash

 export CHROME_BIN=/usr/bin/google-chrome
 rm -rf node_modules/ngx-bootstrap
 wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
 sudo dpkg -i google-chrome*.deb
