
var SolidityContractObject = ;

abi = JSON.parse(SolidityContractObject.contracts["../contracts/Disberse.sol:Disberse"].abi);

address = 'exit';

var Disberse = web3.eth.contract(abi).at(address);

var event = Disberse.allEvents();
event.watch(function(error, result){
  if (!error)
  {
    str = JSON.stringify(result)
    console.log(str);
  }
});


