create database burgers_db;
use burgers_db;

create table burgers(
	id int(3) auto_increment primary key,
    burger_name varchar(25),
    devoured bool default false
);