#!/bin/bash
cd /home/ubuntu/app
npm install
nohup node server.js > app.log 2>&1 &
