
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.16.2
 * Query Engine version: 4bc8b6e1b66cb932731fb1bdbbc550d1e010de81
 */
Prisma.prismaVersion = {
  client: "4.16.2",
  engine: "4bc8b6e1b66cb932731fb1bdbbc550d1e010de81"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.FoodScalarFieldEnum = {
  foodId: 'foodId',
  name: 'name',
  imageUrl: 'imageUrl',
  description: 'description'
};

exports.Prisma.CategoryScalarFieldEnum = {
  categoryId: 'categoryId',
  categoryName: 'categoryName',
  categoryType: 'categoryType'
};

exports.Prisma.RecipeScalarFieldEnum = {
  recipeId: 'recipeId',
  name: 'name',
  imgUrl: 'imgUrl',
  description: 'description'
};

exports.Prisma.StorageScalarFieldEnum = {
  storageId: 'storageId',
  userId: 'userId'
};

exports.Prisma.UserScalarFieldEnum = {
  userId: 'userId',
  username: 'username',
  name: 'name',
  password: 'password',
  role: 'role'
};

exports.Prisma.GGroupScalarFieldEnum = {
  groupId: 'groupId',
  name: 'name'
};

exports.Prisma.RecipeFoodListScalarFieldEnum = {
  recipeId: 'recipeId',
  foodId: 'foodId'
};

exports.Prisma.FoodCategoryScalarFieldEnum = {
  foodId: 'foodId',
  categoryId: 'categoryId'
};

exports.Prisma.ToBuyListScalarFieldEnum = {
  toBuyListId: 'toBuyListId',
  date: 'date',
  ownerId: 'ownerId',
  groupOwnerId: 'groupOwnerId'
};

exports.Prisma.FavoriteRecipeScalarFieldEnum = {
  userId: 'userId',
  recipeId: 'recipeId'
};

exports.Prisma.GroupMemberScalarFieldEnum = {
  groupId: 'groupId',
  userId: 'userId',
  isGroupAdmin: 'isGroupAdmin'
};

exports.Prisma.StorageFoodScalarFieldEnum = {
  storageFoodId: 'storageFoodId',
  storageDate: 'storageDate',
  outdate: 'outdate',
  quantity: 'quantity',
  foodId: 'foodId',
  storageId: 'storageId'
};

exports.Prisma.ToBuyListDetailScalarFieldEnum = {
  toBuyListId: 'toBuyListId',
  foodId: 'foodId',
  quantity: 'quantity'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
