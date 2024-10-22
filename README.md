# Registration Form MERN App

A full-stack MERN application for managing user registration and authentication.

## About the project
This is a full-stack MERN application that handles user registration and authentication processes. The app uses MongoDB Atlas as its database and displays the user interface using React.

## Tech Stack

**Client:** React, Bootstrap

**Server:** NodeJS, ExpressJS

**Database:** MongoDB

## Run Locally

Clone the project

```bash
  git clone https://github.com/4khiljoy/Registration-Form-MERN.git

```

Go to the project directory

```bash
  cd Registration-Form-MERN
```

Create an Atlas URI connection parameter in `server/.env` with your Atlas URI:
```
ATLAS_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority"
PORT=5000
```

Create an hostname on server enviroment variable in `client/.env`:
```
REACT_APP_YOUR_HOSTNAME="http://localhost:5000"
```

Install dependencies

```bash
  cd server
npm install
cd client
npm install
```

Start the server

```bash
  cd server
node server.js
```
Start the Client

```bash
  cd client
npm start
```
  

## Features in the project

- User registration with form validation.
- User authentication and login management.
- Secure password handling using hashing and JWT tokens.
- CRUD operations for user data management.
## Learn More

**FrontEnd**

* To learn React, check out the [React documentation](https://reactjs.org/).

* You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

* Get started with [Bootstrap](https://www.w3schools.com/bootstrap5/index.php), the world's most popular framework for building responsive, mobile-first websites.

**BackEnd**

* [Node.js Tutorial](https://www.w3schools.com/nodejs/default.asp)

* [ExpressJS Tutorial](https://www.tutorialspoint.com/expressjs/index.htm)

**Database**

* [MongoDB Tutorial](https://www.w3schools.com/mongodb/)
