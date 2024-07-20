import { Counter } from "../types";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

task("task:divCount")
  .addParam("amount", "Amount to divide to the Counter (plaintext number)", "3")
  .setAction(async function (taskArguments: TaskArguments, hre) {
    const { fhenixjs, ethers, deployments } = hre;
    const [signer] = await ethers.getSigners();
    const Counter = await deployments.get("Counter");
    const amountToDiv = Number(taskArguments.amount);

    // Fund the signer if they don't have any ETH (only for localfhenix)
    if ((await ethers.provider.getBalance(signer.address)).toString() === "0") {
      await fhenixjs.getFunds(signer.address);
    }

    console.log("*".repeat(50));
    console.log(
      `Running divCount(${amountToDiv}), targeting contract at: ${Counter.address}`
    );

    // set up the contract
    const contract = await ethers.getContractAt("Counter", Counter.address);
    let contractWithSigner = contract.connect(signer) as unknown as Counter;

    // Encrypt the amount
    console.log(`Encrypting amount: ${amountToDiv}`);
    const encyrptedAmount = await fhenixjs.encrypt_uint32(amountToDiv);
    console.log(`Encrypted amount:`, encyrptedAmount);

    try {
      const tx = await contractWithSigner.div(encyrptedAmount);
      console.log(`div() transaction sent. Hash: ${tx.hash}`);
    } catch (e) {
      console.log(`Failed to send div() transaction: ${e}`);
    }

    try {
      const tx = await contractWithSigner.divManyTimes(encyrptedAmount);
      console.log(`divManyTimes() transaction sent. Hash: ${tx.hash}`);
    } catch (e) {
      console.log(`Failed to send divManyTimes() transaction: ${e}`);
    }
  });
