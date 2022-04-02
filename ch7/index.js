// // Http module and create web server

// // const http = require('http')
import http from "http";

// // Create web server - http module

// // const server = http.createServer((req,res)=>{
// //     res.setHeader('Content-Type','text/plain')
// // res.end('Response from server')
// // })

// // server.listen(8000,'localhost',()=>{
// //     console.log('server running at http://localhost:8000')
// // })

// const server = http.createServer((req, res) => {
//   // Request
//   console.log(req.url);
//   if (req.url != "/favicon.ico") {
//     console.log(req.url);
//   }
//   console.log(req.method);
//   //   res.statusCode = 202;
//   //   res.statusMessage = "good";
//   //   res.setHeader("Content-Type", "text/plain");
//   res.writeHead(202, "Good", { "Content-Type": "text/plain" });
//   res.end("Response from server");
// });

// const PORT = process.env.PORT || 8000;
// const HOST = "localhost";

// server.listen(PORT, "localhost", () => {
//   console.log("server running at http://localhost:8000");
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, "ok", { "Content-Type": "text/html" });
  if (req.url === "/") {
    res.end("<h1>Home Page</>");
  }

  if (req.url === "/about") {
    res.end("<h1>About Page</>");
  } else {
    res.end("<h1>404 PAGE NOT FOUND</h1>");
  }
});
