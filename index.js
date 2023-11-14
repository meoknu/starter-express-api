const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.all('/req', (req, res) => {
    res.send('Response from web server!')
})
app.listen(process.env.PORT || 3000)