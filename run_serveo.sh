#!/bin/bash

ssh -o ServerAliveInterval=60 -R viguz:80:localhost:8080 serveo.net &

sleep 3

ssh -o ServerAliveInterval=60 -R viguzbackend:80:localhost:3000 serveo.net &



