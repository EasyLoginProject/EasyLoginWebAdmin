#!/bin/bash

if [ -n "${ARCHIVE_DIR}" ] 
then
	mv "${ARCHIVE_DIR}/htdocs" htdocs
fi

if [ -n "${CF_APP}" ] 
then
	cf push "${CF_APP}"
fi

exit 0
