const router = require('express').Router()
const path = require('path')

// any path entered requests the same index file. accept /notes    ||
router.get('*', (req, res) => {                                 // ||
    res.sendFile(path.join(__dirname, '../public/index.html'))  // ||
})//            __________________________________________________ ||
//            / ____________________________________________________/
//            ||      
// route for  \/    the notes request. only exception to previous route           
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// export the routes so server.js can use
module.exports = router