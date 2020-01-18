const http = require('http');
const file = require('fs');

const server = http.createServer((request, response) => 
{
    console.log("request was came");
    response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    file.readFile("index.html" , (error, data) => {
        if(error)
            throw error;
        response.write(data);
    });
});

server.listen(3000);

// http://localhost:3000 