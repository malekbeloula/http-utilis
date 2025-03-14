const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200);
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200);
    res.end("<h1>About Us</h1><p>Learn more about our project.</p>");
  } else {
    res.writeHead(404);
    res.end(
      "<h1>404 - Page Not Found</h1><p>The requested resource was not found.</p>"
    );
  }
});

const PORT = 3004;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
