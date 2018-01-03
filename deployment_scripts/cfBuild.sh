#!/bin/bash

if [ -d htdocs/admin ]
then
	rm -rf htdocs/admin
fi

cd src
npm install
npm run build
returnCode=$?
cd ..

if [ $returnCode -eq 0 ]
then
	mv src/build htdocs/admin
fi

exit $returnCode
