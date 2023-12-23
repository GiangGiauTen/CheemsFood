
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type FoodPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Food"
  objects: {
    categories: FoodCategoryPayload<ExtArgs>[]
    recipes: RecipeFoodListPayload<ExtArgs>[]
    storage: StorageFoodPayload<ExtArgs>[]
    toBuyLists: ToBuyListDetailPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    foodId: number
    name: string
    imageUrl: string | null
    description: string | null
  }, ExtArgs["result"]["food"]>
  composites: {}
}

/**
 * Model Food
 * 
 */
export type Food = runtime.Types.DefaultSelection<FoodPayload>
export type CategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Category"
  objects: {
    foods: FoodCategoryPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    categoryId: number
    categoryName: string
    categoryType: string
  }, ExtArgs["result"]["category"]>
  composites: {}
}

/**
 * Model Category
 * 
 */
export type Category = runtime.Types.DefaultSelection<CategoryPayload>
export type RecipePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Recipe"
  objects: {
    foods: RecipeFoodListPayload<ExtArgs>[]
    users: FavoriteRecipePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    recipeId: number
    name: string
    imgUrl: string | null
    description: string
  }, ExtArgs["result"]["recipe"]>
  composites: {}
}

/**
 * Model Recipe
 * 
 */
export type Recipe = runtime.Types.DefaultSelection<RecipePayload>
export type StoragePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Storage"
  objects: {
    user: UserPayload<ExtArgs>
    foods: StorageFoodPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    storageId: number
    userId: number
  }, ExtArgs["result"]["storage"]>
  composites: {}
}

/**
 * Model Storage
 * 
 */
export type Storage = runtime.Types.DefaultSelection<StoragePayload>
export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    favorites: FavoriteRecipePayload<ExtArgs>[]
    groups: GroupMemberPayload<ExtArgs>[]
    toBuyLists: ToBuyListPayload<ExtArgs>[]
    storage: StoragePayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    userId: number
    username: string
    name: string
    password: string
    role: string
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type GGroupPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "GGroup"
  objects: {
    users: GroupMemberPayload<ExtArgs>[]
    toBuyLists: ToBuyListPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    groupId: number
    name: string
  }, ExtArgs["result"]["gGroup"]>
  composites: {}
}

/**
 * Model GGroup
 * 
 */
export type GGroup = runtime.Types.DefaultSelection<GGroupPayload>
export type RecipeFoodListPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "RecipeFoodList"
  objects: {
    recipe: RecipePayload<ExtArgs>
    food: FoodPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    recipeId: number
    foodId: number
  }, ExtArgs["result"]["recipeFoodList"]>
  composites: {}
}

/**
 * Model RecipeFoodList
 * 
 */
export type RecipeFoodList = runtime.Types.DefaultSelection<RecipeFoodListPayload>
export type FoodCategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "FoodCategory"
  objects: {
    food: FoodPayload<ExtArgs>
    category: CategoryPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    foodId: number
    categoryId: number
  }, ExtArgs["result"]["foodCategory"]>
  composites: {}
}

/**
 * Model FoodCategory
 * 
 */
export type FoodCategory = runtime.Types.DefaultSelection<FoodCategoryPayload>
export type ToBuyListPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ToBuyList"
  objects: {
    toBuyListDetails: ToBuyListDetailPayload<ExtArgs>[]
    owner: UserPayload<ExtArgs> | null
    groupOwner: GGroupPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    toBuyListId: number
    date: Date
    ownerId: number | null
    groupOwnerId: number | null
  }, ExtArgs["result"]["toBuyList"]>
  composites: {}
}

/**
 * Model ToBuyList
 * 
 */
export type ToBuyList = runtime.Types.DefaultSelection<ToBuyListPayload>
export type FavoriteRecipePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "FavoriteRecipe"
  objects: {
    user: UserPayload<ExtArgs>
    recipe: RecipePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    userId: number
    recipeId: number
  }, ExtArgs["result"]["favoriteRecipe"]>
  composites: {}
}

/**
 * Model FavoriteRecipe
 * 
 */
export type FavoriteRecipe = runtime.Types.DefaultSelection<FavoriteRecipePayload>
export type GroupMemberPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "GroupMember"
  objects: {
    group: GGroupPayload<ExtArgs>
    user: UserPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    groupId: number
    userId: number
    isGroupAdmin: boolean
  }, ExtArgs["result"]["groupMember"]>
  composites: {}
}

/**
 * Model GroupMember
 * 
 */
export type GroupMember = runtime.Types.DefaultSelection<GroupMemberPayload>
export type StorageFoodPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "StorageFood"
  objects: {
    food: FoodPayload<ExtArgs>
    storage: StoragePayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    storageFoodId: number
    storageDate: Date
    outdate: Date
    quantity: number
    foodId: number
    storageId: number
  }, ExtArgs["result"]["storageFood"]>
  composites: {}
}

/**
 * Model StorageFood
 * 
 */
export type StorageFood = runtime.Types.DefaultSelection<StorageFoodPayload>
export type ToBuyListDetailPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ToBuyListDetail"
  objects: {
    toBuyList: ToBuyListPayload<ExtArgs>
    food: FoodPayload<ExtArgs>
  }
  scalars: $Extensions.GetResult<{
    toBuyListId: number
    foodId: number
    quantity: number
  }, ExtArgs["result"]["toBuyListDetail"]>
  composites: {}
}

/**
 * Model ToBuyListDetail
 * 
 */
