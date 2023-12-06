const router = require('express').Router()
const fs = require ('fs')

router.get('/api/notes', async (req, res) => {
    console.log('Get request received')
    const data = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(data)
})

router.post('/api/notes', (req, res) => {
    console.log('Post request received')
})

router.delete('/api/notes', (req, res) => {
    console.log('Delete request received')
})

module.exports = router