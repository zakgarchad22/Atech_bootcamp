const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'client')))

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})

// const express = require('express')
// const app = express()
// const path = require('path')

// app.use(express.static(path.join(__dirname , 'dist')))

// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })

// app.get('/maps', function (request, response) {
//     response.send("Here's some stuff related to maps")
// })

// app.get('/shoobi', function (request, response) {
//     response.send("This here is the shoobi *route*")
// })
// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })
// app.get('/users/:userID', function (request, response) {
//     response.send(users[request.params.userID])
// })
// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })

// app.get('/details', (request, response) => {
//     let params = request.query
//     console.log(params.city)

//     response.send(params)
// })
// const port = 3000
// app.listen(port , function(){

//     console.log("server is running on port" + port);


// })


