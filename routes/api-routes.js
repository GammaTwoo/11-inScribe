const router = require('express').Router()
const fs = require ('fs')

router.get('/api/notes', async (req, res) => {
    console.log('Get request received')
    const data = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(data)
})

router.post('/api/notes', (req, res) => {
    console.log('Post request received')
    const data = JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    const newData = {
        title: req.body.title,
        text: req.body.text
    }
    data.push(newData)
    fs.writeFileSync('db/db.json', data)
    res.json(data)
})

router.delete('/api/notes', (req, res) => {
    console.log('Delete request received')
})

module.exports = router