let http = require('http');
let port = 3000 || process.env.PORT;


/**
 * 
 * @param {http.IncomingMessage} req 
 * @param {http.ServerResponse} res 
 */
async function handleRequests(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('hej');
    res.end();
}

const app = http.createServer(handleRequests);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
