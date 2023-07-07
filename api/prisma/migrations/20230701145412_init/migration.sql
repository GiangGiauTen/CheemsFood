-- CreateTable
CREATE TABLE "Food" (
    "foodId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("foodId")
);

-- CreateTable
CREATE TABLE "Category" (
    "categoryId" SERIAL NOT NULL,
    "categoryName" TEXT NOT NULL,
    "categoryType" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "recipeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("recipeId")
);

-- CreateTable
CREATE TABLE "Storage" (
    "storageId" SERIAL NOT NULL,

    CONSTRAINT "Storage_pkey" PRIMARY KEY ("storageId")
);

-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "GGroup" (
    "groupId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "GGroup_pkey" PRIMARY KEY ("groupId")
);

-- CreateTable
CREATE TABLE "RecipeFoodList" (
    "recipeId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,

    CONSTRAINT "RecipeFoodList_pkey" PRIMARY KEY ("recipeId","foodId")
);

-- CreateTable
CREATE TABLE "FoodCategory" (
    "foodId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "FoodCategory_pkey" PRIMARY KEY ("foodId","categoryId")
);

-- CreateTable
CREATE TABLE "ToBuyList" (
    "toBuyListId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "ownerId" INTEGER NOT NULL,
    "groupOwnerId" INTEGER NOT NULL,

    CONSTRAINT "ToBuyList_pkey" PRIMARY KEY ("toBuyListId")
);

-- CreateTable
CREATE TABLE "FavoriteRecipe" (
    "userId" INTEGER NOT NULL,
    "recipeId" INTEGER NOT NULL,

    CONSTRAINT "FavoriteRecipe_pkey" PRIMARY KEY ("userId","recipeId")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "groupId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "isGroupAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("groupId","userId")
);

-- CreateTable
CREATE TABLE "StorageFood" (
    "storageFoodId" INTEGER NOT NULL,
    "storageDate" TIMESTAMP(3) NOT NULL,
    "outdate" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "storageId" INTEGER NOT NULL,

    CONSTRAINT "StorageFood_pkey" PRIMARY KEY ("storageFoodId")
);

-- CreateTable
CREATE TABLE "ToBuyListDetail" (
    "toBuyListId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,

    CONSTRAINT "ToBuyListDetail_pkey" PRIMARY KEY ("toBuyListId","foodId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "RecipeFoodList" ADD CONSTRAINT "RecipeFoodList_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("recipeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecipeFoodList" ADD CONSTRAINT "RecipeFoodList_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategory" ADD CONSTRAINT "FoodCategory_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FoodCategory" ADD CONSTRAINT "FoodCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToBuyList" ADD CONSTRAINT "ToBuyList_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToBuyList" ADD CONSTRAINT "ToBuyList_groupOwnerId_fkey" FOREIGN KEY ("groupOwnerId") REFERENCES "GGroup"("groupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteRecipe" ADD CONSTRAINT "FavoriteRecipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteRecipe" ADD CONSTRAINT "FavoriteRecipe_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("recipeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "GGroup"("groupId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageFood" ADD CONSTRAINT "StorageFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StorageFood" ADD CONSTRAINT "StorageFood_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("storageId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToBuyListDetail" ADD CONSTRAINT "ToBuyListDetail_toBuyListId_fkey" FOREIGN KEY ("toBuyListId") REFERENCES "ToBuyList"("toBuyListId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ToBuyListDetail" ADD CONSTRAINT "ToBuyListDetail_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("foodId") ON DELETE RESTRICT ON UPDATE CASCADE;
