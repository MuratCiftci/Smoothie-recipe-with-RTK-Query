## CRUD Recipe App with Redux Toolkit Query
I've developed Fullstack CRUD project using React, Express.js, Redux Toolkit, Redux Toolkit Query and MongoDB.

![Demo](https://media.giphy.com/media/hAAyBbyGrSDfMNohU4/giphy.gif)

User can register, login. Search, update, delete and add recipes.

I've used JSON Web Token for security.

I've used Redux Toolkit for global state management and RTK Query for data fetching and caching.

## :rocket: Tech Stack

- React Js
- SCSS
- Chakra UI
- Redux Toolkit 
- Redux Toolkit Query
- NodeJs
- Express
- MongoDB
- Mongoose
- JSON Web Token

## Why should we use RTK Query for data fetching.
RTK Query is a powerful data fetching and caching tool. It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself. 

-RTK Query is UI-agnostic. It can be integrated with any framework capable of using Redux

-Avoids duplicate requests for the same data

-Managing cache lifetimes as the user interacts with the UI


You can check offical documentation for more information.

https://redux-toolkit.js.org/rtk-query/usage/queries

## :warning: Prerequisite

- node
- npm
- mongodb
## :cd: How to run local

```bash
# Clone this repository
$ git clone https://github.com/MuratCiftci/Smoothie-recipe
# Go into the repository
# Go into server
$ cd server
# Install dependencies
$ npm install
# Start the backend server
$ npm start
# On another terminal, go to the client folder
$ cd ../client
# Install dependencies
$ npm install
# Start the backend server
# npm start 
