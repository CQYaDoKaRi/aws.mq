#!/bin/bash
npm install

# make lambda_pub
cp index_lambda_pub.js index.js
zip -r lambda_pub.zip node_modules src index.js
rm -f index.js
