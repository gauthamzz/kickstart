# Kickstart

Etherum based kickstart clone.

Contains 2 contracts:

1. Campaigns to manage diffrent campaigns. 
2. CampaignFactory to generate Campaign contract.

## Install

`npm install ganache-cil mocha web3@1.0.0-beta.26 fs-extra`

## Tests

run `npm run test` uses mocha library for tests.

## deploy contract 

`cd ethereum`
`node deploy.js`

Will create JSON for contracts in `/ethereum/build` folder.
