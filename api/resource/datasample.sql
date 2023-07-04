-- Food
INSERT INTO "Food" ("name", "description") VALUES
('Gà nướng', 'Gà nướng thơm phức'),
('Bánh mì', 'Bánh mì mềm ngon'),
('Bún chả', 'Bún chả Hà Nội');

-- Category
INSERT INTO "Category" ("categoryName", "categoryType") VALUES
('Món chính', 'Món ăn'),
('Đồ uống', 'Món ăn'),
('Tráng miệng', 'Món ăn');

-- Recipe
INSERT INTO "Recipe" ("description") VALUES
('Cách làm gà nướng'),
('Cách làm bánh mì'),
('Cách làm bún chả');

-- Storage
INSERT INTO "Storage" DEFAULT VALUES;

-- User
INSERT INTO "User" ("username", "password", "role") VALUES
('user1', 'password1', 'user'),
('user2', 'password2', 'user'),
('admin1', 'password3', 'admin');

-- GGroup
INSERT INTO "GGroup" DEFAULT VALUES;

-- RecipeFoodList
INSERT INTO "RecipeFoodList" ("recipeId", "foodId") VALUES
(1, 1),
(2, 2),
(3, 3);

-- FoodCategory
INSERT INTO "FoodCategory" ("foodId", "categoryId") VALUES
(1, 1),
(2, 2),
(3, 3);

-- ToBuyList
INSERT INTO "ToBuyList" ("toBuyListId", "date", "ownerId", "groupOwnerId") VALUES
(1, CURRENT_TIMESTAMP, 1, 1),
(2, CURRENT_TIMESTAMP, 2, 1);

-- FavoriteRecipe
INSERT INTO "FavoriteRecipe" ("userId", "recipeId") VALUES
(1, 1),
(2, 2);

-- GroupMember
INSERT INTO "GroupMember" ("groupId", "userId", "isGroupAdmin") VALUES
(1, 1, true),
(1, 2, false);

-- StorageFood
INSERT INTO "StorageFood" ("storageFoodId", "storageDate", "outdate", "quantity", "foodId", "storageId") VALUES
(1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10, 1, 1),
(2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5, 2, 1);

-- ToBuyListDetail
INSERT INTO "ToBuyListDetail" ("toBuyListId", "foodId") VALUES
(1, 1),
(2, 2);