## inbox-truffle

This project was deployed to local private ethereum blockchain with the help of geth, truffle, web3;


# Steps for cloning the real project:
- Write the smart contracts.
- Run the local private blockchain using `genesis.json` file and commands given in `commands.txt` in `geth-blockchain` directory.
- Change truffle settings in `truffle-config.js` file according to local network settings.
- Then run, `truffle develop --reset` & `truffle migrate --reset`.
- Now, use the ABI generated in build folder in the frontend.