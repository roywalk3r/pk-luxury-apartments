
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
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Tenancy
 * 
 */
export type Tenancy = $Result.DefaultSelection<Prisma.$TenancyPayload>
/**
 * Model RentPayment
 * 
 */
export type RentPayment = $Result.DefaultSelection<Prisma.$RentPaymentPayload>
/**
 * Model UtilityBill
 * 
 */
export type UtilityBill = $Result.DefaultSelection<Prisma.$UtilityBillPayload>
/**
 * Model MaintenanceRequest
 * 
 */
export type MaintenanceRequest = $Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model BookingRequest
 * 
 */
export type BookingRequest = $Result.DefaultSelection<Prisma.$BookingRequestPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF',
  TENANT: 'TENANT',
  PROSPECT: 'PROSPECT'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RoomStatus: {
  AVAILABLE: 'AVAILABLE',
  OCCUPIED: 'OCCUPIED',
  MAINTENANCE: 'MAINTENANCE'
};

export type RoomStatus = (typeof RoomStatus)[keyof typeof RoomStatus]


export const PaymentMethod: {
  MOMO: 'MOMO',
  VISA: 'VISA',
  CASH: 'CASH',
  OTHER: 'OTHER'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const UtilityType: {
  WATER: 'WATER'
};

export type UtilityType = (typeof UtilityType)[keyof typeof UtilityType]


export const BillStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE'
};

export type BillStatus = (typeof BillStatus)[keyof typeof BillStatus]


