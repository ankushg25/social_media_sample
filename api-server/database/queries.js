const db = require('./connection');

// Query Object
const querySet = {};

querySet.createUser = (fname, lname, avatar) => db.query(
    'INSERT INTO USERS (fname, lname, avatar) values($1, $2, $3)', [fname, lname, avatar]
);

querySet.getUserList = (page, count) => db.query(
    'SELECT * FROM USERS LIMIT $1 OFFSET $2', [count, page]
);

querySet.getUserInfo = id => db.query(
    'SELECT * FROM USERS WHERE id = $1', [id]
);

querySet.getFriendList = id => db.query(
    'SELECT id, fname, lname FROM USERS WHERE id IN (SELECT friend_id FROM FRIENDS WHERE user_id = $1)',
    [id]
);

querySet.addFriends = (userId, friendId) => db.query(
    'INSERT INTO FRIENDS(user_id, friend_id) values($1, $2), ($2, $1)', [userId, friendId]
);

querySet.filterUserList = searchStr => db.query(
    'SELECT * FROM USERS WHERE fname LIKE $1', ['%' + searchStr + '%']
);

querySet.getFriendsOfFriends =

    module.exports = querySet;