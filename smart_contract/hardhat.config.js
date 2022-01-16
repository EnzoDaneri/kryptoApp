// https://eth-ropsten.alchemyapi.io/v2/OzGSYh6PHAMvaul8O3bAIE4NT69m0dSq


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/OzGSYh6PHAMvaul8O3bAIE4NT69m0dSq',
      accounts: ['7df0b33890d8d4558160a32211c5ba9ba4fa0f4ace79fd48299f486370e1cd01']
    }
  }
}