export const RequestStatus: {
  OPEN: 'OPEN',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const NotificationChannel: {
  SMS: 'SMS',
  EMAIL: 'EMAIL',
  IN_APP: 'IN_APP'
};

export type NotificationChannel = (typeof NotificationChannel)[keyof typeof NotificationChannel]


export const NotificationStatus: {
  QUEUED: 'QUEUED',
  SENT: 'SENT',
  FAILED: 'FAILED'
};

export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RoomStatus = $Enums.RoomStatus

export const RoomStatus: typeof $Enums.RoomStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type UtilityType = $Enums.UtilityType

export const UtilityType: typeof $Enums.UtilityType

export type BillStatus = $Enums.BillStatus

export const BillStatus: typeof $Enums.BillStatus

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type NotificationChannel = $Enums.NotificationChannel

export const NotificationChannel: typeof $Enums.NotificationChannel

export type NotificationStatus = $Enums.NotificationStatus

export const NotificationStatus: typeof $Enums.NotificationStatus

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

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
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenancy`: Exposes CRUD operations for the **Tenancy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenancies
    * const tenancies = await prisma.tenancy.findMany()
    * ```
    */
  get tenancy(): Prisma.TenancyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentPayment`: Exposes CRUD operations for the **RentPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentPayments
    * const rentPayments = await prisma.rentPayment.findMany()
    * ```
    */
  get rentPayment(): Prisma.RentPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.utilityBill`: Exposes CRUD operations for the **UtilityBill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UtilityBills
    * const utilityBills = await prisma.utilityBill.findMany()
    * ```
    */
  get utilityBill(): Prisma.UtilityBillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRequest`: Exposes CRUD operations for the **MaintenanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRequests
    * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
    * ```
    */
  get maintenanceRequest(): Prisma.MaintenanceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingRequest`: Exposes CRUD operations for the **BookingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingRequests
    * const bookingRequests = await prisma.bookingRequest.findMany()
    * ```
    */
  get bookingRequest(): Prisma.BookingRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
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
    Room: 'Room',
    Tenancy: 'Tenancy',
    RentPayment: 'RentPayment',
    UtilityBill: 'UtilityBill',
    MaintenanceRequest: 'MaintenanceRequest',
    Notification: 'Notification',
    BookingRequest: 'BookingRequest',
    AuditLog: 'AuditLog'
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
      modelProps: "user" | "room" | "tenancy" | "rentPayment" | "utilityBill" | "maintenanceRequest" | "notification" | "bookingRequest" | "auditLog"
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
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Tenancy: {
        payload: Prisma.$TenancyPayload<ExtArgs>
        fields: Prisma.TenancyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenancyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenancyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          findFirst: {
            args: Prisma.TenancyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenancyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          findMany: {
            args: Prisma.TenancyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>[]
          }
          create: {
            args: Prisma.TenancyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          createMany: {
            args: Prisma.TenancyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TenancyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          update: {
            args: Prisma.TenancyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          deleteMany: {
            args: Prisma.TenancyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenancyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenancyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenancyPayload>
          }
          aggregate: {
            args: Prisma.TenancyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenancy>
          }
          groupBy: {
            args: Prisma.TenancyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenancyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenancyCountArgs<ExtArgs>
            result: $Utils.Optional<TenancyCountAggregateOutputType> | number
          }
        }
      }
      RentPayment: {
        payload: Prisma.$RentPaymentPayload<ExtArgs>
        fields: Prisma.RentPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          findFirst: {
            args: Prisma.RentPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          findMany: {
            args: Prisma.RentPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>[]
          }
          create: {
            args: Prisma.RentPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          createMany: {
            args: Prisma.RentPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RentPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          update: {
            args: Prisma.RentPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          deleteMany: {
            args: Prisma.RentPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPaymentPayload>
          }
          aggregate: {
            args: Prisma.RentPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentPayment>
          }
          groupBy: {
            args: Prisma.RentPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<RentPaymentCountAggregateOutputType> | number
          }
        }
      }
      UtilityBill: {
        payload: Prisma.$UtilityBillPayload<ExtArgs>
        fields: Prisma.UtilityBillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilityBillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilityBillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          findFirst: {
            args: Prisma.UtilityBillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilityBillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          findMany: {
            args: Prisma.UtilityBillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>[]
          }
          create: {
            args: Prisma.UtilityBillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          createMany: {
            args: Prisma.UtilityBillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UtilityBillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          update: {
            args: Prisma.UtilityBillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          deleteMany: {
            args: Prisma.UtilityBillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilityBillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UtilityBillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilityBillPayload>
          }
          aggregate: {
            args: Prisma.UtilityBillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilityBill>
          }
          groupBy: {
            args: Prisma.UtilityBillGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilityBillGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilityBillCountArgs<ExtArgs>
            result: $Utils.Optional<UtilityBillCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRequest: {
        payload: Prisma.$MaintenanceRequestPayload<ExtArgs>
        fields: Prisma.MaintenanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          update: {
            args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRequest>
          }
          groupBy: {
            args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      BookingRequest: {
        payload: Prisma.$BookingRequestPayload<ExtArgs>
        fields: Prisma.BookingRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          findFirst: {
            args: Prisma.BookingRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          findMany: {
            args: Prisma.BookingRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>[]
          }
          create: {
            args: Prisma.BookingRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          createMany: {
            args: Prisma.BookingRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          update: {
            args: Prisma.BookingRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          deleteMany: {
            args: Prisma.BookingRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingRequestPayload>
          }
          aggregate: {
            args: Prisma.BookingRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingRequest>
          }
          groupBy: {
            args: Prisma.BookingRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingRequestCountArgs<ExtArgs>
            result: $Utils.Optional<BookingRequestCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
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
    room?: RoomOmit
    tenancy?: TenancyOmit
    rentPayment?: RentPaymentOmit
    utilityBill?: UtilityBillOmit
    maintenanceRequest?: MaintenanceRequestOmit
    notification?: NotificationOmit
    bookingRequest?: BookingRequestOmit
    auditLog?: AuditLogOmit
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
    tenancies: number
    assignedRequests: number
    raisedRequests: number
    bookings: number
    notifications: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | UserCountOutputTypeCountTenanciesArgs
    assignedRequests?: boolean | UserCountOutputTypeCountAssignedRequestsArgs
    raisedRequests?: boolean | UserCountOutputTypeCountRaisedRequestsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
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
  export type UserCountOutputTypeCountTenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenancyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRaisedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    tenancies: number
    requests: number
    bookings: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | RoomCountOutputTypeCountTenanciesArgs
    requests?: boolean | RoomCountOutputTypeCountRequestsArgs
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountTenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenancyWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRequestWhereInput
  }


  /**
   * Count Type TenancyCountOutputType
   */

  export type TenancyCountOutputType = {
    payments: number
    utilities: number
  }

  export type TenancyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | TenancyCountOutputTypeCountPaymentsArgs
    utilities?: boolean | TenancyCountOutputTypeCountUtilitiesArgs
  }

  // Custom InputTypes
  /**
   * TenancyCountOutputType without action
   */
  export type TenancyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenancyCountOutputType
     */
    select?: TenancyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenancyCountOutputType without action
   */
  export type TenancyCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentPaymentWhereInput
  }

  /**
   * TenancyCountOutputType without action
   */
  export type TenancyCountOutputTypeCountUtilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilityBillWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    profileImageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    name: string | null
    phone: string | null
    role: $Enums.Role | null
    profileImageUrl: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    name: number
    phone: number
    role: number
    profileImageUrl: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    profileImageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    profileImageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    name?: true
    phone?: true
    role?: true
    profileImageUrl?: true
    active?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    name: string
    phone: string | null
    role: $Enums.Role
    profileImageUrl: string | null
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    profileImageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenancies?: boolean | User$tenanciesArgs<ExtArgs>
    assignedRequests?: boolean | User$assignedRequestsArgs<ExtArgs>
    raisedRequests?: boolean | User$raisedRequestsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    profileImageUrl?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "name" | "phone" | "role" | "profileImageUrl" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | User$tenanciesArgs<ExtArgs>
    assignedRequests?: boolean | User$assignedRequestsArgs<ExtArgs>
    raisedRequests?: boolean | User$raisedRequestsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenancies: Prisma.$TenancyPayload<ExtArgs>[]
      assignedRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      raisedRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      bookings: Prisma.$BookingRequestPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      name: string
      phone: string | null
      role: $Enums.Role
      profileImageUrl: string | null
      active: boolean
      createdAt: Date
      updatedAt: Date
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
    tenancies<T extends User$tenanciesArgs<ExtArgs> = {}>(args?: Subset<T, User$tenanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedRequests<T extends User$assignedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raisedRequests<T extends User$raisedRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$raisedRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profileImageUrl: FieldRef<"User", 'String'>
    readonly active: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.tenancies
   */
  export type User$tenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    where?: TenancyWhereInput
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    cursor?: TenancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenancyScalarFieldEnum | TenancyScalarFieldEnum[]
  }

  /**
   * User.assignedRequests
   */
  export type User$assignedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * User.raisedRequests
   */
  export type User$raisedRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    where?: BookingRequestWhereInput
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    cursor?: BookingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRequestScalarFieldEnum | BookingRequestScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
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
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    monthlyRent: number | null
  }

  export type RoomSumAggregateOutputType = {
    monthlyRent: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    number: string | null
    type: string | null
    size: string | null
    monthlyRent: number | null
    status: $Enums.RoomStatus | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    number: string | null
    type: string | null
    size: string | null
    monthlyRent: number | null
    status: $Enums.RoomStatus | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    number: number
    type: number
    size: number
    monthlyRent: number
    status: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    monthlyRent?: true
  }

  export type RoomSumAggregateInputType = {
    monthlyRent?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    number?: true
    type?: true
    size?: true
    monthlyRent?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    number?: true
    type?: true
    size?: true
    monthlyRent?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    number?: true
    type?: true
    size?: true
    monthlyRent?: true
    status?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status: $Enums.RoomStatus
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    type?: boolean
    size?: boolean
    monthlyRent?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenancies?: boolean | Room$tenanciesArgs<ExtArgs>
    requests?: boolean | Room$requestsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    number?: boolean
    type?: boolean
    size?: boolean
    monthlyRent?: boolean
    status?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "type" | "size" | "monthlyRent" | "status" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancies?: boolean | Room$tenanciesArgs<ExtArgs>
    requests?: boolean | Room$requestsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      tenancies: Prisma.$TenancyPayload<ExtArgs>[]
      requests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      bookings: Prisma.$BookingRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: string
      type: string
      size: string
      monthlyRent: number
      status: $Enums.RoomStatus
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
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
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenancies<T extends Room$tenanciesArgs<ExtArgs> = {}>(args?: Subset<T, Room$tenanciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Room$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Room$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly number: FieldRef<"Room", 'String'>
    readonly type: FieldRef<"Room", 'String'>
    readonly size: FieldRef<"Room", 'String'>
    readonly monthlyRent: FieldRef<"Room", 'Int'>
    readonly status: FieldRef<"Room", 'RoomStatus'>
    readonly description: FieldRef<"Room", 'String'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.tenancies
   */
  export type Room$tenanciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    where?: TenancyWhereInput
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    cursor?: TenancyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TenancyScalarFieldEnum | TenancyScalarFieldEnum[]
  }

  /**
   * Room.requests
   */
  export type Room$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    where?: BookingRequestWhereInput
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    cursor?: BookingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingRequestScalarFieldEnum | BookingRequestScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Tenancy
   */

  export type AggregateTenancy = {
    _count: TenancyCountAggregateOutputType | null
    _avg: TenancyAvgAggregateOutputType | null
    _sum: TenancySumAggregateOutputType | null
    _min: TenancyMinAggregateOutputType | null
    _max: TenancyMaxAggregateOutputType | null
  }

  export type TenancyAvgAggregateOutputType = {
    monthlyRent: number | null
  }

  export type TenancySumAggregateOutputType = {
    monthlyRent: number | null
  }

  export type TenancyMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    roomId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: number | null
    createdAt: Date | null
  }

  export type TenancyMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    roomId: string | null
    startDate: Date | null
    endDate: Date | null
    monthlyRent: number | null
    createdAt: Date | null
  }

  export type TenancyCountAggregateOutputType = {
    id: number
    tenantId: number
    roomId: number
    startDate: number
    endDate: number
    monthlyRent: number
    createdAt: number
    _all: number
  }


  export type TenancyAvgAggregateInputType = {
    monthlyRent?: true
  }

  export type TenancySumAggregateInputType = {
    monthlyRent?: true
  }

  export type TenancyMinAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    createdAt?: true
  }

  export type TenancyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    createdAt?: true
  }

  export type TenancyCountAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    startDate?: true
    endDate?: true
    monthlyRent?: true
    createdAt?: true
    _all?: true
  }

  export type TenancyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenancy to aggregate.
     */
    where?: TenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenancies to fetch.
     */
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenancies
    **/
    _count?: true | TenancyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenancyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenancySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenancyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenancyMaxAggregateInputType
  }

  export type GetTenancyAggregateType<T extends TenancyAggregateArgs> = {
        [P in keyof T & keyof AggregateTenancy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenancy[P]>
      : GetScalarType<T[P], AggregateTenancy[P]>
  }




  export type TenancyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenancyWhereInput
    orderBy?: TenancyOrderByWithAggregationInput | TenancyOrderByWithAggregationInput[]
    by: TenancyScalarFieldEnum[] | TenancyScalarFieldEnum
    having?: TenancyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenancyCountAggregateInputType | true
    _avg?: TenancyAvgAggregateInputType
    _sum?: TenancySumAggregateInputType
    _min?: TenancyMinAggregateInputType
    _max?: TenancyMaxAggregateInputType
  }

  export type TenancyGroupByOutputType = {
    id: string
    tenantId: string
    roomId: string
    startDate: Date
    endDate: Date | null
    monthlyRent: number
    createdAt: Date
    _count: TenancyCountAggregateOutputType | null
    _avg: TenancyAvgAggregateOutputType | null
    _sum: TenancySumAggregateOutputType | null
    _min: TenancyMinAggregateOutputType | null
    _max: TenancyMaxAggregateOutputType | null
  }

  type GetTenancyGroupByPayload<T extends TenancyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenancyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenancyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenancyGroupByOutputType[P]>
            : GetScalarType<T[P], TenancyGroupByOutputType[P]>
        }
      >
    >


  export type TenancySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    createdAt?: boolean
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payments?: boolean | Tenancy$paymentsArgs<ExtArgs>
    utilities?: boolean | Tenancy$utilitiesArgs<ExtArgs>
    _count?: boolean | TenancyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenancy"]>



  export type TenancySelectScalar = {
    id?: boolean
    tenantId?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    monthlyRent?: boolean
    createdAt?: boolean
  }

  export type TenancyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "roomId" | "startDate" | "endDate" | "monthlyRent" | "createdAt", ExtArgs["result"]["tenancy"]>
  export type TenancyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    payments?: boolean | Tenancy$paymentsArgs<ExtArgs>
    utilities?: boolean | Tenancy$utilitiesArgs<ExtArgs>
    _count?: boolean | TenancyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TenancyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenancy"
    objects: {
      tenant: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      payments: Prisma.$RentPaymentPayload<ExtArgs>[]
      utilities: Prisma.$UtilityBillPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      roomId: string
      startDate: Date
      endDate: Date | null
      monthlyRent: number
      createdAt: Date
    }, ExtArgs["result"]["tenancy"]>
    composites: {}
  }

  type TenancyGetPayload<S extends boolean | null | undefined | TenancyDefaultArgs> = $Result.GetResult<Prisma.$TenancyPayload, S>

  type TenancyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenancyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenancyCountAggregateInputType | true
    }

  export interface TenancyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenancy'], meta: { name: 'Tenancy' } }
    /**
     * Find zero or one Tenancy that matches the filter.
     * @param {TenancyFindUniqueArgs} args - Arguments to find a Tenancy
     * @example
     * // Get one Tenancy
     * const tenancy = await prisma.tenancy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenancyFindUniqueArgs>(args: SelectSubset<T, TenancyFindUniqueArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenancy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenancyFindUniqueOrThrowArgs} args - Arguments to find a Tenancy
     * @example
     * // Get one Tenancy
     * const tenancy = await prisma.tenancy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenancyFindUniqueOrThrowArgs>(args: SelectSubset<T, TenancyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenancy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyFindFirstArgs} args - Arguments to find a Tenancy
     * @example
     * // Get one Tenancy
     * const tenancy = await prisma.tenancy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenancyFindFirstArgs>(args?: SelectSubset<T, TenancyFindFirstArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenancy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyFindFirstOrThrowArgs} args - Arguments to find a Tenancy
     * @example
     * // Get one Tenancy
     * const tenancy = await prisma.tenancy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenancyFindFirstOrThrowArgs>(args?: SelectSubset<T, TenancyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenancies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenancies
     * const tenancies = await prisma.tenancy.findMany()
     * 
     * // Get first 10 Tenancies
     * const tenancies = await prisma.tenancy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenancyWithIdOnly = await prisma.tenancy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenancyFindManyArgs>(args?: SelectSubset<T, TenancyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenancy.
     * @param {TenancyCreateArgs} args - Arguments to create a Tenancy.
     * @example
     * // Create one Tenancy
     * const Tenancy = await prisma.tenancy.create({
     *   data: {
     *     // ... data to create a Tenancy
     *   }
     * })
     * 
     */
    create<T extends TenancyCreateArgs>(args: SelectSubset<T, TenancyCreateArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenancies.
     * @param {TenancyCreateManyArgs} args - Arguments to create many Tenancies.
     * @example
     * // Create many Tenancies
     * const tenancy = await prisma.tenancy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenancyCreateManyArgs>(args?: SelectSubset<T, TenancyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tenancy.
     * @param {TenancyDeleteArgs} args - Arguments to delete one Tenancy.
     * @example
     * // Delete one Tenancy
     * const Tenancy = await prisma.tenancy.delete({
     *   where: {
     *     // ... filter to delete one Tenancy
     *   }
     * })
     * 
     */
    delete<T extends TenancyDeleteArgs>(args: SelectSubset<T, TenancyDeleteArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenancy.
     * @param {TenancyUpdateArgs} args - Arguments to update one Tenancy.
     * @example
     * // Update one Tenancy
     * const tenancy = await prisma.tenancy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenancyUpdateArgs>(args: SelectSubset<T, TenancyUpdateArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenancies.
     * @param {TenancyDeleteManyArgs} args - Arguments to filter Tenancies to delete.
     * @example
     * // Delete a few Tenancies
     * const { count } = await prisma.tenancy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenancyDeleteManyArgs>(args?: SelectSubset<T, TenancyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenancies
     * const tenancy = await prisma.tenancy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenancyUpdateManyArgs>(args: SelectSubset<T, TenancyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tenancy.
     * @param {TenancyUpsertArgs} args - Arguments to update or create a Tenancy.
     * @example
     * // Update or create a Tenancy
     * const tenancy = await prisma.tenancy.upsert({
     *   create: {
     *     // ... data to create a Tenancy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenancy we want to update
     *   }
     * })
     */
    upsert<T extends TenancyUpsertArgs>(args: SelectSubset<T, TenancyUpsertArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenancies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyCountArgs} args - Arguments to filter Tenancies to count.
     * @example
     * // Count the number of Tenancies
     * const count = await prisma.tenancy.count({
     *   where: {
     *     // ... the filter for the Tenancies we want to count
     *   }
     * })
    **/
    count<T extends TenancyCountArgs>(
      args?: Subset<T, TenancyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenancyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TenancyAggregateArgs>(args: Subset<T, TenancyAggregateArgs>): Prisma.PrismaPromise<GetTenancyAggregateType<T>>

    /**
     * Group by Tenancy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenancyGroupByArgs} args - Group by arguments.
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
      T extends TenancyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenancyGroupByArgs['orderBy'] }
        : { orderBy?: TenancyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TenancyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenancyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenancy model
   */
  readonly fields: TenancyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenancy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenancyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payments<T extends Tenancy$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Tenancy$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    utilities<T extends Tenancy$utilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Tenancy$utilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tenancy model
   */
  interface TenancyFieldRefs {
    readonly id: FieldRef<"Tenancy", 'String'>
    readonly tenantId: FieldRef<"Tenancy", 'String'>
    readonly roomId: FieldRef<"Tenancy", 'String'>
    readonly startDate: FieldRef<"Tenancy", 'DateTime'>
    readonly endDate: FieldRef<"Tenancy", 'DateTime'>
    readonly monthlyRent: FieldRef<"Tenancy", 'Int'>
    readonly createdAt: FieldRef<"Tenancy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tenancy findUnique
   */
  export type TenancyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter, which Tenancy to fetch.
     */
    where: TenancyWhereUniqueInput
  }

  /**
   * Tenancy findUniqueOrThrow
   */
  export type TenancyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter, which Tenancy to fetch.
     */
    where: TenancyWhereUniqueInput
  }

  /**
   * Tenancy findFirst
   */
  export type TenancyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter, which Tenancy to fetch.
     */
    where?: TenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenancies to fetch.
     */
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenancies.
     */
    cursor?: TenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenancies.
     */
    distinct?: TenancyScalarFieldEnum | TenancyScalarFieldEnum[]
  }

  /**
   * Tenancy findFirstOrThrow
   */
  export type TenancyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter, which Tenancy to fetch.
     */
    where?: TenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenancies to fetch.
     */
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenancies.
     */
    cursor?: TenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenancies.
     */
    distinct?: TenancyScalarFieldEnum | TenancyScalarFieldEnum[]
  }

  /**
   * Tenancy findMany
   */
  export type TenancyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter, which Tenancies to fetch.
     */
    where?: TenancyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenancies to fetch.
     */
    orderBy?: TenancyOrderByWithRelationInput | TenancyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenancies.
     */
    cursor?: TenancyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenancies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenancies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenancies.
     */
    distinct?: TenancyScalarFieldEnum | TenancyScalarFieldEnum[]
  }

  /**
   * Tenancy create
   */
  export type TenancyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenancy.
     */
    data: XOR<TenancyCreateInput, TenancyUncheckedCreateInput>
  }

  /**
   * Tenancy createMany
   */
  export type TenancyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenancies.
     */
    data: TenancyCreateManyInput | TenancyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenancy update
   */
  export type TenancyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenancy.
     */
    data: XOR<TenancyUpdateInput, TenancyUncheckedUpdateInput>
    /**
     * Choose, which Tenancy to update.
     */
    where: TenancyWhereUniqueInput
  }

  /**
   * Tenancy updateMany
   */
  export type TenancyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenancies.
     */
    data: XOR<TenancyUpdateManyMutationInput, TenancyUncheckedUpdateManyInput>
    /**
     * Filter which Tenancies to update
     */
    where?: TenancyWhereInput
    /**
     * Limit how many Tenancies to update.
     */
    limit?: number
  }

  /**
   * Tenancy upsert
   */
  export type TenancyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenancy to update in case it exists.
     */
    where: TenancyWhereUniqueInput
    /**
     * In case the Tenancy found by the `where` argument doesn't exist, create a new Tenancy with this data.
     */
    create: XOR<TenancyCreateInput, TenancyUncheckedCreateInput>
    /**
     * In case the Tenancy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenancyUpdateInput, TenancyUncheckedUpdateInput>
  }

  /**
   * Tenancy delete
   */
  export type TenancyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
    /**
     * Filter which Tenancy to delete.
     */
    where: TenancyWhereUniqueInput
  }

  /**
   * Tenancy deleteMany
   */
  export type TenancyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenancies to delete
     */
    where?: TenancyWhereInput
    /**
     * Limit how many Tenancies to delete.
     */
    limit?: number
  }

  /**
   * Tenancy.payments
   */
  export type Tenancy$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    where?: RentPaymentWhereInput
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    cursor?: RentPaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * Tenancy.utilities
   */
  export type Tenancy$utilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    where?: UtilityBillWhereInput
    orderBy?: UtilityBillOrderByWithRelationInput | UtilityBillOrderByWithRelationInput[]
    cursor?: UtilityBillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UtilityBillScalarFieldEnum | UtilityBillScalarFieldEnum[]
  }

  /**
   * Tenancy without action
   */
  export type TenancyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenancy
     */
    select?: TenancySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenancy
     */
    omit?: TenancyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenancyInclude<ExtArgs> | null
  }


  /**
   * Model RentPayment
   */

  export type AggregateRentPayment = {
    _count: RentPaymentCountAggregateOutputType | null
    _avg: RentPaymentAvgAggregateOutputType | null
    _sum: RentPaymentSumAggregateOutputType | null
    _min: RentPaymentMinAggregateOutputType | null
    _max: RentPaymentMaxAggregateOutputType | null
  }

  export type RentPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type RentPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type RentPaymentMinAggregateOutputType = {
    id: string | null
    tenancyId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    reference: string | null
    receiptUrl: string | null
    paystackReference: string | null
    paystackAuthorizationUrl: string | null
    paystackAccessCode: string | null
    paystackTransactionId: string | null
    paystackPaidAt: Date | null
    paystackChannel: string | null
    paystackCardType: string | null
    paystackMobileMoneyNumber: string | null
    paystackBank: string | null
    createdAt: Date | null
  }

  export type RentPaymentMaxAggregateOutputType = {
    id: string | null
    tenancyId: string | null
    amount: number | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    reference: string | null
    receiptUrl: string | null
    paystackReference: string | null
    paystackAuthorizationUrl: string | null
    paystackAccessCode: string | null
    paystackTransactionId: string | null
    paystackPaidAt: Date | null
    paystackChannel: string | null
    paystackCardType: string | null
    paystackMobileMoneyNumber: string | null
    paystackBank: string | null
    createdAt: Date | null
  }

  export type RentPaymentCountAggregateOutputType = {
    id: number
    tenancyId: number
    amount: number
    method: number
    status: number
    paidAt: number
    reference: number
    receiptUrl: number
    paystackReference: number
    paystackAuthorizationUrl: number
    paystackAccessCode: number
    paystackTransactionId: number
    paystackPaidAt: number
    paystackChannel: number
    paystackCardType: number
    paystackMobileMoneyNumber: number
    paystackBank: number
    createdAt: number
    _all: number
  }


  export type RentPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type RentPaymentSumAggregateInputType = {
    amount?: true
  }

  export type RentPaymentMinAggregateInputType = {
    id?: true
    tenancyId?: true
    amount?: true
    method?: true
    status?: true
    paidAt?: true
    reference?: true
    receiptUrl?: true
    paystackReference?: true
    paystackAuthorizationUrl?: true
    paystackAccessCode?: true
    paystackTransactionId?: true
    paystackPaidAt?: true
    paystackChannel?: true
    paystackCardType?: true
    paystackMobileMoneyNumber?: true
    paystackBank?: true
    createdAt?: true
  }

  export type RentPaymentMaxAggregateInputType = {
    id?: true
    tenancyId?: true
    amount?: true
    method?: true
    status?: true
    paidAt?: true
    reference?: true
    receiptUrl?: true
    paystackReference?: true
    paystackAuthorizationUrl?: true
    paystackAccessCode?: true
    paystackTransactionId?: true
    paystackPaidAt?: true
    paystackChannel?: true
    paystackCardType?: true
    paystackMobileMoneyNumber?: true
    paystackBank?: true
    createdAt?: true
  }

  export type RentPaymentCountAggregateInputType = {
    id?: true
    tenancyId?: true
    amount?: true
    method?: true
    status?: true
    paidAt?: true
    reference?: true
    receiptUrl?: true
    paystackReference?: true
    paystackAuthorizationUrl?: true
    paystackAccessCode?: true
    paystackTransactionId?: true
    paystackPaidAt?: true
    paystackChannel?: true
    paystackCardType?: true
    paystackMobileMoneyNumber?: true
    paystackBank?: true
    createdAt?: true
    _all?: true
  }

  export type RentPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentPayment to aggregate.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentPayments
    **/
    _count?: true | RentPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentPaymentMaxAggregateInputType
  }

  export type GetRentPaymentAggregateType<T extends RentPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateRentPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentPayment[P]>
      : GetScalarType<T[P], AggregateRentPayment[P]>
  }




  export type RentPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentPaymentWhereInput
    orderBy?: RentPaymentOrderByWithAggregationInput | RentPaymentOrderByWithAggregationInput[]
    by: RentPaymentScalarFieldEnum[] | RentPaymentScalarFieldEnum
    having?: RentPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentPaymentCountAggregateInputType | true
    _avg?: RentPaymentAvgAggregateInputType
    _sum?: RentPaymentSumAggregateInputType
    _min?: RentPaymentMinAggregateInputType
    _max?: RentPaymentMaxAggregateInputType
  }

  export type RentPaymentGroupByOutputType = {
    id: string
    tenancyId: string
    amount: number
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    paidAt: Date | null
    reference: string | null
    receiptUrl: string | null
    paystackReference: string | null
    paystackAuthorizationUrl: string | null
    paystackAccessCode: string | null
    paystackTransactionId: string | null
    paystackPaidAt: Date | null
    paystackChannel: string | null
    paystackCardType: string | null
    paystackMobileMoneyNumber: string | null
    paystackBank: string | null
    createdAt: Date
    _count: RentPaymentCountAggregateOutputType | null
    _avg: RentPaymentAvgAggregateOutputType | null
    _sum: RentPaymentSumAggregateOutputType | null
    _min: RentPaymentMinAggregateOutputType | null
    _max: RentPaymentMaxAggregateOutputType | null
  }

  type GetRentPaymentGroupByPayload<T extends RentPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], RentPaymentGroupByOutputType[P]>
        }
      >
    >


  export type RentPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenancyId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    receiptUrl?: boolean
    paystackReference?: boolean
    paystackAuthorizationUrl?: boolean
    paystackAccessCode?: boolean
    paystackTransactionId?: boolean
    paystackPaidAt?: boolean
    paystackChannel?: boolean
    paystackCardType?: boolean
    paystackMobileMoneyNumber?: boolean
    paystackBank?: boolean
    createdAt?: boolean
    tenancy?: boolean | TenancyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentPayment"]>



  export type RentPaymentSelectScalar = {
    id?: boolean
    tenancyId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    reference?: boolean
    receiptUrl?: boolean
    paystackReference?: boolean
    paystackAuthorizationUrl?: boolean
    paystackAccessCode?: boolean
    paystackTransactionId?: boolean
    paystackPaidAt?: boolean
    paystackChannel?: boolean
    paystackCardType?: boolean
    paystackMobileMoneyNumber?: boolean
    paystackBank?: boolean
    createdAt?: boolean
  }

  export type RentPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenancyId" | "amount" | "method" | "status" | "paidAt" | "reference" | "receiptUrl" | "paystackReference" | "paystackAuthorizationUrl" | "paystackAccessCode" | "paystackTransactionId" | "paystackPaidAt" | "paystackChannel" | "paystackCardType" | "paystackMobileMoneyNumber" | "paystackBank" | "createdAt", ExtArgs["result"]["rentPayment"]>
  export type RentPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancy?: boolean | TenancyDefaultArgs<ExtArgs>
  }

  export type $RentPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentPayment"
    objects: {
      tenancy: Prisma.$TenancyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenancyId: string
      amount: number
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      paidAt: Date | null
      reference: string | null
      receiptUrl: string | null
      paystackReference: string | null
      paystackAuthorizationUrl: string | null
      paystackAccessCode: string | null
      paystackTransactionId: string | null
      paystackPaidAt: Date | null
      paystackChannel: string | null
      paystackCardType: string | null
      paystackMobileMoneyNumber: string | null
      paystackBank: string | null
      createdAt: Date
    }, ExtArgs["result"]["rentPayment"]>
    composites: {}
  }

  type RentPaymentGetPayload<S extends boolean | null | undefined | RentPaymentDefaultArgs> = $Result.GetResult<Prisma.$RentPaymentPayload, S>

  type RentPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentPaymentCountAggregateInputType | true
    }

  export interface RentPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentPayment'], meta: { name: 'RentPayment' } }
    /**
     * Find zero or one RentPayment that matches the filter.
     * @param {RentPaymentFindUniqueArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentPaymentFindUniqueArgs>(args: SelectSubset<T, RentPaymentFindUniqueArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentPaymentFindUniqueOrThrowArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, RentPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindFirstArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentPaymentFindFirstArgs>(args?: SelectSubset<T, RentPaymentFindFirstArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindFirstOrThrowArgs} args - Arguments to find a RentPayment
     * @example
     * // Get one RentPayment
     * const rentPayment = await prisma.rentPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, RentPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentPayments
     * const rentPayments = await prisma.rentPayment.findMany()
     * 
     * // Get first 10 RentPayments
     * const rentPayments = await prisma.rentPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentPaymentWithIdOnly = await prisma.rentPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentPaymentFindManyArgs>(args?: SelectSubset<T, RentPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentPayment.
     * @param {RentPaymentCreateArgs} args - Arguments to create a RentPayment.
     * @example
     * // Create one RentPayment
     * const RentPayment = await prisma.rentPayment.create({
     *   data: {
     *     // ... data to create a RentPayment
     *   }
     * })
     * 
     */
    create<T extends RentPaymentCreateArgs>(args: SelectSubset<T, RentPaymentCreateArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentPayments.
     * @param {RentPaymentCreateManyArgs} args - Arguments to create many RentPayments.
     * @example
     * // Create many RentPayments
     * const rentPayment = await prisma.rentPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentPaymentCreateManyArgs>(args?: SelectSubset<T, RentPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RentPayment.
     * @param {RentPaymentDeleteArgs} args - Arguments to delete one RentPayment.
     * @example
     * // Delete one RentPayment
     * const RentPayment = await prisma.rentPayment.delete({
     *   where: {
     *     // ... filter to delete one RentPayment
     *   }
     * })
     * 
     */
    delete<T extends RentPaymentDeleteArgs>(args: SelectSubset<T, RentPaymentDeleteArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentPayment.
     * @param {RentPaymentUpdateArgs} args - Arguments to update one RentPayment.
     * @example
     * // Update one RentPayment
     * const rentPayment = await prisma.rentPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentPaymentUpdateArgs>(args: SelectSubset<T, RentPaymentUpdateArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentPayments.
     * @param {RentPaymentDeleteManyArgs} args - Arguments to filter RentPayments to delete.
     * @example
     * // Delete a few RentPayments
     * const { count } = await prisma.rentPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentPaymentDeleteManyArgs>(args?: SelectSubset<T, RentPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentPayments
     * const rentPayment = await prisma.rentPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentPaymentUpdateManyArgs>(args: SelectSubset<T, RentPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RentPayment.
     * @param {RentPaymentUpsertArgs} args - Arguments to update or create a RentPayment.
     * @example
     * // Update or create a RentPayment
     * const rentPayment = await prisma.rentPayment.upsert({
     *   create: {
     *     // ... data to create a RentPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentPayment we want to update
     *   }
     * })
     */
    upsert<T extends RentPaymentUpsertArgs>(args: SelectSubset<T, RentPaymentUpsertArgs<ExtArgs>>): Prisma__RentPaymentClient<$Result.GetResult<Prisma.$RentPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentCountArgs} args - Arguments to filter RentPayments to count.
     * @example
     * // Count the number of RentPayments
     * const count = await prisma.rentPayment.count({
     *   where: {
     *     // ... the filter for the RentPayments we want to count
     *   }
     * })
    **/
    count<T extends RentPaymentCountArgs>(
      args?: Subset<T, RentPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentPaymentAggregateArgs>(args: Subset<T, RentPaymentAggregateArgs>): Prisma.PrismaPromise<GetRentPaymentAggregateType<T>>

    /**
     * Group by RentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentPaymentGroupByArgs} args - Group by arguments.
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
      T extends RentPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentPaymentGroupByArgs['orderBy'] }
        : { orderBy?: RentPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentPayment model
   */
  readonly fields: RentPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenancy<T extends TenancyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenancyDefaultArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RentPayment model
   */
  interface RentPaymentFieldRefs {
    readonly id: FieldRef<"RentPayment", 'String'>
    readonly tenancyId: FieldRef<"RentPayment", 'String'>
    readonly amount: FieldRef<"RentPayment", 'Int'>
    readonly method: FieldRef<"RentPayment", 'PaymentMethod'>
    readonly status: FieldRef<"RentPayment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"RentPayment", 'DateTime'>
    readonly reference: FieldRef<"RentPayment", 'String'>
    readonly receiptUrl: FieldRef<"RentPayment", 'String'>
    readonly paystackReference: FieldRef<"RentPayment", 'String'>
    readonly paystackAuthorizationUrl: FieldRef<"RentPayment", 'String'>
    readonly paystackAccessCode: FieldRef<"RentPayment", 'String'>
    readonly paystackTransactionId: FieldRef<"RentPayment", 'String'>
    readonly paystackPaidAt: FieldRef<"RentPayment", 'DateTime'>
    readonly paystackChannel: FieldRef<"RentPayment", 'String'>
    readonly paystackCardType: FieldRef<"RentPayment", 'String'>
    readonly paystackMobileMoneyNumber: FieldRef<"RentPayment", 'String'>
    readonly paystackBank: FieldRef<"RentPayment", 'String'>
    readonly createdAt: FieldRef<"RentPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentPayment findUnique
   */
  export type RentPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment findUniqueOrThrow
   */
  export type RentPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment findFirst
   */
  export type RentPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentPayments.
     */
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment findFirstOrThrow
   */
  export type RentPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayment to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentPayments.
     */
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment findMany
   */
  export type RentPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which RentPayments to fetch.
     */
    where?: RentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentPayments to fetch.
     */
    orderBy?: RentPaymentOrderByWithRelationInput | RentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentPayments.
     */
    cursor?: RentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentPayments.
     */
    distinct?: RentPaymentScalarFieldEnum | RentPaymentScalarFieldEnum[]
  }

  /**
   * RentPayment create
   */
  export type RentPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a RentPayment.
     */
    data: XOR<RentPaymentCreateInput, RentPaymentUncheckedCreateInput>
  }

  /**
   * RentPayment createMany
   */
  export type RentPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentPayments.
     */
    data: RentPaymentCreateManyInput | RentPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentPayment update
   */
  export type RentPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a RentPayment.
     */
    data: XOR<RentPaymentUpdateInput, RentPaymentUncheckedUpdateInput>
    /**
     * Choose, which RentPayment to update.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment updateMany
   */
  export type RentPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentPayments.
     */
    data: XOR<RentPaymentUpdateManyMutationInput, RentPaymentUncheckedUpdateManyInput>
    /**
     * Filter which RentPayments to update
     */
    where?: RentPaymentWhereInput
    /**
     * Limit how many RentPayments to update.
     */
    limit?: number
  }

  /**
   * RentPayment upsert
   */
  export type RentPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the RentPayment to update in case it exists.
     */
    where: RentPaymentWhereUniqueInput
    /**
     * In case the RentPayment found by the `where` argument doesn't exist, create a new RentPayment with this data.
     */
    create: XOR<RentPaymentCreateInput, RentPaymentUncheckedCreateInput>
    /**
     * In case the RentPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentPaymentUpdateInput, RentPaymentUncheckedUpdateInput>
  }

  /**
   * RentPayment delete
   */
  export type RentPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
    /**
     * Filter which RentPayment to delete.
     */
    where: RentPaymentWhereUniqueInput
  }

  /**
   * RentPayment deleteMany
   */
  export type RentPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentPayments to delete
     */
    where?: RentPaymentWhereInput
    /**
     * Limit how many RentPayments to delete.
     */
    limit?: number
  }

  /**
   * RentPayment without action
   */
  export type RentPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentPayment
     */
    select?: RentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentPayment
     */
    omit?: RentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentPaymentInclude<ExtArgs> | null
  }


  /**
   * Model UtilityBill
   */

  export type AggregateUtilityBill = {
    _count: UtilityBillCountAggregateOutputType | null
    _avg: UtilityBillAvgAggregateOutputType | null
    _sum: UtilityBillSumAggregateOutputType | null
    _min: UtilityBillMinAggregateOutputType | null
    _max: UtilityBillMaxAggregateOutputType | null
  }

  export type UtilityBillAvgAggregateOutputType = {
    amount: number | null
  }

  export type UtilityBillSumAggregateOutputType = {
    amount: number | null
  }

  export type UtilityBillMinAggregateOutputType = {
    id: string | null
    tenancyId: string | null
    type: $Enums.UtilityType | null
    amount: number | null
    dueDate: Date | null
    status: $Enums.BillStatus | null
    paidAt: Date | null
    receiptUrl: string | null
    createdAt: Date | null
  }

  export type UtilityBillMaxAggregateOutputType = {
    id: string | null
    tenancyId: string | null
    type: $Enums.UtilityType | null
    amount: number | null
    dueDate: Date | null
    status: $Enums.BillStatus | null
    paidAt: Date | null
    receiptUrl: string | null
    createdAt: Date | null
  }

  export type UtilityBillCountAggregateOutputType = {
    id: number
    tenancyId: number
    type: number
    amount: number
    dueDate: number
    status: number
    paidAt: number
    receiptUrl: number
    createdAt: number
    _all: number
  }


  export type UtilityBillAvgAggregateInputType = {
    amount?: true
  }

  export type UtilityBillSumAggregateInputType = {
    amount?: true
  }

  export type UtilityBillMinAggregateInputType = {
    id?: true
    tenancyId?: true
    type?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    receiptUrl?: true
    createdAt?: true
  }

  export type UtilityBillMaxAggregateInputType = {
    id?: true
    tenancyId?: true
    type?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    receiptUrl?: true
    createdAt?: true
  }

  export type UtilityBillCountAggregateInputType = {
    id?: true
    tenancyId?: true
    type?: true
    amount?: true
    dueDate?: true
    status?: true
    paidAt?: true
    receiptUrl?: true
    createdAt?: true
    _all?: true
  }

  export type UtilityBillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtilityBill to aggregate.
     */
    where?: UtilityBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilityBills to fetch.
     */
    orderBy?: UtilityBillOrderByWithRelationInput | UtilityBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilityBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilityBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilityBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UtilityBills
    **/
    _count?: true | UtilityBillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilityBillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilityBillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilityBillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilityBillMaxAggregateInputType
  }

  export type GetUtilityBillAggregateType<T extends UtilityBillAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilityBill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilityBill[P]>
      : GetScalarType<T[P], AggregateUtilityBill[P]>
  }




  export type UtilityBillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilityBillWhereInput
    orderBy?: UtilityBillOrderByWithAggregationInput | UtilityBillOrderByWithAggregationInput[]
    by: UtilityBillScalarFieldEnum[] | UtilityBillScalarFieldEnum
    having?: UtilityBillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilityBillCountAggregateInputType | true
    _avg?: UtilityBillAvgAggregateInputType
    _sum?: UtilityBillSumAggregateInputType
    _min?: UtilityBillMinAggregateInputType
    _max?: UtilityBillMaxAggregateInputType
  }

  export type UtilityBillGroupByOutputType = {
    id: string
    tenancyId: string
    type: $Enums.UtilityType
    amount: number
    dueDate: Date
    status: $Enums.BillStatus
    paidAt: Date | null
    receiptUrl: string | null
    createdAt: Date
    _count: UtilityBillCountAggregateOutputType | null
    _avg: UtilityBillAvgAggregateOutputType | null
    _sum: UtilityBillSumAggregateOutputType | null
    _min: UtilityBillMinAggregateOutputType | null
    _max: UtilityBillMaxAggregateOutputType | null
  }

  type GetUtilityBillGroupByPayload<T extends UtilityBillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilityBillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilityBillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilityBillGroupByOutputType[P]>
            : GetScalarType<T[P], UtilityBillGroupByOutputType[P]>
        }
      >
    >


  export type UtilityBillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenancyId?: boolean
    type?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
    tenancy?: boolean | TenancyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilityBill"]>



  export type UtilityBillSelectScalar = {
    id?: boolean
    tenancyId?: boolean
    type?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    paidAt?: boolean
    receiptUrl?: boolean
    createdAt?: boolean
  }

  export type UtilityBillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenancyId" | "type" | "amount" | "dueDate" | "status" | "paidAt" | "receiptUrl" | "createdAt", ExtArgs["result"]["utilityBill"]>
  export type UtilityBillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenancy?: boolean | TenancyDefaultArgs<ExtArgs>
  }

  export type $UtilityBillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UtilityBill"
    objects: {
      tenancy: Prisma.$TenancyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenancyId: string
      type: $Enums.UtilityType
      amount: number
      dueDate: Date
      status: $Enums.BillStatus
      paidAt: Date | null
      receiptUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["utilityBill"]>
    composites: {}
  }

  type UtilityBillGetPayload<S extends boolean | null | undefined | UtilityBillDefaultArgs> = $Result.GetResult<Prisma.$UtilityBillPayload, S>

  type UtilityBillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilityBillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilityBillCountAggregateInputType | true
    }

  export interface UtilityBillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UtilityBill'], meta: { name: 'UtilityBill' } }
    /**
     * Find zero or one UtilityBill that matches the filter.
     * @param {UtilityBillFindUniqueArgs} args - Arguments to find a UtilityBill
     * @example
     * // Get one UtilityBill
     * const utilityBill = await prisma.utilityBill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilityBillFindUniqueArgs>(args: SelectSubset<T, UtilityBillFindUniqueArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UtilityBill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilityBillFindUniqueOrThrowArgs} args - Arguments to find a UtilityBill
     * @example
     * // Get one UtilityBill
     * const utilityBill = await prisma.utilityBill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilityBillFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilityBillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtilityBill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillFindFirstArgs} args - Arguments to find a UtilityBill
     * @example
     * // Get one UtilityBill
     * const utilityBill = await prisma.utilityBill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilityBillFindFirstArgs>(args?: SelectSubset<T, UtilityBillFindFirstArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UtilityBill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillFindFirstOrThrowArgs} args - Arguments to find a UtilityBill
     * @example
     * // Get one UtilityBill
     * const utilityBill = await prisma.utilityBill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilityBillFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilityBillFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UtilityBills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UtilityBills
     * const utilityBills = await prisma.utilityBill.findMany()
     * 
     * // Get first 10 UtilityBills
     * const utilityBills = await prisma.utilityBill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilityBillWithIdOnly = await prisma.utilityBill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilityBillFindManyArgs>(args?: SelectSubset<T, UtilityBillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UtilityBill.
     * @param {UtilityBillCreateArgs} args - Arguments to create a UtilityBill.
     * @example
     * // Create one UtilityBill
     * const UtilityBill = await prisma.utilityBill.create({
     *   data: {
     *     // ... data to create a UtilityBill
     *   }
     * })
     * 
     */
    create<T extends UtilityBillCreateArgs>(args: SelectSubset<T, UtilityBillCreateArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UtilityBills.
     * @param {UtilityBillCreateManyArgs} args - Arguments to create many UtilityBills.
     * @example
     * // Create many UtilityBills
     * const utilityBill = await prisma.utilityBill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilityBillCreateManyArgs>(args?: SelectSubset<T, UtilityBillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UtilityBill.
     * @param {UtilityBillDeleteArgs} args - Arguments to delete one UtilityBill.
     * @example
     * // Delete one UtilityBill
     * const UtilityBill = await prisma.utilityBill.delete({
     *   where: {
     *     // ... filter to delete one UtilityBill
     *   }
     * })
     * 
     */
    delete<T extends UtilityBillDeleteArgs>(args: SelectSubset<T, UtilityBillDeleteArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UtilityBill.
     * @param {UtilityBillUpdateArgs} args - Arguments to update one UtilityBill.
     * @example
     * // Update one UtilityBill
     * const utilityBill = await prisma.utilityBill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilityBillUpdateArgs>(args: SelectSubset<T, UtilityBillUpdateArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UtilityBills.
     * @param {UtilityBillDeleteManyArgs} args - Arguments to filter UtilityBills to delete.
     * @example
     * // Delete a few UtilityBills
     * const { count } = await prisma.utilityBill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilityBillDeleteManyArgs>(args?: SelectSubset<T, UtilityBillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UtilityBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UtilityBills
     * const utilityBill = await prisma.utilityBill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilityBillUpdateManyArgs>(args: SelectSubset<T, UtilityBillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UtilityBill.
     * @param {UtilityBillUpsertArgs} args - Arguments to update or create a UtilityBill.
     * @example
     * // Update or create a UtilityBill
     * const utilityBill = await prisma.utilityBill.upsert({
     *   create: {
     *     // ... data to create a UtilityBill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UtilityBill we want to update
     *   }
     * })
     */
    upsert<T extends UtilityBillUpsertArgs>(args: SelectSubset<T, UtilityBillUpsertArgs<ExtArgs>>): Prisma__UtilityBillClient<$Result.GetResult<Prisma.$UtilityBillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UtilityBills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillCountArgs} args - Arguments to filter UtilityBills to count.
     * @example
     * // Count the number of UtilityBills
     * const count = await prisma.utilityBill.count({
     *   where: {
     *     // ... the filter for the UtilityBills we want to count
     *   }
     * })
    **/
    count<T extends UtilityBillCountArgs>(
      args?: Subset<T, UtilityBillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilityBillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UtilityBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilityBillAggregateArgs>(args: Subset<T, UtilityBillAggregateArgs>): Prisma.PrismaPromise<GetUtilityBillAggregateType<T>>

    /**
     * Group by UtilityBill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilityBillGroupByArgs} args - Group by arguments.
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
      T extends UtilityBillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilityBillGroupByArgs['orderBy'] }
        : { orderBy?: UtilityBillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilityBillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilityBillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UtilityBill model
   */
  readonly fields: UtilityBillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UtilityBill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilityBillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenancy<T extends TenancyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenancyDefaultArgs<ExtArgs>>): Prisma__TenancyClient<$Result.GetResult<Prisma.$TenancyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UtilityBill model
   */
  interface UtilityBillFieldRefs {
    readonly id: FieldRef<"UtilityBill", 'String'>
    readonly tenancyId: FieldRef<"UtilityBill", 'String'>
    readonly type: FieldRef<"UtilityBill", 'UtilityType'>
    readonly amount: FieldRef<"UtilityBill", 'Int'>
    readonly dueDate: FieldRef<"UtilityBill", 'DateTime'>
    readonly status: FieldRef<"UtilityBill", 'BillStatus'>
    readonly paidAt: FieldRef<"UtilityBill", 'DateTime'>
    readonly receiptUrl: FieldRef<"UtilityBill", 'String'>
    readonly createdAt: FieldRef<"UtilityBill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UtilityBill findUnique
   */
  export type UtilityBillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter, which UtilityBill to fetch.
     */
    where: UtilityBillWhereUniqueInput
  }

  /**
   * UtilityBill findUniqueOrThrow
   */
  export type UtilityBillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter, which UtilityBill to fetch.
     */
    where: UtilityBillWhereUniqueInput
  }

  /**
   * UtilityBill findFirst
   */
  export type UtilityBillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter, which UtilityBill to fetch.
     */
    where?: UtilityBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilityBills to fetch.
     */
    orderBy?: UtilityBillOrderByWithRelationInput | UtilityBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtilityBills.
     */
    cursor?: UtilityBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilityBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilityBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtilityBills.
     */
    distinct?: UtilityBillScalarFieldEnum | UtilityBillScalarFieldEnum[]
  }

  /**
   * UtilityBill findFirstOrThrow
   */
  export type UtilityBillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter, which UtilityBill to fetch.
     */
    where?: UtilityBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilityBills to fetch.
     */
    orderBy?: UtilityBillOrderByWithRelationInput | UtilityBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UtilityBills.
     */
    cursor?: UtilityBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilityBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilityBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtilityBills.
     */
    distinct?: UtilityBillScalarFieldEnum | UtilityBillScalarFieldEnum[]
  }

  /**
   * UtilityBill findMany
   */
  export type UtilityBillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter, which UtilityBills to fetch.
     */
    where?: UtilityBillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UtilityBills to fetch.
     */
    orderBy?: UtilityBillOrderByWithRelationInput | UtilityBillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UtilityBills.
     */
    cursor?: UtilityBillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UtilityBills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UtilityBills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UtilityBills.
     */
    distinct?: UtilityBillScalarFieldEnum | UtilityBillScalarFieldEnum[]
  }

  /**
   * UtilityBill create
   */
  export type UtilityBillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * The data needed to create a UtilityBill.
     */
    data: XOR<UtilityBillCreateInput, UtilityBillUncheckedCreateInput>
  }

  /**
   * UtilityBill createMany
   */
  export type UtilityBillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UtilityBills.
     */
    data: UtilityBillCreateManyInput | UtilityBillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UtilityBill update
   */
  export type UtilityBillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * The data needed to update a UtilityBill.
     */
    data: XOR<UtilityBillUpdateInput, UtilityBillUncheckedUpdateInput>
    /**
     * Choose, which UtilityBill to update.
     */
    where: UtilityBillWhereUniqueInput
  }

  /**
   * UtilityBill updateMany
   */
  export type UtilityBillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UtilityBills.
     */
    data: XOR<UtilityBillUpdateManyMutationInput, UtilityBillUncheckedUpdateManyInput>
    /**
     * Filter which UtilityBills to update
     */
    where?: UtilityBillWhereInput
    /**
     * Limit how many UtilityBills to update.
     */
    limit?: number
  }

  /**
   * UtilityBill upsert
   */
  export type UtilityBillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * The filter to search for the UtilityBill to update in case it exists.
     */
    where: UtilityBillWhereUniqueInput
    /**
     * In case the UtilityBill found by the `where` argument doesn't exist, create a new UtilityBill with this data.
     */
    create: XOR<UtilityBillCreateInput, UtilityBillUncheckedCreateInput>
    /**
     * In case the UtilityBill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilityBillUpdateInput, UtilityBillUncheckedUpdateInput>
  }

  /**
   * UtilityBill delete
   */
  export type UtilityBillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
    /**
     * Filter which UtilityBill to delete.
     */
    where: UtilityBillWhereUniqueInput
  }

  /**
   * UtilityBill deleteMany
   */
  export type UtilityBillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UtilityBills to delete
     */
    where?: UtilityBillWhereInput
    /**
     * Limit how many UtilityBills to delete.
     */
    limit?: number
  }

  /**
   * UtilityBill without action
   */
  export type UtilityBillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilityBill
     */
    select?: UtilityBillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UtilityBill
     */
    omit?: UtilityBillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilityBillInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRequest
   */

  export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  export type MaintenanceRequestMinAggregateOutputType = {
    id: string | null
    tenantId: string | null
    roomId: string | null
    category: string | null
    title: string | null
    description: string | null
    status: $Enums.RequestStatus | null
    priority: $Enums.Priority | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type MaintenanceRequestMaxAggregateOutputType = {
    id: string | null
    tenantId: string | null
    roomId: string | null
    category: string | null
    title: string | null
    description: string | null
    status: $Enums.RequestStatus | null
    priority: $Enums.Priority | null
    assignedToId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resolvedAt: Date | null
  }

  export type MaintenanceRequestCountAggregateOutputType = {
    id: number
    tenantId: number
    roomId: number
    category: number
    title: number
    description: number
    status: number
    priority: number
    assignedToId: number
    createdAt: number
    updatedAt: number
    resolvedAt: number
    _all: number
  }


  export type MaintenanceRequestMinAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    category?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type MaintenanceRequestMaxAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    category?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
  }

  export type MaintenanceRequestCountAggregateInputType = {
    id?: true
    tenantId?: true
    roomId?: true
    category?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedToId?: true
    createdAt?: true
    updatedAt?: true
    resolvedAt?: true
    _all?: true
  }

  export type MaintenanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequest to aggregate.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRequests
    **/
    _count?: true | MaintenanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type GetMaintenanceRequestAggregateType<T extends MaintenanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
      : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
  }




  export type MaintenanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithAggregationInput | MaintenanceRequestOrderByWithAggregationInput[]
    by: MaintenanceRequestScalarFieldEnum[] | MaintenanceRequestScalarFieldEnum
    having?: MaintenanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRequestCountAggregateInputType | true
    _min?: MaintenanceRequestMinAggregateInputType
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type MaintenanceRequestGroupByOutputType = {
    id: string
    tenantId: string
    roomId: string
    category: string
    title: string
    description: string
    status: $Enums.RequestStatus
    priority: $Enums.Priority
    assignedToId: string | null
    createdAt: Date
    updatedAt: Date
    resolvedAt: Date | null
    _count: MaintenanceRequestCountAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  type GetMaintenanceRequestGroupByPayload<T extends MaintenanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    roomId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceRequest$assignedToArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>



  export type MaintenanceRequestSelectScalar = {
    id?: boolean
    tenantId?: boolean
    roomId?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedToId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resolvedAt?: boolean
  }

  export type MaintenanceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "roomId" | "category" | "title" | "description" | "status" | "priority" | "assignedToId" | "createdAt" | "updatedAt" | "resolvedAt", ExtArgs["result"]["maintenanceRequest"]>
  export type MaintenanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | UserDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    assignedTo?: boolean | MaintenanceRequest$assignedToArgs<ExtArgs>
  }

  export type $MaintenanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRequest"
    objects: {
      tenant: Prisma.$UserPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      assignedTo: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tenantId: string
      roomId: string
      category: string
      title: string
      description: string
      status: $Enums.RequestStatus
      priority: $Enums.Priority
      assignedToId: string | null
      createdAt: Date
      updatedAt: Date
      resolvedAt: Date | null
    }, ExtArgs["result"]["maintenanceRequest"]>
    composites: {}
  }

  type MaintenanceRequestGetPayload<S extends boolean | null | undefined | MaintenanceRequestDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRequestPayload, S>

  type MaintenanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRequestCountAggregateInputType | true
    }

  export interface MaintenanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest'], meta: { name: 'MaintenanceRequest' } }
    /**
     * Find zero or one MaintenanceRequest that matches the filter.
     * @param {MaintenanceRequestFindUniqueArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRequestFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRequestFindFirstArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
     * 
     * // Get first 10 MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRequestFindManyArgs>(args?: SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRequest.
     * @param {MaintenanceRequestCreateArgs} args - Arguments to create a MaintenanceRequest.
     * @example
     * // Create one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.create({
     *   data: {
     *     // ... data to create a MaintenanceRequest
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRequestCreateArgs>(args: SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRequests.
     * @param {MaintenanceRequestCreateManyArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRequestCreateManyArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MaintenanceRequest.
     * @param {MaintenanceRequestDeleteArgs} args - Arguments to delete one MaintenanceRequest.
     * @example
     * // Delete one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRequest
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRequestDeleteArgs>(args: SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRequest.
     * @param {MaintenanceRequestUpdateArgs} args - Arguments to update one MaintenanceRequest.
     * @example
     * // Update one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRequestUpdateArgs>(args: SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRequests.
     * @param {MaintenanceRequestDeleteManyArgs} args - Arguments to filter MaintenanceRequests to delete.
     * @example
     * // Delete a few MaintenanceRequests
     * const { count } = await prisma.maintenanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MaintenanceRequest.
     * @param {MaintenanceRequestUpsertArgs} args - Arguments to update or create a MaintenanceRequest.
     * @example
     * // Update or create a MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRequestUpsertArgs>(args: SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestCountArgs} args - Arguments to filter MaintenanceRequests to count.
     * @example
     * // Count the number of MaintenanceRequests
     * const count = await prisma.maintenanceRequest.count({
     *   where: {
     *     // ... the filter for the MaintenanceRequests we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRequestCountArgs>(
      args?: Subset<T, MaintenanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaintenanceRequestAggregateArgs>(args: Subset<T, MaintenanceRequestAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>

    /**
     * Group by MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestGroupByArgs} args - Group by arguments.
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
      T extends MaintenanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRequest model
   */
  readonly fields: MaintenanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignedTo<T extends MaintenanceRequest$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, MaintenanceRequest$assignedToArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MaintenanceRequest model
   */
  interface MaintenanceRequestFieldRefs {
    readonly id: FieldRef<"MaintenanceRequest", 'String'>
    readonly tenantId: FieldRef<"MaintenanceRequest", 'String'>
    readonly roomId: FieldRef<"MaintenanceRequest", 'String'>
    readonly category: FieldRef<"MaintenanceRequest", 'String'>
    readonly title: FieldRef<"MaintenanceRequest", 'String'>
    readonly description: FieldRef<"MaintenanceRequest", 'String'>
    readonly status: FieldRef<"MaintenanceRequest", 'RequestStatus'>
    readonly priority: FieldRef<"MaintenanceRequest", 'Priority'>
    readonly assignedToId: FieldRef<"MaintenanceRequest", 'String'>
    readonly createdAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly resolvedAt: FieldRef<"MaintenanceRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRequest findUnique
   */
  export type MaintenanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findUniqueOrThrow
   */
  export type MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findFirst
   */
  export type MaintenanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findFirstOrThrow
   */
  export type MaintenanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findMany
   */
  export type MaintenanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequests to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest create
   */
  export type MaintenanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
  }

  /**
   * MaintenanceRequest createMany
   */
  export type MaintenanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MaintenanceRequest update
   */
  export type MaintenanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRequest to update.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest updateMany
   */
  export type MaintenanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest upsert
   */
  export type MaintenanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRequest to update in case it exists.
     */
    where: MaintenanceRequestWhereUniqueInput
    /**
     * In case the MaintenanceRequest found by the `where` argument doesn't exist, create a new MaintenanceRequest with this data.
     */
    create: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
    /**
     * In case the MaintenanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
  }

  /**
   * MaintenanceRequest delete
   */
  export type MaintenanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRequest to delete.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest deleteMany
   */
  export type MaintenanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequests to delete
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest.assignedTo
   */
  export type MaintenanceRequest$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * MaintenanceRequest without action
   */
  export type MaintenanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    channel: $Enums.NotificationChannel | null
    subject: string | null
    body: string | null
    status: $Enums.NotificationStatus | null
    sentAt: Date | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    channel: $Enums.NotificationChannel | null
    subject: string | null
    body: string | null
    status: $Enums.NotificationStatus | null
    sentAt: Date | null
    readAt: Date | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    channel: number
    subject: number
    body: number
    status: number
    sentAt: number
    readAt: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    channel?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    readAt?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    channel?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    readAt?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    channel?: true
    subject?: true
    body?: true
    status?: true
    sentAt?: true
    readAt?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status: $Enums.NotificationStatus
    sentAt: Date | null
    readAt: Date | null
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    channel?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    channel?: boolean
    subject?: boolean
    body?: boolean
    status?: boolean
    sentAt?: boolean
    readAt?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "channel" | "subject" | "body" | "status" | "sentAt" | "readAt" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      channel: $Enums.NotificationChannel
      subject: string
      body: string
      status: $Enums.NotificationStatus
      sentAt: Date | null
      readAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly channel: FieldRef<"Notification", 'NotificationChannel'>
    readonly subject: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly status: FieldRef<"Notification", 'NotificationStatus'>
    readonly sentAt: FieldRef<"Notification", 'DateTime'>
    readonly readAt: FieldRef<"Notification", 'DateTime'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model BookingRequest
   */

  export type AggregateBookingRequest = {
    _count: BookingRequestCountAggregateOutputType | null
    _min: BookingRequestMinAggregateOutputType | null
    _max: BookingRequestMaxAggregateOutputType | null
  }

  export type BookingRequestMinAggregateOutputType = {
    id: string | null
    roomId: string | null
    prospectId: string | null
    name: string | null
    email: string | null
    phone: string | null
    preferredMoveInDate: Date | null
    message: string | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingRequestMaxAggregateOutputType = {
    id: string | null
    roomId: string | null
    prospectId: string | null
    name: string | null
    email: string | null
    phone: string | null
    preferredMoveInDate: Date | null
    message: string | null
    status: $Enums.BookingStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingRequestCountAggregateOutputType = {
    id: number
    roomId: number
    prospectId: number
    name: number
    email: number
    phone: number
    preferredMoveInDate: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingRequestMinAggregateInputType = {
    id?: true
    roomId?: true
    prospectId?: true
    name?: true
    email?: true
    phone?: true
    preferredMoveInDate?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingRequestMaxAggregateInputType = {
    id?: true
    roomId?: true
    prospectId?: true
    name?: true
    email?: true
    phone?: true
    preferredMoveInDate?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingRequestCountAggregateInputType = {
    id?: true
    roomId?: true
    prospectId?: true
    name?: true
    email?: true
    phone?: true
    preferredMoveInDate?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRequest to aggregate.
     */
    where?: BookingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRequests to fetch.
     */
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingRequests
    **/
    _count?: true | BookingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingRequestMaxAggregateInputType
  }

  export type GetBookingRequestAggregateType<T extends BookingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingRequest[P]>
      : GetScalarType<T[P], AggregateBookingRequest[P]>
  }




  export type BookingRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingRequestWhereInput
    orderBy?: BookingRequestOrderByWithAggregationInput | BookingRequestOrderByWithAggregationInput[]
    by: BookingRequestScalarFieldEnum[] | BookingRequestScalarFieldEnum
    having?: BookingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingRequestCountAggregateInputType | true
    _min?: BookingRequestMinAggregateInputType
    _max?: BookingRequestMaxAggregateInputType
  }

  export type BookingRequestGroupByOutputType = {
    id: string
    roomId: string
    prospectId: string | null
    name: string
    email: string
    phone: string
    preferredMoveInDate: Date | null
    message: string | null
    status: $Enums.BookingStatus
    createdAt: Date
    updatedAt: Date
    _count: BookingRequestCountAggregateOutputType | null
    _min: BookingRequestMinAggregateOutputType | null
    _max: BookingRequestMaxAggregateOutputType | null
  }

  type GetBookingRequestGroupByPayload<T extends BookingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], BookingRequestGroupByOutputType[P]>
        }
      >
    >


  export type BookingRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    prospectId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    preferredMoveInDate?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    prospect?: boolean | BookingRequest$prospectArgs<ExtArgs>
  }, ExtArgs["result"]["bookingRequest"]>



  export type BookingRequestSelectScalar = {
    id?: boolean
    roomId?: boolean
    prospectId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    preferredMoveInDate?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "prospectId" | "name" | "email" | "phone" | "preferredMoveInDate" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["bookingRequest"]>
  export type BookingRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    prospect?: boolean | BookingRequest$prospectArgs<ExtArgs>
  }

  export type $BookingRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingRequest"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      prospect: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roomId: string
      prospectId: string | null
      name: string
      email: string
      phone: string
      preferredMoveInDate: Date | null
      message: string | null
      status: $Enums.BookingStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookingRequest"]>
    composites: {}
  }

  type BookingRequestGetPayload<S extends boolean | null | undefined | BookingRequestDefaultArgs> = $Result.GetResult<Prisma.$BookingRequestPayload, S>

  type BookingRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingRequestCountAggregateInputType | true
    }

  export interface BookingRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingRequest'], meta: { name: 'BookingRequest' } }
    /**
     * Find zero or one BookingRequest that matches the filter.
     * @param {BookingRequestFindUniqueArgs} args - Arguments to find a BookingRequest
     * @example
     * // Get one BookingRequest
     * const bookingRequest = await prisma.bookingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingRequestFindUniqueArgs>(args: SelectSubset<T, BookingRequestFindUniqueArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingRequestFindUniqueOrThrowArgs} args - Arguments to find a BookingRequest
     * @example
     * // Get one BookingRequest
     * const bookingRequest = await prisma.bookingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestFindFirstArgs} args - Arguments to find a BookingRequest
     * @example
     * // Get one BookingRequest
     * const bookingRequest = await prisma.bookingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingRequestFindFirstArgs>(args?: SelectSubset<T, BookingRequestFindFirstArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestFindFirstOrThrowArgs} args - Arguments to find a BookingRequest
     * @example
     * // Get one BookingRequest
     * const bookingRequest = await prisma.bookingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingRequests
     * const bookingRequests = await prisma.bookingRequest.findMany()
     * 
     * // Get first 10 BookingRequests
     * const bookingRequests = await prisma.bookingRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingRequestWithIdOnly = await prisma.bookingRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingRequestFindManyArgs>(args?: SelectSubset<T, BookingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingRequest.
     * @param {BookingRequestCreateArgs} args - Arguments to create a BookingRequest.
     * @example
     * // Create one BookingRequest
     * const BookingRequest = await prisma.bookingRequest.create({
     *   data: {
     *     // ... data to create a BookingRequest
     *   }
     * })
     * 
     */
    create<T extends BookingRequestCreateArgs>(args: SelectSubset<T, BookingRequestCreateArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingRequests.
     * @param {BookingRequestCreateManyArgs} args - Arguments to create many BookingRequests.
     * @example
     * // Create many BookingRequests
     * const bookingRequest = await prisma.bookingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingRequestCreateManyArgs>(args?: SelectSubset<T, BookingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookingRequest.
     * @param {BookingRequestDeleteArgs} args - Arguments to delete one BookingRequest.
     * @example
     * // Delete one BookingRequest
     * const BookingRequest = await prisma.bookingRequest.delete({
     *   where: {
     *     // ... filter to delete one BookingRequest
     *   }
     * })
     * 
     */
    delete<T extends BookingRequestDeleteArgs>(args: SelectSubset<T, BookingRequestDeleteArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingRequest.
     * @param {BookingRequestUpdateArgs} args - Arguments to update one BookingRequest.
     * @example
     * // Update one BookingRequest
     * const bookingRequest = await prisma.bookingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingRequestUpdateArgs>(args: SelectSubset<T, BookingRequestUpdateArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingRequests.
     * @param {BookingRequestDeleteManyArgs} args - Arguments to filter BookingRequests to delete.
     * @example
     * // Delete a few BookingRequests
     * const { count } = await prisma.bookingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingRequestDeleteManyArgs>(args?: SelectSubset<T, BookingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingRequests
     * const bookingRequest = await prisma.bookingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingRequestUpdateManyArgs>(args: SelectSubset<T, BookingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingRequest.
     * @param {BookingRequestUpsertArgs} args - Arguments to update or create a BookingRequest.
     * @example
     * // Update or create a BookingRequest
     * const bookingRequest = await prisma.bookingRequest.upsert({
     *   create: {
     *     // ... data to create a BookingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingRequest we want to update
     *   }
     * })
     */
    upsert<T extends BookingRequestUpsertArgs>(args: SelectSubset<T, BookingRequestUpsertArgs<ExtArgs>>): Prisma__BookingRequestClient<$Result.GetResult<Prisma.$BookingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestCountArgs} args - Arguments to filter BookingRequests to count.
     * @example
     * // Count the number of BookingRequests
     * const count = await prisma.bookingRequest.count({
     *   where: {
     *     // ... the filter for the BookingRequests we want to count
     *   }
     * })
    **/
    count<T extends BookingRequestCountArgs>(
      args?: Subset<T, BookingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingRequestAggregateArgs>(args: Subset<T, BookingRequestAggregateArgs>): Prisma.PrismaPromise<GetBookingRequestAggregateType<T>>

    /**
     * Group by BookingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingRequestGroupByArgs} args - Group by arguments.
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
      T extends BookingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingRequestGroupByArgs['orderBy'] }
        : { orderBy?: BookingRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingRequest model
   */
  readonly fields: BookingRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prospect<T extends BookingRequest$prospectArgs<ExtArgs> = {}>(args?: Subset<T, BookingRequest$prospectArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingRequest model
   */
  interface BookingRequestFieldRefs {
    readonly id: FieldRef<"BookingRequest", 'String'>
    readonly roomId: FieldRef<"BookingRequest", 'String'>
    readonly prospectId: FieldRef<"BookingRequest", 'String'>
    readonly name: FieldRef<"BookingRequest", 'String'>
    readonly email: FieldRef<"BookingRequest", 'String'>
    readonly phone: FieldRef<"BookingRequest", 'String'>
    readonly preferredMoveInDate: FieldRef<"BookingRequest", 'DateTime'>
    readonly message: FieldRef<"BookingRequest", 'String'>
    readonly status: FieldRef<"BookingRequest", 'BookingStatus'>
    readonly createdAt: FieldRef<"BookingRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"BookingRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingRequest findUnique
   */
  export type BookingRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter, which BookingRequest to fetch.
     */
    where: BookingRequestWhereUniqueInput
  }

  /**
   * BookingRequest findUniqueOrThrow
   */
  export type BookingRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter, which BookingRequest to fetch.
     */
    where: BookingRequestWhereUniqueInput
  }

  /**
   * BookingRequest findFirst
   */
  export type BookingRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter, which BookingRequest to fetch.
     */
    where?: BookingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRequests to fetch.
     */
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRequests.
     */
    cursor?: BookingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRequests.
     */
    distinct?: BookingRequestScalarFieldEnum | BookingRequestScalarFieldEnum[]
  }

  /**
   * BookingRequest findFirstOrThrow
   */
  export type BookingRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter, which BookingRequest to fetch.
     */
    where?: BookingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRequests to fetch.
     */
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingRequests.
     */
    cursor?: BookingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRequests.
     */
    distinct?: BookingRequestScalarFieldEnum | BookingRequestScalarFieldEnum[]
  }

  /**
   * BookingRequest findMany
   */
  export type BookingRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter, which BookingRequests to fetch.
     */
    where?: BookingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingRequests to fetch.
     */
    orderBy?: BookingRequestOrderByWithRelationInput | BookingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingRequests.
     */
    cursor?: BookingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingRequests.
     */
    distinct?: BookingRequestScalarFieldEnum | BookingRequestScalarFieldEnum[]
  }

  /**
   * BookingRequest create
   */
  export type BookingRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingRequest.
     */
    data: XOR<BookingRequestCreateInput, BookingRequestUncheckedCreateInput>
  }

  /**
   * BookingRequest createMany
   */
  export type BookingRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingRequests.
     */
    data: BookingRequestCreateManyInput | BookingRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingRequest update
   */
  export type BookingRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingRequest.
     */
    data: XOR<BookingRequestUpdateInput, BookingRequestUncheckedUpdateInput>
    /**
     * Choose, which BookingRequest to update.
     */
    where: BookingRequestWhereUniqueInput
  }

  /**
   * BookingRequest updateMany
   */
  export type BookingRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingRequests.
     */
    data: XOR<BookingRequestUpdateManyMutationInput, BookingRequestUncheckedUpdateManyInput>
    /**
     * Filter which BookingRequests to update
     */
    where?: BookingRequestWhereInput
    /**
     * Limit how many BookingRequests to update.
     */
    limit?: number
  }

  /**
   * BookingRequest upsert
   */
  export type BookingRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingRequest to update in case it exists.
     */
    where: BookingRequestWhereUniqueInput
    /**
     * In case the BookingRequest found by the `where` argument doesn't exist, create a new BookingRequest with this data.
     */
    create: XOR<BookingRequestCreateInput, BookingRequestUncheckedCreateInput>
    /**
     * In case the BookingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingRequestUpdateInput, BookingRequestUncheckedUpdateInput>
  }

  /**
   * BookingRequest delete
   */
  export type BookingRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
    /**
     * Filter which BookingRequest to delete.
     */
    where: BookingRequestWhereUniqueInput
  }

  /**
   * BookingRequest deleteMany
   */
  export type BookingRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingRequests to delete
     */
    where?: BookingRequestWhereInput
    /**
     * Limit how many BookingRequests to delete.
     */
    limit?: number
  }

  /**
   * BookingRequest.prospect
   */
  export type BookingRequest$prospectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * BookingRequest without action
   */
  export type BookingRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingRequest
     */
    select?: BookingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingRequest
     */
    omit?: BookingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingRequestInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    payload: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entityType: string | null
    entityId: string | null
    payload: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entityType: number
    entityId: number
    payload: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    payload?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    payload?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entityType?: true
    entityId?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string | null
    action: string
    entityType: string
    entityId: string | null
    payload: string | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>



  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entityType?: boolean
    entityId?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entityType" | "entityId" | "payload" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AuditLog$userArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      action: string
      entityType: string
      entityId: string | null
      payload: string | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
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
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AuditLog$userArgs<ExtArgs> = {}>(args?: Subset<T, AuditLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entityType: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly payload: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog.user
   */
  export type AuditLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
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
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    role: 'role',
    profileImageUrl: 'profileImageUrl',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    number: 'number',
    type: 'type',
    size: 'size',
    monthlyRent: 'monthlyRent',
    status: 'status',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const TenancyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    roomId: 'roomId',
    startDate: 'startDate',
    endDate: 'endDate',
    monthlyRent: 'monthlyRent',
    createdAt: 'createdAt'
  };

  export type TenancyScalarFieldEnum = (typeof TenancyScalarFieldEnum)[keyof typeof TenancyScalarFieldEnum]


  export const RentPaymentScalarFieldEnum: {
    id: 'id',
    tenancyId: 'tenancyId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    paidAt: 'paidAt',
    reference: 'reference',
    receiptUrl: 'receiptUrl',
    paystackReference: 'paystackReference',
    paystackAuthorizationUrl: 'paystackAuthorizationUrl',
    paystackAccessCode: 'paystackAccessCode',
    paystackTransactionId: 'paystackTransactionId',
    paystackPaidAt: 'paystackPaidAt',
    paystackChannel: 'paystackChannel',
    paystackCardType: 'paystackCardType',
    paystackMobileMoneyNumber: 'paystackMobileMoneyNumber',
    paystackBank: 'paystackBank',
    createdAt: 'createdAt'
  };

  export type RentPaymentScalarFieldEnum = (typeof RentPaymentScalarFieldEnum)[keyof typeof RentPaymentScalarFieldEnum]


  export const UtilityBillScalarFieldEnum: {
    id: 'id',
    tenancyId: 'tenancyId',
    type: 'type',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    paidAt: 'paidAt',
    receiptUrl: 'receiptUrl',
    createdAt: 'createdAt'
  };

  export type UtilityBillScalarFieldEnum = (typeof UtilityBillScalarFieldEnum)[keyof typeof UtilityBillScalarFieldEnum]


  export const MaintenanceRequestScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    roomId: 'roomId',
    category: 'category',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assignedToId: 'assignedToId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resolvedAt: 'resolvedAt'
  };

  export type MaintenanceRequestScalarFieldEnum = (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    channel: 'channel',
    subject: 'subject',
    body: 'body',
    status: 'status',
    sentAt: 'sentAt',
    readAt: 'readAt',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const BookingRequestScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    prospectId: 'prospectId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    preferredMoveInDate: 'preferredMoveInDate',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingRequestScalarFieldEnum = (typeof BookingRequestScalarFieldEnum)[keyof typeof BookingRequestScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    phone: 'phone',
    profileImageUrl: 'profileImageUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    id: 'id',
    number: 'number',
    type: 'type',
    size: 'size',
    description: 'description'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const TenancyOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    roomId: 'roomId'
  };

  export type TenancyOrderByRelevanceFieldEnum = (typeof TenancyOrderByRelevanceFieldEnum)[keyof typeof TenancyOrderByRelevanceFieldEnum]


  export const RentPaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    tenancyId: 'tenancyId',
    reference: 'reference',
    receiptUrl: 'receiptUrl',
    paystackReference: 'paystackReference',
    paystackAuthorizationUrl: 'paystackAuthorizationUrl',
    paystackAccessCode: 'paystackAccessCode',
    paystackTransactionId: 'paystackTransactionId',
    paystackChannel: 'paystackChannel',
    paystackCardType: 'paystackCardType',
    paystackMobileMoneyNumber: 'paystackMobileMoneyNumber',
    paystackBank: 'paystackBank'
  };

  export type RentPaymentOrderByRelevanceFieldEnum = (typeof RentPaymentOrderByRelevanceFieldEnum)[keyof typeof RentPaymentOrderByRelevanceFieldEnum]


  export const UtilityBillOrderByRelevanceFieldEnum: {
    id: 'id',
    tenancyId: 'tenancyId',
    receiptUrl: 'receiptUrl'
  };

  export type UtilityBillOrderByRelevanceFieldEnum = (typeof UtilityBillOrderByRelevanceFieldEnum)[keyof typeof UtilityBillOrderByRelevanceFieldEnum]


  export const MaintenanceRequestOrderByRelevanceFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    roomId: 'roomId',
    category: 'category',
    title: 'title',
    description: 'description',
    assignedToId: 'assignedToId'
  };

  export type MaintenanceRequestOrderByRelevanceFieldEnum = (typeof MaintenanceRequestOrderByRelevanceFieldEnum)[keyof typeof MaintenanceRequestOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    body: 'body'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const BookingRequestOrderByRelevanceFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    prospectId: 'prospectId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    message: 'message'
  };

  export type BookingRequestOrderByRelevanceFieldEnum = (typeof BookingRequestOrderByRelevanceFieldEnum)[keyof typeof BookingRequestOrderByRelevanceFieldEnum]


  export const AuditLogOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entityType: 'entityType',
    entityId: 'entityId',
    payload: 'payload'
  };

  export type AuditLogOrderByRelevanceFieldEnum = (typeof AuditLogOrderByRelevanceFieldEnum)[keyof typeof AuditLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'RoomStatus'
   */
  export type EnumRoomStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoomStatus'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'UtilityType'
   */
  export type EnumUtilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UtilityType'>
    


  /**
   * Reference to a field of type 'BillStatus'
   */
  export type EnumBillStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BillStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'NotificationChannel'
   */
  export type EnumNotificationChannelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationChannel'>
    


  /**
   * Reference to a field of type 'NotificationStatus'
   */
  export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenancies?: TenancyListRelationFilter
    assignedRequests?: MaintenanceRequestListRelationFilter
    raisedRequests?: MaintenanceRequestListRelationFilter
    bookings?: BookingRequestListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenancies?: TenancyOrderByRelationAggregateInput
    assignedRequests?: MaintenanceRequestOrderByRelationAggregateInput
    raisedRequests?: MaintenanceRequestOrderByRelationAggregateInput
    bookings?: BookingRequestOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profileImageUrl?: StringNullableFilter<"User"> | string | null
    active?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenancies?: TenancyListRelationFilter
    assignedRequests?: MaintenanceRequestListRelationFilter
    raisedRequests?: MaintenanceRequestListRelationFilter
    bookings?: BookingRequestListRelationFilter
    notifications?: NotificationListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    profileImageUrl?: SortOrderInput | SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profileImageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    active?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    number?: StringFilter<"Room"> | string
    type?: StringFilter<"Room"> | string
    size?: StringFilter<"Room"> | string
    monthlyRent?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    description?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    tenancies?: TenancyListRelationFilter
    requests?: MaintenanceRequestListRelationFilter
    bookings?: BookingRequestListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    type?: SortOrder
    size?: SortOrder
    monthlyRent?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenancies?: TenancyOrderByRelationAggregateInput
    requests?: MaintenanceRequestOrderByRelationAggregateInput
    bookings?: BookingRequestOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: string
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    type?: StringFilter<"Room"> | string
    size?: StringFilter<"Room"> | string
    monthlyRent?: IntFilter<"Room"> | number
    status?: EnumRoomStatusFilter<"Room"> | $Enums.RoomStatus
    description?: StringNullableFilter<"Room"> | string | null
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    tenancies?: TenancyListRelationFilter
    requests?: MaintenanceRequestListRelationFilter
    bookings?: BookingRequestListRelationFilter
  }, "id" | "number">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    type?: SortOrder
    size?: SortOrder
    monthlyRent?: SortOrder
    status?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    number?: StringWithAggregatesFilter<"Room"> | string
    type?: StringWithAggregatesFilter<"Room"> | string
    size?: StringWithAggregatesFilter<"Room"> | string
    monthlyRent?: IntWithAggregatesFilter<"Room"> | number
    status?: EnumRoomStatusWithAggregatesFilter<"Room"> | $Enums.RoomStatus
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type TenancyWhereInput = {
    AND?: TenancyWhereInput | TenancyWhereInput[]
    OR?: TenancyWhereInput[]
    NOT?: TenancyWhereInput | TenancyWhereInput[]
    id?: StringFilter<"Tenancy"> | string
    tenantId?: StringFilter<"Tenancy"> | string
    roomId?: StringFilter<"Tenancy"> | string
    startDate?: DateTimeFilter<"Tenancy"> | Date | string
    endDate?: DateTimeNullableFilter<"Tenancy"> | Date | string | null
    monthlyRent?: IntFilter<"Tenancy"> | number
    createdAt?: DateTimeFilter<"Tenancy"> | Date | string
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payments?: RentPaymentListRelationFilter
    utilities?: UtilityBillListRelationFilter
  }

  export type TenancyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    createdAt?: SortOrder
    tenant?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    payments?: RentPaymentOrderByRelationAggregateInput
    utilities?: UtilityBillOrderByRelationAggregateInput
    _relevance?: TenancyOrderByRelevanceInput
  }

  export type TenancyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TenancyWhereInput | TenancyWhereInput[]
    OR?: TenancyWhereInput[]
    NOT?: TenancyWhereInput | TenancyWhereInput[]
    tenantId?: StringFilter<"Tenancy"> | string
    roomId?: StringFilter<"Tenancy"> | string
    startDate?: DateTimeFilter<"Tenancy"> | Date | string
    endDate?: DateTimeNullableFilter<"Tenancy"> | Date | string | null
    monthlyRent?: IntFilter<"Tenancy"> | number
    createdAt?: DateTimeFilter<"Tenancy"> | Date | string
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    payments?: RentPaymentListRelationFilter
    utilities?: UtilityBillListRelationFilter
  }, "id">

  export type TenancyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    createdAt?: SortOrder
    _count?: TenancyCountOrderByAggregateInput
    _avg?: TenancyAvgOrderByAggregateInput
    _max?: TenancyMaxOrderByAggregateInput
    _min?: TenancyMinOrderByAggregateInput
    _sum?: TenancySumOrderByAggregateInput
  }

  export type TenancyScalarWhereWithAggregatesInput = {
    AND?: TenancyScalarWhereWithAggregatesInput | TenancyScalarWhereWithAggregatesInput[]
    OR?: TenancyScalarWhereWithAggregatesInput[]
    NOT?: TenancyScalarWhereWithAggregatesInput | TenancyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tenancy"> | string
    tenantId?: StringWithAggregatesFilter<"Tenancy"> | string
    roomId?: StringWithAggregatesFilter<"Tenancy"> | string
    startDate?: DateTimeWithAggregatesFilter<"Tenancy"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Tenancy"> | Date | string | null
    monthlyRent?: IntWithAggregatesFilter<"Tenancy"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tenancy"> | Date | string
  }

  export type RentPaymentWhereInput = {
    AND?: RentPaymentWhereInput | RentPaymentWhereInput[]
    OR?: RentPaymentWhereInput[]
    NOT?: RentPaymentWhereInput | RentPaymentWhereInput[]
    id?: StringFilter<"RentPayment"> | string
    tenancyId?: StringFilter<"RentPayment"> | string
    amount?: IntFilter<"RentPayment"> | number
    method?: EnumPaymentMethodFilter<"RentPayment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"RentPayment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    receiptUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackReference?: StringNullableFilter<"RentPayment"> | string | null
    paystackAuthorizationUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackAccessCode?: StringNullableFilter<"RentPayment"> | string | null
    paystackTransactionId?: StringNullableFilter<"RentPayment"> | string | null
    paystackPaidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paystackChannel?: StringNullableFilter<"RentPayment"> | string | null
    paystackCardType?: StringNullableFilter<"RentPayment"> | string | null
    paystackMobileMoneyNumber?: StringNullableFilter<"RentPayment"> | string | null
    paystackBank?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
    tenancy?: XOR<TenancyScalarRelationFilter, TenancyWhereInput>
  }

  export type RentPaymentOrderByWithRelationInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    paystackReference?: SortOrderInput | SortOrder
    paystackAuthorizationUrl?: SortOrderInput | SortOrder
    paystackAccessCode?: SortOrderInput | SortOrder
    paystackTransactionId?: SortOrderInput | SortOrder
    paystackPaidAt?: SortOrderInput | SortOrder
    paystackChannel?: SortOrderInput | SortOrder
    paystackCardType?: SortOrderInput | SortOrder
    paystackMobileMoneyNumber?: SortOrderInput | SortOrder
    paystackBank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenancy?: TenancyOrderByWithRelationInput
    _relevance?: RentPaymentOrderByRelevanceInput
  }

  export type RentPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paystackReference?: string
    AND?: RentPaymentWhereInput | RentPaymentWhereInput[]
    OR?: RentPaymentWhereInput[]
    NOT?: RentPaymentWhereInput | RentPaymentWhereInput[]
    tenancyId?: StringFilter<"RentPayment"> | string
    amount?: IntFilter<"RentPayment"> | number
    method?: EnumPaymentMethodFilter<"RentPayment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"RentPayment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    receiptUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackAuthorizationUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackAccessCode?: StringNullableFilter<"RentPayment"> | string | null
    paystackTransactionId?: StringNullableFilter<"RentPayment"> | string | null
    paystackPaidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paystackChannel?: StringNullableFilter<"RentPayment"> | string | null
    paystackCardType?: StringNullableFilter<"RentPayment"> | string | null
    paystackMobileMoneyNumber?: StringNullableFilter<"RentPayment"> | string | null
    paystackBank?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
    tenancy?: XOR<TenancyScalarRelationFilter, TenancyWhereInput>
  }, "id" | "paystackReference">

  export type RentPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    reference?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    paystackReference?: SortOrderInput | SortOrder
    paystackAuthorizationUrl?: SortOrderInput | SortOrder
    paystackAccessCode?: SortOrderInput | SortOrder
    paystackTransactionId?: SortOrderInput | SortOrder
    paystackPaidAt?: SortOrderInput | SortOrder
    paystackChannel?: SortOrderInput | SortOrder
    paystackCardType?: SortOrderInput | SortOrder
    paystackMobileMoneyNumber?: SortOrderInput | SortOrder
    paystackBank?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RentPaymentCountOrderByAggregateInput
    _avg?: RentPaymentAvgOrderByAggregateInput
    _max?: RentPaymentMaxOrderByAggregateInput
    _min?: RentPaymentMinOrderByAggregateInput
    _sum?: RentPaymentSumOrderByAggregateInput
  }

  export type RentPaymentScalarWhereWithAggregatesInput = {
    AND?: RentPaymentScalarWhereWithAggregatesInput | RentPaymentScalarWhereWithAggregatesInput[]
    OR?: RentPaymentScalarWhereWithAggregatesInput[]
    NOT?: RentPaymentScalarWhereWithAggregatesInput | RentPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentPayment"> | string
    tenancyId?: StringWithAggregatesFilter<"RentPayment"> | string
    amount?: IntWithAggregatesFilter<"RentPayment"> | number
    method?: EnumPaymentMethodWithAggregatesFilter<"RentPayment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"RentPayment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"RentPayment"> | Date | string | null
    reference?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackReference?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackAuthorizationUrl?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackAccessCode?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackTransactionId?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackPaidAt?: DateTimeNullableWithAggregatesFilter<"RentPayment"> | Date | string | null
    paystackChannel?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackCardType?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackMobileMoneyNumber?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    paystackBank?: StringNullableWithAggregatesFilter<"RentPayment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RentPayment"> | Date | string
  }

  export type UtilityBillWhereInput = {
    AND?: UtilityBillWhereInput | UtilityBillWhereInput[]
    OR?: UtilityBillWhereInput[]
    NOT?: UtilityBillWhereInput | UtilityBillWhereInput[]
    id?: StringFilter<"UtilityBill"> | string
    tenancyId?: StringFilter<"UtilityBill"> | string
    type?: EnumUtilityTypeFilter<"UtilityBill"> | $Enums.UtilityType
    amount?: IntFilter<"UtilityBill"> | number
    dueDate?: DateTimeFilter<"UtilityBill"> | Date | string
    status?: EnumBillStatusFilter<"UtilityBill"> | $Enums.BillStatus
    paidAt?: DateTimeNullableFilter<"UtilityBill"> | Date | string | null
    receiptUrl?: StringNullableFilter<"UtilityBill"> | string | null
    createdAt?: DateTimeFilter<"UtilityBill"> | Date | string
    tenancy?: XOR<TenancyScalarRelationFilter, TenancyWhereInput>
  }

  export type UtilityBillOrderByWithRelationInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    tenancy?: TenancyOrderByWithRelationInput
    _relevance?: UtilityBillOrderByRelevanceInput
  }

  export type UtilityBillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UtilityBillWhereInput | UtilityBillWhereInput[]
    OR?: UtilityBillWhereInput[]
    NOT?: UtilityBillWhereInput | UtilityBillWhereInput[]
    tenancyId?: StringFilter<"UtilityBill"> | string
    type?: EnumUtilityTypeFilter<"UtilityBill"> | $Enums.UtilityType
    amount?: IntFilter<"UtilityBill"> | number
    dueDate?: DateTimeFilter<"UtilityBill"> | Date | string
    status?: EnumBillStatusFilter<"UtilityBill"> | $Enums.BillStatus
    paidAt?: DateTimeNullableFilter<"UtilityBill"> | Date | string | null
    receiptUrl?: StringNullableFilter<"UtilityBill"> | string | null
    createdAt?: DateTimeFilter<"UtilityBill"> | Date | string
    tenancy?: XOR<TenancyScalarRelationFilter, TenancyWhereInput>
  }, "id">

  export type UtilityBillOrderByWithAggregationInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UtilityBillCountOrderByAggregateInput
    _avg?: UtilityBillAvgOrderByAggregateInput
    _max?: UtilityBillMaxOrderByAggregateInput
    _min?: UtilityBillMinOrderByAggregateInput
    _sum?: UtilityBillSumOrderByAggregateInput
  }

  export type UtilityBillScalarWhereWithAggregatesInput = {
    AND?: UtilityBillScalarWhereWithAggregatesInput | UtilityBillScalarWhereWithAggregatesInput[]
    OR?: UtilityBillScalarWhereWithAggregatesInput[]
    NOT?: UtilityBillScalarWhereWithAggregatesInput | UtilityBillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UtilityBill"> | string
    tenancyId?: StringWithAggregatesFilter<"UtilityBill"> | string
    type?: EnumUtilityTypeWithAggregatesFilter<"UtilityBill"> | $Enums.UtilityType
    amount?: IntWithAggregatesFilter<"UtilityBill"> | number
    dueDate?: DateTimeWithAggregatesFilter<"UtilityBill"> | Date | string
    status?: EnumBillStatusWithAggregatesFilter<"UtilityBill"> | $Enums.BillStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"UtilityBill"> | Date | string | null
    receiptUrl?: StringNullableWithAggregatesFilter<"UtilityBill"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UtilityBill"> | Date | string
  }

  export type MaintenanceRequestWhereInput = {
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    roomId?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    status?: EnumRequestStatusFilter<"MaintenanceRequest"> | $Enums.RequestStatus
    priority?: EnumPriorityFilter<"MaintenanceRequest"> | $Enums.Priority
    assignedToId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MaintenanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    tenant?: UserOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    assignedTo?: UserOrderByWithRelationInput
    _relevance?: MaintenanceRequestOrderByRelevanceInput
  }

  export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    roomId?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    status?: EnumRequestStatusFilter<"MaintenanceRequest"> | $Enums.RequestStatus
    priority?: EnumPriorityFilter<"MaintenanceRequest"> | $Enums.Priority
    assignedToId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
    tenant?: XOR<UserScalarRelationFilter, UserWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    assignedTo?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedToId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    _count?: MaintenanceRequestCountOrderByAggregateInput
    _max?: MaintenanceRequestMaxOrderByAggregateInput
    _min?: MaintenanceRequestMinOrderByAggregateInput
  }

  export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRequestScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    tenantId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    roomId?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    category?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    title?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    description?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    status?: EnumRequestStatusWithAggregatesFilter<"MaintenanceRequest"> | $Enums.RequestStatus
    priority?: EnumPriorityWithAggregatesFilter<"MaintenanceRequest"> | $Enums.Priority
    assignedToId?: StringNullableWithAggregatesFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"MaintenanceRequest"> | Date | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    subject?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    subject?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrderInput | SortOrder
    readAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    channel?: EnumNotificationChannelWithAggregatesFilter<"Notification"> | $Enums.NotificationChannel
    subject?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    status?: EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus
    sentAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type BookingRequestWhereInput = {
    AND?: BookingRequestWhereInput | BookingRequestWhereInput[]
    OR?: BookingRequestWhereInput[]
    NOT?: BookingRequestWhereInput | BookingRequestWhereInput[]
    id?: StringFilter<"BookingRequest"> | string
    roomId?: StringFilter<"BookingRequest"> | string
    prospectId?: StringNullableFilter<"BookingRequest"> | string | null
    name?: StringFilter<"BookingRequest"> | string
    email?: StringFilter<"BookingRequest"> | string
    phone?: StringFilter<"BookingRequest"> | string
    preferredMoveInDate?: DateTimeNullableFilter<"BookingRequest"> | Date | string | null
    message?: StringNullableFilter<"BookingRequest"> | string | null
    status?: EnumBookingStatusFilter<"BookingRequest"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"BookingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRequest"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    prospect?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type BookingRequestOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    prospectId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    preferredMoveInDate?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    prospect?: UserOrderByWithRelationInput
    _relevance?: BookingRequestOrderByRelevanceInput
  }

  export type BookingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingRequestWhereInput | BookingRequestWhereInput[]
    OR?: BookingRequestWhereInput[]
    NOT?: BookingRequestWhereInput | BookingRequestWhereInput[]
    roomId?: StringFilter<"BookingRequest"> | string
    prospectId?: StringNullableFilter<"BookingRequest"> | string | null
    name?: StringFilter<"BookingRequest"> | string
    email?: StringFilter<"BookingRequest"> | string
    phone?: StringFilter<"BookingRequest"> | string
    preferredMoveInDate?: DateTimeNullableFilter<"BookingRequest"> | Date | string | null
    message?: StringNullableFilter<"BookingRequest"> | string | null
    status?: EnumBookingStatusFilter<"BookingRequest"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"BookingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRequest"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    prospect?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type BookingRequestOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    prospectId?: SortOrderInput | SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    preferredMoveInDate?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingRequestCountOrderByAggregateInput
    _max?: BookingRequestMaxOrderByAggregateInput
    _min?: BookingRequestMinOrderByAggregateInput
  }

  export type BookingRequestScalarWhereWithAggregatesInput = {
    AND?: BookingRequestScalarWhereWithAggregatesInput | BookingRequestScalarWhereWithAggregatesInput[]
    OR?: BookingRequestScalarWhereWithAggregatesInput[]
    NOT?: BookingRequestScalarWhereWithAggregatesInput | BookingRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingRequest"> | string
    roomId?: StringWithAggregatesFilter<"BookingRequest"> | string
    prospectId?: StringNullableWithAggregatesFilter<"BookingRequest"> | string | null
    name?: StringWithAggregatesFilter<"BookingRequest"> | string
    email?: StringWithAggregatesFilter<"BookingRequest"> | string
    phone?: StringWithAggregatesFilter<"BookingRequest"> | string
    preferredMoveInDate?: DateTimeNullableWithAggregatesFilter<"BookingRequest"> | Date | string | null
    message?: StringNullableWithAggregatesFilter<"BookingRequest"> | string | null
    status?: EnumBookingStatusWithAggregatesFilter<"BookingRequest"> | $Enums.BookingStatus
    createdAt?: DateTimeWithAggregatesFilter<"BookingRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BookingRequest"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AuditLogOrderByRelevanceInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrderInput | SortOrder
    payload?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entityType?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    payload?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutRoomInput
    requests?: MaintenanceRequestCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutRoomInput
    requests?: MaintenanceRequestUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutRoomNestedInput
    requests?: MaintenanceRequestUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutRoomNestedInput
    requests?: MaintenanceRequestUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenancyCreateInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    tenant: UserCreateNestedOneWithoutTenanciesInput
    room: RoomCreateNestedOneWithoutTenanciesInput
    payments?: RentPaymentCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUncheckedCreateInput = {
    id?: string
    tenantId: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    payments?: RentPaymentUncheckedCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillUncheckedCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UserUpdateOneRequiredWithoutTenanciesNestedInput
    room?: RoomUpdateOneRequiredWithoutTenanciesNestedInput
    payments?: RentPaymentUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: RentPaymentUncheckedUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUncheckedUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyCreateManyInput = {
    id?: string
    tenantId: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
  }

  export type TenancyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenancyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentCreateInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
    tenancy: TenancyCreateNestedOneWithoutPaymentsInput
  }

  export type RentPaymentUncheckedCreateInput = {
    id?: string
    tenancyId: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancy?: TenancyUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type RentPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenancyId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentCreateManyInput = {
    id?: string
    tenancyId: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenancyId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillCreateInput = {
    id?: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
    tenancy: TenancyCreateNestedOneWithoutUtilitiesInput
  }

  export type UtilityBillUncheckedCreateInput = {
    id?: string
    tenancyId: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type UtilityBillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancy?: TenancyUpdateOneRequiredWithoutUtilitiesNestedInput
  }

  export type UtilityBillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenancyId?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillCreateManyInput = {
    id?: string
    tenancyId: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type UtilityBillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenancyId?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestCreateInput = {
    id?: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    tenant: UserCreateNestedOneWithoutRaisedRequestsInput
    room: RoomCreateNestedOneWithoutRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateInput = {
    id?: string
    tenantId: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: UserUpdateOneRequiredWithoutRaisedRequestsNestedInput
    room?: RoomUpdateOneRequiredWithoutRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestCreateManyInput = {
    id?: string
    tenantId: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRequestCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
    prospect?: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingRequestUncheckedCreateInput = {
    id?: string
    roomId: string
    prospectId?: string | null
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    prospect?: UserUpdateOneWithoutBookingsNestedInput
  }

  export type BookingRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    prospectId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRequestCreateManyInput = {
    id?: string
    roomId: string
    prospectId?: string | null
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    prospectId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId?: string | null
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenancyListRelationFilter = {
    every?: TenancyWhereInput
    some?: TenancyWhereInput
    none?: TenancyWhereInput
  }

  export type MaintenanceRequestListRelationFilter = {
    every?: MaintenanceRequestWhereInput
    some?: MaintenanceRequestWhereInput
    none?: MaintenanceRequestWhereInput
  }

  export type BookingRequestListRelationFilter = {
    every?: BookingRequestWhereInput
    some?: BookingRequestWhereInput
    none?: BookingRequestWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TenancyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profileImageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profileImageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    profileImageUrl?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    type?: SortOrder
    size?: SortOrder
    monthlyRent?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    type?: SortOrder
    size?: SortOrder
    monthlyRent?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    type?: SortOrder
    size?: SortOrder
    monthlyRent?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RentPaymentListRelationFilter = {
    every?: RentPaymentWhereInput
    some?: RentPaymentWhereInput
    none?: RentPaymentWhereInput
  }

  export type UtilityBillListRelationFilter = {
    every?: UtilityBillWhereInput
    some?: UtilityBillWhereInput
    none?: UtilityBillWhereInput
  }

  export type RentPaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilityBillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenancyOrderByRelevanceInput = {
    fields: TenancyOrderByRelevanceFieldEnum | TenancyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TenancyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    createdAt?: SortOrder
  }

  export type TenancyAvgOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type TenancyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    createdAt?: SortOrder
  }

  export type TenancyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    monthlyRent?: SortOrder
    createdAt?: SortOrder
  }

  export type TenancySumOrderByAggregateInput = {
    monthlyRent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type TenancyScalarRelationFilter = {
    is?: TenancyWhereInput
    isNot?: TenancyWhereInput
  }

  export type RentPaymentOrderByRelevanceInput = {
    fields: RentPaymentOrderByRelevanceFieldEnum | RentPaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RentPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    receiptUrl?: SortOrder
    paystackReference?: SortOrder
    paystackAuthorizationUrl?: SortOrder
    paystackAccessCode?: SortOrder
    paystackTransactionId?: SortOrder
    paystackPaidAt?: SortOrder
    paystackChannel?: SortOrder
    paystackCardType?: SortOrder
    paystackMobileMoneyNumber?: SortOrder
    paystackBank?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type RentPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    receiptUrl?: SortOrder
    paystackReference?: SortOrder
    paystackAuthorizationUrl?: SortOrder
    paystackAccessCode?: SortOrder
    paystackTransactionId?: SortOrder
    paystackPaidAt?: SortOrder
    paystackChannel?: SortOrder
    paystackCardType?: SortOrder
    paystackMobileMoneyNumber?: SortOrder
    paystackBank?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    reference?: SortOrder
    receiptUrl?: SortOrder
    paystackReference?: SortOrder
    paystackAuthorizationUrl?: SortOrder
    paystackAccessCode?: SortOrder
    paystackTransactionId?: SortOrder
    paystackPaidAt?: SortOrder
    paystackChannel?: SortOrder
    paystackCardType?: SortOrder
    paystackMobileMoneyNumber?: SortOrder
    paystackBank?: SortOrder
    createdAt?: SortOrder
  }

  export type RentPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumUtilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UtilityType | EnumUtilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UtilityType[]
    notIn?: $Enums.UtilityType[]
    not?: NestedEnumUtilityTypeFilter<$PrismaModel> | $Enums.UtilityType
  }

  export type EnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[]
    notIn?: $Enums.BillStatus[]
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type UtilityBillOrderByRelevanceInput = {
    fields: UtilityBillOrderByRelevanceFieldEnum | UtilityBillOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UtilityBillCountOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilityBillAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UtilityBillMaxOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilityBillMinOrderByAggregateInput = {
    id?: SortOrder
    tenancyId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    receiptUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilityBillSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumUtilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UtilityType | EnumUtilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UtilityType[]
    notIn?: $Enums.UtilityType[]
    not?: NestedEnumUtilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.UtilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUtilityTypeFilter<$PrismaModel>
    _max?: NestedEnumUtilityTypeFilter<$PrismaModel>
  }

  export type EnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[]
    notIn?: $Enums.BillStatus[]
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MaintenanceRequestOrderByRelevanceInput = {
    fields: MaintenanceRequestOrderByRelevanceFieldEnum | MaintenanceRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    roomId?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedToId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resolvedAt?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    channel?: SortOrder
    subject?: SortOrder
    body?: SortOrder
    status?: SortOrder
    sentAt?: SortOrder
    readAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type EnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type BookingRequestOrderByRelevanceInput = {
    fields: BookingRequestOrderByRelevanceFieldEnum | BookingRequestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingRequestCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    prospectId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    preferredMoveInDate?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    prospectId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    preferredMoveInDate?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRequestMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    prospectId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    preferredMoveInDate?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type AuditLogOrderByRelevanceInput = {
    fields: AuditLogOrderByRelevanceFieldEnum | AuditLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type TenancyCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput> | TenancyCreateWithoutTenantInput[] | TenancyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutTenantInput | TenancyCreateOrConnectWithoutTenantInput[]
    createMany?: TenancyCreateManyTenantInputEnvelope
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput> | MaintenanceRequestCreateWithoutAssignedToInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedToInput | MaintenanceRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: MaintenanceRequestCreateManyAssignedToInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type BookingRequestCreateNestedManyWithoutProspectInput = {
    create?: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput> | BookingRequestCreateWithoutProspectInput[] | BookingRequestUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutProspectInput | BookingRequestCreateOrConnectWithoutProspectInput[]
    createMany?: BookingRequestCreateManyProspectInputEnvelope
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type TenancyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput> | TenancyCreateWithoutTenantInput[] | TenancyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutTenantInput | TenancyCreateOrConnectWithoutTenantInput[]
    createMany?: TenancyCreateManyTenantInputEnvelope
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput> | MaintenanceRequestCreateWithoutAssignedToInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedToInput | MaintenanceRequestCreateOrConnectWithoutAssignedToInput[]
    createMany?: MaintenanceRequestCreateManyAssignedToInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type BookingRequestUncheckedCreateNestedManyWithoutProspectInput = {
    create?: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput> | BookingRequestCreateWithoutProspectInput[] | BookingRequestUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutProspectInput | BookingRequestCreateOrConnectWithoutProspectInput[]
    createMany?: BookingRequestCreateManyProspectInputEnvelope
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenancyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput> | TenancyCreateWithoutTenantInput[] | TenancyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutTenantInput | TenancyCreateOrConnectWithoutTenantInput[]
    upsert?: TenancyUpsertWithWhereUniqueWithoutTenantInput | TenancyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenancyCreateManyTenantInputEnvelope
    set?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    disconnect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    delete?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    update?: TenancyUpdateWithWhereUniqueWithoutTenantInput | TenancyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenancyUpdateManyWithWhereWithoutTenantInput | TenancyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput> | MaintenanceRequestCreateWithoutAssignedToInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedToInput | MaintenanceRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedToInput | MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: MaintenanceRequestCreateManyAssignedToInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedToInput | MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutAssignedToInput | MaintenanceRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type BookingRequestUpdateManyWithoutProspectNestedInput = {
    create?: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput> | BookingRequestCreateWithoutProspectInput[] | BookingRequestUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutProspectInput | BookingRequestCreateOrConnectWithoutProspectInput[]
    upsert?: BookingRequestUpsertWithWhereUniqueWithoutProspectInput | BookingRequestUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: BookingRequestCreateManyProspectInputEnvelope
    set?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    disconnect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    delete?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    update?: BookingRequestUpdateWithWhereUniqueWithoutProspectInput | BookingRequestUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: BookingRequestUpdateManyWithWhereWithoutProspectInput | BookingRequestUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TenancyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput> | TenancyCreateWithoutTenantInput[] | TenancyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutTenantInput | TenancyCreateOrConnectWithoutTenantInput[]
    upsert?: TenancyUpsertWithWhereUniqueWithoutTenantInput | TenancyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: TenancyCreateManyTenantInputEnvelope
    set?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    disconnect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    delete?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    update?: TenancyUpdateWithWhereUniqueWithoutTenantInput | TenancyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: TenancyUpdateManyWithWhereWithoutTenantInput | TenancyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput> | MaintenanceRequestCreateWithoutAssignedToInput[] | MaintenanceRequestUncheckedCreateWithoutAssignedToInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutAssignedToInput | MaintenanceRequestCreateOrConnectWithoutAssignedToInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedToInput | MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedToInput[]
    createMany?: MaintenanceRequestCreateManyAssignedToInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedToInput | MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedToInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutAssignedToInput | MaintenanceRequestUpdateManyWithWhereWithoutAssignedToInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput> | MaintenanceRequestCreateWithoutTenantInput[] | MaintenanceRequestUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutTenantInput | MaintenanceRequestCreateOrConnectWithoutTenantInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: MaintenanceRequestCreateManyTenantInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput | MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutTenantInput | MaintenanceRequestUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type BookingRequestUncheckedUpdateManyWithoutProspectNestedInput = {
    create?: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput> | BookingRequestCreateWithoutProspectInput[] | BookingRequestUncheckedCreateWithoutProspectInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutProspectInput | BookingRequestCreateOrConnectWithoutProspectInput[]
    upsert?: BookingRequestUpsertWithWhereUniqueWithoutProspectInput | BookingRequestUpsertWithWhereUniqueWithoutProspectInput[]
    createMany?: BookingRequestCreateManyProspectInputEnvelope
    set?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    disconnect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    delete?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    update?: BookingRequestUpdateWithWhereUniqueWithoutProspectInput | BookingRequestUpdateWithWhereUniqueWithoutProspectInput[]
    updateMany?: BookingRequestUpdateManyWithWhereWithoutProspectInput | BookingRequestUpdateManyWithWhereWithoutProspectInput[]
    deleteMany?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type TenancyCreateNestedManyWithoutRoomInput = {
    create?: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput> | TenancyCreateWithoutRoomInput[] | TenancyUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutRoomInput | TenancyCreateOrConnectWithoutRoomInput[]
    createMany?: TenancyCreateManyRoomInputEnvelope
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutRoomInput = {
    create?: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput> | MaintenanceRequestCreateWithoutRoomInput[] | MaintenanceRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutRoomInput | MaintenanceRequestCreateOrConnectWithoutRoomInput[]
    createMany?: MaintenanceRequestCreateManyRoomInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type BookingRequestCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput> | BookingRequestCreateWithoutRoomInput[] | BookingRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutRoomInput | BookingRequestCreateOrConnectWithoutRoomInput[]
    createMany?: BookingRequestCreateManyRoomInputEnvelope
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
  }

  export type TenancyUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput> | TenancyCreateWithoutRoomInput[] | TenancyUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutRoomInput | TenancyCreateOrConnectWithoutRoomInput[]
    createMany?: TenancyCreateManyRoomInputEnvelope
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput> | MaintenanceRequestCreateWithoutRoomInput[] | MaintenanceRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutRoomInput | MaintenanceRequestCreateOrConnectWithoutRoomInput[]
    createMany?: MaintenanceRequestCreateManyRoomInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type BookingRequestUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput> | BookingRequestCreateWithoutRoomInput[] | BookingRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutRoomInput | BookingRequestCreateOrConnectWithoutRoomInput[]
    createMany?: BookingRequestCreateManyRoomInputEnvelope
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRoomStatusFieldUpdateOperationsInput = {
    set?: $Enums.RoomStatus
  }

  export type TenancyUpdateManyWithoutRoomNestedInput = {
    create?: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput> | TenancyCreateWithoutRoomInput[] | TenancyUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutRoomInput | TenancyCreateOrConnectWithoutRoomInput[]
    upsert?: TenancyUpsertWithWhereUniqueWithoutRoomInput | TenancyUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: TenancyCreateManyRoomInputEnvelope
    set?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    disconnect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    delete?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    update?: TenancyUpdateWithWhereUniqueWithoutRoomInput | TenancyUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: TenancyUpdateManyWithWhereWithoutRoomInput | TenancyUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput> | MaintenanceRequestCreateWithoutRoomInput[] | MaintenanceRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutRoomInput | MaintenanceRequestCreateOrConnectWithoutRoomInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutRoomInput | MaintenanceRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MaintenanceRequestCreateManyRoomInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutRoomInput | MaintenanceRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutRoomInput | MaintenanceRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type BookingRequestUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput> | BookingRequestCreateWithoutRoomInput[] | BookingRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutRoomInput | BookingRequestCreateOrConnectWithoutRoomInput[]
    upsert?: BookingRequestUpsertWithWhereUniqueWithoutRoomInput | BookingRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingRequestCreateManyRoomInputEnvelope
    set?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    disconnect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    delete?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    update?: BookingRequestUpdateWithWhereUniqueWithoutRoomInput | BookingRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingRequestUpdateManyWithWhereWithoutRoomInput | BookingRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
  }

  export type TenancyUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput> | TenancyCreateWithoutRoomInput[] | TenancyUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: TenancyCreateOrConnectWithoutRoomInput | TenancyCreateOrConnectWithoutRoomInput[]
    upsert?: TenancyUpsertWithWhereUniqueWithoutRoomInput | TenancyUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: TenancyCreateManyRoomInputEnvelope
    set?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    disconnect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    delete?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    connect?: TenancyWhereUniqueInput | TenancyWhereUniqueInput[]
    update?: TenancyUpdateWithWhereUniqueWithoutRoomInput | TenancyUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: TenancyUpdateManyWithWhereWithoutRoomInput | TenancyUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput> | MaintenanceRequestCreateWithoutRoomInput[] | MaintenanceRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutRoomInput | MaintenanceRequestCreateOrConnectWithoutRoomInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutRoomInput | MaintenanceRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: MaintenanceRequestCreateManyRoomInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutRoomInput | MaintenanceRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutRoomInput | MaintenanceRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type BookingRequestUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput> | BookingRequestCreateWithoutRoomInput[] | BookingRequestUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingRequestCreateOrConnectWithoutRoomInput | BookingRequestCreateOrConnectWithoutRoomInput[]
    upsert?: BookingRequestUpsertWithWhereUniqueWithoutRoomInput | BookingRequestUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingRequestCreateManyRoomInputEnvelope
    set?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    disconnect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    delete?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    connect?: BookingRequestWhereUniqueInput | BookingRequestWhereUniqueInput[]
    update?: BookingRequestUpdateWithWhereUniqueWithoutRoomInput | BookingRequestUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingRequestUpdateManyWithWhereWithoutRoomInput | BookingRequestUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTenanciesInput = {
    create?: XOR<UserCreateWithoutTenanciesInput, UserUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenanciesInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutTenanciesInput = {
    create?: XOR<RoomCreateWithoutTenanciesInput, RoomUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutTenanciesInput
    connect?: RoomWhereUniqueInput
  }

  export type RentPaymentCreateNestedManyWithoutTenancyInput = {
    create?: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput> | RentPaymentCreateWithoutTenancyInput[] | RentPaymentUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutTenancyInput | RentPaymentCreateOrConnectWithoutTenancyInput[]
    createMany?: RentPaymentCreateManyTenancyInputEnvelope
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
  }

  export type UtilityBillCreateNestedManyWithoutTenancyInput = {
    create?: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput> | UtilityBillCreateWithoutTenancyInput[] | UtilityBillUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: UtilityBillCreateOrConnectWithoutTenancyInput | UtilityBillCreateOrConnectWithoutTenancyInput[]
    createMany?: UtilityBillCreateManyTenancyInputEnvelope
    connect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
  }

  export type RentPaymentUncheckedCreateNestedManyWithoutTenancyInput = {
    create?: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput> | RentPaymentCreateWithoutTenancyInput[] | RentPaymentUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutTenancyInput | RentPaymentCreateOrConnectWithoutTenancyInput[]
    createMany?: RentPaymentCreateManyTenancyInputEnvelope
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
  }

  export type UtilityBillUncheckedCreateNestedManyWithoutTenancyInput = {
    create?: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput> | UtilityBillCreateWithoutTenancyInput[] | UtilityBillUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: UtilityBillCreateOrConnectWithoutTenancyInput | UtilityBillCreateOrConnectWithoutTenancyInput[]
    createMany?: UtilityBillCreateManyTenancyInputEnvelope
    connect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTenanciesNestedInput = {
    create?: XOR<UserCreateWithoutTenanciesInput, UserUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenanciesInput
    upsert?: UserUpsertWithoutTenanciesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenanciesInput, UserUpdateWithoutTenanciesInput>, UserUncheckedUpdateWithoutTenanciesInput>
  }

  export type RoomUpdateOneRequiredWithoutTenanciesNestedInput = {
    create?: XOR<RoomCreateWithoutTenanciesInput, RoomUncheckedCreateWithoutTenanciesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutTenanciesInput
    upsert?: RoomUpsertWithoutTenanciesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutTenanciesInput, RoomUpdateWithoutTenanciesInput>, RoomUncheckedUpdateWithoutTenanciesInput>
  }

  export type RentPaymentUpdateManyWithoutTenancyNestedInput = {
    create?: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput> | RentPaymentCreateWithoutTenancyInput[] | RentPaymentUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutTenancyInput | RentPaymentCreateOrConnectWithoutTenancyInput[]
    upsert?: RentPaymentUpsertWithWhereUniqueWithoutTenancyInput | RentPaymentUpsertWithWhereUniqueWithoutTenancyInput[]
    createMany?: RentPaymentCreateManyTenancyInputEnvelope
    set?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    disconnect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    delete?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    update?: RentPaymentUpdateWithWhereUniqueWithoutTenancyInput | RentPaymentUpdateWithWhereUniqueWithoutTenancyInput[]
    updateMany?: RentPaymentUpdateManyWithWhereWithoutTenancyInput | RentPaymentUpdateManyWithWhereWithoutTenancyInput[]
    deleteMany?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
  }

  export type UtilityBillUpdateManyWithoutTenancyNestedInput = {
    create?: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput> | UtilityBillCreateWithoutTenancyInput[] | UtilityBillUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: UtilityBillCreateOrConnectWithoutTenancyInput | UtilityBillCreateOrConnectWithoutTenancyInput[]
    upsert?: UtilityBillUpsertWithWhereUniqueWithoutTenancyInput | UtilityBillUpsertWithWhereUniqueWithoutTenancyInput[]
    createMany?: UtilityBillCreateManyTenancyInputEnvelope
    set?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    disconnect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    delete?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    connect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    update?: UtilityBillUpdateWithWhereUniqueWithoutTenancyInput | UtilityBillUpdateWithWhereUniqueWithoutTenancyInput[]
    updateMany?: UtilityBillUpdateManyWithWhereWithoutTenancyInput | UtilityBillUpdateManyWithWhereWithoutTenancyInput[]
    deleteMany?: UtilityBillScalarWhereInput | UtilityBillScalarWhereInput[]
  }

  export type RentPaymentUncheckedUpdateManyWithoutTenancyNestedInput = {
    create?: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput> | RentPaymentCreateWithoutTenancyInput[] | RentPaymentUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: RentPaymentCreateOrConnectWithoutTenancyInput | RentPaymentCreateOrConnectWithoutTenancyInput[]
    upsert?: RentPaymentUpsertWithWhereUniqueWithoutTenancyInput | RentPaymentUpsertWithWhereUniqueWithoutTenancyInput[]
    createMany?: RentPaymentCreateManyTenancyInputEnvelope
    set?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    disconnect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    delete?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    connect?: RentPaymentWhereUniqueInput | RentPaymentWhereUniqueInput[]
    update?: RentPaymentUpdateWithWhereUniqueWithoutTenancyInput | RentPaymentUpdateWithWhereUniqueWithoutTenancyInput[]
    updateMany?: RentPaymentUpdateManyWithWhereWithoutTenancyInput | RentPaymentUpdateManyWithWhereWithoutTenancyInput[]
    deleteMany?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
  }

  export type UtilityBillUncheckedUpdateManyWithoutTenancyNestedInput = {
    create?: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput> | UtilityBillCreateWithoutTenancyInput[] | UtilityBillUncheckedCreateWithoutTenancyInput[]
    connectOrCreate?: UtilityBillCreateOrConnectWithoutTenancyInput | UtilityBillCreateOrConnectWithoutTenancyInput[]
    upsert?: UtilityBillUpsertWithWhereUniqueWithoutTenancyInput | UtilityBillUpsertWithWhereUniqueWithoutTenancyInput[]
    createMany?: UtilityBillCreateManyTenancyInputEnvelope
    set?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    disconnect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    delete?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    connect?: UtilityBillWhereUniqueInput | UtilityBillWhereUniqueInput[]
    update?: UtilityBillUpdateWithWhereUniqueWithoutTenancyInput | UtilityBillUpdateWithWhereUniqueWithoutTenancyInput[]
    updateMany?: UtilityBillUpdateManyWithWhereWithoutTenancyInput | UtilityBillUpdateManyWithWhereWithoutTenancyInput[]
    deleteMany?: UtilityBillScalarWhereInput | UtilityBillScalarWhereInput[]
  }

  export type TenancyCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<TenancyCreateWithoutPaymentsInput, TenancyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenancyCreateOrConnectWithoutPaymentsInput
    connect?: TenancyWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type TenancyUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<TenancyCreateWithoutPaymentsInput, TenancyUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: TenancyCreateOrConnectWithoutPaymentsInput
    upsert?: TenancyUpsertWithoutPaymentsInput
    connect?: TenancyWhereUniqueInput
    update?: XOR<XOR<TenancyUpdateToOneWithWhereWithoutPaymentsInput, TenancyUpdateWithoutPaymentsInput>, TenancyUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenancyCreateNestedOneWithoutUtilitiesInput = {
    create?: XOR<TenancyCreateWithoutUtilitiesInput, TenancyUncheckedCreateWithoutUtilitiesInput>
    connectOrCreate?: TenancyCreateOrConnectWithoutUtilitiesInput
    connect?: TenancyWhereUniqueInput
  }

  export type EnumUtilityTypeFieldUpdateOperationsInput = {
    set?: $Enums.UtilityType
  }

  export type EnumBillStatusFieldUpdateOperationsInput = {
    set?: $Enums.BillStatus
  }

  export type TenancyUpdateOneRequiredWithoutUtilitiesNestedInput = {
    create?: XOR<TenancyCreateWithoutUtilitiesInput, TenancyUncheckedCreateWithoutUtilitiesInput>
    connectOrCreate?: TenancyCreateOrConnectWithoutUtilitiesInput
    upsert?: TenancyUpsertWithoutUtilitiesInput
    connect?: TenancyWhereUniqueInput
    update?: XOR<XOR<TenancyUpdateToOneWithWhereWithoutUtilitiesInput, TenancyUpdateWithoutUtilitiesInput>, TenancyUncheckedUpdateWithoutUtilitiesInput>
  }

  export type UserCreateNestedOneWithoutRaisedRequestsInput = {
    create?: XOR<UserCreateWithoutRaisedRequestsInput, UserUncheckedCreateWithoutRaisedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaisedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutRequestsInput = {
    create?: XOR<RoomCreateWithoutRequestsInput, RoomUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRequestsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedRequestsInput = {
    create?: XOR<UserCreateWithoutAssignedRequestsInput, UserUncheckedCreateWithoutAssignedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type UserUpdateOneRequiredWithoutRaisedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRaisedRequestsInput, UserUncheckedCreateWithoutRaisedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRaisedRequestsInput
    upsert?: UserUpsertWithoutRaisedRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRaisedRequestsInput, UserUpdateWithoutRaisedRequestsInput>, UserUncheckedUpdateWithoutRaisedRequestsInput>
  }

  export type RoomUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<RoomCreateWithoutRequestsInput, RoomUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutRequestsInput
    upsert?: RoomUpsertWithoutRequestsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutRequestsInput, RoomUpdateWithoutRequestsInput>, RoomUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateOneWithoutAssignedRequestsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedRequestsInput, UserUncheckedCreateWithoutAssignedRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedRequestsInput
    upsert?: UserUpsertWithoutAssignedRequestsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedRequestsInput, UserUpdateWithoutAssignedRequestsInput>, UserUncheckedUpdateWithoutAssignedRequestsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationChannelFieldUpdateOperationsInput = {
    set?: $Enums.NotificationChannel
  }

  export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoomStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusFilter<$PrismaModel> | $Enums.RoomStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoomStatus | EnumRoomStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RoomStatus[]
    notIn?: $Enums.RoomStatus[]
    not?: NestedEnumRoomStatusWithAggregatesFilter<$PrismaModel> | $Enums.RoomStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoomStatusFilter<$PrismaModel>
    _max?: NestedEnumRoomStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[]
    notIn?: $Enums.PaymentMethod[]
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumUtilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UtilityType | EnumUtilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UtilityType[]
    notIn?: $Enums.UtilityType[]
    not?: NestedEnumUtilityTypeFilter<$PrismaModel> | $Enums.UtilityType
  }

  export type NestedEnumBillStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[]
    notIn?: $Enums.BillStatus[]
    not?: NestedEnumBillStatusFilter<$PrismaModel> | $Enums.BillStatus
  }

  export type NestedEnumUtilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UtilityType | EnumUtilityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UtilityType[]
    notIn?: $Enums.UtilityType[]
    not?: NestedEnumUtilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.UtilityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUtilityTypeFilter<$PrismaModel>
    _max?: NestedEnumUtilityTypeFilter<$PrismaModel>
  }

  export type NestedEnumBillStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BillStatus | EnumBillStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BillStatus[]
    notIn?: $Enums.BillStatus[]
    not?: NestedEnumBillStatusWithAggregatesFilter<$PrismaModel> | $Enums.BillStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBillStatusFilter<$PrismaModel>
    _max?: NestedEnumBillStatusFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[]
    notIn?: $Enums.RequestStatus[]
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[]
    notIn?: $Enums.Priority[]
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumNotificationChannelFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelFilter<$PrismaModel> | $Enums.NotificationChannel
  }

  export type NestedEnumNotificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusFilter<$PrismaModel> | $Enums.NotificationStatus
  }

  export type NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationChannel | EnumNotificationChannelFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationChannel[]
    notIn?: $Enums.NotificationChannel[]
    not?: NestedEnumNotificationChannelWithAggregatesFilter<$PrismaModel> | $Enums.NotificationChannel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationChannelFilter<$PrismaModel>
    _max?: NestedEnumNotificationChannelFilter<$PrismaModel>
  }

  export type NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationStatus | EnumNotificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationStatus[]
    notIn?: $Enums.NotificationStatus[]
    not?: NestedEnumNotificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.NotificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationStatusFilter<$PrismaModel>
    _max?: NestedEnumNotificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type TenancyCreateWithoutTenantInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutTenanciesInput
    payments?: RentPaymentCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUncheckedCreateWithoutTenantInput = {
    id?: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    payments?: RentPaymentUncheckedCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillUncheckedCreateNestedManyWithoutTenancyInput
  }

  export type TenancyCreateOrConnectWithoutTenantInput = {
    where: TenancyWhereUniqueInput
    create: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput>
  }

  export type TenancyCreateManyTenantInputEnvelope = {
    data: TenancyCreateManyTenantInput | TenancyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutAssignedToInput = {
    id?: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    tenant: UserCreateNestedOneWithoutRaisedRequestsInput
    room: RoomCreateNestedOneWithoutRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutAssignedToInput = {
    id?: string
    tenantId: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutAssignedToInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type MaintenanceRequestCreateManyAssignedToInputEnvelope = {
    data: MaintenanceRequestCreateManyAssignedToInput | MaintenanceRequestCreateManyAssignedToInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutTenantInput = {
    id?: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    room: RoomCreateNestedOneWithoutRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutTenantInput = {
    id?: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestCreateManyTenantInputEnvelope = {
    data: MaintenanceRequestCreateManyTenantInput | MaintenanceRequestCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type BookingRequestCreateWithoutProspectInput = {
    id?: string
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutBookingsInput
  }

  export type BookingRequestUncheckedCreateWithoutProspectInput = {
    id?: string
    roomId: string
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRequestCreateOrConnectWithoutProspectInput = {
    where: BookingRequestWhereUniqueInput
    create: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput>
  }

  export type BookingRequestCreateManyProspectInputEnvelope = {
    data: BookingRequestCreateManyProspectInput | BookingRequestCreateManyProspectInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenancyUpsertWithWhereUniqueWithoutTenantInput = {
    where: TenancyWhereUniqueInput
    update: XOR<TenancyUpdateWithoutTenantInput, TenancyUncheckedUpdateWithoutTenantInput>
    create: XOR<TenancyCreateWithoutTenantInput, TenancyUncheckedCreateWithoutTenantInput>
  }

  export type TenancyUpdateWithWhereUniqueWithoutTenantInput = {
    where: TenancyWhereUniqueInput
    data: XOR<TenancyUpdateWithoutTenantInput, TenancyUncheckedUpdateWithoutTenantInput>
  }

  export type TenancyUpdateManyWithWhereWithoutTenantInput = {
    where: TenancyScalarWhereInput
    data: XOR<TenancyUpdateManyMutationInput, TenancyUncheckedUpdateManyWithoutTenantInput>
  }

  export type TenancyScalarWhereInput = {
    AND?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
    OR?: TenancyScalarWhereInput[]
    NOT?: TenancyScalarWhereInput | TenancyScalarWhereInput[]
    id?: StringFilter<"Tenancy"> | string
    tenantId?: StringFilter<"Tenancy"> | string
    roomId?: StringFilter<"Tenancy"> | string
    startDate?: DateTimeFilter<"Tenancy"> | Date | string
    endDate?: DateTimeNullableFilter<"Tenancy"> | Date | string | null
    monthlyRent?: IntFilter<"Tenancy"> | number
    createdAt?: DateTimeFilter<"Tenancy"> | Date | string
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutAssignedToInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutAssignedToInput, MaintenanceRequestUncheckedUpdateWithoutAssignedToInput>
    create: XOR<MaintenanceRequestCreateWithoutAssignedToInput, MaintenanceRequestUncheckedCreateWithoutAssignedToInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutAssignedToInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutAssignedToInput, MaintenanceRequestUncheckedUpdateWithoutAssignedToInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutAssignedToInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutAssignedToInput>
  }

  export type MaintenanceRequestScalarWhereInput = {
    AND?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    OR?: MaintenanceRequestScalarWhereInput[]
    NOT?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    id?: StringFilter<"MaintenanceRequest"> | string
    tenantId?: StringFilter<"MaintenanceRequest"> | string
    roomId?: StringFilter<"MaintenanceRequest"> | string
    category?: StringFilter<"MaintenanceRequest"> | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    status?: EnumRequestStatusFilter<"MaintenanceRequest"> | $Enums.RequestStatus
    priority?: EnumPriorityFilter<"MaintenanceRequest"> | $Enums.Priority
    assignedToId?: StringNullableFilter<"MaintenanceRequest"> | string | null
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"MaintenanceRequest"> | Date | string | null
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
    create: XOR<MaintenanceRequestCreateWithoutTenantInput, MaintenanceRequestUncheckedCreateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutTenantInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutTenantInput, MaintenanceRequestUncheckedUpdateWithoutTenantInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutTenantInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutTenantInput>
  }

  export type BookingRequestUpsertWithWhereUniqueWithoutProspectInput = {
    where: BookingRequestWhereUniqueInput
    update: XOR<BookingRequestUpdateWithoutProspectInput, BookingRequestUncheckedUpdateWithoutProspectInput>
    create: XOR<BookingRequestCreateWithoutProspectInput, BookingRequestUncheckedCreateWithoutProspectInput>
  }

  export type BookingRequestUpdateWithWhereUniqueWithoutProspectInput = {
    where: BookingRequestWhereUniqueInput
    data: XOR<BookingRequestUpdateWithoutProspectInput, BookingRequestUncheckedUpdateWithoutProspectInput>
  }

  export type BookingRequestUpdateManyWithWhereWithoutProspectInput = {
    where: BookingRequestScalarWhereInput
    data: XOR<BookingRequestUpdateManyMutationInput, BookingRequestUncheckedUpdateManyWithoutProspectInput>
  }

  export type BookingRequestScalarWhereInput = {
    AND?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
    OR?: BookingRequestScalarWhereInput[]
    NOT?: BookingRequestScalarWhereInput | BookingRequestScalarWhereInput[]
    id?: StringFilter<"BookingRequest"> | string
    roomId?: StringFilter<"BookingRequest"> | string
    prospectId?: StringNullableFilter<"BookingRequest"> | string | null
    name?: StringFilter<"BookingRequest"> | string
    email?: StringFilter<"BookingRequest"> | string
    phone?: StringFilter<"BookingRequest"> | string
    preferredMoveInDate?: DateTimeNullableFilter<"BookingRequest"> | Date | string | null
    message?: StringNullableFilter<"BookingRequest"> | string | null
    status?: EnumBookingStatusFilter<"BookingRequest"> | $Enums.BookingStatus
    createdAt?: DateTimeFilter<"BookingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"BookingRequest"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    channel?: EnumNotificationChannelFilter<"Notification"> | $Enums.NotificationChannel
    subject?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    status?: EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus
    sentAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    readAt?: DateTimeNullableFilter<"Notification"> | Date | string | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringNullableFilter<"AuditLog"> | string | null
    action?: StringFilter<"AuditLog"> | string
    entityType?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    payload?: StringNullableFilter<"AuditLog"> | string | null
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type TenancyCreateWithoutRoomInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    tenant: UserCreateNestedOneWithoutTenanciesInput
    payments?: RentPaymentCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUncheckedCreateWithoutRoomInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    payments?: RentPaymentUncheckedCreateNestedManyWithoutTenancyInput
    utilities?: UtilityBillUncheckedCreateNestedManyWithoutTenancyInput
  }

  export type TenancyCreateOrConnectWithoutRoomInput = {
    where: TenancyWhereUniqueInput
    create: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput>
  }

  export type TenancyCreateManyRoomInputEnvelope = {
    data: TenancyCreateManyRoomInput | TenancyCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type MaintenanceRequestCreateWithoutRoomInput = {
    id?: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
    tenant: UserCreateNestedOneWithoutRaisedRequestsInput
    assignedTo?: UserCreateNestedOneWithoutAssignedRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateWithoutRoomInput = {
    id?: string
    tenantId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateOrConnectWithoutRoomInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput>
  }

  export type MaintenanceRequestCreateManyRoomInputEnvelope = {
    data: MaintenanceRequestCreateManyRoomInput | MaintenanceRequestCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BookingRequestCreateWithoutRoomInput = {
    id?: string
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    prospect?: UserCreateNestedOneWithoutBookingsInput
  }

  export type BookingRequestUncheckedCreateWithoutRoomInput = {
    id?: string
    prospectId?: string | null
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingRequestCreateOrConnectWithoutRoomInput = {
    where: BookingRequestWhereUniqueInput
    create: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput>
  }

  export type BookingRequestCreateManyRoomInputEnvelope = {
    data: BookingRequestCreateManyRoomInput | BookingRequestCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type TenancyUpsertWithWhereUniqueWithoutRoomInput = {
    where: TenancyWhereUniqueInput
    update: XOR<TenancyUpdateWithoutRoomInput, TenancyUncheckedUpdateWithoutRoomInput>
    create: XOR<TenancyCreateWithoutRoomInput, TenancyUncheckedCreateWithoutRoomInput>
  }

  export type TenancyUpdateWithWhereUniqueWithoutRoomInput = {
    where: TenancyWhereUniqueInput
    data: XOR<TenancyUpdateWithoutRoomInput, TenancyUncheckedUpdateWithoutRoomInput>
  }

  export type TenancyUpdateManyWithWhereWithoutRoomInput = {
    where: TenancyScalarWhereInput
    data: XOR<TenancyUpdateManyMutationInput, TenancyUncheckedUpdateManyWithoutRoomInput>
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutRoomInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutRoomInput, MaintenanceRequestUncheckedUpdateWithoutRoomInput>
    create: XOR<MaintenanceRequestCreateWithoutRoomInput, MaintenanceRequestUncheckedCreateWithoutRoomInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutRoomInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutRoomInput, MaintenanceRequestUncheckedUpdateWithoutRoomInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutRoomInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutRoomInput>
  }

  export type BookingRequestUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingRequestWhereUniqueInput
    update: XOR<BookingRequestUpdateWithoutRoomInput, BookingRequestUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingRequestCreateWithoutRoomInput, BookingRequestUncheckedCreateWithoutRoomInput>
  }

  export type BookingRequestUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingRequestWhereUniqueInput
    data: XOR<BookingRequestUpdateWithoutRoomInput, BookingRequestUncheckedUpdateWithoutRoomInput>
  }

  export type BookingRequestUpdateManyWithWhereWithoutRoomInput = {
    where: BookingRequestScalarWhereInput
    data: XOR<BookingRequestUpdateManyMutationInput, BookingRequestUncheckedUpdateManyWithoutRoomInput>
  }

  export type UserCreateWithoutTenanciesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenanciesInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenanciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenanciesInput, UserUncheckedCreateWithoutTenanciesInput>
  }

  export type RoomCreateWithoutTenanciesInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: MaintenanceRequestCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutTenanciesInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    requests?: MaintenanceRequestUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutTenanciesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutTenanciesInput, RoomUncheckedCreateWithoutTenanciesInput>
  }

  export type RentPaymentCreateWithoutTenancyInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentUncheckedCreateWithoutTenancyInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentCreateOrConnectWithoutTenancyInput = {
    where: RentPaymentWhereUniqueInput
    create: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput>
  }

  export type RentPaymentCreateManyTenancyInputEnvelope = {
    data: RentPaymentCreateManyTenancyInput | RentPaymentCreateManyTenancyInput[]
    skipDuplicates?: boolean
  }

  export type UtilityBillCreateWithoutTenancyInput = {
    id?: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type UtilityBillUncheckedCreateWithoutTenancyInput = {
    id?: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type UtilityBillCreateOrConnectWithoutTenancyInput = {
    where: UtilityBillWhereUniqueInput
    create: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput>
  }

  export type UtilityBillCreateManyTenancyInputEnvelope = {
    data: UtilityBillCreateManyTenancyInput | UtilityBillCreateManyTenancyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTenanciesInput = {
    update: XOR<UserUpdateWithoutTenanciesInput, UserUncheckedUpdateWithoutTenanciesInput>
    create: XOR<UserCreateWithoutTenanciesInput, UserUncheckedCreateWithoutTenanciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenanciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenanciesInput, UserUncheckedUpdateWithoutTenanciesInput>
  }

  export type UserUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutTenanciesInput = {
    update: XOR<RoomUpdateWithoutTenanciesInput, RoomUncheckedUpdateWithoutTenanciesInput>
    create: XOR<RoomCreateWithoutTenanciesInput, RoomUncheckedCreateWithoutTenanciesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutTenanciesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutTenanciesInput, RoomUncheckedUpdateWithoutTenanciesInput>
  }

  export type RoomUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: MaintenanceRequestUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutTenanciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: MaintenanceRequestUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RentPaymentUpsertWithWhereUniqueWithoutTenancyInput = {
    where: RentPaymentWhereUniqueInput
    update: XOR<RentPaymentUpdateWithoutTenancyInput, RentPaymentUncheckedUpdateWithoutTenancyInput>
    create: XOR<RentPaymentCreateWithoutTenancyInput, RentPaymentUncheckedCreateWithoutTenancyInput>
  }

  export type RentPaymentUpdateWithWhereUniqueWithoutTenancyInput = {
    where: RentPaymentWhereUniqueInput
    data: XOR<RentPaymentUpdateWithoutTenancyInput, RentPaymentUncheckedUpdateWithoutTenancyInput>
  }

  export type RentPaymentUpdateManyWithWhereWithoutTenancyInput = {
    where: RentPaymentScalarWhereInput
    data: XOR<RentPaymentUpdateManyMutationInput, RentPaymentUncheckedUpdateManyWithoutTenancyInput>
  }

  export type RentPaymentScalarWhereInput = {
    AND?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
    OR?: RentPaymentScalarWhereInput[]
    NOT?: RentPaymentScalarWhereInput | RentPaymentScalarWhereInput[]
    id?: StringFilter<"RentPayment"> | string
    tenancyId?: StringFilter<"RentPayment"> | string
    amount?: IntFilter<"RentPayment"> | number
    method?: EnumPaymentMethodFilter<"RentPayment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"RentPayment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    reference?: StringNullableFilter<"RentPayment"> | string | null
    receiptUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackReference?: StringNullableFilter<"RentPayment"> | string | null
    paystackAuthorizationUrl?: StringNullableFilter<"RentPayment"> | string | null
    paystackAccessCode?: StringNullableFilter<"RentPayment"> | string | null
    paystackTransactionId?: StringNullableFilter<"RentPayment"> | string | null
    paystackPaidAt?: DateTimeNullableFilter<"RentPayment"> | Date | string | null
    paystackChannel?: StringNullableFilter<"RentPayment"> | string | null
    paystackCardType?: StringNullableFilter<"RentPayment"> | string | null
    paystackMobileMoneyNumber?: StringNullableFilter<"RentPayment"> | string | null
    paystackBank?: StringNullableFilter<"RentPayment"> | string | null
    createdAt?: DateTimeFilter<"RentPayment"> | Date | string
  }

  export type UtilityBillUpsertWithWhereUniqueWithoutTenancyInput = {
    where: UtilityBillWhereUniqueInput
    update: XOR<UtilityBillUpdateWithoutTenancyInput, UtilityBillUncheckedUpdateWithoutTenancyInput>
    create: XOR<UtilityBillCreateWithoutTenancyInput, UtilityBillUncheckedCreateWithoutTenancyInput>
  }

  export type UtilityBillUpdateWithWhereUniqueWithoutTenancyInput = {
    where: UtilityBillWhereUniqueInput
    data: XOR<UtilityBillUpdateWithoutTenancyInput, UtilityBillUncheckedUpdateWithoutTenancyInput>
  }

  export type UtilityBillUpdateManyWithWhereWithoutTenancyInput = {
    where: UtilityBillScalarWhereInput
    data: XOR<UtilityBillUpdateManyMutationInput, UtilityBillUncheckedUpdateManyWithoutTenancyInput>
  }

  export type UtilityBillScalarWhereInput = {
    AND?: UtilityBillScalarWhereInput | UtilityBillScalarWhereInput[]
    OR?: UtilityBillScalarWhereInput[]
    NOT?: UtilityBillScalarWhereInput | UtilityBillScalarWhereInput[]
    id?: StringFilter<"UtilityBill"> | string
    tenancyId?: StringFilter<"UtilityBill"> | string
    type?: EnumUtilityTypeFilter<"UtilityBill"> | $Enums.UtilityType
    amount?: IntFilter<"UtilityBill"> | number
    dueDate?: DateTimeFilter<"UtilityBill"> | Date | string
    status?: EnumBillStatusFilter<"UtilityBill"> | $Enums.BillStatus
    paidAt?: DateTimeNullableFilter<"UtilityBill"> | Date | string | null
    receiptUrl?: StringNullableFilter<"UtilityBill"> | string | null
    createdAt?: DateTimeFilter<"UtilityBill"> | Date | string
  }

  export type TenancyCreateWithoutPaymentsInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    tenant: UserCreateNestedOneWithoutTenanciesInput
    room: RoomCreateNestedOneWithoutTenanciesInput
    utilities?: UtilityBillCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUncheckedCreateWithoutPaymentsInput = {
    id?: string
    tenantId: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    utilities?: UtilityBillUncheckedCreateNestedManyWithoutTenancyInput
  }

  export type TenancyCreateOrConnectWithoutPaymentsInput = {
    where: TenancyWhereUniqueInput
    create: XOR<TenancyCreateWithoutPaymentsInput, TenancyUncheckedCreateWithoutPaymentsInput>
  }

  export type TenancyUpsertWithoutPaymentsInput = {
    update: XOR<TenancyUpdateWithoutPaymentsInput, TenancyUncheckedUpdateWithoutPaymentsInput>
    create: XOR<TenancyCreateWithoutPaymentsInput, TenancyUncheckedCreateWithoutPaymentsInput>
    where?: TenancyWhereInput
  }

  export type TenancyUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: TenancyWhereInput
    data: XOR<TenancyUpdateWithoutPaymentsInput, TenancyUncheckedUpdateWithoutPaymentsInput>
  }

  export type TenancyUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UserUpdateOneRequiredWithoutTenanciesNestedInput
    room?: RoomUpdateOneRequiredWithoutTenanciesNestedInput
    utilities?: UtilityBillUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    utilities?: UtilityBillUncheckedUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyCreateWithoutUtilitiesInput = {
    id?: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    tenant: UserCreateNestedOneWithoutTenanciesInput
    room: RoomCreateNestedOneWithoutTenanciesInput
    payments?: RentPaymentCreateNestedManyWithoutTenancyInput
  }

  export type TenancyUncheckedCreateWithoutUtilitiesInput = {
    id?: string
    tenantId: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
    payments?: RentPaymentUncheckedCreateNestedManyWithoutTenancyInput
  }

  export type TenancyCreateOrConnectWithoutUtilitiesInput = {
    where: TenancyWhereUniqueInput
    create: XOR<TenancyCreateWithoutUtilitiesInput, TenancyUncheckedCreateWithoutUtilitiesInput>
  }

  export type TenancyUpsertWithoutUtilitiesInput = {
    update: XOR<TenancyUpdateWithoutUtilitiesInput, TenancyUncheckedUpdateWithoutUtilitiesInput>
    create: XOR<TenancyCreateWithoutUtilitiesInput, TenancyUncheckedCreateWithoutUtilitiesInput>
    where?: TenancyWhereInput
  }

  export type TenancyUpdateToOneWithWhereWithoutUtilitiesInput = {
    where?: TenancyWhereInput
    data: XOR<TenancyUpdateWithoutUtilitiesInput, TenancyUncheckedUpdateWithoutUtilitiesInput>
  }

  export type TenancyUpdateWithoutUtilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UserUpdateOneRequiredWithoutTenanciesNestedInput
    room?: RoomUpdateOneRequiredWithoutTenanciesNestedInput
    payments?: RentPaymentUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateWithoutUtilitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: RentPaymentUncheckedUpdateManyWithoutTenancyNestedInput
  }

  export type UserCreateWithoutRaisedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRaisedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRaisedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRaisedRequestsInput, UserUncheckedCreateWithoutRaisedRequestsInput>
  }

  export type RoomCreateWithoutRequestsInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutRequestsInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutRequestsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutRequestsInput, RoomUncheckedCreateWithoutRequestsInput>
  }

  export type UserCreateWithoutAssignedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssignedRequestsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssignedRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedRequestsInput, UserUncheckedCreateWithoutAssignedRequestsInput>
  }

  export type UserUpsertWithoutRaisedRequestsInput = {
    update: XOR<UserUpdateWithoutRaisedRequestsInput, UserUncheckedUpdateWithoutRaisedRequestsInput>
    create: XOR<UserCreateWithoutRaisedRequestsInput, UserUncheckedCreateWithoutRaisedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRaisedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRaisedRequestsInput, UserUncheckedUpdateWithoutRaisedRequestsInput>
  }

  export type UserUpdateWithoutRaisedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRaisedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomUpsertWithoutRequestsInput = {
    update: XOR<RoomUpdateWithoutRequestsInput, RoomUncheckedUpdateWithoutRequestsInput>
    create: XOR<RoomCreateWithoutRequestsInput, RoomUncheckedCreateWithoutRequestsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutRequestsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutRequestsInput, RoomUncheckedUpdateWithoutRequestsInput>
  }

  export type RoomUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutAssignedRequestsInput = {
    update: XOR<UserUpdateWithoutAssignedRequestsInput, UserUncheckedUpdateWithoutAssignedRequestsInput>
    create: XOR<UserCreateWithoutAssignedRequestsInput, UserUncheckedCreateWithoutAssignedRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedRequestsInput, UserUncheckedUpdateWithoutAssignedRequestsInput>
  }

  export type UserUpdateWithoutAssignedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoomCreateWithoutBookingsInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutRoomInput
    requests?: MaintenanceRequestCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: string
    number: string
    type: string
    size: string
    monthlyRent: number
    status?: $Enums.RoomStatus
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutRoomInput
    requests?: MaintenanceRequestUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutRoomNestedInput
    requests?: MaintenanceRequestUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    monthlyRent?: IntFieldUpdateOperationsInput | number
    status?: EnumRoomStatusFieldUpdateOperationsInput | $Enums.RoomStatus
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutRoomNestedInput
    requests?: MaintenanceRequestUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestCreateNestedManyWithoutProspectInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    passwordHash: string
    name: string
    phone?: string | null
    role?: $Enums.Role
    profileImageUrl?: string | null
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tenancies?: TenancyUncheckedCreateNestedManyWithoutTenantInput
    assignedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutAssignedToInput
    raisedRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutTenantInput
    bookings?: BookingRequestUncheckedCreateNestedManyWithoutProspectInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profileImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenancies?: TenancyUncheckedUpdateManyWithoutTenantNestedInput
    assignedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutAssignedToNestedInput
    raisedRequests?: MaintenanceRequestUncheckedUpdateManyWithoutTenantNestedInput
    bookings?: BookingRequestUncheckedUpdateManyWithoutProspectNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TenancyCreateManyTenantInput = {
    id?: string
    roomId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
  }

  export type MaintenanceRequestCreateManyAssignedToInput = {
    id?: string
    tenantId: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type MaintenanceRequestCreateManyTenantInput = {
    id?: string
    roomId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type BookingRequestCreateManyProspectInput = {
    id?: string
    roomId: string
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    channel: $Enums.NotificationChannel
    subject: string
    body: string
    status?: $Enums.NotificationStatus
    sentAt?: Date | string | null
    readAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entityType: string
    entityId?: string | null
    payload?: string | null
    createdAt?: Date | string
  }

  export type TenancyUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutTenanciesNestedInput
    payments?: RentPaymentUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: RentPaymentUncheckedUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUncheckedUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: UserUpdateOneRequiredWithoutRaisedRequestsNestedInput
    room?: RoomUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    room?: RoomUpdateOneRequiredWithoutRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutTenantInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingRequestUpdateWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingRequestUncheckedUpdateWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRequestUncheckedUpdateManyWithoutProspectInput = {
    id?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    channel?: EnumNotificationChannelFieldUpdateOperationsInput | $Enums.NotificationChannel
    subject?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    status?: EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus
    sentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    readAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    payload?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenancyCreateManyRoomInput = {
    id?: string
    tenantId: string
    startDate: Date | string
    endDate?: Date | string | null
    monthlyRent: number
    createdAt?: Date | string
  }

  export type MaintenanceRequestCreateManyRoomInput = {
    id?: string
    tenantId: string
    category: string
    title: string
    description: string
    status?: $Enums.RequestStatus
    priority?: $Enums.Priority
    assignedToId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type BookingRequestCreateManyRoomInput = {
    id?: string
    prospectId?: string | null
    name: string
    email: string
    phone: string
    preferredMoveInDate?: Date | string | null
    message?: string | null
    status?: $Enums.BookingStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenancyUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: UserUpdateOneRequiredWithoutTenanciesNestedInput
    payments?: RentPaymentUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: RentPaymentUncheckedUpdateManyWithoutTenancyNestedInput
    utilities?: UtilityBillUncheckedUpdateManyWithoutTenancyNestedInput
  }

  export type TenancyUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    monthlyRent?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaintenanceRequestUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tenant?: UserUpdateOneRequiredWithoutRaisedRequestsNestedInput
    assignedTo?: UserUpdateOneWithoutAssignedRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    tenantId?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedToId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingRequestUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prospect?: UserUpdateOneWithoutBookingsNestedInput
  }

  export type BookingRequestUncheckedUpdateWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    prospectId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingRequestUncheckedUpdateManyWithoutRoomInput = {
    id?: StringFieldUpdateOperationsInput | string
    prospectId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    preferredMoveInDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentCreateManyTenancyInput = {
    id?: string
    amount: number
    method: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    reference?: string | null
    receiptUrl?: string | null
    paystackReference?: string | null
    paystackAuthorizationUrl?: string | null
    paystackAccessCode?: string | null
    paystackTransactionId?: string | null
    paystackPaidAt?: Date | string | null
    paystackChannel?: string | null
    paystackCardType?: string | null
    paystackMobileMoneyNumber?: string | null
    paystackBank?: string | null
    createdAt?: Date | string
  }

  export type UtilityBillCreateManyTenancyInput = {
    id?: string
    type?: $Enums.UtilityType
    amount: number
    dueDate: Date | string
    status?: $Enums.BillStatus
    paidAt?: Date | string | null
    receiptUrl?: string | null
    createdAt?: Date | string
  }

  export type RentPaymentUpdateWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentUncheckedUpdateWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentPaymentUncheckedUpdateManyWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackReference?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthorizationUrl?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAccessCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    paystackChannel?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCardType?: NullableStringFieldUpdateOperationsInput | string | null
    paystackMobileMoneyNumber?: NullableStringFieldUpdateOperationsInput | string | null
    paystackBank?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillUpdateWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillUncheckedUpdateWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilityBillUncheckedUpdateManyWithoutTenancyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumUtilityTypeFieldUpdateOperationsInput | $Enums.UtilityType
    amount?: IntFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBillStatusFieldUpdateOperationsInput | $Enums.BillStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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