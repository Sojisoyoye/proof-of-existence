var ProofOfExistence3 = artifacts.require('./ProofOfExistence3.sol');
// var ProofOfExistence2 = artifacts.require('./ProofOfExistence2.sol');
// var ProofOfExistence1 = artifacts.require('./ProofOfExistence1.sol');

module.exports = function(deployer) {
    deployer.deploy(ProofOfExistence3);
}