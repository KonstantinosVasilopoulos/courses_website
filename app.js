const path = require('path')

// Load the express module
const express = require('express')

// Load the handlebars module
const handlebars = require('express-handlebars')

// Load the router
const routes = require(path.join(__dirname, 'routes', 'index'))

// Create the express server
const app = express()
const port = 3000

// Set the handlebar's engine as the default engine
app.engine('handlebars', handlebars.engine({
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    defaultLayout: 'main',
    partialsDir: path.join(__dirname, 'views', 'partials'),
}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// Serve static files
app.use(express.static('public'))

// Connect the router
app.get('/', routes)

// Registration page
app.get('/register', (req, res, next) => {
    res.render('register', { layout: 'main' })
    console.log('Served register.')
})

// Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}.`))
