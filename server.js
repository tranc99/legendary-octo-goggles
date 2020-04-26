const http = require('http')

const server = http.createServer(function (req, res) {
  res.write('<h1>Hello Ten</h1>')
})

server.listen(4000)
