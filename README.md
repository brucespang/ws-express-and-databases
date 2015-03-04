# Workshop: Express and Databases

## Overview

This workshop will exercise your understanding of Express and
Databases. In particular, you will build a simple web service that
will retrieve data from a postgres database and display the results in
a web browser. You will need to create the database, populate the
database with data, and implement the proper routes in Express to view
the data in a browser.

## Prerequisite Knowledge

In order to complete this workshop successfully you will need to
understand the following topics:

* Installation of postgresql.
* Creation of a database.
* SQL for creating a database schema.
* SQL for inserting data into the database.
* SQL for querying the data in the database.
* Installation of the Express web application framework.
* Implementation of Express routes.
* Rudimentary understanding of HTML.
* Basic understanding of HTTP GET and POST requests.
* Basic understanding of HTML forms.

## Part 1: Install Postgres

Your first task is to install the postgres database system. This is
simple as you only need to run the following command:

```bash
$ sudo apt-get update
$ sudo apt-get install postgresql-9.3
$ sudo apt-get install g++
$ sudo apt-get install postgresql-server-dev-9.3
```

## Part 2: Create the Users Database

The next step is to create the users database. This will require you
to login to postgres as the postgres user and create a new user in the
database system and a new database. The steps are simple:

```bash
$ sudo -u postgres psql
postgres=> alter user postgres password 'apassword';
postgres=> create user student createdb createuser password 'student';
postgres=> create database student owner student;
postgres=> \q
```

After you do this you will be able to login as the student user:

```bash
$ GPASSWORD=student psql -U student -h localhost -d users
```

This should connect you to the `users` database and execute queries to
create tables, insert data, etc. I recommend putting this in a bash
script so you do not need to type it out again.

## Part 3: Create The Users Table

We have provided a [schema](db/schema/users.sql) for the table you
need to create (`db/schema/users.sql`). You can easily run this SQL
file from the command line with the following command:

```bash
$ PGPASSWORD=student psql -U student -h localhost -d users --file=db/schema/users.sql
```

We have also provided an [SQL script](db/schema/drop.sql) to drop the
table if you need to start over. You can run this:

```bash
$ PGPASSWORD=student psql -U student -h localhost -d users --file=db/schema/drop.sql
```

## Part 3: Running The Starter Code

We have provided you starter code that runs out-of-the-box. First,
download the [starter code] and unzip it locally. You can then enter
the unarchived directory and install the `npm` modules:

```bash
$ npm install
```

After you get this going you can then test out the express app by
running this command:

```bash
$ NODE_PATH=lib node app.js
```

We include the `NODE_PATH` environment variable to tell `node` where
to find our database library (see next part). This will run the
application on port 3000. You should be able to connect to the
application at [http://localhost:3000/users] from a web browser. This
will then correctly display:

```
Not implemented yet.
```

[starter code]: https://github.com/umass-cs-326/ws-express-and-databases/archive/master.zip

## Part 4: Implement User List

The first piece of functionality you need to implement in this
workshop is the display of the users in the database. In addition, you
will implement an HTML form that you will use to add new users to the
database. Naturally, you will need to provide the proper database
calls to invoke queries on the database. We have provided you a
framework to start from. The two files of interest include:

* [app.js](app.js) - the express application which includes the
  routes.
* [lib/db/index.js](lib/db/index.js) - the database module that will
  be responsible for communicating with the database.

You will notice in [app.js](app.js) that we include 
