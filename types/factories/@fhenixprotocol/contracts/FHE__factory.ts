/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { FHE, FHEInterface } from "../../../@fhenixprotocol/contracts/FHE";

const _abi = [
  {
    inputs: [],
    name: "NIL16",
    outputs: [
      {
        internalType: "euint16",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NIL32",
    outputs: [
      {
        internalType: "euint32",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NIL8",
    outputs: [
      {
        internalType: "euint8",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101a3610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c80639e80b51314610050578063acfc53ee1461006e578063b1c485441461008c575b600080fd5b6100586100aa565b60405161006591906100fe565b60405180910390f35b6100766100af565b6040516100839190610128565b60405180910390f35b6100946100b4565b6040516100a19190610152565b60405180910390f35b600081565b600081565b600081565b6000819050919050565b6000819050919050565b60006100e86100e36100de846100b9565b6100c3565b6100b9565b9050919050565b6100f8816100cd565b82525050565b600060208201905061011360008301846100ef565b92915050565b610122816100cd565b82525050565b600060208201905061013d6000830184610119565b92915050565b61014c816100cd565b82525050565b60006020820190506101676000830184610143565b9291505056fea26469706673582212203f81d1da05be687d58a0fb1a18b0cbc57823bbbdcb760243141b3a145bfb154864736f6c63430008180033";

type FHEConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FHEConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FHE__factory extends ContractFactory {
  constructor(...args: FHEConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FHE & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FHE__factory {
    return super.connect(runner) as FHE__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FHEInterface {
    return new Interface(_abi) as FHEInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FHE {
    return new Contract(address, _abi, runner) as unknown as FHE;
  }
}