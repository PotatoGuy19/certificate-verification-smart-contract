pragma solidity ^0.4.0;

contract Certificate {

  struct Cert {
    bool exist; // set to true always
    address issuerAddress;
    address recipientAddress;
  }

  mapping (bytes => Cert) certificates; // hash map

  // Input: IPFS multi-hash
  // Output: issuer's address
  function getIss(bytes ipfsAddr) constant public returns(address) {
    return certificates[ipfsAddr].issuerAddress;
  }

  // Input: IPFS multi-hash
  // Output: recipient's address
  function getRec(bytes ipfsAddr) constant public returns(address) {
    return certificates[ipfsAddr].recipientAddress;
  }

  function setCert(bytes ipfsAddr, address recAddr) public {

    require(!certificates[msg.sender].exist); // reject duplicate entry

    Cert memory newCert;

    newCert.certId = ipfsAddr;
    newCert.issuerAddress = msg.sender;
    newCert.recipientAddress = recAddr;

    certificates[ipfsAddr] = newCert; // insert new Cert into hash map
  }

}
