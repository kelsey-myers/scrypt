// https://eth-goerli.alchemyapi.io/v2/o6H-sOHAzGF9GQw2ikTJ4zul7BZH0pDB

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/o6H-sOHAzGF9GQw2ikTJ4zul7BZH0pDB",
      accounts: [
        "420e59a2af120a3d24e2ee457199c9d17d77ee2444114ce337bccd231b67f130",
      ],
    },
  },
};
