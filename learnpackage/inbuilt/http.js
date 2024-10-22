let http = require('http');

// req > what we send to server(body, params, queryParams)
// res > it is what we get from server

let server = http.createServer(function(req, res) {

    res.write(`<h1>Hi From Nodejs Server First</h1>`)
    res.end()

})

server.listen(8771);