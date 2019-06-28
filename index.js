let finalhandler = require('finalhandler')
let http = require('http')
let serveStatic = require('serve-static')
let config = require('config')

// Serve up public/ftp folder
var serve = serveStatic(config.get('filePath'), {'index': ['index.html', 'index.htm']})

console.log('file path:' + config.get('filePath'))

// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(config.get('app.port'))
console.log('file server listion on ' + config.get('app.port'))
