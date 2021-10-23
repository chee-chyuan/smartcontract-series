import hre from "hardhat";

async function main() {
    const Greeter = await hre.ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy();

    const greeterDeployed = await greeter.deployed();
    const greeterAddress = greeterDeployed.address;

    console.log(`Implementation deployed to : ${greeterAddress}`);

    const Factory = await hre.ethers.getContractFactory("MinimalProxyFactory");
    const minProxyFactory = await Factory.deploy(greeterAddress);

    await minProxyFactory.deployed();

    console.log("Factory Deployed to:", minProxyFactory.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });