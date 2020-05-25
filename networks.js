const { projectId, mnemonic } = require('./secrets.json');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  networks: {
    test: {
      protocol: 'http',
      host: '127.0.0.1',
      port: 7545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    ropsten: {
      provider: () => new HDWalletProvider(
        mnemonic, 'https://ropsten.infura.io/v3/65ea3ed956c44aca8c46cb48a782712b'
      ),
      networkId: 3,
      gasPrice: 10e9
    }
  },
};