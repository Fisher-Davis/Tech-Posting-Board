const express = require('express');
const sequelize = require('./config/connection')

const app = express()

const tableGen = require('./models')

const PORT = process.env.PORT || 3001

sequelize.sync({force: false}).then(() =>{
    app.listen(PORT, () => {
        console.log('server is running')
})
})




