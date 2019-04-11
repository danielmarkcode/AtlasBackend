var express = require('express')

var router = express.Router()
var todos = require('./api/atlas.route')


router.use('/atlas', todos);


module.exports = router;