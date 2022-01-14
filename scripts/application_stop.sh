#!/bin/bash

#Stopping existing node servers
echo "Stopping any existing node servers"
# sudo pkill node

sudo systemctl is-active --quiet node || sudo pkill node