-- CREATE database Jiawei;

use group4db;

-- CREATE SCHEMA recipe;

DROP TABLE IF EXISTS recipe_Ingredients;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS ingredients;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pictures;

CREATE TABLE pictures(
	pictureID VARCHAR(30) PRIMARY KEY,
	url VARCHAR(50),
	usage_info VARCHAR(30)
	);

CREATE TABLE users(
	userID VARCHAR(30) PRIMARY KEY,
	name VARCHAR(30),
	gender VARCHAR(30),
	age INT,
	email VARCHAR(30),
	phoneNum VARCHAR(30),
	password VARCHAR(30),
	address VARCHAR(255), -- 增加 address 字段
	postalCode VARCHAR(30), -- 增加 postalCode 字段
	avatarID VARCHAR(30),
	FOREIGN KEY (avatarID) REFERENCES pictures(pictureID)
);


CREATE TABLE recipes(
	recipeID VARCHAR(30) PRIMARY KEY,
	pictureID VARCHAR(30),
	userID VARCHAR(30),
	name VARCHAR(30),
	content TEXT,
	FOREIGN KEY (pictureID) REFERENCES pictures(pictureID),
	FOREIGN KEY (userID) REFERENCES users(userID)
	);

CREATE TABLE ingredients(
	ingredientID VARCHAR(30) PRIMARY KEY,
	name VARCHAR(30)
	);

CREATE TABLE recipe_Ingredients(
	ingredientID VARCHAR(30),
	recipeID VARCHAR(30),
	optional TINYINT,
	unit VARCHAR(30),
	methods VARCHAR(30),
	quantity INT,
	PRIMARY KEY (ingredientID, recipeID),
	FOREIGN KEY (ingredientID) REFERENCES ingredients(ingredientID),
	FOREIGN KEY (recipeID) REFERENCES recipes(recipeID)
	);

CREATE TABLE comments(
	commentID VARCHAR(30) PRIMARY KEY,
	userID VARCHAR(30),
	recipeID VARCHAR(30),
	commentDate DATETIME,
	content TEXT,
	FOREIGN KEY (userID) REFERENCES users(userID),
	FOREIGN KEY (recipeID) REFERENCES recipes(recipeID)
	);

CREATE TABLE likes(
	likeID VARCHAR(30) PRIMARY KEY,
	recipeID VARCHAR(30),
	userID VARCHAR(30),
	time DATETIME,
	status TINYINT,
	FOREIGN KEY (recipeID) REFERENCES recipes(recipeID),
	FOREIGN KEY (userID) REFERENCES users(userID)
	);


INSERT INTO pictures (pictureID, url, usage_info) 
VALUES
('defaultAvatar', 'https://example.com/avatar0.jpg', 'Avatar'),
('defaultRecipe', 'https://example.com/recipe0.jpg', 'Recipes'),
('pic001', 'https://example.com/avatar1.jpg', 'Avatar'),
('pic002', 'https://example.com/recipe1.jpg', 'Recipes'),
('pic003', 'https://example.com/avatar2.jpg', 'Avatar'),
('pic004', 'https://example.com/recipe2.jpg', 'Recipes'),
('pic005', 'https://example.com/avatar3.jpg', 'Avatar'),
('pic006', 'https://example.com/recipe3.jpg', 'Recipes'),
('pic007', 'https://example.com/avatar4.jpg', 'Avatar'),
('pic008', 'https://example.com/recipe4.jpg', 'Recipes'),
('pic009', 'https://example.com/avatar5.jpg', 'Avatar'),
('pic010', 'https://example.com/recipe5.jpg', 'Recipes');

