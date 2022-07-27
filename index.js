const express = require("express")
const app = express()
  
// Handling GET / request

app.use(express.json())

app.get("/", (req, res, next) => {
  console.log(req.query)
  res.send(req.query)
})

app.get("/set", (req, res, next) => {
  res.send(req.query);
})

app.get("/get", (req, res, next) => {
  res.send(JSON.stringify('cat'));
})

// Server setup
app.listen(4000, () => {
    console.log("Server is Running")
})
