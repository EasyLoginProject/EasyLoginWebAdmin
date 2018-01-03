#!/bin/bash

cd src
npm install
npm run build
cd ..

cf push "${CF_APP}"

exit 0
