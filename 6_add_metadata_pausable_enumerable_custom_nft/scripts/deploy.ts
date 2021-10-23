import hre from "hardhat";

async function main() {
    const CustomNft = await hre.ethers.getContractFactory("CustomNft");
    const customNft = await CustomNft.deploy("testNft", "tst", 10);

    await customNft.deployed();

    console.log("Deployed to:", customNft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  