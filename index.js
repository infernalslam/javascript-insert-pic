var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var data = []

app.post('/status', function (req, res) {
  console.log(req)
  data.push(req.body)
})

app.get('/status', function (req, res) {
  res.send(data)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
