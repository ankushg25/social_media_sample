const express = require('express');
const app = express();

// Routers
const authRouter = require('./router/auth');
const usersRouter = require('./router/users');

// JSON: Default Request Format 
app.use(express.json());

// Cors Handling
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API Routers
app.use('/api/auth', authRouter);
app.use('/api/user', usersRouter);

const server = app.listen(1234, () => console.log(server.address()));