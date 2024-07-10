const express = require('express')
const app = express()

const core = require('./core/core.controller')

app.use('/', core)

app.listen(3000, () => {
    console.log('servidor rodando')
})