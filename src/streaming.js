const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "sample.txt");

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(400, {
        "content-type": "text/plain",
      });
      res.end("File not found");
      return;
    }

    res.writeHead(200, {
      "content-type": "text/plain",
      "content-length": stats.size,
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);

    readStream.on("error", (error) => {
      console.error("Stream error", error);
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Internal server error");
    });
  });
});

const PORT = 3003;
server.listen(PORT, () => {
  console.log("Streaming server on http://localhost:3003");
});
