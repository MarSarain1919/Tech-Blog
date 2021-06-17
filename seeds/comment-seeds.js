require('newrelic');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

//create associations

User.hasMany(Post, {
    foreignKey: 'user_id'
});
//reverse
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
//reverse
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
//reverse
Post.hasMany(Comment, {
    foreignKey: 'post_id', 
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };