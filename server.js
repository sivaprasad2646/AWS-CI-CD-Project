const http = require("http");

http.createServer((req, res) => {
  res.write("CI/CD New version Deployment Successful 🚀");
  res.end();
}).listen(3000);
