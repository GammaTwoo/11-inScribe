const router = require('express').Router()

router.get('/', (req, res) => {
    console.log('Request Received')
})

router.get('/notes', (req, res) => {
    console.log('Notes Request Received')
})

module.exports = router