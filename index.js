const express = require("express")
const app = express()
const ServerModel = require('./serverModel')
const model = new ServerModel
  
// Handling GET / request

app.use(express.json())

app.get("/set", (req, res, next) => {
  model.add(req.query)
  res.send(req.query)
})

app.get("/get", (req, res, next) => {
  let data = model.retrieve(req.query['key'])
  res.send(JSON.stringify(data));
})

// Server setup
app.listen(4000, () => {
    console.log("Server is Running")
})
