const { application, request } = require('express')
const express = require('express')
const dotenv = require('dotenv').config
const port = process.env.PORT || 8008
const app = express()
app.listen(port, () => console.log(`server started on  port ${port || process.env.PORT}`))
app.use('/api/users', require('./routes/UsersRoute'))