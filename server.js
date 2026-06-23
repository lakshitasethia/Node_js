import http from 'http';

const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("<button>Hello, World!</button>");
});
server.listen(5002, () => {
    console.log("Server is running on port 5002");
});