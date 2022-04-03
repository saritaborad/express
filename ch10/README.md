Module

Module is code that is grouped together for the purposes of sharing and reuse.
Module breaks complexity into small chunks.

Module Exports

It is instruction that tells Node.js which bits of code(functions,objects,strings,etc) to "export" from given file so that other file can access exported code
Exporting any bits of code(functions,objects,string, etc)

let name1 = "Bob";
function knows(tech) {
console.log("In function", tech);
return techs.find((t1) => t1 === tech) ? true : false;
}
module.exports.name1 = name1;
module.exports.fns = {knows};

Module Import

Importing variables from another file

let xyz = require("./index.js");
console.log(xyz);
let {name1} = require('./index.js')
console.log(xyz.name1);
console.log(xyz.fns.knows('node'));

Install Express

npm install express

CORS - cross origin resourse sharing

Any application on frontend communicates with server using REST APIs

- GET: requests data from server for specified resource
- POST: sends data to the server to create a resource
- PUT: used to update a resource
- DELETE: used to delete a resource

HTTP Status

2xx: Successful responses
200 - ok
4xx: Client Errors
400 - Bad Request
401 - Unauthorized(Login first)
403 - Forbidden(Do not have access rights)
404 - Not Found(not found anything mathing)
5xx:Server Errors

Boiler plate code of express application

let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "\*");
res.header(
"Access-Control-Allow-Methods",
"GET,POST,OPTIONS,PUT,DELETE,HEAD,PATCH"
);
res.header(
"Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type,Accept"
);
next();
});
const port = 2410;
app.listen(port, () => console.log(`Listening on port ${port}!`));

app.get("/svr/test", function (req, res) {
res.send("Test Respons");
});

app.get("/svr/students/course/:name", function (req, res) {
name1 = req.params.name.toLowerCase();

console.log("body:-", req.body);
console.log("params:-", req.params);
console.log("query:-", req.query);
// console.log("route", req.route);
console.log("subdomain:-", req.subdomains);
console.log("protocol:-", req.protocol);
console.log("ip:-", req.ip);
console.log("ips:-", req.ips);
console.log("accepted:-", req.accepted);
console.log("baseurl:-", req.baseUrl);
console.log("complete:-", req.complete);
console.log("cookies:-", req.cookies);
console.log("hostname:-", req.hostname);
console.log("method:-", req.method);
console.log("secure:-", req.secure);
console.log("status code:-", req.statusCode);
console.log("status message:-", req.statusMessage);
console.log("stale:-", req.stale);
// console.log("socket", req.socket);
console.log("trailers:-", req.trailers);
console.log("url:-", req.url);
console.log("http version:-", req.httpVersion);
console.log("xhr:-", req.xhr);

studentArr = studentsData.filter((n1) => n1.course === name1);
res.send(studentArr);
});

Excercise:

Create a server that serves REST APIs
Base URL http://localhost:2410

1. GET /svr/students
2. GET /svr/students
3. GET /svr/students/:id
4. GET /svr/students/course/:name
5. GET /svr/students?course=React
6. GET /svr/students?course=React,Nodejs
7. GET /svr/students?grade=A
8. GET /svr/students?course=React&grade=A
9. GET /svr/students?course=React,Node&grade=B
