
const TruffleConfig = require('../truffle');

const P2Pay = artifacts.require("P2Pay");

module.exports = function(deployer, network, accounts) {
  const config = TruffleConfig.networks[network];
  if(config.network_id == 15) {
    console.log('>> Unlocking account ' + config.from);
    web3.eth.personal.unlockAccount(config.from, '123', 36000);
    deployer.deploy(P2Pay,{gas:4682702});
  } else
    deployer.deploy(P2Pay);
};

//var SimpleMultiSig = artifacts.require("SimpleMultiSig");
//module.exports = function(deployer, network, accounts) {
//  deployer.deploy(SimpleMultiSig, 2, accounts, 4447);
//};
