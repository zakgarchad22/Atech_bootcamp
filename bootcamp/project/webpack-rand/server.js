const express = require('express')
const app = express()
const api = require('./server/routes/api')
const cors = require('cors');
app.use(cors());

app.use(express.json())
app.use('/api', api)

const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
