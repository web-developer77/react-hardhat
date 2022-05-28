require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  defaultNetwork: "rinkeby",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1500,
      },
    },
  },

  // uncomment this and run: yarn deploy-rinkeby
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/0c430968c9bd401fa95f3d48ad84a45f`,
      accounts: [0x827fd6b44e118fc8bbea6a65a201d3c69f49619c2eb74f946e14f0bf1d68f98c],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
};
