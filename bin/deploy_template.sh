#!/bin/bash
source .env && curl --request PUT \
  --url "${AUTH0_DOMAIN}/api/v2/branding/templates/universal-login" \
  --header "Authorization: Bearer ${AUTH0_ACCESS_TOKEN}" \
  --header "Content-Type: text/html" \
  --data "@index.html" \
  --write-out "%{http_code}"
