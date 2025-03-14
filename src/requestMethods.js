const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.setHeader("X-Powered-By", "NodeJs");
  if (req.method === "GET") {
    res.writeHead(200);
    res.end("Received a GET request");
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      res.writeHead(200);
      res.end(`Received POST with data: ${body}`);
    });
  } else if (req.method === "PUT") {
    res.writeHead(200);
    res.end("Received a PUT method");
  } else if (req.method === "DELETE") {
    res.writeHead(200);
    res.end("Received a DELETE method");
  } else {
    res.writeHead(405);
    res.end("Method Not Allowed");
  }
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
