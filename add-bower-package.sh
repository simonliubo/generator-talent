#!/bin/bash

url='http://bower.beisen.co/packages'
name="user-selector"
curl $url -v -F "name=$name" -F "url=git@gitlab.beisen.co:js/$name.git"
