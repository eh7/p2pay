
var SolidityContractObject = ;

var DisberseContract = web3.eth.contract(JSON.parse(SolidityContractObject.contracts["../contracts/Disberse.sol:Disberse"].abi));

personal.unlockAccount(eth.accounts[0]);

var Disberse = DisberseContract.new({ from: eth.accounts[0], data: "0x" + SolidityContractObject.contracts["../contracts/Disberse.sol:Disberse"].bin, gas: 2500000},
  function (e, contract) {
    if(!e) {  
      if(!contract.address) {
        console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...");
      } else {
        console.log("Contract mined! Address: " + contract.address);
        console.log(contract);
      } 
    }
  }
);

