#!/bin/bash

bash travis-scripts/run-puppeteer-tests;
PUPPETEER=$?

if [[ "$PUPPETEER" == "0" ]]; then
  echo -e "\e[92mE2E TESTS OK"
  exit 0;
else
  echo -e "\e[91mE2E TESTS FAILED"
  exit 255;
fi
