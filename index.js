const express = require("express")
const app = express()
const ServerModel = require('./serverModel')
const model = new ServerModel
  
app.use(express.json())

app.get("/set", (req, res, next) => {
  model.add(req.query)
  res.send(req.query)
})

app.get("/get", (req, res, next) => {
  let data = model.retrieve(req.query['key'])
  res.send(JSON.stringify(data));
})

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log("Server is Running")
})
