# create extension if not exists "uuid-ossp";

create table users (
    id uuid default uuid_generate_v4(),
    name varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    primary key (id)
)