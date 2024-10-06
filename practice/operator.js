const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    let a = parseFloat(query.a);  // Convert 'a' to a float
    let b = parseFloat(query.b);  // Convert 'b' to a float
    let operator = query.operator;  // The operation to perform

    let result;

    if (!a || !b || !operator) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: "Missing query parameters. Please provide 'a', 'b', and 'operator'." }));
        return;
    }

    switch (operator) {
        case 'add':
            result = a + b;
            break;
        case 'sub':
            result = a - b;
            break;
        case 'div':
            if (b === 0) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: "Division by zero is not allowed." }));
                return;
            }
            result = a / b;
            break;
        case 'mul':
            result = a * b;
            break;
        default:
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: "Invalid operator. Please use 'add', 'sub', 'mul', or 'div'." }));
            return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ result: result }));
});

server.listen(3003, () => {
    console.log('Server running on port 3003');
});
