const express = require('express')
// importing html and api routes
const html_routes = require('./routes/html-routes')
const api_routes = require('./routes/api-routes')

// dynamically load port
const PORT = process.env.PORT || 3001
const app = express()

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
app.use(api_routes)
app.use(html_routes)

// start server
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)
})

// ,-.       _,---._ __  / \
// /  )    .-'       `./ /   \
// (  (   ,'            `/    /|
// \  `-"             \'\   / |
//  `.              ,  \ \ /  |
//   /`.          ,'-`----Y   |
//  (            ;        |   '
//  |  ,-.    ,-'         |  /
//  |  | (   |            | /
//  )  |  \  `.___________|/
//  `--'   `--'  Looking for motivation...