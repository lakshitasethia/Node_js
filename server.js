import http from 'http';
const PORT = process.env.PORT || 5002;
const server = http.createServer((req, res) => {
    try {
        if (req.method === 'GET') {
            if (req.url === '/') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>Homepage!</h1>");
            } else if (req.url === '/about') {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end("<h1>About!</h1>");
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end("<h1>404 Not Found</h1>");
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end("<h1>Method Not Allowed</h1>");
        }
    }
    catch (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end("<h1>Internal Server Error</h1>");
    }

});
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});