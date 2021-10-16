import hre from "hardhat";

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');
  
    // We get the contract to deploy
    const TestContract = await hre.ethers.getContractFactory("TestContract");
    const testContract = await TestContract.deploy(10);
  
    await testContract.deployed();
  
    console.log("TestContract deployed to:", testContract.address);
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  