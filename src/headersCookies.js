const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/plain",
    "set-cookie": "user=Malek; HttpOnly",
  });

  res.end(`Your User-Agent: ${req.headers["user-agent"]}`);
});

server.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
