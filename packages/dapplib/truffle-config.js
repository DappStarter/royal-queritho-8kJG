require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike rival noise essay inner drop slot ghost'; 
let testAccounts = [
"0x52cca31e88dec862675aa408850a9432bd9784f9ab4d77262138237c66c13b12",
"0x7eff2bc28c1c8af65314f8949e2abff879c5c46392f5d826a850069ac272d090",
"0x75bb860fd228a2800b82b9b6d1999197aaf395ee6c8a75f39432aa333a02da23",
"0x5d6b39747ec30907496a63e922cd5b1f7ff7f09d1f571a1ca8a8085cca4eb5ba",
"0xf7035dc1983291c5e9961bb97406d6afdfcfc67cfa5d7b40e68b1c5d688acbfb",
"0x4f3d71fa204a7bb01363d09689cfebd0d127f18316cff0ab85be3b5a1d568a10",
"0x0bafd485f8f2cf929ebaecc288ff89ef46b49d71ff7f9428242cdd3a4e234d93",
"0xe70f9080d9fc683a61e62460ddb2869e9d39b767a489da8ed18cd05e0bafcfc2",
"0x0e351569f52d7919c8ca7ca1dc55591a0e92667d26820d5695d1f9e0cfc5ef37",
"0x91032abab25cbb946570eaf4aa2d17945a363899e6e1b64ef22497f5443fd205"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

