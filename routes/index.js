const router = require('express').Router()

// Homepage
router.get('/', (req, res, next) => {
    res.render('index', {layout: 'main'})
    console.log('Served index.')
})

module.exports = router
