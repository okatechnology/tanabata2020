set character_set_database=utf8mb4;
set character_set_server=utf8mb4;

create database tanabataDb default charset utf8mb4;
use tanabataDb;

create table tanzakuInfo (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  content varchar(2240) not null
);

create user user identified by 'password';
grant all privileges on tanabataDb.* to 'user'@'%' identified by 'password';
