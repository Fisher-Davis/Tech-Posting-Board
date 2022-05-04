const express = require('express');
const sequelize = require('./config/connection')
const routes = require('./controllers')

const app = express()


// this created the tables in blog_db
const tableGen = require('./models')

app.use(routes)

const PORT = process.env.PORT || 3001

sequelize.sync({force: true}).then(() =>{
    app.listen(PORT, () => {
        console.log('server is running')
})
})




