DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  text TEXT(200) NOT NULL,
  username VARCHAR(20) NOT NULL DEFAULT "Anonymous",
  roomname VARCHAR(20) NOT NULL DEFAULT "lobby"
);

DROP TABLE IF EXISTS `users`;

CREATE TABLE users (
  /* Describe your table here.*/
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL DEFAULT "Anonymous"
);

# todo: must refactor to declare the trigger before trying ot use it.
# todo: Must refactor to also reference the table after it is created.



-- createdat datetime DEFAULT(getdate()),

-- CREATE TRIGGER getdate
-- ON chat.myTable
-- FOR UPDATE
-- AS
-- BEGIN
--    IF NOT UPDATE(updatedDate)
--        UPDATE dbo.myTable SET createdat = GETDATE()
--        WHERE col1 IN (SELECT col1 FROM inserted)
-- END


/* Create other tables and define schemas for them here! */

