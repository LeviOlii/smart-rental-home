
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model DeviceReading
 * 
 */
export type DeviceReading = $Result.DefaultSelection<Prisma.$DeviceReadingPayload>
/**
 * Model RentalPackage
 * 
 */
export type RentalPackage = $Result.DefaultSelection<Prisma.$RentalPackagePayload>
/**
 * Model StaySession
 * 
 */
export type StaySession = $Result.DefaultSelection<Prisma.$StaySessionPayload>
/**
 * Model StaySessionDevice
 * 
 */
export type StaySessionDevice = $Result.DefaultSelection<Prisma.$StaySessionDevicePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SessionStatus: {
  SCHEDULED: 'SCHEDULED',
  ACTIVE: 'ACTIVE',
  FINISHED: 'FINISHED',
  CANCELLED: 'CANCELLED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deviceReading`: Exposes CRUD operations for the **DeviceReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceReadings
    * const deviceReadings = await prisma.deviceReading.findMany()
    * ```
    */
  get deviceReading(): Prisma.DeviceReadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalPackage`: Exposes CRUD operations for the **RentalPackage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalPackages
    * const rentalPackages = await prisma.rentalPackage.findMany()
    * ```
    */
  get rentalPackage(): Prisma.RentalPackageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staySession`: Exposes CRUD operations for the **StaySession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaySessions
    * const staySessions = await prisma.staySession.findMany()
    * ```
    */
  get staySession(): Prisma.StaySessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staySessionDevice`: Exposes CRUD operations for the **StaySessionDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaySessionDevices
    * const staySessionDevices = await prisma.staySessionDevice.findMany()
    * ```
    */
  get staySessionDevice(): Prisma.StaySessionDeviceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Property: 'Property',
    Device: 'Device',
    DeviceReading: 'DeviceReading',
    RentalPackage: 'RentalPackage',
    StaySession: 'StaySession',
    StaySessionDevice: 'StaySessionDevice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "property" | "device" | "deviceReading" | "rentalPackage" | "staySession" | "staySessionDevice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      DeviceReading: {
        payload: Prisma.$DeviceReadingPayload<ExtArgs>
        fields: Prisma.DeviceReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          findFirst: {
            args: Prisma.DeviceReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          findMany: {
            args: Prisma.DeviceReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>[]
          }
          create: {
            args: Prisma.DeviceReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          createMany: {
            args: Prisma.DeviceReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceReadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>[]
          }
          delete: {
            args: Prisma.DeviceReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          update: {
            args: Prisma.DeviceReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          deleteMany: {
            args: Prisma.DeviceReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceReadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>[]
          }
          upsert: {
            args: Prisma.DeviceReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceReadingPayload>
          }
          aggregate: {
            args: Prisma.DeviceReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceReading>
          }
          groupBy: {
            args: Prisma.DeviceReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceReadingCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceReadingCountAggregateOutputType> | number
          }
        }
      }
      RentalPackage: {
        payload: Prisma.$RentalPackagePayload<ExtArgs>
        fields: Prisma.RentalPackageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalPackageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalPackageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          findFirst: {
            args: Prisma.RentalPackageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalPackageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          findMany: {
            args: Prisma.RentalPackageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>[]
          }
          create: {
            args: Prisma.RentalPackageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          createMany: {
            args: Prisma.RentalPackageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalPackageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>[]
          }
          delete: {
            args: Prisma.RentalPackageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          update: {
            args: Prisma.RentalPackageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          deleteMany: {
            args: Prisma.RentalPackageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalPackageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalPackageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>[]
          }
          upsert: {
            args: Prisma.RentalPackageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalPackagePayload>
          }
          aggregate: {
            args: Prisma.RentalPackageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalPackage>
          }
          groupBy: {
            args: Prisma.RentalPackageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalPackageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalPackageCountArgs<ExtArgs>
            result: $Utils.Optional<RentalPackageCountAggregateOutputType> | number
          }
        }
      }
      StaySession: {
        payload: Prisma.$StaySessionPayload<ExtArgs>
        fields: Prisma.StaySessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaySessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaySessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          findFirst: {
            args: Prisma.StaySessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaySessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          findMany: {
            args: Prisma.StaySessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>[]
          }
          create: {
            args: Prisma.StaySessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          createMany: {
            args: Prisma.StaySessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaySessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>[]
          }
          delete: {
            args: Prisma.StaySessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          update: {
            args: Prisma.StaySessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          deleteMany: {
            args: Prisma.StaySessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaySessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaySessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>[]
          }
          upsert: {
            args: Prisma.StaySessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionPayload>
          }
          aggregate: {
            args: Prisma.StaySessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaySession>
          }
          groupBy: {
            args: Prisma.StaySessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaySessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaySessionCountArgs<ExtArgs>
            result: $Utils.Optional<StaySessionCountAggregateOutputType> | number
          }
        }
      }
      StaySessionDevice: {
        payload: Prisma.$StaySessionDevicePayload<ExtArgs>
        fields: Prisma.StaySessionDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaySessionDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaySessionDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          findFirst: {
            args: Prisma.StaySessionDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaySessionDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          findMany: {
            args: Prisma.StaySessionDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>[]
          }
          create: {
            args: Prisma.StaySessionDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          createMany: {
            args: Prisma.StaySessionDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaySessionDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>[]
          }
          delete: {
            args: Prisma.StaySessionDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          update: {
            args: Prisma.StaySessionDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          deleteMany: {
            args: Prisma.StaySessionDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaySessionDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaySessionDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>[]
          }
          upsert: {
            args: Prisma.StaySessionDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaySessionDevicePayload>
          }
          aggregate: {
            args: Prisma.StaySessionDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaySessionDevice>
          }
          groupBy: {
            args: Prisma.StaySessionDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaySessionDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaySessionDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<StaySessionDeviceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    property?: PropertyOmit
    device?: DeviceOmit
    deviceReading?: DeviceReadingOmit
    rentalPackage?: RentalPackageOmit
    staySession?: StaySessionOmit
    staySessionDevice?: StaySessionDeviceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    properties: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | UserCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    devices: number
    sessions: number
    packages: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | PropertyCountOutputTypeCountDevicesArgs
    sessions?: boolean | PropertyCountOutputTypeCountSessionsArgs
    packages?: boolean | PropertyCountOutputTypeCountPackagesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPackagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalPackageWhereInput
  }


  /**
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    readings: number
    sessions: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | DeviceCountOutputTypeCountReadingsArgs
    sessions?: boolean | DeviceCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceReadingWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionDeviceWhereInput
  }


  /**
   * Count Type RentalPackageCountOutputType
   */

  export type RentalPackageCountOutputType = {
    sessions: number
  }

  export type RentalPackageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | RentalPackageCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * RentalPackageCountOutputType without action
   */
  export type RentalPackageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackageCountOutputType
     */
    select?: RentalPackageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalPackageCountOutputType without action
   */
  export type RentalPackageCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionWhereInput
  }


  /**
   * Count Type StaySessionCountOutputType
   */

  export type StaySessionCountOutputType = {
    devices: number
  }

  export type StaySessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    devices?: boolean | StaySessionCountOutputTypeCountDevicesArgs
  }

  // Custom InputTypes
  /**
   * StaySessionCountOutputType without action
   */
  export type StaySessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionCountOutputType
     */
    select?: StaySessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaySessionCountOutputType without action
   */
  export type StaySessionCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionDeviceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    properties?: boolean | User$propertiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | User$propertiesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends User$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, User$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.properties
   */
  export type User$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    name: string | null
    address: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    userId: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    userId?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    userId?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    name: string
    address: string | null
    createdAt: Date
    userId: number
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Property$devicesArgs<ExtArgs>
    sessions?: boolean | Property$sessionsArgs<ExtArgs>
    packages?: boolean | Property$packagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt" | "userId", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    devices?: boolean | Property$devicesArgs<ExtArgs>
    sessions?: boolean | Property$sessionsArgs<ExtArgs>
    packages?: boolean | Property$packagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      devices: Prisma.$DevicePayload<ExtArgs>[]
      sessions: Prisma.$StaySessionPayload<ExtArgs>[]
      packages: Prisma.$RentalPackagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      address: string | null
      createdAt: Date
      userId: number
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    devices<T extends Property$devicesArgs<ExtArgs> = {}>(args?: Subset<T, Property$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Property$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Property$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    packages<T extends Property$packagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$packagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly userId: FieldRef<"Property", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.devices
   */
  export type Property$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Property.sessions
   */
  export type Property$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    where?: StaySessionWhereInput
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    cursor?: StaySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaySessionScalarFieldEnum | StaySessionScalarFieldEnum[]
  }

  /**
   * Property.packages
   */
  export type Property$packagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    where?: RentalPackageWhereInput
    orderBy?: RentalPackageOrderByWithRelationInput | RentalPackageOrderByWithRelationInput[]
    cursor?: RentalPackageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalPackageScalarFieldEnum | RentalPackageScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    id: number | null
    powerWatts: number | null
    propertyId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    id: number | null
    powerWatts: number | null
    propertyId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    topic: string | null
    createdAt: Date | null
    isActive: boolean | null
    lastSeen: Date | null
    powerWatts: number | null
    propertyId: number | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    topic: string | null
    createdAt: Date | null
    isActive: boolean | null
    lastSeen: Date | null
    powerWatts: number | null
    propertyId: number | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    type: number
    topic: number
    createdAt: number
    isActive: number
    lastSeen: number
    powerWatts: number
    propertyId: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    id?: true
    powerWatts?: true
    propertyId?: true
  }

  export type DeviceSumAggregateInputType = {
    id?: true
    powerWatts?: true
    propertyId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    topic?: true
    createdAt?: true
    isActive?: true
    lastSeen?: true
    powerWatts?: true
    propertyId?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    topic?: true
    createdAt?: true
    isActive?: true
    lastSeen?: true
    powerWatts?: true
    propertyId?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    topic?: true
    createdAt?: true
    isActive?: true
    lastSeen?: true
    powerWatts?: true
    propertyId?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: number
    name: string
    type: string
    topic: string
    createdAt: Date
    isActive: boolean
    lastSeen: Date | null
    powerWatts: number | null
    propertyId: number
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    createdAt?: boolean
    isActive?: boolean
    lastSeen?: boolean
    powerWatts?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    readings?: boolean | Device$readingsArgs<ExtArgs>
    sessions?: boolean | Device$sessionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    createdAt?: boolean
    isActive?: boolean
    lastSeen?: boolean
    powerWatts?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    createdAt?: boolean
    isActive?: boolean
    lastSeen?: boolean
    powerWatts?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    topic?: boolean
    createdAt?: boolean
    isActive?: boolean
    lastSeen?: boolean
    powerWatts?: boolean
    propertyId?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "topic" | "createdAt" | "isActive" | "lastSeen" | "powerWatts" | "propertyId", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    readings?: boolean | Device$readingsArgs<ExtArgs>
    sessions?: boolean | Device$sessionsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      readings: Prisma.$DeviceReadingPayload<ExtArgs>[]
      sessions: Prisma.$StaySessionDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      topic: string
      createdAt: Date
      isActive: boolean
      lastSeen: Date | null
      powerWatts: number | null
      propertyId: number
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    readings<T extends Device$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Device$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Device$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Device$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'Int'>
    readonly name: FieldRef<"Device", 'String'>
    readonly type: FieldRef<"Device", 'String'>
    readonly topic: FieldRef<"Device", 'String'>
    readonly createdAt: FieldRef<"Device", 'DateTime'>
    readonly isActive: FieldRef<"Device", 'Boolean'>
    readonly lastSeen: FieldRef<"Device", 'DateTime'>
    readonly powerWatts: FieldRef<"Device", 'Float'>
    readonly propertyId: FieldRef<"Device", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device.readings
   */
  export type Device$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    where?: DeviceReadingWhereInput
    orderBy?: DeviceReadingOrderByWithRelationInput | DeviceReadingOrderByWithRelationInput[]
    cursor?: DeviceReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceReadingScalarFieldEnum | DeviceReadingScalarFieldEnum[]
  }

  /**
   * Device.sessions
   */
  export type Device$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    where?: StaySessionDeviceWhereInput
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    cursor?: StaySessionDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaySessionDeviceScalarFieldEnum | StaySessionDeviceScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model DeviceReading
   */

  export type AggregateDeviceReading = {
    _count: DeviceReadingCountAggregateOutputType | null
    _avg: DeviceReadingAvgAggregateOutputType | null
    _sum: DeviceReadingSumAggregateOutputType | null
    _min: DeviceReadingMinAggregateOutputType | null
    _max: DeviceReadingMaxAggregateOutputType | null
  }

  export type DeviceReadingAvgAggregateOutputType = {
    id: number | null
    value: number | null
    deviceId: number | null
  }

  export type DeviceReadingSumAggregateOutputType = {
    id: bigint | null
    value: number | null
    deviceId: number | null
  }

  export type DeviceReadingMinAggregateOutputType = {
    id: bigint | null
    value: number | null
    createdAt: Date | null
    deviceId: number | null
  }

  export type DeviceReadingMaxAggregateOutputType = {
    id: bigint | null
    value: number | null
    createdAt: Date | null
    deviceId: number | null
  }

  export type DeviceReadingCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    deviceId: number
    _all: number
  }


  export type DeviceReadingAvgAggregateInputType = {
    id?: true
    value?: true
    deviceId?: true
  }

  export type DeviceReadingSumAggregateInputType = {
    id?: true
    value?: true
    deviceId?: true
  }

  export type DeviceReadingMinAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    deviceId?: true
  }

  export type DeviceReadingMaxAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    deviceId?: true
  }

  export type DeviceReadingCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    deviceId?: true
    _all?: true
  }

  export type DeviceReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceReading to aggregate.
     */
    where?: DeviceReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceReadings to fetch.
     */
    orderBy?: DeviceReadingOrderByWithRelationInput | DeviceReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceReadings
    **/
    _count?: true | DeviceReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceReadingMaxAggregateInputType
  }

  export type GetDeviceReadingAggregateType<T extends DeviceReadingAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceReading[P]>
      : GetScalarType<T[P], AggregateDeviceReading[P]>
  }




  export type DeviceReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceReadingWhereInput
    orderBy?: DeviceReadingOrderByWithAggregationInput | DeviceReadingOrderByWithAggregationInput[]
    by: DeviceReadingScalarFieldEnum[] | DeviceReadingScalarFieldEnum
    having?: DeviceReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceReadingCountAggregateInputType | true
    _avg?: DeviceReadingAvgAggregateInputType
    _sum?: DeviceReadingSumAggregateInputType
    _min?: DeviceReadingMinAggregateInputType
    _max?: DeviceReadingMaxAggregateInputType
  }

  export type DeviceReadingGroupByOutputType = {
    id: bigint
    value: number
    createdAt: Date
    deviceId: number
    _count: DeviceReadingCountAggregateOutputType | null
    _avg: DeviceReadingAvgAggregateOutputType | null
    _sum: DeviceReadingSumAggregateOutputType | null
    _min: DeviceReadingMinAggregateOutputType | null
    _max: DeviceReadingMaxAggregateOutputType | null
  }

  type GetDeviceReadingGroupByPayload<T extends DeviceReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceReadingGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceReadingGroupByOutputType[P]>
        }
      >
    >


  export type DeviceReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceReading"]>

  export type DeviceReadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceReading"]>

  export type DeviceReadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    deviceId?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceReading"]>

  export type DeviceReadingSelectScalar = {
    id?: boolean
    value?: boolean
    createdAt?: boolean
    deviceId?: boolean
  }

  export type DeviceReadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "createdAt" | "deviceId", ExtArgs["result"]["deviceReading"]>
  export type DeviceReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceReadingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceReadingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceReading"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      value: number
      createdAt: Date
      deviceId: number
    }, ExtArgs["result"]["deviceReading"]>
    composites: {}
  }

  type DeviceReadingGetPayload<S extends boolean | null | undefined | DeviceReadingDefaultArgs> = $Result.GetResult<Prisma.$DeviceReadingPayload, S>

  type DeviceReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceReadingCountAggregateInputType | true
    }

  export interface DeviceReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceReading'], meta: { name: 'DeviceReading' } }
    /**
     * Find zero or one DeviceReading that matches the filter.
     * @param {DeviceReadingFindUniqueArgs} args - Arguments to find a DeviceReading
     * @example
     * // Get one DeviceReading
     * const deviceReading = await prisma.deviceReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceReadingFindUniqueArgs>(args: SelectSubset<T, DeviceReadingFindUniqueArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeviceReading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceReadingFindUniqueOrThrowArgs} args - Arguments to find a DeviceReading
     * @example
     * // Get one DeviceReading
     * const deviceReading = await prisma.deviceReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingFindFirstArgs} args - Arguments to find a DeviceReading
     * @example
     * // Get one DeviceReading
     * const deviceReading = await prisma.deviceReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceReadingFindFirstArgs>(args?: SelectSubset<T, DeviceReadingFindFirstArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeviceReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingFindFirstOrThrowArgs} args - Arguments to find a DeviceReading
     * @example
     * // Get one DeviceReading
     * const deviceReading = await prisma.deviceReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeviceReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceReadings
     * const deviceReadings = await prisma.deviceReading.findMany()
     * 
     * // Get first 10 DeviceReadings
     * const deviceReadings = await prisma.deviceReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceReadingWithIdOnly = await prisma.deviceReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceReadingFindManyArgs>(args?: SelectSubset<T, DeviceReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeviceReading.
     * @param {DeviceReadingCreateArgs} args - Arguments to create a DeviceReading.
     * @example
     * // Create one DeviceReading
     * const DeviceReading = await prisma.deviceReading.create({
     *   data: {
     *     // ... data to create a DeviceReading
     *   }
     * })
     * 
     */
    create<T extends DeviceReadingCreateArgs>(args: SelectSubset<T, DeviceReadingCreateArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeviceReadings.
     * @param {DeviceReadingCreateManyArgs} args - Arguments to create many DeviceReadings.
     * @example
     * // Create many DeviceReadings
     * const deviceReading = await prisma.deviceReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceReadingCreateManyArgs>(args?: SelectSubset<T, DeviceReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceReadings and returns the data saved in the database.
     * @param {DeviceReadingCreateManyAndReturnArgs} args - Arguments to create many DeviceReadings.
     * @example
     * // Create many DeviceReadings
     * const deviceReading = await prisma.deviceReading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceReadings and only return the `id`
     * const deviceReadingWithIdOnly = await prisma.deviceReading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceReadingCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeviceReading.
     * @param {DeviceReadingDeleteArgs} args - Arguments to delete one DeviceReading.
     * @example
     * // Delete one DeviceReading
     * const DeviceReading = await prisma.deviceReading.delete({
     *   where: {
     *     // ... filter to delete one DeviceReading
     *   }
     * })
     * 
     */
    delete<T extends DeviceReadingDeleteArgs>(args: SelectSubset<T, DeviceReadingDeleteArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeviceReading.
     * @param {DeviceReadingUpdateArgs} args - Arguments to update one DeviceReading.
     * @example
     * // Update one DeviceReading
     * const deviceReading = await prisma.deviceReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceReadingUpdateArgs>(args: SelectSubset<T, DeviceReadingUpdateArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeviceReadings.
     * @param {DeviceReadingDeleteManyArgs} args - Arguments to filter DeviceReadings to delete.
     * @example
     * // Delete a few DeviceReadings
     * const { count } = await prisma.deviceReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceReadingDeleteManyArgs>(args?: SelectSubset<T, DeviceReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceReadings
     * const deviceReading = await prisma.deviceReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceReadingUpdateManyArgs>(args: SelectSubset<T, DeviceReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceReadings and returns the data updated in the database.
     * @param {DeviceReadingUpdateManyAndReturnArgs} args - Arguments to update many DeviceReadings.
     * @example
     * // Update many DeviceReadings
     * const deviceReading = await prisma.deviceReading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeviceReadings and only return the `id`
     * const deviceReadingWithIdOnly = await prisma.deviceReading.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceReadingUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeviceReading.
     * @param {DeviceReadingUpsertArgs} args - Arguments to update or create a DeviceReading.
     * @example
     * // Update or create a DeviceReading
     * const deviceReading = await prisma.deviceReading.upsert({
     *   create: {
     *     // ... data to create a DeviceReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceReading we want to update
     *   }
     * })
     */
    upsert<T extends DeviceReadingUpsertArgs>(args: SelectSubset<T, DeviceReadingUpsertArgs<ExtArgs>>): Prisma__DeviceReadingClient<$Result.GetResult<Prisma.$DeviceReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeviceReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingCountArgs} args - Arguments to filter DeviceReadings to count.
     * @example
     * // Count the number of DeviceReadings
     * const count = await prisma.deviceReading.count({
     *   where: {
     *     // ... the filter for the DeviceReadings we want to count
     *   }
     * })
    **/
    count<T extends DeviceReadingCountArgs>(
      args?: Subset<T, DeviceReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceReadingAggregateArgs>(args: Subset<T, DeviceReadingAggregateArgs>): Prisma.PrismaPromise<GetDeviceReadingAggregateType<T>>

    /**
     * Group by DeviceReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceReadingGroupByArgs['orderBy'] }
        : { orderBy?: DeviceReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceReading model
   */
  readonly fields: DeviceReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeviceReading model
   */
  interface DeviceReadingFieldRefs {
    readonly id: FieldRef<"DeviceReading", 'BigInt'>
    readonly value: FieldRef<"DeviceReading", 'Float'>
    readonly createdAt: FieldRef<"DeviceReading", 'DateTime'>
    readonly deviceId: FieldRef<"DeviceReading", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeviceReading findUnique
   */
  export type DeviceReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceReading to fetch.
     */
    where: DeviceReadingWhereUniqueInput
  }

  /**
   * DeviceReading findUniqueOrThrow
   */
  export type DeviceReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceReading to fetch.
     */
    where: DeviceReadingWhereUniqueInput
  }

  /**
   * DeviceReading findFirst
   */
  export type DeviceReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceReading to fetch.
     */
    where?: DeviceReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceReadings to fetch.
     */
    orderBy?: DeviceReadingOrderByWithRelationInput | DeviceReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceReadings.
     */
    cursor?: DeviceReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceReadings.
     */
    distinct?: DeviceReadingScalarFieldEnum | DeviceReadingScalarFieldEnum[]
  }

  /**
   * DeviceReading findFirstOrThrow
   */
  export type DeviceReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceReading to fetch.
     */
    where?: DeviceReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceReadings to fetch.
     */
    orderBy?: DeviceReadingOrderByWithRelationInput | DeviceReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceReadings.
     */
    cursor?: DeviceReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceReadings.
     */
    distinct?: DeviceReadingScalarFieldEnum | DeviceReadingScalarFieldEnum[]
  }

  /**
   * DeviceReading findMany
   */
  export type DeviceReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter, which DeviceReadings to fetch.
     */
    where?: DeviceReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceReadings to fetch.
     */
    orderBy?: DeviceReadingOrderByWithRelationInput | DeviceReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceReadings.
     */
    cursor?: DeviceReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceReadings.
     */
    distinct?: DeviceReadingScalarFieldEnum | DeviceReadingScalarFieldEnum[]
  }

  /**
   * DeviceReading create
   */
  export type DeviceReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceReading.
     */
    data: XOR<DeviceReadingCreateInput, DeviceReadingUncheckedCreateInput>
  }

  /**
   * DeviceReading createMany
   */
  export type DeviceReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceReadings.
     */
    data: DeviceReadingCreateManyInput | DeviceReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceReading createManyAndReturn
   */
  export type DeviceReadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * The data used to create many DeviceReadings.
     */
    data: DeviceReadingCreateManyInput | DeviceReadingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceReading update
   */
  export type DeviceReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceReading.
     */
    data: XOR<DeviceReadingUpdateInput, DeviceReadingUncheckedUpdateInput>
    /**
     * Choose, which DeviceReading to update.
     */
    where: DeviceReadingWhereUniqueInput
  }

  /**
   * DeviceReading updateMany
   */
  export type DeviceReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceReadings.
     */
    data: XOR<DeviceReadingUpdateManyMutationInput, DeviceReadingUncheckedUpdateManyInput>
    /**
     * Filter which DeviceReadings to update
     */
    where?: DeviceReadingWhereInput
    /**
     * Limit how many DeviceReadings to update.
     */
    limit?: number
  }

  /**
   * DeviceReading updateManyAndReturn
   */
  export type DeviceReadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * The data used to update DeviceReadings.
     */
    data: XOR<DeviceReadingUpdateManyMutationInput, DeviceReadingUncheckedUpdateManyInput>
    /**
     * Filter which DeviceReadings to update
     */
    where?: DeviceReadingWhereInput
    /**
     * Limit how many DeviceReadings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceReading upsert
   */
  export type DeviceReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceReading to update in case it exists.
     */
    where: DeviceReadingWhereUniqueInput
    /**
     * In case the DeviceReading found by the `where` argument doesn't exist, create a new DeviceReading with this data.
     */
    create: XOR<DeviceReadingCreateInput, DeviceReadingUncheckedCreateInput>
    /**
     * In case the DeviceReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceReadingUpdateInput, DeviceReadingUncheckedUpdateInput>
  }

  /**
   * DeviceReading delete
   */
  export type DeviceReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
    /**
     * Filter which DeviceReading to delete.
     */
    where: DeviceReadingWhereUniqueInput
  }

  /**
   * DeviceReading deleteMany
   */
  export type DeviceReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceReadings to delete
     */
    where?: DeviceReadingWhereInput
    /**
     * Limit how many DeviceReadings to delete.
     */
    limit?: number
  }

  /**
   * DeviceReading without action
   */
  export type DeviceReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceReading
     */
    select?: DeviceReadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeviceReading
     */
    omit?: DeviceReadingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceReadingInclude<ExtArgs> | null
  }


  /**
   * Model RentalPackage
   */

  export type AggregateRentalPackage = {
    _count: RentalPackageCountAggregateOutputType | null
    _avg: RentalPackageAvgAggregateOutputType | null
    _sum: RentalPackageSumAggregateOutputType | null
    _min: RentalPackageMinAggregateOutputType | null
    _max: RentalPackageMaxAggregateOutputType | null
  }

  export type RentalPackageAvgAggregateOutputType = {
    id: number | null
    basePrice: number | null
    durationDays: number | null
    durationHours: number | null
    energyLimitKwh: number | null
    pricePerExtraKwh: number | null
    maxDevicesActive: number | null
    propertyId: number | null
  }

  export type RentalPackageSumAggregateOutputType = {
    id: number | null
    basePrice: number | null
    durationDays: number | null
    durationHours: number | null
    energyLimitKwh: number | null
    pricePerExtraKwh: number | null
    maxDevicesActive: number | null
    propertyId: number | null
  }

  export type RentalPackageMinAggregateOutputType = {
    id: number | null
    name: string | null
    basePrice: number | null
    durationDays: number | null
    durationHours: number | null
    energyLimitKwh: number | null
    pricePerExtraKwh: number | null
    maxDevicesActive: number | null
    createdAt: Date | null
    propertyId: number | null
  }

  export type RentalPackageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    basePrice: number | null
    durationDays: number | null
    durationHours: number | null
    energyLimitKwh: number | null
    pricePerExtraKwh: number | null
    maxDevicesActive: number | null
    createdAt: Date | null
    propertyId: number | null
  }

  export type RentalPackageCountAggregateOutputType = {
    id: number
    name: number
    basePrice: number
    durationDays: number
    durationHours: number
    energyLimitKwh: number
    pricePerExtraKwh: number
    maxDevicesActive: number
    createdAt: number
    propertyId: number
    _all: number
  }


  export type RentalPackageAvgAggregateInputType = {
    id?: true
    basePrice?: true
    durationDays?: true
    durationHours?: true
    energyLimitKwh?: true
    pricePerExtraKwh?: true
    maxDevicesActive?: true
    propertyId?: true
  }

  export type RentalPackageSumAggregateInputType = {
    id?: true
    basePrice?: true
    durationDays?: true
    durationHours?: true
    energyLimitKwh?: true
    pricePerExtraKwh?: true
    maxDevicesActive?: true
    propertyId?: true
  }

  export type RentalPackageMinAggregateInputType = {
    id?: true
    name?: true
    basePrice?: true
    durationDays?: true
    durationHours?: true
    energyLimitKwh?: true
    pricePerExtraKwh?: true
    maxDevicesActive?: true
    createdAt?: true
    propertyId?: true
  }

  export type RentalPackageMaxAggregateInputType = {
    id?: true
    name?: true
    basePrice?: true
    durationDays?: true
    durationHours?: true
    energyLimitKwh?: true
    pricePerExtraKwh?: true
    maxDevicesActive?: true
    createdAt?: true
    propertyId?: true
  }

  export type RentalPackageCountAggregateInputType = {
    id?: true
    name?: true
    basePrice?: true
    durationDays?: true
    durationHours?: true
    energyLimitKwh?: true
    pricePerExtraKwh?: true
    maxDevicesActive?: true
    createdAt?: true
    propertyId?: true
    _all?: true
  }

  export type RentalPackageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalPackage to aggregate.
     */
    where?: RentalPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalPackages to fetch.
     */
    orderBy?: RentalPackageOrderByWithRelationInput | RentalPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalPackages
    **/
    _count?: true | RentalPackageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalPackageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalPackageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalPackageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalPackageMaxAggregateInputType
  }

  export type GetRentalPackageAggregateType<T extends RentalPackageAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalPackage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalPackage[P]>
      : GetScalarType<T[P], AggregateRentalPackage[P]>
  }




  export type RentalPackageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalPackageWhereInput
    orderBy?: RentalPackageOrderByWithAggregationInput | RentalPackageOrderByWithAggregationInput[]
    by: RentalPackageScalarFieldEnum[] | RentalPackageScalarFieldEnum
    having?: RentalPackageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalPackageCountAggregateInputType | true
    _avg?: RentalPackageAvgAggregateInputType
    _sum?: RentalPackageSumAggregateInputType
    _min?: RentalPackageMinAggregateInputType
    _max?: RentalPackageMaxAggregateInputType
  }

  export type RentalPackageGroupByOutputType = {
    id: number
    name: string
    basePrice: number
    durationDays: number | null
    durationHours: number | null
    energyLimitKwh: number | null
    pricePerExtraKwh: number | null
    maxDevicesActive: number | null
    createdAt: Date
    propertyId: number
    _count: RentalPackageCountAggregateOutputType | null
    _avg: RentalPackageAvgAggregateOutputType | null
    _sum: RentalPackageSumAggregateOutputType | null
    _min: RentalPackageMinAggregateOutputType | null
    _max: RentalPackageMaxAggregateOutputType | null
  }

  type GetRentalPackageGroupByPayload<T extends RentalPackageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalPackageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalPackageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalPackageGroupByOutputType[P]>
            : GetScalarType<T[P], RentalPackageGroupByOutputType[P]>
        }
      >
    >


  export type RentalPackageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    basePrice?: boolean
    durationDays?: boolean
    durationHours?: boolean
    energyLimitKwh?: boolean
    pricePerExtraKwh?: boolean
    maxDevicesActive?: boolean
    createdAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    sessions?: boolean | RentalPackage$sessionsArgs<ExtArgs>
    _count?: boolean | RentalPackageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalPackage"]>

  export type RentalPackageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    basePrice?: boolean
    durationDays?: boolean
    durationHours?: boolean
    energyLimitKwh?: boolean
    pricePerExtraKwh?: boolean
    maxDevicesActive?: boolean
    createdAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalPackage"]>

  export type RentalPackageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    basePrice?: boolean
    durationDays?: boolean
    durationHours?: boolean
    energyLimitKwh?: boolean
    pricePerExtraKwh?: boolean
    maxDevicesActive?: boolean
    createdAt?: boolean
    propertyId?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalPackage"]>

  export type RentalPackageSelectScalar = {
    id?: boolean
    name?: boolean
    basePrice?: boolean
    durationDays?: boolean
    durationHours?: boolean
    energyLimitKwh?: boolean
    pricePerExtraKwh?: boolean
    maxDevicesActive?: boolean
    createdAt?: boolean
    propertyId?: boolean
  }

  export type RentalPackageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "basePrice" | "durationDays" | "durationHours" | "energyLimitKwh" | "pricePerExtraKwh" | "maxDevicesActive" | "createdAt" | "propertyId", ExtArgs["result"]["rentalPackage"]>
  export type RentalPackageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    sessions?: boolean | RentalPackage$sessionsArgs<ExtArgs>
    _count?: boolean | RentalPackageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalPackageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type RentalPackageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RentalPackagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalPackage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      sessions: Prisma.$StaySessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      basePrice: number
      durationDays: number | null
      durationHours: number | null
      energyLimitKwh: number | null
      pricePerExtraKwh: number | null
      maxDevicesActive: number | null
      createdAt: Date
      propertyId: number
    }, ExtArgs["result"]["rentalPackage"]>
    composites: {}
  }

  type RentalPackageGetPayload<S extends boolean | null | undefined | RentalPackageDefaultArgs> = $Result.GetResult<Prisma.$RentalPackagePayload, S>

  type RentalPackageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalPackageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalPackageCountAggregateInputType | true
    }

  export interface RentalPackageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalPackage'], meta: { name: 'RentalPackage' } }
    /**
     * Find zero or one RentalPackage that matches the filter.
     * @param {RentalPackageFindUniqueArgs} args - Arguments to find a RentalPackage
     * @example
     * // Get one RentalPackage
     * const rentalPackage = await prisma.rentalPackage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalPackageFindUniqueArgs>(args: SelectSubset<T, RentalPackageFindUniqueArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalPackage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalPackageFindUniqueOrThrowArgs} args - Arguments to find a RentalPackage
     * @example
     * // Get one RentalPackage
     * const rentalPackage = await prisma.rentalPackage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalPackageFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalPackageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalPackage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageFindFirstArgs} args - Arguments to find a RentalPackage
     * @example
     * // Get one RentalPackage
     * const rentalPackage = await prisma.rentalPackage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalPackageFindFirstArgs>(args?: SelectSubset<T, RentalPackageFindFirstArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalPackage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageFindFirstOrThrowArgs} args - Arguments to find a RentalPackage
     * @example
     * // Get one RentalPackage
     * const rentalPackage = await prisma.rentalPackage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalPackageFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalPackageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalPackages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalPackages
     * const rentalPackages = await prisma.rentalPackage.findMany()
     * 
     * // Get first 10 RentalPackages
     * const rentalPackages = await prisma.rentalPackage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalPackageWithIdOnly = await prisma.rentalPackage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalPackageFindManyArgs>(args?: SelectSubset<T, RentalPackageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalPackage.
     * @param {RentalPackageCreateArgs} args - Arguments to create a RentalPackage.
     * @example
     * // Create one RentalPackage
     * const RentalPackage = await prisma.rentalPackage.create({
     *   data: {
     *     // ... data to create a RentalPackage
     *   }
     * })
     * 
     */
    create<T extends RentalPackageCreateArgs>(args: SelectSubset<T, RentalPackageCreateArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalPackages.
     * @param {RentalPackageCreateManyArgs} args - Arguments to create many RentalPackages.
     * @example
     * // Create many RentalPackages
     * const rentalPackage = await prisma.rentalPackage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalPackageCreateManyArgs>(args?: SelectSubset<T, RentalPackageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalPackages and returns the data saved in the database.
     * @param {RentalPackageCreateManyAndReturnArgs} args - Arguments to create many RentalPackages.
     * @example
     * // Create many RentalPackages
     * const rentalPackage = await prisma.rentalPackage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalPackages and only return the `id`
     * const rentalPackageWithIdOnly = await prisma.rentalPackage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalPackageCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalPackageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalPackage.
     * @param {RentalPackageDeleteArgs} args - Arguments to delete one RentalPackage.
     * @example
     * // Delete one RentalPackage
     * const RentalPackage = await prisma.rentalPackage.delete({
     *   where: {
     *     // ... filter to delete one RentalPackage
     *   }
     * })
     * 
     */
    delete<T extends RentalPackageDeleteArgs>(args: SelectSubset<T, RentalPackageDeleteArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalPackage.
     * @param {RentalPackageUpdateArgs} args - Arguments to update one RentalPackage.
     * @example
     * // Update one RentalPackage
     * const rentalPackage = await prisma.rentalPackage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalPackageUpdateArgs>(args: SelectSubset<T, RentalPackageUpdateArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalPackages.
     * @param {RentalPackageDeleteManyArgs} args - Arguments to filter RentalPackages to delete.
     * @example
     * // Delete a few RentalPackages
     * const { count } = await prisma.rentalPackage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalPackageDeleteManyArgs>(args?: SelectSubset<T, RentalPackageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalPackages
     * const rentalPackage = await prisma.rentalPackage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalPackageUpdateManyArgs>(args: SelectSubset<T, RentalPackageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalPackages and returns the data updated in the database.
     * @param {RentalPackageUpdateManyAndReturnArgs} args - Arguments to update many RentalPackages.
     * @example
     * // Update many RentalPackages
     * const rentalPackage = await prisma.rentalPackage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalPackages and only return the `id`
     * const rentalPackageWithIdOnly = await prisma.rentalPackage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalPackageUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalPackageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalPackage.
     * @param {RentalPackageUpsertArgs} args - Arguments to update or create a RentalPackage.
     * @example
     * // Update or create a RentalPackage
     * const rentalPackage = await prisma.rentalPackage.upsert({
     *   create: {
     *     // ... data to create a RentalPackage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalPackage we want to update
     *   }
     * })
     */
    upsert<T extends RentalPackageUpsertArgs>(args: SelectSubset<T, RentalPackageUpsertArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalPackages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageCountArgs} args - Arguments to filter RentalPackages to count.
     * @example
     * // Count the number of RentalPackages
     * const count = await prisma.rentalPackage.count({
     *   where: {
     *     // ... the filter for the RentalPackages we want to count
     *   }
     * })
    **/
    count<T extends RentalPackageCountArgs>(
      args?: Subset<T, RentalPackageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalPackageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalPackageAggregateArgs>(args: Subset<T, RentalPackageAggregateArgs>): Prisma.PrismaPromise<GetRentalPackageAggregateType<T>>

    /**
     * Group by RentalPackage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalPackageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RentalPackageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalPackageGroupByArgs['orderBy'] }
        : { orderBy?: RentalPackageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RentalPackageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalPackageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalPackage model
   */
  readonly fields: RentalPackageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalPackage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalPackageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends RentalPackage$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, RentalPackage$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RentalPackage model
   */
  interface RentalPackageFieldRefs {
    readonly id: FieldRef<"RentalPackage", 'Int'>
    readonly name: FieldRef<"RentalPackage", 'String'>
    readonly basePrice: FieldRef<"RentalPackage", 'Float'>
    readonly durationDays: FieldRef<"RentalPackage", 'Int'>
    readonly durationHours: FieldRef<"RentalPackage", 'Int'>
    readonly energyLimitKwh: FieldRef<"RentalPackage", 'Float'>
    readonly pricePerExtraKwh: FieldRef<"RentalPackage", 'Float'>
    readonly maxDevicesActive: FieldRef<"RentalPackage", 'Int'>
    readonly createdAt: FieldRef<"RentalPackage", 'DateTime'>
    readonly propertyId: FieldRef<"RentalPackage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RentalPackage findUnique
   */
  export type RentalPackageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter, which RentalPackage to fetch.
     */
    where: RentalPackageWhereUniqueInput
  }

  /**
   * RentalPackage findUniqueOrThrow
   */
  export type RentalPackageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter, which RentalPackage to fetch.
     */
    where: RentalPackageWhereUniqueInput
  }

  /**
   * RentalPackage findFirst
   */
  export type RentalPackageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter, which RentalPackage to fetch.
     */
    where?: RentalPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalPackages to fetch.
     */
    orderBy?: RentalPackageOrderByWithRelationInput | RentalPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalPackages.
     */
    cursor?: RentalPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalPackages.
     */
    distinct?: RentalPackageScalarFieldEnum | RentalPackageScalarFieldEnum[]
  }

  /**
   * RentalPackage findFirstOrThrow
   */
  export type RentalPackageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter, which RentalPackage to fetch.
     */
    where?: RentalPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalPackages to fetch.
     */
    orderBy?: RentalPackageOrderByWithRelationInput | RentalPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalPackages.
     */
    cursor?: RentalPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalPackages.
     */
    distinct?: RentalPackageScalarFieldEnum | RentalPackageScalarFieldEnum[]
  }

  /**
   * RentalPackage findMany
   */
  export type RentalPackageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter, which RentalPackages to fetch.
     */
    where?: RentalPackageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalPackages to fetch.
     */
    orderBy?: RentalPackageOrderByWithRelationInput | RentalPackageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalPackages.
     */
    cursor?: RentalPackageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalPackages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalPackages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalPackages.
     */
    distinct?: RentalPackageScalarFieldEnum | RentalPackageScalarFieldEnum[]
  }

  /**
   * RentalPackage create
   */
  export type RentalPackageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalPackage.
     */
    data: XOR<RentalPackageCreateInput, RentalPackageUncheckedCreateInput>
  }

  /**
   * RentalPackage createMany
   */
  export type RentalPackageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalPackages.
     */
    data: RentalPackageCreateManyInput | RentalPackageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalPackage createManyAndReturn
   */
  export type RentalPackageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * The data used to create many RentalPackages.
     */
    data: RentalPackageCreateManyInput | RentalPackageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalPackage update
   */
  export type RentalPackageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalPackage.
     */
    data: XOR<RentalPackageUpdateInput, RentalPackageUncheckedUpdateInput>
    /**
     * Choose, which RentalPackage to update.
     */
    where: RentalPackageWhereUniqueInput
  }

  /**
   * RentalPackage updateMany
   */
  export type RentalPackageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalPackages.
     */
    data: XOR<RentalPackageUpdateManyMutationInput, RentalPackageUncheckedUpdateManyInput>
    /**
     * Filter which RentalPackages to update
     */
    where?: RentalPackageWhereInput
    /**
     * Limit how many RentalPackages to update.
     */
    limit?: number
  }

  /**
   * RentalPackage updateManyAndReturn
   */
  export type RentalPackageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * The data used to update RentalPackages.
     */
    data: XOR<RentalPackageUpdateManyMutationInput, RentalPackageUncheckedUpdateManyInput>
    /**
     * Filter which RentalPackages to update
     */
    where?: RentalPackageWhereInput
    /**
     * Limit how many RentalPackages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalPackage upsert
   */
  export type RentalPackageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalPackage to update in case it exists.
     */
    where: RentalPackageWhereUniqueInput
    /**
     * In case the RentalPackage found by the `where` argument doesn't exist, create a new RentalPackage with this data.
     */
    create: XOR<RentalPackageCreateInput, RentalPackageUncheckedCreateInput>
    /**
     * In case the RentalPackage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalPackageUpdateInput, RentalPackageUncheckedUpdateInput>
  }

  /**
   * RentalPackage delete
   */
  export type RentalPackageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    /**
     * Filter which RentalPackage to delete.
     */
    where: RentalPackageWhereUniqueInput
  }

  /**
   * RentalPackage deleteMany
   */
  export type RentalPackageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalPackages to delete
     */
    where?: RentalPackageWhereInput
    /**
     * Limit how many RentalPackages to delete.
     */
    limit?: number
  }

  /**
   * RentalPackage.sessions
   */
  export type RentalPackage$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    where?: StaySessionWhereInput
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    cursor?: StaySessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaySessionScalarFieldEnum | StaySessionScalarFieldEnum[]
  }

  /**
   * RentalPackage without action
   */
  export type RentalPackageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
  }


  /**
   * Model StaySession
   */

  export type AggregateStaySession = {
    _count: StaySessionCountAggregateOutputType | null
    _avg: StaySessionAvgAggregateOutputType | null
    _sum: StaySessionSumAggregateOutputType | null
    _min: StaySessionMinAggregateOutputType | null
    _max: StaySessionMaxAggregateOutputType | null
  }

  export type StaySessionAvgAggregateOutputType = {
    id: number | null
    totalConsumptionKwh: number | null
    extraConsumptionKwh: number | null
    extraCost: number | null
    propertyId: number | null
    packageId: number | null
    customEnergyLimitKwh: number | null
    customPricePerExtraKwh: number | null
  }

  export type StaySessionSumAggregateOutputType = {
    id: number | null
    totalConsumptionKwh: number | null
    extraConsumptionKwh: number | null
    extraCost: number | null
    propertyId: number | null
    packageId: number | null
    customEnergyLimitKwh: number | null
    customPricePerExtraKwh: number | null
  }

  export type StaySessionMinAggregateOutputType = {
    id: number | null
    clientName: string | null
    checkinAt: Date | null
    checkoutAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    status: $Enums.SessionStatus | null
    totalConsumptionKwh: number | null
    extraConsumptionKwh: number | null
    extraCost: number | null
    createdAt: Date | null
    propertyId: number | null
    packageId: number | null
    customEnergyLimitKwh: number | null
    customPricePerExtraKwh: number | null
  }

  export type StaySessionMaxAggregateOutputType = {
    id: number | null
    clientName: string | null
    checkinAt: Date | null
    checkoutAt: Date | null
    startedAt: Date | null
    endedAt: Date | null
    status: $Enums.SessionStatus | null
    totalConsumptionKwh: number | null
    extraConsumptionKwh: number | null
    extraCost: number | null
    createdAt: Date | null
    propertyId: number | null
    packageId: number | null
    customEnergyLimitKwh: number | null
    customPricePerExtraKwh: number | null
  }

  export type StaySessionCountAggregateOutputType = {
    id: number
    clientName: number
    checkinAt: number
    checkoutAt: number
    startedAt: number
    endedAt: number
    status: number
    totalConsumptionKwh: number
    extraConsumptionKwh: number
    extraCost: number
    createdAt: number
    propertyId: number
    packageId: number
    customEnergyLimitKwh: number
    customPricePerExtraKwh: number
    _all: number
  }


  export type StaySessionAvgAggregateInputType = {
    id?: true
    totalConsumptionKwh?: true
    extraConsumptionKwh?: true
    extraCost?: true
    propertyId?: true
    packageId?: true
    customEnergyLimitKwh?: true
    customPricePerExtraKwh?: true
  }

  export type StaySessionSumAggregateInputType = {
    id?: true
    totalConsumptionKwh?: true
    extraConsumptionKwh?: true
    extraCost?: true
    propertyId?: true
    packageId?: true
    customEnergyLimitKwh?: true
    customPricePerExtraKwh?: true
  }

  export type StaySessionMinAggregateInputType = {
    id?: true
    clientName?: true
    checkinAt?: true
    checkoutAt?: true
    startedAt?: true
    endedAt?: true
    status?: true
    totalConsumptionKwh?: true
    extraConsumptionKwh?: true
    extraCost?: true
    createdAt?: true
    propertyId?: true
    packageId?: true
    customEnergyLimitKwh?: true
    customPricePerExtraKwh?: true
  }

  export type StaySessionMaxAggregateInputType = {
    id?: true
    clientName?: true
    checkinAt?: true
    checkoutAt?: true
    startedAt?: true
    endedAt?: true
    status?: true
    totalConsumptionKwh?: true
    extraConsumptionKwh?: true
    extraCost?: true
    createdAt?: true
    propertyId?: true
    packageId?: true
    customEnergyLimitKwh?: true
    customPricePerExtraKwh?: true
  }

  export type StaySessionCountAggregateInputType = {
    id?: true
    clientName?: true
    checkinAt?: true
    checkoutAt?: true
    startedAt?: true
    endedAt?: true
    status?: true
    totalConsumptionKwh?: true
    extraConsumptionKwh?: true
    extraCost?: true
    createdAt?: true
    propertyId?: true
    packageId?: true
    customEnergyLimitKwh?: true
    customPricePerExtraKwh?: true
    _all?: true
  }

  export type StaySessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaySession to aggregate.
     */
    where?: StaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessions to fetch.
     */
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaySessions
    **/
    _count?: true | StaySessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaySessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaySessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaySessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaySessionMaxAggregateInputType
  }

  export type GetStaySessionAggregateType<T extends StaySessionAggregateArgs> = {
        [P in keyof T & keyof AggregateStaySession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaySession[P]>
      : GetScalarType<T[P], AggregateStaySession[P]>
  }




  export type StaySessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionWhereInput
    orderBy?: StaySessionOrderByWithAggregationInput | StaySessionOrderByWithAggregationInput[]
    by: StaySessionScalarFieldEnum[] | StaySessionScalarFieldEnum
    having?: StaySessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaySessionCountAggregateInputType | true
    _avg?: StaySessionAvgAggregateInputType
    _sum?: StaySessionSumAggregateInputType
    _min?: StaySessionMinAggregateInputType
    _max?: StaySessionMaxAggregateInputType
  }

  export type StaySessionGroupByOutputType = {
    id: number
    clientName: string
    checkinAt: Date
    checkoutAt: Date
    startedAt: Date | null
    endedAt: Date | null
    status: $Enums.SessionStatus
    totalConsumptionKwh: number
    extraConsumptionKwh: number
    extraCost: number
    createdAt: Date
    propertyId: number
    packageId: number | null
    customEnergyLimitKwh: number | null
    customPricePerExtraKwh: number | null
    _count: StaySessionCountAggregateOutputType | null
    _avg: StaySessionAvgAggregateOutputType | null
    _sum: StaySessionSumAggregateOutputType | null
    _min: StaySessionMinAggregateOutputType | null
    _max: StaySessionMaxAggregateOutputType | null
  }

  type GetStaySessionGroupByPayload<T extends StaySessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaySessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaySessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaySessionGroupByOutputType[P]>
            : GetScalarType<T[P], StaySessionGroupByOutputType[P]>
        }
      >
    >


  export type StaySessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    checkinAt?: boolean
    checkoutAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    totalConsumptionKwh?: boolean
    extraConsumptionKwh?: boolean
    extraCost?: boolean
    createdAt?: boolean
    propertyId?: boolean
    packageId?: boolean
    customEnergyLimitKwh?: boolean
    customPricePerExtraKwh?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
    devices?: boolean | StaySession$devicesArgs<ExtArgs>
    _count?: boolean | StaySessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staySession"]>

  export type StaySessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    checkinAt?: boolean
    checkoutAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    totalConsumptionKwh?: boolean
    extraConsumptionKwh?: boolean
    extraCost?: boolean
    createdAt?: boolean
    propertyId?: boolean
    packageId?: boolean
    customEnergyLimitKwh?: boolean
    customPricePerExtraKwh?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
  }, ExtArgs["result"]["staySession"]>

  export type StaySessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientName?: boolean
    checkinAt?: boolean
    checkoutAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    totalConsumptionKwh?: boolean
    extraConsumptionKwh?: boolean
    extraCost?: boolean
    createdAt?: boolean
    propertyId?: boolean
    packageId?: boolean
    customEnergyLimitKwh?: boolean
    customPricePerExtraKwh?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
  }, ExtArgs["result"]["staySession"]>

  export type StaySessionSelectScalar = {
    id?: boolean
    clientName?: boolean
    checkinAt?: boolean
    checkoutAt?: boolean
    startedAt?: boolean
    endedAt?: boolean
    status?: boolean
    totalConsumptionKwh?: boolean
    extraConsumptionKwh?: boolean
    extraCost?: boolean
    createdAt?: boolean
    propertyId?: boolean
    packageId?: boolean
    customEnergyLimitKwh?: boolean
    customPricePerExtraKwh?: boolean
  }

  export type StaySessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientName" | "checkinAt" | "checkoutAt" | "startedAt" | "endedAt" | "status" | "totalConsumptionKwh" | "extraConsumptionKwh" | "extraCost" | "createdAt" | "propertyId" | "packageId" | "customEnergyLimitKwh" | "customPricePerExtraKwh", ExtArgs["result"]["staySession"]>
  export type StaySessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
    devices?: boolean | StaySession$devicesArgs<ExtArgs>
    _count?: boolean | StaySessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StaySessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
  }
  export type StaySessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    package?: boolean | StaySession$packageArgs<ExtArgs>
  }

  export type $StaySessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaySession"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      package: Prisma.$RentalPackagePayload<ExtArgs> | null
      devices: Prisma.$StaySessionDevicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientName: string
      checkinAt: Date
      checkoutAt: Date
      startedAt: Date | null
      endedAt: Date | null
      status: $Enums.SessionStatus
      totalConsumptionKwh: number
      extraConsumptionKwh: number
      extraCost: number
      createdAt: Date
      propertyId: number
      packageId: number | null
      customEnergyLimitKwh: number | null
      customPricePerExtraKwh: number | null
    }, ExtArgs["result"]["staySession"]>
    composites: {}
  }

  type StaySessionGetPayload<S extends boolean | null | undefined | StaySessionDefaultArgs> = $Result.GetResult<Prisma.$StaySessionPayload, S>

  type StaySessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaySessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaySessionCountAggregateInputType | true
    }

  export interface StaySessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaySession'], meta: { name: 'StaySession' } }
    /**
     * Find zero or one StaySession that matches the filter.
     * @param {StaySessionFindUniqueArgs} args - Arguments to find a StaySession
     * @example
     * // Get one StaySession
     * const staySession = await prisma.staySession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaySessionFindUniqueArgs>(args: SelectSubset<T, StaySessionFindUniqueArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaySession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaySessionFindUniqueOrThrowArgs} args - Arguments to find a StaySession
     * @example
     * // Get one StaySession
     * const staySession = await prisma.staySession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaySessionFindUniqueOrThrowArgs>(args: SelectSubset<T, StaySessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaySession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionFindFirstArgs} args - Arguments to find a StaySession
     * @example
     * // Get one StaySession
     * const staySession = await prisma.staySession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaySessionFindFirstArgs>(args?: SelectSubset<T, StaySessionFindFirstArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaySession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionFindFirstOrThrowArgs} args - Arguments to find a StaySession
     * @example
     * // Get one StaySession
     * const staySession = await prisma.staySession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaySessionFindFirstOrThrowArgs>(args?: SelectSubset<T, StaySessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaySessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaySessions
     * const staySessions = await prisma.staySession.findMany()
     * 
     * // Get first 10 StaySessions
     * const staySessions = await prisma.staySession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staySessionWithIdOnly = await prisma.staySession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaySessionFindManyArgs>(args?: SelectSubset<T, StaySessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaySession.
     * @param {StaySessionCreateArgs} args - Arguments to create a StaySession.
     * @example
     * // Create one StaySession
     * const StaySession = await prisma.staySession.create({
     *   data: {
     *     // ... data to create a StaySession
     *   }
     * })
     * 
     */
    create<T extends StaySessionCreateArgs>(args: SelectSubset<T, StaySessionCreateArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaySessions.
     * @param {StaySessionCreateManyArgs} args - Arguments to create many StaySessions.
     * @example
     * // Create many StaySessions
     * const staySession = await prisma.staySession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaySessionCreateManyArgs>(args?: SelectSubset<T, StaySessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaySessions and returns the data saved in the database.
     * @param {StaySessionCreateManyAndReturnArgs} args - Arguments to create many StaySessions.
     * @example
     * // Create many StaySessions
     * const staySession = await prisma.staySession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaySessions and only return the `id`
     * const staySessionWithIdOnly = await prisma.staySession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaySessionCreateManyAndReturnArgs>(args?: SelectSubset<T, StaySessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaySession.
     * @param {StaySessionDeleteArgs} args - Arguments to delete one StaySession.
     * @example
     * // Delete one StaySession
     * const StaySession = await prisma.staySession.delete({
     *   where: {
     *     // ... filter to delete one StaySession
     *   }
     * })
     * 
     */
    delete<T extends StaySessionDeleteArgs>(args: SelectSubset<T, StaySessionDeleteArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaySession.
     * @param {StaySessionUpdateArgs} args - Arguments to update one StaySession.
     * @example
     * // Update one StaySession
     * const staySession = await prisma.staySession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaySessionUpdateArgs>(args: SelectSubset<T, StaySessionUpdateArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaySessions.
     * @param {StaySessionDeleteManyArgs} args - Arguments to filter StaySessions to delete.
     * @example
     * // Delete a few StaySessions
     * const { count } = await prisma.staySession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaySessionDeleteManyArgs>(args?: SelectSubset<T, StaySessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaySessions
     * const staySession = await prisma.staySession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaySessionUpdateManyArgs>(args: SelectSubset<T, StaySessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaySessions and returns the data updated in the database.
     * @param {StaySessionUpdateManyAndReturnArgs} args - Arguments to update many StaySessions.
     * @example
     * // Update many StaySessions
     * const staySession = await prisma.staySession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaySessions and only return the `id`
     * const staySessionWithIdOnly = await prisma.staySession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaySessionUpdateManyAndReturnArgs>(args: SelectSubset<T, StaySessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaySession.
     * @param {StaySessionUpsertArgs} args - Arguments to update or create a StaySession.
     * @example
     * // Update or create a StaySession
     * const staySession = await prisma.staySession.upsert({
     *   create: {
     *     // ... data to create a StaySession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaySession we want to update
     *   }
     * })
     */
    upsert<T extends StaySessionUpsertArgs>(args: SelectSubset<T, StaySessionUpsertArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaySessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionCountArgs} args - Arguments to filter StaySessions to count.
     * @example
     * // Count the number of StaySessions
     * const count = await prisma.staySession.count({
     *   where: {
     *     // ... the filter for the StaySessions we want to count
     *   }
     * })
    **/
    count<T extends StaySessionCountArgs>(
      args?: Subset<T, StaySessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaySessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaySessionAggregateArgs>(args: Subset<T, StaySessionAggregateArgs>): Prisma.PrismaPromise<GetStaySessionAggregateType<T>>

    /**
     * Group by StaySession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaySessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaySessionGroupByArgs['orderBy'] }
        : { orderBy?: StaySessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaySessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaySessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaySession model
   */
  readonly fields: StaySessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaySession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaySessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    package<T extends StaySession$packageArgs<ExtArgs> = {}>(args?: Subset<T, StaySession$packageArgs<ExtArgs>>): Prisma__RentalPackageClient<$Result.GetResult<Prisma.$RentalPackagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    devices<T extends StaySession$devicesArgs<ExtArgs> = {}>(args?: Subset<T, StaySession$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaySession model
   */
  interface StaySessionFieldRefs {
    readonly id: FieldRef<"StaySession", 'Int'>
    readonly clientName: FieldRef<"StaySession", 'String'>
    readonly checkinAt: FieldRef<"StaySession", 'DateTime'>
    readonly checkoutAt: FieldRef<"StaySession", 'DateTime'>
    readonly startedAt: FieldRef<"StaySession", 'DateTime'>
    readonly endedAt: FieldRef<"StaySession", 'DateTime'>
    readonly status: FieldRef<"StaySession", 'SessionStatus'>
    readonly totalConsumptionKwh: FieldRef<"StaySession", 'Float'>
    readonly extraConsumptionKwh: FieldRef<"StaySession", 'Float'>
    readonly extraCost: FieldRef<"StaySession", 'Float'>
    readonly createdAt: FieldRef<"StaySession", 'DateTime'>
    readonly propertyId: FieldRef<"StaySession", 'Int'>
    readonly packageId: FieldRef<"StaySession", 'Int'>
    readonly customEnergyLimitKwh: FieldRef<"StaySession", 'Float'>
    readonly customPricePerExtraKwh: FieldRef<"StaySession", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StaySession findUnique
   */
  export type StaySessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter, which StaySession to fetch.
     */
    where: StaySessionWhereUniqueInput
  }

  /**
   * StaySession findUniqueOrThrow
   */
  export type StaySessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter, which StaySession to fetch.
     */
    where: StaySessionWhereUniqueInput
  }

  /**
   * StaySession findFirst
   */
  export type StaySessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter, which StaySession to fetch.
     */
    where?: StaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessions to fetch.
     */
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaySessions.
     */
    cursor?: StaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessions.
     */
    distinct?: StaySessionScalarFieldEnum | StaySessionScalarFieldEnum[]
  }

  /**
   * StaySession findFirstOrThrow
   */
  export type StaySessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter, which StaySession to fetch.
     */
    where?: StaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessions to fetch.
     */
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaySessions.
     */
    cursor?: StaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessions.
     */
    distinct?: StaySessionScalarFieldEnum | StaySessionScalarFieldEnum[]
  }

  /**
   * StaySession findMany
   */
  export type StaySessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter, which StaySessions to fetch.
     */
    where?: StaySessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessions to fetch.
     */
    orderBy?: StaySessionOrderByWithRelationInput | StaySessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaySessions.
     */
    cursor?: StaySessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessions.
     */
    distinct?: StaySessionScalarFieldEnum | StaySessionScalarFieldEnum[]
  }

  /**
   * StaySession create
   */
  export type StaySessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * The data needed to create a StaySession.
     */
    data: XOR<StaySessionCreateInput, StaySessionUncheckedCreateInput>
  }

  /**
   * StaySession createMany
   */
  export type StaySessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaySessions.
     */
    data: StaySessionCreateManyInput | StaySessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaySession createManyAndReturn
   */
  export type StaySessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * The data used to create many StaySessions.
     */
    data: StaySessionCreateManyInput | StaySessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaySession update
   */
  export type StaySessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * The data needed to update a StaySession.
     */
    data: XOR<StaySessionUpdateInput, StaySessionUncheckedUpdateInput>
    /**
     * Choose, which StaySession to update.
     */
    where: StaySessionWhereUniqueInput
  }

  /**
   * StaySession updateMany
   */
  export type StaySessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaySessions.
     */
    data: XOR<StaySessionUpdateManyMutationInput, StaySessionUncheckedUpdateManyInput>
    /**
     * Filter which StaySessions to update
     */
    where?: StaySessionWhereInput
    /**
     * Limit how many StaySessions to update.
     */
    limit?: number
  }

  /**
   * StaySession updateManyAndReturn
   */
  export type StaySessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * The data used to update StaySessions.
     */
    data: XOR<StaySessionUpdateManyMutationInput, StaySessionUncheckedUpdateManyInput>
    /**
     * Filter which StaySessions to update
     */
    where?: StaySessionWhereInput
    /**
     * Limit how many StaySessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaySession upsert
   */
  export type StaySessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * The filter to search for the StaySession to update in case it exists.
     */
    where: StaySessionWhereUniqueInput
    /**
     * In case the StaySession found by the `where` argument doesn't exist, create a new StaySession with this data.
     */
    create: XOR<StaySessionCreateInput, StaySessionUncheckedCreateInput>
    /**
     * In case the StaySession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaySessionUpdateInput, StaySessionUncheckedUpdateInput>
  }

  /**
   * StaySession delete
   */
  export type StaySessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
    /**
     * Filter which StaySession to delete.
     */
    where: StaySessionWhereUniqueInput
  }

  /**
   * StaySession deleteMany
   */
  export type StaySessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaySessions to delete
     */
    where?: StaySessionWhereInput
    /**
     * Limit how many StaySessions to delete.
     */
    limit?: number
  }

  /**
   * StaySession.package
   */
  export type StaySession$packageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalPackage
     */
    select?: RentalPackageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalPackage
     */
    omit?: RentalPackageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalPackageInclude<ExtArgs> | null
    where?: RentalPackageWhereInput
  }

  /**
   * StaySession.devices
   */
  export type StaySession$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    where?: StaySessionDeviceWhereInput
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    cursor?: StaySessionDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaySessionDeviceScalarFieldEnum | StaySessionDeviceScalarFieldEnum[]
  }

  /**
   * StaySession without action
   */
  export type StaySessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySession
     */
    select?: StaySessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySession
     */
    omit?: StaySessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionInclude<ExtArgs> | null
  }


  /**
   * Model StaySessionDevice
   */

  export type AggregateStaySessionDevice = {
    _count: StaySessionDeviceCountAggregateOutputType | null
    _avg: StaySessionDeviceAvgAggregateOutputType | null
    _sum: StaySessionDeviceSumAggregateOutputType | null
    _min: StaySessionDeviceMinAggregateOutputType | null
    _max: StaySessionDeviceMaxAggregateOutputType | null
  }

  export type StaySessionDeviceAvgAggregateOutputType = {
    id: number | null
    sessionId: number | null
    deviceId: number | null
  }

  export type StaySessionDeviceSumAggregateOutputType = {
    id: number | null
    sessionId: number | null
    deviceId: number | null
  }

  export type StaySessionDeviceMinAggregateOutputType = {
    id: number | null
    isAllowed: boolean | null
    sessionId: number | null
    deviceId: number | null
  }

  export type StaySessionDeviceMaxAggregateOutputType = {
    id: number | null
    isAllowed: boolean | null
    sessionId: number | null
    deviceId: number | null
  }

  export type StaySessionDeviceCountAggregateOutputType = {
    id: number
    isAllowed: number
    sessionId: number
    deviceId: number
    _all: number
  }


  export type StaySessionDeviceAvgAggregateInputType = {
    id?: true
    sessionId?: true
    deviceId?: true
  }

  export type StaySessionDeviceSumAggregateInputType = {
    id?: true
    sessionId?: true
    deviceId?: true
  }

  export type StaySessionDeviceMinAggregateInputType = {
    id?: true
    isAllowed?: true
    sessionId?: true
    deviceId?: true
  }

  export type StaySessionDeviceMaxAggregateInputType = {
    id?: true
    isAllowed?: true
    sessionId?: true
    deviceId?: true
  }

  export type StaySessionDeviceCountAggregateInputType = {
    id?: true
    isAllowed?: true
    sessionId?: true
    deviceId?: true
    _all?: true
  }

  export type StaySessionDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaySessionDevice to aggregate.
     */
    where?: StaySessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessionDevices to fetch.
     */
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaySessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaySessionDevices
    **/
    _count?: true | StaySessionDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaySessionDeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaySessionDeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaySessionDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaySessionDeviceMaxAggregateInputType
  }

  export type GetStaySessionDeviceAggregateType<T extends StaySessionDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateStaySessionDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaySessionDevice[P]>
      : GetScalarType<T[P], AggregateStaySessionDevice[P]>
  }




  export type StaySessionDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaySessionDeviceWhereInput
    orderBy?: StaySessionDeviceOrderByWithAggregationInput | StaySessionDeviceOrderByWithAggregationInput[]
    by: StaySessionDeviceScalarFieldEnum[] | StaySessionDeviceScalarFieldEnum
    having?: StaySessionDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaySessionDeviceCountAggregateInputType | true
    _avg?: StaySessionDeviceAvgAggregateInputType
    _sum?: StaySessionDeviceSumAggregateInputType
    _min?: StaySessionDeviceMinAggregateInputType
    _max?: StaySessionDeviceMaxAggregateInputType
  }

  export type StaySessionDeviceGroupByOutputType = {
    id: number
    isAllowed: boolean
    sessionId: number
    deviceId: number
    _count: StaySessionDeviceCountAggregateOutputType | null
    _avg: StaySessionDeviceAvgAggregateOutputType | null
    _sum: StaySessionDeviceSumAggregateOutputType | null
    _min: StaySessionDeviceMinAggregateOutputType | null
    _max: StaySessionDeviceMaxAggregateOutputType | null
  }

  type GetStaySessionDeviceGroupByPayload<T extends StaySessionDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaySessionDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaySessionDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaySessionDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], StaySessionDeviceGroupByOutputType[P]>
        }
      >
    >


  export type StaySessionDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAllowed?: boolean
    sessionId?: boolean
    deviceId?: boolean
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staySessionDevice"]>

  export type StaySessionDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAllowed?: boolean
    sessionId?: boolean
    deviceId?: boolean
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staySessionDevice"]>

  export type StaySessionDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAllowed?: boolean
    sessionId?: boolean
    deviceId?: boolean
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staySessionDevice"]>

  export type StaySessionDeviceSelectScalar = {
    id?: boolean
    isAllowed?: boolean
    sessionId?: boolean
    deviceId?: boolean
  }

  export type StaySessionDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isAllowed" | "sessionId" | "deviceId", ExtArgs["result"]["staySessionDevice"]>
  export type StaySessionDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type StaySessionDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type StaySessionDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | StaySessionDefaultArgs<ExtArgs>
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $StaySessionDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaySessionDevice"
    objects: {
      session: Prisma.$StaySessionPayload<ExtArgs>
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isAllowed: boolean
      sessionId: number
      deviceId: number
    }, ExtArgs["result"]["staySessionDevice"]>
    composites: {}
  }

  type StaySessionDeviceGetPayload<S extends boolean | null | undefined | StaySessionDeviceDefaultArgs> = $Result.GetResult<Prisma.$StaySessionDevicePayload, S>

  type StaySessionDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaySessionDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaySessionDeviceCountAggregateInputType | true
    }

  export interface StaySessionDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaySessionDevice'], meta: { name: 'StaySessionDevice' } }
    /**
     * Find zero or one StaySessionDevice that matches the filter.
     * @param {StaySessionDeviceFindUniqueArgs} args - Arguments to find a StaySessionDevice
     * @example
     * // Get one StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaySessionDeviceFindUniqueArgs>(args: SelectSubset<T, StaySessionDeviceFindUniqueArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaySessionDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaySessionDeviceFindUniqueOrThrowArgs} args - Arguments to find a StaySessionDevice
     * @example
     * // Get one StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaySessionDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, StaySessionDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaySessionDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceFindFirstArgs} args - Arguments to find a StaySessionDevice
     * @example
     * // Get one StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaySessionDeviceFindFirstArgs>(args?: SelectSubset<T, StaySessionDeviceFindFirstArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaySessionDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceFindFirstOrThrowArgs} args - Arguments to find a StaySessionDevice
     * @example
     * // Get one StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaySessionDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, StaySessionDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaySessionDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaySessionDevices
     * const staySessionDevices = await prisma.staySessionDevice.findMany()
     * 
     * // Get first 10 StaySessionDevices
     * const staySessionDevices = await prisma.staySessionDevice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staySessionDeviceWithIdOnly = await prisma.staySessionDevice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaySessionDeviceFindManyArgs>(args?: SelectSubset<T, StaySessionDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaySessionDevice.
     * @param {StaySessionDeviceCreateArgs} args - Arguments to create a StaySessionDevice.
     * @example
     * // Create one StaySessionDevice
     * const StaySessionDevice = await prisma.staySessionDevice.create({
     *   data: {
     *     // ... data to create a StaySessionDevice
     *   }
     * })
     * 
     */
    create<T extends StaySessionDeviceCreateArgs>(args: SelectSubset<T, StaySessionDeviceCreateArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaySessionDevices.
     * @param {StaySessionDeviceCreateManyArgs} args - Arguments to create many StaySessionDevices.
     * @example
     * // Create many StaySessionDevices
     * const staySessionDevice = await prisma.staySessionDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaySessionDeviceCreateManyArgs>(args?: SelectSubset<T, StaySessionDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaySessionDevices and returns the data saved in the database.
     * @param {StaySessionDeviceCreateManyAndReturnArgs} args - Arguments to create many StaySessionDevices.
     * @example
     * // Create many StaySessionDevices
     * const staySessionDevice = await prisma.staySessionDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaySessionDevices and only return the `id`
     * const staySessionDeviceWithIdOnly = await prisma.staySessionDevice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaySessionDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, StaySessionDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaySessionDevice.
     * @param {StaySessionDeviceDeleteArgs} args - Arguments to delete one StaySessionDevice.
     * @example
     * // Delete one StaySessionDevice
     * const StaySessionDevice = await prisma.staySessionDevice.delete({
     *   where: {
     *     // ... filter to delete one StaySessionDevice
     *   }
     * })
     * 
     */
    delete<T extends StaySessionDeviceDeleteArgs>(args: SelectSubset<T, StaySessionDeviceDeleteArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaySessionDevice.
     * @param {StaySessionDeviceUpdateArgs} args - Arguments to update one StaySessionDevice.
     * @example
     * // Update one StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaySessionDeviceUpdateArgs>(args: SelectSubset<T, StaySessionDeviceUpdateArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaySessionDevices.
     * @param {StaySessionDeviceDeleteManyArgs} args - Arguments to filter StaySessionDevices to delete.
     * @example
     * // Delete a few StaySessionDevices
     * const { count } = await prisma.staySessionDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaySessionDeviceDeleteManyArgs>(args?: SelectSubset<T, StaySessionDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaySessionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaySessionDevices
     * const staySessionDevice = await prisma.staySessionDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaySessionDeviceUpdateManyArgs>(args: SelectSubset<T, StaySessionDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaySessionDevices and returns the data updated in the database.
     * @param {StaySessionDeviceUpdateManyAndReturnArgs} args - Arguments to update many StaySessionDevices.
     * @example
     * // Update many StaySessionDevices
     * const staySessionDevice = await prisma.staySessionDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaySessionDevices and only return the `id`
     * const staySessionDeviceWithIdOnly = await prisma.staySessionDevice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaySessionDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, StaySessionDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaySessionDevice.
     * @param {StaySessionDeviceUpsertArgs} args - Arguments to update or create a StaySessionDevice.
     * @example
     * // Update or create a StaySessionDevice
     * const staySessionDevice = await prisma.staySessionDevice.upsert({
     *   create: {
     *     // ... data to create a StaySessionDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaySessionDevice we want to update
     *   }
     * })
     */
    upsert<T extends StaySessionDeviceUpsertArgs>(args: SelectSubset<T, StaySessionDeviceUpsertArgs<ExtArgs>>): Prisma__StaySessionDeviceClient<$Result.GetResult<Prisma.$StaySessionDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaySessionDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceCountArgs} args - Arguments to filter StaySessionDevices to count.
     * @example
     * // Count the number of StaySessionDevices
     * const count = await prisma.staySessionDevice.count({
     *   where: {
     *     // ... the filter for the StaySessionDevices we want to count
     *   }
     * })
    **/
    count<T extends StaySessionDeviceCountArgs>(
      args?: Subset<T, StaySessionDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaySessionDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaySessionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaySessionDeviceAggregateArgs>(args: Subset<T, StaySessionDeviceAggregateArgs>): Prisma.PrismaPromise<GetStaySessionDeviceAggregateType<T>>

    /**
     * Group by StaySessionDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaySessionDeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaySessionDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaySessionDeviceGroupByArgs['orderBy'] }
        : { orderBy?: StaySessionDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaySessionDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaySessionDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaySessionDevice model
   */
  readonly fields: StaySessionDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaySessionDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaySessionDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends StaySessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StaySessionDefaultArgs<ExtArgs>>): Prisma__StaySessionClient<$Result.GetResult<Prisma.$StaySessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaySessionDevice model
   */
  interface StaySessionDeviceFieldRefs {
    readonly id: FieldRef<"StaySessionDevice", 'Int'>
    readonly isAllowed: FieldRef<"StaySessionDevice", 'Boolean'>
    readonly sessionId: FieldRef<"StaySessionDevice", 'Int'>
    readonly deviceId: FieldRef<"StaySessionDevice", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StaySessionDevice findUnique
   */
  export type StaySessionDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which StaySessionDevice to fetch.
     */
    where: StaySessionDeviceWhereUniqueInput
  }

  /**
   * StaySessionDevice findUniqueOrThrow
   */
  export type StaySessionDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which StaySessionDevice to fetch.
     */
    where: StaySessionDeviceWhereUniqueInput
  }

  /**
   * StaySessionDevice findFirst
   */
  export type StaySessionDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which StaySessionDevice to fetch.
     */
    where?: StaySessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessionDevices to fetch.
     */
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaySessionDevices.
     */
    cursor?: StaySessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessionDevices.
     */
    distinct?: StaySessionDeviceScalarFieldEnum | StaySessionDeviceScalarFieldEnum[]
  }

  /**
   * StaySessionDevice findFirstOrThrow
   */
  export type StaySessionDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which StaySessionDevice to fetch.
     */
    where?: StaySessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessionDevices to fetch.
     */
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaySessionDevices.
     */
    cursor?: StaySessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessionDevices.
     */
    distinct?: StaySessionDeviceScalarFieldEnum | StaySessionDeviceScalarFieldEnum[]
  }

  /**
   * StaySessionDevice findMany
   */
  export type StaySessionDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter, which StaySessionDevices to fetch.
     */
    where?: StaySessionDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaySessionDevices to fetch.
     */
    orderBy?: StaySessionDeviceOrderByWithRelationInput | StaySessionDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaySessionDevices.
     */
    cursor?: StaySessionDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaySessionDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaySessionDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaySessionDevices.
     */
    distinct?: StaySessionDeviceScalarFieldEnum | StaySessionDeviceScalarFieldEnum[]
  }

  /**
   * StaySessionDevice create
   */
  export type StaySessionDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a StaySessionDevice.
     */
    data: XOR<StaySessionDeviceCreateInput, StaySessionDeviceUncheckedCreateInput>
  }

  /**
   * StaySessionDevice createMany
   */
  export type StaySessionDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaySessionDevices.
     */
    data: StaySessionDeviceCreateManyInput | StaySessionDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StaySessionDevice createManyAndReturn
   */
  export type StaySessionDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many StaySessionDevices.
     */
    data: StaySessionDeviceCreateManyInput | StaySessionDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaySessionDevice update
   */
  export type StaySessionDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a StaySessionDevice.
     */
    data: XOR<StaySessionDeviceUpdateInput, StaySessionDeviceUncheckedUpdateInput>
    /**
     * Choose, which StaySessionDevice to update.
     */
    where: StaySessionDeviceWhereUniqueInput
  }

  /**
   * StaySessionDevice updateMany
   */
  export type StaySessionDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaySessionDevices.
     */
    data: XOR<StaySessionDeviceUpdateManyMutationInput, StaySessionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which StaySessionDevices to update
     */
    where?: StaySessionDeviceWhereInput
    /**
     * Limit how many StaySessionDevices to update.
     */
    limit?: number
  }

  /**
   * StaySessionDevice updateManyAndReturn
   */
  export type StaySessionDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * The data used to update StaySessionDevices.
     */
    data: XOR<StaySessionDeviceUpdateManyMutationInput, StaySessionDeviceUncheckedUpdateManyInput>
    /**
     * Filter which StaySessionDevices to update
     */
    where?: StaySessionDeviceWhereInput
    /**
     * Limit how many StaySessionDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StaySessionDevice upsert
   */
  export type StaySessionDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the StaySessionDevice to update in case it exists.
     */
    where: StaySessionDeviceWhereUniqueInput
    /**
     * In case the StaySessionDevice found by the `where` argument doesn't exist, create a new StaySessionDevice with this data.
     */
    create: XOR<StaySessionDeviceCreateInput, StaySessionDeviceUncheckedCreateInput>
    /**
     * In case the StaySessionDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaySessionDeviceUpdateInput, StaySessionDeviceUncheckedUpdateInput>
  }

  /**
   * StaySessionDevice delete
   */
  export type StaySessionDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
    /**
     * Filter which StaySessionDevice to delete.
     */
    where: StaySessionDeviceWhereUniqueInput
  }

  /**
   * StaySessionDevice deleteMany
   */
  export type StaySessionDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaySessionDevices to delete
     */
    where?: StaySessionDeviceWhereInput
    /**
     * Limit how many StaySessionDevices to delete.
     */
    limit?: number
  }

  /**
   * StaySessionDevice without action
   */
  export type StaySessionDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaySessionDevice
     */
    select?: StaySessionDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaySessionDevice
     */
    omit?: StaySessionDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StaySessionDeviceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    topic: 'topic',
    createdAt: 'createdAt',
    isActive: 'isActive',
    lastSeen: 'lastSeen',
    powerWatts: 'powerWatts',
    propertyId: 'propertyId'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const DeviceReadingScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    deviceId: 'deviceId'
  };

  export type DeviceReadingScalarFieldEnum = (typeof DeviceReadingScalarFieldEnum)[keyof typeof DeviceReadingScalarFieldEnum]


  export const RentalPackageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    basePrice: 'basePrice',
    durationDays: 'durationDays',
    durationHours: 'durationHours',
    energyLimitKwh: 'energyLimitKwh',
    pricePerExtraKwh: 'pricePerExtraKwh',
    maxDevicesActive: 'maxDevicesActive',
    createdAt: 'createdAt',
    propertyId: 'propertyId'
  };

  export type RentalPackageScalarFieldEnum = (typeof RentalPackageScalarFieldEnum)[keyof typeof RentalPackageScalarFieldEnum]


  export const StaySessionScalarFieldEnum: {
    id: 'id',
    clientName: 'clientName',
    checkinAt: 'checkinAt',
    checkoutAt: 'checkoutAt',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    status: 'status',
    totalConsumptionKwh: 'totalConsumptionKwh',
    extraConsumptionKwh: 'extraConsumptionKwh',
    extraCost: 'extraCost',
    createdAt: 'createdAt',
    propertyId: 'propertyId',
    packageId: 'packageId',
    customEnergyLimitKwh: 'customEnergyLimitKwh',
    customPricePerExtraKwh: 'customPricePerExtraKwh'
  };

  export type StaySessionScalarFieldEnum = (typeof StaySessionScalarFieldEnum)[keyof typeof StaySessionScalarFieldEnum]


  export const StaySessionDeviceScalarFieldEnum: {
    id: 'id',
    isAllowed: 'isAllowed',
    sessionId: 'sessionId',
    deviceId: 'deviceId'
  };

  export type StaySessionDeviceScalarFieldEnum = (typeof StaySessionDeviceScalarFieldEnum)[keyof typeof StaySessionDeviceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    properties?: PropertyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    userId?: IntFilter<"Property"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: DeviceListRelationFilter
    sessions?: StaySessionListRelationFilter
    packages?: RentalPackageListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    devices?: DeviceOrderByRelationAggregateInput
    sessions?: StaySessionOrderByRelationAggregateInput
    packages?: RentalPackageOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    name?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    userId?: IntFilter<"Property"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    devices?: DeviceListRelationFilter
    sessions?: StaySessionListRelationFilter
    packages?: RentalPackageListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    name?: StringWithAggregatesFilter<"Property"> | string
    address?: StringNullableWithAggregatesFilter<"Property"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    userId?: IntWithAggregatesFilter<"Property"> | number
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    topic?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    isActive?: BoolFilter<"Device"> | boolean
    lastSeen?: DateTimeNullableFilter<"Device"> | Date | string | null
    powerWatts?: FloatNullableFilter<"Device"> | number | null
    propertyId?: IntFilter<"Device"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    readings?: DeviceReadingListRelationFilter
    sessions?: StaySessionDeviceListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    powerWatts?: SortOrderInput | SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    readings?: DeviceReadingOrderByRelationAggregateInput
    sessions?: StaySessionDeviceOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    topic?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    isActive?: BoolFilter<"Device"> | boolean
    lastSeen?: DateTimeNullableFilter<"Device"> | Date | string | null
    powerWatts?: FloatNullableFilter<"Device"> | number | null
    propertyId?: IntFilter<"Device"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    readings?: DeviceReadingListRelationFilter
    sessions?: StaySessionDeviceListRelationFilter
  }, "id" | "topic">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrderInput | SortOrder
    powerWatts?: SortOrderInput | SortOrder
    propertyId?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Device"> | number
    name?: StringWithAggregatesFilter<"Device"> | string
    type?: StringWithAggregatesFilter<"Device"> | string
    topic?: StringWithAggregatesFilter<"Device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    isActive?: BoolWithAggregatesFilter<"Device"> | boolean
    lastSeen?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    powerWatts?: FloatNullableWithAggregatesFilter<"Device"> | number | null
    propertyId?: IntWithAggregatesFilter<"Device"> | number
  }

  export type DeviceReadingWhereInput = {
    AND?: DeviceReadingWhereInput | DeviceReadingWhereInput[]
    OR?: DeviceReadingWhereInput[]
    NOT?: DeviceReadingWhereInput | DeviceReadingWhereInput[]
    id?: BigIntFilter<"DeviceReading"> | bigint | number
    value?: FloatFilter<"DeviceReading"> | number
    createdAt?: DateTimeFilter<"DeviceReading"> | Date | string
    deviceId?: IntFilter<"DeviceReading"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type DeviceReadingOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: DeviceReadingWhereInput | DeviceReadingWhereInput[]
    OR?: DeviceReadingWhereInput[]
    NOT?: DeviceReadingWhereInput | DeviceReadingWhereInput[]
    value?: FloatFilter<"DeviceReading"> | number
    createdAt?: DateTimeFilter<"DeviceReading"> | Date | string
    deviceId?: IntFilter<"DeviceReading"> | number
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id">

  export type DeviceReadingOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
    _count?: DeviceReadingCountOrderByAggregateInput
    _avg?: DeviceReadingAvgOrderByAggregateInput
    _max?: DeviceReadingMaxOrderByAggregateInput
    _min?: DeviceReadingMinOrderByAggregateInput
    _sum?: DeviceReadingSumOrderByAggregateInput
  }

  export type DeviceReadingScalarWhereWithAggregatesInput = {
    AND?: DeviceReadingScalarWhereWithAggregatesInput | DeviceReadingScalarWhereWithAggregatesInput[]
    OR?: DeviceReadingScalarWhereWithAggregatesInput[]
    NOT?: DeviceReadingScalarWhereWithAggregatesInput | DeviceReadingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"DeviceReading"> | bigint | number
    value?: FloatWithAggregatesFilter<"DeviceReading"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DeviceReading"> | Date | string
    deviceId?: IntWithAggregatesFilter<"DeviceReading"> | number
  }

  export type RentalPackageWhereInput = {
    AND?: RentalPackageWhereInput | RentalPackageWhereInput[]
    OR?: RentalPackageWhereInput[]
    NOT?: RentalPackageWhereInput | RentalPackageWhereInput[]
    id?: IntFilter<"RentalPackage"> | number
    name?: StringFilter<"RentalPackage"> | string
    basePrice?: FloatFilter<"RentalPackage"> | number
    durationDays?: IntNullableFilter<"RentalPackage"> | number | null
    durationHours?: IntNullableFilter<"RentalPackage"> | number | null
    energyLimitKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    pricePerExtraKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    maxDevicesActive?: IntNullableFilter<"RentalPackage"> | number | null
    createdAt?: DateTimeFilter<"RentalPackage"> | Date | string
    propertyId?: IntFilter<"RentalPackage"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    sessions?: StaySessionListRelationFilter
  }

  export type RentalPackageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrderInput | SortOrder
    durationHours?: SortOrderInput | SortOrder
    energyLimitKwh?: SortOrderInput | SortOrder
    pricePerExtraKwh?: SortOrderInput | SortOrder
    maxDevicesActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    property?: PropertyOrderByWithRelationInput
    sessions?: StaySessionOrderByRelationAggregateInput
  }

  export type RentalPackageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RentalPackageWhereInput | RentalPackageWhereInput[]
    OR?: RentalPackageWhereInput[]
    NOT?: RentalPackageWhereInput | RentalPackageWhereInput[]
    name?: StringFilter<"RentalPackage"> | string
    basePrice?: FloatFilter<"RentalPackage"> | number
    durationDays?: IntNullableFilter<"RentalPackage"> | number | null
    durationHours?: IntNullableFilter<"RentalPackage"> | number | null
    energyLimitKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    pricePerExtraKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    maxDevicesActive?: IntNullableFilter<"RentalPackage"> | number | null
    createdAt?: DateTimeFilter<"RentalPackage"> | Date | string
    propertyId?: IntFilter<"RentalPackage"> | number
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    sessions?: StaySessionListRelationFilter
  }, "id">

  export type RentalPackageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrderInput | SortOrder
    durationHours?: SortOrderInput | SortOrder
    energyLimitKwh?: SortOrderInput | SortOrder
    pricePerExtraKwh?: SortOrderInput | SortOrder
    maxDevicesActive?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    _count?: RentalPackageCountOrderByAggregateInput
    _avg?: RentalPackageAvgOrderByAggregateInput
    _max?: RentalPackageMaxOrderByAggregateInput
    _min?: RentalPackageMinOrderByAggregateInput
    _sum?: RentalPackageSumOrderByAggregateInput
  }

  export type RentalPackageScalarWhereWithAggregatesInput = {
    AND?: RentalPackageScalarWhereWithAggregatesInput | RentalPackageScalarWhereWithAggregatesInput[]
    OR?: RentalPackageScalarWhereWithAggregatesInput[]
    NOT?: RentalPackageScalarWhereWithAggregatesInput | RentalPackageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RentalPackage"> | number
    name?: StringWithAggregatesFilter<"RentalPackage"> | string
    basePrice?: FloatWithAggregatesFilter<"RentalPackage"> | number
    durationDays?: IntNullableWithAggregatesFilter<"RentalPackage"> | number | null
    durationHours?: IntNullableWithAggregatesFilter<"RentalPackage"> | number | null
    energyLimitKwh?: FloatNullableWithAggregatesFilter<"RentalPackage"> | number | null
    pricePerExtraKwh?: FloatNullableWithAggregatesFilter<"RentalPackage"> | number | null
    maxDevicesActive?: IntNullableWithAggregatesFilter<"RentalPackage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RentalPackage"> | Date | string
    propertyId?: IntWithAggregatesFilter<"RentalPackage"> | number
  }

  export type StaySessionWhereInput = {
    AND?: StaySessionWhereInput | StaySessionWhereInput[]
    OR?: StaySessionWhereInput[]
    NOT?: StaySessionWhereInput | StaySessionWhereInput[]
    id?: IntFilter<"StaySession"> | number
    clientName?: StringFilter<"StaySession"> | string
    checkinAt?: DateTimeFilter<"StaySession"> | Date | string
    checkoutAt?: DateTimeFilter<"StaySession"> | Date | string
    startedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    status?: EnumSessionStatusFilter<"StaySession"> | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraCost?: FloatFilter<"StaySession"> | number
    createdAt?: DateTimeFilter<"StaySession"> | Date | string
    propertyId?: IntFilter<"StaySession"> | number
    packageId?: IntNullableFilter<"StaySession"> | number | null
    customEnergyLimitKwh?: FloatNullableFilter<"StaySession"> | number | null
    customPricePerExtraKwh?: FloatNullableFilter<"StaySession"> | number | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    package?: XOR<RentalPackageNullableScalarRelationFilter, RentalPackageWhereInput> | null
    devices?: StaySessionDeviceListRelationFilter
  }

  export type StaySessionOrderByWithRelationInput = {
    id?: SortOrder
    clientName?: SortOrder
    checkinAt?: SortOrder
    checkoutAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    customEnergyLimitKwh?: SortOrderInput | SortOrder
    customPricePerExtraKwh?: SortOrderInput | SortOrder
    property?: PropertyOrderByWithRelationInput
    package?: RentalPackageOrderByWithRelationInput
    devices?: StaySessionDeviceOrderByRelationAggregateInput
  }

  export type StaySessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StaySessionWhereInput | StaySessionWhereInput[]
    OR?: StaySessionWhereInput[]
    NOT?: StaySessionWhereInput | StaySessionWhereInput[]
    clientName?: StringFilter<"StaySession"> | string
    checkinAt?: DateTimeFilter<"StaySession"> | Date | string
    checkoutAt?: DateTimeFilter<"StaySession"> | Date | string
    startedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    status?: EnumSessionStatusFilter<"StaySession"> | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraCost?: FloatFilter<"StaySession"> | number
    createdAt?: DateTimeFilter<"StaySession"> | Date | string
    propertyId?: IntFilter<"StaySession"> | number
    packageId?: IntNullableFilter<"StaySession"> | number | null
    customEnergyLimitKwh?: FloatNullableFilter<"StaySession"> | number | null
    customPricePerExtraKwh?: FloatNullableFilter<"StaySession"> | number | null
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    package?: XOR<RentalPackageNullableScalarRelationFilter, RentalPackageWhereInput> | null
    devices?: StaySessionDeviceListRelationFilter
  }, "id">

  export type StaySessionOrderByWithAggregationInput = {
    id?: SortOrder
    clientName?: SortOrder
    checkinAt?: SortOrder
    checkoutAt?: SortOrder
    startedAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrderInput | SortOrder
    customEnergyLimitKwh?: SortOrderInput | SortOrder
    customPricePerExtraKwh?: SortOrderInput | SortOrder
    _count?: StaySessionCountOrderByAggregateInput
    _avg?: StaySessionAvgOrderByAggregateInput
    _max?: StaySessionMaxOrderByAggregateInput
    _min?: StaySessionMinOrderByAggregateInput
    _sum?: StaySessionSumOrderByAggregateInput
  }

  export type StaySessionScalarWhereWithAggregatesInput = {
    AND?: StaySessionScalarWhereWithAggregatesInput | StaySessionScalarWhereWithAggregatesInput[]
    OR?: StaySessionScalarWhereWithAggregatesInput[]
    NOT?: StaySessionScalarWhereWithAggregatesInput | StaySessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StaySession"> | number
    clientName?: StringWithAggregatesFilter<"StaySession"> | string
    checkinAt?: DateTimeWithAggregatesFilter<"StaySession"> | Date | string
    checkoutAt?: DateTimeWithAggregatesFilter<"StaySession"> | Date | string
    startedAt?: DateTimeNullableWithAggregatesFilter<"StaySession"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"StaySession"> | Date | string | null
    status?: EnumSessionStatusWithAggregatesFilter<"StaySession"> | $Enums.SessionStatus
    totalConsumptionKwh?: FloatWithAggregatesFilter<"StaySession"> | number
    extraConsumptionKwh?: FloatWithAggregatesFilter<"StaySession"> | number
    extraCost?: FloatWithAggregatesFilter<"StaySession"> | number
    createdAt?: DateTimeWithAggregatesFilter<"StaySession"> | Date | string
    propertyId?: IntWithAggregatesFilter<"StaySession"> | number
    packageId?: IntNullableWithAggregatesFilter<"StaySession"> | number | null
    customEnergyLimitKwh?: FloatNullableWithAggregatesFilter<"StaySession"> | number | null
    customPricePerExtraKwh?: FloatNullableWithAggregatesFilter<"StaySession"> | number | null
  }

  export type StaySessionDeviceWhereInput = {
    AND?: StaySessionDeviceWhereInput | StaySessionDeviceWhereInput[]
    OR?: StaySessionDeviceWhereInput[]
    NOT?: StaySessionDeviceWhereInput | StaySessionDeviceWhereInput[]
    id?: IntFilter<"StaySessionDevice"> | number
    isAllowed?: BoolFilter<"StaySessionDevice"> | boolean
    sessionId?: IntFilter<"StaySessionDevice"> | number
    deviceId?: IntFilter<"StaySessionDevice"> | number
    session?: XOR<StaySessionScalarRelationFilter, StaySessionWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }

  export type StaySessionDeviceOrderByWithRelationInput = {
    id?: SortOrder
    isAllowed?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
    session?: StaySessionOrderByWithRelationInput
    device?: DeviceOrderByWithRelationInput
  }

  export type StaySessionDeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sessionId_deviceId?: StaySessionDeviceSessionIdDeviceIdCompoundUniqueInput
    AND?: StaySessionDeviceWhereInput | StaySessionDeviceWhereInput[]
    OR?: StaySessionDeviceWhereInput[]
    NOT?: StaySessionDeviceWhereInput | StaySessionDeviceWhereInput[]
    isAllowed?: BoolFilter<"StaySessionDevice"> | boolean
    sessionId?: IntFilter<"StaySessionDevice"> | number
    deviceId?: IntFilter<"StaySessionDevice"> | number
    session?: XOR<StaySessionScalarRelationFilter, StaySessionWhereInput>
    device?: XOR<DeviceScalarRelationFilter, DeviceWhereInput>
  }, "id" | "sessionId_deviceId">

  export type StaySessionDeviceOrderByWithAggregationInput = {
    id?: SortOrder
    isAllowed?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
    _count?: StaySessionDeviceCountOrderByAggregateInput
    _avg?: StaySessionDeviceAvgOrderByAggregateInput
    _max?: StaySessionDeviceMaxOrderByAggregateInput
    _min?: StaySessionDeviceMinOrderByAggregateInput
    _sum?: StaySessionDeviceSumOrderByAggregateInput
  }

  export type StaySessionDeviceScalarWhereWithAggregatesInput = {
    AND?: StaySessionDeviceScalarWhereWithAggregatesInput | StaySessionDeviceScalarWhereWithAggregatesInput[]
    OR?: StaySessionDeviceScalarWhereWithAggregatesInput[]
    NOT?: StaySessionDeviceScalarWhereWithAggregatesInput | StaySessionDeviceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StaySessionDevice"> | number
    isAllowed?: BoolWithAggregatesFilter<"StaySessionDevice"> | boolean
    sessionId?: IntWithAggregatesFilter<"StaySessionDevice"> | number
    deviceId?: IntWithAggregatesFilter<"StaySessionDevice"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertiesInput
    devices?: DeviceCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    userId: number
    devices?: DeviceUncheckedCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    devices?: DeviceUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    devices?: DeviceUncheckedUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUncheckedUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    userId: number
  }

  export type PropertyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceCreateInput = {
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    property: PropertyCreateNestedOneWithoutDevicesInput
    readings?: DeviceReadingCreateNestedManyWithoutDeviceInput
    sessions?: StaySessionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    propertyId: number
    readings?: DeviceReadingUncheckedCreateNestedManyWithoutDeviceInput
    sessions?: StaySessionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutDevicesNestedInput
    readings?: DeviceReadingUpdateManyWithoutDeviceNestedInput
    sessions?: StaySessionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyId?: IntFieldUpdateOperationsInput | number
    readings?: DeviceReadingUncheckedUpdateManyWithoutDeviceNestedInput
    sessions?: StaySessionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    propertyId: number
  }

  export type DeviceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceReadingCreateInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
    device: DeviceCreateNestedOneWithoutReadingsInput
  }

  export type DeviceReadingUncheckedCreateInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
    deviceId: number
  }

  export type DeviceReadingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type DeviceReadingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type DeviceReadingCreateManyInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
    deviceId: number
  }

  export type DeviceReadingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceReadingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type RentalPackageCreateInput = {
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPackagesInput
    sessions?: StaySessionCreateNestedManyWithoutPackageInput
  }

  export type RentalPackageUncheckedCreateInput = {
    id?: number
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    propertyId: number
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type RentalPackageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPackagesNestedInput
    sessions?: StaySessionUpdateManyWithoutPackageNestedInput
  }

  export type RentalPackageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    sessions?: StaySessionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type RentalPackageCreateManyInput = {
    id?: number
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    propertyId: number
  }

  export type RentalPackageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalPackageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionCreateInput = {
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    property: PropertyCreateNestedOneWithoutSessionsInput
    package?: RentalPackageCreateNestedOneWithoutSessionsInput
    devices?: StaySessionDeviceCreateNestedManyWithoutSessionInput
  }

  export type StaySessionUncheckedCreateInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    propertyId: number
    packageId?: number | null
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    devices?: StaySessionDeviceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type StaySessionUpdateInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutSessionsNestedInput
    package?: RentalPackageUpdateOneWithoutSessionsNestedInput
    devices?: StaySessionDeviceUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    devices?: StaySessionDeviceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionCreateManyInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    propertyId: number
    packageId?: number | null
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
  }

  export type StaySessionUpdateManyMutationInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StaySessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StaySessionDeviceCreateInput = {
    isAllowed?: boolean
    session: StaySessionCreateNestedOneWithoutDevicesInput
    device: DeviceCreateNestedOneWithoutSessionsInput
  }

  export type StaySessionDeviceUncheckedCreateInput = {
    id?: number
    isAllowed?: boolean
    sessionId: number
    deviceId: number
  }

  export type StaySessionDeviceUpdateInput = {
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    session?: StaySessionUpdateOneRequiredWithoutDevicesNestedInput
    device?: DeviceUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type StaySessionDeviceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionDeviceCreateManyInput = {
    id?: number
    isAllowed?: boolean
    sessionId: number
    deviceId: number
  }

  export type StaySessionDeviceUpdateManyMutationInput = {
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StaySessionDeviceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: IntFieldUpdateOperationsInput | number
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type StaySessionListRelationFilter = {
    every?: StaySessionWhereInput
    some?: StaySessionWhereInput
    none?: StaySessionWhereInput
  }

  export type RentalPackageListRelationFilter = {
    every?: RentalPackageWhereInput
    some?: RentalPackageWhereInput
    none?: RentalPackageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaySessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalPackageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type DeviceReadingListRelationFilter = {
    every?: DeviceReadingWhereInput
    some?: DeviceReadingWhereInput
    none?: DeviceReadingWhereInput
  }

  export type StaySessionDeviceListRelationFilter = {
    every?: StaySessionDeviceWhereInput
    some?: StaySessionDeviceWhereInput
    none?: StaySessionDeviceWhereInput
  }

  export type DeviceReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StaySessionDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    powerWatts?: SortOrder
    propertyId?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    powerWatts?: SortOrder
    propertyId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    powerWatts?: SortOrder
    propertyId?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    topic?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    lastSeen?: SortOrder
    powerWatts?: SortOrder
    propertyId?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    id?: SortOrder
    powerWatts?: SortOrder
    propertyId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DeviceScalarRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type DeviceReadingCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceReadingAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceReadingMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    deviceId?: SortOrder
  }

  export type DeviceReadingSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    deviceId?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RentalPackageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrder
    durationHours?: SortOrder
    energyLimitKwh?: SortOrder
    pricePerExtraKwh?: SortOrder
    maxDevicesActive?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
  }

  export type RentalPackageAvgOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrder
    durationHours?: SortOrder
    energyLimitKwh?: SortOrder
    pricePerExtraKwh?: SortOrder
    maxDevicesActive?: SortOrder
    propertyId?: SortOrder
  }

  export type RentalPackageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrder
    durationHours?: SortOrder
    energyLimitKwh?: SortOrder
    pricePerExtraKwh?: SortOrder
    maxDevicesActive?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
  }

  export type RentalPackageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrder
    durationHours?: SortOrder
    energyLimitKwh?: SortOrder
    pricePerExtraKwh?: SortOrder
    maxDevicesActive?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
  }

  export type RentalPackageSumOrderByAggregateInput = {
    id?: SortOrder
    basePrice?: SortOrder
    durationDays?: SortOrder
    durationHours?: SortOrder
    energyLimitKwh?: SortOrder
    pricePerExtraKwh?: SortOrder
    maxDevicesActive?: SortOrder
    propertyId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type RentalPackageNullableScalarRelationFilter = {
    is?: RentalPackageWhereInput | null
    isNot?: RentalPackageWhereInput | null
  }

  export type StaySessionCountOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    checkinAt?: SortOrder
    checkoutAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrder
    customEnergyLimitKwh?: SortOrder
    customPricePerExtraKwh?: SortOrder
  }

  export type StaySessionAvgOrderByAggregateInput = {
    id?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrder
    customEnergyLimitKwh?: SortOrder
    customPricePerExtraKwh?: SortOrder
  }

  export type StaySessionMaxOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    checkinAt?: SortOrder
    checkoutAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrder
    customEnergyLimitKwh?: SortOrder
    customPricePerExtraKwh?: SortOrder
  }

  export type StaySessionMinOrderByAggregateInput = {
    id?: SortOrder
    clientName?: SortOrder
    checkinAt?: SortOrder
    checkoutAt?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    status?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    createdAt?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrder
    customEnergyLimitKwh?: SortOrder
    customPricePerExtraKwh?: SortOrder
  }

  export type StaySessionSumOrderByAggregateInput = {
    id?: SortOrder
    totalConsumptionKwh?: SortOrder
    extraConsumptionKwh?: SortOrder
    extraCost?: SortOrder
    propertyId?: SortOrder
    packageId?: SortOrder
    customEnergyLimitKwh?: SortOrder
    customPricePerExtraKwh?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type StaySessionScalarRelationFilter = {
    is?: StaySessionWhereInput
    isNot?: StaySessionWhereInput
  }

  export type StaySessionDeviceSessionIdDeviceIdCompoundUniqueInput = {
    sessionId: number
    deviceId: number
  }

  export type StaySessionDeviceCountOrderByAggregateInput = {
    id?: SortOrder
    isAllowed?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
  }

  export type StaySessionDeviceAvgOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
  }

  export type StaySessionDeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    isAllowed?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
  }

  export type StaySessionDeviceMinOrderByAggregateInput = {
    id?: SortOrder
    isAllowed?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
  }

  export type StaySessionDeviceSumOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    deviceId?: SortOrder
  }

  export type PropertyCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput> | PropertyCreateWithoutUserInput[] | PropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUserInput | PropertyCreateOrConnectWithoutUserInput[]
    createMany?: PropertyCreateManyUserInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput> | PropertyCreateWithoutUserInput[] | PropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUserInput | PropertyCreateOrConnectWithoutUserInput[]
    createMany?: PropertyCreateManyUserInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertyUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput> | PropertyCreateWithoutUserInput[] | PropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUserInput | PropertyCreateOrConnectWithoutUserInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutUserInput | PropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyCreateManyUserInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutUserInput | PropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutUserInput | PropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput> | PropertyCreateWithoutUserInput[] | PropertyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutUserInput | PropertyCreateOrConnectWithoutUserInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutUserInput | PropertyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PropertyCreateManyUserInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutUserInput | PropertyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutUserInput | PropertyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    connect?: UserWhereUniqueInput
  }

  export type DeviceCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput> | DeviceCreateWithoutPropertyInput[] | DeviceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutPropertyInput | DeviceCreateOrConnectWithoutPropertyInput[]
    createMany?: DeviceCreateManyPropertyInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StaySessionCreateNestedManyWithoutPropertyInput = {
    create?: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput> | StaySessionCreateWithoutPropertyInput[] | StaySessionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPropertyInput | StaySessionCreateOrConnectWithoutPropertyInput[]
    createMany?: StaySessionCreateManyPropertyInputEnvelope
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
  }

  export type RentalPackageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput> | RentalPackageCreateWithoutPropertyInput[] | RentalPackageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalPackageCreateOrConnectWithoutPropertyInput | RentalPackageCreateOrConnectWithoutPropertyInput[]
    createMany?: RentalPackageCreateManyPropertyInputEnvelope
    connect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput> | DeviceCreateWithoutPropertyInput[] | DeviceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutPropertyInput | DeviceCreateOrConnectWithoutPropertyInput[]
    createMany?: DeviceCreateManyPropertyInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type StaySessionUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput> | StaySessionCreateWithoutPropertyInput[] | StaySessionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPropertyInput | StaySessionCreateOrConnectWithoutPropertyInput[]
    createMany?: StaySessionCreateManyPropertyInputEnvelope
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
  }

  export type RentalPackageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput> | RentalPackageCreateWithoutPropertyInput[] | RentalPackageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalPackageCreateOrConnectWithoutPropertyInput | RentalPackageCreateOrConnectWithoutPropertyInput[]
    createMany?: RentalPackageCreateManyPropertyInputEnvelope
    connect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPropertiesInput
    upsert?: UserUpsertWithoutPropertiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPropertiesInput, UserUpdateWithoutPropertiesInput>, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type DeviceUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput> | DeviceCreateWithoutPropertyInput[] | DeviceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutPropertyInput | DeviceCreateOrConnectWithoutPropertyInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutPropertyInput | DeviceUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DeviceCreateManyPropertyInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutPropertyInput | DeviceUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutPropertyInput | DeviceUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type StaySessionUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput> | StaySessionCreateWithoutPropertyInput[] | StaySessionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPropertyInput | StaySessionCreateOrConnectWithoutPropertyInput[]
    upsert?: StaySessionUpsertWithWhereUniqueWithoutPropertyInput | StaySessionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: StaySessionCreateManyPropertyInputEnvelope
    set?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    disconnect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    delete?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    update?: StaySessionUpdateWithWhereUniqueWithoutPropertyInput | StaySessionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: StaySessionUpdateManyWithWhereWithoutPropertyInput | StaySessionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
  }

  export type RentalPackageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput> | RentalPackageCreateWithoutPropertyInput[] | RentalPackageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalPackageCreateOrConnectWithoutPropertyInput | RentalPackageCreateOrConnectWithoutPropertyInput[]
    upsert?: RentalPackageUpsertWithWhereUniqueWithoutPropertyInput | RentalPackageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RentalPackageCreateManyPropertyInputEnvelope
    set?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    disconnect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    delete?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    connect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    update?: RentalPackageUpdateWithWhereUniqueWithoutPropertyInput | RentalPackageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RentalPackageUpdateManyWithWhereWithoutPropertyInput | RentalPackageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RentalPackageScalarWhereInput | RentalPackageScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput> | DeviceCreateWithoutPropertyInput[] | DeviceUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutPropertyInput | DeviceCreateOrConnectWithoutPropertyInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutPropertyInput | DeviceUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: DeviceCreateManyPropertyInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutPropertyInput | DeviceUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutPropertyInput | DeviceUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type StaySessionUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput> | StaySessionCreateWithoutPropertyInput[] | StaySessionUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPropertyInput | StaySessionCreateOrConnectWithoutPropertyInput[]
    upsert?: StaySessionUpsertWithWhereUniqueWithoutPropertyInput | StaySessionUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: StaySessionCreateManyPropertyInputEnvelope
    set?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    disconnect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    delete?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    update?: StaySessionUpdateWithWhereUniqueWithoutPropertyInput | StaySessionUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: StaySessionUpdateManyWithWhereWithoutPropertyInput | StaySessionUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
  }

  export type RentalPackageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput> | RentalPackageCreateWithoutPropertyInput[] | RentalPackageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RentalPackageCreateOrConnectWithoutPropertyInput | RentalPackageCreateOrConnectWithoutPropertyInput[]
    upsert?: RentalPackageUpsertWithWhereUniqueWithoutPropertyInput | RentalPackageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RentalPackageCreateManyPropertyInputEnvelope
    set?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    disconnect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    delete?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    connect?: RentalPackageWhereUniqueInput | RentalPackageWhereUniqueInput[]
    update?: RentalPackageUpdateWithWhereUniqueWithoutPropertyInput | RentalPackageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RentalPackageUpdateManyWithWhereWithoutPropertyInput | RentalPackageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RentalPackageScalarWhereInput | RentalPackageScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutDevicesInput = {
    create?: XOR<PropertyCreateWithoutDevicesInput, PropertyUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDevicesInput
    connect?: PropertyWhereUniqueInput
  }

  export type DeviceReadingCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput> | DeviceReadingCreateWithoutDeviceInput[] | DeviceReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceReadingCreateOrConnectWithoutDeviceInput | DeviceReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceReadingCreateManyDeviceInputEnvelope
    connect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
  }

  export type StaySessionDeviceCreateNestedManyWithoutDeviceInput = {
    create?: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput> | StaySessionDeviceCreateWithoutDeviceInput[] | StaySessionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutDeviceInput | StaySessionDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: StaySessionDeviceCreateManyDeviceInputEnvelope
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
  }

  export type DeviceReadingUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput> | DeviceReadingCreateWithoutDeviceInput[] | DeviceReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceReadingCreateOrConnectWithoutDeviceInput | DeviceReadingCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceReadingCreateManyDeviceInputEnvelope
    connect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
  }

  export type StaySessionDeviceUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput> | StaySessionDeviceCreateWithoutDeviceInput[] | StaySessionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutDeviceInput | StaySessionDeviceCreateOrConnectWithoutDeviceInput[]
    createMany?: StaySessionDeviceCreateManyDeviceInputEnvelope
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<PropertyCreateWithoutDevicesInput, PropertyUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutDevicesInput
    upsert?: PropertyUpsertWithoutDevicesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutDevicesInput, PropertyUpdateWithoutDevicesInput>, PropertyUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceReadingUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput> | DeviceReadingCreateWithoutDeviceInput[] | DeviceReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceReadingCreateOrConnectWithoutDeviceInput | DeviceReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceReadingUpsertWithWhereUniqueWithoutDeviceInput | DeviceReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceReadingCreateManyDeviceInputEnvelope
    set?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    disconnect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    delete?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    connect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    update?: DeviceReadingUpdateWithWhereUniqueWithoutDeviceInput | DeviceReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceReadingUpdateManyWithWhereWithoutDeviceInput | DeviceReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceReadingScalarWhereInput | DeviceReadingScalarWhereInput[]
  }

  export type StaySessionDeviceUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput> | StaySessionDeviceCreateWithoutDeviceInput[] | StaySessionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutDeviceInput | StaySessionDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: StaySessionDeviceUpsertWithWhereUniqueWithoutDeviceInput | StaySessionDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: StaySessionDeviceCreateManyDeviceInputEnvelope
    set?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    disconnect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    delete?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    update?: StaySessionDeviceUpdateWithWhereUniqueWithoutDeviceInput | StaySessionDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: StaySessionDeviceUpdateManyWithWhereWithoutDeviceInput | StaySessionDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
  }

  export type DeviceReadingUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput> | DeviceReadingCreateWithoutDeviceInput[] | DeviceReadingUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceReadingCreateOrConnectWithoutDeviceInput | DeviceReadingCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceReadingUpsertWithWhereUniqueWithoutDeviceInput | DeviceReadingUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceReadingCreateManyDeviceInputEnvelope
    set?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    disconnect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    delete?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    connect?: DeviceReadingWhereUniqueInput | DeviceReadingWhereUniqueInput[]
    update?: DeviceReadingUpdateWithWhereUniqueWithoutDeviceInput | DeviceReadingUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceReadingUpdateManyWithWhereWithoutDeviceInput | DeviceReadingUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceReadingScalarWhereInput | DeviceReadingScalarWhereInput[]
  }

  export type StaySessionDeviceUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput> | StaySessionDeviceCreateWithoutDeviceInput[] | StaySessionDeviceUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutDeviceInput | StaySessionDeviceCreateOrConnectWithoutDeviceInput[]
    upsert?: StaySessionDeviceUpsertWithWhereUniqueWithoutDeviceInput | StaySessionDeviceUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: StaySessionDeviceCreateManyDeviceInputEnvelope
    set?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    disconnect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    delete?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    update?: StaySessionDeviceUpdateWithWhereUniqueWithoutDeviceInput | StaySessionDeviceUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: StaySessionDeviceUpdateManyWithWhereWithoutDeviceInput | StaySessionDeviceUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutReadingsInput = {
    create?: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput
    connect?: DeviceWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DeviceUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutReadingsInput
    upsert?: DeviceUpsertWithoutReadingsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutReadingsInput, DeviceUpdateWithoutReadingsInput>, DeviceUncheckedUpdateWithoutReadingsInput>
  }

  export type PropertyCreateNestedOneWithoutPackagesInput = {
    create?: XOR<PropertyCreateWithoutPackagesInput, PropertyUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPackagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type StaySessionCreateNestedManyWithoutPackageInput = {
    create?: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput> | StaySessionCreateWithoutPackageInput[] | StaySessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPackageInput | StaySessionCreateOrConnectWithoutPackageInput[]
    createMany?: StaySessionCreateManyPackageInputEnvelope
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
  }

  export type StaySessionUncheckedCreateNestedManyWithoutPackageInput = {
    create?: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput> | StaySessionCreateWithoutPackageInput[] | StaySessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPackageInput | StaySessionCreateOrConnectWithoutPackageInput[]
    createMany?: StaySessionCreateManyPackageInputEnvelope
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyUpdateOneRequiredWithoutPackagesNestedInput = {
    create?: XOR<PropertyCreateWithoutPackagesInput, PropertyUncheckedCreateWithoutPackagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPackagesInput
    upsert?: PropertyUpsertWithoutPackagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPackagesInput, PropertyUpdateWithoutPackagesInput>, PropertyUncheckedUpdateWithoutPackagesInput>
  }

  export type StaySessionUpdateManyWithoutPackageNestedInput = {
    create?: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput> | StaySessionCreateWithoutPackageInput[] | StaySessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPackageInput | StaySessionCreateOrConnectWithoutPackageInput[]
    upsert?: StaySessionUpsertWithWhereUniqueWithoutPackageInput | StaySessionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: StaySessionCreateManyPackageInputEnvelope
    set?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    disconnect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    delete?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    update?: StaySessionUpdateWithWhereUniqueWithoutPackageInput | StaySessionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: StaySessionUpdateManyWithWhereWithoutPackageInput | StaySessionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
  }

  export type StaySessionUncheckedUpdateManyWithoutPackageNestedInput = {
    create?: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput> | StaySessionCreateWithoutPackageInput[] | StaySessionUncheckedCreateWithoutPackageInput[]
    connectOrCreate?: StaySessionCreateOrConnectWithoutPackageInput | StaySessionCreateOrConnectWithoutPackageInput[]
    upsert?: StaySessionUpsertWithWhereUniqueWithoutPackageInput | StaySessionUpsertWithWhereUniqueWithoutPackageInput[]
    createMany?: StaySessionCreateManyPackageInputEnvelope
    set?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    disconnect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    delete?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    connect?: StaySessionWhereUniqueInput | StaySessionWhereUniqueInput[]
    update?: StaySessionUpdateWithWhereUniqueWithoutPackageInput | StaySessionUpdateWithWhereUniqueWithoutPackageInput[]
    updateMany?: StaySessionUpdateManyWithWhereWithoutPackageInput | StaySessionUpdateManyWithWhereWithoutPackageInput[]
    deleteMany?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutSessionsInput = {
    create?: XOR<PropertyCreateWithoutSessionsInput, PropertyUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSessionsInput
    connect?: PropertyWhereUniqueInput
  }

  export type RentalPackageCreateNestedOneWithoutSessionsInput = {
    create?: XOR<RentalPackageCreateWithoutSessionsInput, RentalPackageUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RentalPackageCreateOrConnectWithoutSessionsInput
    connect?: RentalPackageWhereUniqueInput
  }

  export type StaySessionDeviceCreateNestedManyWithoutSessionInput = {
    create?: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput> | StaySessionDeviceCreateWithoutSessionInput[] | StaySessionDeviceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutSessionInput | StaySessionDeviceCreateOrConnectWithoutSessionInput[]
    createMany?: StaySessionDeviceCreateManySessionInputEnvelope
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
  }

  export type StaySessionDeviceUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput> | StaySessionDeviceCreateWithoutSessionInput[] | StaySessionDeviceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutSessionInput | StaySessionDeviceCreateOrConnectWithoutSessionInput[]
    createMany?: StaySessionDeviceCreateManySessionInputEnvelope
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type PropertyUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<PropertyCreateWithoutSessionsInput, PropertyUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutSessionsInput
    upsert?: PropertyUpsertWithoutSessionsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutSessionsInput, PropertyUpdateWithoutSessionsInput>, PropertyUncheckedUpdateWithoutSessionsInput>
  }

  export type RentalPackageUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<RentalPackageCreateWithoutSessionsInput, RentalPackageUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: RentalPackageCreateOrConnectWithoutSessionsInput
    upsert?: RentalPackageUpsertWithoutSessionsInput
    disconnect?: RentalPackageWhereInput | boolean
    delete?: RentalPackageWhereInput | boolean
    connect?: RentalPackageWhereUniqueInput
    update?: XOR<XOR<RentalPackageUpdateToOneWithWhereWithoutSessionsInput, RentalPackageUpdateWithoutSessionsInput>, RentalPackageUncheckedUpdateWithoutSessionsInput>
  }

  export type StaySessionDeviceUpdateManyWithoutSessionNestedInput = {
    create?: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput> | StaySessionDeviceCreateWithoutSessionInput[] | StaySessionDeviceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutSessionInput | StaySessionDeviceCreateOrConnectWithoutSessionInput[]
    upsert?: StaySessionDeviceUpsertWithWhereUniqueWithoutSessionInput | StaySessionDeviceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: StaySessionDeviceCreateManySessionInputEnvelope
    set?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    disconnect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    delete?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    update?: StaySessionDeviceUpdateWithWhereUniqueWithoutSessionInput | StaySessionDeviceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: StaySessionDeviceUpdateManyWithWhereWithoutSessionInput | StaySessionDeviceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
  }

  export type StaySessionDeviceUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput> | StaySessionDeviceCreateWithoutSessionInput[] | StaySessionDeviceUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: StaySessionDeviceCreateOrConnectWithoutSessionInput | StaySessionDeviceCreateOrConnectWithoutSessionInput[]
    upsert?: StaySessionDeviceUpsertWithWhereUniqueWithoutSessionInput | StaySessionDeviceUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: StaySessionDeviceCreateManySessionInputEnvelope
    set?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    disconnect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    delete?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    connect?: StaySessionDeviceWhereUniqueInput | StaySessionDeviceWhereUniqueInput[]
    update?: StaySessionDeviceUpdateWithWhereUniqueWithoutSessionInput | StaySessionDeviceUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: StaySessionDeviceUpdateManyWithWhereWithoutSessionInput | StaySessionDeviceUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
  }

  export type StaySessionCreateNestedOneWithoutDevicesInput = {
    create?: XOR<StaySessionCreateWithoutDevicesInput, StaySessionUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: StaySessionCreateOrConnectWithoutDevicesInput
    connect?: StaySessionWhereUniqueInput
  }

  export type DeviceCreateNestedOneWithoutSessionsInput = {
    create?: XOR<DeviceCreateWithoutSessionsInput, DeviceUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSessionsInput
    connect?: DeviceWhereUniqueInput
  }

  export type StaySessionUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<StaySessionCreateWithoutDevicesInput, StaySessionUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: StaySessionCreateOrConnectWithoutDevicesInput
    upsert?: StaySessionUpsertWithoutDevicesInput
    connect?: StaySessionWhereUniqueInput
    update?: XOR<XOR<StaySessionUpdateToOneWithWhereWithoutDevicesInput, StaySessionUpdateWithoutDevicesInput>, StaySessionUncheckedUpdateWithoutDevicesInput>
  }

  export type DeviceUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<DeviceCreateWithoutSessionsInput, DeviceUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutSessionsInput
    upsert?: DeviceUpsertWithoutSessionsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutSessionsInput, DeviceUpdateWithoutSessionsInput>, DeviceUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type PropertyCreateWithoutUserInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    devices?: DeviceCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    devices?: DeviceUncheckedCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutUserInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput>
  }

  export type PropertyCreateManyUserInputEnvelope = {
    data: PropertyCreateManyUserInput | PropertyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutUserInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutUserInput, PropertyUncheckedUpdateWithoutUserInput>
    create: XOR<PropertyCreateWithoutUserInput, PropertyUncheckedCreateWithoutUserInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutUserInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutUserInput, PropertyUncheckedUpdateWithoutUserInput>
  }

  export type PropertyUpdateManyWithWhereWithoutUserInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutUserInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    address?: StringNullableFilter<"Property"> | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    userId?: IntFilter<"Property"> | number
  }

  export type UserCreateWithoutPropertiesInput = {
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutPropertiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
  }

  export type DeviceCreateWithoutPropertyInput = {
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    readings?: DeviceReadingCreateNestedManyWithoutDeviceInput
    sessions?: StaySessionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    readings?: DeviceReadingUncheckedCreateNestedManyWithoutDeviceInput
    sessions?: StaySessionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutPropertyInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput>
  }

  export type DeviceCreateManyPropertyInputEnvelope = {
    data: DeviceCreateManyPropertyInput | DeviceCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type StaySessionCreateWithoutPropertyInput = {
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    package?: RentalPackageCreateNestedOneWithoutSessionsInput
    devices?: StaySessionDeviceCreateNestedManyWithoutSessionInput
  }

  export type StaySessionUncheckedCreateWithoutPropertyInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    packageId?: number | null
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    devices?: StaySessionDeviceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type StaySessionCreateOrConnectWithoutPropertyInput = {
    where: StaySessionWhereUniqueInput
    create: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput>
  }

  export type StaySessionCreateManyPropertyInputEnvelope = {
    data: StaySessionCreateManyPropertyInput | StaySessionCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RentalPackageCreateWithoutPropertyInput = {
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    sessions?: StaySessionCreateNestedManyWithoutPackageInput
  }

  export type RentalPackageUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPackageInput
  }

  export type RentalPackageCreateOrConnectWithoutPropertyInput = {
    where: RentalPackageWhereUniqueInput
    create: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput>
  }

  export type RentalPackageCreateManyPropertyInputEnvelope = {
    data: RentalPackageCreateManyPropertyInput | RentalPackageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPropertiesInput = {
    update: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
    create: XOR<UserCreateWithoutPropertiesInput, UserUncheckedCreateWithoutPropertiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPropertiesInput, UserUncheckedUpdateWithoutPropertiesInput>
  }

  export type UserUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutPropertyInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutPropertyInput, DeviceUncheckedUpdateWithoutPropertyInput>
    create: XOR<DeviceCreateWithoutPropertyInput, DeviceUncheckedCreateWithoutPropertyInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutPropertyInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutPropertyInput, DeviceUncheckedUpdateWithoutPropertyInput>
  }

  export type DeviceUpdateManyWithWhereWithoutPropertyInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutPropertyInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: IntFilter<"Device"> | number
    name?: StringFilter<"Device"> | string
    type?: StringFilter<"Device"> | string
    topic?: StringFilter<"Device"> | string
    createdAt?: DateTimeFilter<"Device"> | Date | string
    isActive?: BoolFilter<"Device"> | boolean
    lastSeen?: DateTimeNullableFilter<"Device"> | Date | string | null
    powerWatts?: FloatNullableFilter<"Device"> | number | null
    propertyId?: IntFilter<"Device"> | number
  }

  export type StaySessionUpsertWithWhereUniqueWithoutPropertyInput = {
    where: StaySessionWhereUniqueInput
    update: XOR<StaySessionUpdateWithoutPropertyInput, StaySessionUncheckedUpdateWithoutPropertyInput>
    create: XOR<StaySessionCreateWithoutPropertyInput, StaySessionUncheckedCreateWithoutPropertyInput>
  }

  export type StaySessionUpdateWithWhereUniqueWithoutPropertyInput = {
    where: StaySessionWhereUniqueInput
    data: XOR<StaySessionUpdateWithoutPropertyInput, StaySessionUncheckedUpdateWithoutPropertyInput>
  }

  export type StaySessionUpdateManyWithWhereWithoutPropertyInput = {
    where: StaySessionScalarWhereInput
    data: XOR<StaySessionUpdateManyMutationInput, StaySessionUncheckedUpdateManyWithoutPropertyInput>
  }

  export type StaySessionScalarWhereInput = {
    AND?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
    OR?: StaySessionScalarWhereInput[]
    NOT?: StaySessionScalarWhereInput | StaySessionScalarWhereInput[]
    id?: IntFilter<"StaySession"> | number
    clientName?: StringFilter<"StaySession"> | string
    checkinAt?: DateTimeFilter<"StaySession"> | Date | string
    checkoutAt?: DateTimeFilter<"StaySession"> | Date | string
    startedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"StaySession"> | Date | string | null
    status?: EnumSessionStatusFilter<"StaySession"> | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraConsumptionKwh?: FloatFilter<"StaySession"> | number
    extraCost?: FloatFilter<"StaySession"> | number
    createdAt?: DateTimeFilter<"StaySession"> | Date | string
    propertyId?: IntFilter<"StaySession"> | number
    packageId?: IntNullableFilter<"StaySession"> | number | null
    customEnergyLimitKwh?: FloatNullableFilter<"StaySession"> | number | null
    customPricePerExtraKwh?: FloatNullableFilter<"StaySession"> | number | null
  }

  export type RentalPackageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RentalPackageWhereUniqueInput
    update: XOR<RentalPackageUpdateWithoutPropertyInput, RentalPackageUncheckedUpdateWithoutPropertyInput>
    create: XOR<RentalPackageCreateWithoutPropertyInput, RentalPackageUncheckedCreateWithoutPropertyInput>
  }

  export type RentalPackageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RentalPackageWhereUniqueInput
    data: XOR<RentalPackageUpdateWithoutPropertyInput, RentalPackageUncheckedUpdateWithoutPropertyInput>
  }

  export type RentalPackageUpdateManyWithWhereWithoutPropertyInput = {
    where: RentalPackageScalarWhereInput
    data: XOR<RentalPackageUpdateManyMutationInput, RentalPackageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RentalPackageScalarWhereInput = {
    AND?: RentalPackageScalarWhereInput | RentalPackageScalarWhereInput[]
    OR?: RentalPackageScalarWhereInput[]
    NOT?: RentalPackageScalarWhereInput | RentalPackageScalarWhereInput[]
    id?: IntFilter<"RentalPackage"> | number
    name?: StringFilter<"RentalPackage"> | string
    basePrice?: FloatFilter<"RentalPackage"> | number
    durationDays?: IntNullableFilter<"RentalPackage"> | number | null
    durationHours?: IntNullableFilter<"RentalPackage"> | number | null
    energyLimitKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    pricePerExtraKwh?: FloatNullableFilter<"RentalPackage"> | number | null
    maxDevicesActive?: IntNullableFilter<"RentalPackage"> | number | null
    createdAt?: DateTimeFilter<"RentalPackage"> | Date | string
    propertyId?: IntFilter<"RentalPackage"> | number
  }

  export type PropertyCreateWithoutDevicesInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertiesInput
    sessions?: StaySessionCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutDevicesInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    userId: number
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutDevicesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutDevicesInput, PropertyUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceReadingCreateWithoutDeviceInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
  }

  export type DeviceReadingUncheckedCreateWithoutDeviceInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
  }

  export type DeviceReadingCreateOrConnectWithoutDeviceInput = {
    where: DeviceReadingWhereUniqueInput
    create: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceReadingCreateManyDeviceInputEnvelope = {
    data: DeviceReadingCreateManyDeviceInput | DeviceReadingCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type StaySessionDeviceCreateWithoutDeviceInput = {
    isAllowed?: boolean
    session: StaySessionCreateNestedOneWithoutDevicesInput
  }

  export type StaySessionDeviceUncheckedCreateWithoutDeviceInput = {
    id?: number
    isAllowed?: boolean
    sessionId: number
  }

  export type StaySessionDeviceCreateOrConnectWithoutDeviceInput = {
    where: StaySessionDeviceWhereUniqueInput
    create: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type StaySessionDeviceCreateManyDeviceInputEnvelope = {
    data: StaySessionDeviceCreateManyDeviceInput | StaySessionDeviceCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutDevicesInput = {
    update: XOR<PropertyUpdateWithoutDevicesInput, PropertyUncheckedUpdateWithoutDevicesInput>
    create: XOR<PropertyCreateWithoutDevicesInput, PropertyUncheckedCreateWithoutDevicesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutDevicesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutDevicesInput, PropertyUncheckedUpdateWithoutDevicesInput>
  }

  export type PropertyUpdateWithoutDevicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    sessions?: StaySessionUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    sessions?: StaySessionUncheckedUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type DeviceReadingUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceReadingWhereUniqueInput
    update: XOR<DeviceReadingUpdateWithoutDeviceInput, DeviceReadingUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceReadingCreateWithoutDeviceInput, DeviceReadingUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceReadingUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceReadingWhereUniqueInput
    data: XOR<DeviceReadingUpdateWithoutDeviceInput, DeviceReadingUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceReadingUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceReadingScalarWhereInput
    data: XOR<DeviceReadingUpdateManyMutationInput, DeviceReadingUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceReadingScalarWhereInput = {
    AND?: DeviceReadingScalarWhereInput | DeviceReadingScalarWhereInput[]
    OR?: DeviceReadingScalarWhereInput[]
    NOT?: DeviceReadingScalarWhereInput | DeviceReadingScalarWhereInput[]
    id?: BigIntFilter<"DeviceReading"> | bigint | number
    value?: FloatFilter<"DeviceReading"> | number
    createdAt?: DateTimeFilter<"DeviceReading"> | Date | string
    deviceId?: IntFilter<"DeviceReading"> | number
  }

  export type StaySessionDeviceUpsertWithWhereUniqueWithoutDeviceInput = {
    where: StaySessionDeviceWhereUniqueInput
    update: XOR<StaySessionDeviceUpdateWithoutDeviceInput, StaySessionDeviceUncheckedUpdateWithoutDeviceInput>
    create: XOR<StaySessionDeviceCreateWithoutDeviceInput, StaySessionDeviceUncheckedCreateWithoutDeviceInput>
  }

  export type StaySessionDeviceUpdateWithWhereUniqueWithoutDeviceInput = {
    where: StaySessionDeviceWhereUniqueInput
    data: XOR<StaySessionDeviceUpdateWithoutDeviceInput, StaySessionDeviceUncheckedUpdateWithoutDeviceInput>
  }

  export type StaySessionDeviceUpdateManyWithWhereWithoutDeviceInput = {
    where: StaySessionDeviceScalarWhereInput
    data: XOR<StaySessionDeviceUpdateManyMutationInput, StaySessionDeviceUncheckedUpdateManyWithoutDeviceInput>
  }

  export type StaySessionDeviceScalarWhereInput = {
    AND?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
    OR?: StaySessionDeviceScalarWhereInput[]
    NOT?: StaySessionDeviceScalarWhereInput | StaySessionDeviceScalarWhereInput[]
    id?: IntFilter<"StaySessionDevice"> | number
    isAllowed?: BoolFilter<"StaySessionDevice"> | boolean
    sessionId?: IntFilter<"StaySessionDevice"> | number
    deviceId?: IntFilter<"StaySessionDevice"> | number
  }

  export type DeviceCreateWithoutReadingsInput = {
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    property: PropertyCreateNestedOneWithoutDevicesInput
    sessions?: StaySessionDeviceCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutReadingsInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    propertyId: number
    sessions?: StaySessionDeviceUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutReadingsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
  }

  export type DeviceUpsertWithoutReadingsInput = {
    update: XOR<DeviceUpdateWithoutReadingsInput, DeviceUncheckedUpdateWithoutReadingsInput>
    create: XOR<DeviceCreateWithoutReadingsInput, DeviceUncheckedCreateWithoutReadingsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutReadingsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutReadingsInput, DeviceUncheckedUpdateWithoutReadingsInput>
  }

  export type DeviceUpdateWithoutReadingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutDevicesNestedInput
    sessions?: StaySessionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutReadingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyId?: IntFieldUpdateOperationsInput | number
    sessions?: StaySessionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type PropertyCreateWithoutPackagesInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertiesInput
    devices?: DeviceCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPackagesInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    userId: number
    devices?: DeviceUncheckedCreateNestedManyWithoutPropertyInput
    sessions?: StaySessionUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPackagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPackagesInput, PropertyUncheckedCreateWithoutPackagesInput>
  }

  export type StaySessionCreateWithoutPackageInput = {
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    property: PropertyCreateNestedOneWithoutSessionsInput
    devices?: StaySessionDeviceCreateNestedManyWithoutSessionInput
  }

  export type StaySessionUncheckedCreateWithoutPackageInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    propertyId: number
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    devices?: StaySessionDeviceUncheckedCreateNestedManyWithoutSessionInput
  }

  export type StaySessionCreateOrConnectWithoutPackageInput = {
    where: StaySessionWhereUniqueInput
    create: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput>
  }

  export type StaySessionCreateManyPackageInputEnvelope = {
    data: StaySessionCreateManyPackageInput | StaySessionCreateManyPackageInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutPackagesInput = {
    update: XOR<PropertyUpdateWithoutPackagesInput, PropertyUncheckedUpdateWithoutPackagesInput>
    create: XOR<PropertyCreateWithoutPackagesInput, PropertyUncheckedCreateWithoutPackagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPackagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPackagesInput, PropertyUncheckedUpdateWithoutPackagesInput>
  }

  export type PropertyUpdateWithoutPackagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    devices?: DeviceUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPackagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    devices?: DeviceUncheckedUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type StaySessionUpsertWithWhereUniqueWithoutPackageInput = {
    where: StaySessionWhereUniqueInput
    update: XOR<StaySessionUpdateWithoutPackageInput, StaySessionUncheckedUpdateWithoutPackageInput>
    create: XOR<StaySessionCreateWithoutPackageInput, StaySessionUncheckedCreateWithoutPackageInput>
  }

  export type StaySessionUpdateWithWhereUniqueWithoutPackageInput = {
    where: StaySessionWhereUniqueInput
    data: XOR<StaySessionUpdateWithoutPackageInput, StaySessionUncheckedUpdateWithoutPackageInput>
  }

  export type StaySessionUpdateManyWithWhereWithoutPackageInput = {
    where: StaySessionScalarWhereInput
    data: XOR<StaySessionUpdateManyMutationInput, StaySessionUncheckedUpdateManyWithoutPackageInput>
  }

  export type PropertyCreateWithoutSessionsInput = {
    name: string
    address?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPropertiesInput
    devices?: DeviceCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
    userId: number
    devices?: DeviceUncheckedCreateNestedManyWithoutPropertyInput
    packages?: RentalPackageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutSessionsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutSessionsInput, PropertyUncheckedCreateWithoutSessionsInput>
  }

  export type RentalPackageCreateWithoutSessionsInput = {
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPackagesInput
  }

  export type RentalPackageUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
    propertyId: number
  }

  export type RentalPackageCreateOrConnectWithoutSessionsInput = {
    where: RentalPackageWhereUniqueInput
    create: XOR<RentalPackageCreateWithoutSessionsInput, RentalPackageUncheckedCreateWithoutSessionsInput>
  }

  export type StaySessionDeviceCreateWithoutSessionInput = {
    isAllowed?: boolean
    device: DeviceCreateNestedOneWithoutSessionsInput
  }

  export type StaySessionDeviceUncheckedCreateWithoutSessionInput = {
    id?: number
    isAllowed?: boolean
    deviceId: number
  }

  export type StaySessionDeviceCreateOrConnectWithoutSessionInput = {
    where: StaySessionDeviceWhereUniqueInput
    create: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput>
  }

  export type StaySessionDeviceCreateManySessionInputEnvelope = {
    data: StaySessionDeviceCreateManySessionInput | StaySessionDeviceCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutSessionsInput = {
    update: XOR<PropertyUpdateWithoutSessionsInput, PropertyUncheckedUpdateWithoutSessionsInput>
    create: XOR<PropertyCreateWithoutSessionsInput, PropertyUncheckedCreateWithoutSessionsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutSessionsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutSessionsInput, PropertyUncheckedUpdateWithoutSessionsInput>
  }

  export type PropertyUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPropertiesNestedInput
    devices?: DeviceUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    devices?: DeviceUncheckedUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RentalPackageUpsertWithoutSessionsInput = {
    update: XOR<RentalPackageUpdateWithoutSessionsInput, RentalPackageUncheckedUpdateWithoutSessionsInput>
    create: XOR<RentalPackageCreateWithoutSessionsInput, RentalPackageUncheckedCreateWithoutSessionsInput>
    where?: RentalPackageWhereInput
  }

  export type RentalPackageUpdateToOneWithWhereWithoutSessionsInput = {
    where?: RentalPackageWhereInput
    data: XOR<RentalPackageUpdateWithoutSessionsInput, RentalPackageUncheckedUpdateWithoutSessionsInput>
  }

  export type RentalPackageUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPackagesNestedInput
  }

  export type RentalPackageUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionDeviceUpsertWithWhereUniqueWithoutSessionInput = {
    where: StaySessionDeviceWhereUniqueInput
    update: XOR<StaySessionDeviceUpdateWithoutSessionInput, StaySessionDeviceUncheckedUpdateWithoutSessionInput>
    create: XOR<StaySessionDeviceCreateWithoutSessionInput, StaySessionDeviceUncheckedCreateWithoutSessionInput>
  }

  export type StaySessionDeviceUpdateWithWhereUniqueWithoutSessionInput = {
    where: StaySessionDeviceWhereUniqueInput
    data: XOR<StaySessionDeviceUpdateWithoutSessionInput, StaySessionDeviceUncheckedUpdateWithoutSessionInput>
  }

  export type StaySessionDeviceUpdateManyWithWhereWithoutSessionInput = {
    where: StaySessionDeviceScalarWhereInput
    data: XOR<StaySessionDeviceUpdateManyMutationInput, StaySessionDeviceUncheckedUpdateManyWithoutSessionInput>
  }

  export type StaySessionCreateWithoutDevicesInput = {
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
    property: PropertyCreateNestedOneWithoutSessionsInput
    package?: RentalPackageCreateNestedOneWithoutSessionsInput
  }

  export type StaySessionUncheckedCreateWithoutDevicesInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    propertyId: number
    packageId?: number | null
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
  }

  export type StaySessionCreateOrConnectWithoutDevicesInput = {
    where: StaySessionWhereUniqueInput
    create: XOR<StaySessionCreateWithoutDevicesInput, StaySessionUncheckedCreateWithoutDevicesInput>
  }

  export type DeviceCreateWithoutSessionsInput = {
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    property: PropertyCreateNestedOneWithoutDevicesInput
    readings?: DeviceReadingCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
    propertyId: number
    readings?: DeviceReadingUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutSessionsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutSessionsInput, DeviceUncheckedCreateWithoutSessionsInput>
  }

  export type StaySessionUpsertWithoutDevicesInput = {
    update: XOR<StaySessionUpdateWithoutDevicesInput, StaySessionUncheckedUpdateWithoutDevicesInput>
    create: XOR<StaySessionCreateWithoutDevicesInput, StaySessionUncheckedCreateWithoutDevicesInput>
    where?: StaySessionWhereInput
  }

  export type StaySessionUpdateToOneWithWhereWithoutDevicesInput = {
    where?: StaySessionWhereInput
    data: XOR<StaySessionUpdateWithoutDevicesInput, StaySessionUncheckedUpdateWithoutDevicesInput>
  }

  export type StaySessionUpdateWithoutDevicesInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutSessionsNestedInput
    package?: RentalPackageUpdateOneWithoutSessionsNestedInput
  }

  export type StaySessionUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DeviceUpsertWithoutSessionsInput = {
    update: XOR<DeviceUpdateWithoutSessionsInput, DeviceUncheckedUpdateWithoutSessionsInput>
    create: XOR<DeviceCreateWithoutSessionsInput, DeviceUncheckedCreateWithoutSessionsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutSessionsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutSessionsInput, DeviceUncheckedUpdateWithoutSessionsInput>
  }

  export type DeviceUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutDevicesNestedInput
    readings?: DeviceReadingUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    propertyId?: IntFieldUpdateOperationsInput | number
    readings?: DeviceReadingUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type PropertyCreateManyUserInput = {
    id?: number
    name: string
    address?: string | null
    createdAt?: Date | string
  }

  export type PropertyUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    devices?: DeviceUncheckedUpdateManyWithoutPropertyNestedInput
    sessions?: StaySessionUncheckedUpdateManyWithoutPropertyNestedInput
    packages?: RentalPackageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceCreateManyPropertyInput = {
    id?: number
    name: string
    type: string
    topic: string
    createdAt?: Date | string
    isActive?: boolean
    lastSeen?: Date | string | null
    powerWatts?: number | null
  }

  export type StaySessionCreateManyPropertyInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    packageId?: number | null
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
  }

  export type RentalPackageCreateManyPropertyInput = {
    id?: number
    name: string
    basePrice: number
    durationDays?: number | null
    durationHours?: number | null
    energyLimitKwh?: number | null
    pricePerExtraKwh?: number | null
    maxDevicesActive?: number | null
    createdAt?: Date | string
  }

  export type DeviceUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    readings?: DeviceReadingUpdateManyWithoutDeviceNestedInput
    sessions?: StaySessionDeviceUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
    readings?: DeviceReadingUncheckedUpdateManyWithoutDeviceNestedInput
    sessions?: StaySessionDeviceUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    topic?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSeen?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    powerWatts?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StaySessionUpdateWithoutPropertyInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    package?: RentalPackageUpdateOneWithoutSessionsNestedInput
    devices?: StaySessionDeviceUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    devices?: StaySessionDeviceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    packageId?: NullableIntFieldUpdateOperationsInput | number | null
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RentalPackageUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: StaySessionUpdateManyWithoutPackageNestedInput
  }

  export type RentalPackageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: StaySessionUncheckedUpdateManyWithoutPackageNestedInput
  }

  export type RentalPackageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    durationDays?: NullableIntFieldUpdateOperationsInput | number | null
    durationHours?: NullableIntFieldUpdateOperationsInput | number | null
    energyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    pricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    maxDevicesActive?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceReadingCreateManyDeviceInput = {
    id?: bigint | number
    value: number
    createdAt?: Date | string
  }

  export type StaySessionDeviceCreateManyDeviceInput = {
    id?: number
    isAllowed?: boolean
    sessionId: number
  }

  export type DeviceReadingUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceReadingUncheckedUpdateWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceReadingUncheckedUpdateManyWithoutDeviceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StaySessionDeviceUpdateWithoutDeviceInput = {
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    session?: StaySessionUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type StaySessionDeviceUncheckedUpdateWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionDeviceUncheckedUpdateManyWithoutDeviceInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    sessionId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionCreateManyPackageInput = {
    id?: number
    clientName: string
    checkinAt: Date | string
    checkoutAt: Date | string
    startedAt?: Date | string | null
    endedAt?: Date | string | null
    status?: $Enums.SessionStatus
    totalConsumptionKwh?: number
    extraConsumptionKwh?: number
    extraCost?: number
    createdAt?: Date | string
    propertyId: number
    customEnergyLimitKwh?: number | null
    customPricePerExtraKwh?: number | null
  }

  export type StaySessionUpdateWithoutPackageInput = {
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    property?: PropertyUpdateOneRequiredWithoutSessionsNestedInput
    devices?: StaySessionDeviceUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionUncheckedUpdateWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    devices?: StaySessionDeviceUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type StaySessionUncheckedUpdateManyWithoutPackageInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientName?: StringFieldUpdateOperationsInput | string
    checkinAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkoutAt?: DateTimeFieldUpdateOperationsInput | Date | string
    startedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    totalConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraConsumptionKwh?: FloatFieldUpdateOperationsInput | number
    extraCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyId?: IntFieldUpdateOperationsInput | number
    customEnergyLimitKwh?: NullableFloatFieldUpdateOperationsInput | number | null
    customPricePerExtraKwh?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StaySessionDeviceCreateManySessionInput = {
    id?: number
    isAllowed?: boolean
    deviceId: number
  }

  export type StaySessionDeviceUpdateWithoutSessionInput = {
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    device?: DeviceUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type StaySessionDeviceUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: IntFieldUpdateOperationsInput | number
  }

  export type StaySessionDeviceUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAllowed?: BoolFieldUpdateOperationsInput | boolean
    deviceId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}