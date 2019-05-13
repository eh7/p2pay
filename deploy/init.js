
var SolidityContractObject = {"contracts":{"../contracts/Disberse.sol:Disberse":{"abi":"[{\"constant\":false,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"},{\"name\":\"sigV\",\"type\":\"uint8[]\"},{\"name\":\"sigR\",\"type\":\"bytes32[]\"},{\"name\":\"sigS\",\"type\":\"bytes32[]\"},{\"name\":\"_h\",\"type\":\"bytes32[]\"},{\"name\":\"signers\",\"type\":\"address[]\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_type\",\"type\":\"uint256\"},{\"name\":\"projectName\",\"type\":\"bytes8\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_txType\",\"type\":\"uint256\"}],\"name\":\"verify\",\"outputs\":[{\"name\":\"status\",\"type\":\"uint256\"},{\"name\":\"retSigners\",\"type\":\"address[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"project\",\"type\":\"bytes8\"},{\"name\":\"token_type_in\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account_address\",\"type\":\"address\"},{\"name\":\"token_type_in\",\"type\":\"uint256\"}],\"name\":\"getBalance\",\"outputs\":[{\"name\":\"return_balance\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"orgAddress\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"},{\"name\":\"sigV\",\"type\":\"uint8[]\"},{\"name\":\"sigR\",\"type\":\"bytes32[]\"},{\"name\":\"sigS\",\"type\":\"bytes32[]\"},{\"name\":\"_h\",\"type\":\"bytes32[]\"},{\"name\":\"signers\",\"type\":\"address[]\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_type\",\"type\":\"uint256\"},{\"name\":\"projectName\",\"type\":\"bytes8\"},{\"name\":\"_to\",\"type\":\"address\"},{\"name\":\"_txType\",\"type\":\"uint256\"}],\"name\":\"verifyAndSend\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_amount\",\"type\":\"uint256\"},{\"name\":\"_ref\",\"type\":\"bytes8\"},{\"name\":\"token_type_in\",\"type\":\"uint256\"}],\"name\":\"deposit\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"},{\"name\":\"_orgAddress\",\"type\":\"address\"},{\"name\":\"_threshold\",\"type\":\"uint256\"},{\"name\":\"_owners\",\"type\":\"address[]\"}],\"name\":\"updateOrg\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"},{\"name\":\"\",\"type\":\"address\"}],\"name\":\"orgSignerCheck\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"}],\"name\":\"getSingersAndThreshold\",\"outputs\":[{\"name\":\"signers\",\"type\":\"address[]\"},{\"name\":\"threshold\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"},{\"name\":\"_orgAddress\",\"type\":\"address\"},{\"name\":\"_threshold\",\"type\":\"uint256\"},{\"name\":\"_owners\",\"type\":\"address[]\"}],\"name\":\"newOrg\",\"outputs\":[{\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"account_address\",\"type\":\"address\"}],\"name\":\"getBalances\",\"outputs\":[{\"name\":\"GBP\",\"type\":\"uint256\"},{\"name\":\"USD\",\"type\":\"uint256\"},{\"name\":\"EUR\",\"type\":\"uint256\"},{\"name\":\"AUD\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_amount\",\"type\":\"uint256\"},{\"name\":\"_ref\",\"type\":\"bytes8\"},{\"name\":\"token_type_in\",\"type\":\"uint256\"}],\"name\":\"redeem\",\"outputs\":[{\"name\":\"success\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_amount\",\"type\":\"uint256\"},{\"name\":\"_ref\",\"type\":\"bytes8\"},{\"name\":\"token_type_in\",\"type\":\"uint256\"},{\"name\":\"accountAddress\",\"type\":\"address\"}],\"name\":\"depositToAddress\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_orgHash\",\"type\":\"bytes32\"},{\"name\":\"sigV\",\"type\":\"uint8[]\"},{\"name\":\"sigR\",\"type\":\"bytes32[]\"},{\"name\":\"sigS\",\"type\":\"bytes32[]\"},{\"name\":\"_h\",\"type\":\"bytes32[]\"},{\"name\":\"signers\",\"type\":\"address[]\"},{\"name\":\"_value\",\"type\":\"uint256\"},{\"name\":\"_type\",\"type\":\"uint256\"},{\"name\":\"projectName\",\"type\":\"bytes8\"}],\"name\":\"verifyWithPrefixAndSend\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"orgOwner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"payable\":true,\"stateMutability\":\"payable\",\"type\":\"fallback\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_number\",\"type\":\"uint256\"}],\"name\":\"Int\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_address\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"status\",\"type\":\"bool\"}],\"name\":\"Addr\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_address0\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_address1\",\"type\":\"address\"}],\"name\":\"Addrs\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_code\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"_orgHash\",\"type\":\"bytes32\"}],\"name\":\"Status\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"project_ref\",\"type\":\"bytes8\"},{\"indexed\":false,\"name\":\"status\",\"type\":\"uint8\"},{\"indexed\":false,\"name\":\"token_type\",\"type\":\"uint256\"}],\"name\":\"Deposit\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"_to\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"project_ref\",\"type\":\"bytes8\"},{\"indexed\":false,\"name\":\"status\",\"type\":\"uint8\"},{\"indexed\":false,\"name\":\"token_type\",\"type\":\"uint256\"}],\"name\":\"Transfered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"_from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"_value\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"project_ref\",\"type\":\"bytes8\"},{\"indexed\":false,\"name\":\"status\",\"type\":\"uint8\"},{\"indexed\":false,\"name\":\"token_type\",\"type\":\"uint256\"}],\"name\":\"Redeemed\",\"type\":\"event\"}]","bin":"60806040526000805460a060020a60ff0219167402000000000000000000000000000000000000000017905534801561003757600080fd5b5060008054600160a060020a031916331790556120cd806100596000396000f3fe608060405260043610610131576000357c0100000000000000000000000000000000000000000000000000000000900480638136ad10116100bd578063dd39d20511610081578063dd39d20514610b94578063e1133a3a14610bd4578063f1022b7014610c23578063f2fde38b14610f00578063fd674cc314610f3357610131565b80638136ad10146109b25780638da5cb5b146109eb5780638e9473ca14610a00578063a80a06eb14610a6f578063c84aae1714610b3b57610131565b806336ad9c841161010457806336ad9c84146105595780633a73d16e1461059f57806341c0e1b5146108915780636221d5b9146108a65780637ad79e5f146108e657610131565b80630c2e6fde146101335780631c357560146104805780632b04e840146104e3578063313ce5671461052e575b005b34801561013f57600080fd5b50610425600480360361016081101561015757600080fd5b8135919081019060408101602082013564010000000081111561017957600080fd5b82018360208201111561018b57600080fd5b803590602001918460208302840111640100000000831117156101ad57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156101fd57600080fd5b82018360208201111561020f57600080fd5b8035906020019184602083028401116401000000008311171561023157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561028157600080fd5b82018360208201111561029357600080fd5b803590602001918460208302840111640100000000831117156102b557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561030557600080fd5b82018360208201111561031757600080fd5b8035906020019184602083028401116401000000008311171561033957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561038957600080fd5b82018360208201111561039b57600080fd5b803590602001918460208302840111640100000000831117156103bd57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590600160c060020a031960408201351690600160a060020a036060820135169060800135610f5d565b6040518083815260200180602001828103825283818151815260200191508051906020019060200280838360005b8381101561046b578181015183820152602001610453565b50505050905001935050505060405180910390f35b34801561048c57600080fd5b506104cf600480360360808110156104a357600080fd5b50600160a060020a0381351690602081013590600160c060020a03196040820135169060600135611043565b604080519115158252519081900360200190f35b3480156104ef57600080fd5b5061051c6004803603604081101561050657600080fd5b50600160a060020a0381351690602001356111aa565b60408051918252519081900360200190f35b34801561053a57600080fd5b50610543611205565b6040805160ff9092168252519081900360200190f35b34801561056557600080fd5b506105836004803603602081101561057c57600080fd5b5035611226565b60408051600160a060020a039092168252519081900360200190f35b3480156105ab57600080fd5b5061013160048036036101608110156105c357600080fd5b813591908101906040810160208201356401000000008111156105e557600080fd5b8201836020820111156105f757600080fd5b8035906020019184602083028401116401000000008311171561061957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561066957600080fd5b82018360208201111561067b57600080fd5b8035906020019184602083028401116401000000008311171561069d57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156106ed57600080fd5b8201836020820111156106ff57600080fd5b8035906020019184602083028401116401000000008311171561072157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561077157600080fd5b82018360208201111561078357600080fd5b803590602001918460208302840111640100000000831117156107a557600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156107f557600080fd5b82018360208201111561080757600080fd5b8035906020019184602083028401116401000000008311171561082957600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092955050823593505050602081013590600160c060020a031960408201351690600160a060020a036060820135169060800135611241565b34801561089d57600080fd5b50610131611521565b3480156108b257600080fd5b50610131600480360360608110156108c957600080fd5b50803590600160c060020a0319602082013516906040013561153b565b3480156108f257600080fd5b506104cf6004803603608081101561090957600080fd5b813591600160a060020a03602082013516916040820135919081019060808101606082013564010000000081111561094057600080fd5b82018360208201111561095257600080fd5b8035906020019184602083028401116401000000008311171561097457600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295506115b4945050505050565b3480156109be57600080fd5b506104cf600480360360408110156109d557600080fd5b5080359060200135600160a060020a03166117e3565b3480156109f757600080fd5b50610583611803565b348015610a0c57600080fd5b50610a2a60048036036020811015610a2357600080fd5b5035611812565b6040518080602001838152602001828103825284818151815260200191508051906020019060200280838360008381101561046b578181015183820152602001610453565b348015610a7b57600080fd5b506104cf60048036036080811015610a9257600080fd5b813591600160a060020a036020820135169160408201359190810190608081016060820135640100000000811115610ac957600080fd5b820183602082011115610adb57600080fd5b80359060200191846020830284011164010000000083111715610afd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550611890945050505050565b348015610b4757600080fd5b50610b6e60048036036020811015610b5e57600080fd5b5035600160a060020a0316611a44565b604080519485526020850193909352838301919091526060830152519081900360800190f35b348015610ba057600080fd5b506104cf60048036036060811015610bb757600080fd5b50803590600160c060020a03196020820135169060400135611ad0565b348015610be057600080fd5b5061013160048036036080811015610bf757600080fd5b508035906020810135600160c060020a0319169060408101359060600135600160a060020a0316611bfe565b348015610c2f57600080fd5b506101316004803603610120811015610c4757600080fd5b81359190810190604081016020820135640100000000811115610c6957600080fd5b820183602082011115610c7b57600080fd5b80359060200191846020830284011164010000000083111715610c9d57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610ced57600080fd5b820183602082011115610cff57600080fd5b80359060200191846020830284011164010000000083111715610d2157600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610d7157600080fd5b820183602082011115610d8357600080fd5b80359060200191846020830284011164010000000083111715610da557600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610df557600080fd5b820183602082011115610e0757600080fd5b80359060200191846020830284011164010000000083111715610e2957600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295949360208101935035915050640100000000811115610e7957600080fd5b820183602082011115610e8b57600080fd5b80359060200191846020830284011164010000000083111715610ead57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505082359350505060208101359060400135600160c060020a031916611c80565b348015610f0c57600080fd5b5061013160048036036020811015610f2357600080fd5b5035600160a060020a0316611f72565b348015610f3f57600080fd5b5061058360048036036020811015610f5657600080fd5b5035611fb8565b60008b8152600460205260408120548a5160609114610fc6576040805160e560020a62461bcd02815260206004820152601560248201527f7468726573686f6c64206e6f7420636f72726563740000000000000000000000604482015290519081900360640190fd5b89518b51148015610fd857508b518b51145b151561102e576040805160e560020a62461bcd02815260206004820152601560248201527f7369672064617461206e6f7420636f6d706c6574650000000000000000000000604482015290519081900360640190fd5b5060009c969b50959950505050505050505050565b336000908152600660209081526040808320848452909152812054841180159061106d5750600084115b801561109d5750600160a060020a0385166000908152600660209081526040808320858452909152902054848101115b1561114157336000818152600660208181526040808420878552825280842080548a90039055600160a060020a038a16808552928252808420878552825280842080548a0190558051898152600160c060020a0319891692810192909252818101939093526060810186905291519092917f3dc602d3dac661f57f099bc0194a8abbb314988da395b3b242e06804f33e453b919081900360800190a35060016111a2565b60408051858152600160c060020a031985166020820152600181830152606081018490529051600160a060020a0387169133917f3dc602d3dac661f57f099bc0194a8abbb314988da395b3b242e06804f33e453b9181900360800190a35060005b949350505050565b60008054600160a060020a03163314806111cc575033600160a060020a038416145b156111fb5750600160a060020a03821660009081526006602090815260408083208484529091529020546111ff565b5060005b92915050565b60005474010000000000000000000000000000000000000000900460ff1681565b600160205260009081526040902054600160a060020a031681565b6040805160588152602081018d905281517f2bbc4a85952fec00fbbd6534287a445de7181dd5dceb20cd1748be960ff6470e929181900390910190a160008b8152600460205260409020548951146112e3576040805160e560020a62461bcd02815260206004820152601560248201527f7468726573686f6c64206e6f7420636f72726563740000000000000000000000604482015290519081900360640190fd5b875189511480156112f5575089518951145b151561134b576040805160e560020a62461bcd02815260206004820152601560248201527f7369672064617461206e6f7420636f6d706c6574650000000000000000000000604482015290519081900360640190fd5b6000805b88518160ff1610156114d157600060018a8360ff1681518110151561137057fe5b906020019060200201518e8460ff1681518110151561138b57fe5b906020019060200201518e8560ff168151811015156113a657fe5b906020019060200201518e8660ff168151811015156113c157fe5b9060200190602002015160405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611422573d6000803e3d6000fd5b50505060206040510351905082600160a060020a031681600160a060020a0316118015611471575060008e8152600560209081526040808320600160a060020a038516845290915290205460ff165b15156114c7576040805160e560020a62461bcd02815260206004820152601e60248201527f766572696679416e6453656e64202d206661696c656420636865636b73200000604482015290519081900360640190fd5b915060010161134f565b5081600114156114eb576114e686858761153b565b611513565b8160021415611505576114ff868587611ad0565b50611513565b61151183878688611043565b505b505050505050505050505050565b600054600160a060020a0316331461153857600080fd5b33ff5b33600081815260066020908152604080832085845282528083208054880190558051938452908301869052600160c060020a0319851683820152606083019190915260808201839052517f3160ca8d266d63ac6dfe555300b3be316bbc3d37aa0277fa9fc4e3a7a2b664e39181900360a00190a1505050565b60008481526003602052604081205481106115ce57600080fd5b6000831180156115e05750600a825111155b80156115ed575081518311155b15156115f857600080fd5b60005b6000868152600360205260409020548110156116745760008681526005602090815260408083206003909252822080548391908590811061163857fe5b600091825260208083209190910154600160a060020a031683528201929092526040019020805460ff19169115159190911790556001016115fb565b506000805b835181101561172b5781600160a060020a0316848281518110151561169a57fe5b60209081029091010151600160a060020a0316116116b757600080fd5b60008781526005602052604081208551600192908790859081106116d757fe5b602090810291909101810151600160a060020a03168252810191909152604001600020805460ff1916911515919091179055835184908290811061171757fe5b602090810290910101519150600101611679565b506000868152600360209081526040909120845161174b92860190611fd3565b50600086815260026020908152604080832080543373ffffffffffffffffffffffffffffffffffffffff1991821617909155600183528184208054909116600160a060020a038a16179055600482529182902086905581516064815290810188905281517f2bbc4a85952fec00fbbd6534287a445de7181dd5dceb20cd1748be960ff6470e929181900390910190a150949350505050565b600560209081526000928352604080842090915290825290205460ff1681565b600054600160a060020a031681565b600081815260036020908152604080832060048352818420548154835181860281018601909452808452606095949293919284919083018282801561188057602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311611862575b5050505050915091509150915091565b600084815260036020526040812054156118a957600080fd5b6000831180156118bb5750600a825111155b80156118c8575081518311155b15156118d357600080fd5b6000805b83518110156119895781600160a060020a031684828151811015156118f857fe5b60209081029091010151600160a060020a03161161191557600080fd5b600087815260056020526040812085516001929087908590811061193557fe5b602090810291909101810151600160a060020a03168252810191909152604001600020805460ff1916911515919091179055835184908290811061197557fe5b6020908102909101015191506001016118d7565b50600086815260036020908152604090912084516119a992860190611fd3565b50600086815260026020908152604080832080543373ffffffffffffffffffffffffffffffffffffffff1991821617909155600183528184208054909116600160a060020a038a16179055600482529182902086905581516063815290810188905281517f2bbc4a85952fec00fbbd6534287a445de7181dd5dceb20cd1748be960ff6470e929181900390910190a150600195945050505050565b60008054819081908190600160a060020a0316331480611a6c575033600160a060020a038616145b15611abc5750505050600160a060020a0381166000908152600660209081526040808320838052909152808220546001835281832054600284528284205460038552929093205490929190611ac9565b5060009250829150819050805b9193509193565b3360009081526006602090815260408083208484529091528120548411801590611afa5750600084115b8015611b215750336000908152600660209081526040808320858452909152902054848101115b15611ba0573360008181526006602090815260408083208684528252808320805489900390558051888152600160c060020a0319881692810192909252818101929092526060810185905290517f62c0b04512c7bc59f89a4734831ba28c031dc39f013ebf2deca0a828083696019181900360800190a2506001611bf7565b60408051858152600160c060020a03198516602082015260018183015260608101849052905133917f62c0b04512c7bc59f89a4734831ba28c031dc39f013ebf2deca0a82808369601919081900360800190a25060005b9392505050565b600160a060020a038116600081815260066020908152604080832086845282529182902080548801905581519283528201869052600160c060020a03198516828201526001606083015260808201849052517f3160ca8d266d63ac6dfe555300b3be316bbc3d37aa0277fa9fc4e3a7a2b664e39181900360a00190a150505050565b600089815260046020526040902054875114611ce6576040805160e560020a62461bcd02815260206004820152601560248201527f7468726573686f6c64206e6f7420636f72726563740000000000000000000000604482015290519081900360640190fd5b85518751148015611cf8575087518751145b1515611d4e576040805160e560020a62461bcd02815260206004820152601560248201527f7369672064617461206e6f7420636f6d706c6574650000000000000000000000604482015290519081900360640190fd5b60408051808201909152601c81527f19457468657265756d205369676e6564204d6573736167653a0a3332000000006020820152600090815b8751811015611f59576000828983815181101515611da157fe5b906020019060200201516040516020018083805190602001908083835b60208310611ddd5780518252601f199092019160209182019101611dbe565b51815160209384036101000a6000190180199092169116179052920193845250604080518085038152938201905282519201919091208e51909350600092506001915083908f9086908110611e2e57fe5b906020019060200201518e86815181101515611e4657fe5b906020019060200201518e87815181101515611e5e57fe5b9060200190602002015160405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015611ebf573d6000803e3d6000fd5b50505060206040510351905084600160a060020a031681600160a060020a0316118015611f0e575060008e8152600560209081526040808320600160a060020a038516845290915290205460ff165b1515611f4e5760405160e560020a62461bcd02815260040180806020018281038252602881526020018061207a6028913960400191505060405180910390fd5b935050600101611d87565b50611f6585848661153b565b5050505050505050505050565b600054600160a060020a03163314611f8957600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b600260205260009081526040902054600160a060020a031681565b828054828255906000526020600020908101928215612035579160200282015b82811115612035578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190611ff3565b50612041929150612045565b5090565b61207691905b8082111561204157805473ffffffffffffffffffffffffffffffffffffffff1916815560010161204b565b9056fe76657269667957697468507265666978416e6453656e64202d206661696c656420636865636b7320a165627a7a723058203796d245c45e7e05d7cc641942502ce6770f688f27515d64ab7db08518f1f47b0029"},"../contracts/Disberse.sol:Owned":{"abi":"[{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]","bin":"608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561019f806100326000396000f3fe608060405234801561001057600080fd5b506004361061005d577c0100000000000000000000000000000000000000000000000000000000600035046341c0e1b581146100625780638da5cb5b1461006c578063f2fde38b1461009d575b600080fd5b61006a6100d0565b005b6100746100f7565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61006a600480360360208110156100b357600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610113565b60005473ffffffffffffffffffffffffffffffffffffffff1633146100f457600080fd5b33ff5b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331461013757600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff191673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fea165627a7a72305820b8824fbbb21d633530a172b6d544852d5aea2a4f6605e81e77b70536d3cd87e80029"}},"version":"0.5.4+commit.9549d8ff.Linux.g++"};

abi = JSON.parse(SolidityContractObject.contracts["../contracts/Disberse.sol:Disberse"].abi);

address = '0x1c077fd368d9a2f2a1a0935fef249180097be4a3';

var Disberse = web3.eth.contract(abi).at(address);

var event = Disberse.allEvents();
event.watch(function(error, result){
  if (!error)
  {
    str = JSON.stringify(result)
    console.log(str);
  }
});

