require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain modify gloom nation flee squirrel'; 
let testAccounts = [
"0x5fe534f13e6c7df61305edc3ee69861042e132f130d97aca243b85fe1cf3099e",
"0x9621a72bfed27951374829f22691fd43036447fa4a62c1e64c3abc53d2ee7c8e",
"0xed85f1badb49b92415fc730880af92d0ad4527e66c96624f6160ad965dca4815",
"0x4c459743c59fece118da3643a6d996a6feb442bdaeb618ac22a245ebf716bc4d",
"0x98a443776207a06ad23a97c7277d75e8ababe8047dabf444fddd1a68886beb9e",
"0x12da6d45d6f95db6af7c9954d0e4a644cffc8977684e419f8fc16730c662e718",
"0xf42988039afec5561d1e551ee7d07c1e0d1b9ab2c970cd307c05399a39575e36",
"0xe693362ef69a61911e96be3f9173fb55af44c8795c4e53a82712af6702c91eaf",
"0x905a6f70159389ac8cd0fa1820997cd86bdfc64ae9d664ea8c7fda94f8f251ed",
"0xb216f95d2fb0c315370367e439b716497f7d9f7070b0e93cf1d8e645ca56be44"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

