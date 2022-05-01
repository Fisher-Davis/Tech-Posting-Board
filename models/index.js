const User = require('./Users')
const Blogposts = require ('./Blogposts')

User.hasMany(Blogposts, {
    foreignKey: 'user_id',
});

Blogposts.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Blogposts}; 