# Movies Search API

## Details

Create a Node.js app which will:
- [x] handle all requests from the front-end application, send them to OMDb API and return a result
- [x] cache results in Redis
- [x] restrict access to API by using Basic authentication

## Instructions

 - Install: `npm i`
 - Run `npm run start`

### PostgreSQL

- details on `server.js`
- name: `movie-search`
- SQL query to generate the tables:

```
CREATE TABLE login (
    id serial PRIMARY KEY,
    hash varchar(100) NOT NULL,
    email text UNIQUE NOT NULL
);
```

```
CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    joined TIMESTAMP NOT NULL
);
```