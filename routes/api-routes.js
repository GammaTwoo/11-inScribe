const router = require('express').Router()
// to make unique ids for each note
const { v4: uuidv4 } = require('uuid')
const fs = require ('fs')

// route for get request. runs on page open, waits for data from the server to send the response
router.get('/api/notes', async (req, res) => {
    console.log('Get request received')
    const data = await JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    res.json(data)
})

// route for post request. creates a note and adds it to the db
router.post('/api/notes', (req, res) => {
    console.log('Post request received')
    const data = JSON.parse(fs.readFileSync('db/db.json', 'utf8'))
    const newData = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    data.push(newData)
    fs.writeFileSync('db/db.json', JSON.stringify(data))
    res.json(data)
})

// delete request route. takes the db and creates a new object with the triggering note taken out, then writes the new data to the db 
router.delete('/api/notes/:id', (req, res) => {
    console.log('Delete request received')
    console.log(req.params.id)
    let data = fs.readFileSync('db/db.json', 'utf8')
    const dataJSON = JSON.parse(data)
    const newData = dataJSON.filter((note) => {
        return note.id !== req.params.id
    })
    fs.writeFileSync('db/db.json', JSON.stringify(newData), 'utf8')
    res.json('Note Deleted')
})

// export the routes so server.js can use it
module.exports = router