import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // Browser and metamask is running
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/a5e7b7436ed6477da10aa1f0eb2c4844'
    );
    web3 = new Web3(provider);
}

export default web3;