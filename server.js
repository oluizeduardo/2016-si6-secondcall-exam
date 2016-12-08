"use strict"

const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (request, response) {
  response.sendFile("index.html")
})

const hostname = "localhost"
const port = 8080

app.listen(port, _ => console.log('Server started: '+hostname+':'+port))