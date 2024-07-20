/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface FHEInterface extends Interface {
  getFunction(nameOrSignature: "NIL16" | "NIL32" | "NIL8"): FunctionFragment;

  encodeFunctionData(functionFragment: "NIL16", values?: undefined): string;
  encodeFunctionData(functionFragment: "NIL32", values?: undefined): string;
  encodeFunctionData(functionFragment: "NIL8", values?: undefined): string;

  decodeFunctionResult(functionFragment: "NIL16", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NIL32", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "NIL8", data: BytesLike): Result;
}

export interface FHE extends BaseContract {
  connect(runner?: ContractRunner | null): FHE;
  waitForDeployment(): Promise<this>;

  interface: FHEInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  NIL16: TypedContractMethod<[], [bigint], "view">;

  NIL32: TypedContractMethod<[], [bigint], "view">;

  NIL8: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "NIL16"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "NIL32"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "NIL8"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
