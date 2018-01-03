#!/bin/bash

if [ -n "${ARCHIVE_DIR}" ] 
then
	tar xvzf "${ARCHIVE_DIR}/EasyLoginWebAdmin.tgz"
	echo "${ARCHIVE_DIR}" >> .cfignore
fi

if [ -n "${CF_APP}" ] 
then
	cf push "${CF_APP}"
fi

exit 0
