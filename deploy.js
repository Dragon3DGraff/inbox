const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3');
const { abi, evm } = require('./compile')

import { credentials } from './credentials.js'

const provider = new HDWalletProvider(
  credentials.SECRET_PHRASE,
  credentials.KEY_URL
)

const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()
  console.log('Account', accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ['Hi there'] })
    .send({ from: accounts[0], gas: '1000000' })

  console.log('Deployed to ', result.options.address);
  provider.engine.stop()
}

deploy()