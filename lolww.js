const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

const statsfile = "item.html";


const server = http.createServer((req, resp) => {
    const pathName = req.url;

    if (pathName === '/') {
        resp.end('Default');
    } 
    
    
    else if (pathName === '/item') {
        // Read the HTML file and send it as a response
        const filePath = path.join(__dirname, 'Html/item.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end('Internal Server Error');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.end(data);
            }
        });
    }
    

    else if (pathName === '/stats') {
        // Read the HTML file and send it as a response
        const filePath = path.join(__, 'Html/stats.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                resp.writeHead(500, { 'Content-Type': 'text/plain' });
                resp.end('Internal Server Error');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.end(data);
            }
        });
    }


    else if (pathName === '/api') {
        // Read the HTML file and send it as a response
        const filePath = path.join(__dirname, 'test.json');
        fs.readFile(filePath, 'utf-8' , (err, data)  => {
            const lol = JSON.parse(data)
            resp.writeHead(200 , {'Content-type' : 'text/text'})
            resp.end(`${data}`)
        });
    }
    
    
    else {
        resp.writeHead(404, { 'Content-Type': 'text/plain' });
        resp.end('404 Page Not Found');
    }
});

server.listen(4000, 'localhost', () => {
    console.log('Listening on port 4000');
});
