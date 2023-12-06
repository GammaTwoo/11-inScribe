const router = require('express').Router()
const fs = require ('fs')

router.get('/api/notes', (req, res) => {
    console.log('Get request received')
})

router.post('/api/notes', (req, res) => {
    console.log('Post request received')
})

router.delete('/api/notes', (req, res) => {
    console.log('Delete request received')
})

module.exports = router