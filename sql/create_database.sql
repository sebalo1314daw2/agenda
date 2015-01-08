-- Create user 'hsGdo9H2' for local access
CREATE USER 'hsGdo9H2'@'localhost' IDENTIFIED BY '8.ksHs-4mN0';
-- Create user 'hsGdo9H2'for remot access
CREATE USER 'hsGdo9H2'@'%' IDENTIFIED BY '8.ksHs-4mN0';
-- Create database 'hd_f76Wqp2J'
CREATE DATABASE hd_f76Wqp2J
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;
-- Grant previleges for the users
GRANT ALL PRIVILEGES ON hd_f76Wqp2J.* TO 'hsGdo9H2'@'localhost' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON hd_f76Wqp2J.* TO 'hsGdo9H2'@'%' WITH GRANT OPTION;