export type ToBuyListDetail = runtime.Types.DefaultSelection<ToBuyListDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Foods
 * const foods = await prisma.food.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Foods
   * const foods = await prisma.food.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.food`: Exposes CRUD operations for the **Food** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Foods
    * const foods = await prisma.food.findMany()
    * ```
    */
  get food(): Prisma.FoodDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.recipe`: Exposes CRUD operations for the **Recipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recipes
    * const recipes = await prisma.recipe.findMany()
    * ```
    */
  get recipe(): Prisma.RecipeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.storage`: Exposes CRUD operations for the **Storage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Storages
    * const storages = await prisma.storage.findMany()
    * ```
    */
  get storage(): Prisma.StorageDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.gGroup`: Exposes CRUD operations for the **GGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GGroups
    * const gGroups = await prisma.gGroup.findMany()
    * ```
    */
  get gGroup(): Prisma.GGroupDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.recipeFoodList`: Exposes CRUD operations for the **RecipeFoodList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecipeFoodLists
    * const recipeFoodLists = await prisma.recipeFoodList.findMany()
    * ```
    */
  get recipeFoodList(): Prisma.RecipeFoodListDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.foodCategory`: Exposes CRUD operations for the **FoodCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FoodCategories
    * const foodCategories = await prisma.foodCategory.findMany()
    * ```
    */
  get foodCategory(): Prisma.FoodCategoryDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.toBuyList`: Exposes CRUD operations for the **ToBuyList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToBuyLists
    * const toBuyLists = await prisma.toBuyList.findMany()
    * ```
    */
  get toBuyList(): Prisma.ToBuyListDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.favoriteRecipe`: Exposes CRUD operations for the **FavoriteRecipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FavoriteRecipes
    * const favoriteRecipes = await prisma.favoriteRecipe.findMany()
    * ```
    */
  get favoriteRecipe(): Prisma.FavoriteRecipeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.groupMember`: Exposes CRUD operations for the **GroupMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMember.findMany()
    * ```
    */
  get groupMember(): Prisma.GroupMemberDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.storageFood`: Exposes CRUD operations for the **StorageFood** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StorageFoods
    * const storageFoods = await prisma.storageFood.findMany()
    * ```
    */
  get storageFood(): Prisma.StorageFoodDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.toBuyListDetail`: Exposes CRUD operations for the **ToBuyListDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToBuyListDetails
    * const toBuyListDetails = await prisma.toBuyListDetail.findMany()
    * ```
    */
  get toBuyListDetail(): Prisma.ToBuyListDetailDelegate<GlobalReject, ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
   * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Food: 'Food',
    Category: 'Category',
    Recipe: 'Recipe',
    Storage: 'Storage',
    User: 'User',
    GGroup: 'GGroup',
    RecipeFoodList: 'RecipeFoodList',
    FoodCategory: 'FoodCategory',
    ToBuyList: 'ToBuyList',
    FavoriteRecipe: 'FavoriteRecipe',
    GroupMember: 'GroupMember',
    StorageFood: 'StorageFood',
    ToBuyListDetail: 'ToBuyListDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'food' | 'category' | 'recipe' | 'storage' | 'user' | 'gGroup' | 'recipeFoodList' | 'foodCategory' | 'toBuyList' | 'favoriteRecipe' | 'groupMember' | 'storageFood' | 'toBuyListDetail'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Food: {
        payload: FoodPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FoodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          findFirst: {
            args: Prisma.FoodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          findMany: {
            args: Prisma.FoodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>[]
          }
          create: {
            args: Prisma.FoodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          createMany: {
            args: Prisma.FoodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          update: {
            args: Prisma.FoodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          deleteMany: {
            args: Prisma.FoodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodPayload>
          }
          aggregate: {
            args: Prisma.FoodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFood>
          }
          groupBy: {
            args: Prisma.FoodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCountArgs<ExtArgs>,
            result: $Utils.Optional<FoodCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: CategoryPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Recipe: {
        payload: RecipePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.RecipeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          findFirst: {
            args: Prisma.RecipeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          findMany: {
            args: Prisma.RecipeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>[]
          }
          create: {
            args: Prisma.RecipeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          createMany: {
            args: Prisma.RecipeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          update: {
            args: Prisma.RecipeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          deleteMany: {
            args: Prisma.RecipeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipePayload>
          }
          aggregate: {
            args: Prisma.RecipeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipe>
          }
          groupBy: {
            args: Prisma.RecipeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipeCountAggregateOutputType> | number
          }
        }
      }
      Storage: {
        payload: StoragePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.StorageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          findFirst: {
            args: Prisma.StorageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          findMany: {
            args: Prisma.StorageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>[]
          }
          create: {
            args: Prisma.StorageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          createMany: {
            args: Prisma.StorageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StorageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          update: {
            args: Prisma.StorageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          deleteMany: {
            args: Prisma.StorageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StorageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StorageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StoragePayload>
          }
          aggregate: {
            args: Prisma.StorageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStorage>
          }
          groupBy: {
            args: Prisma.StorageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StorageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageCountArgs<ExtArgs>,
            result: $Utils.Optional<StorageCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      GGroup: {
        payload: GGroupPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          findFirst: {
            args: Prisma.GGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          findMany: {
            args: Prisma.GGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>[]
          }
          create: {
            args: Prisma.GGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          createMany: {
            args: Prisma.GGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          update: {
            args: Prisma.GGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          deleteMany: {
            args: Prisma.GGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GGroupPayload>
          }
          aggregate: {
            args: Prisma.GGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGGroup>
          }
          groupBy: {
            args: Prisma.GGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GGroupCountAggregateOutputType> | number
          }
        }
      }
      RecipeFoodList: {
        payload: RecipeFoodListPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.RecipeFoodListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecipeFoodListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          findFirst: {
            args: Prisma.RecipeFoodListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecipeFoodListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          findMany: {
            args: Prisma.RecipeFoodListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>[]
          }
          create: {
            args: Prisma.RecipeFoodListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          createMany: {
            args: Prisma.RecipeFoodListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecipeFoodListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          update: {
            args: Prisma.RecipeFoodListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          deleteMany: {
            args: Prisma.RecipeFoodListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecipeFoodListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecipeFoodListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<RecipeFoodListPayload>
          }
          aggregate: {
            args: Prisma.RecipeFoodListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecipeFoodList>
          }
          groupBy: {
            args: Prisma.RecipeFoodListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecipeFoodListGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecipeFoodListCountArgs<ExtArgs>,
            result: $Utils.Optional<RecipeFoodListCountAggregateOutputType> | number
          }
        }
      }
      FoodCategory: {
        payload: FoodCategoryPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FoodCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FoodCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          findFirst: {
            args: Prisma.FoodCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FoodCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          findMany: {
            args: Prisma.FoodCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>[]
          }
          create: {
            args: Prisma.FoodCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          createMany: {
            args: Prisma.FoodCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FoodCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          update: {
            args: Prisma.FoodCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          deleteMany: {
            args: Prisma.FoodCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FoodCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FoodCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FoodCategoryPayload>
          }
          aggregate: {
            args: Prisma.FoodCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFoodCategory>
          }
          groupBy: {
            args: Prisma.FoodCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FoodCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.FoodCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<FoodCategoryCountAggregateOutputType> | number
          }
        }
      }
      ToBuyList: {
        payload: ToBuyListPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ToBuyListFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToBuyListFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          findFirst: {
            args: Prisma.ToBuyListFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToBuyListFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          findMany: {
            args: Prisma.ToBuyListFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>[]
          }
          create: {
            args: Prisma.ToBuyListCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          createMany: {
            args: Prisma.ToBuyListCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ToBuyListDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          update: {
            args: Prisma.ToBuyListUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          deleteMany: {
            args: Prisma.ToBuyListDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ToBuyListUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ToBuyListUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListPayload>
          }
          aggregate: {
            args: Prisma.ToBuyListAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToBuyList>
          }
          groupBy: {
            args: Prisma.ToBuyListGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ToBuyListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToBuyListCountArgs<ExtArgs>,
            result: $Utils.Optional<ToBuyListCountAggregateOutputType> | number
          }
        }
      }
      FavoriteRecipe: {
        payload: FavoriteRecipePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FavoriteRecipeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          findFirst: {
            args: Prisma.FavoriteRecipeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteRecipeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          findMany: {
            args: Prisma.FavoriteRecipeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>[]
          }
          create: {
            args: Prisma.FavoriteRecipeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          createMany: {
            args: Prisma.FavoriteRecipeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FavoriteRecipeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          update: {
            args: Prisma.FavoriteRecipeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteRecipeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteRecipeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FavoriteRecipeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FavoriteRecipePayload>
          }
          aggregate: {
            args: Prisma.FavoriteRecipeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFavoriteRecipe>
          }
          groupBy: {
            args: Prisma.FavoriteRecipeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteRecipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteRecipeCountArgs<ExtArgs>,
            result: $Utils.Optional<FavoriteRecipeCountAggregateOutputType> | number
          }
        }
      }
      GroupMember: {
        payload: GroupMemberPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.GroupMemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          findFirst: {
            args: Prisma.GroupMemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          findMany: {
            args: Prisma.GroupMemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>[]
          }
          create: {
            args: Prisma.GroupMemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          createMany: {
            args: Prisma.GroupMemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupMemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          update: {
            args: Prisma.GroupMemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          deleteMany: {
            args: Prisma.GroupMemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupMemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<GroupMemberPayload>
          }
          aggregate: {
            args: Prisma.GroupMemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupMember>
          }
          groupBy: {
            args: Prisma.GroupMemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMemberCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupMemberCountAggregateOutputType> | number
          }
        }
      }
      StorageFood: {
        payload: StorageFoodPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.StorageFoodFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StorageFoodFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          findFirst: {
            args: Prisma.StorageFoodFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StorageFoodFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          findMany: {
            args: Prisma.StorageFoodFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>[]
          }
          create: {
            args: Prisma.StorageFoodCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          createMany: {
            args: Prisma.StorageFoodCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StorageFoodDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          update: {
            args: Prisma.StorageFoodUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          deleteMany: {
            args: Prisma.StorageFoodDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StorageFoodUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StorageFoodUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<StorageFoodPayload>
          }
          aggregate: {
            args: Prisma.StorageFoodAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStorageFood>
          }
          groupBy: {
            args: Prisma.StorageFoodGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StorageFoodGroupByOutputType>[]
          }
          count: {
            args: Prisma.StorageFoodCountArgs<ExtArgs>,
            result: $Utils.Optional<StorageFoodCountAggregateOutputType> | number
          }
        }
      }
      ToBuyListDetail: {
        payload: ToBuyListDetailPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ToBuyListDetailFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToBuyListDetailFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          findFirst: {
            args: Prisma.ToBuyListDetailFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToBuyListDetailFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          findMany: {
            args: Prisma.ToBuyListDetailFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>[]
          }
          create: {
            args: Prisma.ToBuyListDetailCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          createMany: {
            args: Prisma.ToBuyListDetailCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ToBuyListDetailDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          update: {
            args: Prisma.ToBuyListDetailUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          deleteMany: {
            args: Prisma.ToBuyListDetailDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ToBuyListDetailUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ToBuyListDetailUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ToBuyListDetailPayload>
          }
          aggregate: {
            args: Prisma.ToBuyListDetailAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateToBuyListDetail>
          }
          groupBy: {
            args: Prisma.ToBuyListDetailGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ToBuyListDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToBuyListDetailCountArgs<ExtArgs>,
            result: $Utils.Optional<ToBuyListDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
   * Count Type FoodCountOutputType
   */


  export type FoodCountOutputType = {
    categories: number
    recipes: number
    storage: number
    toBuyLists: number
  }

  export type FoodCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | FoodCountOutputTypeCountCategoriesArgs
    recipes?: boolean | FoodCountOutputTypeCountRecipesArgs
    storage?: boolean | FoodCountOutputTypeCountStorageArgs
    toBuyLists?: boolean | FoodCountOutputTypeCountToBuyListsArgs
  }

  // Custom InputTypes

  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCountOutputType
     */
    select?: FoodCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountRecipesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecipeFoodListWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountStorageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StorageFoodWhereInput
  }


  /**
   * FoodCountOutputType without action
   */
  export type FoodCountOutputTypeCountToBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListDetailWhereInput
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    foods: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    foods?: boolean | CategoryCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
  }



  /**
   * Count Type RecipeCountOutputType
   */


  export type RecipeCountOutputType = {
    foods: number
    users: number
  }

  export type RecipeCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    foods?: boolean | RecipeCountOutputTypeCountFoodsArgs
    users?: boolean | RecipeCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes

  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeCountOutputType
     */
    select?: RecipeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecipeFoodListWhereInput
  }


  /**
   * RecipeCountOutputType without action
   */
  export type RecipeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipeWhereInput
  }



  /**
   * Count Type StorageCountOutputType
   */


  export type StorageCountOutputType = {
    foods: number
  }

  export type StorageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    foods?: boolean | StorageCountOutputTypeCountFoodsArgs
  }

  // Custom InputTypes

  /**
   * StorageCountOutputType without action
   */
  export type StorageCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageCountOutputType
     */
    select?: StorageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StorageCountOutputType without action
   */
  export type StorageCountOutputTypeCountFoodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StorageFoodWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    favorites: number
    groups: number
    toBuyLists: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
    groups?: boolean | UserCountOutputTypeCountGroupsArgs
    toBuyLists?: boolean | UserCountOutputTypeCountToBuyListsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountToBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListWhereInput
  }



  /**
   * Count Type GGroupCountOutputType
   */


  export type GGroupCountOutputType = {
    users: number
    toBuyLists: number
  }

  export type GGroupCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | GGroupCountOutputTypeCountUsersArgs
    toBuyLists?: boolean | GGroupCountOutputTypeCountToBuyListsArgs
  }

  // Custom InputTypes

  /**
   * GGroupCountOutputType without action
   */
  export type GGroupCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroupCountOutputType
     */
    select?: GGroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GGroupCountOutputType without action
   */
  export type GGroupCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
  }


  /**
   * GGroupCountOutputType without action
   */
  export type GGroupCountOutputTypeCountToBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListWhereInput
  }



  /**
   * Count Type ToBuyListCountOutputType
   */


  export type ToBuyListCountOutputType = {
    toBuyListDetails: number
  }

  export type ToBuyListCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    toBuyListDetails?: boolean | ToBuyListCountOutputTypeCountToBuyListDetailsArgs
  }

  // Custom InputTypes

  /**
   * ToBuyListCountOutputType without action
   */
  export type ToBuyListCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListCountOutputType
     */
    select?: ToBuyListCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ToBuyListCountOutputType without action
   */
  export type ToBuyListCountOutputTypeCountToBuyListDetailsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListDetailWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Food
   */


  export type AggregateFood = {
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  export type FoodAvgAggregateOutputType = {
    foodId: number | null
  }

  export type FoodSumAggregateOutputType = {
    foodId: number | null
  }

  export type FoodMinAggregateOutputType = {
    foodId: number | null
    name: string | null
    imageUrl: string | null
    description: string | null
  }

  export type FoodMaxAggregateOutputType = {
    foodId: number | null
    name: string | null
    imageUrl: string | null
    description: string | null
  }

  export type FoodCountAggregateOutputType = {
    foodId: number
    name: number
    imageUrl: number
    description: number
    _all: number
  }


  export type FoodAvgAggregateInputType = {
    foodId?: true
  }

  export type FoodSumAggregateInputType = {
    foodId?: true
  }

  export type FoodMinAggregateInputType = {
    foodId?: true
    name?: true
    imageUrl?: true
    description?: true
  }

  export type FoodMaxAggregateInputType = {
    foodId?: true
    name?: true
    imageUrl?: true
    description?: true
  }

  export type FoodCountAggregateInputType = {
    foodId?: true
    name?: true
    imageUrl?: true
    description?: true
    _all?: true
  }

  export type FoodAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Food to aggregate.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Foods
    **/
    _count?: true | FoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodMaxAggregateInputType
  }

  export type GetFoodAggregateType<T extends FoodAggregateArgs> = {
        [P in keyof T & keyof AggregateFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFood[P]>
      : GetScalarType<T[P], AggregateFood[P]>
  }




  export type FoodGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FoodWhereInput
    orderBy?: Enumerable<FoodOrderByWithAggregationInput>
    by: FoodScalarFieldEnum[]
    having?: FoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCountAggregateInputType | true
    _avg?: FoodAvgAggregateInputType
    _sum?: FoodSumAggregateInputType
    _min?: FoodMinAggregateInputType
    _max?: FoodMaxAggregateInputType
  }


  export type FoodGroupByOutputType = {
    foodId: number
    name: string
    imageUrl: string | null
    description: string | null
    _count: FoodCountAggregateOutputType | null
    _avg: FoodAvgAggregateOutputType | null
    _sum: FoodSumAggregateOutputType | null
    _min: FoodMinAggregateOutputType | null
    _max: FoodMaxAggregateOutputType | null
  }

  type GetFoodGroupByPayload<T extends FoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodGroupByOutputType[P]>
            : GetScalarType<T[P], FoodGroupByOutputType[P]>
        }
      >
    >


  export type FoodSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    foodId?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
    categories?: boolean | Food$categoriesArgs<ExtArgs>
    recipes?: boolean | Food$recipesArgs<ExtArgs>
    storage?: boolean | Food$storageArgs<ExtArgs>
    toBuyLists?: boolean | Food$toBuyListsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["food"]>

  export type FoodSelectScalar = {
    foodId?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
  }

  export type FoodInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    categories?: boolean | Food$categoriesArgs<ExtArgs>
    recipes?: boolean | Food$recipesArgs<ExtArgs>
    storage?: boolean | Food$storageArgs<ExtArgs>
    toBuyLists?: boolean | Food$toBuyListsArgs<ExtArgs>
    _count?: boolean | FoodCountOutputTypeArgs<ExtArgs>
  }


  type FoodGetPayload<S extends boolean | null | undefined | FoodArgs> = $Types.GetResult<FoodPayload, S>

  type FoodCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FoodFindManyArgs, 'select' | 'include'> & {
      select?: FoodCountAggregateInputType | true
    }

  export interface FoodDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Food'], meta: { name: 'Food' } }
    /**
     * Find zero or one Food that matches the filter.
     * @param {FoodFindUniqueArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FoodFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Food'> extends True ? Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Food that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FoodFindUniqueOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Food that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FoodFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Food'> extends True ? Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Food that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindFirstOrThrowArgs} args - Arguments to find a Food
     * @example
     * // Get one Food
     * const food = await prisma.food.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Foods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Foods
     * const foods = await prisma.food.findMany()
     * 
     * // Get first 10 Foods
     * const foods = await prisma.food.findMany({ take: 10 })
     * 
     * // Only select the `foodId`
     * const foodWithFoodIdOnly = await prisma.food.findMany({ select: { foodId: true } })
     * 
    **/
    findMany<T extends FoodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Food.
     * @param {FoodCreateArgs} args - Arguments to create a Food.
     * @example
     * // Create one Food
     * const Food = await prisma.food.create({
     *   data: {
     *     // ... data to create a Food
     *   }
     * })
     * 
    **/
    create<T extends FoodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCreateArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Foods.
     *     @param {FoodCreateManyArgs} args - Arguments to create many Foods.
     *     @example
     *     // Create many Foods
     *     const food = await prisma.food.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Food.
     * @param {FoodDeleteArgs} args - Arguments to delete one Food.
     * @example
     * // Delete one Food
     * const Food = await prisma.food.delete({
     *   where: {
     *     // ... filter to delete one Food
     *   }
     * })
     * 
    **/
    delete<T extends FoodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoodDeleteArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Food.
     * @param {FoodUpdateArgs} args - Arguments to update one Food.
     * @example
     * // Update one Food
     * const food = await prisma.food.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpdateArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Foods.
     * @param {FoodDeleteManyArgs} args - Arguments to filter Foods to delete.
     * @example
     * // Delete a few Foods
     * const { count } = await prisma.food.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Foods
     * const food = await prisma.food.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Food.
     * @param {FoodUpsertArgs} args - Arguments to update or create a Food.
     * @example
     * // Update or create a Food
     * const food = await prisma.food.upsert({
     *   create: {
     *     // ... data to create a Food
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Food we want to update
     *   }
     * })
    **/
    upsert<T extends FoodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoodUpsertArgs<ExtArgs>>
    ): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Foods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCountArgs} args - Arguments to filter Foods to count.
     * @example
     * // Count the number of Foods
     * const count = await prisma.food.count({
     *   where: {
     *     // ... the filter for the Foods we want to count
     *   }
     * })
    **/
    count<T extends FoodCountArgs>(
      args?: Subset<T, FoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodAggregateArgs>(args: Subset<T, FoodAggregateArgs>): Prisma.PrismaPromise<GetFoodAggregateType<T>>

    /**
     * Group by Food.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodGroupByArgs} args - Group by arguments.
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
      T extends FoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodGroupByArgs['orderBy'] }
        : { orderBy?: FoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Food.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FoodClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    categories<T extends Food$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Food$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    recipes<T extends Food$recipesArgs<ExtArgs> = {}>(args?: Subset<T, Food$recipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findMany', never>| Null>;

    storage<T extends Food$storageArgs<ExtArgs> = {}>(args?: Subset<T, Food$storageArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findMany', never>| Null>;

    toBuyLists<T extends Food$toBuyListsArgs<ExtArgs> = {}>(args?: Subset<T, Food$toBuyListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Food base type for findUnique actions
   */
  export type FoodFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }

  /**
   * Food findUnique
   */
  export interface FoodFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FoodFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Food findUniqueOrThrow
   */
  export type FoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food base type for findFirst actions
   */
  export type FoodFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: Enumerable<FoodScalarFieldEnum>
  }

  /**
   * Food findFirst
   */
  export interface FoodFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FoodFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Food findFirstOrThrow
   */
  export type FoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Food to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Foods.
     */
    distinct?: Enumerable<FoodScalarFieldEnum>
  }


  /**
   * Food findMany
   */
  export type FoodFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter, which Foods to fetch.
     */
    where?: FoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Foods to fetch.
     */
    orderBy?: Enumerable<FoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Foods.
     */
    cursor?: FoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Foods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Foods.
     */
    skip?: number
    distinct?: Enumerable<FoodScalarFieldEnum>
  }


  /**
   * Food create
   */
  export type FoodCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to create a Food.
     */
    data: XOR<FoodCreateInput, FoodUncheckedCreateInput>
  }


  /**
   * Food createMany
   */
  export type FoodCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Foods.
     */
    data: Enumerable<FoodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Food update
   */
  export type FoodUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The data needed to update a Food.
     */
    data: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
    /**
     * Choose, which Food to update.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food updateMany
   */
  export type FoodUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Foods.
     */
    data: XOR<FoodUpdateManyMutationInput, FoodUncheckedUpdateManyInput>
    /**
     * Filter which Foods to update
     */
    where?: FoodWhereInput
  }


  /**
   * Food upsert
   */
  export type FoodUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * The filter to search for the Food to update in case it exists.
     */
    where: FoodWhereUniqueInput
    /**
     * In case the Food found by the `where` argument doesn't exist, create a new Food with this data.
     */
    create: XOR<FoodCreateInput, FoodUncheckedCreateInput>
    /**
     * In case the Food was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodUpdateInput, FoodUncheckedUpdateInput>
  }


  /**
   * Food delete
   */
  export type FoodDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
    /**
     * Filter which Food to delete.
     */
    where: FoodWhereUniqueInput
  }


  /**
   * Food deleteMany
   */
  export type FoodDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Foods to delete
     */
    where?: FoodWhereInput
  }


  /**
   * Food.categories
   */
  export type Food$categoriesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    where?: FoodCategoryWhereInput
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    cursor?: FoodCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FoodCategoryScalarFieldEnum>
  }


  /**
   * Food.recipes
   */
  export type Food$recipesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    where?: RecipeFoodListWhereInput
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    cursor?: RecipeFoodListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecipeFoodListScalarFieldEnum>
  }


  /**
   * Food.storage
   */
  export type Food$storageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    where?: StorageFoodWhereInput
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    cursor?: StorageFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StorageFoodScalarFieldEnum>
  }


  /**
   * Food.toBuyLists
   */
  export type Food$toBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    where?: ToBuyListDetailWhereInput
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    cursor?: ToBuyListDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ToBuyListDetailScalarFieldEnum>
  }


  /**
   * Food without action
   */
  export type FoodArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Food
     */
    select?: FoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    categoryId: number | null
  }

  export type CategorySumAggregateOutputType = {
    categoryId: number | null
  }

  export type CategoryMinAggregateOutputType = {
    categoryId: number | null
    categoryName: string | null
    categoryType: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    categoryId: number | null
    categoryName: string | null
    categoryType: string | null
  }

  export type CategoryCountAggregateOutputType = {
    categoryId: number
    categoryName: number
    categoryType: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    categoryId?: true
  }

  export type CategorySumAggregateInputType = {
    categoryId?: true
  }

  export type CategoryMinAggregateInputType = {
    categoryId?: true
    categoryName?: true
    categoryType?: true
  }

  export type CategoryMaxAggregateInputType = {
    categoryId?: true
    categoryName?: true
    categoryType?: true
  }

  export type CategoryCountAggregateInputType = {
    categoryId?: true
    categoryName?: true
    categoryType?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    categoryId: number
    categoryName: string
    categoryType: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    categoryId?: boolean
    categoryName?: boolean
    categoryType?: boolean
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    categoryId?: boolean
    categoryName?: boolean
    categoryType?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    foods?: boolean | Category$foodsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = $Types.GetResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `categoryId`
     * const categoryWithCategoryIdOnly = await prisma.category.findMany({ select: { categoryId: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    foods<T extends Category$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Category$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends CategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.foods
   */
  export type Category$foodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    where?: FoodCategoryWhereInput
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    cursor?: FoodCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FoodCategoryScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Recipe
   */


  export type AggregateRecipe = {
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  export type RecipeAvgAggregateOutputType = {
    recipeId: number | null
  }

  export type RecipeSumAggregateOutputType = {
    recipeId: number | null
  }

  export type RecipeMinAggregateOutputType = {
    recipeId: number | null
    name: string | null
    imgUrl: string | null
    description: string | null
  }

  export type RecipeMaxAggregateOutputType = {
    recipeId: number | null
    name: string | null
    imgUrl: string | null
    description: string | null
  }

  export type RecipeCountAggregateOutputType = {
    recipeId: number
    name: number
    imgUrl: number
    description: number
    _all: number
  }


  export type RecipeAvgAggregateInputType = {
    recipeId?: true
  }

  export type RecipeSumAggregateInputType = {
    recipeId?: true
  }

  export type RecipeMinAggregateInputType = {
    recipeId?: true
    name?: true
    imgUrl?: true
    description?: true
  }

  export type RecipeMaxAggregateInputType = {
    recipeId?: true
    name?: true
    imgUrl?: true
    description?: true
  }

  export type RecipeCountAggregateInputType = {
    recipeId?: true
    name?: true
    imgUrl?: true
    description?: true
    _all?: true
  }

  export type RecipeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipe to aggregate.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Recipes
    **/
    _count?: true | RecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeMaxAggregateInputType
  }

  export type GetRecipeAggregateType<T extends RecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipe[P]>
      : GetScalarType<T[P], AggregateRecipe[P]>
  }




  export type RecipeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecipeWhereInput
    orderBy?: Enumerable<RecipeOrderByWithAggregationInput>
    by: RecipeScalarFieldEnum[]
    having?: RecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeCountAggregateInputType | true
    _avg?: RecipeAvgAggregateInputType
    _sum?: RecipeSumAggregateInputType
    _min?: RecipeMinAggregateInputType
    _max?: RecipeMaxAggregateInputType
  }


  export type RecipeGroupByOutputType = {
    recipeId: number
    name: string
    imgUrl: string | null
    description: string
    _count: RecipeCountAggregateOutputType | null
    _avg: RecipeAvgAggregateOutputType | null
    _sum: RecipeSumAggregateOutputType | null
    _min: RecipeMinAggregateOutputType | null
    _max: RecipeMaxAggregateOutputType | null
  }

  type GetRecipeGroupByPayload<T extends RecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeGroupByOutputType[P]>
        }
      >
    >


  export type RecipeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipeId?: boolean
    name?: boolean
    imgUrl?: boolean
    description?: boolean
    foods?: boolean | Recipe$foodsArgs<ExtArgs>
    users?: boolean | Recipe$usersArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["recipe"]>

  export type RecipeSelectScalar = {
    recipeId?: boolean
    name?: boolean
    imgUrl?: boolean
    description?: boolean
  }

  export type RecipeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    foods?: boolean | Recipe$foodsArgs<ExtArgs>
    users?: boolean | Recipe$usersArgs<ExtArgs>
    _count?: boolean | RecipeCountOutputTypeArgs<ExtArgs>
  }


  type RecipeGetPayload<S extends boolean | null | undefined | RecipeArgs> = $Types.GetResult<RecipePayload, S>

  type RecipeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RecipeFindManyArgs, 'select' | 'include'> & {
      select?: RecipeCountAggregateInputType | true
    }

  export interface RecipeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Recipe'], meta: { name: 'Recipe' } }
    /**
     * Find zero or one Recipe that matches the filter.
     * @param {RecipeFindUniqueArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Recipe'> extends True ? Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Recipe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeFindUniqueOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Recipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Recipe'> extends True ? Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Recipe that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindFirstOrThrowArgs} args - Arguments to find a Recipe
     * @example
     * // Get one Recipe
     * const recipe = await prisma.recipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Recipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recipes
     * const recipes = await prisma.recipe.findMany()
     * 
     * // Get first 10 Recipes
     * const recipes = await prisma.recipe.findMany({ take: 10 })
     * 
     * // Only select the `recipeId`
     * const recipeWithRecipeIdOnly = await prisma.recipe.findMany({ select: { recipeId: true } })
     * 
    **/
    findMany<T extends RecipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Recipe.
     * @param {RecipeCreateArgs} args - Arguments to create a Recipe.
     * @example
     * // Create one Recipe
     * const Recipe = await prisma.recipe.create({
     *   data: {
     *     // ... data to create a Recipe
     *   }
     * })
     * 
    **/
    create<T extends RecipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeCreateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Recipes.
     *     @param {RecipeCreateManyArgs} args - Arguments to create many Recipes.
     *     @example
     *     // Create many Recipes
     *     const recipe = await prisma.recipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Recipe.
     * @param {RecipeDeleteArgs} args - Arguments to delete one Recipe.
     * @example
     * // Delete one Recipe
     * const Recipe = await prisma.recipe.delete({
     *   where: {
     *     // ... filter to delete one Recipe
     *   }
     * })
     * 
    **/
    delete<T extends RecipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeDeleteArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Recipe.
     * @param {RecipeUpdateArgs} args - Arguments to update one Recipe.
     * @example
     * // Update one Recipe
     * const recipe = await prisma.recipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Recipes.
     * @param {RecipeDeleteManyArgs} args - Arguments to filter Recipes to delete.
     * @example
     * // Delete a few Recipes
     * const { count } = await prisma.recipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recipes
     * const recipe = await prisma.recipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Recipe.
     * @param {RecipeUpsertArgs} args - Arguments to update or create a Recipe.
     * @example
     * // Update or create a Recipe
     * const recipe = await prisma.recipe.upsert({
     *   create: {
     *     // ... data to create a Recipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recipe we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeUpsertArgs<ExtArgs>>
    ): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Recipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeCountArgs} args - Arguments to filter Recipes to count.
     * @example
     * // Count the number of Recipes
     * const count = await prisma.recipe.count({
     *   where: {
     *     // ... the filter for the Recipes we want to count
     *   }
     * })
    **/
    count<T extends RecipeCountArgs>(
      args?: Subset<T, RecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeAggregateArgs>(args: Subset<T, RecipeAggregateArgs>): Prisma.PrismaPromise<GetRecipeAggregateType<T>>

    /**
     * Group by Recipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeGroupByArgs} args - Group by arguments.
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
      T extends RecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeGroupByArgs['orderBy'] }
        : { orderBy?: RecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Recipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    foods<T extends Recipe$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findMany', never>| Null>;

    users<T extends Recipe$usersArgs<ExtArgs> = {}>(args?: Subset<T, Recipe$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Recipe base type for findUnique actions
   */
  export type RecipeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }

  /**
   * Recipe findUnique
   */
  export interface RecipeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RecipeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe findUniqueOrThrow
   */
  export type RecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe base type for findFirst actions
   */
  export type RecipeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }

  /**
   * Recipe findFirst
   */
  export interface RecipeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RecipeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Recipe findFirstOrThrow
   */
  export type RecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipe to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Recipes.
     */
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe findMany
   */
  export type RecipeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter, which Recipes to fetch.
     */
    where?: RecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Recipes to fetch.
     */
    orderBy?: Enumerable<RecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Recipes.
     */
    cursor?: RecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Recipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Recipes.
     */
    skip?: number
    distinct?: Enumerable<RecipeScalarFieldEnum>
  }


  /**
   * Recipe create
   */
  export type RecipeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Recipe.
     */
    data: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
  }


  /**
   * Recipe createMany
   */
  export type RecipeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Recipes.
     */
    data: Enumerable<RecipeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Recipe update
   */
  export type RecipeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Recipe.
     */
    data: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
    /**
     * Choose, which Recipe to update.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe updateMany
   */
  export type RecipeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Recipes.
     */
    data: XOR<RecipeUpdateManyMutationInput, RecipeUncheckedUpdateManyInput>
    /**
     * Filter which Recipes to update
     */
    where?: RecipeWhereInput
  }


  /**
   * Recipe upsert
   */
  export type RecipeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Recipe to update in case it exists.
     */
    where: RecipeWhereUniqueInput
    /**
     * In case the Recipe found by the `where` argument doesn't exist, create a new Recipe with this data.
     */
    create: XOR<RecipeCreateInput, RecipeUncheckedCreateInput>
    /**
     * In case the Recipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeUpdateInput, RecipeUncheckedUpdateInput>
  }


  /**
   * Recipe delete
   */
  export type RecipeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
    /**
     * Filter which Recipe to delete.
     */
    where: RecipeWhereUniqueInput
  }


  /**
   * Recipe deleteMany
   */
  export type RecipeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Recipes to delete
     */
    where?: RecipeWhereInput
  }


  /**
   * Recipe.foods
   */
  export type Recipe$foodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    where?: RecipeFoodListWhereInput
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    cursor?: RecipeFoodListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RecipeFoodListScalarFieldEnum>
  }


  /**
   * Recipe.users
   */
  export type Recipe$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    where?: FavoriteRecipeWhereInput
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    cursor?: FavoriteRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FavoriteRecipeScalarFieldEnum>
  }


  /**
   * Recipe without action
   */
  export type RecipeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recipe
     */
    select?: RecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeInclude<ExtArgs> | null
  }



  /**
   * Model Storage
   */


  export type AggregateStorage = {
    _count: StorageCountAggregateOutputType | null
    _avg: StorageAvgAggregateOutputType | null
    _sum: StorageSumAggregateOutputType | null
    _min: StorageMinAggregateOutputType | null
    _max: StorageMaxAggregateOutputType | null
  }

  export type StorageAvgAggregateOutputType = {
    storageId: number | null
    userId: number | null
  }

  export type StorageSumAggregateOutputType = {
    storageId: number | null
    userId: number | null
  }

  export type StorageMinAggregateOutputType = {
    storageId: number | null
    userId: number | null
  }

  export type StorageMaxAggregateOutputType = {
    storageId: number | null
    userId: number | null
  }

  export type StorageCountAggregateOutputType = {
    storageId: number
    userId: number
    _all: number
  }


  export type StorageAvgAggregateInputType = {
    storageId?: true
    userId?: true
  }

  export type StorageSumAggregateInputType = {
    storageId?: true
    userId?: true
  }

  export type StorageMinAggregateInputType = {
    storageId?: true
    userId?: true
  }

  export type StorageMaxAggregateInputType = {
    storageId?: true
    userId?: true
  }

  export type StorageCountAggregateInputType = {
    storageId?: true
    userId?: true
    _all?: true
  }

  export type StorageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Storage to aggregate.
     */
    where?: StorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storages to fetch.
     */
    orderBy?: Enumerable<StorageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Storages
    **/
    _count?: true | StorageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageMaxAggregateInputType
  }

  export type GetStorageAggregateType<T extends StorageAggregateArgs> = {
        [P in keyof T & keyof AggregateStorage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorage[P]>
      : GetScalarType<T[P], AggregateStorage[P]>
  }




  export type StorageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StorageWhereInput
    orderBy?: Enumerable<StorageOrderByWithAggregationInput>
    by: StorageScalarFieldEnum[]
    having?: StorageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageCountAggregateInputType | true
    _avg?: StorageAvgAggregateInputType
    _sum?: StorageSumAggregateInputType
    _min?: StorageMinAggregateInputType
    _max?: StorageMaxAggregateInputType
  }


  export type StorageGroupByOutputType = {
    storageId: number
    userId: number
    _count: StorageCountAggregateOutputType | null
    _avg: StorageAvgAggregateOutputType | null
    _sum: StorageSumAggregateOutputType | null
    _min: StorageMinAggregateOutputType | null
    _max: StorageMaxAggregateOutputType | null
  }

  type GetStorageGroupByPayload<T extends StorageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StorageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageGroupByOutputType[P]>
            : GetScalarType<T[P], StorageGroupByOutputType[P]>
        }
      >
    >


  export type StorageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storageId?: boolean
    userId?: boolean
    user?: boolean | UserArgs<ExtArgs>
    foods?: boolean | Storage$foodsArgs<ExtArgs>
    _count?: boolean | StorageCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["storage"]>

  export type StorageSelectScalar = {
    storageId?: boolean
    userId?: boolean
  }

  export type StorageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    foods?: boolean | Storage$foodsArgs<ExtArgs>
    _count?: boolean | StorageCountOutputTypeArgs<ExtArgs>
  }


  type StorageGetPayload<S extends boolean | null | undefined | StorageArgs> = $Types.GetResult<StoragePayload, S>

  type StorageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StorageFindManyArgs, 'select' | 'include'> & {
      select?: StorageCountAggregateInputType | true
    }

  export interface StorageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Storage'], meta: { name: 'Storage' } }
    /**
     * Find zero or one Storage that matches the filter.
     * @param {StorageFindUniqueArgs} args - Arguments to find a Storage
     * @example
     * // Get one Storage
     * const storage = await prisma.storage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StorageFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StorageFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Storage'> extends True ? Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Storage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StorageFindUniqueOrThrowArgs} args - Arguments to find a Storage
     * @example
     * // Get one Storage
     * const storage = await prisma.storage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StorageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Storage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFindFirstArgs} args - Arguments to find a Storage
     * @example
     * // Get one Storage
     * const storage = await prisma.storage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StorageFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StorageFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Storage'> extends True ? Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Storage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFindFirstOrThrowArgs} args - Arguments to find a Storage
     * @example
     * // Get one Storage
     * const storage = await prisma.storage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StorageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Storages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Storages
     * const storages = await prisma.storage.findMany()
     * 
     * // Get first 10 Storages
     * const storages = await prisma.storage.findMany({ take: 10 })
     * 
     * // Only select the `storageId`
     * const storageWithStorageIdOnly = await prisma.storage.findMany({ select: { storageId: true } })
     * 
    **/
    findMany<T extends StorageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Storage.
     * @param {StorageCreateArgs} args - Arguments to create a Storage.
     * @example
     * // Create one Storage
     * const Storage = await prisma.storage.create({
     *   data: {
     *     // ... data to create a Storage
     *   }
     * })
     * 
    **/
    create<T extends StorageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageCreateArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Storages.
     *     @param {StorageCreateManyArgs} args - Arguments to create many Storages.
     *     @example
     *     // Create many Storages
     *     const storage = await prisma.storage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StorageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Storage.
     * @param {StorageDeleteArgs} args - Arguments to delete one Storage.
     * @example
     * // Delete one Storage
     * const Storage = await prisma.storage.delete({
     *   where: {
     *     // ... filter to delete one Storage
     *   }
     * })
     * 
    **/
    delete<T extends StorageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StorageDeleteArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Storage.
     * @param {StorageUpdateArgs} args - Arguments to update one Storage.
     * @example
     * // Update one Storage
     * const storage = await prisma.storage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StorageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageUpdateArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Storages.
     * @param {StorageDeleteManyArgs} args - Arguments to filter Storages to delete.
     * @example
     * // Delete a few Storages
     * const { count } = await prisma.storage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StorageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Storages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Storages
     * const storage = await prisma.storage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StorageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StorageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Storage.
     * @param {StorageUpsertArgs} args - Arguments to update or create a Storage.
     * @example
     * // Update or create a Storage
     * const storage = await prisma.storage.upsert({
     *   create: {
     *     // ... data to create a Storage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Storage we want to update
     *   }
     * })
    **/
    upsert<T extends StorageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StorageUpsertArgs<ExtArgs>>
    ): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Storages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageCountArgs} args - Arguments to filter Storages to count.
     * @example
     * // Count the number of Storages
     * const count = await prisma.storage.count({
     *   where: {
     *     // ... the filter for the Storages we want to count
     *   }
     * })
    **/
    count<T extends StorageCountArgs>(
      args?: Subset<T, StorageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Storage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageAggregateArgs>(args: Subset<T, StorageAggregateArgs>): Prisma.PrismaPromise<GetStorageAggregateType<T>>

    /**
     * Group by Storage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageGroupByArgs} args - Group by arguments.
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
      T extends StorageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageGroupByArgs['orderBy'] }
        : { orderBy?: StorageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StorageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Storage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StorageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    foods<T extends Storage$foodsArgs<ExtArgs> = {}>(args?: Subset<T, Storage$foodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Storage base type for findUnique actions
   */
  export type StorageFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter, which Storage to fetch.
     */
    where: StorageWhereUniqueInput
  }

  /**
   * Storage findUnique
   */
  export interface StorageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StorageFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Storage findUniqueOrThrow
   */
  export type StorageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter, which Storage to fetch.
     */
    where: StorageWhereUniqueInput
  }


  /**
   * Storage base type for findFirst actions
   */
  export type StorageFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter, which Storage to fetch.
     */
    where?: StorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storages to fetch.
     */
    orderBy?: Enumerable<StorageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Storages.
     */
    cursor?: StorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Storages.
     */
    distinct?: Enumerable<StorageScalarFieldEnum>
  }

  /**
   * Storage findFirst
   */
  export interface StorageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StorageFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Storage findFirstOrThrow
   */
  export type StorageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter, which Storage to fetch.
     */
    where?: StorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storages to fetch.
     */
    orderBy?: Enumerable<StorageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Storages.
     */
    cursor?: StorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Storages.
     */
    distinct?: Enumerable<StorageScalarFieldEnum>
  }


  /**
   * Storage findMany
   */
  export type StorageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter, which Storages to fetch.
     */
    where?: StorageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Storages to fetch.
     */
    orderBy?: Enumerable<StorageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Storages.
     */
    cursor?: StorageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Storages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Storages.
     */
    skip?: number
    distinct?: Enumerable<StorageScalarFieldEnum>
  }


  /**
   * Storage create
   */
  export type StorageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * The data needed to create a Storage.
     */
    data: XOR<StorageCreateInput, StorageUncheckedCreateInput>
  }


  /**
   * Storage createMany
   */
  export type StorageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Storages.
     */
    data: Enumerable<StorageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Storage update
   */
  export type StorageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * The data needed to update a Storage.
     */
    data: XOR<StorageUpdateInput, StorageUncheckedUpdateInput>
    /**
     * Choose, which Storage to update.
     */
    where: StorageWhereUniqueInput
  }


  /**
   * Storage updateMany
   */
  export type StorageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Storages.
     */
    data: XOR<StorageUpdateManyMutationInput, StorageUncheckedUpdateManyInput>
    /**
     * Filter which Storages to update
     */
    where?: StorageWhereInput
  }


  /**
   * Storage upsert
   */
  export type StorageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * The filter to search for the Storage to update in case it exists.
     */
    where: StorageWhereUniqueInput
    /**
     * In case the Storage found by the `where` argument doesn't exist, create a new Storage with this data.
     */
    create: XOR<StorageCreateInput, StorageUncheckedCreateInput>
    /**
     * In case the Storage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageUpdateInput, StorageUncheckedUpdateInput>
  }


  /**
   * Storage delete
   */
  export type StorageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
    /**
     * Filter which Storage to delete.
     */
    where: StorageWhereUniqueInput
  }


  /**
   * Storage deleteMany
   */
  export type StorageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Storages to delete
     */
    where?: StorageWhereInput
  }


  /**
   * Storage.foods
   */
  export type Storage$foodsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    where?: StorageFoodWhereInput
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    cursor?: StorageFoodWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StorageFoodScalarFieldEnum>
  }


  /**
   * Storage without action
   */
  export type StorageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Storage
     */
    select?: StorageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageInclude<ExtArgs> | null
  }



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
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    userId: number | null
    username: string | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    userId: number | null
    username: string | null
    name: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    username: number
    name: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    userId?: true
    username?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    username?: true
    name?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    username?: true
    name?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    userId: number
    username: string
    name: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    toBuyLists?: boolean | User$toBuyListsArgs<ExtArgs>
    storage?: boolean | StorageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    username?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    groups?: boolean | User$groupsArgs<ExtArgs>
    toBuyLists?: boolean | User$toBuyListsArgs<ExtArgs>
    storage?: boolean | StorageArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findMany', never>| Null>;

    groups<T extends User$groupsArgs<ExtArgs> = {}>(args?: Subset<T, User$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findMany', never>| Null>;

    toBuyLists<T extends User$toBuyListsArgs<ExtArgs> = {}>(args?: Subset<T, User$toBuyListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findMany', never>| Null>;

    storage<T extends StorageArgs<ExtArgs> = {}>(args?: Subset<T, StorageArgs<ExtArgs>>): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    where?: FavoriteRecipeWhereInput
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    cursor?: FavoriteRecipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FavoriteRecipeScalarFieldEnum>
  }


  /**
   * User.groups
   */
  export type User$groupsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMemberScalarFieldEnum>
  }


  /**
   * User.toBuyLists
   */
  export type User$toBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    where?: ToBuyListWhereInput
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    cursor?: ToBuyListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ToBuyListScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model GGroup
   */


  export type AggregateGGroup = {
    _count: GGroupCountAggregateOutputType | null
    _avg: GGroupAvgAggregateOutputType | null
    _sum: GGroupSumAggregateOutputType | null
    _min: GGroupMinAggregateOutputType | null
    _max: GGroupMaxAggregateOutputType | null
  }

  export type GGroupAvgAggregateOutputType = {
    groupId: number | null
  }

  export type GGroupSumAggregateOutputType = {
    groupId: number | null
  }

  export type GGroupMinAggregateOutputType = {
    groupId: number | null
    name: string | null
  }

  export type GGroupMaxAggregateOutputType = {
    groupId: number | null
    name: string | null
  }

  export type GGroupCountAggregateOutputType = {
    groupId: number
    name: number
    _all: number
  }


  export type GGroupAvgAggregateInputType = {
    groupId?: true
  }

  export type GGroupSumAggregateInputType = {
    groupId?: true
  }

  export type GGroupMinAggregateInputType = {
    groupId?: true
    name?: true
  }

  export type GGroupMaxAggregateInputType = {
    groupId?: true
    name?: true
  }

  export type GGroupCountAggregateInputType = {
    groupId?: true
    name?: true
    _all?: true
  }

  export type GGroupAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GGroup to aggregate.
     */
    where?: GGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GGroups to fetch.
     */
    orderBy?: Enumerable<GGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GGroups
    **/
    _count?: true | GGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GGroupMaxAggregateInputType
  }

  export type GetGGroupAggregateType<T extends GGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGGroup[P]>
      : GetScalarType<T[P], AggregateGGroup[P]>
  }




  export type GGroupGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GGroupWhereInput
    orderBy?: Enumerable<GGroupOrderByWithAggregationInput>
    by: GGroupScalarFieldEnum[]
    having?: GGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GGroupCountAggregateInputType | true
    _avg?: GGroupAvgAggregateInputType
    _sum?: GGroupSumAggregateInputType
    _min?: GGroupMinAggregateInputType
    _max?: GGroupMaxAggregateInputType
  }


  export type GGroupGroupByOutputType = {
    groupId: number
    name: string
    _count: GGroupCountAggregateOutputType | null
    _avg: GGroupAvgAggregateOutputType | null
    _sum: GGroupSumAggregateOutputType | null
    _min: GGroupMinAggregateOutputType | null
    _max: GGroupMaxAggregateOutputType | null
  }

  type GetGGroupGroupByPayload<T extends GGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GGroupGroupByOutputType[P]>
            : GetScalarType<T[P], GGroupGroupByOutputType[P]>
        }
      >
    >


  export type GGroupSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    name?: boolean
    users?: boolean | GGroup$usersArgs<ExtArgs>
    toBuyLists?: boolean | GGroup$toBuyListsArgs<ExtArgs>
    _count?: boolean | GGroupCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["gGroup"]>

  export type GGroupSelectScalar = {
    groupId?: boolean
    name?: boolean
  }

  export type GGroupInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    users?: boolean | GGroup$usersArgs<ExtArgs>
    toBuyLists?: boolean | GGroup$toBuyListsArgs<ExtArgs>
    _count?: boolean | GGroupCountOutputTypeArgs<ExtArgs>
  }


  type GGroupGetPayload<S extends boolean | null | undefined | GGroupArgs> = $Types.GetResult<GGroupPayload, S>

  type GGroupCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GGroupFindManyArgs, 'select' | 'include'> & {
      select?: GGroupCountAggregateInputType | true
    }

  export interface GGroupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GGroup'], meta: { name: 'GGroup' } }
    /**
     * Find zero or one GGroup that matches the filter.
     * @param {GGroupFindUniqueArgs} args - Arguments to find a GGroup
     * @example
     * // Get one GGroup
     * const gGroup = await prisma.gGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GGroupFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GGroupFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GGroup'> extends True ? Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one GGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GGroupFindUniqueOrThrowArgs} args - Arguments to find a GGroup
     * @example
     * // Get one GGroup
     * const gGroup = await prisma.gGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first GGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupFindFirstArgs} args - Arguments to find a GGroup
     * @example
     * // Get one GGroup
     * const gGroup = await prisma.gGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GGroupFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GGroupFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GGroup'> extends True ? Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first GGroup that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupFindFirstOrThrowArgs} args - Arguments to find a GGroup
     * @example
     * // Get one GGroup
     * const gGroup = await prisma.gGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more GGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GGroups
     * const gGroups = await prisma.gGroup.findMany()
     * 
     * // Get first 10 GGroups
     * const gGroups = await prisma.gGroup.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const gGroupWithGroupIdOnly = await prisma.gGroup.findMany({ select: { groupId: true } })
     * 
    **/
    findMany<T extends GGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a GGroup.
     * @param {GGroupCreateArgs} args - Arguments to create a GGroup.
     * @example
     * // Create one GGroup
     * const GGroup = await prisma.gGroup.create({
     *   data: {
     *     // ... data to create a GGroup
     *   }
     * })
     * 
    **/
    create<T extends GGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GGroupCreateArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many GGroups.
     *     @param {GGroupCreateManyArgs} args - Arguments to create many GGroups.
     *     @example
     *     // Create many GGroups
     *     const gGroup = await prisma.gGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GGroup.
     * @param {GGroupDeleteArgs} args - Arguments to delete one GGroup.
     * @example
     * // Delete one GGroup
     * const GGroup = await prisma.gGroup.delete({
     *   where: {
     *     // ... filter to delete one GGroup
     *   }
     * })
     * 
    **/
    delete<T extends GGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GGroupDeleteArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one GGroup.
     * @param {GGroupUpdateArgs} args - Arguments to update one GGroup.
     * @example
     * // Update one GGroup
     * const gGroup = await prisma.gGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GGroupUpdateArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more GGroups.
     * @param {GGroupDeleteManyArgs} args - Arguments to filter GGroups to delete.
     * @example
     * // Delete a few GGroups
     * const { count } = await prisma.gGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GGroups
     * const gGroup = await prisma.gGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GGroup.
     * @param {GGroupUpsertArgs} args - Arguments to update or create a GGroup.
     * @example
     * // Update or create a GGroup
     * const gGroup = await prisma.gGroup.upsert({
     *   create: {
     *     // ... data to create a GGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GGroup we want to update
     *   }
     * })
    **/
    upsert<T extends GGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GGroupUpsertArgs<ExtArgs>>
    ): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of GGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupCountArgs} args - Arguments to filter GGroups to count.
     * @example
     * // Count the number of GGroups
     * const count = await prisma.gGroup.count({
     *   where: {
     *     // ... the filter for the GGroups we want to count
     *   }
     * })
    **/
    count<T extends GGroupCountArgs>(
      args?: Subset<T, GGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GGroupAggregateArgs>(args: Subset<T, GGroupAggregateArgs>): Prisma.PrismaPromise<GetGGroupAggregateType<T>>

    /**
     * Group by GGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GGroupGroupByArgs} args - Group by arguments.
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
      T extends GGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GGroupGroupByArgs['orderBy'] }
        : { orderBy?: GGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GGroupClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    users<T extends GGroup$usersArgs<ExtArgs> = {}>(args?: Subset<T, GGroup$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findMany', never>| Null>;

    toBuyLists<T extends GGroup$toBuyListsArgs<ExtArgs> = {}>(args?: Subset<T, GGroup$toBuyListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GGroup base type for findUnique actions
   */
  export type GGroupFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter, which GGroup to fetch.
     */
    where: GGroupWhereUniqueInput
  }

  /**
   * GGroup findUnique
   */
  export interface GGroupFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GGroupFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GGroup findUniqueOrThrow
   */
  export type GGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter, which GGroup to fetch.
     */
    where: GGroupWhereUniqueInput
  }


  /**
   * GGroup base type for findFirst actions
   */
  export type GGroupFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter, which GGroup to fetch.
     */
    where?: GGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GGroups to fetch.
     */
    orderBy?: Enumerable<GGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GGroups.
     */
    cursor?: GGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GGroups.
     */
    distinct?: Enumerable<GGroupScalarFieldEnum>
  }

  /**
   * GGroup findFirst
   */
  export interface GGroupFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GGroupFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GGroup findFirstOrThrow
   */
  export type GGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter, which GGroup to fetch.
     */
    where?: GGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GGroups to fetch.
     */
    orderBy?: Enumerable<GGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GGroups.
     */
    cursor?: GGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GGroups.
     */
    distinct?: Enumerable<GGroupScalarFieldEnum>
  }


  /**
   * GGroup findMany
   */
  export type GGroupFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter, which GGroups to fetch.
     */
    where?: GGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GGroups to fetch.
     */
    orderBy?: Enumerable<GGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GGroups.
     */
    cursor?: GGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GGroups.
     */
    skip?: number
    distinct?: Enumerable<GGroupScalarFieldEnum>
  }


  /**
   * GGroup create
   */
  export type GGroupCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a GGroup.
     */
    data: XOR<GGroupCreateInput, GGroupUncheckedCreateInput>
  }


  /**
   * GGroup createMany
   */
  export type GGroupCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GGroups.
     */
    data: Enumerable<GGroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GGroup update
   */
  export type GGroupUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a GGroup.
     */
    data: XOR<GGroupUpdateInput, GGroupUncheckedUpdateInput>
    /**
     * Choose, which GGroup to update.
     */
    where: GGroupWhereUniqueInput
  }


  /**
   * GGroup updateMany
   */
  export type GGroupUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GGroups.
     */
    data: XOR<GGroupUpdateManyMutationInput, GGroupUncheckedUpdateManyInput>
    /**
     * Filter which GGroups to update
     */
    where?: GGroupWhereInput
  }


  /**
   * GGroup upsert
   */
  export type GGroupUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the GGroup to update in case it exists.
     */
    where: GGroupWhereUniqueInput
    /**
     * In case the GGroup found by the `where` argument doesn't exist, create a new GGroup with this data.
     */
    create: XOR<GGroupCreateInput, GGroupUncheckedCreateInput>
    /**
     * In case the GGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GGroupUpdateInput, GGroupUncheckedUpdateInput>
  }


  /**
   * GGroup delete
   */
  export type GGroupDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
    /**
     * Filter which GGroup to delete.
     */
    where: GGroupWhereUniqueInput
  }


  /**
   * GGroup deleteMany
   */
  export type GGroupDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GGroups to delete
     */
    where?: GGroupWhereInput
  }


  /**
   * GGroup.users
   */
  export type GGroup$usersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    where?: GroupMemberWhereInput
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    cursor?: GroupMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<GroupMemberScalarFieldEnum>
  }


  /**
   * GGroup.toBuyLists
   */
  export type GGroup$toBuyListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    where?: ToBuyListWhereInput
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    cursor?: ToBuyListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ToBuyListScalarFieldEnum>
  }


  /**
   * GGroup without action
   */
  export type GGroupArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GGroup
     */
    select?: GGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GGroupInclude<ExtArgs> | null
  }



  /**
   * Model RecipeFoodList
   */


  export type AggregateRecipeFoodList = {
    _count: RecipeFoodListCountAggregateOutputType | null
    _avg: RecipeFoodListAvgAggregateOutputType | null
    _sum: RecipeFoodListSumAggregateOutputType | null
    _min: RecipeFoodListMinAggregateOutputType | null
    _max: RecipeFoodListMaxAggregateOutputType | null
  }

  export type RecipeFoodListAvgAggregateOutputType = {
    recipeId: number | null
    foodId: number | null
  }

  export type RecipeFoodListSumAggregateOutputType = {
    recipeId: number | null
    foodId: number | null
  }

  export type RecipeFoodListMinAggregateOutputType = {
    recipeId: number | null
    foodId: number | null
  }

  export type RecipeFoodListMaxAggregateOutputType = {
    recipeId: number | null
    foodId: number | null
  }

  export type RecipeFoodListCountAggregateOutputType = {
    recipeId: number
    foodId: number
    _all: number
  }


  export type RecipeFoodListAvgAggregateInputType = {
    recipeId?: true
    foodId?: true
  }

  export type RecipeFoodListSumAggregateInputType = {
    recipeId?: true
    foodId?: true
  }

  export type RecipeFoodListMinAggregateInputType = {
    recipeId?: true
    foodId?: true
  }

  export type RecipeFoodListMaxAggregateInputType = {
    recipeId?: true
    foodId?: true
  }

  export type RecipeFoodListCountAggregateInputType = {
    recipeId?: true
    foodId?: true
    _all?: true
  }

  export type RecipeFoodListAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeFoodList to aggregate.
     */
    where?: RecipeFoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoodLists to fetch.
     */
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecipeFoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecipeFoodLists
    **/
    _count?: true | RecipeFoodListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecipeFoodListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecipeFoodListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecipeFoodListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecipeFoodListMaxAggregateInputType
  }

  export type GetRecipeFoodListAggregateType<T extends RecipeFoodListAggregateArgs> = {
        [P in keyof T & keyof AggregateRecipeFoodList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecipeFoodList[P]>
      : GetScalarType<T[P], AggregateRecipeFoodList[P]>
  }




  export type RecipeFoodListGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RecipeFoodListWhereInput
    orderBy?: Enumerable<RecipeFoodListOrderByWithAggregationInput>
    by: RecipeFoodListScalarFieldEnum[]
    having?: RecipeFoodListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecipeFoodListCountAggregateInputType | true
    _avg?: RecipeFoodListAvgAggregateInputType
    _sum?: RecipeFoodListSumAggregateInputType
    _min?: RecipeFoodListMinAggregateInputType
    _max?: RecipeFoodListMaxAggregateInputType
  }


  export type RecipeFoodListGroupByOutputType = {
    recipeId: number
    foodId: number
    _count: RecipeFoodListCountAggregateOutputType | null
    _avg: RecipeFoodListAvgAggregateOutputType | null
    _sum: RecipeFoodListSumAggregateOutputType | null
    _min: RecipeFoodListMinAggregateOutputType | null
    _max: RecipeFoodListMaxAggregateOutputType | null
  }

  type GetRecipeFoodListGroupByPayload<T extends RecipeFoodListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RecipeFoodListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecipeFoodListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecipeFoodListGroupByOutputType[P]>
            : GetScalarType<T[P], RecipeFoodListGroupByOutputType[P]>
        }
      >
    >


  export type RecipeFoodListSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    recipeId?: boolean
    foodId?: boolean
    recipe?: boolean | RecipeArgs<ExtArgs>
    food?: boolean | FoodArgs<ExtArgs>
  }, ExtArgs["result"]["recipeFoodList"]>

  export type RecipeFoodListSelectScalar = {
    recipeId?: boolean
    foodId?: boolean
  }

  export type RecipeFoodListInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    recipe?: boolean | RecipeArgs<ExtArgs>
    food?: boolean | FoodArgs<ExtArgs>
  }


  type RecipeFoodListGetPayload<S extends boolean | null | undefined | RecipeFoodListArgs> = $Types.GetResult<RecipeFoodListPayload, S>

  type RecipeFoodListCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RecipeFoodListFindManyArgs, 'select' | 'include'> & {
      select?: RecipeFoodListCountAggregateInputType | true
    }

  export interface RecipeFoodListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecipeFoodList'], meta: { name: 'RecipeFoodList' } }
    /**
     * Find zero or one RecipeFoodList that matches the filter.
     * @param {RecipeFoodListFindUniqueArgs} args - Arguments to find a RecipeFoodList
     * @example
     * // Get one RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecipeFoodListFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RecipeFoodListFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RecipeFoodList'> extends True ? Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one RecipeFoodList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecipeFoodListFindUniqueOrThrowArgs} args - Arguments to find a RecipeFoodList
     * @example
     * // Get one RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecipeFoodListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFoodListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first RecipeFoodList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListFindFirstArgs} args - Arguments to find a RecipeFoodList
     * @example
     * // Get one RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecipeFoodListFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RecipeFoodListFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RecipeFoodList'> extends True ? Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first RecipeFoodList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListFindFirstOrThrowArgs} args - Arguments to find a RecipeFoodList
     * @example
     * // Get one RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecipeFoodListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFoodListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more RecipeFoodLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecipeFoodLists
     * const recipeFoodLists = await prisma.recipeFoodList.findMany()
     * 
     * // Get first 10 RecipeFoodLists
     * const recipeFoodLists = await prisma.recipeFoodList.findMany({ take: 10 })
     * 
     * // Only select the `recipeId`
     * const recipeFoodListWithRecipeIdOnly = await prisma.recipeFoodList.findMany({ select: { recipeId: true } })
     * 
    **/
    findMany<T extends RecipeFoodListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFoodListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a RecipeFoodList.
     * @param {RecipeFoodListCreateArgs} args - Arguments to create a RecipeFoodList.
     * @example
     * // Create one RecipeFoodList
     * const RecipeFoodList = await prisma.recipeFoodList.create({
     *   data: {
     *     // ... data to create a RecipeFoodList
     *   }
     * })
     * 
    **/
    create<T extends RecipeFoodListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFoodListCreateArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many RecipeFoodLists.
     *     @param {RecipeFoodListCreateManyArgs} args - Arguments to create many RecipeFoodLists.
     *     @example
     *     // Create many RecipeFoodLists
     *     const recipeFoodList = await prisma.recipeFoodList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecipeFoodListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFoodListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RecipeFoodList.
     * @param {RecipeFoodListDeleteArgs} args - Arguments to delete one RecipeFoodList.
     * @example
     * // Delete one RecipeFoodList
     * const RecipeFoodList = await prisma.recipeFoodList.delete({
     *   where: {
     *     // ... filter to delete one RecipeFoodList
     *   }
     * })
     * 
    **/
    delete<T extends RecipeFoodListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFoodListDeleteArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one RecipeFoodList.
     * @param {RecipeFoodListUpdateArgs} args - Arguments to update one RecipeFoodList.
     * @example
     * // Update one RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecipeFoodListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFoodListUpdateArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more RecipeFoodLists.
     * @param {RecipeFoodListDeleteManyArgs} args - Arguments to filter RecipeFoodLists to delete.
     * @example
     * // Delete a few RecipeFoodLists
     * const { count } = await prisma.recipeFoodList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecipeFoodListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecipeFoodListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecipeFoodLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecipeFoodLists
     * const recipeFoodList = await prisma.recipeFoodList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecipeFoodListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFoodListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RecipeFoodList.
     * @param {RecipeFoodListUpsertArgs} args - Arguments to update or create a RecipeFoodList.
     * @example
     * // Update or create a RecipeFoodList
     * const recipeFoodList = await prisma.recipeFoodList.upsert({
     *   create: {
     *     // ... data to create a RecipeFoodList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecipeFoodList we want to update
     *   }
     * })
    **/
    upsert<T extends RecipeFoodListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecipeFoodListUpsertArgs<ExtArgs>>
    ): Prisma__RecipeFoodListClient<$Types.GetResult<RecipeFoodListPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of RecipeFoodLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListCountArgs} args - Arguments to filter RecipeFoodLists to count.
     * @example
     * // Count the number of RecipeFoodLists
     * const count = await prisma.recipeFoodList.count({
     *   where: {
     *     // ... the filter for the RecipeFoodLists we want to count
     *   }
     * })
    **/
    count<T extends RecipeFoodListCountArgs>(
      args?: Subset<T, RecipeFoodListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecipeFoodListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecipeFoodList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RecipeFoodListAggregateArgs>(args: Subset<T, RecipeFoodListAggregateArgs>): Prisma.PrismaPromise<GetRecipeFoodListAggregateType<T>>

    /**
     * Group by RecipeFoodList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecipeFoodListGroupByArgs} args - Group by arguments.
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
      T extends RecipeFoodListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecipeFoodListGroupByArgs['orderBy'] }
        : { orderBy?: RecipeFoodListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, RecipeFoodListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecipeFoodListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RecipeFoodList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RecipeFoodListClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    recipe<T extends RecipeArgs<ExtArgs> = {}>(args?: Subset<T, RecipeArgs<ExtArgs>>): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    food<T extends FoodArgs<ExtArgs> = {}>(args?: Subset<T, FoodArgs<ExtArgs>>): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RecipeFoodList base type for findUnique actions
   */
  export type RecipeFoodListFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter, which RecipeFoodList to fetch.
     */
    where: RecipeFoodListWhereUniqueInput
  }

  /**
   * RecipeFoodList findUnique
   */
  export interface RecipeFoodListFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RecipeFoodListFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecipeFoodList findUniqueOrThrow
   */
  export type RecipeFoodListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter, which RecipeFoodList to fetch.
     */
    where: RecipeFoodListWhereUniqueInput
  }


  /**
   * RecipeFoodList base type for findFirst actions
   */
  export type RecipeFoodListFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter, which RecipeFoodList to fetch.
     */
    where?: RecipeFoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoodLists to fetch.
     */
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeFoodLists.
     */
    cursor?: RecipeFoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeFoodLists.
     */
    distinct?: Enumerable<RecipeFoodListScalarFieldEnum>
  }

  /**
   * RecipeFoodList findFirst
   */
  export interface RecipeFoodListFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends RecipeFoodListFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RecipeFoodList findFirstOrThrow
   */
  export type RecipeFoodListFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter, which RecipeFoodList to fetch.
     */
    where?: RecipeFoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoodLists to fetch.
     */
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecipeFoodLists.
     */
    cursor?: RecipeFoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoodLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecipeFoodLists.
     */
    distinct?: Enumerable<RecipeFoodListScalarFieldEnum>
  }


  /**
   * RecipeFoodList findMany
   */
  export type RecipeFoodListFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter, which RecipeFoodLists to fetch.
     */
    where?: RecipeFoodListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecipeFoodLists to fetch.
     */
    orderBy?: Enumerable<RecipeFoodListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecipeFoodLists.
     */
    cursor?: RecipeFoodListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecipeFoodLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecipeFoodLists.
     */
    skip?: number
    distinct?: Enumerable<RecipeFoodListScalarFieldEnum>
  }


  /**
   * RecipeFoodList create
   */
  export type RecipeFoodListCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * The data needed to create a RecipeFoodList.
     */
    data: XOR<RecipeFoodListCreateInput, RecipeFoodListUncheckedCreateInput>
  }


  /**
   * RecipeFoodList createMany
   */
  export type RecipeFoodListCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecipeFoodLists.
     */
    data: Enumerable<RecipeFoodListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RecipeFoodList update
   */
  export type RecipeFoodListUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * The data needed to update a RecipeFoodList.
     */
    data: XOR<RecipeFoodListUpdateInput, RecipeFoodListUncheckedUpdateInput>
    /**
     * Choose, which RecipeFoodList to update.
     */
    where: RecipeFoodListWhereUniqueInput
  }


  /**
   * RecipeFoodList updateMany
   */
  export type RecipeFoodListUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecipeFoodLists.
     */
    data: XOR<RecipeFoodListUpdateManyMutationInput, RecipeFoodListUncheckedUpdateManyInput>
    /**
     * Filter which RecipeFoodLists to update
     */
    where?: RecipeFoodListWhereInput
  }


  /**
   * RecipeFoodList upsert
   */
  export type RecipeFoodListUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * The filter to search for the RecipeFoodList to update in case it exists.
     */
    where: RecipeFoodListWhereUniqueInput
    /**
     * In case the RecipeFoodList found by the `where` argument doesn't exist, create a new RecipeFoodList with this data.
     */
    create: XOR<RecipeFoodListCreateInput, RecipeFoodListUncheckedCreateInput>
    /**
     * In case the RecipeFoodList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecipeFoodListUpdateInput, RecipeFoodListUncheckedUpdateInput>
  }


  /**
   * RecipeFoodList delete
   */
  export type RecipeFoodListDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
    /**
     * Filter which RecipeFoodList to delete.
     */
    where: RecipeFoodListWhereUniqueInput
  }


  /**
   * RecipeFoodList deleteMany
   */
  export type RecipeFoodListDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecipeFoodLists to delete
     */
    where?: RecipeFoodListWhereInput
  }


  /**
   * RecipeFoodList without action
   */
  export type RecipeFoodListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecipeFoodList
     */
    select?: RecipeFoodListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecipeFoodListInclude<ExtArgs> | null
  }



  /**
   * Model FoodCategory
   */


  export type AggregateFoodCategory = {
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  export type FoodCategoryAvgAggregateOutputType = {
    foodId: number | null
    categoryId: number | null
  }

  export type FoodCategorySumAggregateOutputType = {
    foodId: number | null
    categoryId: number | null
  }

  export type FoodCategoryMinAggregateOutputType = {
    foodId: number | null
    categoryId: number | null
  }

  export type FoodCategoryMaxAggregateOutputType = {
    foodId: number | null
    categoryId: number | null
  }

  export type FoodCategoryCountAggregateOutputType = {
    foodId: number
    categoryId: number
    _all: number
  }


  export type FoodCategoryAvgAggregateInputType = {
    foodId?: true
    categoryId?: true
  }

  export type FoodCategorySumAggregateInputType = {
    foodId?: true
    categoryId?: true
  }

  export type FoodCategoryMinAggregateInputType = {
    foodId?: true
    categoryId?: true
  }

  export type FoodCategoryMaxAggregateInputType = {
    foodId?: true
    categoryId?: true
  }

  export type FoodCategoryCountAggregateInputType = {
    foodId?: true
    categoryId?: true
    _all?: true
  }

  export type FoodCategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategory to aggregate.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FoodCategories
    **/
    _count?: true | FoodCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FoodCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FoodCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FoodCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FoodCategoryMaxAggregateInputType
  }

  export type GetFoodCategoryAggregateType<T extends FoodCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateFoodCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFoodCategory[P]>
      : GetScalarType<T[P], AggregateFoodCategory[P]>
  }




  export type FoodCategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FoodCategoryWhereInput
    orderBy?: Enumerable<FoodCategoryOrderByWithAggregationInput>
    by: FoodCategoryScalarFieldEnum[]
    having?: FoodCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FoodCategoryCountAggregateInputType | true
    _avg?: FoodCategoryAvgAggregateInputType
    _sum?: FoodCategorySumAggregateInputType
    _min?: FoodCategoryMinAggregateInputType
    _max?: FoodCategoryMaxAggregateInputType
  }


  export type FoodCategoryGroupByOutputType = {
    foodId: number
    categoryId: number
    _count: FoodCategoryCountAggregateOutputType | null
    _avg: FoodCategoryAvgAggregateOutputType | null
    _sum: FoodCategorySumAggregateOutputType | null
    _min: FoodCategoryMinAggregateOutputType | null
    _max: FoodCategoryMaxAggregateOutputType | null
  }

  type GetFoodCategoryGroupByPayload<T extends FoodCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FoodCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FoodCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], FoodCategoryGroupByOutputType[P]>
        }
      >
    >


  export type FoodCategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    foodId?: boolean
    categoryId?: boolean
    food?: boolean | FoodArgs<ExtArgs>
    category?: boolean | CategoryArgs<ExtArgs>
  }, ExtArgs["result"]["foodCategory"]>

  export type FoodCategorySelectScalar = {
    foodId?: boolean
    categoryId?: boolean
  }

  export type FoodCategoryInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    food?: boolean | FoodArgs<ExtArgs>
    category?: boolean | CategoryArgs<ExtArgs>
  }


  type FoodCategoryGetPayload<S extends boolean | null | undefined | FoodCategoryArgs> = $Types.GetResult<FoodCategoryPayload, S>

  type FoodCategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FoodCategoryFindManyArgs, 'select' | 'include'> & {
      select?: FoodCategoryCountAggregateInputType | true
    }

  export interface FoodCategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FoodCategory'], meta: { name: 'FoodCategory' } }
    /**
     * Find zero or one FoodCategory that matches the filter.
     * @param {FoodCategoryFindUniqueArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FoodCategoryFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FoodCategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FoodCategory'> extends True ? Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one FoodCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FoodCategoryFindUniqueOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first FoodCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FoodCategoryFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FoodCategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FoodCategory'> extends True ? Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first FoodCategory that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindFirstOrThrowArgs} args - Arguments to find a FoodCategory
     * @example
     * // Get one FoodCategory
     * const foodCategory = await prisma.foodCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FoodCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more FoodCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany()
     * 
     * // Get first 10 FoodCategories
     * const foodCategories = await prisma.foodCategory.findMany({ take: 10 })
     * 
     * // Only select the `foodId`
     * const foodCategoryWithFoodIdOnly = await prisma.foodCategory.findMany({ select: { foodId: true } })
     * 
    **/
    findMany<T extends FoodCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a FoodCategory.
     * @param {FoodCategoryCreateArgs} args - Arguments to create a FoodCategory.
     * @example
     * // Create one FoodCategory
     * const FoodCategory = await prisma.foodCategory.create({
     *   data: {
     *     // ... data to create a FoodCategory
     *   }
     * })
     * 
    **/
    create<T extends FoodCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCategoryCreateArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many FoodCategories.
     *     @param {FoodCategoryCreateManyArgs} args - Arguments to create many FoodCategories.
     *     @example
     *     // Create many FoodCategories
     *     const foodCategory = await prisma.foodCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FoodCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FoodCategory.
     * @param {FoodCategoryDeleteArgs} args - Arguments to delete one FoodCategory.
     * @example
     * // Delete one FoodCategory
     * const FoodCategory = await prisma.foodCategory.delete({
     *   where: {
     *     // ... filter to delete one FoodCategory
     *   }
     * })
     * 
    **/
    delete<T extends FoodCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCategoryDeleteArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one FoodCategory.
     * @param {FoodCategoryUpdateArgs} args - Arguments to update one FoodCategory.
     * @example
     * // Update one FoodCategory
     * const foodCategory = await prisma.foodCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FoodCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCategoryUpdateArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more FoodCategories.
     * @param {FoodCategoryDeleteManyArgs} args - Arguments to filter FoodCategories to delete.
     * @example
     * // Delete a few FoodCategories
     * const { count } = await prisma.foodCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FoodCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FoodCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FoodCategories
     * const foodCategory = await prisma.foodCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FoodCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FoodCategory.
     * @param {FoodCategoryUpsertArgs} args - Arguments to update or create a FoodCategory.
     * @example
     * // Update or create a FoodCategory
     * const foodCategory = await prisma.foodCategory.upsert({
     *   create: {
     *     // ... data to create a FoodCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FoodCategory we want to update
     *   }
     * })
    **/
    upsert<T extends FoodCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FoodCategoryUpsertArgs<ExtArgs>>
    ): Prisma__FoodCategoryClient<$Types.GetResult<FoodCategoryPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of FoodCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryCountArgs} args - Arguments to filter FoodCategories to count.
     * @example
     * // Count the number of FoodCategories
     * const count = await prisma.foodCategory.count({
     *   where: {
     *     // ... the filter for the FoodCategories we want to count
     *   }
     * })
    **/
    count<T extends FoodCategoryCountArgs>(
      args?: Subset<T, FoodCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FoodCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FoodCategoryAggregateArgs>(args: Subset<T, FoodCategoryAggregateArgs>): Prisma.PrismaPromise<GetFoodCategoryAggregateType<T>>

    /**
     * Group by FoodCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FoodCategoryGroupByArgs} args - Group by arguments.
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
      T extends FoodCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FoodCategoryGroupByArgs['orderBy'] }
        : { orderBy?: FoodCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FoodCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFoodCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FoodCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FoodCategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    food<T extends FoodArgs<ExtArgs> = {}>(args?: Subset<T, FoodArgs<ExtArgs>>): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    category<T extends CategoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryArgs<ExtArgs>>): Prisma__CategoryClient<$Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FoodCategory base type for findUnique actions
   */
  export type FoodCategoryFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }

  /**
   * FoodCategory findUnique
   */
  export interface FoodCategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FoodCategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FoodCategory findUniqueOrThrow
   */
  export type FoodCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where: FoodCategoryWhereUniqueInput
  }


  /**
   * FoodCategory base type for findFirst actions
   */
  export type FoodCategoryFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: Enumerable<FoodCategoryScalarFieldEnum>
  }

  /**
   * FoodCategory findFirst
   */
  export interface FoodCategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FoodCategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FoodCategory findFirstOrThrow
   */
  export type FoodCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategory to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FoodCategories.
     */
    distinct?: Enumerable<FoodCategoryScalarFieldEnum>
  }


  /**
   * FoodCategory findMany
   */
  export type FoodCategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter, which FoodCategories to fetch.
     */
    where?: FoodCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FoodCategories to fetch.
     */
    orderBy?: Enumerable<FoodCategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FoodCategories.
     */
    cursor?: FoodCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FoodCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FoodCategories.
     */
    skip?: number
    distinct?: Enumerable<FoodCategoryScalarFieldEnum>
  }


  /**
   * FoodCategory create
   */
  export type FoodCategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a FoodCategory.
     */
    data: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
  }


  /**
   * FoodCategory createMany
   */
  export type FoodCategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FoodCategories.
     */
    data: Enumerable<FoodCategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FoodCategory update
   */
  export type FoodCategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a FoodCategory.
     */
    data: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
    /**
     * Choose, which FoodCategory to update.
     */
    where: FoodCategoryWhereUniqueInput
  }


  /**
   * FoodCategory updateMany
   */
  export type FoodCategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FoodCategories.
     */
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyInput>
    /**
     * Filter which FoodCategories to update
     */
    where?: FoodCategoryWhereInput
  }


  /**
   * FoodCategory upsert
   */
  export type FoodCategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the FoodCategory to update in case it exists.
     */
    where: FoodCategoryWhereUniqueInput
    /**
     * In case the FoodCategory found by the `where` argument doesn't exist, create a new FoodCategory with this data.
     */
    create: XOR<FoodCategoryCreateInput, FoodCategoryUncheckedCreateInput>
    /**
     * In case the FoodCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FoodCategoryUpdateInput, FoodCategoryUncheckedUpdateInput>
  }


  /**
   * FoodCategory delete
   */
  export type FoodCategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
    /**
     * Filter which FoodCategory to delete.
     */
    where: FoodCategoryWhereUniqueInput
  }


  /**
   * FoodCategory deleteMany
   */
  export type FoodCategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FoodCategories to delete
     */
    where?: FoodCategoryWhereInput
  }


  /**
   * FoodCategory without action
   */
  export type FoodCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FoodCategory
     */
    select?: FoodCategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FoodCategoryInclude<ExtArgs> | null
  }



  /**
   * Model ToBuyList
   */


  export type AggregateToBuyList = {
    _count: ToBuyListCountAggregateOutputType | null
    _avg: ToBuyListAvgAggregateOutputType | null
    _sum: ToBuyListSumAggregateOutputType | null
    _min: ToBuyListMinAggregateOutputType | null
    _max: ToBuyListMaxAggregateOutputType | null
  }

  export type ToBuyListAvgAggregateOutputType = {
    toBuyListId: number | null
    ownerId: number | null
    groupOwnerId: number | null
  }

  export type ToBuyListSumAggregateOutputType = {
    toBuyListId: number | null
    ownerId: number | null
    groupOwnerId: number | null
  }

  export type ToBuyListMinAggregateOutputType = {
    toBuyListId: number | null
    date: Date | null
    ownerId: number | null
    groupOwnerId: number | null
  }

  export type ToBuyListMaxAggregateOutputType = {
    toBuyListId: number | null
    date: Date | null
    ownerId: number | null
    groupOwnerId: number | null
  }

  export type ToBuyListCountAggregateOutputType = {
    toBuyListId: number
    date: number
    ownerId: number
    groupOwnerId: number
    _all: number
  }


  export type ToBuyListAvgAggregateInputType = {
    toBuyListId?: true
    ownerId?: true
    groupOwnerId?: true
  }

  export type ToBuyListSumAggregateInputType = {
    toBuyListId?: true
    ownerId?: true
    groupOwnerId?: true
  }

  export type ToBuyListMinAggregateInputType = {
    toBuyListId?: true
    date?: true
    ownerId?: true
    groupOwnerId?: true
  }

  export type ToBuyListMaxAggregateInputType = {
    toBuyListId?: true
    date?: true
    ownerId?: true
    groupOwnerId?: true
  }

  export type ToBuyListCountAggregateInputType = {
    toBuyListId?: true
    date?: true
    ownerId?: true
    groupOwnerId?: true
    _all?: true
  }

  export type ToBuyListAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToBuyList to aggregate.
     */
    where?: ToBuyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyLists to fetch.
     */
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToBuyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToBuyLists
    **/
    _count?: true | ToBuyListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToBuyListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToBuyListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToBuyListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToBuyListMaxAggregateInputType
  }

  export type GetToBuyListAggregateType<T extends ToBuyListAggregateArgs> = {
        [P in keyof T & keyof AggregateToBuyList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToBuyList[P]>
      : GetScalarType<T[P], AggregateToBuyList[P]>
  }




  export type ToBuyListGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListWhereInput
    orderBy?: Enumerable<ToBuyListOrderByWithAggregationInput>
    by: ToBuyListScalarFieldEnum[]
    having?: ToBuyListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToBuyListCountAggregateInputType | true
    _avg?: ToBuyListAvgAggregateInputType
    _sum?: ToBuyListSumAggregateInputType
    _min?: ToBuyListMinAggregateInputType
    _max?: ToBuyListMaxAggregateInputType
  }


  export type ToBuyListGroupByOutputType = {
    toBuyListId: number
    date: Date
    ownerId: number | null
    groupOwnerId: number | null
    _count: ToBuyListCountAggregateOutputType | null
    _avg: ToBuyListAvgAggregateOutputType | null
    _sum: ToBuyListSumAggregateOutputType | null
    _min: ToBuyListMinAggregateOutputType | null
    _max: ToBuyListMaxAggregateOutputType | null
  }

  type GetToBuyListGroupByPayload<T extends ToBuyListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ToBuyListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToBuyListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToBuyListGroupByOutputType[P]>
            : GetScalarType<T[P], ToBuyListGroupByOutputType[P]>
        }
      >
    >


  export type ToBuyListSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toBuyListId?: boolean
    date?: boolean
    ownerId?: boolean
    groupOwnerId?: boolean
    toBuyListDetails?: boolean | ToBuyList$toBuyListDetailsArgs<ExtArgs>
    owner?: boolean | UserArgs<ExtArgs>
    groupOwner?: boolean | GGroupArgs<ExtArgs>
    _count?: boolean | ToBuyListCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["toBuyList"]>

  export type ToBuyListSelectScalar = {
    toBuyListId?: boolean
    date?: boolean
    ownerId?: boolean
    groupOwnerId?: boolean
  }

  export type ToBuyListInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    toBuyListDetails?: boolean | ToBuyList$toBuyListDetailsArgs<ExtArgs>
    owner?: boolean | UserArgs<ExtArgs>
    groupOwner?: boolean | GGroupArgs<ExtArgs>
    _count?: boolean | ToBuyListCountOutputTypeArgs<ExtArgs>
  }


  type ToBuyListGetPayload<S extends boolean | null | undefined | ToBuyListArgs> = $Types.GetResult<ToBuyListPayload, S>

  type ToBuyListCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ToBuyListFindManyArgs, 'select' | 'include'> & {
      select?: ToBuyListCountAggregateInputType | true
    }

  export interface ToBuyListDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToBuyList'], meta: { name: 'ToBuyList' } }
    /**
     * Find zero or one ToBuyList that matches the filter.
     * @param {ToBuyListFindUniqueArgs} args - Arguments to find a ToBuyList
     * @example
     * // Get one ToBuyList
     * const toBuyList = await prisma.toBuyList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ToBuyListFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ToBuyListFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ToBuyList'> extends True ? Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ToBuyList that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ToBuyListFindUniqueOrThrowArgs} args - Arguments to find a ToBuyList
     * @example
     * // Get one ToBuyList
     * const toBuyList = await prisma.toBuyList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ToBuyListFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ToBuyList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListFindFirstArgs} args - Arguments to find a ToBuyList
     * @example
     * // Get one ToBuyList
     * const toBuyList = await prisma.toBuyList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ToBuyListFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ToBuyListFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ToBuyList'> extends True ? Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ToBuyList that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListFindFirstOrThrowArgs} args - Arguments to find a ToBuyList
     * @example
     * // Get one ToBuyList
     * const toBuyList = await prisma.toBuyList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ToBuyListFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ToBuyLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToBuyLists
     * const toBuyLists = await prisma.toBuyList.findMany()
     * 
     * // Get first 10 ToBuyLists
     * const toBuyLists = await prisma.toBuyList.findMany({ take: 10 })
     * 
     * // Only select the `toBuyListId`
     * const toBuyListWithToBuyListIdOnly = await prisma.toBuyList.findMany({ select: { toBuyListId: true } })
     * 
    **/
    findMany<T extends ToBuyListFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ToBuyList.
     * @param {ToBuyListCreateArgs} args - Arguments to create a ToBuyList.
     * @example
     * // Create one ToBuyList
     * const ToBuyList = await prisma.toBuyList.create({
     *   data: {
     *     // ... data to create a ToBuyList
     *   }
     * })
     * 
    **/
    create<T extends ToBuyListCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListCreateArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ToBuyLists.
     *     @param {ToBuyListCreateManyArgs} args - Arguments to create many ToBuyLists.
     *     @example
     *     // Create many ToBuyLists
     *     const toBuyList = await prisma.toBuyList.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ToBuyListCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ToBuyList.
     * @param {ToBuyListDeleteArgs} args - Arguments to delete one ToBuyList.
     * @example
     * // Delete one ToBuyList
     * const ToBuyList = await prisma.toBuyList.delete({
     *   where: {
     *     // ... filter to delete one ToBuyList
     *   }
     * })
     * 
    **/
    delete<T extends ToBuyListDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDeleteArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ToBuyList.
     * @param {ToBuyListUpdateArgs} args - Arguments to update one ToBuyList.
     * @example
     * // Update one ToBuyList
     * const toBuyList = await prisma.toBuyList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ToBuyListUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListUpdateArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ToBuyLists.
     * @param {ToBuyListDeleteManyArgs} args - Arguments to filter ToBuyLists to delete.
     * @example
     * // Delete a few ToBuyLists
     * const { count } = await prisma.toBuyList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ToBuyListDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToBuyLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToBuyLists
     * const toBuyList = await prisma.toBuyList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ToBuyListUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ToBuyList.
     * @param {ToBuyListUpsertArgs} args - Arguments to update or create a ToBuyList.
     * @example
     * // Update or create a ToBuyList
     * const toBuyList = await prisma.toBuyList.upsert({
     *   create: {
     *     // ... data to create a ToBuyList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToBuyList we want to update
     *   }
     * })
    **/
    upsert<T extends ToBuyListUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListUpsertArgs<ExtArgs>>
    ): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ToBuyLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListCountArgs} args - Arguments to filter ToBuyLists to count.
     * @example
     * // Count the number of ToBuyLists
     * const count = await prisma.toBuyList.count({
     *   where: {
     *     // ... the filter for the ToBuyLists we want to count
     *   }
     * })
    **/
    count<T extends ToBuyListCountArgs>(
      args?: Subset<T, ToBuyListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToBuyListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToBuyList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToBuyListAggregateArgs>(args: Subset<T, ToBuyListAggregateArgs>): Prisma.PrismaPromise<GetToBuyListAggregateType<T>>

    /**
     * Group by ToBuyList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListGroupByArgs} args - Group by arguments.
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
      T extends ToBuyListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToBuyListGroupByArgs['orderBy'] }
        : { orderBy?: ToBuyListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ToBuyListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToBuyListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ToBuyList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ToBuyListClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    toBuyListDetails<T extends ToBuyList$toBuyListDetailsArgs<ExtArgs> = {}>(args?: Subset<T, ToBuyList$toBuyListDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findMany', never>| Null>;

    owner<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    groupOwner<T extends GGroupArgs<ExtArgs> = {}>(args?: Subset<T, GGroupArgs<ExtArgs>>): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ToBuyList base type for findUnique actions
   */
  export type ToBuyListFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyList to fetch.
     */
    where: ToBuyListWhereUniqueInput
  }

  /**
   * ToBuyList findUnique
   */
  export interface ToBuyListFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ToBuyListFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ToBuyList findUniqueOrThrow
   */
  export type ToBuyListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyList to fetch.
     */
    where: ToBuyListWhereUniqueInput
  }


  /**
   * ToBuyList base type for findFirst actions
   */
  export type ToBuyListFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyList to fetch.
     */
    where?: ToBuyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyLists to fetch.
     */
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToBuyLists.
     */
    cursor?: ToBuyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToBuyLists.
     */
    distinct?: Enumerable<ToBuyListScalarFieldEnum>
  }

  /**
   * ToBuyList findFirst
   */
  export interface ToBuyListFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ToBuyListFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ToBuyList findFirstOrThrow
   */
  export type ToBuyListFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyList to fetch.
     */
    where?: ToBuyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyLists to fetch.
     */
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToBuyLists.
     */
    cursor?: ToBuyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToBuyLists.
     */
    distinct?: Enumerable<ToBuyListScalarFieldEnum>
  }


  /**
   * ToBuyList findMany
   */
  export type ToBuyListFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyLists to fetch.
     */
    where?: ToBuyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyLists to fetch.
     */
    orderBy?: Enumerable<ToBuyListOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToBuyLists.
     */
    cursor?: ToBuyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyLists.
     */
    skip?: number
    distinct?: Enumerable<ToBuyListScalarFieldEnum>
  }


  /**
   * ToBuyList create
   */
  export type ToBuyListCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * The data needed to create a ToBuyList.
     */
    data: XOR<ToBuyListCreateInput, ToBuyListUncheckedCreateInput>
  }


  /**
   * ToBuyList createMany
   */
  export type ToBuyListCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToBuyLists.
     */
    data: Enumerable<ToBuyListCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ToBuyList update
   */
  export type ToBuyListUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * The data needed to update a ToBuyList.
     */
    data: XOR<ToBuyListUpdateInput, ToBuyListUncheckedUpdateInput>
    /**
     * Choose, which ToBuyList to update.
     */
    where: ToBuyListWhereUniqueInput
  }


  /**
   * ToBuyList updateMany
   */
  export type ToBuyListUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToBuyLists.
     */
    data: XOR<ToBuyListUpdateManyMutationInput, ToBuyListUncheckedUpdateManyInput>
    /**
     * Filter which ToBuyLists to update
     */
    where?: ToBuyListWhereInput
  }


  /**
   * ToBuyList upsert
   */
  export type ToBuyListUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * The filter to search for the ToBuyList to update in case it exists.
     */
    where: ToBuyListWhereUniqueInput
    /**
     * In case the ToBuyList found by the `where` argument doesn't exist, create a new ToBuyList with this data.
     */
    create: XOR<ToBuyListCreateInput, ToBuyListUncheckedCreateInput>
    /**
     * In case the ToBuyList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToBuyListUpdateInput, ToBuyListUncheckedUpdateInput>
  }


  /**
   * ToBuyList delete
   */
  export type ToBuyListDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
    /**
     * Filter which ToBuyList to delete.
     */
    where: ToBuyListWhereUniqueInput
  }


  /**
   * ToBuyList deleteMany
   */
  export type ToBuyListDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToBuyLists to delete
     */
    where?: ToBuyListWhereInput
  }


  /**
   * ToBuyList.toBuyListDetails
   */
  export type ToBuyList$toBuyListDetailsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    where?: ToBuyListDetailWhereInput
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    cursor?: ToBuyListDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ToBuyListDetailScalarFieldEnum>
  }


  /**
   * ToBuyList without action
   */
  export type ToBuyListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyList
     */
    select?: ToBuyListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListInclude<ExtArgs> | null
  }



  /**
   * Model FavoriteRecipe
   */


  export type AggregateFavoriteRecipe = {
    _count: FavoriteRecipeCountAggregateOutputType | null
    _avg: FavoriteRecipeAvgAggregateOutputType | null
    _sum: FavoriteRecipeSumAggregateOutputType | null
    _min: FavoriteRecipeMinAggregateOutputType | null
    _max: FavoriteRecipeMaxAggregateOutputType | null
  }

  export type FavoriteRecipeAvgAggregateOutputType = {
    userId: number | null
    recipeId: number | null
  }

  export type FavoriteRecipeSumAggregateOutputType = {
    userId: number | null
    recipeId: number | null
  }

  export type FavoriteRecipeMinAggregateOutputType = {
    userId: number | null
    recipeId: number | null
  }

  export type FavoriteRecipeMaxAggregateOutputType = {
    userId: number | null
    recipeId: number | null
  }

  export type FavoriteRecipeCountAggregateOutputType = {
    userId: number
    recipeId: number
    _all: number
  }


  export type FavoriteRecipeAvgAggregateInputType = {
    userId?: true
    recipeId?: true
  }

  export type FavoriteRecipeSumAggregateInputType = {
    userId?: true
    recipeId?: true
  }

  export type FavoriteRecipeMinAggregateInputType = {
    userId?: true
    recipeId?: true
  }

  export type FavoriteRecipeMaxAggregateInputType = {
    userId?: true
    recipeId?: true
  }

  export type FavoriteRecipeCountAggregateInputType = {
    userId?: true
    recipeId?: true
    _all?: true
  }

  export type FavoriteRecipeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipe to aggregate.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FavoriteRecipes
    **/
    _count?: true | FavoriteRecipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavoriteRecipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavoriteRecipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteRecipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteRecipeMaxAggregateInputType
  }

  export type GetFavoriteRecipeAggregateType<T extends FavoriteRecipeAggregateArgs> = {
        [P in keyof T & keyof AggregateFavoriteRecipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavoriteRecipe[P]>
      : GetScalarType<T[P], AggregateFavoriteRecipe[P]>
  }




  export type FavoriteRecipeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FavoriteRecipeWhereInput
    orderBy?: Enumerable<FavoriteRecipeOrderByWithAggregationInput>
    by: FavoriteRecipeScalarFieldEnum[]
    having?: FavoriteRecipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteRecipeCountAggregateInputType | true
    _avg?: FavoriteRecipeAvgAggregateInputType
    _sum?: FavoriteRecipeSumAggregateInputType
    _min?: FavoriteRecipeMinAggregateInputType
    _max?: FavoriteRecipeMaxAggregateInputType
  }


  export type FavoriteRecipeGroupByOutputType = {
    userId: number
    recipeId: number
    _count: FavoriteRecipeCountAggregateOutputType | null
    _avg: FavoriteRecipeAvgAggregateOutputType | null
    _sum: FavoriteRecipeSumAggregateOutputType | null
    _min: FavoriteRecipeMinAggregateOutputType | null
    _max: FavoriteRecipeMaxAggregateOutputType | null
  }

  type GetFavoriteRecipeGroupByPayload<T extends FavoriteRecipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FavoriteRecipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteRecipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteRecipeGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteRecipeGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteRecipeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    recipeId?: boolean
    user?: boolean | UserArgs<ExtArgs>
    recipe?: boolean | RecipeArgs<ExtArgs>
  }, ExtArgs["result"]["favoriteRecipe"]>

  export type FavoriteRecipeSelectScalar = {
    userId?: boolean
    recipeId?: boolean
  }

  export type FavoriteRecipeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
    recipe?: boolean | RecipeArgs<ExtArgs>
  }


  type FavoriteRecipeGetPayload<S extends boolean | null | undefined | FavoriteRecipeArgs> = $Types.GetResult<FavoriteRecipePayload, S>

  type FavoriteRecipeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FavoriteRecipeFindManyArgs, 'select' | 'include'> & {
      select?: FavoriteRecipeCountAggregateInputType | true
    }

  export interface FavoriteRecipeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FavoriteRecipe'], meta: { name: 'FavoriteRecipe' } }
    /**
     * Find zero or one FavoriteRecipe that matches the filter.
     * @param {FavoriteRecipeFindUniqueArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FavoriteRecipeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FavoriteRecipeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FavoriteRecipe'> extends True ? Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one FavoriteRecipe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FavoriteRecipeFindUniqueOrThrowArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first FavoriteRecipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindFirstArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FavoriteRecipeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FavoriteRecipeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FavoriteRecipe'> extends True ? Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first FavoriteRecipe that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindFirstOrThrowArgs} args - Arguments to find a FavoriteRecipe
     * @example
     * // Get one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FavoriteRecipeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteRecipeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more FavoriteRecipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipe.findMany()
     * 
     * // Get first 10 FavoriteRecipes
     * const favoriteRecipes = await prisma.favoriteRecipe.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const favoriteRecipeWithUserIdOnly = await prisma.favoriteRecipe.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends FavoriteRecipeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteRecipeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a FavoriteRecipe.
     * @param {FavoriteRecipeCreateArgs} args - Arguments to create a FavoriteRecipe.
     * @example
     * // Create one FavoriteRecipe
     * const FavoriteRecipe = await prisma.favoriteRecipe.create({
     *   data: {
     *     // ... data to create a FavoriteRecipe
     *   }
     * })
     * 
    **/
    create<T extends FavoriteRecipeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteRecipeCreateArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many FavoriteRecipes.
     *     @param {FavoriteRecipeCreateManyArgs} args - Arguments to create many FavoriteRecipes.
     *     @example
     *     // Create many FavoriteRecipes
     *     const favoriteRecipe = await prisma.favoriteRecipe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FavoriteRecipeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteRecipeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FavoriteRecipe.
     * @param {FavoriteRecipeDeleteArgs} args - Arguments to delete one FavoriteRecipe.
     * @example
     * // Delete one FavoriteRecipe
     * const FavoriteRecipe = await prisma.favoriteRecipe.delete({
     *   where: {
     *     // ... filter to delete one FavoriteRecipe
     *   }
     * })
     * 
    **/
    delete<T extends FavoriteRecipeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteRecipeDeleteArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one FavoriteRecipe.
     * @param {FavoriteRecipeUpdateArgs} args - Arguments to update one FavoriteRecipe.
     * @example
     * // Update one FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FavoriteRecipeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteRecipeUpdateArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more FavoriteRecipes.
     * @param {FavoriteRecipeDeleteManyArgs} args - Arguments to filter FavoriteRecipes to delete.
     * @example
     * // Delete a few FavoriteRecipes
     * const { count } = await prisma.favoriteRecipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FavoriteRecipeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FavoriteRecipeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FavoriteRecipes
     * const favoriteRecipe = await prisma.favoriteRecipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FavoriteRecipeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteRecipeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FavoriteRecipe.
     * @param {FavoriteRecipeUpsertArgs} args - Arguments to update or create a FavoriteRecipe.
     * @example
     * // Update or create a FavoriteRecipe
     * const favoriteRecipe = await prisma.favoriteRecipe.upsert({
     *   create: {
     *     // ... data to create a FavoriteRecipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FavoriteRecipe we want to update
     *   }
     * })
    **/
    upsert<T extends FavoriteRecipeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FavoriteRecipeUpsertArgs<ExtArgs>>
    ): Prisma__FavoriteRecipeClient<$Types.GetResult<FavoriteRecipePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of FavoriteRecipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeCountArgs} args - Arguments to filter FavoriteRecipes to count.
     * @example
     * // Count the number of FavoriteRecipes
     * const count = await prisma.favoriteRecipe.count({
     *   where: {
     *     // ... the filter for the FavoriteRecipes we want to count
     *   }
     * })
    **/
    count<T extends FavoriteRecipeCountArgs>(
      args?: Subset<T, FavoriteRecipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteRecipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FavoriteRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteRecipeAggregateArgs>(args: Subset<T, FavoriteRecipeAggregateArgs>): Prisma.PrismaPromise<GetFavoriteRecipeAggregateType<T>>

    /**
     * Group by FavoriteRecipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteRecipeGroupByArgs} args - Group by arguments.
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
      T extends FavoriteRecipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteRecipeGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteRecipeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteRecipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteRecipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FavoriteRecipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FavoriteRecipeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    recipe<T extends RecipeArgs<ExtArgs> = {}>(args?: Subset<T, RecipeArgs<ExtArgs>>): Prisma__RecipeClient<$Types.GetResult<RecipePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FavoriteRecipe base type for findUnique actions
   */
  export type FavoriteRecipeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where: FavoriteRecipeWhereUniqueInput
  }

  /**
   * FavoriteRecipe findUnique
   */
  export interface FavoriteRecipeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FavoriteRecipeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FavoriteRecipe findUniqueOrThrow
   */
  export type FavoriteRecipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where: FavoriteRecipeWhereUniqueInput
  }


  /**
   * FavoriteRecipe base type for findFirst actions
   */
  export type FavoriteRecipeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: Enumerable<FavoriteRecipeScalarFieldEnum>
  }

  /**
   * FavoriteRecipe findFirst
   */
  export interface FavoriteRecipeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FavoriteRecipeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FavoriteRecipe findFirstOrThrow
   */
  export type FavoriteRecipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipe to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FavoriteRecipes.
     */
    distinct?: Enumerable<FavoriteRecipeScalarFieldEnum>
  }


  /**
   * FavoriteRecipe findMany
   */
  export type FavoriteRecipeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter, which FavoriteRecipes to fetch.
     */
    where?: FavoriteRecipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FavoriteRecipes to fetch.
     */
    orderBy?: Enumerable<FavoriteRecipeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FavoriteRecipes.
     */
    cursor?: FavoriteRecipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FavoriteRecipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FavoriteRecipes.
     */
    skip?: number
    distinct?: Enumerable<FavoriteRecipeScalarFieldEnum>
  }


  /**
   * FavoriteRecipe create
   */
  export type FavoriteRecipeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The data needed to create a FavoriteRecipe.
     */
    data: XOR<FavoriteRecipeCreateInput, FavoriteRecipeUncheckedCreateInput>
  }


  /**
   * FavoriteRecipe createMany
   */
  export type FavoriteRecipeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FavoriteRecipes.
     */
    data: Enumerable<FavoriteRecipeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FavoriteRecipe update
   */
  export type FavoriteRecipeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The data needed to update a FavoriteRecipe.
     */
    data: XOR<FavoriteRecipeUpdateInput, FavoriteRecipeUncheckedUpdateInput>
    /**
     * Choose, which FavoriteRecipe to update.
     */
    where: FavoriteRecipeWhereUniqueInput
  }


  /**
   * FavoriteRecipe updateMany
   */
  export type FavoriteRecipeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FavoriteRecipes.
     */
    data: XOR<FavoriteRecipeUpdateManyMutationInput, FavoriteRecipeUncheckedUpdateManyInput>
    /**
     * Filter which FavoriteRecipes to update
     */
    where?: FavoriteRecipeWhereInput
  }


  /**
   * FavoriteRecipe upsert
   */
  export type FavoriteRecipeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * The filter to search for the FavoriteRecipe to update in case it exists.
     */
    where: FavoriteRecipeWhereUniqueInput
    /**
     * In case the FavoriteRecipe found by the `where` argument doesn't exist, create a new FavoriteRecipe with this data.
     */
    create: XOR<FavoriteRecipeCreateInput, FavoriteRecipeUncheckedCreateInput>
    /**
     * In case the FavoriteRecipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteRecipeUpdateInput, FavoriteRecipeUncheckedUpdateInput>
  }


  /**
   * FavoriteRecipe delete
   */
  export type FavoriteRecipeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
    /**
     * Filter which FavoriteRecipe to delete.
     */
    where: FavoriteRecipeWhereUniqueInput
  }


  /**
   * FavoriteRecipe deleteMany
   */
  export type FavoriteRecipeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FavoriteRecipes to delete
     */
    where?: FavoriteRecipeWhereInput
  }


  /**
   * FavoriteRecipe without action
   */
  export type FavoriteRecipeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FavoriteRecipe
     */
    select?: FavoriteRecipeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FavoriteRecipeInclude<ExtArgs> | null
  }



  /**
   * Model GroupMember
   */


  export type AggregateGroupMember = {
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  export type GroupMemberAvgAggregateOutputType = {
    groupId: number | null
    userId: number | null
  }

  export type GroupMemberSumAggregateOutputType = {
    groupId: number | null
    userId: number | null
  }

  export type GroupMemberMinAggregateOutputType = {
    groupId: number | null
    userId: number | null
    isGroupAdmin: boolean | null
  }

  export type GroupMemberMaxAggregateOutputType = {
    groupId: number | null
    userId: number | null
    isGroupAdmin: boolean | null
  }

  export type GroupMemberCountAggregateOutputType = {
    groupId: number
    userId: number
    isGroupAdmin: number
    _all: number
  }


  export type GroupMemberAvgAggregateInputType = {
    groupId?: true
    userId?: true
  }

  export type GroupMemberSumAggregateInputType = {
    groupId?: true
    userId?: true
  }

  export type GroupMemberMinAggregateInputType = {
    groupId?: true
    userId?: true
    isGroupAdmin?: true
  }

  export type GroupMemberMaxAggregateInputType = {
    groupId?: true
    userId?: true
    isGroupAdmin?: true
  }

  export type GroupMemberCountAggregateInputType = {
    groupId?: true
    userId?: true
    isGroupAdmin?: true
    _all?: true
  }

  export type GroupMemberAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMember to aggregate.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMemberMaxAggregateInputType
  }

  export type GetGroupMemberAggregateType<T extends GroupMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMember[P]>
      : GetScalarType<T[P], AggregateGroupMember[P]>
  }




  export type GroupMemberGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GroupMemberWhereInput
    orderBy?: Enumerable<GroupMemberOrderByWithAggregationInput>
    by: GroupMemberScalarFieldEnum[]
    having?: GroupMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMemberCountAggregateInputType | true
    _avg?: GroupMemberAvgAggregateInputType
    _sum?: GroupMemberSumAggregateInputType
    _min?: GroupMemberMinAggregateInputType
    _max?: GroupMemberMaxAggregateInputType
  }


  export type GroupMemberGroupByOutputType = {
    groupId: number
    userId: number
    isGroupAdmin: boolean
    _count: GroupMemberCountAggregateOutputType | null
    _avg: GroupMemberAvgAggregateOutputType | null
    _sum: GroupMemberSumAggregateOutputType | null
    _min: GroupMemberMinAggregateOutputType | null
    _max: GroupMemberMaxAggregateOutputType | null
  }

  type GetGroupMemberGroupByPayload<T extends GroupMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<GroupMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMemberGroupByOutputType[P]>
        }
      >
    >


  export type GroupMemberSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    groupId?: boolean
    userId?: boolean
    isGroupAdmin?: boolean
    group?: boolean | GGroupArgs<ExtArgs>
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["groupMember"]>

  export type GroupMemberSelectScalar = {
    groupId?: boolean
    userId?: boolean
    isGroupAdmin?: boolean
  }

  export type GroupMemberInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    group?: boolean | GGroupArgs<ExtArgs>
    user?: boolean | UserArgs<ExtArgs>
  }


  type GroupMemberGetPayload<S extends boolean | null | undefined | GroupMemberArgs> = $Types.GetResult<GroupMemberPayload, S>

  type GroupMemberCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GroupMemberFindManyArgs, 'select' | 'include'> & {
      select?: GroupMemberCountAggregateInputType | true
    }

  export interface GroupMemberDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMember'], meta: { name: 'GroupMember' } }
    /**
     * Find zero or one GroupMember that matches the filter.
     * @param {GroupMemberFindUniqueArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupMemberFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, GroupMemberFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'GroupMember'> extends True ? Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one GroupMember that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupMemberFindUniqueOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupMemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupMemberFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, GroupMemberFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'GroupMember'> extends True ? Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first GroupMember that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindFirstOrThrowArgs} args - Arguments to find a GroupMember
     * @example
     * // Get one GroupMember
     * const groupMember = await prisma.groupMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupMemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMember.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMember.findMany({ take: 10 })
     * 
     * // Only select the `groupId`
     * const groupMemberWithGroupIdOnly = await prisma.groupMember.findMany({ select: { groupId: true } })
     * 
    **/
    findMany<T extends GroupMemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a GroupMember.
     * @param {GroupMemberCreateArgs} args - Arguments to create a GroupMember.
     * @example
     * // Create one GroupMember
     * const GroupMember = await prisma.groupMember.create({
     *   data: {
     *     // ... data to create a GroupMember
     *   }
     * })
     * 
    **/
    create<T extends GroupMemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberCreateArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many GroupMembers.
     *     @param {GroupMemberCreateManyArgs} args - Arguments to create many GroupMembers.
     *     @example
     *     // Create many GroupMembers
     *     const groupMember = await prisma.groupMember.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupMemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GroupMember.
     * @param {GroupMemberDeleteArgs} args - Arguments to delete one GroupMember.
     * @example
     * // Delete one GroupMember
     * const GroupMember = await prisma.groupMember.delete({
     *   where: {
     *     // ... filter to delete one GroupMember
     *   }
     * })
     * 
    **/
    delete<T extends GroupMemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberDeleteArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one GroupMember.
     * @param {GroupMemberUpdateArgs} args - Arguments to update one GroupMember.
     * @example
     * // Update one GroupMember
     * const groupMember = await prisma.groupMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupMemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpdateArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMemberDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupMemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupMemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMember = await prisma.groupMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupMemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GroupMember.
     * @param {GroupMemberUpsertArgs} args - Arguments to update or create a GroupMember.
     * @example
     * // Update or create a GroupMember
     * const groupMember = await prisma.groupMember.upsert({
     *   create: {
     *     // ... data to create a GroupMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMember we want to update
     *   }
     * })
    **/
    upsert<T extends GroupMemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupMemberUpsertArgs<ExtArgs>>
    ): Prisma__GroupMemberClient<$Types.GetResult<GroupMemberPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMember.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMemberCountArgs>(
      args?: Subset<T, GroupMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupMemberAggregateArgs>(args: Subset<T, GroupMemberAggregateArgs>): Prisma.PrismaPromise<GetGroupMemberAggregateType<T>>

    /**
     * Group by GroupMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMemberGroupByArgs} args - Group by arguments.
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
      T extends GroupMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMemberGroupByArgs['orderBy'] }
        : { orderBy?: GroupMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GroupMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupMemberClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    group<T extends GGroupArgs<ExtArgs> = {}>(args?: Subset<T, GGroupArgs<ExtArgs>>): Prisma__GGroupClient<$Types.GetResult<GGroupPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * GroupMember base type for findUnique actions
   */
  export type GroupMemberFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }

  /**
   * GroupMember findUnique
   */
  export interface GroupMemberFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupMemberFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMember findUniqueOrThrow
   */
  export type GroupMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember base type for findFirst actions
   */
  export type GroupMemberFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: Enumerable<GroupMemberScalarFieldEnum>
  }

  /**
   * GroupMember findFirst
   */
  export interface GroupMemberFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends GroupMemberFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * GroupMember findFirstOrThrow
   */
  export type GroupMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMember to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: Enumerable<GroupMemberScalarFieldEnum>
  }


  /**
   * GroupMember findMany
   */
  export type GroupMemberFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: Enumerable<GroupMemberOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: Enumerable<GroupMemberScalarFieldEnum>
  }


  /**
   * GroupMember create
   */
  export type GroupMemberCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMember.
     */
    data: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
  }


  /**
   * GroupMember createMany
   */
  export type GroupMemberCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: Enumerable<GroupMemberCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * GroupMember update
   */
  export type GroupMemberUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMember.
     */
    data: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
    /**
     * Choose, which GroupMember to update.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember updateMany
   */
  export type GroupMemberUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMemberWhereInput
  }


  /**
   * GroupMember upsert
   */
  export type GroupMemberUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMember to update in case it exists.
     */
    where: GroupMemberWhereUniqueInput
    /**
     * In case the GroupMember found by the `where` argument doesn't exist, create a new GroupMember with this data.
     */
    create: XOR<GroupMemberCreateInput, GroupMemberUncheckedCreateInput>
    /**
     * In case the GroupMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMemberUpdateInput, GroupMemberUncheckedUpdateInput>
  }


  /**
   * GroupMember delete
   */
  export type GroupMemberDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
    /**
     * Filter which GroupMember to delete.
     */
    where: GroupMemberWhereUniqueInput
  }


  /**
   * GroupMember deleteMany
   */
  export type GroupMemberDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMemberWhereInput
  }


  /**
   * GroupMember without action
   */
  export type GroupMemberArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMember
     */
    select?: GroupMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupMemberInclude<ExtArgs> | null
  }



  /**
   * Model StorageFood
   */


  export type AggregateStorageFood = {
    _count: StorageFoodCountAggregateOutputType | null
    _avg: StorageFoodAvgAggregateOutputType | null
    _sum: StorageFoodSumAggregateOutputType | null
    _min: StorageFoodMinAggregateOutputType | null
    _max: StorageFoodMaxAggregateOutputType | null
  }

  export type StorageFoodAvgAggregateOutputType = {
    storageFoodId: number | null
    quantity: number | null
    foodId: number | null
    storageId: number | null
  }

  export type StorageFoodSumAggregateOutputType = {
    storageFoodId: number | null
    quantity: number | null
    foodId: number | null
    storageId: number | null
  }

  export type StorageFoodMinAggregateOutputType = {
    storageFoodId: number | null
    storageDate: Date | null
    outdate: Date | null
    quantity: number | null
    foodId: number | null
    storageId: number | null
  }

  export type StorageFoodMaxAggregateOutputType = {
    storageFoodId: number | null
    storageDate: Date | null
    outdate: Date | null
    quantity: number | null
    foodId: number | null
    storageId: number | null
  }

  export type StorageFoodCountAggregateOutputType = {
    storageFoodId: number
    storageDate: number
    outdate: number
    quantity: number
    foodId: number
    storageId: number
    _all: number
  }


  export type StorageFoodAvgAggregateInputType = {
    storageFoodId?: true
    quantity?: true
    foodId?: true
    storageId?: true
  }

  export type StorageFoodSumAggregateInputType = {
    storageFoodId?: true
    quantity?: true
    foodId?: true
    storageId?: true
  }

  export type StorageFoodMinAggregateInputType = {
    storageFoodId?: true
    storageDate?: true
    outdate?: true
    quantity?: true
    foodId?: true
    storageId?: true
  }

  export type StorageFoodMaxAggregateInputType = {
    storageFoodId?: true
    storageDate?: true
    outdate?: true
    quantity?: true
    foodId?: true
    storageId?: true
  }

  export type StorageFoodCountAggregateInputType = {
    storageFoodId?: true
    storageDate?: true
    outdate?: true
    quantity?: true
    foodId?: true
    storageId?: true
    _all?: true
  }

  export type StorageFoodAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFood to aggregate.
     */
    where?: StorageFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFoods to fetch.
     */
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StorageFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StorageFoods
    **/
    _count?: true | StorageFoodCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StorageFoodAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StorageFoodSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StorageFoodMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StorageFoodMaxAggregateInputType
  }

  export type GetStorageFoodAggregateType<T extends StorageFoodAggregateArgs> = {
        [P in keyof T & keyof AggregateStorageFood]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStorageFood[P]>
      : GetScalarType<T[P], AggregateStorageFood[P]>
  }




  export type StorageFoodGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: StorageFoodWhereInput
    orderBy?: Enumerable<StorageFoodOrderByWithAggregationInput>
    by: StorageFoodScalarFieldEnum[]
    having?: StorageFoodScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StorageFoodCountAggregateInputType | true
    _avg?: StorageFoodAvgAggregateInputType
    _sum?: StorageFoodSumAggregateInputType
    _min?: StorageFoodMinAggregateInputType
    _max?: StorageFoodMaxAggregateInputType
  }


  export type StorageFoodGroupByOutputType = {
    storageFoodId: number
    storageDate: Date
    outdate: Date
    quantity: number
    foodId: number
    storageId: number
    _count: StorageFoodCountAggregateOutputType | null
    _avg: StorageFoodAvgAggregateOutputType | null
    _sum: StorageFoodSumAggregateOutputType | null
    _min: StorageFoodMinAggregateOutputType | null
    _max: StorageFoodMaxAggregateOutputType | null
  }

  type GetStorageFoodGroupByPayload<T extends StorageFoodGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<StorageFoodGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StorageFoodGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StorageFoodGroupByOutputType[P]>
            : GetScalarType<T[P], StorageFoodGroupByOutputType[P]>
        }
      >
    >


  export type StorageFoodSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    storageFoodId?: boolean
    storageDate?: boolean
    outdate?: boolean
    quantity?: boolean
    foodId?: boolean
    storageId?: boolean
    food?: boolean | FoodArgs<ExtArgs>
    storage?: boolean | StorageArgs<ExtArgs>
  }, ExtArgs["result"]["storageFood"]>

  export type StorageFoodSelectScalar = {
    storageFoodId?: boolean
    storageDate?: boolean
    outdate?: boolean
    quantity?: boolean
    foodId?: boolean
    storageId?: boolean
  }

  export type StorageFoodInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    food?: boolean | FoodArgs<ExtArgs>
    storage?: boolean | StorageArgs<ExtArgs>
  }


  type StorageFoodGetPayload<S extends boolean | null | undefined | StorageFoodArgs> = $Types.GetResult<StorageFoodPayload, S>

  type StorageFoodCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<StorageFoodFindManyArgs, 'select' | 'include'> & {
      select?: StorageFoodCountAggregateInputType | true
    }

  export interface StorageFoodDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StorageFood'], meta: { name: 'StorageFood' } }
    /**
     * Find zero or one StorageFood that matches the filter.
     * @param {StorageFoodFindUniqueArgs} args - Arguments to find a StorageFood
     * @example
     * // Get one StorageFood
     * const storageFood = await prisma.storageFood.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StorageFoodFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StorageFoodFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StorageFood'> extends True ? Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one StorageFood that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StorageFoodFindUniqueOrThrowArgs} args - Arguments to find a StorageFood
     * @example
     * // Get one StorageFood
     * const storageFood = await prisma.storageFood.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StorageFoodFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFoodFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first StorageFood that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodFindFirstArgs} args - Arguments to find a StorageFood
     * @example
     * // Get one StorageFood
     * const storageFood = await prisma.storageFood.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StorageFoodFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StorageFoodFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StorageFood'> extends True ? Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first StorageFood that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodFindFirstOrThrowArgs} args - Arguments to find a StorageFood
     * @example
     * // Get one StorageFood
     * const storageFood = await prisma.storageFood.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StorageFoodFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFoodFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more StorageFoods that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StorageFoods
     * const storageFoods = await prisma.storageFood.findMany()
     * 
     * // Get first 10 StorageFoods
     * const storageFoods = await prisma.storageFood.findMany({ take: 10 })
     * 
     * // Only select the `storageFoodId`
     * const storageFoodWithStorageFoodIdOnly = await prisma.storageFood.findMany({ select: { storageFoodId: true } })
     * 
    **/
    findMany<T extends StorageFoodFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFoodFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a StorageFood.
     * @param {StorageFoodCreateArgs} args - Arguments to create a StorageFood.
     * @example
     * // Create one StorageFood
     * const StorageFood = await prisma.storageFood.create({
     *   data: {
     *     // ... data to create a StorageFood
     *   }
     * })
     * 
    **/
    create<T extends StorageFoodCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFoodCreateArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many StorageFoods.
     *     @param {StorageFoodCreateManyArgs} args - Arguments to create many StorageFoods.
     *     @example
     *     // Create many StorageFoods
     *     const storageFood = await prisma.storageFood.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StorageFoodCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFoodCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a StorageFood.
     * @param {StorageFoodDeleteArgs} args - Arguments to delete one StorageFood.
     * @example
     * // Delete one StorageFood
     * const StorageFood = await prisma.storageFood.delete({
     *   where: {
     *     // ... filter to delete one StorageFood
     *   }
     * })
     * 
    **/
    delete<T extends StorageFoodDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFoodDeleteArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one StorageFood.
     * @param {StorageFoodUpdateArgs} args - Arguments to update one StorageFood.
     * @example
     * // Update one StorageFood
     * const storageFood = await prisma.storageFood.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StorageFoodUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFoodUpdateArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more StorageFoods.
     * @param {StorageFoodDeleteManyArgs} args - Arguments to filter StorageFoods to delete.
     * @example
     * // Delete a few StorageFoods
     * const { count } = await prisma.storageFood.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StorageFoodDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StorageFoodDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StorageFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StorageFoods
     * const storageFood = await prisma.storageFood.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StorageFoodUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFoodUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StorageFood.
     * @param {StorageFoodUpsertArgs} args - Arguments to update or create a StorageFood.
     * @example
     * // Update or create a StorageFood
     * const storageFood = await prisma.storageFood.upsert({
     *   create: {
     *     // ... data to create a StorageFood
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StorageFood we want to update
     *   }
     * })
    **/
    upsert<T extends StorageFoodUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StorageFoodUpsertArgs<ExtArgs>>
    ): Prisma__StorageFoodClient<$Types.GetResult<StorageFoodPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of StorageFoods.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodCountArgs} args - Arguments to filter StorageFoods to count.
     * @example
     * // Count the number of StorageFoods
     * const count = await prisma.storageFood.count({
     *   where: {
     *     // ... the filter for the StorageFoods we want to count
     *   }
     * })
    **/
    count<T extends StorageFoodCountArgs>(
      args?: Subset<T, StorageFoodCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StorageFoodCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StorageFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StorageFoodAggregateArgs>(args: Subset<T, StorageFoodAggregateArgs>): Prisma.PrismaPromise<GetStorageFoodAggregateType<T>>

    /**
     * Group by StorageFood.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StorageFoodGroupByArgs} args - Group by arguments.
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
      T extends StorageFoodGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StorageFoodGroupByArgs['orderBy'] }
        : { orderBy?: StorageFoodGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StorageFoodGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStorageFoodGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StorageFood.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StorageFoodClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    food<T extends FoodArgs<ExtArgs> = {}>(args?: Subset<T, FoodArgs<ExtArgs>>): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    storage<T extends StorageArgs<ExtArgs> = {}>(args?: Subset<T, StorageArgs<ExtArgs>>): Prisma__StorageClient<$Types.GetResult<StoragePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StorageFood base type for findUnique actions
   */
  export type StorageFoodFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter, which StorageFood to fetch.
     */
    where: StorageFoodWhereUniqueInput
  }

  /**
   * StorageFood findUnique
   */
  export interface StorageFoodFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StorageFoodFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StorageFood findUniqueOrThrow
   */
  export type StorageFoodFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter, which StorageFood to fetch.
     */
    where: StorageFoodWhereUniqueInput
  }


  /**
   * StorageFood base type for findFirst actions
   */
  export type StorageFoodFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter, which StorageFood to fetch.
     */
    where?: StorageFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFoods to fetch.
     */
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFoods.
     */
    cursor?: StorageFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFoods.
     */
    distinct?: Enumerable<StorageFoodScalarFieldEnum>
  }

  /**
   * StorageFood findFirst
   */
  export interface StorageFoodFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends StorageFoodFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StorageFood findFirstOrThrow
   */
  export type StorageFoodFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter, which StorageFood to fetch.
     */
    where?: StorageFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFoods to fetch.
     */
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StorageFoods.
     */
    cursor?: StorageFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFoods.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StorageFoods.
     */
    distinct?: Enumerable<StorageFoodScalarFieldEnum>
  }


  /**
   * StorageFood findMany
   */
  export type StorageFoodFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter, which StorageFoods to fetch.
     */
    where?: StorageFoodWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StorageFoods to fetch.
     */
    orderBy?: Enumerable<StorageFoodOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StorageFoods.
     */
    cursor?: StorageFoodWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StorageFoods from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StorageFoods.
     */
    skip?: number
    distinct?: Enumerable<StorageFoodScalarFieldEnum>
  }


  /**
   * StorageFood create
   */
  export type StorageFoodCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * The data needed to create a StorageFood.
     */
    data: XOR<StorageFoodCreateInput, StorageFoodUncheckedCreateInput>
  }


  /**
   * StorageFood createMany
   */
  export type StorageFoodCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StorageFoods.
     */
    data: Enumerable<StorageFoodCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StorageFood update
   */
  export type StorageFoodUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * The data needed to update a StorageFood.
     */
    data: XOR<StorageFoodUpdateInput, StorageFoodUncheckedUpdateInput>
    /**
     * Choose, which StorageFood to update.
     */
    where: StorageFoodWhereUniqueInput
  }


  /**
   * StorageFood updateMany
   */
  export type StorageFoodUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StorageFoods.
     */
    data: XOR<StorageFoodUpdateManyMutationInput, StorageFoodUncheckedUpdateManyInput>
    /**
     * Filter which StorageFoods to update
     */
    where?: StorageFoodWhereInput
  }


  /**
   * StorageFood upsert
   */
  export type StorageFoodUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * The filter to search for the StorageFood to update in case it exists.
     */
    where: StorageFoodWhereUniqueInput
    /**
     * In case the StorageFood found by the `where` argument doesn't exist, create a new StorageFood with this data.
     */
    create: XOR<StorageFoodCreateInput, StorageFoodUncheckedCreateInput>
    /**
     * In case the StorageFood was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StorageFoodUpdateInput, StorageFoodUncheckedUpdateInput>
  }


  /**
   * StorageFood delete
   */
  export type StorageFoodDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
    /**
     * Filter which StorageFood to delete.
     */
    where: StorageFoodWhereUniqueInput
  }


  /**
   * StorageFood deleteMany
   */
  export type StorageFoodDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which StorageFoods to delete
     */
    where?: StorageFoodWhereInput
  }


  /**
   * StorageFood without action
   */
  export type StorageFoodArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StorageFood
     */
    select?: StorageFoodSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StorageFoodInclude<ExtArgs> | null
  }



  /**
   * Model ToBuyListDetail
   */


  export type AggregateToBuyListDetail = {
    _count: ToBuyListDetailCountAggregateOutputType | null
    _avg: ToBuyListDetailAvgAggregateOutputType | null
    _sum: ToBuyListDetailSumAggregateOutputType | null
    _min: ToBuyListDetailMinAggregateOutputType | null
    _max: ToBuyListDetailMaxAggregateOutputType | null
  }

  export type ToBuyListDetailAvgAggregateOutputType = {
    toBuyListId: number | null
    foodId: number | null
    quantity: number | null
  }

  export type ToBuyListDetailSumAggregateOutputType = {
    toBuyListId: number | null
    foodId: number | null
    quantity: number | null
  }

  export type ToBuyListDetailMinAggregateOutputType = {
    toBuyListId: number | null
    foodId: number | null
    quantity: number | null
  }

  export type ToBuyListDetailMaxAggregateOutputType = {
    toBuyListId: number | null
    foodId: number | null
    quantity: number | null
  }

  export type ToBuyListDetailCountAggregateOutputType = {
    toBuyListId: number
    foodId: number
    quantity: number
    _all: number
  }


  export type ToBuyListDetailAvgAggregateInputType = {
    toBuyListId?: true
    foodId?: true
    quantity?: true
  }

  export type ToBuyListDetailSumAggregateInputType = {
    toBuyListId?: true
    foodId?: true
    quantity?: true
  }

  export type ToBuyListDetailMinAggregateInputType = {
    toBuyListId?: true
    foodId?: true
    quantity?: true
  }

  export type ToBuyListDetailMaxAggregateInputType = {
    toBuyListId?: true
    foodId?: true
    quantity?: true
  }

  export type ToBuyListDetailCountAggregateInputType = {
    toBuyListId?: true
    foodId?: true
    quantity?: true
    _all?: true
  }

  export type ToBuyListDetailAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToBuyListDetail to aggregate.
     */
    where?: ToBuyListDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyListDetails to fetch.
     */
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToBuyListDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyListDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyListDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToBuyListDetails
    **/
    _count?: true | ToBuyListDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToBuyListDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToBuyListDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToBuyListDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToBuyListDetailMaxAggregateInputType
  }

  export type GetToBuyListDetailAggregateType<T extends ToBuyListDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateToBuyListDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToBuyListDetail[P]>
      : GetScalarType<T[P], AggregateToBuyListDetail[P]>
  }




  export type ToBuyListDetailGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ToBuyListDetailWhereInput
    orderBy?: Enumerable<ToBuyListDetailOrderByWithAggregationInput>
    by: ToBuyListDetailScalarFieldEnum[]
    having?: ToBuyListDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToBuyListDetailCountAggregateInputType | true
    _avg?: ToBuyListDetailAvgAggregateInputType
    _sum?: ToBuyListDetailSumAggregateInputType
    _min?: ToBuyListDetailMinAggregateInputType
    _max?: ToBuyListDetailMaxAggregateInputType
  }


  export type ToBuyListDetailGroupByOutputType = {
    toBuyListId: number
    foodId: number
    quantity: number
    _count: ToBuyListDetailCountAggregateOutputType | null
    _avg: ToBuyListDetailAvgAggregateOutputType | null
    _sum: ToBuyListDetailSumAggregateOutputType | null
    _min: ToBuyListDetailMinAggregateOutputType | null
    _max: ToBuyListDetailMaxAggregateOutputType | null
  }

  type GetToBuyListDetailGroupByPayload<T extends ToBuyListDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ToBuyListDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToBuyListDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToBuyListDetailGroupByOutputType[P]>
            : GetScalarType<T[P], ToBuyListDetailGroupByOutputType[P]>
        }
      >
    >


  export type ToBuyListDetailSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    toBuyListId?: boolean
    foodId?: boolean
    quantity?: boolean
    toBuyList?: boolean | ToBuyListArgs<ExtArgs>
    food?: boolean | FoodArgs<ExtArgs>
  }, ExtArgs["result"]["toBuyListDetail"]>

  export type ToBuyListDetailSelectScalar = {
    toBuyListId?: boolean
    foodId?: boolean
    quantity?: boolean
  }

  export type ToBuyListDetailInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    toBuyList?: boolean | ToBuyListArgs<ExtArgs>
    food?: boolean | FoodArgs<ExtArgs>
  }


  type ToBuyListDetailGetPayload<S extends boolean | null | undefined | ToBuyListDetailArgs> = $Types.GetResult<ToBuyListDetailPayload, S>

  type ToBuyListDetailCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ToBuyListDetailFindManyArgs, 'select' | 'include'> & {
      select?: ToBuyListDetailCountAggregateInputType | true
    }

  export interface ToBuyListDetailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToBuyListDetail'], meta: { name: 'ToBuyListDetail' } }
    /**
     * Find zero or one ToBuyListDetail that matches the filter.
     * @param {ToBuyListDetailFindUniqueArgs} args - Arguments to find a ToBuyListDetail
     * @example
     * // Get one ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ToBuyListDetailFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ToBuyListDetailFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ToBuyListDetail'> extends True ? Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one ToBuyListDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ToBuyListDetailFindUniqueOrThrowArgs} args - Arguments to find a ToBuyListDetail
     * @example
     * // Get one ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ToBuyListDetailFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDetailFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first ToBuyListDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailFindFirstArgs} args - Arguments to find a ToBuyListDetail
     * @example
     * // Get one ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ToBuyListDetailFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ToBuyListDetailFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ToBuyListDetail'> extends True ? Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ToBuyListDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailFindFirstOrThrowArgs} args - Arguments to find a ToBuyListDetail
     * @example
     * // Get one ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ToBuyListDetailFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDetailFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more ToBuyListDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToBuyListDetails
     * const toBuyListDetails = await prisma.toBuyListDetail.findMany()
     * 
     * // Get first 10 ToBuyListDetails
     * const toBuyListDetails = await prisma.toBuyListDetail.findMany({ take: 10 })
     * 
     * // Only select the `toBuyListId`
     * const toBuyListDetailWithToBuyListIdOnly = await prisma.toBuyListDetail.findMany({ select: { toBuyListId: true } })
     * 
    **/
    findMany<T extends ToBuyListDetailFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDetailFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a ToBuyListDetail.
     * @param {ToBuyListDetailCreateArgs} args - Arguments to create a ToBuyListDetail.
     * @example
     * // Create one ToBuyListDetail
     * const ToBuyListDetail = await prisma.toBuyListDetail.create({
     *   data: {
     *     // ... data to create a ToBuyListDetail
     *   }
     * })
     * 
    **/
    create<T extends ToBuyListDetailCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDetailCreateArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many ToBuyListDetails.
     *     @param {ToBuyListDetailCreateManyArgs} args - Arguments to create many ToBuyListDetails.
     *     @example
     *     // Create many ToBuyListDetails
     *     const toBuyListDetail = await prisma.toBuyListDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ToBuyListDetailCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDetailCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ToBuyListDetail.
     * @param {ToBuyListDetailDeleteArgs} args - Arguments to delete one ToBuyListDetail.
     * @example
     * // Delete one ToBuyListDetail
     * const ToBuyListDetail = await prisma.toBuyListDetail.delete({
     *   where: {
     *     // ... filter to delete one ToBuyListDetail
     *   }
     * })
     * 
    **/
    delete<T extends ToBuyListDetailDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDetailDeleteArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one ToBuyListDetail.
     * @param {ToBuyListDetailUpdateArgs} args - Arguments to update one ToBuyListDetail.
     * @example
     * // Update one ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ToBuyListDetailUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDetailUpdateArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more ToBuyListDetails.
     * @param {ToBuyListDetailDeleteManyArgs} args - Arguments to filter ToBuyListDetails to delete.
     * @example
     * // Delete a few ToBuyListDetails
     * const { count } = await prisma.toBuyListDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ToBuyListDetailDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ToBuyListDetailDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToBuyListDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToBuyListDetails
     * const toBuyListDetail = await prisma.toBuyListDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ToBuyListDetailUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDetailUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ToBuyListDetail.
     * @param {ToBuyListDetailUpsertArgs} args - Arguments to update or create a ToBuyListDetail.
     * @example
     * // Update or create a ToBuyListDetail
     * const toBuyListDetail = await prisma.toBuyListDetail.upsert({
     *   create: {
     *     // ... data to create a ToBuyListDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToBuyListDetail we want to update
     *   }
     * })
    **/
    upsert<T extends ToBuyListDetailUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ToBuyListDetailUpsertArgs<ExtArgs>>
    ): Prisma__ToBuyListDetailClient<$Types.GetResult<ToBuyListDetailPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of ToBuyListDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailCountArgs} args - Arguments to filter ToBuyListDetails to count.
     * @example
     * // Count the number of ToBuyListDetails
     * const count = await prisma.toBuyListDetail.count({
     *   where: {
     *     // ... the filter for the ToBuyListDetails we want to count
     *   }
     * })
    **/
    count<T extends ToBuyListDetailCountArgs>(
      args?: Subset<T, ToBuyListDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToBuyListDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToBuyListDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToBuyListDetailAggregateArgs>(args: Subset<T, ToBuyListDetailAggregateArgs>): Prisma.PrismaPromise<GetToBuyListDetailAggregateType<T>>

    /**
     * Group by ToBuyListDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToBuyListDetailGroupByArgs} args - Group by arguments.
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
      T extends ToBuyListDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToBuyListDetailGroupByArgs['orderBy'] }
        : { orderBy?: ToBuyListDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ToBuyListDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToBuyListDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ToBuyListDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ToBuyListDetailClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    toBuyList<T extends ToBuyListArgs<ExtArgs> = {}>(args?: Subset<T, ToBuyListArgs<ExtArgs>>): Prisma__ToBuyListClient<$Types.GetResult<ToBuyListPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    food<T extends FoodArgs<ExtArgs> = {}>(args?: Subset<T, FoodArgs<ExtArgs>>): Prisma__FoodClient<$Types.GetResult<FoodPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ToBuyListDetail base type for findUnique actions
   */
  export type ToBuyListDetailFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyListDetail to fetch.
     */
    where: ToBuyListDetailWhereUniqueInput
  }

  /**
   * ToBuyListDetail findUnique
   */
  export interface ToBuyListDetailFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ToBuyListDetailFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ToBuyListDetail findUniqueOrThrow
   */
  export type ToBuyListDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyListDetail to fetch.
     */
    where: ToBuyListDetailWhereUniqueInput
  }


  /**
   * ToBuyListDetail base type for findFirst actions
   */
  export type ToBuyListDetailFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyListDetail to fetch.
     */
    where?: ToBuyListDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyListDetails to fetch.
     */
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToBuyListDetails.
     */
    cursor?: ToBuyListDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyListDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyListDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToBuyListDetails.
     */
    distinct?: Enumerable<ToBuyListDetailScalarFieldEnum>
  }

  /**
   * ToBuyListDetail findFirst
   */
  export interface ToBuyListDetailFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ToBuyListDetailFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ToBuyListDetail findFirstOrThrow
   */
  export type ToBuyListDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyListDetail to fetch.
     */
    where?: ToBuyListDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyListDetails to fetch.
     */
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToBuyListDetails.
     */
    cursor?: ToBuyListDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyListDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyListDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToBuyListDetails.
     */
    distinct?: Enumerable<ToBuyListDetailScalarFieldEnum>
  }


  /**
   * ToBuyListDetail findMany
   */
  export type ToBuyListDetailFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter, which ToBuyListDetails to fetch.
     */
    where?: ToBuyListDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToBuyListDetails to fetch.
     */
    orderBy?: Enumerable<ToBuyListDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToBuyListDetails.
     */
    cursor?: ToBuyListDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToBuyListDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToBuyListDetails.
     */
    skip?: number
    distinct?: Enumerable<ToBuyListDetailScalarFieldEnum>
  }


  /**
   * ToBuyListDetail create
   */
  export type ToBuyListDetailCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a ToBuyListDetail.
     */
    data: XOR<ToBuyListDetailCreateInput, ToBuyListDetailUncheckedCreateInput>
  }


  /**
   * ToBuyListDetail createMany
   */
  export type ToBuyListDetailCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToBuyListDetails.
     */
    data: Enumerable<ToBuyListDetailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ToBuyListDetail update
   */
  export type ToBuyListDetailUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a ToBuyListDetail.
     */
    data: XOR<ToBuyListDetailUpdateInput, ToBuyListDetailUncheckedUpdateInput>
    /**
     * Choose, which ToBuyListDetail to update.
     */
    where: ToBuyListDetailWhereUniqueInput
  }


  /**
   * ToBuyListDetail updateMany
   */
  export type ToBuyListDetailUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToBuyListDetails.
     */
    data: XOR<ToBuyListDetailUpdateManyMutationInput, ToBuyListDetailUncheckedUpdateManyInput>
    /**
     * Filter which ToBuyListDetails to update
     */
    where?: ToBuyListDetailWhereInput
  }


  /**
   * ToBuyListDetail upsert
   */
  export type ToBuyListDetailUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the ToBuyListDetail to update in case it exists.
     */
    where: ToBuyListDetailWhereUniqueInput
    /**
     * In case the ToBuyListDetail found by the `where` argument doesn't exist, create a new ToBuyListDetail with this data.
     */
    create: XOR<ToBuyListDetailCreateInput, ToBuyListDetailUncheckedCreateInput>
    /**
     * In case the ToBuyListDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToBuyListDetailUpdateInput, ToBuyListDetailUncheckedUpdateInput>
  }


  /**
   * ToBuyListDetail delete
   */
  export type ToBuyListDetailDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
    /**
     * Filter which ToBuyListDetail to delete.
     */
    where: ToBuyListDetailWhereUniqueInput
  }


  /**
   * ToBuyListDetail deleteMany
   */
  export type ToBuyListDetailDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToBuyListDetails to delete
     */
    where?: ToBuyListDetailWhereInput
  }


  /**
   * ToBuyListDetail without action
   */
  export type ToBuyListDetailArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToBuyListDetail
     */
    select?: ToBuyListDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ToBuyListDetailInclude<ExtArgs> | null
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


  export const FoodScalarFieldEnum: {
    foodId: 'foodId',
    name: 'name',
    imageUrl: 'imageUrl',
    description: 'description'
  };

  export type FoodScalarFieldEnum = (typeof FoodScalarFieldEnum)[keyof typeof FoodScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    categoryId: 'categoryId',
    categoryName: 'categoryName',
    categoryType: 'categoryType'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const RecipeScalarFieldEnum: {
    recipeId: 'recipeId',
    name: 'name',
    imgUrl: 'imgUrl',
    description: 'description'
  };

  export type RecipeScalarFieldEnum = (typeof RecipeScalarFieldEnum)[keyof typeof RecipeScalarFieldEnum]


  export const StorageScalarFieldEnum: {
    storageId: 'storageId',
    userId: 'userId'
  };

  export type StorageScalarFieldEnum = (typeof StorageScalarFieldEnum)[keyof typeof StorageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    username: 'username',
    name: 'name',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GGroupScalarFieldEnum: {
    groupId: 'groupId',
    name: 'name'
  };

  export type GGroupScalarFieldEnum = (typeof GGroupScalarFieldEnum)[keyof typeof GGroupScalarFieldEnum]


  export const RecipeFoodListScalarFieldEnum: {
    recipeId: 'recipeId',
    foodId: 'foodId'
  };

  export type RecipeFoodListScalarFieldEnum = (typeof RecipeFoodListScalarFieldEnum)[keyof typeof RecipeFoodListScalarFieldEnum]


  export const FoodCategoryScalarFieldEnum: {
    foodId: 'foodId',
    categoryId: 'categoryId'
  };

  export type FoodCategoryScalarFieldEnum = (typeof FoodCategoryScalarFieldEnum)[keyof typeof FoodCategoryScalarFieldEnum]


  export const ToBuyListScalarFieldEnum: {
    toBuyListId: 'toBuyListId',
    date: 'date',
    ownerId: 'ownerId',
    groupOwnerId: 'groupOwnerId'
  };

  export type ToBuyListScalarFieldEnum = (typeof ToBuyListScalarFieldEnum)[keyof typeof ToBuyListScalarFieldEnum]


  export const FavoriteRecipeScalarFieldEnum: {
    userId: 'userId',
    recipeId: 'recipeId'
  };

  export type FavoriteRecipeScalarFieldEnum = (typeof FavoriteRecipeScalarFieldEnum)[keyof typeof FavoriteRecipeScalarFieldEnum]


  export const GroupMemberScalarFieldEnum: {
    groupId: 'groupId',
    userId: 'userId',
    isGroupAdmin: 'isGroupAdmin'
  };

  export type GroupMemberScalarFieldEnum = (typeof GroupMemberScalarFieldEnum)[keyof typeof GroupMemberScalarFieldEnum]


  export const StorageFoodScalarFieldEnum: {
    storageFoodId: 'storageFoodId',
    storageDate: 'storageDate',
    outdate: 'outdate',
    quantity: 'quantity',
    foodId: 'foodId',
    storageId: 'storageId'
  };

  export type StorageFoodScalarFieldEnum = (typeof StorageFoodScalarFieldEnum)[keyof typeof StorageFoodScalarFieldEnum]


  export const ToBuyListDetailScalarFieldEnum: {
    toBuyListId: 'toBuyListId',
    foodId: 'foodId',
    quantity: 'quantity'
  };

  export type ToBuyListDetailScalarFieldEnum = (typeof ToBuyListDetailScalarFieldEnum)[keyof typeof ToBuyListDetailScalarFieldEnum]


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
   * Deep Input Types
   */


  export type FoodWhereInput = {
    AND?: Enumerable<FoodWhereInput>
    OR?: Enumerable<FoodWhereInput>
    NOT?: Enumerable<FoodWhereInput>
    foodId?: IntFilter | number
    name?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    description?: StringNullableFilter | string | null
    categories?: FoodCategoryListRelationFilter
    recipes?: RecipeFoodListListRelationFilter
    storage?: StorageFoodListRelationFilter
    toBuyLists?: ToBuyListDetailListRelationFilter
  }

  export type FoodOrderByWithRelationInput = {
    foodId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    categories?: FoodCategoryOrderByRelationAggregateInput
    recipes?: RecipeFoodListOrderByRelationAggregateInput
    storage?: StorageFoodOrderByRelationAggregateInput
    toBuyLists?: ToBuyListDetailOrderByRelationAggregateInput
  }

  export type FoodWhereUniqueInput = {
    foodId?: number
  }

  export type FoodOrderByWithAggregationInput = {
    foodId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: FoodCountOrderByAggregateInput
    _avg?: FoodAvgOrderByAggregateInput
    _max?: FoodMaxOrderByAggregateInput
    _min?: FoodMinOrderByAggregateInput
    _sum?: FoodSumOrderByAggregateInput
  }

  export type FoodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FoodScalarWhereWithAggregatesInput>
    OR?: Enumerable<FoodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FoodScalarWhereWithAggregatesInput>
    foodId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    imageUrl?: StringNullableWithAggregatesFilter | string | null
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    categoryId?: IntFilter | number
    categoryName?: StringFilter | string
    categoryType?: StringFilter | string
    foods?: FoodCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    categoryType?: SortOrder
    foods?: FoodCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = {
    categoryId?: number
  }

  export type CategoryOrderByWithAggregationInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    categoryType?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    categoryId?: IntWithAggregatesFilter | number
    categoryName?: StringWithAggregatesFilter | string
    categoryType?: StringWithAggregatesFilter | string
  }

  export type RecipeWhereInput = {
    AND?: Enumerable<RecipeWhereInput>
    OR?: Enumerable<RecipeWhereInput>
    NOT?: Enumerable<RecipeWhereInput>
    recipeId?: IntFilter | number
    name?: StringFilter | string
    imgUrl?: StringNullableFilter | string | null
    description?: StringFilter | string
    foods?: RecipeFoodListListRelationFilter
    users?: FavoriteRecipeListRelationFilter
  }

  export type RecipeOrderByWithRelationInput = {
    recipeId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    foods?: RecipeFoodListOrderByRelationAggregateInput
    users?: FavoriteRecipeOrderByRelationAggregateInput
  }

  export type RecipeWhereUniqueInput = {
    recipeId?: number
  }

  export type RecipeOrderByWithAggregationInput = {
    recipeId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrderInput | SortOrder
    description?: SortOrder
    _count?: RecipeCountOrderByAggregateInput
    _avg?: RecipeAvgOrderByAggregateInput
    _max?: RecipeMaxOrderByAggregateInput
    _min?: RecipeMinOrderByAggregateInput
    _sum?: RecipeSumOrderByAggregateInput
  }

  export type RecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeScalarWhereWithAggregatesInput>
    recipeId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    imgUrl?: StringNullableWithAggregatesFilter | string | null
    description?: StringWithAggregatesFilter | string
  }

  export type StorageWhereInput = {
    AND?: Enumerable<StorageWhereInput>
    OR?: Enumerable<StorageWhereInput>
    NOT?: Enumerable<StorageWhereInput>
    storageId?: IntFilter | number
    userId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    foods?: StorageFoodListRelationFilter
  }

  export type StorageOrderByWithRelationInput = {
    storageId?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    foods?: StorageFoodOrderByRelationAggregateInput
  }

  export type StorageWhereUniqueInput = {
    storageId?: number
    userId?: number
  }

  export type StorageOrderByWithAggregationInput = {
    storageId?: SortOrder
    userId?: SortOrder
    _count?: StorageCountOrderByAggregateInput
    _avg?: StorageAvgOrderByAggregateInput
    _max?: StorageMaxOrderByAggregateInput
    _min?: StorageMinOrderByAggregateInput
    _sum?: StorageSumOrderByAggregateInput
  }

  export type StorageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StorageScalarWhereWithAggregatesInput>
    OR?: Enumerable<StorageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StorageScalarWhereWithAggregatesInput>
    storageId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    userId?: IntFilter | number
    username?: StringFilter | string
    name?: StringFilter | string
    password?: StringFilter | string
    role?: StringFilter | string
    favorites?: FavoriteRecipeListRelationFilter
    groups?: GroupMemberListRelationFilter
    toBuyLists?: ToBuyListListRelationFilter
    storage?: XOR<StorageRelationFilter, StorageWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    favorites?: FavoriteRecipeOrderByRelationAggregateInput
    groups?: GroupMemberOrderByRelationAggregateInput
    toBuyLists?: ToBuyListOrderByRelationAggregateInput
    storage?: StorageOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    userId?: number
    username?: string
  }

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    username?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
  }

  export type GGroupWhereInput = {
    AND?: Enumerable<GGroupWhereInput>
    OR?: Enumerable<GGroupWhereInput>
    NOT?: Enumerable<GGroupWhereInput>
    groupId?: IntFilter | number
    name?: StringFilter | string
    users?: GroupMemberListRelationFilter
    toBuyLists?: ToBuyListListRelationFilter
  }

  export type GGroupOrderByWithRelationInput = {
    groupId?: SortOrder
    name?: SortOrder
    users?: GroupMemberOrderByRelationAggregateInput
    toBuyLists?: ToBuyListOrderByRelationAggregateInput
  }

  export type GGroupWhereUniqueInput = {
    groupId?: number
  }

  export type GGroupOrderByWithAggregationInput = {
    groupId?: SortOrder
    name?: SortOrder
    _count?: GGroupCountOrderByAggregateInput
    _avg?: GGroupAvgOrderByAggregateInput
    _max?: GGroupMaxOrderByAggregateInput
    _min?: GGroupMinOrderByAggregateInput
    _sum?: GGroupSumOrderByAggregateInput
  }

  export type GGroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GGroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<GGroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GGroupScalarWhereWithAggregatesInput>
    groupId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type RecipeFoodListWhereInput = {
    AND?: Enumerable<RecipeFoodListWhereInput>
    OR?: Enumerable<RecipeFoodListWhereInput>
    NOT?: Enumerable<RecipeFoodListWhereInput>
    recipeId?: IntFilter | number
    foodId?: IntFilter | number
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type RecipeFoodListOrderByWithRelationInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
    recipe?: RecipeOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type RecipeFoodListWhereUniqueInput = {
    recipeId_foodId?: RecipeFoodListRecipeIdFoodIdCompoundUniqueInput
  }

  export type RecipeFoodListOrderByWithAggregationInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
    _count?: RecipeFoodListCountOrderByAggregateInput
    _avg?: RecipeFoodListAvgOrderByAggregateInput
    _max?: RecipeFoodListMaxOrderByAggregateInput
    _min?: RecipeFoodListMinOrderByAggregateInput
    _sum?: RecipeFoodListSumOrderByAggregateInput
  }

  export type RecipeFoodListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RecipeFoodListScalarWhereWithAggregatesInput>
    OR?: Enumerable<RecipeFoodListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RecipeFoodListScalarWhereWithAggregatesInput>
    recipeId?: IntWithAggregatesFilter | number
    foodId?: IntWithAggregatesFilter | number
  }

  export type FoodCategoryWhereInput = {
    AND?: Enumerable<FoodCategoryWhereInput>
    OR?: Enumerable<FoodCategoryWhereInput>
    NOT?: Enumerable<FoodCategoryWhereInput>
    foodId?: IntFilter | number
    categoryId?: IntFilter | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
  }

  export type FoodCategoryOrderByWithRelationInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
    food?: FoodOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type FoodCategoryWhereUniqueInput = {
    foodId_categoryId?: FoodCategoryFoodIdCategoryIdCompoundUniqueInput
  }

  export type FoodCategoryOrderByWithAggregationInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
    _count?: FoodCategoryCountOrderByAggregateInput
    _avg?: FoodCategoryAvgOrderByAggregateInput
    _max?: FoodCategoryMaxOrderByAggregateInput
    _min?: FoodCategoryMinOrderByAggregateInput
    _sum?: FoodCategorySumOrderByAggregateInput
  }

  export type FoodCategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FoodCategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<FoodCategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FoodCategoryScalarWhereWithAggregatesInput>
    foodId?: IntWithAggregatesFilter | number
    categoryId?: IntWithAggregatesFilter | number
  }

  export type ToBuyListWhereInput = {
    AND?: Enumerable<ToBuyListWhereInput>
    OR?: Enumerable<ToBuyListWhereInput>
    NOT?: Enumerable<ToBuyListWhereInput>
    toBuyListId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    ownerId?: IntNullableFilter | number | null
    groupOwnerId?: IntNullableFilter | number | null
    toBuyListDetails?: ToBuyListDetailListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput> | null
    groupOwner?: XOR<GGroupRelationFilter, GGroupWhereInput> | null
  }

  export type ToBuyListOrderByWithRelationInput = {
    toBuyListId?: SortOrder
    date?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    groupOwnerId?: SortOrderInput | SortOrder
    toBuyListDetails?: ToBuyListDetailOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    groupOwner?: GGroupOrderByWithRelationInput
  }

  export type ToBuyListWhereUniqueInput = {
    toBuyListId?: number
  }

  export type ToBuyListOrderByWithAggregationInput = {
    toBuyListId?: SortOrder
    date?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    groupOwnerId?: SortOrderInput | SortOrder
    _count?: ToBuyListCountOrderByAggregateInput
    _avg?: ToBuyListAvgOrderByAggregateInput
    _max?: ToBuyListMaxOrderByAggregateInput
    _min?: ToBuyListMinOrderByAggregateInput
    _sum?: ToBuyListSumOrderByAggregateInput
  }

  export type ToBuyListScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ToBuyListScalarWhereWithAggregatesInput>
    OR?: Enumerable<ToBuyListScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ToBuyListScalarWhereWithAggregatesInput>
    toBuyListId?: IntWithAggregatesFilter | number
    date?: DateTimeWithAggregatesFilter | Date | string
    ownerId?: IntNullableWithAggregatesFilter | number | null
    groupOwnerId?: IntNullableWithAggregatesFilter | number | null
  }

  export type FavoriteRecipeWhereInput = {
    AND?: Enumerable<FavoriteRecipeWhereInput>
    OR?: Enumerable<FavoriteRecipeWhereInput>
    NOT?: Enumerable<FavoriteRecipeWhereInput>
    userId?: IntFilter | number
    recipeId?: IntFilter | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    recipe?: XOR<RecipeRelationFilter, RecipeWhereInput>
  }

  export type FavoriteRecipeOrderByWithRelationInput = {
    userId?: SortOrder
    recipeId?: SortOrder
    user?: UserOrderByWithRelationInput
    recipe?: RecipeOrderByWithRelationInput
  }

  export type FavoriteRecipeWhereUniqueInput = {
    userId_recipeId?: FavoriteRecipeUserIdRecipeIdCompoundUniqueInput
  }

  export type FavoriteRecipeOrderByWithAggregationInput = {
    userId?: SortOrder
    recipeId?: SortOrder
    _count?: FavoriteRecipeCountOrderByAggregateInput
    _avg?: FavoriteRecipeAvgOrderByAggregateInput
    _max?: FavoriteRecipeMaxOrderByAggregateInput
    _min?: FavoriteRecipeMinOrderByAggregateInput
    _sum?: FavoriteRecipeSumOrderByAggregateInput
  }

  export type FavoriteRecipeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FavoriteRecipeScalarWhereWithAggregatesInput>
    OR?: Enumerable<FavoriteRecipeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FavoriteRecipeScalarWhereWithAggregatesInput>
    userId?: IntWithAggregatesFilter | number
    recipeId?: IntWithAggregatesFilter | number
  }

  export type GroupMemberWhereInput = {
    AND?: Enumerable<GroupMemberWhereInput>
    OR?: Enumerable<GroupMemberWhereInput>
    NOT?: Enumerable<GroupMemberWhereInput>
    groupId?: IntFilter | number
    userId?: IntFilter | number
    isGroupAdmin?: BoolFilter | boolean
    group?: XOR<GGroupRelationFilter, GGroupWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type GroupMemberOrderByWithRelationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isGroupAdmin?: SortOrder
    group?: GGroupOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type GroupMemberWhereUniqueInput = {
    groupId_userId?: GroupMemberGroupIdUserIdCompoundUniqueInput
  }

  export type GroupMemberOrderByWithAggregationInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isGroupAdmin?: SortOrder
    _count?: GroupMemberCountOrderByAggregateInput
    _avg?: GroupMemberAvgOrderByAggregateInput
    _max?: GroupMemberMaxOrderByAggregateInput
    _min?: GroupMemberMinOrderByAggregateInput
    _sum?: GroupMemberSumOrderByAggregateInput
  }

  export type GroupMemberScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupMemberScalarWhereWithAggregatesInput>
    OR?: Enumerable<GroupMemberScalarWhereWithAggregatesInput>
    NOT?: Enumerable<GroupMemberScalarWhereWithAggregatesInput>
    groupId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    isGroupAdmin?: BoolWithAggregatesFilter | boolean
  }

  export type StorageFoodWhereInput = {
    AND?: Enumerable<StorageFoodWhereInput>
    OR?: Enumerable<StorageFoodWhereInput>
    NOT?: Enumerable<StorageFoodWhereInput>
    storageFoodId?: IntFilter | number
    storageDate?: DateTimeFilter | Date | string
    outdate?: DateTimeFilter | Date | string
    quantity?: IntFilter | number
    foodId?: IntFilter | number
    storageId?: IntFilter | number
    food?: XOR<FoodRelationFilter, FoodWhereInput>
    storage?: XOR<StorageRelationFilter, StorageWhereInput>
  }

  export type StorageFoodOrderByWithRelationInput = {
    storageFoodId?: SortOrder
    storageDate?: SortOrder
    outdate?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
    food?: FoodOrderByWithRelationInput
    storage?: StorageOrderByWithRelationInput
  }

  export type StorageFoodWhereUniqueInput = {
    storageFoodId?: number
  }

  export type StorageFoodOrderByWithAggregationInput = {
    storageFoodId?: SortOrder
    storageDate?: SortOrder
    outdate?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
    _count?: StorageFoodCountOrderByAggregateInput
    _avg?: StorageFoodAvgOrderByAggregateInput
    _max?: StorageFoodMaxOrderByAggregateInput
    _min?: StorageFoodMinOrderByAggregateInput
    _sum?: StorageFoodSumOrderByAggregateInput
  }

  export type StorageFoodScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StorageFoodScalarWhereWithAggregatesInput>
    OR?: Enumerable<StorageFoodScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StorageFoodScalarWhereWithAggregatesInput>
    storageFoodId?: IntWithAggregatesFilter | number
    storageDate?: DateTimeWithAggregatesFilter | Date | string
    outdate?: DateTimeWithAggregatesFilter | Date | string
    quantity?: IntWithAggregatesFilter | number
    foodId?: IntWithAggregatesFilter | number
    storageId?: IntWithAggregatesFilter | number
  }

  export type ToBuyListDetailWhereInput = {
    AND?: Enumerable<ToBuyListDetailWhereInput>
    OR?: Enumerable<ToBuyListDetailWhereInput>
    NOT?: Enumerable<ToBuyListDetailWhereInput>
    toBuyListId?: IntFilter | number
    foodId?: IntFilter | number
    quantity?: IntFilter | number
    toBuyList?: XOR<ToBuyListRelationFilter, ToBuyListWhereInput>
    food?: XOR<FoodRelationFilter, FoodWhereInput>
  }

  export type ToBuyListDetailOrderByWithRelationInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    toBuyList?: ToBuyListOrderByWithRelationInput
    food?: FoodOrderByWithRelationInput
  }

  export type ToBuyListDetailWhereUniqueInput = {
    toBuyListId_foodId?: ToBuyListDetailToBuyListIdFoodIdCompoundUniqueInput
  }

  export type ToBuyListDetailOrderByWithAggregationInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
    _count?: ToBuyListDetailCountOrderByAggregateInput
    _avg?: ToBuyListDetailAvgOrderByAggregateInput
    _max?: ToBuyListDetailMaxOrderByAggregateInput
    _min?: ToBuyListDetailMinOrderByAggregateInput
    _sum?: ToBuyListDetailSumOrderByAggregateInput
  }

  export type ToBuyListDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ToBuyListDetailScalarWhereWithAggregatesInput>
    OR?: Enumerable<ToBuyListDetailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ToBuyListDetailScalarWhereWithAggregatesInput>
    toBuyListId?: IntWithAggregatesFilter | number
    foodId?: IntWithAggregatesFilter | number
    quantity?: IntWithAggregatesFilter | number
  }

  export type FoodCreateInput = {
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListCreateNestedManyWithoutFoodInput
    storage?: StorageFoodCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryUncheckedCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListUncheckedCreateNestedManyWithoutFoodInput
    storage?: StorageFoodUncheckedCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUncheckedUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUncheckedUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUncheckedUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateManyInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
  }

  export type FoodUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FoodUncheckedUpdateManyInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateInput = {
    categoryName: string
    categoryType: string
    foods?: FoodCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    categoryId?: number
    categoryName: string
    categoryType: string
    foods?: FoodCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
    foods?: FoodCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
    foods?: FoodCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    categoryId?: number
    categoryName: string
    categoryType: string
  }

  export type CategoryUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeCreateInput = {
    name: string
    imgUrl?: string | null
    description: string
    foods?: RecipeFoodListCreateNestedManyWithoutRecipeInput
    users?: FavoriteRecipeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateInput = {
    recipeId?: number
    name: string
    imgUrl?: string | null
    description: string
    foods?: RecipeFoodListUncheckedCreateNestedManyWithoutRecipeInput
    users?: FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    foods?: RecipeFoodListUpdateManyWithoutRecipeNestedInput
    users?: FavoriteRecipeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    foods?: RecipeFoodListUncheckedUpdateManyWithoutRecipeNestedInput
    users?: FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeCreateManyInput = {
    recipeId?: number
    name: string
    imgUrl?: string | null
    description: string
  }

  export type RecipeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeUncheckedUpdateManyInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type StorageCreateInput = {
    user: UserCreateNestedOneWithoutStorageInput
    foods?: StorageFoodCreateNestedManyWithoutStorageInput
  }

  export type StorageUncheckedCreateInput = {
    storageId?: number
    userId: number
    foods?: StorageFoodUncheckedCreateNestedManyWithoutStorageInput
  }

  export type StorageUpdateInput = {
    user?: UserUpdateOneRequiredWithoutStorageNestedInput
    foods?: StorageFoodUpdateManyWithoutStorageNestedInput
  }

  export type StorageUncheckedUpdateInput = {
    storageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    foods?: StorageFoodUncheckedUpdateManyWithoutStorageNestedInput
  }

  export type StorageCreateManyInput = {
    storageId?: number
    userId: number
  }

  export type StorageUpdateManyMutationInput = {

  }

  export type StorageUncheckedUpdateManyInput = {
    storageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeCreateNestedManyWithoutUserInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListCreateNestedManyWithoutOwnerInput
    storage?: StorageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutOwnerInput
    storage?: StorageUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUpdateManyWithoutOwnerNestedInput
    storage?: StorageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutOwnerNestedInput
    storage?: StorageUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type GGroupCreateInput = {
    name: string
    users?: GroupMemberCreateNestedManyWithoutGroupInput
    toBuyLists?: ToBuyListCreateNestedManyWithoutGroupOwnerInput
  }

  export type GGroupUncheckedCreateInput = {
    groupId?: number
    name: string
    users?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutGroupOwnerInput
  }

  export type GGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: GroupMemberUpdateManyWithoutGroupNestedInput
    toBuyLists?: ToBuyListUpdateManyWithoutGroupOwnerNestedInput
  }

  export type GGroupUncheckedUpdateInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutGroupOwnerNestedInput
  }

  export type GGroupCreateManyInput = {
    groupId?: number
    name: string
  }

  export type GGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GGroupUncheckedUpdateManyInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RecipeFoodListCreateInput = {
    recipe: RecipeCreateNestedOneWithoutFoodsInput
    food: FoodCreateNestedOneWithoutRecipesInput
  }

  export type RecipeFoodListUncheckedCreateInput = {
    recipeId: number
    foodId: number
  }

  export type RecipeFoodListUpdateInput = {
    recipe?: RecipeUpdateOneRequiredWithoutFoodsNestedInput
    food?: FoodUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeFoodListUncheckedUpdateInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodListCreateManyInput = {
    recipeId: number
    foodId: number
  }

  export type RecipeFoodListUpdateManyMutationInput = {

  }

  export type RecipeFoodListUncheckedUpdateManyInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryCreateInput = {
    food: FoodCreateNestedOneWithoutCategoriesInput
    category: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodCategoryUncheckedCreateInput = {
    foodId: number
    categoryId: number
  }

  export type FoodCategoryUpdateInput = {
    food?: FoodUpdateOneRequiredWithoutCategoriesNestedInput
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodCategoryUncheckedUpdateInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryCreateManyInput = {
    foodId: number
    categoryId: number
  }

  export type FoodCategoryUpdateManyMutationInput = {

  }

  export type FoodCategoryUncheckedUpdateManyInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListCreateInput = {
    date: Date | string
    toBuyListDetails?: ToBuyListDetailCreateNestedManyWithoutToBuyListInput
    owner?: UserCreateNestedOneWithoutToBuyListsInput
    groupOwner?: GGroupCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListUncheckedCreateInput = {
    toBuyListId?: number
    date: Date | string
    ownerId?: number | null
    groupOwnerId?: number | null
    toBuyListDetails?: ToBuyListDetailUncheckedCreateNestedManyWithoutToBuyListInput
  }

  export type ToBuyListUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toBuyListDetails?: ToBuyListDetailUpdateManyWithoutToBuyListNestedInput
    owner?: UserUpdateOneWithoutToBuyListsNestedInput
    groupOwner?: GGroupUpdateOneWithoutToBuyListsNestedInput
  }

  export type ToBuyListUncheckedUpdateInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    groupOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
    toBuyListDetails?: ToBuyListDetailUncheckedUpdateManyWithoutToBuyListNestedInput
  }

  export type ToBuyListCreateManyInput = {
    toBuyListId?: number
    date: Date | string
    ownerId?: number | null
    groupOwnerId?: number | null
  }

  export type ToBuyListUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ToBuyListUncheckedUpdateManyInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    groupOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FavoriteRecipeCreateInput = {
    user: UserCreateNestedOneWithoutFavoritesInput
    recipe: RecipeCreateNestedOneWithoutUsersInput
  }

  export type FavoriteRecipeUncheckedCreateInput = {
    userId: number
    recipeId: number
  }

  export type FavoriteRecipeUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    recipe?: RecipeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type FavoriteRecipeUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRecipeCreateManyInput = {
    userId: number
    recipeId: number
  }

  export type FavoriteRecipeUpdateManyMutationInput = {

  }

  export type FavoriteRecipeUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMemberCreateInput = {
    isGroupAdmin: boolean
    group: GGroupCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateInput = {
    groupId: number
    userId: number
    isGroupAdmin: boolean
  }

  export type GroupMemberUpdateInput = {
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GGroupUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberCreateManyInput = {
    groupId: number
    userId: number
    isGroupAdmin: boolean
  }

  export type GroupMemberUpdateManyMutationInput = {
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StorageFoodCreateInput = {
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    food: FoodCreateNestedOneWithoutStorageInput
    storage: StorageCreateNestedOneWithoutFoodsInput
  }

  export type StorageFoodUncheckedCreateInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    foodId: number
    storageId: number
  }

  export type StorageFoodUpdateInput = {
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutStorageNestedInput
    storage?: StorageUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type StorageFoodUncheckedUpdateInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storageId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodCreateManyInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    foodId: number
    storageId: number
  }

  export type StorageFoodUpdateManyMutationInput = {
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodUncheckedUpdateManyInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    storageId?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailCreateInput = {
    quantity: number
    toBuyList: ToBuyListCreateNestedOneWithoutToBuyListDetailsInput
    food: FoodCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListDetailUncheckedCreateInput = {
    toBuyListId: number
    foodId: number
    quantity: number
  }

  export type ToBuyListDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    toBuyList?: ToBuyListUpdateOneRequiredWithoutToBuyListDetailsNestedInput
    food?: FoodUpdateOneRequiredWithoutToBuyListsNestedInput
  }

  export type ToBuyListDetailUncheckedUpdateInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailCreateManyInput = {
    toBuyListId: number
    foodId: number
    quantity: number
  }

  export type ToBuyListDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailUncheckedUpdateManyInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FoodCategoryListRelationFilter = {
    every?: FoodCategoryWhereInput
    some?: FoodCategoryWhereInput
    none?: FoodCategoryWhereInput
  }

  export type RecipeFoodListListRelationFilter = {
    every?: RecipeFoodListWhereInput
    some?: RecipeFoodListWhereInput
    none?: RecipeFoodListWhereInput
  }

  export type StorageFoodListRelationFilter = {
    every?: StorageFoodWhereInput
    some?: StorageFoodWhereInput
    none?: StorageFoodWhereInput
  }

  export type ToBuyListDetailListRelationFilter = {
    every?: ToBuyListDetailWhereInput
    some?: ToBuyListDetailWhereInput
    none?: ToBuyListDetailWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FoodCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeFoodListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StorageFoodOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToBuyListDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FoodCountOrderByAggregateInput = {
    foodId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type FoodAvgOrderByAggregateInput = {
    foodId?: SortOrder
  }

  export type FoodMaxOrderByAggregateInput = {
    foodId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type FoodMinOrderByAggregateInput = {
    foodId?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
  }

  export type FoodSumOrderByAggregateInput = {
    foodId?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type CategoryCountOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    categoryType?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    categoryType?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    categoryId?: SortOrder
    categoryName?: SortOrder
    categoryType?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    categoryId?: SortOrder
  }

  export type FavoriteRecipeListRelationFilter = {
    every?: FavoriteRecipeWhereInput
    some?: FavoriteRecipeWhereInput
    none?: FavoriteRecipeWhereInput
  }

  export type FavoriteRecipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecipeCountOrderByAggregateInput = {
    recipeId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
  }

  export type RecipeAvgOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type RecipeMaxOrderByAggregateInput = {
    recipeId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
  }

  export type RecipeMinOrderByAggregateInput = {
    recipeId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
    description?: SortOrder
  }

  export type RecipeSumOrderByAggregateInput = {
    recipeId?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type StorageCountOrderByAggregateInput = {
    storageId?: SortOrder
    userId?: SortOrder
  }

  export type StorageAvgOrderByAggregateInput = {
    storageId?: SortOrder
    userId?: SortOrder
  }

  export type StorageMaxOrderByAggregateInput = {
    storageId?: SortOrder
    userId?: SortOrder
  }

  export type StorageMinOrderByAggregateInput = {
    storageId?: SortOrder
    userId?: SortOrder
  }

  export type StorageSumOrderByAggregateInput = {
    storageId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMemberListRelationFilter = {
    every?: GroupMemberWhereInput
    some?: GroupMemberWhereInput
    none?: GroupMemberWhereInput
  }

  export type ToBuyListListRelationFilter = {
    every?: ToBuyListWhereInput
    some?: ToBuyListWhereInput
    none?: ToBuyListWhereInput
  }

  export type StorageRelationFilter = {
    is?: StorageWhereInput | null
    isNot?: StorageWhereInput | null
  }

  export type GroupMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToBuyListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    username?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type GGroupCountOrderByAggregateInput = {
    groupId?: SortOrder
    name?: SortOrder
  }

  export type GGroupAvgOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type GGroupMaxOrderByAggregateInput = {
    groupId?: SortOrder
    name?: SortOrder
  }

  export type GGroupMinOrderByAggregateInput = {
    groupId?: SortOrder
    name?: SortOrder
  }

  export type GGroupSumOrderByAggregateInput = {
    groupId?: SortOrder
  }

  export type RecipeRelationFilter = {
    is?: RecipeWhereInput | null
    isNot?: RecipeWhereInput | null
  }

  export type FoodRelationFilter = {
    is?: FoodWhereInput | null
    isNot?: FoodWhereInput | null
  }

  export type RecipeFoodListRecipeIdFoodIdCompoundUniqueInput = {
    recipeId: number
    foodId: number
  }

  export type RecipeFoodListCountOrderByAggregateInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
  }

  export type RecipeFoodListAvgOrderByAggregateInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
  }

  export type RecipeFoodListMaxOrderByAggregateInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
  }

  export type RecipeFoodListMinOrderByAggregateInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
  }

  export type RecipeFoodListSumOrderByAggregateInput = {
    recipeId?: SortOrder
    foodId?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type FoodCategoryFoodIdCategoryIdCompoundUniqueInput = {
    foodId: number
    categoryId: number
  }

  export type FoodCategoryCountOrderByAggregateInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
  }

  export type FoodCategoryAvgOrderByAggregateInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
  }

  export type FoodCategoryMaxOrderByAggregateInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
  }

  export type FoodCategoryMinOrderByAggregateInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
  }

  export type FoodCategorySumOrderByAggregateInput = {
    foodId?: SortOrder
    categoryId?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type GGroupRelationFilter = {
    is?: GGroupWhereInput | null
    isNot?: GGroupWhereInput | null
  }

  export type ToBuyListCountOrderByAggregateInput = {
    toBuyListId?: SortOrder
    date?: SortOrder
    ownerId?: SortOrder
    groupOwnerId?: SortOrder
  }

  export type ToBuyListAvgOrderByAggregateInput = {
    toBuyListId?: SortOrder
    ownerId?: SortOrder
    groupOwnerId?: SortOrder
  }

  export type ToBuyListMaxOrderByAggregateInput = {
    toBuyListId?: SortOrder
    date?: SortOrder
    ownerId?: SortOrder
    groupOwnerId?: SortOrder
  }

  export type ToBuyListMinOrderByAggregateInput = {
    toBuyListId?: SortOrder
    date?: SortOrder
    ownerId?: SortOrder
    groupOwnerId?: SortOrder
  }

  export type ToBuyListSumOrderByAggregateInput = {
    toBuyListId?: SortOrder
    ownerId?: SortOrder
    groupOwnerId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type FavoriteRecipeUserIdRecipeIdCompoundUniqueInput = {
    userId: number
    recipeId: number
  }

  export type FavoriteRecipeCountOrderByAggregateInput = {
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type FavoriteRecipeAvgOrderByAggregateInput = {
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type FavoriteRecipeMaxOrderByAggregateInput = {
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type FavoriteRecipeMinOrderByAggregateInput = {
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type FavoriteRecipeSumOrderByAggregateInput = {
    userId?: SortOrder
    recipeId?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type GroupMemberGroupIdUserIdCompoundUniqueInput = {
    groupId: number
    userId: number
  }

  export type GroupMemberCountOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isGroupAdmin?: SortOrder
  }

  export type GroupMemberAvgOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMemberMaxOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isGroupAdmin?: SortOrder
  }

  export type GroupMemberMinOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
    isGroupAdmin?: SortOrder
  }

  export type GroupMemberSumOrderByAggregateInput = {
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StorageFoodCountOrderByAggregateInput = {
    storageFoodId?: SortOrder
    storageDate?: SortOrder
    outdate?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
  }

  export type StorageFoodAvgOrderByAggregateInput = {
    storageFoodId?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
  }

  export type StorageFoodMaxOrderByAggregateInput = {
    storageFoodId?: SortOrder
    storageDate?: SortOrder
    outdate?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
  }

  export type StorageFoodMinOrderByAggregateInput = {
    storageFoodId?: SortOrder
    storageDate?: SortOrder
    outdate?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
  }

  export type StorageFoodSumOrderByAggregateInput = {
    storageFoodId?: SortOrder
    quantity?: SortOrder
    foodId?: SortOrder
    storageId?: SortOrder
  }

  export type ToBuyListRelationFilter = {
    is?: ToBuyListWhereInput | null
    isNot?: ToBuyListWhereInput | null
  }

  export type ToBuyListDetailToBuyListIdFoodIdCompoundUniqueInput = {
    toBuyListId: number
    foodId: number
  }

  export type ToBuyListDetailCountOrderByAggregateInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type ToBuyListDetailAvgOrderByAggregateInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type ToBuyListDetailMaxOrderByAggregateInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type ToBuyListDetailMinOrderByAggregateInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type ToBuyListDetailSumOrderByAggregateInput = {
    toBuyListId?: SortOrder
    foodId?: SortOrder
    quantity?: SortOrder
  }

  export type FoodCategoryCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutFoodInput>, Enumerable<FoodCategoryUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutFoodInput>
    createMany?: FoodCategoryCreateManyFoodInputEnvelope
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
  }

  export type RecipeFoodListCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutFoodInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutFoodInput>
    createMany?: RecipeFoodListCreateManyFoodInputEnvelope
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
  }

  export type StorageFoodCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutFoodInput>, Enumerable<StorageFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutFoodInput>
    createMany?: StorageFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<StorageFoodWhereUniqueInput>
  }

  export type ToBuyListDetailCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutFoodInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutFoodInput>
    createMany?: ToBuyListDetailCreateManyFoodInputEnvelope
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
  }

  export type FoodCategoryUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutFoodInput>, Enumerable<FoodCategoryUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutFoodInput>
    createMany?: FoodCategoryCreateManyFoodInputEnvelope
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
  }

  export type RecipeFoodListUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutFoodInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutFoodInput>
    createMany?: RecipeFoodListCreateManyFoodInputEnvelope
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
  }

  export type StorageFoodUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutFoodInput>, Enumerable<StorageFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutFoodInput>
    createMany?: StorageFoodCreateManyFoodInputEnvelope
    connect?: Enumerable<StorageFoodWhereUniqueInput>
  }

  export type ToBuyListDetailUncheckedCreateNestedManyWithoutFoodInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutFoodInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutFoodInput>
    createMany?: ToBuyListDetailCreateManyFoodInputEnvelope
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FoodCategoryUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutFoodInput>, Enumerable<FoodCategoryUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<FoodCategoryUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: FoodCategoryCreateManyFoodInputEnvelope
    set?: Enumerable<FoodCategoryWhereUniqueInput>
    disconnect?: Enumerable<FoodCategoryWhereUniqueInput>
    delete?: Enumerable<FoodCategoryWhereUniqueInput>
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
    update?: Enumerable<FoodCategoryUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<FoodCategoryUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<FoodCategoryScalarWhereInput>
  }

  export type RecipeFoodListUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutFoodInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<RecipeFoodListUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: RecipeFoodListCreateManyFoodInputEnvelope
    set?: Enumerable<RecipeFoodListWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodListWhereUniqueInput>
    delete?: Enumerable<RecipeFoodListWhereUniqueInput>
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
    update?: Enumerable<RecipeFoodListUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<RecipeFoodListUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<RecipeFoodListScalarWhereInput>
  }

  export type StorageFoodUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutFoodInput>, Enumerable<StorageFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<StorageFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: StorageFoodCreateManyFoodInputEnvelope
    set?: Enumerable<StorageFoodWhereUniqueInput>
    disconnect?: Enumerable<StorageFoodWhereUniqueInput>
    delete?: Enumerable<StorageFoodWhereUniqueInput>
    connect?: Enumerable<StorageFoodWhereUniqueInput>
    update?: Enumerable<StorageFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<StorageFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<StorageFoodScalarWhereInput>
  }

  export type ToBuyListDetailUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutFoodInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<ToBuyListDetailUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: ToBuyListDetailCreateManyFoodInputEnvelope
    set?: Enumerable<ToBuyListDetailWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    delete?: Enumerable<ToBuyListDetailWhereUniqueInput>
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    update?: Enumerable<ToBuyListDetailUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<ToBuyListDetailUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<ToBuyListDetailScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FoodCategoryUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutFoodInput>, Enumerable<FoodCategoryUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<FoodCategoryUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: FoodCategoryCreateManyFoodInputEnvelope
    set?: Enumerable<FoodCategoryWhereUniqueInput>
    disconnect?: Enumerable<FoodCategoryWhereUniqueInput>
    delete?: Enumerable<FoodCategoryWhereUniqueInput>
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
    update?: Enumerable<FoodCategoryUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<FoodCategoryUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<FoodCategoryScalarWhereInput>
  }

  export type RecipeFoodListUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutFoodInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<RecipeFoodListUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: RecipeFoodListCreateManyFoodInputEnvelope
    set?: Enumerable<RecipeFoodListWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodListWhereUniqueInput>
    delete?: Enumerable<RecipeFoodListWhereUniqueInput>
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
    update?: Enumerable<RecipeFoodListUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<RecipeFoodListUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<RecipeFoodListScalarWhereInput>
  }

  export type StorageFoodUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutFoodInput>, Enumerable<StorageFoodUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<StorageFoodUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: StorageFoodCreateManyFoodInputEnvelope
    set?: Enumerable<StorageFoodWhereUniqueInput>
    disconnect?: Enumerable<StorageFoodWhereUniqueInput>
    delete?: Enumerable<StorageFoodWhereUniqueInput>
    connect?: Enumerable<StorageFoodWhereUniqueInput>
    update?: Enumerable<StorageFoodUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<StorageFoodUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<StorageFoodScalarWhereInput>
  }

  export type ToBuyListDetailUncheckedUpdateManyWithoutFoodNestedInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutFoodInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutFoodInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutFoodInput>
    upsert?: Enumerable<ToBuyListDetailUpsertWithWhereUniqueWithoutFoodInput>
    createMany?: ToBuyListDetailCreateManyFoodInputEnvelope
    set?: Enumerable<ToBuyListDetailWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    delete?: Enumerable<ToBuyListDetailWhereUniqueInput>
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    update?: Enumerable<ToBuyListDetailUpdateWithWhereUniqueWithoutFoodInput>
    updateMany?: Enumerable<ToBuyListDetailUpdateManyWithWhereWithoutFoodInput>
    deleteMany?: Enumerable<ToBuyListDetailScalarWhereInput>
  }

  export type FoodCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutCategoryInput>, Enumerable<FoodCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: FoodCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
  }

  export type FoodCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutCategoryInput>, Enumerable<FoodCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutCategoryInput>
    createMany?: FoodCategoryCreateManyCategoryInputEnvelope
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
  }

  export type FoodCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutCategoryInput>, Enumerable<FoodCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<FoodCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: FoodCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<FoodCategoryWhereUniqueInput>
    disconnect?: Enumerable<FoodCategoryWhereUniqueInput>
    delete?: Enumerable<FoodCategoryWhereUniqueInput>
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
    update?: Enumerable<FoodCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<FoodCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<FoodCategoryScalarWhereInput>
  }

  export type FoodCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<FoodCategoryCreateWithoutCategoryInput>, Enumerable<FoodCategoryUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<FoodCategoryCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<FoodCategoryUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: FoodCategoryCreateManyCategoryInputEnvelope
    set?: Enumerable<FoodCategoryWhereUniqueInput>
    disconnect?: Enumerable<FoodCategoryWhereUniqueInput>
    delete?: Enumerable<FoodCategoryWhereUniqueInput>
    connect?: Enumerable<FoodCategoryWhereUniqueInput>
    update?: Enumerable<FoodCategoryUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<FoodCategoryUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<FoodCategoryScalarWhereInput>
  }

  export type RecipeFoodListCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutRecipeInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeFoodListCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
  }

  export type FavoriteRecipeCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutRecipeInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutRecipeInput>
    createMany?: FavoriteRecipeCreateManyRecipeInputEnvelope
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
  }

  export type RecipeFoodListUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutRecipeInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutRecipeInput>
    createMany?: RecipeFoodListCreateManyRecipeInputEnvelope
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
  }

  export type FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutRecipeInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutRecipeInput>
    createMany?: FavoriteRecipeCreateManyRecipeInputEnvelope
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
  }

  export type RecipeFoodListUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutRecipeInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeFoodListUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeFoodListCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeFoodListWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodListWhereUniqueInput>
    delete?: Enumerable<RecipeFoodListWhereUniqueInput>
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
    update?: Enumerable<RecipeFoodListUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeFoodListUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeFoodListScalarWhereInput>
  }

  export type FavoriteRecipeUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutRecipeInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<FavoriteRecipeUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: FavoriteRecipeCreateManyRecipeInputEnvelope
    set?: Enumerable<FavoriteRecipeWhereUniqueInput>
    disconnect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    delete?: Enumerable<FavoriteRecipeWhereUniqueInput>
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    update?: Enumerable<FavoriteRecipeUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<FavoriteRecipeUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<FavoriteRecipeScalarWhereInput>
  }

  export type RecipeFoodListUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<RecipeFoodListCreateWithoutRecipeInput>, Enumerable<RecipeFoodListUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<RecipeFoodListCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<RecipeFoodListUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: RecipeFoodListCreateManyRecipeInputEnvelope
    set?: Enumerable<RecipeFoodListWhereUniqueInput>
    disconnect?: Enumerable<RecipeFoodListWhereUniqueInput>
    delete?: Enumerable<RecipeFoodListWhereUniqueInput>
    connect?: Enumerable<RecipeFoodListWhereUniqueInput>
    update?: Enumerable<RecipeFoodListUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<RecipeFoodListUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<RecipeFoodListScalarWhereInput>
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutRecipeInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutRecipeInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutRecipeInput>
    upsert?: Enumerable<FavoriteRecipeUpsertWithWhereUniqueWithoutRecipeInput>
    createMany?: FavoriteRecipeCreateManyRecipeInputEnvelope
    set?: Enumerable<FavoriteRecipeWhereUniqueInput>
    disconnect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    delete?: Enumerable<FavoriteRecipeWhereUniqueInput>
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    update?: Enumerable<FavoriteRecipeUpdateWithWhereUniqueWithoutRecipeInput>
    updateMany?: Enumerable<FavoriteRecipeUpdateManyWithWhereWithoutRecipeInput>
    deleteMany?: Enumerable<FavoriteRecipeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutStorageInput = {
    create?: XOR<UserCreateWithoutStorageInput, UserUncheckedCreateWithoutStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorageInput
    connect?: UserWhereUniqueInput
  }

  export type StorageFoodCreateNestedManyWithoutStorageInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutStorageInput>, Enumerable<StorageFoodUncheckedCreateWithoutStorageInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutStorageInput>
    createMany?: StorageFoodCreateManyStorageInputEnvelope
    connect?: Enumerable<StorageFoodWhereUniqueInput>
  }

  export type StorageFoodUncheckedCreateNestedManyWithoutStorageInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutStorageInput>, Enumerable<StorageFoodUncheckedCreateWithoutStorageInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutStorageInput>
    createMany?: StorageFoodCreateManyStorageInputEnvelope
    connect?: Enumerable<StorageFoodWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutStorageNestedInput = {
    create?: XOR<UserCreateWithoutStorageInput, UserUncheckedCreateWithoutStorageInput>
    connectOrCreate?: UserCreateOrConnectWithoutStorageInput
    upsert?: UserUpsertWithoutStorageInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutStorageInput, UserUncheckedUpdateWithoutStorageInput>
  }

  export type StorageFoodUpdateManyWithoutStorageNestedInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutStorageInput>, Enumerable<StorageFoodUncheckedCreateWithoutStorageInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutStorageInput>
    upsert?: Enumerable<StorageFoodUpsertWithWhereUniqueWithoutStorageInput>
    createMany?: StorageFoodCreateManyStorageInputEnvelope
    set?: Enumerable<StorageFoodWhereUniqueInput>
    disconnect?: Enumerable<StorageFoodWhereUniqueInput>
    delete?: Enumerable<StorageFoodWhereUniqueInput>
    connect?: Enumerable<StorageFoodWhereUniqueInput>
    update?: Enumerable<StorageFoodUpdateWithWhereUniqueWithoutStorageInput>
    updateMany?: Enumerable<StorageFoodUpdateManyWithWhereWithoutStorageInput>
    deleteMany?: Enumerable<StorageFoodScalarWhereInput>
  }

  export type StorageFoodUncheckedUpdateManyWithoutStorageNestedInput = {
    create?: XOR<Enumerable<StorageFoodCreateWithoutStorageInput>, Enumerable<StorageFoodUncheckedCreateWithoutStorageInput>>
    connectOrCreate?: Enumerable<StorageFoodCreateOrConnectWithoutStorageInput>
    upsert?: Enumerable<StorageFoodUpsertWithWhereUniqueWithoutStorageInput>
    createMany?: StorageFoodCreateManyStorageInputEnvelope
    set?: Enumerable<StorageFoodWhereUniqueInput>
    disconnect?: Enumerable<StorageFoodWhereUniqueInput>
    delete?: Enumerable<StorageFoodWhereUniqueInput>
    connect?: Enumerable<StorageFoodWhereUniqueInput>
    update?: Enumerable<StorageFoodUpdateWithWhereUniqueWithoutStorageInput>
    updateMany?: Enumerable<StorageFoodUpdateManyWithWhereWithoutStorageInput>
    deleteMany?: Enumerable<StorageFoodScalarWhereInput>
  }

  export type FavoriteRecipeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutUserInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutUserInput>
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
  }

  export type GroupMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutUserInput>, Enumerable<GroupMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutUserInput>
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: Enumerable<GroupMemberWhereUniqueInput>
  }

  export type ToBuyListCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutOwnerInput>
    createMany?: ToBuyListCreateManyOwnerInputEnvelope
    connect?: Enumerable<ToBuyListWhereUniqueInput>
  }

  export type StorageCreateNestedOneWithoutUserInput = {
    create?: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
    connectOrCreate?: StorageCreateOrConnectWithoutUserInput
    connect?: StorageWhereUniqueInput
  }

  export type FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutUserInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutUserInput>
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutUserInput>, Enumerable<GroupMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutUserInput>
    createMany?: GroupMemberCreateManyUserInputEnvelope
    connect?: Enumerable<GroupMemberWhereUniqueInput>
  }

  export type ToBuyListUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutOwnerInput>
    createMany?: ToBuyListCreateManyOwnerInputEnvelope
    connect?: Enumerable<ToBuyListWhereUniqueInput>
  }

  export type StorageUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
    connectOrCreate?: StorageCreateOrConnectWithoutUserInput
    connect?: StorageWhereUniqueInput
  }

  export type FavoriteRecipeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutUserInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    set?: Enumerable<FavoriteRecipeWhereUniqueInput>
    disconnect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    delete?: Enumerable<FavoriteRecipeWhereUniqueInput>
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    update?: Enumerable<FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteRecipeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteRecipeScalarWhereInput>
  }

  export type GroupMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutUserInput>, Enumerable<GroupMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: Enumerable<GroupMemberWhereUniqueInput>
    disconnect?: Enumerable<GroupMemberWhereUniqueInput>
    delete?: Enumerable<GroupMemberWhereUniqueInput>
    connect?: Enumerable<GroupMemberWhereUniqueInput>
    update?: Enumerable<GroupMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupMemberScalarWhereInput>
  }

  export type ToBuyListUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ToBuyListUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ToBuyListCreateManyOwnerInputEnvelope
    set?: Enumerable<ToBuyListWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListWhereUniqueInput>
    delete?: Enumerable<ToBuyListWhereUniqueInput>
    connect?: Enumerable<ToBuyListWhereUniqueInput>
    update?: Enumerable<ToBuyListUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ToBuyListUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ToBuyListScalarWhereInput>
  }

  export type StorageUpdateOneWithoutUserNestedInput = {
    create?: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
    connectOrCreate?: StorageCreateOrConnectWithoutUserInput
    upsert?: StorageUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StorageWhereUniqueInput
    update?: XOR<StorageUpdateWithoutUserInput, StorageUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FavoriteRecipeCreateWithoutUserInput>, Enumerable<FavoriteRecipeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FavoriteRecipeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FavoriteRecipeCreateManyUserInputEnvelope
    set?: Enumerable<FavoriteRecipeWhereUniqueInput>
    disconnect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    delete?: Enumerable<FavoriteRecipeWhereUniqueInput>
    connect?: Enumerable<FavoriteRecipeWhereUniqueInput>
    update?: Enumerable<FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FavoriteRecipeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FavoriteRecipeScalarWhereInput>
  }

  export type GroupMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutUserInput>, Enumerable<GroupMemberUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<GroupMemberUpsertWithWhereUniqueWithoutUserInput>
    createMany?: GroupMemberCreateManyUserInputEnvelope
    set?: Enumerable<GroupMemberWhereUniqueInput>
    disconnect?: Enumerable<GroupMemberWhereUniqueInput>
    delete?: Enumerable<GroupMemberWhereUniqueInput>
    connect?: Enumerable<GroupMemberWhereUniqueInput>
    update?: Enumerable<GroupMemberUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<GroupMemberUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<GroupMemberScalarWhereInput>
  }

  export type ToBuyListUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<ToBuyListUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: ToBuyListCreateManyOwnerInputEnvelope
    set?: Enumerable<ToBuyListWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListWhereUniqueInput>
    delete?: Enumerable<ToBuyListWhereUniqueInput>
    connect?: Enumerable<ToBuyListWhereUniqueInput>
    update?: Enumerable<ToBuyListUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<ToBuyListUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<ToBuyListScalarWhereInput>
  }

  export type StorageUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
    connectOrCreate?: StorageCreateOrConnectWithoutUserInput
    upsert?: StorageUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: StorageWhereUniqueInput
    update?: XOR<StorageUpdateWithoutUserInput, StorageUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutGroupInput>, Enumerable<GroupMemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutGroupInput>
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupMemberWhereUniqueInput>
  }

  export type ToBuyListCreateNestedManyWithoutGroupOwnerInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutGroupOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutGroupOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutGroupOwnerInput>
    createMany?: ToBuyListCreateManyGroupOwnerInputEnvelope
    connect?: Enumerable<ToBuyListWhereUniqueInput>
  }

  export type GroupMemberUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutGroupInput>, Enumerable<GroupMemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutGroupInput>
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    connect?: Enumerable<GroupMemberWhereUniqueInput>
  }

  export type ToBuyListUncheckedCreateNestedManyWithoutGroupOwnerInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutGroupOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutGroupOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutGroupOwnerInput>
    createMany?: ToBuyListCreateManyGroupOwnerInputEnvelope
    connect?: Enumerable<ToBuyListWhereUniqueInput>
  }

  export type GroupMemberUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutGroupInput>, Enumerable<GroupMemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupMemberUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: Enumerable<GroupMemberWhereUniqueInput>
    disconnect?: Enumerable<GroupMemberWhereUniqueInput>
    delete?: Enumerable<GroupMemberWhereUniqueInput>
    connect?: Enumerable<GroupMemberWhereUniqueInput>
    update?: Enumerable<GroupMemberUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupMemberUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupMemberScalarWhereInput>
  }

  export type ToBuyListUpdateManyWithoutGroupOwnerNestedInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutGroupOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutGroupOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutGroupOwnerInput>
    upsert?: Enumerable<ToBuyListUpsertWithWhereUniqueWithoutGroupOwnerInput>
    createMany?: ToBuyListCreateManyGroupOwnerInputEnvelope
    set?: Enumerable<ToBuyListWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListWhereUniqueInput>
    delete?: Enumerable<ToBuyListWhereUniqueInput>
    connect?: Enumerable<ToBuyListWhereUniqueInput>
    update?: Enumerable<ToBuyListUpdateWithWhereUniqueWithoutGroupOwnerInput>
    updateMany?: Enumerable<ToBuyListUpdateManyWithWhereWithoutGroupOwnerInput>
    deleteMany?: Enumerable<ToBuyListScalarWhereInput>
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<Enumerable<GroupMemberCreateWithoutGroupInput>, Enumerable<GroupMemberUncheckedCreateWithoutGroupInput>>
    connectOrCreate?: Enumerable<GroupMemberCreateOrConnectWithoutGroupInput>
    upsert?: Enumerable<GroupMemberUpsertWithWhereUniqueWithoutGroupInput>
    createMany?: GroupMemberCreateManyGroupInputEnvelope
    set?: Enumerable<GroupMemberWhereUniqueInput>
    disconnect?: Enumerable<GroupMemberWhereUniqueInput>
    delete?: Enumerable<GroupMemberWhereUniqueInput>
    connect?: Enumerable<GroupMemberWhereUniqueInput>
    update?: Enumerable<GroupMemberUpdateWithWhereUniqueWithoutGroupInput>
    updateMany?: Enumerable<GroupMemberUpdateManyWithWhereWithoutGroupInput>
    deleteMany?: Enumerable<GroupMemberScalarWhereInput>
  }

  export type ToBuyListUncheckedUpdateManyWithoutGroupOwnerNestedInput = {
    create?: XOR<Enumerable<ToBuyListCreateWithoutGroupOwnerInput>, Enumerable<ToBuyListUncheckedCreateWithoutGroupOwnerInput>>
    connectOrCreate?: Enumerable<ToBuyListCreateOrConnectWithoutGroupOwnerInput>
    upsert?: Enumerable<ToBuyListUpsertWithWhereUniqueWithoutGroupOwnerInput>
    createMany?: ToBuyListCreateManyGroupOwnerInputEnvelope
    set?: Enumerable<ToBuyListWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListWhereUniqueInput>
    delete?: Enumerable<ToBuyListWhereUniqueInput>
    connect?: Enumerable<ToBuyListWhereUniqueInput>
    update?: Enumerable<ToBuyListUpdateWithWhereUniqueWithoutGroupOwnerInput>
    updateMany?: Enumerable<ToBuyListUpdateManyWithWhereWithoutGroupOwnerInput>
    deleteMany?: Enumerable<ToBuyListScalarWhereInput>
  }

  export type RecipeCreateNestedOneWithoutFoodsInput = {
    create?: XOR<RecipeCreateWithoutFoodsInput, RecipeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFoodsInput
    connect?: RecipeWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutRecipesInput = {
    create?: XOR<FoodCreateWithoutRecipesInput, FoodUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutRecipesInput
    connect?: FoodWhereUniqueInput
  }

  export type RecipeUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<RecipeCreateWithoutFoodsInput, RecipeUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutFoodsInput
    upsert?: RecipeUpsertWithoutFoodsInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutFoodsInput, RecipeUncheckedUpdateWithoutFoodsInput>
  }

  export type FoodUpdateOneRequiredWithoutRecipesNestedInput = {
    create?: XOR<FoodCreateWithoutRecipesInput, FoodUncheckedCreateWithoutRecipesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutRecipesInput
    upsert?: FoodUpsertWithoutRecipesInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutRecipesInput, FoodUncheckedUpdateWithoutRecipesInput>
  }

  export type FoodCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<FoodCreateWithoutCategoriesInput, FoodUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutCategoriesInput
    connect?: FoodWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutFoodsInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<FoodCreateWithoutCategoriesInput, FoodUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: FoodCreateOrConnectWithoutCategoriesInput
    upsert?: FoodUpsertWithoutCategoriesInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutCategoriesInput, FoodUncheckedUpdateWithoutCategoriesInput>
  }

  export type CategoryUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutFoodsInput
    upsert?: CategoryUpsertWithoutFoodsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
  }

  export type ToBuyListDetailCreateNestedManyWithoutToBuyListInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutToBuyListInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutToBuyListInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutToBuyListInput>
    createMany?: ToBuyListDetailCreateManyToBuyListInputEnvelope
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutToBuyListsInput = {
    create?: XOR<UserCreateWithoutToBuyListsInput, UserUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToBuyListsInput
    connect?: UserWhereUniqueInput
  }

  export type GGroupCreateNestedOneWithoutToBuyListsInput = {
    create?: XOR<GGroupCreateWithoutToBuyListsInput, GGroupUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: GGroupCreateOrConnectWithoutToBuyListsInput
    connect?: GGroupWhereUniqueInput
  }

  export type ToBuyListDetailUncheckedCreateNestedManyWithoutToBuyListInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutToBuyListInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutToBuyListInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutToBuyListInput>
    createMany?: ToBuyListDetailCreateManyToBuyListInputEnvelope
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ToBuyListDetailUpdateManyWithoutToBuyListNestedInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutToBuyListInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutToBuyListInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutToBuyListInput>
    upsert?: Enumerable<ToBuyListDetailUpsertWithWhereUniqueWithoutToBuyListInput>
    createMany?: ToBuyListDetailCreateManyToBuyListInputEnvelope
    set?: Enumerable<ToBuyListDetailWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    delete?: Enumerable<ToBuyListDetailWhereUniqueInput>
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    update?: Enumerable<ToBuyListDetailUpdateWithWhereUniqueWithoutToBuyListInput>
    updateMany?: Enumerable<ToBuyListDetailUpdateManyWithWhereWithoutToBuyListInput>
    deleteMany?: Enumerable<ToBuyListDetailScalarWhereInput>
  }

  export type UserUpdateOneWithoutToBuyListsNestedInput = {
    create?: XOR<UserCreateWithoutToBuyListsInput, UserUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToBuyListsInput
    upsert?: UserUpsertWithoutToBuyListsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutToBuyListsInput, UserUncheckedUpdateWithoutToBuyListsInput>
  }

  export type GGroupUpdateOneWithoutToBuyListsNestedInput = {
    create?: XOR<GGroupCreateWithoutToBuyListsInput, GGroupUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: GGroupCreateOrConnectWithoutToBuyListsInput
    upsert?: GGroupUpsertWithoutToBuyListsInput
    disconnect?: boolean
    delete?: boolean
    connect?: GGroupWhereUniqueInput
    update?: XOR<GGroupUpdateWithoutToBuyListsInput, GGroupUncheckedUpdateWithoutToBuyListsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ToBuyListDetailUncheckedUpdateManyWithoutToBuyListNestedInput = {
    create?: XOR<Enumerable<ToBuyListDetailCreateWithoutToBuyListInput>, Enumerable<ToBuyListDetailUncheckedCreateWithoutToBuyListInput>>
    connectOrCreate?: Enumerable<ToBuyListDetailCreateOrConnectWithoutToBuyListInput>
    upsert?: Enumerable<ToBuyListDetailUpsertWithWhereUniqueWithoutToBuyListInput>
    createMany?: ToBuyListDetailCreateManyToBuyListInputEnvelope
    set?: Enumerable<ToBuyListDetailWhereUniqueInput>
    disconnect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    delete?: Enumerable<ToBuyListDetailWhereUniqueInput>
    connect?: Enumerable<ToBuyListDetailWhereUniqueInput>
    update?: Enumerable<ToBuyListDetailUpdateWithWhereUniqueWithoutToBuyListInput>
    updateMany?: Enumerable<ToBuyListDetailUpdateManyWithWhereWithoutToBuyListInput>
    deleteMany?: Enumerable<ToBuyListDetailScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type RecipeCreateNestedOneWithoutUsersInput = {
    create?: XOR<RecipeCreateWithoutUsersInput, RecipeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutUsersInput
    connect?: RecipeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type RecipeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RecipeCreateWithoutUsersInput, RecipeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RecipeCreateOrConnectWithoutUsersInput
    upsert?: RecipeUpsertWithoutUsersInput
    connect?: RecipeWhereUniqueInput
    update?: XOR<RecipeUpdateWithoutUsersInput, RecipeUncheckedUpdateWithoutUsersInput>
  }

  export type GGroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<GGroupCreateWithoutUsersInput, GGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GGroupCreateOrConnectWithoutUsersInput
    connect?: GGroupWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGroupsInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GGroupUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<GGroupCreateWithoutUsersInput, GGroupUncheckedCreateWithoutUsersInput>
    connectOrCreate?: GGroupCreateOrConnectWithoutUsersInput
    upsert?: GGroupUpsertWithoutUsersInput
    connect?: GGroupWhereUniqueInput
    update?: XOR<GGroupUpdateWithoutUsersInput, GGroupUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutGroupsNestedInput = {
    create?: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGroupsInput
    upsert?: UserUpsertWithoutGroupsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
  }

  export type FoodCreateNestedOneWithoutStorageInput = {
    create?: XOR<FoodCreateWithoutStorageInput, FoodUncheckedCreateWithoutStorageInput>
    connectOrCreate?: FoodCreateOrConnectWithoutStorageInput
    connect?: FoodWhereUniqueInput
  }

  export type StorageCreateNestedOneWithoutFoodsInput = {
    create?: XOR<StorageCreateWithoutFoodsInput, StorageUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StorageCreateOrConnectWithoutFoodsInput
    connect?: StorageWhereUniqueInput
  }

  export type FoodUpdateOneRequiredWithoutStorageNestedInput = {
    create?: XOR<FoodCreateWithoutStorageInput, FoodUncheckedCreateWithoutStorageInput>
    connectOrCreate?: FoodCreateOrConnectWithoutStorageInput
    upsert?: FoodUpsertWithoutStorageInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutStorageInput, FoodUncheckedUpdateWithoutStorageInput>
  }

  export type StorageUpdateOneRequiredWithoutFoodsNestedInput = {
    create?: XOR<StorageCreateWithoutFoodsInput, StorageUncheckedCreateWithoutFoodsInput>
    connectOrCreate?: StorageCreateOrConnectWithoutFoodsInput
    upsert?: StorageUpsertWithoutFoodsInput
    connect?: StorageWhereUniqueInput
    update?: XOR<StorageUpdateWithoutFoodsInput, StorageUncheckedUpdateWithoutFoodsInput>
  }

  export type ToBuyListCreateNestedOneWithoutToBuyListDetailsInput = {
    create?: XOR<ToBuyListCreateWithoutToBuyListDetailsInput, ToBuyListUncheckedCreateWithoutToBuyListDetailsInput>
    connectOrCreate?: ToBuyListCreateOrConnectWithoutToBuyListDetailsInput
    connect?: ToBuyListWhereUniqueInput
  }

  export type FoodCreateNestedOneWithoutToBuyListsInput = {
    create?: XOR<FoodCreateWithoutToBuyListsInput, FoodUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutToBuyListsInput
    connect?: FoodWhereUniqueInput
  }

  export type ToBuyListUpdateOneRequiredWithoutToBuyListDetailsNestedInput = {
    create?: XOR<ToBuyListCreateWithoutToBuyListDetailsInput, ToBuyListUncheckedCreateWithoutToBuyListDetailsInput>
    connectOrCreate?: ToBuyListCreateOrConnectWithoutToBuyListDetailsInput
    upsert?: ToBuyListUpsertWithoutToBuyListDetailsInput
    connect?: ToBuyListWhereUniqueInput
    update?: XOR<ToBuyListUpdateWithoutToBuyListDetailsInput, ToBuyListUncheckedUpdateWithoutToBuyListDetailsInput>
  }

  export type FoodUpdateOneRequiredWithoutToBuyListsNestedInput = {
    create?: XOR<FoodCreateWithoutToBuyListsInput, FoodUncheckedCreateWithoutToBuyListsInput>
    connectOrCreate?: FoodCreateOrConnectWithoutToBuyListsInput
    upsert?: FoodUpsertWithoutToBuyListsInput
    connect?: FoodWhereUniqueInput
    update?: XOR<FoodUpdateWithoutToBuyListsInput, FoodUncheckedUpdateWithoutToBuyListsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type FoodCategoryCreateWithoutFoodInput = {
    category: CategoryCreateNestedOneWithoutFoodsInput
  }

  export type FoodCategoryUncheckedCreateWithoutFoodInput = {
    categoryId: number
  }

  export type FoodCategoryCreateOrConnectWithoutFoodInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutFoodInput, FoodCategoryUncheckedCreateWithoutFoodInput>
  }

  export type FoodCategoryCreateManyFoodInputEnvelope = {
    data: Enumerable<FoodCategoryCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type RecipeFoodListCreateWithoutFoodInput = {
    recipe: RecipeCreateNestedOneWithoutFoodsInput
  }

  export type RecipeFoodListUncheckedCreateWithoutFoodInput = {
    recipeId: number
  }

  export type RecipeFoodListCreateOrConnectWithoutFoodInput = {
    where: RecipeFoodListWhereUniqueInput
    create: XOR<RecipeFoodListCreateWithoutFoodInput, RecipeFoodListUncheckedCreateWithoutFoodInput>
  }

  export type RecipeFoodListCreateManyFoodInputEnvelope = {
    data: Enumerable<RecipeFoodListCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type StorageFoodCreateWithoutFoodInput = {
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    storage: StorageCreateNestedOneWithoutFoodsInput
  }

  export type StorageFoodUncheckedCreateWithoutFoodInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    storageId: number
  }

  export type StorageFoodCreateOrConnectWithoutFoodInput = {
    where: StorageFoodWhereUniqueInput
    create: XOR<StorageFoodCreateWithoutFoodInput, StorageFoodUncheckedCreateWithoutFoodInput>
  }

  export type StorageFoodCreateManyFoodInputEnvelope = {
    data: Enumerable<StorageFoodCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type ToBuyListDetailCreateWithoutFoodInput = {
    quantity: number
    toBuyList: ToBuyListCreateNestedOneWithoutToBuyListDetailsInput
  }

  export type ToBuyListDetailUncheckedCreateWithoutFoodInput = {
    toBuyListId: number
    quantity: number
  }

  export type ToBuyListDetailCreateOrConnectWithoutFoodInput = {
    where: ToBuyListDetailWhereUniqueInput
    create: XOR<ToBuyListDetailCreateWithoutFoodInput, ToBuyListDetailUncheckedCreateWithoutFoodInput>
  }

  export type ToBuyListDetailCreateManyFoodInputEnvelope = {
    data: Enumerable<ToBuyListDetailCreateManyFoodInput>
    skipDuplicates?: boolean
  }

  export type FoodCategoryUpsertWithWhereUniqueWithoutFoodInput = {
    where: FoodCategoryWhereUniqueInput
    update: XOR<FoodCategoryUpdateWithoutFoodInput, FoodCategoryUncheckedUpdateWithoutFoodInput>
    create: XOR<FoodCategoryCreateWithoutFoodInput, FoodCategoryUncheckedCreateWithoutFoodInput>
  }

  export type FoodCategoryUpdateWithWhereUniqueWithoutFoodInput = {
    where: FoodCategoryWhereUniqueInput
    data: XOR<FoodCategoryUpdateWithoutFoodInput, FoodCategoryUncheckedUpdateWithoutFoodInput>
  }

  export type FoodCategoryUpdateManyWithWhereWithoutFoodInput = {
    where: FoodCategoryScalarWhereInput
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type FoodCategoryScalarWhereInput = {
    AND?: Enumerable<FoodCategoryScalarWhereInput>
    OR?: Enumerable<FoodCategoryScalarWhereInput>
    NOT?: Enumerable<FoodCategoryScalarWhereInput>
    foodId?: IntFilter | number
    categoryId?: IntFilter | number
  }

  export type RecipeFoodListUpsertWithWhereUniqueWithoutFoodInput = {
    where: RecipeFoodListWhereUniqueInput
    update: XOR<RecipeFoodListUpdateWithoutFoodInput, RecipeFoodListUncheckedUpdateWithoutFoodInput>
    create: XOR<RecipeFoodListCreateWithoutFoodInput, RecipeFoodListUncheckedCreateWithoutFoodInput>
  }

  export type RecipeFoodListUpdateWithWhereUniqueWithoutFoodInput = {
    where: RecipeFoodListWhereUniqueInput
    data: XOR<RecipeFoodListUpdateWithoutFoodInput, RecipeFoodListUncheckedUpdateWithoutFoodInput>
  }

  export type RecipeFoodListUpdateManyWithWhereWithoutFoodInput = {
    where: RecipeFoodListScalarWhereInput
    data: XOR<RecipeFoodListUpdateManyMutationInput, RecipeFoodListUncheckedUpdateManyWithoutRecipesInput>
  }

  export type RecipeFoodListScalarWhereInput = {
    AND?: Enumerable<RecipeFoodListScalarWhereInput>
    OR?: Enumerable<RecipeFoodListScalarWhereInput>
    NOT?: Enumerable<RecipeFoodListScalarWhereInput>
    recipeId?: IntFilter | number
    foodId?: IntFilter | number
  }

  export type StorageFoodUpsertWithWhereUniqueWithoutFoodInput = {
    where: StorageFoodWhereUniqueInput
    update: XOR<StorageFoodUpdateWithoutFoodInput, StorageFoodUncheckedUpdateWithoutFoodInput>
    create: XOR<StorageFoodCreateWithoutFoodInput, StorageFoodUncheckedCreateWithoutFoodInput>
  }

  export type StorageFoodUpdateWithWhereUniqueWithoutFoodInput = {
    where: StorageFoodWhereUniqueInput
    data: XOR<StorageFoodUpdateWithoutFoodInput, StorageFoodUncheckedUpdateWithoutFoodInput>
  }

  export type StorageFoodUpdateManyWithWhereWithoutFoodInput = {
    where: StorageFoodScalarWhereInput
    data: XOR<StorageFoodUpdateManyMutationInput, StorageFoodUncheckedUpdateManyWithoutStorageInput>
  }

  export type StorageFoodScalarWhereInput = {
    AND?: Enumerable<StorageFoodScalarWhereInput>
    OR?: Enumerable<StorageFoodScalarWhereInput>
    NOT?: Enumerable<StorageFoodScalarWhereInput>
    storageFoodId?: IntFilter | number
    storageDate?: DateTimeFilter | Date | string
    outdate?: DateTimeFilter | Date | string
    quantity?: IntFilter | number
    foodId?: IntFilter | number
    storageId?: IntFilter | number
  }

  export type ToBuyListDetailUpsertWithWhereUniqueWithoutFoodInput = {
    where: ToBuyListDetailWhereUniqueInput
    update: XOR<ToBuyListDetailUpdateWithoutFoodInput, ToBuyListDetailUncheckedUpdateWithoutFoodInput>
    create: XOR<ToBuyListDetailCreateWithoutFoodInput, ToBuyListDetailUncheckedCreateWithoutFoodInput>
  }

  export type ToBuyListDetailUpdateWithWhereUniqueWithoutFoodInput = {
    where: ToBuyListDetailWhereUniqueInput
    data: XOR<ToBuyListDetailUpdateWithoutFoodInput, ToBuyListDetailUncheckedUpdateWithoutFoodInput>
  }

  export type ToBuyListDetailUpdateManyWithWhereWithoutFoodInput = {
    where: ToBuyListDetailScalarWhereInput
    data: XOR<ToBuyListDetailUpdateManyMutationInput, ToBuyListDetailUncheckedUpdateManyWithoutToBuyListsInput>
  }

  export type ToBuyListDetailScalarWhereInput = {
    AND?: Enumerable<ToBuyListDetailScalarWhereInput>
    OR?: Enumerable<ToBuyListDetailScalarWhereInput>
    NOT?: Enumerable<ToBuyListDetailScalarWhereInput>
    toBuyListId?: IntFilter | number
    foodId?: IntFilter | number
    quantity?: IntFilter | number
  }

  export type FoodCategoryCreateWithoutCategoryInput = {
    food: FoodCreateNestedOneWithoutCategoriesInput
  }

  export type FoodCategoryUncheckedCreateWithoutCategoryInput = {
    foodId: number
  }

  export type FoodCategoryCreateOrConnectWithoutCategoryInput = {
    where: FoodCategoryWhereUniqueInput
    create: XOR<FoodCategoryCreateWithoutCategoryInput, FoodCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCategoryCreateManyCategoryInputEnvelope = {
    data: Enumerable<FoodCategoryCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type FoodCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: FoodCategoryWhereUniqueInput
    update: XOR<FoodCategoryUpdateWithoutCategoryInput, FoodCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<FoodCategoryCreateWithoutCategoryInput, FoodCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type FoodCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: FoodCategoryWhereUniqueInput
    data: XOR<FoodCategoryUpdateWithoutCategoryInput, FoodCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type FoodCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: FoodCategoryScalarWhereInput
    data: XOR<FoodCategoryUpdateManyMutationInput, FoodCategoryUncheckedUpdateManyWithoutFoodsInput>
  }

  export type RecipeFoodListCreateWithoutRecipeInput = {
    food: FoodCreateNestedOneWithoutRecipesInput
  }

  export type RecipeFoodListUncheckedCreateWithoutRecipeInput = {
    foodId: number
  }

  export type RecipeFoodListCreateOrConnectWithoutRecipeInput = {
    where: RecipeFoodListWhereUniqueInput
    create: XOR<RecipeFoodListCreateWithoutRecipeInput, RecipeFoodListUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeFoodListCreateManyRecipeInputEnvelope = {
    data: Enumerable<RecipeFoodListCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type FavoriteRecipeCreateWithoutRecipeInput = {
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteRecipeUncheckedCreateWithoutRecipeInput = {
    userId: number
  }

  export type FavoriteRecipeCreateOrConnectWithoutRecipeInput = {
    where: FavoriteRecipeWhereUniqueInput
    create: XOR<FavoriteRecipeCreateWithoutRecipeInput, FavoriteRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteRecipeCreateManyRecipeInputEnvelope = {
    data: Enumerable<FavoriteRecipeCreateManyRecipeInput>
    skipDuplicates?: boolean
  }

  export type RecipeFoodListUpsertWithWhereUniqueWithoutRecipeInput = {
    where: RecipeFoodListWhereUniqueInput
    update: XOR<RecipeFoodListUpdateWithoutRecipeInput, RecipeFoodListUncheckedUpdateWithoutRecipeInput>
    create: XOR<RecipeFoodListCreateWithoutRecipeInput, RecipeFoodListUncheckedCreateWithoutRecipeInput>
  }

  export type RecipeFoodListUpdateWithWhereUniqueWithoutRecipeInput = {
    where: RecipeFoodListWhereUniqueInput
    data: XOR<RecipeFoodListUpdateWithoutRecipeInput, RecipeFoodListUncheckedUpdateWithoutRecipeInput>
  }

  export type RecipeFoodListUpdateManyWithWhereWithoutRecipeInput = {
    where: RecipeFoodListScalarWhereInput
    data: XOR<RecipeFoodListUpdateManyMutationInput, RecipeFoodListUncheckedUpdateManyWithoutFoodsInput>
  }

  export type FavoriteRecipeUpsertWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteRecipeWhereUniqueInput
    update: XOR<FavoriteRecipeUpdateWithoutRecipeInput, FavoriteRecipeUncheckedUpdateWithoutRecipeInput>
    create: XOR<FavoriteRecipeCreateWithoutRecipeInput, FavoriteRecipeUncheckedCreateWithoutRecipeInput>
  }

  export type FavoriteRecipeUpdateWithWhereUniqueWithoutRecipeInput = {
    where: FavoriteRecipeWhereUniqueInput
    data: XOR<FavoriteRecipeUpdateWithoutRecipeInput, FavoriteRecipeUncheckedUpdateWithoutRecipeInput>
  }

  export type FavoriteRecipeUpdateManyWithWhereWithoutRecipeInput = {
    where: FavoriteRecipeScalarWhereInput
    data: XOR<FavoriteRecipeUpdateManyMutationInput, FavoriteRecipeUncheckedUpdateManyWithoutUsersInput>
  }

  export type FavoriteRecipeScalarWhereInput = {
    AND?: Enumerable<FavoriteRecipeScalarWhereInput>
    OR?: Enumerable<FavoriteRecipeScalarWhereInput>
    NOT?: Enumerable<FavoriteRecipeScalarWhereInput>
    userId?: IntFilter | number
    recipeId?: IntFilter | number
  }

  export type UserCreateWithoutStorageInput = {
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeCreateNestedManyWithoutUserInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutStorageInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutStorageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStorageInput, UserUncheckedCreateWithoutStorageInput>
  }

  export type StorageFoodCreateWithoutStorageInput = {
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    food: FoodCreateNestedOneWithoutStorageInput
  }

  export type StorageFoodUncheckedCreateWithoutStorageInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    foodId: number
  }

  export type StorageFoodCreateOrConnectWithoutStorageInput = {
    where: StorageFoodWhereUniqueInput
    create: XOR<StorageFoodCreateWithoutStorageInput, StorageFoodUncheckedCreateWithoutStorageInput>
  }

  export type StorageFoodCreateManyStorageInputEnvelope = {
    data: Enumerable<StorageFoodCreateManyStorageInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStorageInput = {
    update: XOR<UserUpdateWithoutStorageInput, UserUncheckedUpdateWithoutStorageInput>
    create: XOR<UserCreateWithoutStorageInput, UserUncheckedCreateWithoutStorageInput>
  }

  export type UserUpdateWithoutStorageInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutStorageInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type StorageFoodUpsertWithWhereUniqueWithoutStorageInput = {
    where: StorageFoodWhereUniqueInput
    update: XOR<StorageFoodUpdateWithoutStorageInput, StorageFoodUncheckedUpdateWithoutStorageInput>
    create: XOR<StorageFoodCreateWithoutStorageInput, StorageFoodUncheckedCreateWithoutStorageInput>
  }

  export type StorageFoodUpdateWithWhereUniqueWithoutStorageInput = {
    where: StorageFoodWhereUniqueInput
    data: XOR<StorageFoodUpdateWithoutStorageInput, StorageFoodUncheckedUpdateWithoutStorageInput>
  }

  export type StorageFoodUpdateManyWithWhereWithoutStorageInput = {
    where: StorageFoodScalarWhereInput
    data: XOR<StorageFoodUpdateManyMutationInput, StorageFoodUncheckedUpdateManyWithoutFoodsInput>
  }

  export type FavoriteRecipeCreateWithoutUserInput = {
    recipe: RecipeCreateNestedOneWithoutUsersInput
  }

  export type FavoriteRecipeUncheckedCreateWithoutUserInput = {
    recipeId: number
  }

  export type FavoriteRecipeCreateOrConnectWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    create: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipeCreateManyUserInputEnvelope = {
    data: Enumerable<FavoriteRecipeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type GroupMemberCreateWithoutUserInput = {
    isGroupAdmin: boolean
    group: GGroupCreateNestedOneWithoutUsersInput
  }

  export type GroupMemberUncheckedCreateWithoutUserInput = {
    groupId: number
    isGroupAdmin: boolean
  }

  export type GroupMemberCreateOrConnectWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberCreateManyUserInputEnvelope = {
    data: Enumerable<GroupMemberCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ToBuyListCreateWithoutOwnerInput = {
    date: Date | string
    toBuyListDetails?: ToBuyListDetailCreateNestedManyWithoutToBuyListInput
    groupOwner?: GGroupCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListUncheckedCreateWithoutOwnerInput = {
    toBuyListId?: number
    date: Date | string
    groupOwnerId?: number | null
    toBuyListDetails?: ToBuyListDetailUncheckedCreateNestedManyWithoutToBuyListInput
  }

  export type ToBuyListCreateOrConnectWithoutOwnerInput = {
    where: ToBuyListWhereUniqueInput
    create: XOR<ToBuyListCreateWithoutOwnerInput, ToBuyListUncheckedCreateWithoutOwnerInput>
  }

  export type ToBuyListCreateManyOwnerInputEnvelope = {
    data: Enumerable<ToBuyListCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type StorageCreateWithoutUserInput = {
    foods?: StorageFoodCreateNestedManyWithoutStorageInput
  }

  export type StorageUncheckedCreateWithoutUserInput = {
    storageId?: number
    foods?: StorageFoodUncheckedCreateNestedManyWithoutStorageInput
  }

  export type StorageCreateOrConnectWithoutUserInput = {
    where: StorageWhereUniqueInput
    create: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipeUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    update: XOR<FavoriteRecipeUpdateWithoutUserInput, FavoriteRecipeUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteRecipeCreateWithoutUserInput, FavoriteRecipeUncheckedCreateWithoutUserInput>
  }

  export type FavoriteRecipeUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteRecipeWhereUniqueInput
    data: XOR<FavoriteRecipeUpdateWithoutUserInput, FavoriteRecipeUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteRecipeUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteRecipeScalarWhereInput
    data: XOR<FavoriteRecipeUpdateManyMutationInput, FavoriteRecipeUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMemberCreateWithoutUserInput, GroupMemberUncheckedCreateWithoutUserInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutUserInput, GroupMemberUncheckedUpdateWithoutUserInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutUserInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutGroupsInput>
  }

  export type GroupMemberScalarWhereInput = {
    AND?: Enumerable<GroupMemberScalarWhereInput>
    OR?: Enumerable<GroupMemberScalarWhereInput>
    NOT?: Enumerable<GroupMemberScalarWhereInput>
    groupId?: IntFilter | number
    userId?: IntFilter | number
    isGroupAdmin?: BoolFilter | boolean
  }

  export type ToBuyListUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ToBuyListWhereUniqueInput
    update: XOR<ToBuyListUpdateWithoutOwnerInput, ToBuyListUncheckedUpdateWithoutOwnerInput>
    create: XOR<ToBuyListCreateWithoutOwnerInput, ToBuyListUncheckedCreateWithoutOwnerInput>
  }

  export type ToBuyListUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ToBuyListWhereUniqueInput
    data: XOR<ToBuyListUpdateWithoutOwnerInput, ToBuyListUncheckedUpdateWithoutOwnerInput>
  }

  export type ToBuyListUpdateManyWithWhereWithoutOwnerInput = {
    where: ToBuyListScalarWhereInput
    data: XOR<ToBuyListUpdateManyMutationInput, ToBuyListUncheckedUpdateManyWithoutToBuyListsInput>
  }

  export type ToBuyListScalarWhereInput = {
    AND?: Enumerable<ToBuyListScalarWhereInput>
    OR?: Enumerable<ToBuyListScalarWhereInput>
    NOT?: Enumerable<ToBuyListScalarWhereInput>
    toBuyListId?: IntFilter | number
    date?: DateTimeFilter | Date | string
    ownerId?: IntNullableFilter | number | null
    groupOwnerId?: IntNullableFilter | number | null
  }

  export type StorageUpsertWithoutUserInput = {
    update: XOR<StorageUpdateWithoutUserInput, StorageUncheckedUpdateWithoutUserInput>
    create: XOR<StorageCreateWithoutUserInput, StorageUncheckedCreateWithoutUserInput>
  }

  export type StorageUpdateWithoutUserInput = {
    foods?: StorageFoodUpdateManyWithoutStorageNestedInput
  }

  export type StorageUncheckedUpdateWithoutUserInput = {
    storageId?: IntFieldUpdateOperationsInput | number
    foods?: StorageFoodUncheckedUpdateManyWithoutStorageNestedInput
  }

  export type GroupMemberCreateWithoutGroupInput = {
    isGroupAdmin: boolean
    user: UserCreateNestedOneWithoutGroupsInput
  }

  export type GroupMemberUncheckedCreateWithoutGroupInput = {
    userId: number
    isGroupAdmin: boolean
  }

  export type GroupMemberCreateOrConnectWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberCreateManyGroupInputEnvelope = {
    data: Enumerable<GroupMemberCreateManyGroupInput>
    skipDuplicates?: boolean
  }

  export type ToBuyListCreateWithoutGroupOwnerInput = {
    date: Date | string
    toBuyListDetails?: ToBuyListDetailCreateNestedManyWithoutToBuyListInput
    owner?: UserCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListUncheckedCreateWithoutGroupOwnerInput = {
    toBuyListId?: number
    date: Date | string
    ownerId?: number | null
    toBuyListDetails?: ToBuyListDetailUncheckedCreateNestedManyWithoutToBuyListInput
  }

  export type ToBuyListCreateOrConnectWithoutGroupOwnerInput = {
    where: ToBuyListWhereUniqueInput
    create: XOR<ToBuyListCreateWithoutGroupOwnerInput, ToBuyListUncheckedCreateWithoutGroupOwnerInput>
  }

  export type ToBuyListCreateManyGroupOwnerInputEnvelope = {
    data: Enumerable<ToBuyListCreateManyGroupOwnerInput>
    skipDuplicates?: boolean
  }

  export type GroupMemberUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    update: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMemberCreateWithoutGroupInput, GroupMemberUncheckedCreateWithoutGroupInput>
  }

  export type GroupMemberUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMemberWhereUniqueInput
    data: XOR<GroupMemberUpdateWithoutGroupInput, GroupMemberUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMemberUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMemberScalarWhereInput
    data: XOR<GroupMemberUpdateManyMutationInput, GroupMemberUncheckedUpdateManyWithoutUsersInput>
  }

  export type ToBuyListUpsertWithWhereUniqueWithoutGroupOwnerInput = {
    where: ToBuyListWhereUniqueInput
    update: XOR<ToBuyListUpdateWithoutGroupOwnerInput, ToBuyListUncheckedUpdateWithoutGroupOwnerInput>
    create: XOR<ToBuyListCreateWithoutGroupOwnerInput, ToBuyListUncheckedCreateWithoutGroupOwnerInput>
  }

  export type ToBuyListUpdateWithWhereUniqueWithoutGroupOwnerInput = {
    where: ToBuyListWhereUniqueInput
    data: XOR<ToBuyListUpdateWithoutGroupOwnerInput, ToBuyListUncheckedUpdateWithoutGroupOwnerInput>
  }

  export type ToBuyListUpdateManyWithWhereWithoutGroupOwnerInput = {
    where: ToBuyListScalarWhereInput
    data: XOR<ToBuyListUpdateManyMutationInput, ToBuyListUncheckedUpdateManyWithoutToBuyListsInput>
  }

  export type RecipeCreateWithoutFoodsInput = {
    name: string
    imgUrl?: string | null
    description: string
    users?: FavoriteRecipeCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutFoodsInput = {
    recipeId?: number
    name: string
    imgUrl?: string | null
    description: string
    users?: FavoriteRecipeUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutFoodsInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutFoodsInput, RecipeUncheckedCreateWithoutFoodsInput>
  }

  export type FoodCreateWithoutRecipesInput = {
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryCreateNestedManyWithoutFoodInput
    storage?: StorageFoodCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutRecipesInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryUncheckedCreateNestedManyWithoutFoodInput
    storage?: StorageFoodUncheckedCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutRecipesInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutRecipesInput, FoodUncheckedCreateWithoutRecipesInput>
  }

  export type RecipeUpsertWithoutFoodsInput = {
    update: XOR<RecipeUpdateWithoutFoodsInput, RecipeUncheckedUpdateWithoutFoodsInput>
    create: XOR<RecipeCreateWithoutFoodsInput, RecipeUncheckedCreateWithoutFoodsInput>
  }

  export type RecipeUpdateWithoutFoodsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    users?: FavoriteRecipeUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutFoodsInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    users?: FavoriteRecipeUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type FoodUpsertWithoutRecipesInput = {
    update: XOR<FoodUpdateWithoutRecipesInput, FoodUncheckedUpdateWithoutRecipesInput>
    create: XOR<FoodCreateWithoutRecipesInput, FoodUncheckedCreateWithoutRecipesInput>
  }

  export type FoodUpdateWithoutRecipesInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutRecipesInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUncheckedUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUncheckedUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCreateWithoutCategoriesInput = {
    name: string
    imageUrl?: string | null
    description?: string | null
    recipes?: RecipeFoodListCreateNestedManyWithoutFoodInput
    storage?: StorageFoodCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutCategoriesInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
    recipes?: RecipeFoodListUncheckedCreateNestedManyWithoutFoodInput
    storage?: StorageFoodUncheckedCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutCategoriesInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutCategoriesInput, FoodUncheckedCreateWithoutCategoriesInput>
  }

  export type CategoryCreateWithoutFoodsInput = {
    categoryName: string
    categoryType: string
  }

  export type CategoryUncheckedCreateWithoutFoodsInput = {
    categoryId?: number
    categoryName: string
    categoryType: string
  }

  export type CategoryCreateOrConnectWithoutFoodsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type FoodUpsertWithoutCategoriesInput = {
    update: XOR<FoodUpdateWithoutCategoriesInput, FoodUncheckedUpdateWithoutCategoriesInput>
    create: XOR<FoodCreateWithoutCategoriesInput, FoodUncheckedCreateWithoutCategoriesInput>
  }

  export type FoodUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: RecipeFoodListUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutCategoriesInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    recipes?: RecipeFoodListUncheckedUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUncheckedUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type CategoryUpsertWithoutFoodsInput = {
    update: XOR<CategoryUpdateWithoutFoodsInput, CategoryUncheckedUpdateWithoutFoodsInput>
    create: XOR<CategoryCreateWithoutFoodsInput, CategoryUncheckedCreateWithoutFoodsInput>
  }

  export type CategoryUpdateWithoutFoodsInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutFoodsInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    categoryType?: StringFieldUpdateOperationsInput | string
  }

  export type ToBuyListDetailCreateWithoutToBuyListInput = {
    quantity: number
    food: FoodCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListDetailUncheckedCreateWithoutToBuyListInput = {
    foodId: number
    quantity: number
  }

  export type ToBuyListDetailCreateOrConnectWithoutToBuyListInput = {
    where: ToBuyListDetailWhereUniqueInput
    create: XOR<ToBuyListDetailCreateWithoutToBuyListInput, ToBuyListDetailUncheckedCreateWithoutToBuyListInput>
  }

  export type ToBuyListDetailCreateManyToBuyListInputEnvelope = {
    data: Enumerable<ToBuyListDetailCreateManyToBuyListInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutToBuyListsInput = {
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeCreateNestedManyWithoutUserInput
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    storage?: StorageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToBuyListsInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    storage?: StorageUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToBuyListsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToBuyListsInput, UserUncheckedCreateWithoutToBuyListsInput>
  }

  export type GGroupCreateWithoutToBuyListsInput = {
    name: string
    users?: GroupMemberCreateNestedManyWithoutGroupInput
  }

  export type GGroupUncheckedCreateWithoutToBuyListsInput = {
    groupId?: number
    name: string
    users?: GroupMemberUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GGroupCreateOrConnectWithoutToBuyListsInput = {
    where: GGroupWhereUniqueInput
    create: XOR<GGroupCreateWithoutToBuyListsInput, GGroupUncheckedCreateWithoutToBuyListsInput>
  }

  export type ToBuyListDetailUpsertWithWhereUniqueWithoutToBuyListInput = {
    where: ToBuyListDetailWhereUniqueInput
    update: XOR<ToBuyListDetailUpdateWithoutToBuyListInput, ToBuyListDetailUncheckedUpdateWithoutToBuyListInput>
    create: XOR<ToBuyListDetailCreateWithoutToBuyListInput, ToBuyListDetailUncheckedCreateWithoutToBuyListInput>
  }

  export type ToBuyListDetailUpdateWithWhereUniqueWithoutToBuyListInput = {
    where: ToBuyListDetailWhereUniqueInput
    data: XOR<ToBuyListDetailUpdateWithoutToBuyListInput, ToBuyListDetailUncheckedUpdateWithoutToBuyListInput>
  }

  export type ToBuyListDetailUpdateManyWithWhereWithoutToBuyListInput = {
    where: ToBuyListDetailScalarWhereInput
    data: XOR<ToBuyListDetailUpdateManyMutationInput, ToBuyListDetailUncheckedUpdateManyWithoutToBuyListDetailsInput>
  }

  export type UserUpsertWithoutToBuyListsInput = {
    update: XOR<UserUpdateWithoutToBuyListsInput, UserUncheckedUpdateWithoutToBuyListsInput>
    create: XOR<UserCreateWithoutToBuyListsInput, UserUncheckedCreateWithoutToBuyListsInput>
  }

  export type UserUpdateWithoutToBuyListsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    storage?: StorageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToBuyListsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    storage?: StorageUncheckedUpdateOneWithoutUserNestedInput
  }

  export type GGroupUpsertWithoutToBuyListsInput = {
    update: XOR<GGroupUpdateWithoutToBuyListsInput, GGroupUncheckedUpdateWithoutToBuyListsInput>
    create: XOR<GGroupCreateWithoutToBuyListsInput, GGroupUncheckedCreateWithoutToBuyListsInput>
  }

  export type GGroupUpdateWithoutToBuyListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: GroupMemberUpdateManyWithoutGroupNestedInput
  }

  export type GGroupUncheckedUpdateWithoutToBuyListsInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: GroupMemberUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    username: string
    name: string
    password: string
    role: string
    groups?: GroupMemberCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListCreateNestedManyWithoutOwnerInput
    storage?: StorageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
    groups?: GroupMemberUncheckedCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutOwnerInput
    storage?: StorageUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type RecipeCreateWithoutUsersInput = {
    name: string
    imgUrl?: string | null
    description: string
    foods?: RecipeFoodListCreateNestedManyWithoutRecipeInput
  }

  export type RecipeUncheckedCreateWithoutUsersInput = {
    recipeId?: number
    name: string
    imgUrl?: string | null
    description: string
    foods?: RecipeFoodListUncheckedCreateNestedManyWithoutRecipeInput
  }

  export type RecipeCreateOrConnectWithoutUsersInput = {
    where: RecipeWhereUniqueInput
    create: XOR<RecipeCreateWithoutUsersInput, RecipeUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUpdateManyWithoutOwnerNestedInput
    storage?: StorageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    groups?: GroupMemberUncheckedUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutOwnerNestedInput
    storage?: StorageUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RecipeUpsertWithoutUsersInput = {
    update: XOR<RecipeUpdateWithoutUsersInput, RecipeUncheckedUpdateWithoutUsersInput>
    create: XOR<RecipeCreateWithoutUsersInput, RecipeUncheckedCreateWithoutUsersInput>
  }

  export type RecipeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    foods?: RecipeFoodListUpdateManyWithoutRecipeNestedInput
  }

  export type RecipeUncheckedUpdateWithoutUsersInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    foods?: RecipeFoodListUncheckedUpdateManyWithoutRecipeNestedInput
  }

  export type GGroupCreateWithoutUsersInput = {
    name: string
    toBuyLists?: ToBuyListCreateNestedManyWithoutGroupOwnerInput
  }

  export type GGroupUncheckedCreateWithoutUsersInput = {
    groupId?: number
    name: string
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutGroupOwnerInput
  }

  export type GGroupCreateOrConnectWithoutUsersInput = {
    where: GGroupWhereUniqueInput
    create: XOR<GGroupCreateWithoutUsersInput, GGroupUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutGroupsInput = {
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListCreateNestedManyWithoutOwnerInput
    storage?: StorageCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGroupsInput = {
    userId?: number
    username: string
    name: string
    password: string
    role: string
    favorites?: FavoriteRecipeUncheckedCreateNestedManyWithoutUserInput
    toBuyLists?: ToBuyListUncheckedCreateNestedManyWithoutOwnerInput
    storage?: StorageUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGroupsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type GGroupUpsertWithoutUsersInput = {
    update: XOR<GGroupUpdateWithoutUsersInput, GGroupUncheckedUpdateWithoutUsersInput>
    create: XOR<GGroupCreateWithoutUsersInput, GGroupUncheckedCreateWithoutUsersInput>
  }

  export type GGroupUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    toBuyLists?: ToBuyListUpdateManyWithoutGroupOwnerNestedInput
  }

  export type GGroupUncheckedUpdateWithoutUsersInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutGroupOwnerNestedInput
  }

  export type UserUpsertWithoutGroupsInput = {
    update: XOR<UserUpdateWithoutGroupsInput, UserUncheckedUpdateWithoutGroupsInput>
    create: XOR<UserCreateWithoutGroupsInput, UserUncheckedCreateWithoutGroupsInput>
  }

  export type UserUpdateWithoutGroupsInput = {
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUpdateManyWithoutOwnerNestedInput
    storage?: StorageUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGroupsInput = {
    userId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    favorites?: FavoriteRecipeUncheckedUpdateManyWithoutUserNestedInput
    toBuyLists?: ToBuyListUncheckedUpdateManyWithoutOwnerNestedInput
    storage?: StorageUncheckedUpdateOneWithoutUserNestedInput
  }

  export type FoodCreateWithoutStorageInput = {
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutStorageInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryUncheckedCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListUncheckedCreateNestedManyWithoutFoodInput
    toBuyLists?: ToBuyListDetailUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutStorageInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutStorageInput, FoodUncheckedCreateWithoutStorageInput>
  }

  export type StorageCreateWithoutFoodsInput = {
    user: UserCreateNestedOneWithoutStorageInput
  }

  export type StorageUncheckedCreateWithoutFoodsInput = {
    storageId?: number
    userId: number
  }

  export type StorageCreateOrConnectWithoutFoodsInput = {
    where: StorageWhereUniqueInput
    create: XOR<StorageCreateWithoutFoodsInput, StorageUncheckedCreateWithoutFoodsInput>
  }

  export type FoodUpsertWithoutStorageInput = {
    update: XOR<FoodUpdateWithoutStorageInput, FoodUncheckedUpdateWithoutStorageInput>
    create: XOR<FoodCreateWithoutStorageInput, FoodUncheckedCreateWithoutStorageInput>
  }

  export type FoodUpdateWithoutStorageInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutStorageInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUncheckedUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUncheckedUpdateManyWithoutFoodNestedInput
    toBuyLists?: ToBuyListDetailUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type StorageUpsertWithoutFoodsInput = {
    update: XOR<StorageUpdateWithoutFoodsInput, StorageUncheckedUpdateWithoutFoodsInput>
    create: XOR<StorageCreateWithoutFoodsInput, StorageUncheckedCreateWithoutFoodsInput>
  }

  export type StorageUpdateWithoutFoodsInput = {
    user?: UserUpdateOneRequiredWithoutStorageNestedInput
  }

  export type StorageUncheckedUpdateWithoutFoodsInput = {
    storageId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListCreateWithoutToBuyListDetailsInput = {
    date: Date | string
    owner?: UserCreateNestedOneWithoutToBuyListsInput
    groupOwner?: GGroupCreateNestedOneWithoutToBuyListsInput
  }

  export type ToBuyListUncheckedCreateWithoutToBuyListDetailsInput = {
    toBuyListId?: number
    date: Date | string
    ownerId?: number | null
    groupOwnerId?: number | null
  }

  export type ToBuyListCreateOrConnectWithoutToBuyListDetailsInput = {
    where: ToBuyListWhereUniqueInput
    create: XOR<ToBuyListCreateWithoutToBuyListDetailsInput, ToBuyListUncheckedCreateWithoutToBuyListDetailsInput>
  }

  export type FoodCreateWithoutToBuyListsInput = {
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListCreateNestedManyWithoutFoodInput
    storage?: StorageFoodCreateNestedManyWithoutFoodInput
  }

  export type FoodUncheckedCreateWithoutToBuyListsInput = {
    foodId?: number
    name: string
    imageUrl?: string | null
    description?: string | null
    categories?: FoodCategoryUncheckedCreateNestedManyWithoutFoodInput
    recipes?: RecipeFoodListUncheckedCreateNestedManyWithoutFoodInput
    storage?: StorageFoodUncheckedCreateNestedManyWithoutFoodInput
  }

  export type FoodCreateOrConnectWithoutToBuyListsInput = {
    where: FoodWhereUniqueInput
    create: XOR<FoodCreateWithoutToBuyListsInput, FoodUncheckedCreateWithoutToBuyListsInput>
  }

  export type ToBuyListUpsertWithoutToBuyListDetailsInput = {
    update: XOR<ToBuyListUpdateWithoutToBuyListDetailsInput, ToBuyListUncheckedUpdateWithoutToBuyListDetailsInput>
    create: XOR<ToBuyListCreateWithoutToBuyListDetailsInput, ToBuyListUncheckedCreateWithoutToBuyListDetailsInput>
  }

  export type ToBuyListUpdateWithoutToBuyListDetailsInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneWithoutToBuyListsNestedInput
    groupOwner?: GGroupUpdateOneWithoutToBuyListsNestedInput
  }

  export type ToBuyListUncheckedUpdateWithoutToBuyListDetailsInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    groupOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FoodUpsertWithoutToBuyListsInput = {
    update: XOR<FoodUpdateWithoutToBuyListsInput, FoodUncheckedUpdateWithoutToBuyListsInput>
    create: XOR<FoodCreateWithoutToBuyListsInput, FoodUncheckedCreateWithoutToBuyListsInput>
  }

  export type FoodUpdateWithoutToBuyListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUpdateManyWithoutFoodNestedInput
  }

  export type FoodUncheckedUpdateWithoutToBuyListsInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    categories?: FoodCategoryUncheckedUpdateManyWithoutFoodNestedInput
    recipes?: RecipeFoodListUncheckedUpdateManyWithoutFoodNestedInput
    storage?: StorageFoodUncheckedUpdateManyWithoutFoodNestedInput
  }

  export type FoodCategoryCreateManyFoodInput = {
    categoryId: number
  }

  export type RecipeFoodListCreateManyFoodInput = {
    recipeId: number
  }

  export type StorageFoodCreateManyFoodInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    storageId: number
  }

  export type ToBuyListDetailCreateManyFoodInput = {
    toBuyListId: number
    quantity: number
  }

  export type FoodCategoryUpdateWithoutFoodInput = {
    category?: CategoryUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type FoodCategoryUncheckedUpdateWithoutFoodInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryUncheckedUpdateManyWithoutCategoriesInput = {
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodListUpdateWithoutFoodInput = {
    recipe?: RecipeUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type RecipeFoodListUncheckedUpdateWithoutFoodInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodListUncheckedUpdateManyWithoutRecipesInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodUpdateWithoutFoodInput = {
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    storage?: StorageUpdateOneRequiredWithoutFoodsNestedInput
  }

  export type StorageFoodUncheckedUpdateWithoutFoodInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    storageId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodUncheckedUpdateManyWithoutStorageInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    storageId?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailUpdateWithoutFoodInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    toBuyList?: ToBuyListUpdateOneRequiredWithoutToBuyListDetailsNestedInput
  }

  export type ToBuyListDetailUncheckedUpdateWithoutFoodInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailUncheckedUpdateManyWithoutToBuyListsInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryCreateManyCategoryInput = {
    foodId: number
  }

  export type FoodCategoryUpdateWithoutCategoryInput = {
    food?: FoodUpdateOneRequiredWithoutCategoriesNestedInput
  }

  export type FoodCategoryUncheckedUpdateWithoutCategoryInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type FoodCategoryUncheckedUpdateManyWithoutFoodsInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodListCreateManyRecipeInput = {
    foodId: number
  }

  export type FavoriteRecipeCreateManyRecipeInput = {
    userId: number
  }

  export type RecipeFoodListUpdateWithoutRecipeInput = {
    food?: FoodUpdateOneRequiredWithoutRecipesNestedInput
  }

  export type RecipeFoodListUncheckedUpdateWithoutRecipeInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type RecipeFoodListUncheckedUpdateManyWithoutFoodsInput = {
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRecipeUpdateWithoutRecipeInput = {
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteRecipeUncheckedUpdateWithoutRecipeInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodCreateManyStorageInput = {
    storageFoodId?: number
    storageDate: Date | string
    outdate: Date | string
    quantity: number
    foodId: number
  }

  export type StorageFoodUpdateWithoutStorageInput = {
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutStorageNestedInput
  }

  export type StorageFoodUncheckedUpdateWithoutStorageInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type StorageFoodUncheckedUpdateManyWithoutFoodsInput = {
    storageFoodId?: IntFieldUpdateOperationsInput | number
    storageDate?: DateTimeFieldUpdateOperationsInput | Date | string
    outdate?: DateTimeFieldUpdateOperationsInput | Date | string
    quantity?: IntFieldUpdateOperationsInput | number
    foodId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRecipeCreateManyUserInput = {
    recipeId: number
  }

  export type GroupMemberCreateManyUserInput = {
    groupId: number
    isGroupAdmin: boolean
  }

  export type ToBuyListCreateManyOwnerInput = {
    toBuyListId?: number
    date: Date | string
    groupOwnerId?: number | null
  }

  export type FavoriteRecipeUpdateWithoutUserInput = {
    recipe?: RecipeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type FavoriteRecipeUncheckedUpdateWithoutUserInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type FavoriteRecipeUncheckedUpdateManyWithoutFavoritesInput = {
    recipeId?: IntFieldUpdateOperationsInput | number
  }

  export type GroupMemberUpdateWithoutUserInput = {
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
    group?: GGroupUpdateOneRequiredWithoutUsersNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutUserInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyWithoutGroupsInput = {
    groupId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToBuyListUpdateWithoutOwnerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toBuyListDetails?: ToBuyListDetailUpdateManyWithoutToBuyListNestedInput
    groupOwner?: GGroupUpdateOneWithoutToBuyListsNestedInput
  }

  export type ToBuyListUncheckedUpdateWithoutOwnerInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
    toBuyListDetails?: ToBuyListDetailUncheckedUpdateManyWithoutToBuyListNestedInput
  }

  export type ToBuyListUncheckedUpdateManyWithoutToBuyListsInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    groupOwnerId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GroupMemberCreateManyGroupInput = {
    userId: number
    isGroupAdmin: boolean
  }

  export type ToBuyListCreateManyGroupOwnerInput = {
    toBuyListId?: number
    date: Date | string
    ownerId?: number | null
  }

  export type GroupMemberUpdateWithoutGroupInput = {
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutGroupsNestedInput
  }

  export type GroupMemberUncheckedUpdateWithoutGroupInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroupMemberUncheckedUpdateManyWithoutUsersInput = {
    userId?: IntFieldUpdateOperationsInput | number
    isGroupAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToBuyListUpdateWithoutGroupOwnerInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    toBuyListDetails?: ToBuyListDetailUpdateManyWithoutToBuyListNestedInput
    owner?: UserUpdateOneWithoutToBuyListsNestedInput
  }

  export type ToBuyListUncheckedUpdateWithoutGroupOwnerInput = {
    toBuyListId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    toBuyListDetails?: ToBuyListDetailUncheckedUpdateManyWithoutToBuyListNestedInput
  }

  export type ToBuyListDetailCreateManyToBuyListInput = {
    foodId: number
    quantity: number
  }

  export type ToBuyListDetailUpdateWithoutToBuyListInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    food?: FoodUpdateOneRequiredWithoutToBuyListsNestedInput
  }

  export type ToBuyListDetailUncheckedUpdateWithoutToBuyListInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ToBuyListDetailUncheckedUpdateManyWithoutToBuyListDetailsInput = {
    foodId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
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