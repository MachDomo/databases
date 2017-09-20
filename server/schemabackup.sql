DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT(200) NOT NULL,
  createdAt datetime NOT NULL
);

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  username TEXT(20)
);

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE rooms (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  rooms TEXT(20) NOT NULL
);

DROP TABLE IF EXISTS `users_messages`;

CREATE TABLE users_messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  messages_id INT
);

DROP TABLE IF EXISTS `messages_rooms`;

CREATE TABLE messages_rooms (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  messages_id INT,
  rooms_id INT


);

-- ALTER TABLE `users_messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
-- ALTER TABLE `users_messages` ADD FOREIGN KEY (messages_id) REFERENCES `messages` (`id`);
-- ALTER TABLE `messages_rooms` ADD FOREIGN KEY (messages_id) REFERENCES `messages` (`id`);
-- ALTER TABLE `messages_rooms` ADD FOREIGN KEY (rooms_id) REFERENCES `rooms` (`id`);
