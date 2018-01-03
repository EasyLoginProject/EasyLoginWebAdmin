#!/bin/bash

if [ -n "$ARCHIVE_DIR" ] 
then
	cp "$ARCHIVE_DIR" htdocs
fi

cf push "${CF_APP}"

exit 0
