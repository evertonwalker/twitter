var initDbAction = require('../actions/InitDbAction');
var userAction = require('../actions/UserAction');
var followAction = require('../actions/FollowAction');
var tweetAction = require('../actions/TweetAction');


module.exports = function(app) {

    app.get('/api/', initDbAction.createTables);

    //USERS -> 

    app.get('/api/users/:id', userAction.getAllUsers);


    // FOLLOWERS -> 

    app.post('/api/follow/', followAction.followUser);
    app.post('/api/unfollow/', followAction.unFollowUser);
    app.get('/api/followers/:id', followAction.getFollowsUsers);

    // Tweet

    app.post('/api/tweet/', tweetAction.postTweet);
    app.get('/api/tweets/:id', tweetAction.recentsTweets);
    app.get('/api/tweet/:id', tweetAction.userTweet);

};