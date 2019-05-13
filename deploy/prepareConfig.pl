if($ARGV[0] eq ""){
  print "USAGE: $0 <solidity file path>\n";
  exit(1);
}

my $sol_file = $ARGV[0];

#my $js_file = $ARGV[0];
#$js_file =~ s/sol$/js/;

my $js_file = "deploy.js";
my $js_init_file = "init.js";

my $pwd = `pwd`;
chomp($pwd);

my $solcOutput = `solc --optimize --abi $sol_file`;
chomp($solcOutput);
print $solcOutput;
open(OUT,">./abi");
print OUT <<EOF;
$solcOutput
EOF
close(OUT);

my $solcOutput = `solc --optimize --combined-json abi,bin,interface $sol_file`;
chomp($solcOutput);

open(OUT,">".$js_file);
print OUT <<EOF;

var SolidityContractObject = $solcOutput;

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

EOF
close(OUT);

print <<EOF;
Run the following in geth;

loadScript("$pwd/$js_file")

EOF

print "Then Enter returned contract address: ";
my $address = <STDIN>;
chomp($address);


open(OUT,">".$js_init_file);
print OUT <<EOF;

var SolidityContractObject = $solcOutput;

abi = JSON.parse(SolidityContractObject.contracts["../contracts/Disberse.sol:Disberse"].abi);

address = '$address';

var Disberse = web3.eth.contract(abi).at(address);

var event = Disberse.allEvents();
event.watch(function(error, result){
  if (!error)
  {
    str = JSON.stringify(result)
    console.log(str);
  }
});


EOF
close(OUT);
