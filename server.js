var http = require('http');

http.createServer(function(request, response) {
    request.on('error', function(err) {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', function(err) {
        console.error(err);
    });
    if (request.method === 'GET' && request.url === '/echo') {
        request.pipe(response);
    } else {
        response.statusCode = 404;
        response.end('Hello from your node http server');
    }
}).listen(8080); // Activates this server, listening on port 8080. localhost:8080")