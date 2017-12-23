/* ============================================================================ */
/* Step 0: Make sure you have the following moduels */
/* ============================================================================ */

// Download "testrpc," a dummy Ethereum blockchain that you can fire up anytime.
// If you already have it you don't need to download it again.
// Remember, once you close the terminal the network will reset and lose all memory.

// Run command "npm init -y". Make sure you have the folder "node_modules" afterwards.

// Download "express", the command is "npm i -S express"

// Download "web3," the command is "npm i -S web3"

/* ============================================================================ */
/* Step 1: Import the necessary modules */
/* ============================================================================ */

// The "express" module enables us to perform AJAX
// This is how we handle the GET and POST requests
const express = require('express');
const app = express();

// Set middleware so express knows where to look for static files.
app.use('/', express.static('public'));

// Make sure express.js is connected to a port. In this case, it's 3000
app.listen(3000, function() {
  console.log("app.js listening on port 3000");
});

// The "web3" module enables us to interact with the Ethereum test net, testrpc
// Fire up the testrpc network, COMMAND: testrpc, in an INDEPENDENT terminal before
// starting the module
// The test net will always connect to port 8545 so no need to change configuration.
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

// // The "async/series" module allows user to do asynchronous tasks
// const series = require('async/series');
//
// // IPFS moduels
// const IPFS = require('ipfs');
// const node = new IPFS();
// const fs = require('fs');

/* ============================================================================ */
/* Step 2:  contract */
/* ============================================================================ */

web3.eth.getAccounts().then(e => {

  var setContract = new web3.eth.Contract(
    [{"constant":false,"inputs":[{"name":"ipfsAddr","type":"bytes"},{"name":"recAddr","type":"address"}],"name":"setCert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"ipfsAddr","type":"bytes"}],"name":"getRec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ipfsAddr","type":"bytes"}],"name":"getIss","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}],
     {
       from: e[0],

       data: '0x6060604052341561000f57600080fd5b6105ef8061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063161b13c31461005c5780631f2d5fd2146100d8578063b9ae752814610175575b600080fd5b341561006757600080fd5b6100d6600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610212565b005b34156100e357600080fd5b610133600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610445565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561018057600080fd5b6101d0600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506104dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61021a610573565b6000836040518082805190602001908083835b602083101515610252578051825260208201915060208101905060208303925061022d565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010160149054906101000a900460ff161515156102a257600080fd5b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001816040019015159081151581525050806000846040518082805190602001908083835b60208310151561035c5780518252602082019150602081019050602083039250610337565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff021916908315150217905550905050505050565b600080826040518082805190602001908083835b60208310151561047e5780518252602082019150602081019050602083039250610459565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080826040518082805190602001908083835b60208310151561051557805182526020820191506020810190506020830392506104f0565b6001836020036101000a038019825116818451168082178552505050505050905001915050908152602001604051809103902060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a7230582082287db3b0d3487a91a621d9a31e24fd9b24563049ef7d4bdeb7806a586f9a610029',

       gas: '4700000'
     }
   )

  // var setContract = new web3.eth.Contract(
  //   [{"constant":true,"inputs":[{"name":"ipfsAddr","type":"bytes32"}],"name":"getRec","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"ipfsAddr","type":"bytes32"}],"name":"getIss","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ipfsAddr","type":"bytes32"},{"name":"recAddr","type":"address"}],"name":"setCert","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}],
  //
  //    {
  //      from: e[0],
  //
  //      data: '0x6060604052341561000f57600080fd5b61040b8061001e6000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063790e9fa21461005c578063a4ecd77c146100c3578063c2b845a41461012a575b600080fd5b341561006757600080fd5b610081600480803560001916906020019091905050610170565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100ce57600080fd5b6100e86004808035600019169060200190919050506101b7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561013557600080fd5b61016e60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506101fe565b005b6000806000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000806000836000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b61020661038f565b600080846000191660001916815260200190815260200160002060010160149054906101000a900460ff1615151561023d57600080fd5b33816000019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505081816020019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff1681525050600181604001901515908115158152505080600080856000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160010160146101000a81548160ff021916908315150217905550905050505050565b606060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160001515815250905600a165627a7a72305820d7f978d94cdad622953be353fadb9ba3782bef1734d6dbb1f254534dabe957730029',
  //
  //      gas: '4700000'
  //    }
  // )

  setContract.deploy().send().then(function(getContract) {

    console.log("Contract address: " + getContract.options.address);

    app.post('/renderSubmit', function(req, res) {
        res.send(e);
    })

    // Inserting new entires into the smart contract
    app.post('/sendSubmit/:ipfsAddr/:issAddr/:recAddr', function(req, res) {
      var ipfs = req.params.ipfsAddr;
      var iss = req.params.issAddr;
      var rec = req.params.recAddr;

      getContract.methods.setCert(web3.utils.fromAscii(ipfs), rec).send({from: iss}).then(function(receipt){
        console.log("\nAdded IPFS: " + ipfs);
        console.log("Signed issuer: " + iss);
        console.log("Signed recepient: " + rec + "\n");
        console.log(receipt);
        res.send(JSON.stringify(receipt));
      })
    })

    app.post('/issSearch/:ipfs', function(req, res) {
      var ipfsAddr = req.params.ipfs;
      getContract.methods.getIss(web3.utils.fromAscii(ipfsAddr)).call().then(function(result) {
        console.log("\nSearched IPFS: " + ipfsAddr);
        console.log("Retrieved issuer: " + result);
        res.send(result);
      })
    })

    app.post('/recSearch/:ipfs', function(req, res) {
      var ipfsAddr = req.params.ipfs;
      getContract.methods.getRec(web3.utils.fromAscii(ipfsAddr)).call().then(function(result) {
        console.log("Retrieved recepient: " + result);
        res.send(result);
      });
    })

  });

  // app.post('/uploadSubmit/:filename', function(req, res) {
  //   var file = req.params.filename;
  //   var fileAddr = "img/" + file;
  //   var multiHash;
  //
  //   series([
  //     (cb) => node.on('ready', cb),
  //
  //     (cb) => node.version((err, version) => {
  //       if (err) { return cb(err) }
  //       console.log('Version:', version.version)
  //       cb()
  //     }),
  //
  //     (cb) => node.files.add({
  //       path: fileAddr,
  //       content: fs.readFileSync(fileAddr)
  //     }, (err, filesAdded) => {
  //       if (err) { return cb(err) }
  //       console.log('\nAdded file:', filesAdded[0].path, filesAdded[0].hash);
  //
  //       res.send(filesAdded[0].hash);
  //
  //       cb()
  //     })
  //   ])
  // })

})
