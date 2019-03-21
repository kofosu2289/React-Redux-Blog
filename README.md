# React Redux Blog

This is a MERN stack based fully functioning blog system, which supports features of signing up, signing up, making authenticated requests, updating profile, changing password, publishing/editing/deleting blog post, making comments, etc.


## Tech Stack

#### Front-end

* The front-end client is built using React and Redux.
* React-Router is used for navigation.
* Redux-Thunk is used for processing asynchronous requests.
* Bootstrap 4 is used for page styling.

#### Back-end

* The back-end server is built with Express.js and Node.js, which provide completed REST APIs for data interaction.
* Passport.js is used as an authentication middleware in the server.
* JSON Web Token (JWT) is used for signing in users and making authenticated requests.

#### Database

* MongoDB is used as the back-end database, which includes different data models/schemas (i.e., User, Post and Comment).
* Mongoose is used to access the Mongo shell for CRUD actions (create, read, update and delete).

## Usage

Running locally you need 4 terminals open: one for client, one for server, one for the MongoDB back-end, and one for the Mongo shell. Below are the steps:

1. Install Node.js [here](https://nodejs.org/en/download/)
2. Install MongoDB [here](https://www.mongodb.com/download-center/community)
3. Clone this repository to a new folder `git clone https://github.com/kofosu2289/React-Redux-Blog.git <new folder name>`;
4. Go to terminal for `client`, and run `npm install`;
5. Go to terminal `server`, and run `npm install`;
6. In the terminal for MongoDB, run `mongod`;
7. In the terminal for the Mongo shell, run `mongo`;
8. In the `server` terminal, run `npm run dev`;
9. In the `client` terminal, run `npm run start`;

Then you are all set. You can go to `http://localhost:3000/` to check your live application.

## Proxy

Please refer to [this link](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#proxying-api-requests-in-development).
