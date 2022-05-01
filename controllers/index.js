const router = require('express').Router()



router.get('/', (req, res)=> {
    console.log('its working pimp');
    res.json('this is just a test')
})

module.exports = router