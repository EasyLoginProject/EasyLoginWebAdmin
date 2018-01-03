#!/bin/bash

targetFolder=${ARCHIVE_DIR:-"htdocs"}

if [ -d "$targetFolder/admin" ]
then
	rm -rf "$targetFolder/admin"
fi

cd src
npm install
npm run build
returnCode=$?
cd ..

if [ $returnCode -eq 0 ]
then
	mkdir -p "$targetFolder"
	mv "src/build" "$targetFolder/admin"
fi

exit $returnCode