INSERT INTO users (userID, name, gender, age, email, phoneNum, password, avatarID)
VALUES
('101', 'Alice Johnson', 'female', 28, 'alice.johnson.example.com', '1234567890', '123456789', 'pic001'),
('103', 'Charlie Brown', 'male', 25, 'charlie.brown@example.com', '2345678901', '123456789', 'pic003'),
('104', 'Diana Lee', 'female', 30, 'diana.lee@example.com', '3456789012', '123456789', 'pic004'),
('102', 'Emma Smith', 'female', 24, 'emma.smith@example.com', '4567890123', '123456789', 'pic002'),
('105', 'Miller William', 'male', 32, 'miller.william@example.com', '5678901234', '123456789', 'pic005');

INSERT INTO recipes (recipeID, pictureID, userID, name, content) 
VALUES
('r001', 'pic002', '101', 'Spaghetti Bolognese', 'A classic Italian pasta dish with a rich, meaty sauce.'),
('r002', 'pic004', '103', 'Chicken Curry', 'A flavorful chicken curry with a creamy coconut base.'),
('r003', 'pic006', '104', 'Vegetable Stir Fry', 'A healthy and colorful stir fry with a mix of fresh vegetables.'),
('r004', 'pic008', '102', 'Chocolate Cake', 'A rich and moist chocolate cake with creamy frosting.'),
('r005', 'pic010', '105', 'Caesar Salad', 'A fresh and crisp salad with Caesar dressing and croutons.');

INSERT INTO ingredients (ingredientID, name)
VALUES
('ing001', 'Tomato'),
('ing002', 'Chicken'),
('ing003', 'Onion'),
('ing004', 'Garlic'),
('ing005', 'Carrot'),
('ing006', 'Flour'),
('ing007', 'Egg'),
('ing008', 'Cheese'),
('ing009', 'Lettuce'),
('ing010', 'Chocolate');

INSERT INTO recipe_Ingredients (ingredientID, recipeID, optional, unit, methods, quantity)
VALUES
('ing001', 'r001', 0, 'pcs', 'Chopped', 3),
('ing003', 'r001', 0, 'pcs', 'Chopped', 1),
('ing004', 'r001', 1, 'cloves', 'Minced', 2),
('ing002', 'r002', 0, 'g', 'Sliced', 500),
('ing005', 'r002', 1, 'pcs', 'Diced', 2),
('ing006', 'r004', 0, 'cups', 'Mixed', 2),
('ing007', 'r004', 0, 'pcs', 'Beaten', 3),
('ing010', 'r004', 0, 'g', 'Melted', 200),
('ing008', 'r005', 1, 'g', 'Grated', 50),
('ing009', 'r005', 0, 'pcs', 'Chopped', 1);

INSERT INTO comments (commentID, userID, recipeID, commentDate, content)
VALUES
('cmt001', '101', 'r001', '2024-11-21 10:00:00', 'Delicious recipe! My family loved it.'),
('cmt002', '103', 'r002', '2024-11-21 11:30:00', 'The chicken curry was amazing!'),
('cmt003', '104', 'r003', '2024-11-21 12:45:00', 'Healthy and easy to make.'),
('cmt004', '102', 'r004', '2024-11-21 13:15:00', 'Best chocolate cake ever!'),
('cmt005', '105', 'r005', '2024-11-21 14:00:00', 'The salad was so fresh and tasty.');

INSERT INTO likes (likeID, recipeID, userID, time, status)
VALUES
('like001', 'r001', '101', '2024-11-21 10:15:00', 1),
('like002', 'r002', '103', '2024-11-21 11:45:00', 1),
('like003', 'r003', '104', '2024-11-21 12:50:00', 1),
('like004', 'r004', '102', '2024-11-21 13:30:00', 1),
('like005', 'r005', '105', '2024-11-21 14:15:00', 1),
('like006', 'r001', '103', '2024-11-21 10:20:00', 1),
('like007', 'r002', '104', '2024-11-21 11:50:00', 1),
('like008', 'r003', '105', '2024-11-21 12:55:00', 1),
('like009', 'r004', '101', '2024-11-21 13:35:00', 1),
('like010', 'r005', '102', '2024-11-21 14:20:00', 1);

SELECT * FROM group4db.recipes;
