const router = require('express').Router()

router.use('/clients', require('./clients'))
router.use('/skills', require('./skills'))

module.exports = router