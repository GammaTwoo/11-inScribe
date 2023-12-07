// express
const express = require('express')
// grabbing the routes defined in html-routes
const html_routes = require('./routes/html-routes')
// grabbing api routes defined in api-routes
const api_routes = require('./routes/api-routes')

// dynamically set port
const PORT = process.env.PORT || 3001
// initialize express
const app = express()

// middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static("public"))
app.use(html_routes)
app.use(api_routes)

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