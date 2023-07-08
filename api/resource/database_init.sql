DROP DATABASE IF EXISTS cheemsfood; 
DROP ROLE IF EXISTS cheemsAdmin;
CREATE DATABASE cheemsfood ENCODING 'UTF8';
CREATE ROLE cheemsAdmin LOGIN PASSWORD '123456';
ALTER DATABASE cheemsfood OWNER TO cheemsAdmin;
ALTER USER cheemsAdmin CREATEDB;
GRANT all on database cheemsfood to cheemsAdmin;
