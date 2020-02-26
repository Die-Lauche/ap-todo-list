DROP DATABASE IF EXISTS todo;

CREATE DATABASE todo default CHARACTER SET utf8 default COLLATE utf8_bin;

GRANT ALL PRIVILEGES ON effgen.* to effgen @'%' IDENTIFIED BY 'effgen';

GRANT ALL PRIVILEGES ON effgen.* to effgen @'localhost' IDENTIFIED BY 'effgen';

USE todo;

CREATE TABLE `cities` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45),
    `plz` VARCHAR(45)
);

CREATE TABLE `groups` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(45)
);

CREATE TABLE `todo_list` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(45)
);

CREATE TABLE `todo` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `content` VARCHAR(255),
    `completed` BOOLEAN,
    `todo_list_id` INT UNSIGNED,
    FOREIGN KEY (`todo_list_id`) REFERENCES `todo_list`(`id`)
);

CREATE TABLE `user_has_todo_list` (
    `user_id` INT UNSIGNED,
    `todo_list_id` INT UNSIGNED,
    FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
    FOREIGN KEY (`todo_list_id`) REFERENCES `todo_list` (`id`),
    UNIQUE (`todo_list_id`, `user_id`)
);

CREATE TABLE `user` (
    `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(45),
    `password` VARCHAR(45),
    `email` VARCHAR(45),
    `city` INT UNSIGNED,
    `group` INT UNSIGNED,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (`city`) REFERENCES `cities`(`id`),
    FOREIGN KEY (`group`) REFERENCES `groups`(`id`)
);