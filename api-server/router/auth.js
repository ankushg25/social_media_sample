const authRouter = require('express').Router();
const authQueries = require('../database/queries');

// Login User
authRouter.post('/login', (req, res) => {
    console.log('Authentication API called!', req);
    res.status(200).json({
        'auth': "User Authenticated"
    });
});

// Register User
authRouter.post('/register', (req, res) => {
    console.log('Creating a new Account with parameters', req.body);

    // User Input Validation to be done
    const fname = req.body.fname;
    const lname = req.body.lname;

    // Create User
    authQueries.createUser(fname, lname, '').then(qRes => {
        console.log('Account Created Successfully', qRes.rows);
        res.status(200).json({
            error: false,
            response: "Account Created Successfully"
        });
    }).catch(reason => {
        console.log(`Account Creation Failed: ${reason}`);
        res.status(500).json({
            error: true,
            response: "Account Created Failed"
        });
    });

})

module.exports = authRouter;