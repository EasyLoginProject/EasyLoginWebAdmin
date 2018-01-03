#!/bin/bash

targetFolder=${ARCHIVE_DIR:-"htdocs"}

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
	mv "src/build" "$targetFolder/admin"
fi

exit $returnCode
