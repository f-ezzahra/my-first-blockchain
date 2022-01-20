const url = "https://eth-ropsten.alchemyapi.io/v2/1ubvVRYN3JlsJ4JLeAm4Y-Yu2Gm6J1-K";

// Using web3js
const web3 = new Web3(url);

// Using ethers.js
const provider =
  new ethers.providers.JsonRpcProvider(url);

