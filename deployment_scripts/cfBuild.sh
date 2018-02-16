#!/bin/bash

if [ -d "htdocs/admin" ]
then
	rm -rf "htdocs/admin"
fi

cd src
npm install
npm run build
returnCode=$?
cd ..

if [ $returnCode -eq 0 ]
then
	mkdir -p "htdocs"
	mv "src/build" "htdocs/admin"
fi

if [ -n "${ARCHIVE_DIR}" ] 
then
	mkdir -p "${ARCHIVE_DIR}"
	mv htdocs "${ARCHIVE_DIR}/htdocs"
fi

exit $returnCode
