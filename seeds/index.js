const connection = require("../config/connection")
const {User , Blogposts } = require('../models')

const userData = require("./users.json")
const BlogpostsData = require("./test-post.json")

const injectData = async() => {
    await connection.sync({force: true});

    const  users = await User.bulkCreate(userData)

    const posts = await Blogposts.bulkCreate(BlogpostsData)
    

};

injectData()
