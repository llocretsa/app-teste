#!/bin/bash

STATUS="$(sudo systemctl is-active node)"
if [ "${STATUS}" = "active" ]; then
    echo sudo pkill node
else
    echo " Service not running... so exiting "
    exit 1
fi

#Stopping existing node servers
echo "Stopping any existing node servers"
# sudo pkill node