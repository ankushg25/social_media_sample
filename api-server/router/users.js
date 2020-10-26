const usersRouter = require('express').Router();
const db = require('../database/queries');

// Fetch User List
usersRouter.get('/list/', (req, res) => {
    console.log('Fetching Users. Pagination Information: ', req.query);

    // User Input Checks
    const pageNumber = req.query.page - 1;
    const pageSize = req.query.count;

    db.getUserList(pageNumber, pageSize).then(qRes => {
        console.log('Fetching Users: ', qRes.rows);
        res.json(qRes.rows);
    }).catch(reason => {
        console.log('Unable to get User List: ', reason);
    });
});

// Filtered User List
usersRouter.get('/filter', (req, res) => {
    const searchStr = req.query.searchStr;
    console.log(searchStr);

    db.filterUserList(searchStr).then(qRes => {
        console.log(`User found ${qRes.rows}`);
        res.json({
            error: false,
            response: qRes.rows
        });
    }).catch(reason => {
        console.log('Unable to search: ', reason);
        res.json({
            error: true,
            response: "Unable to obtain filtered Data"
        })
    })
});

// Get Friends List
usersRouter.get('/:id/friends/', (req, res) => {
    const userId = req.params.id;
    console.log("Got Add Friend Request for ", userId);

    db.getFriendList(userId).then(qRes => {
        console.log(qRes.rows);
        if (qRes.rowCount == 0) {
            res.status(204).json({
                error: false,
                response: ''
            });
            return;
        }
        res.status(200).json({
            response: qRes.rows,
            error: false
        });
    }).catch(reason => {
        console.log("Unable to Fetch Friends for: ", reason);
        res.status(500).json({
            error: true,
            response: `Unable to fetch Friend List for ${userId}`
        });
    });
});

// Add friends
usersRouter.post('/:id/friends/', (req, res) => {

    const userId = req.params.id;
    console.log("Got Add Friend Request for ", userId);

    const friendId = req.body.id;
    db.addFriends(userId, friendId).then(qRes => {
        console.log(qRes.rows);
        res.json({
            error: false,
            friendId: friendId,
            response: "Friend Added Successfully"
        })
    }).then(reason => {
        console.log(`Unable to add ${friendId} as friend for ${userId}: `, reason);
        res.status(500).json({
            error: true,
            response: "Unable to Add Friend"
        })
    })
});

// Get Friends of friends
usersRouter.get('/:id/friends/friends/', (req, res) => {
    console.log(req.params);
    res.send('');
});

// Get User Info
usersRouter.get('/:id/', (req, res) => {
    const userId = req.params.id;
    console.log("Got User Info Request for ", userId);

    db.getUserInfo(userId).then(qRes => {
        console.log(`User Info fetched for user ${userId}: `, qRes.rows);
        res.json({
            error: false,
            response: qRes.rows
        });
    }).catch(reason => {
        console.log('Unable to search: ', reason);
        res.json({
            error: true,
            response: "Unable to fetch users"
        })
    })
});

module.exports = usersRouter;