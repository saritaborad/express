// const persons = [
//   { name: "Jack", age: 25 },
//   { name: "Bob", age: 26 },
//   { name: "Riya", age: 27 },
// ];
// let techs = ["node", "React"];
// let name1 = "Bob";

// persons.push({ name: "kiya", age: 30 });
// // console.log(persons);

// let person = persons.find((p1) => p1.name === name1);
// // console.log(person);

// function knows(tech) {
//   console.log("In function", tech);
//   return techs.find((t1) => t1 === tech) ? true : false;
// }

// Exporting variables
// module.exports.name1 = name1;
// module.exports.person = person;
// module.exports.hello = "hello";
// module.exports = { name1: name1, person: person };
// module.exports = { name1, person, knows };
// module.exports.fns = { knows };
let { studentsData } = require("./students.js");

let express = require("express");
let app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
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

// app.get("/svr/test", function (req, res) {
//   res.send("Test Respons");
// });

// app.get("/svr/students", function (req, res) {
//   res.send(studentsData);
// });

app.get("/svr/students", function (req, res) {
  console.log(req.query);
  let courseStr = req.query.course;
  let grade = req.query.grade;
  let sort = req.query.sort;
  let arr1 = studentsData;
  if (courseStr) {
    let courseArr = courseStr.split(",");
    arr1 = arr1.filter((c1) => courseArr.find((f1) => f1 === c1.course));
  }
  if (grade) {
    arr1 = arr1.filter((c1) => c1.grade === grade);
  }
  if (sort === "name")
    arr1.sort((st1, st2) => st1.name.localeCompare(st2.name));

  if (sort === "course") {
    arr1.sort((st1, st2) => st1.course.localeCompare(st2.course));
  }
  res.send(arr1);
});

app.get("/svr/students/:id", function (req, res) {
  let id = +req.params.id;
  console.log(id);
  let student = studentsData.find((s1) => s1.id === id);
  if (student) res.send(student);
  else res.status(404).send("No student found");
});

app.get("/svr/students/course/:name", function (req, res) {
  name1 = req.params.name;
  studentArr = studentsData.filter((n1) => n1.course === name1);
  res.send(studentArr);
});
