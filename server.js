const http = require("http");

http.createServer((req, res) => {
  res.write("CI/CD Deployment Successful 🚀");
  res.end();
}).listen(3000);
