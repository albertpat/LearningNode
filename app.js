const http = require("http")

const server = http.createServer((request, response) => {
    response.end("repsonse sent")
});

server.listen(5500, () => {
    console.log("server is listening on port 5500...")
});