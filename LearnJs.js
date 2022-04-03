// IF AND ELSE STATEMENTS

let num1 = 6;
let num2 = 4;
if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num2 is greater than num1");
}

//
let num = 5;
if (num % 2 === 0) {
  console.log("the number is even");
} else {
  console.log("num is odd");
}

// else if
let num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log("num1 is the greatest");
} else if (num2 > num3) {
  console.log("num2 is greatest");
} else {
  console.log("num3 is greatest");
}

// ternary operator ?:   variable = condition ? True : False

let result = num3 % 2 === 0 ? "Even" : "odd";
console.log(result);

// switch - case

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("4 am");
    break;
  case "Tuesday":
    cd;
  case "Wednusday":
  case "Thursday":
    console.log("8 am");
    break;
  case "Friday":
    console.log("9 am");
    break;
  case "Saturday":
  case "Sunday":
    console.log("10 am");
    break;
  default:
    console.log("7 am");
}

function shows() {
  alert("Hello, welcome to our websites");
}

    document.getElementById("h14").style.backgroundColor = "lightblue";

    document.getElementById("h15").innerHTML = "Learn HTML, CSS AND javascript";


//  using id of element hiding component ( id returns object)
 function myfunc(){

    document.getElementById("note").style.display = "none";
}

// way to print in javascript
console.log("hello world");
document.write("hello world");

// console API
console.warn('this is warning');
console.error('this is an error');
console.clear();
console.assert(4 == (6-2));

// applying style to h3 tag
var a = document.getElementsByTagName("h3").length - 1;
for (var i = 0; i <= a; i++) {
    document.getElementsByTagName("h3")[i].style.backgroundColor = 'lightblue';
}

var b = document.getElementsByTagName("b").length - 1;
for (var i = 0; i <= b; i++) {
    document.getElementsByTagName("b")[i].style.backgroundColor = 'lightyellow';
}

//  using class hiding component (class returns array)

function myfunc() {
    document.getElementsByClassName("note")[0].style.display = "none";
}

function display() {
    document.getElementById("h12").innerHTML = "I don't like apple";
    document.getElementById("h12").style.fontSize = "30px";
}

function myfun() {
    alert("don't click this button")
}

function mydate() {
    document.getElementById("h13").innerHTML = Date();
}

function light(sw) {
    var x;
    if (sw == 0) {
        x = "https://www.w3schools.com/html/pic_bulboff.gif";
    } else {
        x = "https://www.w3schools.com/js/pic_bulbon.gif";
    }
    document.getElementById("bulb").src = x;
}

function hid() {
    var person = { firstName: "Sarita", lastName: "borad", age: 25, fullName: function () { return "My name is " + this.firstName + " " + this.lastName } };
    // document.getElementById("h16").innerHTML = "my name is " + person.firstName + " " + person.lastName;
    // document.getElementById("h16").innerHTML = person["firstName"] + " " + person["lastName"];
    document.getElementById("h16").style.display = "block";
    document.getElementById("h16").innerHTML = person.fullName();
}

function c1() {
    document.getElementById("h1").innerHTML = "learn html and css here";
}

function c2() {
    document.write("hello, we are here to teach you")
}

 window.alert("Learn HTML and CSS here")

console.log('hello, world')

function pr() {
    window.print();
}

function c3() {
    var x, y;
    x = 10
    y = x * 10
    console.log(y)
}

function c4(name, profession) {
    document.getElementById("arg").innerHTML = name + " is " + profession;

}

function myfunction(txt) {
    document.getElementById("greet").innerHTML = txt;

}

//  prompt let user enter value
let val1 = prompt("what is your age? ", "enter your age:- ")
console.log(val1)

//  to confirm value
let x = confirm("are you sure?");
console.log(x)

var x = "abcdefght6131667"
var ln = x.length
document.getElementById("ln").innerHTML = ln;

var x1 = "her name is very nice";
var y = x1.indexOf("nice");
console.log(y)

// numbers
// precedence        //associativity
// parenthesis       ---
// exponsetiation    right to left
// *,/,%             left to right
// +, -              left to right
// to convert string into int or float
let n1 = -12;
let n2 = "12";
let n3 = 12.4;
console.log(n1 + parseInt(n2)); //parseInt convert number in string to integer
console.log(n1 + parseFloat(n2)); //parseFloat converts number in string to float
console.log(Number(n2));
console.log(typeof "2"); //to know type use - typeof
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Math.PI);
console.log(Math.round(n3)); //it round of digits after decimal point
console.log(Math.floor(n3)); // it round of to lower digit -- 12
console.log(Math.ceil(n3)); // it round of to upper digit -- 13
console.log(Math.abs(n1)); // returns positive integer always
console.log(Math.max(12, 13, 20));
console.log(Math.min(12, 5, 23));

let bigNum = 10000000000000000000n;
let bigNum2 = bigNum + BigInt(2000000000000000); //num bigger than Max_safe_integer
console.log("big number is:- " + bigNum2);

let randomNum1 = Math.random(); // It returns random number between 0 to 1 but not 1
let randomNum = Math.floor(Math.random() * 10); // It returns random Int num btn 0 to 10
console.log("random float num between 0 to 1:- " + randomNum);
console.log("random Ineger num between 0 to 10:- " + randomNum1);

// to find random num between two num
let minNum = 5;
let maxNum = 10;
randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
console.log("random num btn 5 & 10:- " + randomNumber);

// Use of if else
document.write("<h3>Use of if else </h3>");
var name = window.prompt("enter the name:-  ");
if (name == "sarita") {
    document.write("Hello " + name);
} else {
    document.write("welcome to our website " + name + "!!");
}

// Use of switch case
document.write("<h3>Use of switch case </h3>");
var day = window.prompt("Enter your day:- ");
switch (day) {
    case "sun":
    case "sat":
        document.write("Today is Holiday");
        break;
    case "mon":
    case "tue":
    case "wed":
    case "fri":
        document.write("Today is not Holiday");
        break;
}

// for loop
document.write("<h3>for loop</h3>");
for (i = 1; i < 6; i++) {
    if (i == 3) {
        continue;
    }
    document.write(i + "<br>");
}

// Nested for loop
document.write("<h3>Nested for loop</h3>")
for (i = 0; i < 2; i++) {
    document.write("Outer for loop " + i + "<br>")
    for (j = 1; j < 3; j++) {
        document.write("inner for loop " + j + "<br>")
    }
}

// while loop
document.write("<h3>while loop</h3>")
var i = 0
while (i < 5) {
    if (i == 3) {
        break;
    }
    document.write("this is while loop " + i + "<br>")
    i++
}

// Nested while loop
document.write("<h3>accessing arguments passed in function using arguments object array</h3>")
var i = 0;
while (i < 3) {
    document.write("outer while loop" + i + "<br>")
    i++
    var j = 0;
    while (j < 2) {
        document.write("inner loop " + j + "<br>")
        j++
    }
}

// Do while loop
document.write("<h3>Do while loop</h3>")
var i = 1;
do {
    document.write("Do it" + i + "<br>");
    i++
} while (i < 5)

// Nested do while loop
document.write("<h3>Nested do while loop</h3>")
var i = 1;
do {
    document.write("do outer" + "<br>");
    i++;
    var j = 1;
    do {
        document.write("do inner" + "<br>");
        j++;

    } while (j < 4);
} while (i < 3);

// Use of function
document.write("<h3>Use of function</h3>")
function show() {
    document.write("you are Grate")
}

show()

// arguments object contains an array of arguments used when the function was called
document.write("<h3>accessing arguments passed in function using arguments object </h3>")
function disp(name1, name2, name3 = "Riya") {
    document.write("<h3>number of arguments passed can be found by length property of argument object</h3>")
    document.write("number of arguments passed in function = " + arguments.length + "<br>");
    for (var i = 0; i < arguments.length; i++) {

        document.write("<br>" + arguments[i] + "<br>");

    }
    document.write("<br> <h3>callee property of arguments object displays that function  - </h3>")
    document.write(arguments.callee)
    document.write("<h3>Default parameter to function</h3>")
    document.write(name3 + "<br>");

}

disp("sarita", "smruti")

// anonymous function in javascript
a = function () {
    document.write("<h3>function without name is anonymous function</h3>");
    document.write("it needs function expression to call / close this function with semi colon ")
};

a()

// passing  anonymous function as argument
function dis(myfun) {
    document.write("<h3> anonymous function as argument</h3>");
    return myfun()
}

document.write(dis(function () {
    return " result returned from Anonymous function";
}));

// function returning anonymous function

function displ(a) {
    document.write("<h3> function returning anonymous function </h3>");
    return function (b) { return a + b; }
}

var d = displ(10)
document.write(d(40))

// function expression
var di = function disp() {
    document.write("<h3> function expression </h3>");
};

di()

// Anonymous function
var an = function () {
    document.write("<h3> Anonymous function </h3>");
};

an()

// Arrow function
var ar = () => { document.write("<h3> Arrow function </h3>"); };

ar()

var ar1 = c => { return c; };
ar1(20)
// we need not to write return when using arrow function, we can simply return like below
var ar1 = c=> {c}; //won't work
var ar2 = c => c;
var ar2 = (a, b) => a + b;

document.write(ar2(10,20))

// Immediately Invoked function expression(IIFE) // it is javascript function that runs as soon as it is defined.
(function () {
    document.write("<h3> Immediately Invoked function expression(IIFE) </h3>");
})();

// Immediately Invoked function expression(IIFE) with arguments
(function (a, b) {
    document.write("<h3> Immediately Invoked function expression(IIFE) with arguments </h3>");
    document.write(a + b);
})(10, 20);

// use of typeof operator
document.write("<h3> Use of typeof operator </h3>" + typeof ("hello"));

// declaration and  initialization of object using object literal
let object_name = {};
let fees = {};
fees.Rahul = 100; //assigning value to key Rahul
fees['swara'] = 200; //assigning value to swara Rahul
fees["super man"] = 300; //multiword key required double quote
fees.total = function () { return 100 + 200 + 300; };
document.write("<h3>declaration and  initialization of object using object literal </h3>")
document.write(fees['Rahul'] + "<br>")
document.write(fees.swara + "<br>")
document.write(fees["super man"] + "<br>")
document.write(fees.total() + "<br>")

let fee = {Rahul1:100, vira:200, total1:function(){return 100 + 200}};
document.write(fee.total1())

// declaration and  initialization of object using object constructor

// function to print in reverse order
function reverse(array){
    document.write("<h3>function to print in reverse order</h3>")
    for(var i=array.length-1;i>=0; i--){
        document.write(array[i] + "<br>")
    }
}
reverse([10,20,30,40,50])

// function to check identical element
function identical(array){
    document.write("<h3>function to check identical element</h3>")
    let first = array[0];
    for(var i=1; i<array.length; i++){
        if (array[i] != first)
        {
            return false;
        }
    }
            return true;
}

iden = identical([10,10,10,10,10])
document.write(iden)

// function to check max number
function maximum(array){
    document.write("<h3>function to check max number</h3>")
    let max = array[0]
    for (i=1;i<array.length;i++){
        if (array[i]>max){
            max = array[i];
        }

    }
    return max
}

maxi = maximum([10,40,50,80,90])
document.write(maxi)

// function to sum all number
function sum(array){
    document.write("<h3>function to sum all number</h3>")
    let sum = 0;
    for (num of array){
        sum = sum + num
    }
    return sum
}

sum1 = sum([10,20,30,40])
document.write(sum1)

// book management system using javascript
var books = []
var input = prompt('which operation you want to perform ? [add | list | delete | exit')
while (input != 'exit'){
    if (input == 'add')
    {
        addbook();
    }
    else if(input == 'list')
    {
        listbook();
    }
    else if(input == 'delete')
    {
        deletebook();
    }
    else{
        console.log('please choose valid option');
    }
    input = prompt('which operation you want to perform ? [add | list | delete | exit')
}
console.log('thanks for using our application')

function addbook()
{
var newbook = prompt('enter book name to add');
books.push(newbook);
}

function listbook(){
    console.log('list of available book:-');
    for (book of books){
        console.log(book);
    }
}

function deletebook(){
    var name = prompt('enter name of book to delete');
    index = books.indexOf(name);
    if(index == -1){
        console.log('specified book not avasilable');
    }
    else{
        books.splice(index, 1);
        console.log('specified book deleted');
    }

}

// factorial of n numbers

function factorial(n){
    if (n==1){
        return 1;
    }
    else
        return n * factorial(n - 1);
        }

factorial(5)

// string concatenation using " ` "
let name1 = "sarita";
let lastName = "borad";
let fullName = `I am ${name1} ${lastName}`;
console.log("last character of name:- " + name1[name1.length-1]);
console.log("full name:- " + fullName);
console.log("use of slicing:- " + name1.slice(0,4));
console.log("use of sub string (substr):- " + name1.substr(0,4));
console.log("use of sub string (substring):- " + name1.substring(0,4));
console.log("use of uppercase:- " + name1.toUpperCase());
console.log("use of lowercase:- " + name1.toLowerCase());

// logical operators
let na1 = "sarita";
let ag1 = 25;
if (na1 === "sarita" && ag1 === 25){
    console.log("you can play this game");
}else if(na1 === "smruti" || ag1 ===20){
    console.log("you can play this game");
}else {
    console.log("you can't play this game");
}

if (na1 !== 12){
    console.log("12 is not equal to number")
}

if (!(na1[0] == 's' || na1[0] == 'S')){
    console.log("your name do not starts with 's' ");
}else{
    console.log("your name starts with 's'");
}

// ternary operator - ? Ex:1
let age1 = 18;
age1 > 15 ? console.log("wecome to ternary operator") : console.log("not welcome to ternary");
let above15 = age1 > 15 ? true :false;
let above15 = age1 > 15 ? "yes" : "no";
console.log(above15);

// ternary operator - ? Ex:2
let temp = 12;
let message = (temp<=-90)?"what's your planet?":
              (temp<=0)?"it's very cold outside":
              (temp<=10)?"it's little cold outside":
              (temp<=16)?"it's fine wether":
              ("what?")
console.log(message)

// switch case statment
document.write(`<h3> switch case statment </h3>`);
let weekday = 2;
switch(weekday){
    case 1:
        document.write("monday");
        break;
    case 2:
        document.write("tuesday");
        break;
    case 3:
        document.write("wednesday");
        break;
    case 4:
        document.write("thursday");
        break;
    case 5:
        document.write("friday");
        break;
    case 6:
        document.write("saturday");
        break;
    case 7:
        document.write("sunday");
        break;
    default:
        document.write(" Inv alid day ");
}

// nullice coalescing operator
let myName = "sarita";
document.write("nullice coalescing operator:- " + (myName ?? "unknown"));

window.onload = function(){
    console.log('the document was loaded');
}

ev = document.getElementsByClassName("note")[0];
ev.addEventListener('click', function(){
    el = document.createElement('h3');
    el.innerText = "hey, it's magic, it's magic !!";
    ev.appendChild(el);
 })

ev1 = document.getElementsByClassName('note')[0];
ev1.addEventListener('mouseover', function(){
    console.log('mouse on element');
})

ev2 = document.getElementsByClassName('note')[0];
ev2.addEventListener('mouseout', function(){
    console.log('mouse out of element');
})

ev3 = document.getElementsByClassName('note')[0];
ev3.addEventListener('mouseup', function(){
    console.log('mouse up when clicked on element');
})

ev4 = document.getElementsByClassName('note')[0];
ev4.addEventListener('mousedown', function(){
    console.log('mouse down when clicked on element');
})

let preHtml = document.querySelectorAll('.note')[0].innerHTML;
ev = document.querySelectorAll('.note')[0];
ev.addEventListener('mouseup', function(){
    document.querySelectorAll('.note')[0].innerText = "hey, it's magic, it's magic !!";

})

sum1 = (a,b)=>{
    console.log('the sum is ', a+b);
}

setTimeout(sum1(12, 13),3000); //after 3ms it will call sum1 function

chan = ()=>{
    document.querySelectorAll('.note')[0].innerHTML = "it's magic, it's magic";
}

setTimeout(chan,3000); //after 3ms it will call function
clr = setInterval(chan, 3000); //function will run at every 3ms interval continously, it returns id
clearInterval(clr); // to stop setInterval we pass Id in clearInterval returned from setInterval

// clock project of javascript
let a1;
let date;
let time;
const option = {weekday:'long', year : 'numeric', month : 'long', day : 'numeric'};

setInterval(() => {
    a1 = new Date();
    date = a1.toLocaleDateString(undefined,option);
    time = a1.getHours() + ' : ' + a1.getMinutes() + ' : ' + a1.getSeconds();
    document.getElementById("time").innerHTML = 'time' + ' on ' + date + ' is '  + time;
}, 1000);

// TO - DO list functionality
function getAndUpdate() {
    title1 = document.getElementById('title').value;
    if (localStorage.getItem('title') == null) {
        arr = [];
        arr.push([title1]);
        localStorage.setItem('title', JSON.stringify(arr));
    }
    else {
        arr1 = localStorage.getItem('title');
        arr = JSON.parse(arr1);
        arr.push([title1]);
        localStorage.setItem('title', JSON.stringify(arr));
    }
    update();
}

function update() {
    if (localStorage.getItem('title') == null) {
        arr = [];
        localStorage.setItem('title', JSON.stringify(arr));
    }
    else {
        arr1 = localStorage.getItem('title');
        arr = JSON.parse(arr1);
    }

    // populate data
    let table = document.getElementById('data');
    let str = "";
    arr.forEach((element, index) => {
        str += `
        <tr>
        <th>${index + 1} </th>
            <td>${element[0]}</td>
            <td><button onclick = "deleted(${index})">Delete</button></td>
        </tr><br>`;
            });
    table.innerHTML = str;
}

ele = document.getElementById('add');
ele.addEventListener('click', getAndUpdate);
update();
function deleted(itemIndex) {
    arr1 = localStorage.getItem('title');
    arr = JSON.parse(arr1);
    arr.splice(itemIndex, 1);
    localStorage.setItem('title', JSON.stringify(arr));
    update()
// }

function clearstorage() {
    if (confirm('Do you really want to delete all ?')) {
        localStorage.clear();
    };

    update();
}

var a = {};
console.log(Object.getPrototypeOf(a));
console.log(Object.getPrototypeOf(a));

var b = new Array();
console.log(Object.getPrototypeOf(b)); //Array.prototype
console.log(Object.getPrototypeOf(Array.prototype)); //object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); //null

var b1 = new String();
console.log(Object.getPrototypeOf(b1)); //String.prototype
console.log(Object.getPrototypeOf(String.prototype)); //object.prototype
console.log(Object.getPrototypeOf(Object.prototype)); //null
console.log(Object.prototype);

function Mobile(){

};

console.log(Mobile);
console.log(Mobile.prototype);

var lg = new Mobile();
//verify
console.log(Mobile.prototype === lg.__proto__);
console.log(Mobile === lg.__proto__.constructor);
console.log(Mobile === Mobile.prototype.constructor);

// Prototype Inheritance

// Super class
function Mobile(){
    this.a =  10; //instance property
};

Mobile.prototype.z = 30; //prototype property
var samsang = new Mobile();

// Sub class
function Nokia(){
    Mobile.call(this); // calls Mobile class constructor to inherit all properties and methods.
    this.b = 20;
};

// prototype Inheritance
Nokia.prototype = Object.create(Mobile.prototype); // to access prototype property of parent class
Nokia.prototype.constructor = Nokia; // to reset constructor

var s = new Nokia();
console.log(s.a); // we can access variable a of Mobile class using object of this class.
console.log(s.z) //we can access prototype property of super(parent) class using prototype inheritance.

// One Super Class and Two sub class

// Super Class
var Mobile = function(){

};

// prototype method
Mobile.prototype.getmodel = function(){
    return 'the model is ' + this.model;
}

// Sub class
var Samsung = function(model,price){
    this.model = model;
    this.price = price;
};

// Sub class
var Lenovo = function(model){
    this.model = model;
};

// prototype Inheritance
Samsung.prototype = Object.create(Mobile.prototype); // linking of Samsung prototype with Mobile prototype
Samsung.prototype.constructor = Samsung; // Reset constructor of Samsung

Lenovo.prototype = Object.create(Mobile.prototype); // link Lenovo prototype with Mobile prototype
Lenovo.prototype.constructor = Lenovo; // Reset Constructor of Lenovo

// Function replacing above code -----> function for inheritance
function extend(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

extend(Samsung,Mobile);
extend(Lenovo,Mobile);

Samsung.prototype.getprice = function(){
    return this.price;
};

// Object creation of Sub class
var galaxy = new Samsung('Galaxy',3000);
console.log(galaxy.getprice());
console.log(galaxy.getmodel());

var phab2 = new Lenovo('Phab2');
console.log(phab2.getmodel());

// Example :- super class with a parameter

var Mobile = function(model){
    this.model = model;
};

Mobile.prototype.getmodel = function(){
    return this.model;
}

var Samsung = function(model, price){
    Mobile.call(this, model)
    this.price = price;
};

//Inheritance

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

var galaxy = new Samsung('Galaxy',3000);
console.log(galaxy.getmodel()); // it will return undefined because we didn't pass any value for model

// method overriding
// Function for inheritance:-
function extend(child,parent){
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

// Super class

var Mobile = function(){

};

Mobile.prototype.show = function(){
    return "super class show method";
};

// Sub class

var Samsung = function(){

};
Samsung.prototype.show = function(){
    return "Sub class show method";
}

extend(Samsung, Mobile);
var galaxy = new Samsung();
console.log(galaxy.show());

// Multilevel Inheritance in Javascript

// Super class :--

var Mobile = function(){
    this.a = 10;
}
Mobile.prototype.z = 30;

// Sub class :--

var Samsung = function(){
    `It calls super class constructor and initialize property. without this you can not access Super
    class property using sub class object`
    Mobile.call(this);
    this.b = 20;
}

var Galaxy = function(){
    Samsung.call(this);
    this.c = 100;
}

// Prototype Inheritance

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;

Galaxy.prototype = Object.create(Samsung.prototype);
Galaxy.prototype.constructor = Galaxy;

var m = new Mobile();
var s = new Samsung();
var g = new Galaxy();

console.log('Galaxy Object can access');
console.log('Mobile A: ' + g.a );
console.log('Samsung B: ' + g.b );
console.log('Mobile prototype z: ' + g.z);
console.log('Galaxy C: ' + g.c);

console.log('Samsung Object can access');
console.log('Mobile A: ' + s.a);
console.log('Mobile prototype: ' + s.z);

// this will return undefined
console.log('Samsung B: ' + s.b);
console.log('Galaxy c: ' + s.c)

console.log('Mobile object can access');
console.log('Mobile A: ', m.a);
console.log('Mobile prototype object z: ' + m.z);

// this will return undefined
console.log('Samsung B: ' + m.b);
console.log('Galaxy c: ' + m.c);

var eating = {
    eat : function(){
        return ' I can eat';
    }
};

var walking = {
    walk : function(){
        return ' I can walk';
    }
};

var talking = {
    talk : function(){
        return 'I can talk';
    }
};

var Riddhi = Object.assign({},walking, eating, talking);
console.log(Riddhi.walk());
console.log(Riddhi.talk());
console.log(Riddhi.eat());

class Mobile {
    constructor(){
        //Instance member
            this.a = 12;
            this.show = function(){
                return "Instance member";
            };
    }
    // prototype Member
    display(){
        return "Prototype member";
    };
};

var nokia = new Mobile();
console.log(nokia.a);
console.log(nokia.show());
console.log(nokia.display());

class Mobile {
    display(){
        return "this is prototype member and we are using default constructor";
    };
};

var nokia = new Mobile();
console.log(nokia.display());

class Mobile {
    constructor(model){
        this.model = model;
    };
    display(){
        return this.model + " Price is 3000";
    };
};

var nokia = new Mobile('Galaxy');
console.log(nokia.display());

// unnamed class expression

var Mobile = class {
    constructor(model){
        this.model = model;
    };
    display(){
        return this.model + " Price is 3000";
    };
};

var nokia = new Mobile('Galaxy');
console.log(nokia.display());

// Super Method
class Father{
    constructor(money){
        this.Fmoney = money;
    }
    showFMoney(){
        return this.Fmoney + " Rs." + " Father's Money";
    };
};

class Child extends Father{
    constructor(money){
        super(money);
    };
    showCMoney(){
        return "Child money";
    };
};

class GrandsSon extends Child{
    showGMoney(){
        return "GrandSon Money";
    };
};

var suman = new Child(10000);
console.log(suman.showFMoney());
console.log(suman.showCMoney());

var swati = new GrandsSon();
console.log(swati.showFMoney());
console.log(swati.showCMoney());
console.log(swati.showGMoney());

// Method Overriding in javascript

class Father{
    show(){
        return "super class show method";
    };
};

class Son extends Father{
    show(){
        return "Sub class method";
    };
};

var s = new Son();
console.log(s.show());

class Mobile{
    static disp(){
        return "this is static method";
    };
};

console.log(Mobile.disp());

stu = ["sarita", "smruti", "sweety", "Rahul"];
stu.forEach(element => {
    console.log(element);
});

stu.forEach(function(element, index, arr){
    console.log(index + " " + element);
    console.log(index);
    console.log(arr);
});

// for of loop
stu = ["sarita", "smruti", "sweety", "Rahul"];
for(let name of stu){
    console.log(name); //name is variable here, it has element value
};

// Taking input from user in javascript
no = prompt('enter the no of name - ');
stu = [];
for(let i = 0; i <= no; i++ ){
    stu[i] = prompt("enter the name :- ");
}
console.log(stu);

// MultiDimentional Array
var data = [
    ["Rahul", "Dell", 16],
    ["Smruti", "lenovo", 23],
    ["HP", "Zed", 45] ];

for(let i=0; i< 3; i++){
    for(let j=0; j< 3; j++){
        document.write(data[i][j] + " ");
    };
    document.write("<br>");
};

var rows = 2;
var cols = 3;
var geek = new Array(rows);
for(var i = 0; i < rows; i++){
    geek[i] = new Array(cols); // it creates empty array in array ---> [[], [], [] ... ]
}
for(var i = 0; i< rows; i++){
    for(var j = 0; j< cols; j++){
        document.write(geek[i][j] + " ");
        //document.write(i +  " " + j + "|");
    }
    document.write("<br>");
};

// MultiDimetional Array
var rows = 3;
var cols = 3;
var stu = new Array(3);
for(let i = 0; i< rows; i++){
    stu[i] = new Array(cols);
};
for(var i = 0; i< rows; i++){
    for(var j = 0; j< cols; j++){
        stu[i][j] = prompt('enter element in array');
        document.write(stu[i][j] + " ");
    };
    document.write("<br>")
};

// concat() method in javascript
var geek = ["Rahul", "Sonam", "Sumit"];
var new_geek = geek.concat("Raj", "Ravi"); // adding value in old array
console.log(new_geek);

var geek1 = ["Rahul", "Sonam", "Sumit"];
var geek2 = ["Riya", "Rehan"];
var geek3 = ["Priya", "Payal"];
var new_geek = geek1.concat(geek2);
console.log(new_geek);

var geek = ["Riya", "Rehan", "sweety"];
jn = geek.join(' ');
console.log(jn);

// to reverse an element of array
var geek = ["Riya", "Rehan", "sweety"];
geek.reverse(); //reveses element of an array
console.log(geek); //["sweety", "Rehan", "Riya"]

var geek = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
var new_arr = geek.slice(1, 3);
console.log(new_arr); // ["Sonam", "Sumit"]
var new_arr = geek.slice(-3, -1);
console.log(new_arr);  // ["Sumit", "Ruhi"]
var new_arr = geek.slice(undefined, 4);
console.log(new_arr);  // ["Rahul", "Sonam", "Sumit", "Ruhi"] starts from 0

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
console.log(geek1.toString()); //Rahul,Sonam,Sumit,Ruhi,Reva

// Array.isArray() method
var result = Array.isArray(["Rohan", "Raj"]); // true
console.log(result);
var result = Array.isArray("a string"); // false
console.log(result);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];

geek1.splice(2); // it will remove all element start from index 2
console.log(geek1);

geek1.splice(2, 1); // it will remove 1 element start from index 2
console.log(geek1);

geek1.splice(2, 0, "swati"); // it will not remove anything but insert "swati" at position 2
console.log(geek1);

geek1.splice(2, 0, "swati", "Ravina"); // it will not remove anything but start inserting from index 2
console.log(geek1);

geek1.splice(2, 3, "swati", "Ravina"); // it will remove 3 elements from index 2 and then insert from 2
console.log(geek1); //

var position = geek1.indexOf("Rohit", 2); //search "Rohit" start searching from index 2
console.log(position); // -1

var position = geek1.indexOf("Rahul"); //search "Rohit" start searching from index 2
console.log(position);

var position = geek1.indexOf("Ruhi",2); //search "Rohit" start searching from index 2
console.log(position);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
geek1.fill('Don'); // all elements fill with Don
geek1.fill('Don', 1, 3); // from index 1 to 3 fill with Don (3 not included)
console.log(geek1);

var new_array = new Array(3).fill("Don");
console.log(new_array);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// geek1.unshift("Raja", "Riya");
var geek_length = geek1.unshift("Raja", "Riya"); // it will add element and return length
console.log(geek_length);
console.log(geek1);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
var arr_len = geek1.push("Raja", "Riya");
console.log(arr_len); // it will return length of array and add element at the end
console.log(geek1);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
var geek_length = geek1.shift(); // it will remove first element of an array
console.log(geek_length);

var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
var removed = geek1.pop(); // it will remove last element of an array
console.log(removed);

// calling function using back tick (template string)
function myfun(say){
    return say;
}

console.log(`${myfun("hey guys, I want to welcome you all in this learning world")}`);
var name = prompt("Enter your name :- ");
var say = prompt("say something!! ");
console.log(`${name} said: ${say}`);

var str = "hey, I am here";
console.log(str.length); // comma, space All included

var str = "hey, I am here";
console.log(str.charAt(10)); // it will return char at 10th index of string

// var str = "hey, I am here";
console.log(str.charCodeAt(10)); // it will return char at 10th index of string

var str = "hey, I am here";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

var str = "             hey, I am here            ";
console.log(str.trim());

var str = "hey, I am here";
console.log(str.replace("here", "everywhere"));

var str = "hey, I am here";
console.log(str.split(" "));

var str = "hey, I am here";
console.log(str.indexOf("e",11)); // it will start searching from 11th index
console.log(str.indexOf("sweety")); // it will return -1

var str = "hey, I am here";
console.log(str.search("e")); // it will return index of e
console.log(str.search("sweety")); // it will return -1

var str = "we are on a mission to be something";
console.log(str.slice(8, 20)); // 20 mot included

var str = "we are on a mission to be something";
console.log(str.substring(8, 20));

var str = "we are on a mission to be something";
console.log(str.substr(8, 12));

console.log(20/"sar"); // not a legal number
console.log(-5/0);
console.log(5/0);

var a = 10;
console.log(a.toString(2));
console.log(a.toString(8));
console.log(a.toString(16));

var a = 58975.98745;
console.log(a.toExponential());
console.log(a.toExponential(2));
console.log(a.toExponential(4));

var a = 19.65823;
console.log(a.toPrecision());
console.log(a.toPrecision(2));
console.log(a.toPrecision(4));
console.log(a.toPrecision(8));

console.log(Number.isSafeInteger());
console.log(Number.isSafeInteger(100));
console.log(Number.isSafeInteger(-100));
console.log(Number.isSafeInteger(8.5));
console.log(Number.isSafeInteger(8494913149118494619484444444444444444444444478));
console.log(Number.isSafeInteger("100"));

console.log(Number(true));
console.log(Number(false));
console.log(Number("100"));
console.log(Number(100/"hello"));
console.log(Date());

console.log(parseFloat("10"));
console.log(parseFloat("12.00"));
console.log(parseFloat("15.45"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("    10    "));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));
console.log(parseFloat("010"));
console.log(parseFloat("12",8));
console.log(parseFloat("0x12"));
console.log(parseFloat("10",16));

console.log(Math.min(50, 2, 20, 30, 100));
console.log(Math.max(50, 2, 20, 30, 100));

console.log(Math.floor(2.1));
console.log(Math.floor(6.65));
console.log(Math.floor(0.4));
console.log(Math.floor(0.6));
console.log(Math.floor(-2.1));
console.log(Math.floor(-6.65));

console.log(Math.round(2.1));
console.log(Math.round(6.4));
console.log(Math.round(6.5));
console.log(Math.round(6.6));
console.log(Math.round(0.4));
console.log(Math.round(0.5));
console.log(Math.round(-2.1));
console.log(Math.round(-6.4));
console.log(Math.round(-6.5));
console.log(Math.round(-6.6));

console.log(Math.random());
console.log(Math.random()*10+1);

var x = Math.floor((Math.random()*1000+1));
console.log(x);

var date = new Date();
console.log(date);

var date1 = new Date(1530867166586);  // we can get date from millisecond
var date2 = new Date(8640000);
date = new Date(2018,12,4,4,10,16,0);

console.log(date);

var date = new Date("March 25 2018");
var date = new Date("2018-06");
var date = new Date("06-25-2018");
console.log(date);

// var date = new Date();
console.log(date);

date.setHours(22);
console.log(date);

date.setMinutes(56);
console.log(date);

date.setSeconds(46);
console.log(date);

date.setDate(26);
console.log(date);

date.setFullYear(2022);
console.log(date);

date.setMonth(11);
console.log(date);

var date = new Date();
console.log(date);
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getMonth());

var date = new Date("March 29 2021");
month = date.getMonth();
day = date.getDay();

console.log(getMonthName(month));
console.log(getDayName(day));

function getMonthName(month){
    AllMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
    "October", "November", "December"];
    return AllMonth[month];
}

function getDayName(day){
    AllDay = ["sunday", "monday", "tuesday","wednusday", "thrusday", "friday", "saturday"];
    return AllDay[day];
}

var date = new Date();
console.log(formatDate(date));
console.log(formatTime(date));

function formatDate(date){
    var date1 = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    return date1 + "-" + month + "-" + year;
}

function formatTime(time){
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    return hour + ":" + minute + ":" + second;
}

var date = new Date();
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.toGMTString());

var len = document.getElementsByTagName("h3").length;
console.log(len);

for(let i=0; i<len; i++){
    var result = document.getElementsByTagName("h3")[i];
    console.log(result);
}

console.log(document.nodeName);
console.log(document.nodeValue);
console.log(document.nodeType);

element = document.getElementById("add");

console.log(element.nodeName);
console.log(element.nodeValue);
console.log(element.nodeType);

txt = document.getElementById("h14");

console.log(txt.firstChild.nodeName);
console.log(txt.firstChild.nodeValue);
console.log(txt.firstChild.nodeType);

txt = document.getElementById("h14");

console.log(txt.firstChild.nextSibling.nodeName);
console.log(txt.firstChild.nextSibling.nodeValue);
console.log(txt.firstChild.nextSibling.nodeType);

var txt = document.getElementById("h14").firstChild.nodeValue;
console.log(txt);

var txt = document.getElementById("h14").firstChild.nodeValue = "This is Important text";
console.log(txt);

var result = document.getElementById("add");
var len = result.attributes.length;

console.log(result.attributes.length);
console.log(result.attributes[0].nodeName);
console.log(result.attributes[0].nodeValue);

for(let i=0; i<len; i++){
    console.log(result.attributes[i].nodeName);
    console.log(result.attributes[i].nodeValue);
}

var elem = document.getElementById("h14");
console.log(elem.parentNode);
console.log(elem.parentElement);

var elem = document.getElementById("elem");
console.log(elem);
console.log(elem.parentNode);
// Output :- it returns #document because parent of html element is document

console.log(elem.parentElement);
// Output :- it will return null because parent of html is document and it is not an element

var elem = document.getElementById("add");
var elem = document.getElementById("myid");

len = elem.children.length

console.log(elem.childNodes);
console.log(elem.childNodes.length);
// Output :- it returns all child elements of element including whitespace, enter and all

console.log(elem.children);
console.log(elem.children.length);
// Output :- it will return child element of element but no whitespace, enter, comment node etc..

for(let i=0; i< len; i++){
    console.log(elem.children[i]);
}

var elem = document.getElementById("myid");
console.log(elem.firstChild);
console.log(elem.firstElementChild);
console.log(elem.lastChild.previousSibling);
console.log(elem.lastChild.previousElementSibling);

console.log(elem.firstChild.nextSibling);
console.log(elem.firstChild.nextElementSibling);
console.log(elem.firstElementChild.nextElementSibling);

var newElem = document.createElement("h2");
console.log(newElem);

var newTxtNode = document.createTextNode("text node created by javascript");
console.log(newTxtNode);

var newComment = document.createComment("we created a comment");
console.log(newComment);
// Output :- we created a comment

var df = document.createDocumentFragment(); // creates empty DocumentFragment
console.log(df);

var parent = document.getElementById("myid");
var child = document.getElementById("add");
console.log(parent);
parent.appendChild(child);
console.log(parent);
console.log(child);

var nenode = document.createElement("h3");
var parent = document.getElementById("add");
parent.appendChild(nenode);
console.log(parent)

var parent = document.getElementById("add");
parent.appendChild(document.createElement("h3"));
console.log(parent)

var parent = document.getElementById("add");
// creating new text node
var txtNode = document.createTextNode(" / add your future activity to list");
parent.appendChild(txtNode);
console.log(parent);

var parent = document.getElementById("add");
// creating a comment node
var commentNode = document.createComment(" adding to do iteams in list");
parent.appendChild(commentNode);
console.log(parent);

var nENode = document.createElement("h2");

// creating text node
var txtNode = document.createTextNode("here is text node created");

// creating comment node
var cmtNode = document.createComment("the coment text for element");

// Append text node to element node
nENode.appendChild(txtNode);
console.log(nENode);

// Append element to an existing element
var parent = document.getElementById("add");
parent.appendChild(nENode);
parent.appendChild(cmtNode);
console.log(parent);

var df = document.createDocumentFragment(); // create empty DocumentFragment

var elem1 = document.createElement("h3");  // creating h3 element
var elem2 = document.createElement("p");   // creating p element

elem1.textContent = "here is h3 element";  // adding text content to element
elem2.textContent = "here is p element";   // adding text content to element

df.appendChild(elem1);  // adding elements to DocumentFragment
df.appendChild(elem2);  // adding elements to DocumentFragment

var parent = document.getElementById("add");

parent.appendChild(df);  // moving DocumentFragment elements to element of document
console.log(parent);
console.log(df);

var elem = document.getElementById("add");

elem.appendChild(document.createTextNode(" hello "));
elem.appendChild(document.createTextNode(" I am "));
elem.appendChild(document.createTextNode(" here to learn JAVASCRIPT "));
console.log(elem.childNodes);
elem.normalize();
console.log(elem.childNodes);

elem = document.getElementById("rad");
console.log(elem);
elem1 = document.getElementById("myli");
console.log(elem1);

elem2 = document.createElement("li");
elem2.textContent = "for loop"

elem.insertBefore(elem2, elem1)
console.log(elem);

elem = document.getElementById("rad");   // accessing element
elem1 = document.getElementById("myli"); // accessing element

elem2 = document.getElementById("el"); // creating an element

elem.insertBefore(elem2, elem1); // inserting new element(elem2) before referance element(elem1)
console.log(elem);

parentNode = document.getElementById("rad");   // accessing element

newNode = document.getElementById("el"); // Existing element

parentNode.insertBefore(newNode, null); // inserting Existing element(newNode) before last element
console.log(parentNode);

parentNode = document.getElementById("rad");   // accessing element
refNode = document.getElementById("myli"); // accessing element

newNode = document.createTextNode("For loop"); // new text nodeValue

parentNode.insertBefore(newNode, refNode); // inserting new text node before reference node
console.log(parentNode);

var elem = document.getElementById("rad");
var newElem = document.createElement("span");
var tarElem = document.getElementById("myli");

tarElem.insertAdjacentElement("beforebegin", newElem);
console.log(elem);

tarElem.insertAdjacentElement("afterbegin", newElem);
console.log(elem);

tarElem.insertAdjacentElement("afterbegin", newElem);
console.log(elem);

tarElem.insertAdjacentElement("afterend", newElem);
console.log(elem);

var elem = document.getElementById("rad");

var duplicateNode = elem.cloneNode(true);
console.log(duplicateNode); // it returns all element including child

var duplicateNode = elem.cloneNode(false);
console.log(duplicateNode); // it only returns element

var parentNode = document.getElementById("rad");
var targetNode = document.getElementById("myli");
console.log(parentNode.firstElementChild.nextElementSibling);
var delNode = parentNode.removeChild(parentNode.firstElementChild);
var delNode = parentNode.removeChild(parentNode.firstElementChild.nextElementSibling);

var delNode = parentNode.removeChild(targetNode);
console.log(delNode);
console.log(parentNode);

var elem = document.getElementById("rad");
var newChild = document.createElement("li");
newChild.textContent = "while loop is infinite when true";
oldChild = document.getElementById("myli");

var replacedNode = elem.replaceChild(newChild, oldChild);
console.log(replacedNode);
console.log(elem)

var parentNode = document.getElementById("rad");
oldChild = document.getElementById("myli");
var existChild = parentNode.firstElementChild;

var replacedNode = parentNode.replaceChild(existChild, oldChild);
console.log(replacedNode);
console.log(parentNode);
console.log(existChild);

var elem = document.getElementById("add");
console.log(elem.firstChild);
console.log(elem.firstChild.length);

var elem = document.getElementById("add");
console.log(elem.firstChild.data);
var data = elem.firstChild.data;
console.log(data);

elem.firstChild.data = "hey, where are you ?";
console.log(elem.firstChild.data)

var elem = document.getElementById("add");
txtNode = elem.firstChild;
txtNode.appendData(" your daily to do activity");
console.log(elem.firstChild);

var elem = document.getElementById("add");
txtNode = elem.firstChild;
txtNode.deleteData(0,4);
console.log(elem.firstChild);

var elem = document.getElementById("add");
txtNode = elem.firstChild;
txtNode.insertData(0, "daily to do activity ");;
console.log(elem.firstChild)

var elem = document.getElementById("add");
var sub = elem.firstChild.substringData(0,3);
console.log(sub);

var elem = document.getElementById("add");
var rightSide = elem.firstChild.splitText(3); // spilt text will be in right side node
console.log(elem.childNodes);
console.log(rightSide);

var elem = document.getElementById("add");
elem.setAttribute('class','myclass');
console.log(elem.getAttribute('class'));

var elem = document.getElementById("add");
elem.removeAttribute('class');
console.log(elem.attributes);

var attr = elem.hasAttribute('class');
console.log(attr);

var elem = document.getElementById('add');
var elementClass = elem.classList;
console.log(elementClass);

var elem = document.getElementById('add');
var elementClass = elem.classList;
console.log(elementClass); // it returns DOMTokenList which has element's class collection
// Output :-

console.log(elementClass[0]);
// Output :-

console.log(elementClass.length);
// Output :-

console.log(elementClass.value);
// Output :-

console.log(elementClass.item(0));
// Output :-

elementClass.add("myclass");
console.log(elementClass);
// Output :-

elementClass.add("myclass2","myclass1");
console.log(elementClass);
// Output :-

elementClass.remove("myclass");
console.log(elementClass);
// Output :-

elementClass.remove("myclass2","myclass1");
console.log(elementClass);
// Output :-

elementClass.replace("myclass2","myclass1");
console.log(elementClass);
// Output :-

console.log(elementClass.contains("myclass2"));
console.log(elementClass);
// Output :-

elementClass.toggle("myclass2");
    console.log(elementClass);
// Output :-

elementClass.toggle("myclass2");
    console.log(elementClass);

var txt = document.getElementById('mytext');

function changeColorOrange(){
    txt.style.backgroundColor = 'orange';
}
function changeColorWhite(){
    txt.style.backgroundColor = 'white';
}

txt.addEventListener('mouseover', changeColorOrange, false);
txt.addEventListener('mouseout', changeColorWhite, false);

var txt = document.getElementById('mytxt');

function focusEvent(e){
    txt.style.backgroundColor = 'orange';
}

txt.addEventListener('focus', focusEvent, false);

function blurEvent(e){
    txt.style.backgroundColor = 'white';
}
txt.addEventListener('focus', focusEvent, false);
txt.addEventListener('blur', blurEvent, false);
txt.addEventListener('focusin', focusEvent, false);
txt.addEventListener('focusout', blurEvent, false);

var txt = document.getElementById('mytxt');

function keyEvent(e){
    console.log(e.type + ' ' + e.keyCode + ' ' + String.fromCharCode(e.keyCode));
}

txt.addEventListener('keydown', keyEvent, false);
txt.addEventListener('keypress', keyEvent, false);
txt.addEventListener('keyup', keyEvent, false);

var txt = document.getElementById('mytxt');

function show(e){
    console.log(e.type + ' ' + e.data);
}

txt.addEventListener('textInput', show, false);

var newW = window.open();
console.log(newW)

function createWindow(){
    window.open('https://www.google.com','_blank','height=400,width=600,scrollbars=no');
    window.open('https://www.google.com','_blank','height=400,width=800');
    window.open('https://www.google.com','_self');
    window.open('https://www.google.com');
    window.open();
}

b1 = document.getElementById('btn');
b1.addEventListener('click',createWindow, false);

var newWindow;
function opnWindow(){
    newWindow = window.open('https://www.google.com','','height=400,width=600');
}
function clWindow(){
    newWindow.close();
}

bn1 = document.getElementById('mybn1');
bn2 = document.getElementById('mybn2');

bn1.addEventListener('click', opnWindow, false);
bn2.addEventListener('click', clWindow, false);

function printDoc(){
    window.print();
}

var bn3 = document.getElementById('mybn3');
bn3.addEventListener('click', printDoc, false);

var newWindow;
function openWin(){
    newWindow = window.open('','_blank','width=600,height=400');
}
function focusWin(){
    newWindow.focus();
}
function blurWin(){
    newWindow.blur();
}
bn1 = document.getElementById('openbtn').addEventListener('click', openWin, false);
bn2 = document.getElementById('focusbtn').addEventListener('click', focusWin, false);
bn3 = document.getElementById('blurbtn').addEventListener('click', blurWin, false);

var newWindow;
function opnWindow(){
    newWindow = window.open('','newWindow','height=3 00,width=400');
}

function mvWin(){
    newWindow.moveBy(200,200);
    newWindow.focus();
}

function mvlWin(){
    newWindow.moveBy(-200,-200);
    newWindow.focus();
}
document.getElementById('opn').addEventListener('click', opnWindow, false);
document.getElementById('mwr').addEventListener('click', mvWin, false);
document.getElementById('mwl').addEventListener('click', mvlWin, false);

var newWindow;
function opnWindow(){
    newWindow = window.open('','newWindow','height=3 00,width=400');
}

function mvWin(){
    newWindow.moveTo(200,200);
    newWindow.focus();
}

document.getElementById('opbtn').addEventListener('click', opnWindow, false);
document.getElementById('mw').addEventListener('click', mvWin, false);

var newWindow;
function opnWindow(){
    newWindow = window.open('','_blank','height=300,width=400');
}

function rsizeWin(){
    newWindow.resizeBy(200,200);
    newWindow.focus();
}

document.getElementById('obtn').addEventListener('click', opnWindow, false);
document.getElementById('rsize').addEventListener('click', rsizeWin, false);

var newWindow;
function opnWindow(){
    newWindow = window.open('','_blank','height=300,width=400');
}

function rsizeWin(){
    newWindow.resizeTo(200,200);
    newWindow.focus();
}

document.getElementById('opwbtn').addEventListener('click', opnWindow, false);
document.getElementById('r1size').addEventListener('click', rsizeWin, false);

function scrollTWin(){
    window.scrollBy({top: -20, behavior: 'smooth'})
    window.scrollBy({top: -20, behavior: 'instant'})
    window.scrollBy(0, 20);
}

function scrollDWin(){
    window.scrollBy(0, -20);
}

function scrollLWin(){
    window.scrollBy(20, 0);
}

function scrollRWin(){
    window.scrollBy(-20, 0);
}

document.getElementById('mybn1').addEventListener('click', scrollTWin);
document.getElementById('myb2').addEventListener('click', scrollDWin);
document.getElementById('myb3').addEventListener('click', scrollLWin);
document.getElementById('myb4').addEventListener('click', scrollRWin);

function scrollTWin(){
    window.scrollBy({top: -20, behavior: 'smooth'})
    window.scrollBy({top: -20, behavior: 'instant'})
    window.scrollTo(0, 0);
}

function scrollDWin(){
    window.scrollTo(0, 20);
}

function scrollLWin(){
    window.scrollTo(-20, 0);
}

function scrollRWin(){
    window.scrollTo(20, 0);
}

document.getElementById('mybtn1').addEventListener('click', scrollTWin);
document.getElementById('mybtn2').addEventListener('click', scrollDWin);
document.getElementById('mybtn3').addEventListener('click', scrollLWin);
document.getElementById('mybtn4').addEventListener('click', scrollRWin);

function changeColor(){
    document.getElementById('setT').style.backgroundColor = 'yellow';
}

setTimeout(changeColor, 5000);

setTimeout(() => {

}, timeout);


var timeoutID = setTimeout(() => {
    document.getElementById('setT').style.backgroundColor = 'blue';
    }, 5000);

function clrTime(){
    clearTimeout(timeoutID);
}

document.getElementById('bt1').addEventListener('click', clrTime);

setInterval(function(){
    document.getElementById('setI').textContent += 'hello';
}, 2000);

intervalID = setInterval(function(){
    document.getElementById('setI').textContent += ' hello';
 }, 2000);

 function clrInt(){
     clearInterval(intervalID);
 }

 document.getElementById('clI').addEventListener('click', clrInt);

function win(){
    document.getElementById('setI').textContent = 'hello window';
}

window.addEventListener('load', win);

var form1 = document.forms[0];
var form2 = document.forms[1];
console.log(form1); // It will returns form1
console.log(form2); // It will returns form2

// with name attribute using square bracket

var form1 = document.forms['form1'];
var form2 = document.forms['form2'];
console.log(form1); // It will returns form1
console.log(form2); // It will returns form2

// with name attribute using dot

var form1 = document.form1;
var form2 = document.form2;
console.log(form1); // It will returns form1
console.log(form2); // It will returns form2

// getElementById method

var form1  = document.getElementById('fm1');
var form2  = document.getElementById('fm2');
console.log(form1);
console.log(form2);

<strong>Accessing form fields in JAVASCRIPT</strong>

// - If form field has unique Id then we can access it using getElementById method.  
// - elements[] - It contains collection of elements.

// Syntax :- document.form_name.elements[index_number];
document.form_name.elements['name_attribute_value'];
document.form_name.name_attribute_value;
document.form_name.ID_attribute_value;

// - getElementsByName('field_name') - this method is also used to access form field.

var usrname = document.getElementById('usr1');
console.log(usrname.type);
console.log(usrname.name);
console.log(usrname.id);

//  with element [indexNumber]
var username = document.form1.elements[0];
console.log(username);
console.log(username.name);
console.log(username.type);

// with name attribute value
var username = document.form1.elements['username1'];
username.value = 'Rohit';
console.log(username);
console.log(username.value);

//  with name attribute
var username = document.form1.username1;

//  with name attribute value
var username = document.form1.elements['username1'];

//  with id attribute
var username = document.form1.usr1;

function validateData(){
    var ptrn = /^([^0-9\W]*)$/;
    if(ptrn.test(document.myform.usr.value)){
        document.getElementById('u1').textContent = 'User is valid';
        document.getElementById('u1').style.color = 'green';
    }else{
        document.getElementById('u1').textContent = 'User is Invalid, enter only alphabate';
        document.getElementById('u1').style.color = 'red';
    }
}
document.myform.usr.addEventListener('keyup', validateData);

document.cookie = 'username=sarita';

document.cookie = 'username=sarita; max-age=' + 60*60*24*10;

document.cookie = 'username=sarita; expires=Monday, 3-Sep-2021 09:00:00 UTC';

document.cookie = 'username = sarita';
document.cookie = 'userId = sarita';

function setCookie(){
    document.cookie = 'name=' + document.myfm.name.value;
    document.cookie = 'email=' + document.myfm.email.value;
    document.cookie = 'language=' + document.myfm.lang.value;
}

//  name=rahul; email=rahul@gmail.com; language=hindi

function getCookie(){
    var cookieArray = document.cookie.split(';');
    for(i=0; i<cookieArray.length; i++){
        // console.log(cookieArray[i]);
        var valueArray = cookieArray[i].split('=');
        console.log(valueArray);
        if(valueArray[0].trim()=='name'){
            document.myfm.name.value = valueArray[1];
        }
        else if(valueArray[0].trim() == 'email'){
            document.myfm.email.value = valueArray[1];
        }
        else if(valueArray[0].trim() == 'language'){
            document.myfm.lang.value = valueArray[1];
        }
    }
}

window.localStorage.setItem('username','sarita');
window.localStorage.setItem('email','s@gmail.com');
console.log(localStorage);
console.log(localStorage.length);

console.log(localStorage.getItem('username'));
console.log(localStorage.key(0));

console.log(localStorage.removeItem('username'));
localStorage.clear();
console.log(localStorage);

sessionStorage.setItem('username','sarita');
console.log(sessionStorage);

console.log(sessionStorage.length);

console.log(sessionStorage.getItem('username'));

console.log(sessionStorage.key(0));

sessionStorage.removeItem('username');
console.log(sessionStorage);

try{
    write();
    console.log('skipped code');
}
catch(e){
    console.log('message: ' + e.message );
    console.log('name: ' + e.name );
    console.log('stack: ' + e.stack );
}

try{
    add();
}
catch(e){
    console.log('your function is not defined');
}

try{
    add();
}
catch(e){
    console.log('your function is not defined');
}
finally{
    console.log('this block of code is executed whether exception or not');
}

function getRectArea(w,h){
    if (isNaN(w) || isNaN(h)){
        throw 'Parameter is not a number';
    }
}

try{
    getRectArea(10,20);
}
catch(e){
    console.log(e);
}
console.log('I have no idea what is happening above ');

console.dir(navigator);
console.log(navigator.userAgent);
console.log(navigator.cookieEnabled)

if(navigator.cookieEnabled){
    console.log('cookie is enabled');
}else{
    console.log('cookie is disabled');
}

function geeky(callback){
    var a = 10;
    callback();
}
geeky(() => {
    console.log('I am show function ');
    console.log('we are using arrow function');
});

var arr = [10,20,30,40,50];
var newArr = arr.map(function(value, index){
    value++;
    console.log(value);
    // console.log(index);
})

var arr = [
    {price:'100', product:'Mobile'},
    {price:'300', product:'Mic'},
    {price:'200', product:'pc'}
    ];
    var newArr = arr.map(value => value.price); // return value.price
    console.log(newArr);

var a = ['java', 'six', 'geeky'];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);

var [courseName, duration, tutor] = a;
console.log(courseName);
console.log(duration);
console.log(tutor);

var [courseName,,tutor] = a;
console.log(courseName);
console.log(tutor);

var arr = [10, 20, 30];

function show(v1, v2, v3){
    console.log(v1);
    console.log(v2);
    console.log(v3);
}

show(arr);

var arr = [10,20,30];
function show([value1, value2, value3]){
    console.log(value1); // 10
    console.log(value2); // 20
    console.log(value3); // 30
}
show(arr);

var arr = [10,20,30,40,50,60];
function show([value1, value2, ...rest]){
    console.log(value1); // 10
    console.log(value2); // 20
    console.log(rest); // 30
}
show(arr);

var arr = [10, 20, 30];

function show(z){
    return z;
}

var x = show(arr);
[v1, v2, v3] = x;
console.log(v1);
console.log(v2);
console.log(v3);

var a = [10,20,30,['rahul','riya']];

var [v1, v2, v3, [stu,stu1]] = a;
console.log(v1);
console.log(v2);
console.log(v3);
console.log(stu);
console.log(stu1);

var course = {
    name:'java',
    duration:'6',
    tutor:'sarita'
};

var {name, duration, tutor} = course;
console.log(name);
console.log(duration);
console.log(tutor);

var course = {
    name:'java',
    duration:'6',
    tutor:'sarita'
};

function show(z){
    return z
}

var {name,tutor} = show(course);
console.log(name);
console.log(tutor);

var course = {
    name:'java',
    duration:'6',
    tutor:'sarita',
    student:{
        stu1:'Rahul',
        stu2:'sarita'
    }
};

var course = {
    name:'java',
    duration:'6',
    tutor:'sarita',
    student:{
        stu1:'Rahul',
        stu2:'sarita'
    }
};

var {name,duration,tutor,student:{stu1,stu2}} = course;
console.log(name);
console.log(duration);
console.log(tutor);
console.log(stu1);
console.log(stu2);

console.log('start');

function getName(name, callback){
    setTimeout(()=>{
        console.log("Inside set time out");
        callback(name);
    },2000 );
};

getName('sarita', (nm)=>{console.log(nm)});
console.log('end');

console.log('start');

function getName(name, callback){
    setTimeout(()=>{
        console.log("Inside set time out");
        callback(name);
    },2000 );
};

function getHobbies(name, callback){
    setTimeout(()=> {
        console.log('Inside hobby');
        callback(['cricket','dance','reading']);
    },2000);
};
getName('sarita', (nm)=>{
    console.log(nm);
    getHobbies(nm, (hobby)=>{console.log(hobby)});
});
console.log('end');

const promiseObj = new Promise((resolve, reject)=>{
    let req = true;
    if (req==true){
        resolve('Request success');
    }else{
        reject('Request Rejected');
    }
});

promiseObj.then(
    (value)=>{
        console.log(value);
    },
    (error)=>{
        console.log(error);
    }
);

var promiseObj = new Promise((resolve, reject)=>{
    let req = false;
    if(req==true){
        resolve('reuest success');
    }else{
        reject('Request Rejected');
    }
});

promiseObj.then(
    (value)=>{
        console.log(value);
    },
).catch(
    (error)=>{
        console.log(error);
    }
)

const promiseObj = new Promise((resolve, reject)=>{
    let num = 10;
    resolve(num);
}).then(
    (value)=>{
        console.log(value);
        return value+10;
}).then(
    (value)=>{
        console.log(value);
});

var promiseObj = new Promise((resolve, reject)=>{
    let req = true;
    if(req == true){
        resolve('Request success');
    }else{
        reject('request rejected');
    }
}).then(
    (value)=>{
        console.log(value);
    }
).catch(
    (error)=>{
        console.log(error);
    }
).finally(()=>{
    console.log('Finally executed');
// })

console.log('start');

function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Inside set time out');
            resolve(name);
        }, 2000);
    })
}

function getHobbies(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Inside hobby function');
            resolve(['cricket','dancing']);
        }, 1000);
    })
}

getName('sarita')
.then(nm=>getHobbies(nm))
.then(hobby=>console.log(hobby))

console.log('End')

async function showHobby(){
    const nm = await getName('sonam')
    const hobby = await getHobbies(nm);
    console.log(hobby)
}

showHobby();
console.log('end')

// function show() {
//     alert("Hello, welcome to our websites");
// }

// function change() {
//     document.getElementById("h14").style.backgroundColor = "lightblue";
// }

// function wel() {
//     document.getElementById("h15").innerHTML = "Learn HTML, CSS AND javascript";
// }

// // using id element hiding component ( id returns object)
// // function myfunc(){

// //     document.getElementById("note").style.display = "none";
// // } 

// // 1. way to print in javascript
// // console.log("hello world");
// // document.write("hello world");

// // 2. console API
// // console.warn('this is warning');
// // console.error('this is an error');
// // console.clear();
// // console.assert(4 == (6-2));


// // applying style to h3 tag
// var a = document.getElementsByTagName("h3").length - 1;
// for (var i = 0; i <= a; i++) {
//     document.getElementsByTagName("h3")[i].style.backgroundColor = 'lightblue';
// }

// var b = document.getElementsByTagName("b").length - 1;
// for (var i = 0; i <= b; i++) {
//     document.getElementsByTagName("b")[i].style.backgroundColor = 'lightyellow';
// }

// // using class hiding component (class returns array)

// function myfunc() {
//     document.getElementsByClassName("note")[0].style.display = "none";
// }


// function display() {
//     document.getElementById("h12").innerHTML = "I don't like apple";
//     document.getElementById("h12").style.fontSize = "30px";
// }

// function myfun() {
//     alert("don't click this button")
// }

// function mydate() {
//     document.getElementById("h13").innerHTML = Date();
// }

// function light(sw) {
//     var x;
//     if (sw == 0) {
//         x = "https://www.w3schools.com/html/pic_bulboff.gif";
//     } else {
//         x = "https://www.w3schools.com/js/pic_bulbon.gif";
//     }
//     document.getElementById("bulb").src = x;
// }

// function hid() {
//     var person = { firstName: "Sarita", lastName: "borad", age: 25, fullName: function () { return "My name is " + this.firstName + " " + this.lastName } };
//     // document.getElementById("h16").innerHTML = "my name is " + person.firstName + " " + person.lastName;
//     // document.getElementById("h16").innerHTML = person["firstName"] + " " + person["lastName"];
//     document.getElementById("h16").style.display = "block";
//     document.getElementById("h16").innerHTML = person.fullName();
// }

// function c1() {
//     document.getElementById("h1").innerHTML = "learn html and css here";
// }

// function c2() {
//     document.write("hello, we are here to teach you")
// }

// // window.alert("Learn HTML and CSS here")

// console.log('hello, world')

// function pr() {
//     window.print();
// }

// function c3() {
//     var x, y;
//     x = 10
//     y = x * 10
//     console.log(y)
// }


// function c4(name, profession) {
//     document.getElementById("arg").innerHTML = name + " is " + profession;

// }

// function myfunction(txt) {
//     document.getElementById("greet").innerHTML = txt;

// }

// // prompt let user enter value
// let val1 = prompt("what is your age? ", "enter your age:- ")
// console.log(val1)

// // to confirm value
// let x = confirm("are you sure?");
// console.log(x)

// // var x = "abcdefght6131667"
// // var ln = x.length
// // document.getElementById("ln").innerHTML = ln;

// var x1 = "her name is very nice";
// var y = x1.indexOf("nice");
// console.log(y)

// // numbers
// // precedence        //associativity
// // parenthesis       ---
// // exponsetiation    right to left
// // *,/,%             left to right
// // +, -              left to right
// // to convert string into int or float
// let n1 = -12;
// let n2 = "12";
// let n3 = 12.4;
// console.log(n1 + parseInt(n2)); //parseInt convert number in string to integer
// console.log(n1 + parseFloat(n2)); //parseFloat converts number in string to float
// console.log(Number(n2));
// console.log(typeof "2"); //to know type use - typeof
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Math.PI);
// console.log(Math.round(n3)); //it round of digits after decimal point
// console.log(Math.floor(n3)); // it round of to lower digit -- 12
// console.log(Math.ceil(n3)); // it round of to upper digit -- 13
// console.log(Math.abs(n1)); // returns positive integer always
// console.log(Math.max(12, 13, 20));
// console.log(Math.min(12, 5, 23));

// let bigNum = 10000000000000000000n;
// let bigNum2 = bigNum + BigInt(2000000000000000); //num bigger than Max_safe_integer
// console.log("big number is:- " + bigNum2);


// let randomNum1 = Math.random(); // It returns random number between 0 to 1 but not 1
// let randomNum = Math.floor(Math.random() * 10); // It returns random Int num btn 0 to 10 
// console.log("random float num between 0 to 1:- " + randomNum);
// console.log("random Ineger num between 0 to 10:- " + randomNum1);

// // to find random num between two num
// let minNum = 5;
// let maxNum = 10;
// randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
// console.log("random num btn 5 & 10:- " + randomNumber);


// // Use of if else                                                                                                                                                                                         
// document.write("<h3>Use of if else </h3>");
// var name = window.prompt("enter the name:-  ");
// if (name == "sarita") {
//     document.write("Hello " + name);
// } else {
//     document.write("welcome to our website " + name + "!!");
// }


// // Use of switch case                                                                                                                                                                                         
// document.write("<h3>Use of switch case </h3>");
// var day = window.prompt("Enter your day:- ");
// switch (day) {
//     case "sun":
//     case "sat":
//         document.write("Today is Holiday");
//         break;
//     case "mon":
//     case "tue":
//     case "wed":
//     case "fri":
//         document.write("Today is not Holiday");
//         break;
// }


// // for loop                                                                                                                                                                                         
// document.write("<h3>for loop</h3>");
// for (i = 1; i < 6; i++) {
//     if (i == 3) {
//         continue;
//     }
//     document.write(i + "<br>");
// }


// // Nested for loop
// document.write("<h3>Nested for loop</h3>")
// for (i = 0; i < 2; i++) {
//     document.write("Outer for loop " + i + "<br>")
//     for (j = 1; j < 3; j++) {
//         document.write("inner for loop " + j + "<br>")
//     }
// }


// // while loop
// document.write("<h3>while loop</h3>")
// var i = 0
// while (i < 5) {
//     if (i == 3) {
//         break;
//     }
//     document.write("this is while loop " + i + "<br>")
//     i++
// }


// // Nested while loop
// document.write("<h3>accessing arguments passed in function using arguments object array</h3>")
// var i = 0;
// while (i < 3) {
//     document.write("outer while loop" + i + "<br>")
//     i++
//     var j = 0;
//     while (j < 2) {
//         document.write("inner loop " + j + "<br>")
//         j++
//     }
// }

// // Do while loop
// document.write("<h3>Do while loop</h3>")
// var i = 1;
// do {
//     document.write("Do it" + i + "<br>");
//     i++
// } while (i < 5)


// // Nested do while loop
// document.write("<h3>Nested do while loop</h3>")
// var i = 1;
// do {
//     document.write("do outer" + "<br>");
//     i++;
//     var j = 1;
//     do {
//         document.write("do inner" + "<br>");
//         j++;

//     } while (j < 4);
// } while (i < 3);


// // Use of function
// document.write("<h3>Use of function</h3>")
// function show() {
//     document.write("you are Grate")
// }

// show()


// // arguments object contains an array of arguments used when the function was called
// document.write("<h3>accessing arguments passed in function using arguments object </h3>")
// function disp(name1, name2, name3 = "Riya") {
//     document.write("<h3>number of arguments passed can be found by length property of argument object</h3>")
//     document.write("number of arguments passed in function = " + arguments.length + "<br>");
//     for (var i = 0; i < arguments.length; i++) {

//         document.write("<br>" + arguments[i] + "<br>");


//     }
//     // document.write("<br> <h3>callee property of arguments object displays that function  - </h3>")
//     // document.write(arguments.callee)
//     document.write("<h3>Default parameter to function</h3>")
//     document.write(name3 + "<br>");


// }

// disp("sarita", "smruti")

// // anonymous function in javascript
// a = function () {
//     document.write("<h3>function without name is anonymous function</h3>");
//     document.write("it needs function expression to call / close this function with semi colon ")
// };

// a()

// // passing  anonymous function as argument
// function dis(myfun) {
//     document.write("<h3> anonymous function as argument</h3>");
//     return myfun()
// }

// document.write(dis(function () {
//     return " result returned from Anonymous function";
// }));


// // function returning anonymous function

// function displ(a) {
//     document.write("<h3> function returning anonymous function </h3>");
//     return function (b) { return a + b; }
// }

// var d = displ(10)
// document.write(d(40))


// // function expression
// var di = function disp() {
//     document.write("<h3> function expression </h3>");
// };

// di()

// // Anonymous function
// var an = function () {
//     document.write("<h3> Anonymous function </h3>");
// };

// an()

// // Arrow function
// var ar = () => { document.write("<h3> Arrow function </h3>"); };

// ar()

// var ar1 = c => { return c; };
// ar1(20)
// // we need not to write return when using arrow function, we can simply return like below
// // var ar1 = c=> {c}; won't work
// // var ar2 = c => c;
// var ar2 = (a, b) => a + b;

// // document.write(ar2(10,20))


// // Immediately Invoked function expression(IIFE) // it is javascript function that runs as soon as it is defined.
// (function () {
//     document.write("<h3> Immediately Invoked function expression(IIFE) </h3>");
// })();


// // Immediately Invoked function expression(IIFE) with arguments
// (function (a, b) {
//     document.write("<h3> Immediately Invoked function expression(IIFE) with arguments </h3>");
//     document.write(a + b);
// })(10, 20);


// // use of typeof operator
// document.write("<h3> Use of typeof operator </h3>" + typeof ("hello"));


// // declaration and  initialization of object using object literal
// // let object_name = {};
// let fees = {};
// fees.Rahul = 100; //assigning value to key Rahul
// fees['swara'] = 200; //assigning value to swara Rahul
// fees["super man"] = 300; //multiword key required double quote
// fees.total = function () { return 100 + 200 + 300; };
// document.write("<h3>declaration and  initialization of object using object literal </h3>")
// document.write(fees['Rahul'] + "<br>")
// document.write(fees.swara + "<br>")
// document.write(fees["super man"] + "<br>")
// document.write(fees.total() + "<br>")

// let fee = {Rahul1:100, vira:200, total1:function(){return 100 + 200}};
// document.write(fee.total1())

// declaration and  initialization of object using object constructor

// // function to print in reverse order
// function reverse(array){
//     document.write("<h3>function to print in reverse order</h3>")
//     for(var i=array.length-1;i>=0; i--){
//         document.write(array[i] + "<br>")
//     }
// }
// reverse([10,20,30,40,50])


// // function to check identical element
// function identical(array){
//     document.write("<h3>function to check identical element</h3>")
//     let first = array[0];
//     for(var i=1; i<array.length; i++){
//         if (array[i] != first)
//         {
//             return false;
//         }
//     }
//             return true;
// }

// iden = identical([10,10,10,10,10])
// document.write(iden)


// // function to check max number
// function maximum(array){
//     document.write("<h3>function to check max number</h3>")
//     let max = array[0]
//     for (i=1;i<array.length;i++){
//         if (array[i]>max){
//             max = array[i];
//         }

//     }
//     return max
// }

// maxi = maximum([10,40,50,80,90])
// document.write(maxi)


// // function to sum all number
// function sum(array){
//     document.write("<h3>function to sum all number</h3>")
//     let sum = 0;
//     for (num of array){
//         sum = sum + num
//     }
//     return sum
// }

// sum1 = sum([10,20,30,40])
// document.write(sum1)


// // book management system using javascript
// var books = []
// var input = prompt('which operation you want to perform ? [add | list | delete | exit')
// while (input != 'exit'){
//     if (input == 'add')
//     {
//         addbook();
//     }
//     else if(input == 'list')
//     {
//         listbook();
//     }
//     else if(input == 'delete')
//     {
//         deletebook();
//     }
//     else{
//         console.log('please choose valid option');
//     }
//     input = prompt('which operation you want to perform ? [add | list | delete | exit')
// }
// console.log('thanks for using our application')

// function addbook()
// {
// var newbook = prompt('enter book name to add');
// books.push(newbook);
// }

// function listbook(){
//     console.log('list of available book:-');
//     for (book of books){
//         console.log(book);
//     }
// }

// function deletebook(){
//     var name = prompt('enter name of book to delete');
//     index = books.indexOf(name);
//     if(index == -1){
//         console.log('specified book not avasilable');
//     }
//     else{
//         books.splice(index, 1);
//         console.log('specified book deleted');
//     }

// }

// // factorial of n numbers

// function factorial(n){
//     if (n==1){
//         return 1;
//     }
//     else 
//         return n * factorial(n - 1);
//         }

// factorial(5)

// string concatenation using " ` "
// let name1 = "sarita";
// let lastName = "borad";
// let fullName = `I am ${name1} ${lastName}`;
// console.log("last character of name:- " + name1[name1.length-1]);
// console.log("full name:- " + fullName);
// console.log("use of slicing:- " + name1.slice(0,4));
// console.log("use of sub string (substr):- " + name1.substr(0,4));
// console.log("use of sub string (substring):- " + name1.substring(0,4));
// console.log("use of uppercase:- " + name1.toUpperCase());
// console.log("use of lowercase:- " + name1.toLowerCase());

// logical operators
// let na1 = "sarita";
// let ag1 = 25;
// if (na1 === "sarita" && ag1 === 25){
//     console.log("you can play this game");
// }else if(na1 === "smruti" || ag1 ===20){
//     console.log("you can play this game");
// }else {
//     console.log("you can't play this game");
// }

// // if (na1 !== 12){
// //     console.log("12 is not equal to number")
// // }

// if (!(na1[0] == 's' || na1[0] == 'S')){
//     console.log("your name do not starts with 's' ");
// }else{
//     console.log("your name starts with 's'");
// }


// // ternary operator - ? Ex:1
// let age1 = 18;
// age1 > 15 ? console.log("wecome to ternary operator") : console.log("not welcome to ternary");
// let above15 = age1 > 15 ? true :false;
// // let above15 = age1 > 15 ? "yes" : "no";
// console.log(above15);

// // ternary operator - ? Ex:2
// let temp = 12;
// let message = (temp<=-90)?"what's your planet?":
//               (temp<=0)?"it's very cold outside":
//               (temp<=10)?"it's little cold outside":
//               (temp<=16)?"it's fine wether":
//               ("what?")
// console.log(message)


// // switch case statment
// document.write(`<h3> switch case statment </h3>`);
// let weekday = 2;
// switch(weekday){
//     case 1:
//         document.write("monday");
//         break;
//     case 2:
//         document.write("tuesday");
//         break;
//     case 3:
//         document.write("wednesday");
//         break;
//     case 4:
//         document.write("thursday");
//         break;
//     case 5:
//         document.write("friday");
//         break;
//     case 6:
//         document.write("saturday");
//         break;
//     case 7:
//         document.write("sunday");
//         break;
//     default:
//         document.write(" Inv alid day ");
// }

// nullice coalescing operator
// let myName = "sarita";
// document.write("nullice coalescing operator:- " + (myName ?? "unknown"));

// window.onload = function(){
//     console.log('the document was loaded');
// }

// ev = document.getElementsByClassName("note")[0];
// ev.addEventListener('click', function(){
//     el = document.createElement('h3');
//     el.innerText = "hey, it's magic, it's magic !!";
//     ev.appendChild(el); 
//  })


// ev1 = document.getElementsByClassName('note')[0];
// ev1.addEventListener('mouseover', function(){
//     console.log('mouse on element');
// })


// ev2 = document.getElementsByClassName('note')[0];
// ev2.addEventListener('mouseout', function(){
//     console.log('mouse out of element');
// })


// ev3 = document.getElementsByClassName('note')[0];
// ev3.addEventListener('mouseup', function(){
//     console.log('mouse up when clicked on element');
// })


// ev4 = document.getElementsByClassName('note')[0];
// ev4.addEventListener('mousedown', function(){
//     console.log('mouse down when clicked on element');
// })


// let preHtml = document.querySelectorAll('.note')[0].innerHTML;
// ev = document.querySelectorAll('.note')[0];
// ev.addEventListener('mouseup', function(){
//     document.querySelectorAll('.note')[0].innerText = "hey, it's magic, it's magic !!";

// })


// sum1 = (a,b)=>{
//     console.log('the sum is ', a+b);
// }

// setTimeout(sum1(12, 13),3000); //after 3ms it will call sum1 function 

// chan = ()=>{
//     document.querySelectorAll('.note')[0].innerHTML = "it's magic, it's magic";
// }

// // setTimeout(chan,3000); //after 3ms it will call function
// clr = setInterval(chan, 3000); //function will run at every 3ms interval continously, it returns id
// clearInterval(clr); // to stop setInterval we pass Id in clearInterval returned from setInterval


// clock project of javascript
// let a1;
// let date;
// let time;
// const option = {weekday:'long', year : 'numeric', month : 'long', day : 'numeric'};

// setInterval(() => {
//     a1 = new Date();
//     date = a1.toLocaleDateString(undefined,option);
//     time = a1.getHours() + ' : ' + a1.getMinutes() + ' : ' + a1.getSeconds();
//     document.getElementById("time").innerHTML = 'time' + ' on ' + date + ' is '  + time;
// }, 1000);


// TO - DO list functionality
// function getAndUpdate() {
//     title1 = document.getElementById('title').value;
//     if (localStorage.getItem('title') == null) {
//         arr = [];
//         arr.push([title1]);
//         localStorage.setItem('title', JSON.stringify(arr));
//     }
//     else {
//         arr1 = localStorage.getItem('title');
//         arr = JSON.parse(arr1);
//         arr.push([title1]);
//         localStorage.setItem('title', JSON.stringify(arr));
//     }
//     update();
// }

// function update() {
//     if (localStorage.getItem('title') == null) {
//         arr = [];
//         localStorage.setItem('title', JSON.stringify(arr));
//     }
//     else {
//         arr1 = localStorage.getItem('title');
//         arr = JSON.parse(arr1);
//     }

//     // populate data
//     let table = document.getElementById('data');
//     let str = "";
//     arr.forEach((element, index) => {
//         str += `
//         <tr>
//         <th>${index + 1} </th>
//             <td>${element[0]}</td>
//             <td><button onclick = "deleted(${index})">Delete</button></td>
//         </tr><br>`;
//             });
//     table.innerHTML = str;
// }

// ele = document.getElementById('add');
// ele.addEventListener('click', getAndUpdate);
// update();
// function deleted(itemIndex) {
//     arr1 = localStorage.getItem('title');
//     arr = JSON.parse(arr1);
//     arr.splice(itemIndex, 1);
//     localStorage.setItem('title', JSON.stringify(arr));
//     update()
// // }

// function clearstorage() {
//     if (confirm('Do you really want to delete all ?')) {
//         localStorage.clear();
//     };

//     update();
// }

// var a = {};
// console.log(Object.getPrototypeOf(a));
// console.log(Object.getPrototypeOf(a));
    
// var b = new Array();
// console.log(Object.getPrototypeOf(b)); //Array.prototype
// console.log(Object.getPrototypeOf(Array.prototype)); //object.prototype
// console.log(Object.getPrototypeOf(Object.prototype)); //null

// var b1 = new String();
// console.log(Object.getPrototypeOf(b1)); //String.prototype
// console.log(Object.getPrototypeOf(String.prototype)); //object.prototype
// console.log(Object.getPrototypeOf(Object.prototype)); //null
// console.log(Object.prototype);

// function Mobile(){

// };

// console.log(Mobile);
// console.log(Mobile.prototype);

// var lg = new Mobile();
// //verify 
// console.log(Mobile.prototype === lg.__proto__);
// console.log(Mobile === lg.__proto__.constructor);
// console.log(Mobile === Mobile.prototype.constructor);

// Prototype Inheritance

// Super class
// function Mobile(){
//     this.a =  10; //instance property
// };

// Mobile.prototype.z = 30; //prototype property
// var samsang = new Mobile();

// Sub class
// function Nokia(){
//     Mobile.call(this); // calls Mobile class constructor to inherit all properties and methods. 
//     this.b = 20;
// };

//prototype Inheritance
// Nokia.prototype = Object.create(Mobile.prototype); // to access prototype property of parent class
// Nokia.prototype.constructor = Nokia; // to reset constructor

// var s = new Nokia();
// console.log(s.a); // we can access variable a of Mobile class using object of this class.
// console.log(s.z) //we can access prototype property of super(parent) class using prototype inheritance.


// One Super Class and Two sub class

// Super Class
// var Mobile = function(){

// };

//prototype method
// Mobile.prototype.getmodel = function(){
//     return 'the model is ' + this.model;
// }

// // Sub class
// var Samsung = function(model,price){
//     this.model = model;
//     this.price = price;
// };


// // Sub class
// var Lenovo = function(model){
//     this.model = model;
// };

// prototype Inheritance
// Samsung.prototype = Object.create(Mobile.prototype); // linking of Samsung prototype with Mobile prototype
// Samsung.prototype.constructor = Samsung; // Reset constructor of Samsung

// Lenovo.prototype = Object.create(Mobile.prototype); // link Lenovo prototype with Mobile prototype
// Lenovo.prototype.constructor = Lenovo; // Reset Constructor of Lenovo

// Function replacing above code -----> function for inheritance
// function extend(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// extend(Samsung,Mobile);
// extend(Lenovo,Mobile);

// Samsung.prototype.getprice = function(){
//     return this.price;
// };

// // Object creation of Sub class
// var galaxy = new Samsung('Galaxy',3000);
// console.log(galaxy.getprice());
// console.log(galaxy.getmodel());


// var phab2 = new Lenovo('Phab2');
// console.log(phab2.getmodel()); 


// Example :- super class with a parameter

// var Mobile = function(model){
//     this.model = model;
// };

// Mobile.prototype.getmodel = function(){
//     return this.model;
// }

// var Samsung = function(model, price){
//     Mobile.call(this, model)
//     this.price = price;
// };

// //Inheritance

// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// var galaxy = new Samsung('Galaxy',3000);
// console.log(galaxy.getmodel()); // it will return undefined because we didn't pass any value for model


// method overriding
// Function for inheritance:- 
// function extend(child,parent){
//     child.prototype = Object.create(parent.prototype);
//     child.prototype.constructor = child;
// }

// Super class

// var Mobile = function(){

// };

// Mobile.prototype.show = function(){
//     return "super class show method";
// };

// Sub class

// var Samsung = function(){
    
// };
// Samsung.prototype.show = function(){
//     return "Sub class show method";
// }

// extend(Samsung, Mobile);
// var galaxy = new Samsung();
// console.log(galaxy.show());

// Multilevel Inheritance in Javascript

// Super class :--

// var Mobile = function(){
//     this.a = 10;
// }
// Mobile.prototype.z = 30;

// // Sub class :--

// var Samsung = function(){
//     `It calls super class constructor and initialize property. without this you can not access Super
//     class property using sub class object`
//     Mobile.call(this);
//     this.b = 20;
// }

// var Galaxy = function(){
//     Samsung.call(this);
//     this.c = 100;
// }

// // Prototype Inheritance

// Samsung.prototype = Object.create(Mobile.prototype);
// Samsung.prototype.constructor = Samsung;

// Galaxy.prototype = Object.create(Samsung.prototype);
// Galaxy.prototype.constructor = Galaxy;

// var m = new Mobile();
// var s = new Samsung();
// var g = new Galaxy();

// console.log('Galaxy Object can access');
// console.log('Mobile A: ' + g.a );
// console.log('Samsung B: ' + g.b );
// console.log('Mobile prototype z: ' + g.z);
// console.log('Galaxy C: ' + g.c);

// console.log('Samsung Object can access');
// console.log('Mobile A: ' + s.a);
// console.log('Mobile prototype: ' + s.z);

// // this will return undefined
// console.log('Samsung B: ' + s.b);
// console.log('Galaxy c: ' + s.c)

// console.log('Mobile object can access');
// console.log('Mobile A: ', m.a);
// console.log('Mobile prototype object z: ' + m.z);

// // this will return undefined
// console.log('Samsung B: ' + m.b);
// console.log('Galaxy c: ' + m.c);

// var eating = {
//     eat : function(){
//         return ' I can eat';
//     }
// };

// var walking = {
//     walk : function(){
//         return ' I can walk';
//     }
// };

// var talking = {
//     talk : function(){
//         return 'I can talk';
//     }
// };


// var Riddhi = Object.assign({},walking, eating, talking);
// console.log(Riddhi.walk());
// console.log(Riddhi.talk());
// console.log(Riddhi.eat());

// class Mobile {
//     constructor(){
//         //Instance member
//             this.a = 12;
//             this.show = function(){
//                 return "Instance member";
//             };
//     }
//     // prototype Member 
//     display(){
//         return "Prototype member"; 
//     };
// };

// var nokia = new Mobile();
// console.log(nokia.a);
// console.log(nokia.show());
// console.log(nokia.display());


// class Mobile {
//     display(){
//         return "this is prototype member and we are using default constructor";
//     };
// };

// var nokia = new Mobile();
// console.log(nokia.display());

// class Mobile {
//     constructor(model){
//         this.model = model;
//     };
//     display(){
//         return this.model + " Price is 3000";
//     };
// };

// var nokia = new Mobile('Galaxy');
// console.log(nokia.display());


// unnamed class expression

// var Mobile = class {
//     constructor(model){
//         this.model = model;
//     };
//     display(){
//         return this.model + " Price is 3000";
//     };
// };

// var nokia = new Mobile('Galaxy');
// console.log(nokia.display());

// Super Method
// class Father{
//     constructor(money){
//         this.Fmoney = money;
//     }
//     showFMoney(){
//         return this.Fmoney + " Rs." + " Father's Money";
//     };  
// };

// class Child extends Father{
//     constructor(money){
//         super(money);
//     };
//     showCMoney(){
//         return "Child money";
//     };
// };

// class GrandsSon extends Child{
//     showGMoney(){
//         return "GrandSon Money";
//     };
// };

// var suman = new Child(10000);
// console.log(suman.showFMoney());
// console.log(suman.showCMoney());

// var swati = new GrandsSon();
// console.log(swati.showFMoney());
// console.log(swati.showCMoney());
// console.log(swati.showGMoney());

// Method Overriding in javascript

// class Father{
//     show(){
//         return "super class show method";
//     };
// };

// class Son extends Father{
//     show(){
//         return "Sub class method";
//     };
// };

// var s = new Son();
// console.log(s.show());

// class Mobile{
//     static disp(){
//         return "this is static method";
//     };
// };

// console.log(Mobile.disp());

// stu = ["sarita", "smruti", "sweety", "Rahul"];
// stu.forEach(element => {
//     console.log(element);
// });

// stu.forEach(function(element, index, arr){
//     console.log(index + " " + element);
//     console.log(index);
//     console.log(arr);
// });

// for of loop
// stu = ["sarita", "smruti", "sweety", "Rahul"];
// for(let name of stu){
//     console.log(name); //name is variable here, it has element value    
// };

// // Taking input from user in javascript
// no = prompt('enter the no of name - ');
// stu = [];
// for(let i = 0; i <= no; i++ ){
//     stu[i] = prompt("enter the name :- ");
// }
// console.log(stu);

// MultiDimentional Array
// var data = [
//     ["Rahul", "Dell", 16], 
//     ["Smruti", "lenovo", 23], 
//     ["HP", "Zed", 45] ];

// for(let i=0; i< 3; i++){
//     for(let j=0; j< 3; j++){
//         document.write(data[i][j] + " ");
//     };
//     document.write("<br>");
// };

// var rows = 2;
// var cols = 3;
// var geek = new Array(rows);
// for(var i = 0; i < rows; i++){
//     geek[i] = new Array(cols); // it creates empty array in array ---> [[], [], [] ... ]
// }
// for(var i = 0; i< rows; i++){
//     for(var j = 0; j< cols; j++){
//         document.write(geek[i][j] + " ");
//         //document.write(i +  " " + j + "|");
//     }
//     document.write("<br>");
// };

// MultiDimetional Array
// var rows = 3;
// var cols = 3;
// var stu = new Array(3);
// for(let i = 0; i< rows; i++){
//     stu[i] = new Array(cols);
// };
// for(var i = 0; i< rows; i++){
//     for(var j = 0; j< cols; j++){
//         stu[i][j] = prompt('enter element in array');
//         document.write(stu[i][j] + " ");
//     };
//     document.write("<br>")
// };

// // concat() method in javascript 
// var geek = ["Rahul", "Sonam", "Sumit"];
// var new_geek = geek.concat("Raj", "Ravi"); // adding value in old array 
// console.log(new_geek);

// var geek1 = ["Rahul", "Sonam", "Sumit"];
// var geek2 = ["Riya", "Rehan"];
// var geek3 = ["Priya", "Payal"];
// var new_geek = geek1.concat(geek2);
// console.log(new_geek);

// var geek = ["Riya", "Rehan", "sweety"];
// jn = geek.join(' ');
// console.log(jn);

//to reverse an element of array 
// var geek = ["Riya", "Rehan", "sweety"];
// geek.reverse(); //reveses element of an array
// console.log(geek); //["sweety", "Rehan", "Riya"]

// var geek = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// var new_arr = geek.slice(1, 3);
// console.log(new_arr); // ["Sonam", "Sumit"]
// var new_arr = geek.slice(-3, -1);
// console.log(new_arr);  // ["Sumit", "Ruhi"]
// var new_arr = geek.slice(undefined, 4);
// console.log(new_arr);  // ["Rahul", "Sonam", "Sumit", "Ruhi"] starts from 0

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// console.log(geek1.toString()); //Rahul,Sonam,Sumit,Ruhi,Reva

// Array.isArray() method
// var result = Array.isArray(["Rohan", "Raj"]); // true
// console.log(result);
// var result = Array.isArray("a string"); // false 
// console.log(result);

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];

// geek1.splice(2); // it will remove all element start from index 2
// console.log(geek1);

// geek1.splice(2, 1); // it will remove 1 element start from index 2
// console.log(geek1);

// geek1.splice(2, 0, "swati"); // it will not remove anything but insert "swati" at position 2
// console.log(geek1);

// geek1.splice(2, 0, "swati", "Ravina"); // it will not remove anything but start inserting from index 2
// console.log(geek1); 

// geek1.splice(2, 3, "swati", "Ravina"); // it will remove 3 elements from index 2 and then insert from 2
// console.log(geek1); // 

// var position = geek1.indexOf("Rohit", 2); //search "Rohit" start searching from index 2 
// console.log(position); // -1

// var position = geek1.indexOf("Rahul"); //search "Rohit" start searching from index 2 
// console.log(position);

// var position = geek1.indexOf("Ruhi",2); //search "Rohit" start searching from index 2 
// console.log(position);

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// geek1.fill('Don'); // all elements fill with Don 
// geek1.fill('Don', 1, 3); // from index 1 to 3 fill with Don (3 not included)
// console.log(geek1);

// var new_array = new Array(3).fill("Don");
// console.log(new_array);

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// // geek1.unshift("Raja", "Riya");
// var geek_length = geek1.unshift("Raja", "Riya"); // it will add element and return length 
// console.log(geek_length);
// console.log(geek1);


// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// var arr_len = geek1.push("Raja", "Riya");
// console.log(arr_len); // it will return length of array and add element at the end
// console.log(geek1);

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// var geek_length = geek1.shift(); // it will remove first element of an array
// console.log(geek_length);

// var geek1 = ["Rahul", "Sonam", "Sumit", "Ruhi", "Reva"];
// var removed = geek1.pop(); // it will remove last element of an array
// console.log(removed);   

// calling function using back tick (template string)
// function myfun(say){
//     return say;
// }

// console.log(`${myfun("hey guys, I want to welcome you all in this learning world")}`);
// var name = prompt("Enter your name :- ");
// var say = prompt("say something!! ");
// console.log(`${name} said: ${say}`);


// var str = "hey, I am here";
// console.log(str.length); // comma, space All included

// var str = "hey, I am here";
// console.log(str.charAt(10)); // it will return char at 10th index of string


// // var str = "hey, I am here";
// console.log(str.charCodeAt(10)); // it will return char at 10th index of string

// var str = "hey, I am here";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// var str = "             hey, I am here            ";
// console.log(str.trim());


// var str = "hey, I am here";
// console.log(str.replace("here", "everywhere")); 

// var str = "hey, I am here";
// console.log(str.split(" "));


// var str = "hey, I am here";
// console.log(str.indexOf("e",11)); // it will start searching from 11th index 
// console.log(str.indexOf("sweety")); // it will return -1 


// var str = "hey, I am here";
// console.log(str.search("e")); // it will return index of e
// console.log(str.search("sweety")); // it will return -1 


// var str = "we are on a mission to be something";
// console.log(str.slice(8, 20)); // 20 mot included

// var str = "we are on a mission to be something";
// console.log(str.substring(8, 20));

// var str = "we are on a mission to be something";
// console.log(str.substr(8, 12));

// console.log(20/"sar"); // not a legal number
// console.log(-5/0); 
// console.log(5/0); 


// var a = 10;
// console.log(a.toString(2));
// console.log(a.toString(8));
// console.log(a.toString(16));


// var a = 58975.98745;
// console.log(a.toExponential());  
// console.log(a.toExponential(2));
// console.log(a.toExponential(4));

// var a = 19.65823;
// console.log(a.toPrecision());
// console.log(a.toPrecision(2));
// console.log(a.toPrecision(4));
// console.log(a.toPrecision(8));

// console.log(Number.isSafeInteger());
// console.log(Number.isSafeInteger(100));
// console.log(Number.isSafeInteger(-100));
// console.log(Number.isSafeInteger(8.5));
// console.log(Number.isSafeInteger(8494913149118494619484444444444444444444444478));
// console.log(Number.isSafeInteger("100"));

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number("100"));
// console.log(Number(100/"hello"));
// console.log(Date());

// console.log(parseFloat("10"));
// console.log(parseFloat("12.00"));
// console.log(parseFloat("15.45"));
// console.log(parseFloat("10 20 30"));
// console.log(parseFloat("    10    "));
// console.log(parseFloat("10 years"));
// console.log(parseFloat("years 10"));
// console.log(parseFloat("010"));
// console.log(parseFloat("12",8));
// console.log(parseFloat("0x12"));
// console.log(parseFloat("10",16));

// console.log(Math.min(50, 2, 20, 30, 100));                                                                                                                                                          
// console.log(Math.max(50, 2, 20, 30, 100));

// console.log(Math.floor(2.1));
// console.log(Math.floor(6.65));
// console.log(Math.floor(0.4));
// console.log(Math.floor(0.6));
// console.log(Math.floor(-2.1));
// console.log(Math.floor(-6.65));

// console.log(Math.round(2.1));
// console.log(Math.round(6.4));
// console.log(Math.round(6.5));
// console.log(Math.round(6.6));
// console.log(Math.round(0.4));
// console.log(Math.round(0.5));
// console.log(Math.round(-2.1));
// console.log(Math.round(-6.4));
// console.log(Math.round(-6.5));
// console.log(Math.round(-6.6));

// console.log(Math.random());
// console.log(Math.random()*10+1);

// var x = Math.floor((Math.random()*1000+1)); 
// console.log(x);   


// var date = new Date();
// console.log(date);

// var date1 = new Date(1530867166586);  // we can get date from millisecond
// var date2 = new Date(8640000);
// date = new Date(2018,12,4,4,10,16,0);

// console.log(date);

// var date = new Date("March 25 2018");
// var date = new Date("2018-06");
// var date = new Date("06-25-2018");
// console.log(date);

// // var date = new Date();
// console.log(date);

// date.setHours(22);
// console.log(date);

// date.setMinutes(56);
// console.log(date);

// date.setSeconds(46);
// console.log(date);

// date.setDate(26);
// console.log(date);

// date.setFullYear(2022);
// console.log(date);

// date.setMonth(11);
// console.log(date);

// var date = new Date();
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getDate());
// console.log(date.getFullYear());
// console.log(date.getMonth());

// var date = new Date("March 29 2021");
// month = date.getMonth();
// day = date.getDay();

// console.log(getMonthName(month));
// console.log(getDayName(day));

// function getMonthName(month){
//     AllMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", 
//     "October", "November", "December"];
//     return AllMonth[month];
// }

// function getDayName(day){
//     AllDay = ["sunday", "monday", "tuesday","wednusday", "thrusday", "friday", "saturday"];
//     return AllDay[day];
// }


// var date = new Date();
// console.log(formatDate(date));
// console.log(formatTime(date));

// function formatDate(date){
//     var date1 = date.getDate();
//     var month = date.getMonth();
//     var year = date.getFullYear();
//     return date1 + "-" + month + "-" + year;
// }

// function formatTime(time){
//     var hour = time.getHours();
//     var minute = time.getMinutes();
//     var second = time.getSeconds();
//     return hour + ":" + minute + ":" + second;
// }

// var date = new Date();
// console.log(date.toString());
// console.log(date.toUTCString());
// console.log(date.toGMTString());

// var len = document.getElementsByTagName("h3").length;
// console.log(len);

// for(let i=0; i<len; i++){
//     var result = document.getElementsByTagName("h3")[i];
//     console.log(result);
// }

// console.log(document.nodeName);
// console.log(document.nodeValue);
// console.log(document.nodeType);

// element = document.getElementById("add");

// console.log(element.nodeName);
// console.log(element.nodeValue);
// console.log(element.nodeType);

// txt = document.getElementById("h14");


// console.log(txt.firstChild.nodeName);
// console.log(txt.firstChild.nodeValue);
// console.log(txt.firstChild.nodeType);

// txt = document.getElementById("h14");


// console.log(txt.firstChild.nextSibling.nodeName);
// console.log(txt.firstChild.nextSibling.nodeValue);
// console.log(txt.firstChild.nextSibling.nodeType);

// var txt = document.getElementById("h14").firstChild.nodeValue;
// console.log(txt);

// var txt = document.getElementById("h14").firstChild.nodeValue = "This is Important text";
// console.log(txt);


// var result = document.getElementById("add");
// var len = result.attributes.length;

// // console.log(result.attributes.length);
// // console.log(result.attributes[0].nodeName);
// // console.log(result.attributes[0].nodeValue);


// for(let i=0; i<len; i++){
//     console.log(result.attributes[i].nodeName);
//     console.log(result.attributes[i].nodeValue);
// }


// var elem = document.getElementById("h14");
// console.log(elem.parentNode);
// console.log(elem.parentElement);


// var elem = document.getElementById("elem");
// // console.log(elem);
// console.log(elem.parentNode);
// // Output :- it returns #document because parent of html element is document

// console.log(elem.parentElement);
// // Output :- it will return null because parent of html is document and it is not an element

// var elem = document.getElementById("add");
// var elem = document.getElementById("myid");

// len = elem.children.length

// console.log(elem.childNodes);
// console.log(elem.childNodes.length);
// Output :- it returns all child elements of element including whitespace, enter and all 

// console.log(elem.children);
// console.log(elem.children.length);
// Output :- it will return child element of element but no whitespace, enter, comment node etc..

// for(let i=0; i< len; i++){
//     console.log(elem.children[i]);
// }

// var elem = document.getElementById("myid");
// console.log(elem.firstChild);
// console.log(elem.firstElementChild);
// console.log(elem.lastChild.previousSibling);
// console.log(elem.lastChild.previousElementSibling);

// console.log(elem.firstChild.nextSibling);
// console.log(elem.firstChild.nextElementSibling);
// console.log(elem.firstElementChild.nextElementSibling);

// var newElem = document.createElement("h2");
// console.log(newElem);

// var newTxtNode = document.createTextNode("text node created by javascript");
// console.log(newTxtNode);


// var newComment = document.createComment("we created a comment");
// console.log(newComment);
// Output :- we created a comment

// var df = document.createDocumentFragment(); // creates empty DocumentFragment
// console.log(df);

// var parent = document.getElementById("myid");
// var child = document.getElementById("add");
// // console.log(parent);
// parent.appendChild(child);
// // console.log(parent);
// console.log(child);

// var nenode = document.createElement("h3");
// var parent = document.getElementById("add");
// parent.appendChild(nenode);
// console.log(parent)


// var parent = document.getElementById("add");
// parent.appendChild(document.createElement("h3"));
// console.log(parent)


// var parent = document.getElementById("add");
// // creating new text node 
// var txtNode = document.createTextNode(" / add your future activity to list");
// parent.appendChild(txtNode);
// console.log(parent);

// var parent = document.getElementById("add");
// // creating a comment node 
// var commentNode = document.createComment(" adding to do iteams in list");
// parent.appendChild(commentNode);
// console.log(parent);

// var nENode = document.createElement("h2");

//creating text node 
// var txtNode = document.createTextNode("here is text node created");

//creating comment node 
// var cmtNode = document.createComment("the coment text for element");

// // Append text node to element node 
// nENode.appendChild(txtNode);
// // console.log(nENode);

// // Append element to an existing element
// var parent = document.getElementById("add");
// parent.appendChild(nENode);
// parent.appendChild(cmtNode);
// console.log(parent);

// var df = document.createDocumentFragment(); // create empty DocumentFragment

// var elem1 = document.createElement("h3");  // creating h3 element
// var elem2 = document.createElement("p");   // creating p element

// elem1.textContent = "here is h3 element";  // adding text content to element 
// elem2.textContent = "here is p element";   // adding text content to element 

// df.appendChild(elem1);  // adding elements to DocumentFragment
// df.appendChild(elem2);  // adding elements to DocumentFragment

// var parent = document.getElementById("add");

// parent.appendChild(df);  // moving DocumentFragment elements to element of document
// console.log(parent);
// console.log(df);

// var elem = document.getElementById("add");

// elem.appendChild(document.createTextNode(" hello "));
// elem.appendChild(document.createTextNode(" I am "));
// elem.appendChild(document.createTextNode(" here to learn JAVASCRIPT "));
// console.log(elem.childNodes);
// elem.normalize();
// console.log(elem.childNodes);

// elem = document.getElementById("rad");
// // console.log(elem);
// elem1 = document.getElementById("myli");
// // console.log(elem1);

// elem2 = document.createElement("li");
// elem2.textContent = "for loop"

// elem.insertBefore(elem2, elem1)
// console.log(elem);


// elem = document.getElementById("rad");   // accessing element  
// elem1 = document.getElementById("myli"); // accessing element 

// elem2 = document.getElementById("el"); // creating an element

// elem.insertBefore(elem2, elem1); // inserting new element(elem2) before referance element(elem1)
// console.log(elem);


// parentNode = document.getElementById("rad");   // accessing element  

// newNode = document.getElementById("el"); // Existing element

// parentNode.insertBefore(newNode, null); // inserting Existing element(newNode) before last element
// console.log(parentNode);

// parentNode = document.getElementById("rad");   // accessing element  
// refNode = document.getElementById("myli"); // accessing element 

// newNode = document.createTextNode("For loop"); // new text nodeValue

// parentNode.insertBefore(newNode, refNode); // inserting new text node before reference node  
// console.log(parentNode);

// var elem = document.getElementById("rad");   
// var newElem = document.createElement("span");
// var tarElem = document.getElementById("myli");

// tarElem.insertAdjacentElement("beforebegin", newElem);
// console.log(elem);

// tarElem.insertAdjacentElement("afterbegin", newElem);
// console.log(elem);

// tarElem.insertAdjacentElement("afterbegin", newElem);
// console.log(elem);

// // tarElem.insertAdjacentElement("afterend", newElem);
// console.log(elem);

// var elem = document.getElementById("rad");

// var duplicateNode = elem.cloneNode(true);
// console.log(duplicateNode); // it returns all element including child

// var duplicateNode = elem.cloneNode(false);
// // console.log(duplicateNode); // it only returns element

// var parentNode = document.getElementById("rad");
// var targetNode = document.getElementById("myli");
// console.log(parentNode.firstElementChild.nextElementSibling);
// var delNode = parentNode.removeChild(parentNode.firstElementChild);
// var delNode = parentNode.removeChild(parentNode.firstElementChild.nextElementSibling);

// var delNode = parentNode.removeChild(targetNode);
// console.log(delNode);
// console.log(parentNode);

// var elem = document.getElementById("rad");
// var newChild = document.createElement("li");
// newChild.textContent = "while loop is infinite when true";
// oldChild = document.getElementById("myli");

// var replacedNode = elem.replaceChild(newChild, oldChild);
// console.log(replacedNode);
// // console.log(elem)

// var parentNode = document.getElementById("rad");
// oldChild = document.getElementById("myli");
// var existChild = parentNode.firstElementChild;

// var replacedNode = parentNode.replaceChild(existChild, oldChild);
// console.log(replacedNode);
// console.log(parentNode);
// console.log(existChild);


// var elem = document.getElementById("add");
// console.log(elem.firstChild);
// console.log(elem.firstChild.length);

// var elem = document.getElementById("add");
// console.log(elem.firstChild.data);
// var data = elem.firstChild.data;
// console.log(data);

// elem.firstChild.data = "hey, where are you ?"; 
// console.log(elem.firstChild.data)


// var elem = document.getElementById("add");
// txtNode = elem.firstChild;
// txtNode.appendData(" your daily to do activity");
// console.log(elem.firstChild);


// var elem = document.getElementById("add");
// txtNode = elem.firstChild;
// txtNode.deleteData(0,4);
// console.log(elem.firstChild);

// var elem = document.getElementById("add");
// txtNode = elem.firstChild;
// txtNode.insertData(0, "daily to do activity ");;
// console.log(elem.firstChild)


// var elem = document.getElementById("add");
// var sub = elem.firstChild.substringData(0,3);
// console.log(sub);

// var elem = document.getElementById("add");
// var rightSide = elem.firstChild.splitText(3); // spilt text will be in right side node
// console.log(elem.childNodes);  
// console.log(rightSide);


// var elem = document.getElementById("add");
// elem.setAttribute('class','myclass');
// console.log(elem.getAttribute('class'));

// var elem = document.getElementById("add");
// elem.removeAttribute('class');
// console.log(elem.attributes);

// var attr = elem.hasAttribute('class');
// console.log(attr);


// var elem = document.getElementById('add');
// var elementClass = elem.classList;
// console.log(elementClass);

var elem = document.getElementById('add');
var elementClass = elem.classList;
console.log(elementClass); // it returns DOMTokenList which has element's class collection 
// Output :- 

console.log(elementClass[0]);
// Output :- 

console.log(elementClass.length);
// Output :- 

console.log(elementClass.value);
// Output :- 

console.log(elementClass.item(0));
// Output :- 

// elementClass.add("myclass");
// console.log(elementClass);
// Output :- 

elementClass.add("myclass2","myclass1");
console.log(elementClass);
// Output :- 

elementClass.remove("myclass");
// console.log(elementClass);
// // Output :- 

// elementClass.remove("myclass2","myclass1");
// console.log(elementClass);
// Output :- 

// elementClass.replace("myclass2","myclass1");
// console.log(elementClass);
// // Output :- 

// console.log(elementClass.contains("myclass2"));
// // console.log(elementClass);
// // Output :- 

// elementClass.toggle("myclass2");
//     console.log(elementClass);
// // Output :- 

// elementClass.toggle("myclass2");
//     console.log(elementClass);

// var txt = document.getElementById('mytext');

// function changeColorOrange(){
//     txt.style.backgroundColor = 'orange';
// }
// function changeColorWhite(){
//     txt.style.backgroundColor = 'white';
// }

// txt.addEventListener('mouseover', changeColorOrange, false);
// txt.addEventListener('mouseout', changeColorWhite, false);


// var txt = document.getElementById('mytxt'); 

// function focusEvent(e){
//     txt.style.backgroundColor = 'orange';
// }

// txt.addEventListener('focus', focusEvent, false);

// function blurEvent(e){
//     txt.style.backgroundColor = 'white';
// }
// txt.addEventListener('focus', focusEvent, false);
// txt.addEventListener('blur', blurEvent, false);
// txt.addEventListener('focusin', focusEvent, false);
// txt.addEventListener('focusout', blurEvent, false);

// var txt = document.getElementById('mytxt'); 

// function keyEvent(e){
//     console.log(e.type + ' ' + e.keyCode + ' ' + String.fromCharCode(e.keyCode));
// }

// txt.addEventListener('keydown', keyEvent, false);
// txt.addEventListener('keypress', keyEvent, false);
// txt.addEventListener('keyup', keyEvent, false);

// var txt = document.getElementById('mytxt'); 

// function show(e){
//     console.log(e.type + ' ' + e.data);
// }

// txt.addEventListener('textInput', show, false);


// var newW = window.open();
// console.log(newW)


// function createWindow(){
//     window.open('https://www.google.com','_blank','height=400,width=600,scrollbars=no');
//     // window.open('https://www.google.com','_blank','height=400,width=800');
//     // window.open('https://www.google.com','_self');
//     // window.open('https://www.google.com');
//     // window.open();
// }

// b1 = document.getElementById('btn');
// b1.addEventListener('click',createWindow, false);

// var newWindow;
// function opnWindow(){
//     newWindow = window.open('https://www.google.com','','height=400,width=600');
// }
// function clWindow(){
//     newWindow.close();
// }

// bn1 = document.getElementById('mybn1');
// bn2 = document.getElementById('mybn2');

// bn1.addEventListener('click', opnWindow, false);
// bn2.addEventListener('click', clWindow, false);


// function printDoc(){
//     window.print();
// }

// var bn3 = document.getElementById('mybn3');
// bn3.addEventListener('click', printDoc, false);

// var newWindow;
// function openWin(){
//     newWindow = window.open('','_blank','width=600,height=400');
// }
// function focusWin(){
//     newWindow.focus();
// }
// function blurWin(){
//     newWindow.blur();
// }
// bn1 = document.getElementById('openbtn').addEventListener('click', openWin, false);
// bn2 = document.getElementById('focusbtn').addEventListener('click', focusWin, false);
// bn3 = document.getElementById('blurbtn').addEventListener('click', blurWin, false);


// var newWindow;
// function opnWindow(){
//     newWindow = window.open('','newWindow','height=3 00,width=400');
// }

// function mvWin(){
//     newWindow.moveBy(200,200);
//     newWindow.focus();
// }

// function mvlWin(){
//     newWindow.moveBy(-200,-200);
//     newWindow.focus();
// }
// document.getElementById('opn').addEventListener('click', opnWindow, false);
// document.getElementById('mwr').addEventListener('click', mvWin, false);
// document.getElementById('mwl').addEventListener('click', mvlWin, false);


// var newWindow;
// function opnWindow(){
//     newWindow = window.open('','newWindow','height=3 00,width=400');
// }

// function mvWin(){
//     newWindow.moveTo(200,200);
//     newWindow.focus();
// }

// document.getElementById('opbtn').addEventListener('click', opnWindow, false);
// document.getElementById('mw').addEventListener('click', mvWin, false);

// var newWindow;
// function opnWindow(){
//     newWindow = window.open('','_blank','height=300,width=400');
// }

// function rsizeWin(){
//     newWindow.resizeBy(200,200);
//     newWindow.focus();
// }

// document.getElementById('obtn').addEventListener('click', opnWindow, false);
// document.getElementById('rsize').addEventListener('click', rsizeWin, false);

// var newWindow;
// function opnWindow(){
//     newWindow = window.open('','_blank','height=300,width=400');
// }

// function rsizeWin(){
//     newWindow.resizeTo(200,200);
//     newWindow.focus();
// }

// document.getElementById('opwbtn').addEventListener('click', opnWindow, false);
// document.getElementById('r1size').addEventListener('click', rsizeWin, false);

// function scrollTWin(){
//     // window.scrollBy({top: -20, behavior: 'smooth'})
//     window.scrollBy({top: -20, behavior: 'instant'})
//     // window.scrollBy(0, 20);
// }

// function scrollDWin(){
//     window.scrollBy(0, -20);
// }

// function scrollLWin(){
//     window.scrollBy(20, 0);
// }

// function scrollRWin(){
//     window.scrollBy(-20, 0);
// }

// document.getElementById('mybn1').addEventListener('click', scrollTWin);
// document.getElementById('myb2').addEventListener('click', scrollDWin);
// document.getElementById('myb3').addEventListener('click', scrollLWin);
// document.getElementById('myb4').addEventListener('click', scrollRWin);

// function scrollTWin(){
//     // window.scrollBy({top: -20, behavior: 'smooth'})
//     // window.scrollBy({top: -20, behavior: 'instant'})
//     window.scrollTo(0, 0);
// }

// function scrollDWin(){
//     window.scrollTo(0, 20);
// }

// function scrollLWin(){
//     window.scrollTo(-20, 0);
// }

// function scrollRWin(){
//     window.scrollTo(20, 0);
// }

// document.getElementById('mybtn1').addEventListener('click', scrollTWin);
// document.getElementById('mybtn2').addEventListener('click', scrollDWin);
// document.getElementById('mybtn3').addEventListener('click', scrollLWin);
// document.getElementById('mybtn4').addEventListener('click', scrollRWin);


// function changeColor(){
//     document.getElementById('setT').style.backgroundColor = 'yellow';
// }

// setTimeout(changeColor, 5000);

// setTimeout(() => {
    
// }, timeout);


// var timeoutID = setTimeout(() => {
//     document.getElementById('setT').style.backgroundColor = 'blue';
//     }, 5000);

// function clrTime(){
//     clearTimeout(timeoutID);
// }

// document.getElementById('bt1').addEventListener('click', clrTime);


// setInterval(function(){
//     document.getElementById('setI').textContent += 'hello';
// }, 2000);


// intervalID = setInterval(function(){
//     document.getElementById('setI').textContent += ' hello';
//  }, 2000);

//  function clrInt(){
//      clearInterval(intervalID);
//  }

//  document.getElementById('clI').addEventListener('click', clrInt);


// function win(){
//     document.getElementById('setI').textContent = 'hello window';
// }

// window.addEventListener('load', win);


// var form1 = document.forms[0];
// var form2 = document.forms[1];
// console.log(form1); // It will returns form1
// console.log(form2); // It will returns form2

// with name attribute using square bracket

// var form1 = document.forms['form1'];
// var form2 = document.forms['form2'];
// console.log(form1); // It will returns form1
// console.log(form2); // It will returns form2

// with name attribute using dot 

// var form1 = document.form1;
// var form2 = document.form2;
// console.log(form1); // It will returns form1
// console.log(form2); // It will returns form2

// getElementById method

// var form1  = document.getElementById('fm1');
// var form2  = document.getElementById('fm2');
// console.log(form1);
// console.log(form2);

/* <strong>Accessing form fields in JAVASCRIPT</strong>

- If form field has unique Id then we can access it using getElementById method.  */
// - elements[] - It contains collection of elements.

// Syntax :- document.form_name.elements[index_number];
// document.form_name.elements['name_attribute_value'];
// document.form_name.name_attribute_value;
// document.form_name.ID_attribute_value;

// - getElementsByName('field_name') - this method is also used to access form field. 

// var usrname = document.getElementById('usr1');
// console.log(usrname.type);
// console.log(usrname.name);
// console.log(usrname.id);

// // with element [indexNumber]
// var username = document.form1.elements[0];
// console.log(username);
// console.log(username.name);
// console.log(username.type);

// with name attribute value 
// var username = document.form1.elements['username1'];
// username.value = 'Rohit';
// console.log(username);
// console.log(username.value);

// // with name attribute
// var username = document.form1.username1;

// // with name attribute value
// var username = document.form1.elements['username1'];

// // with id attribute
// var username = document.form1.usr1;


// function validateData(){
//     var ptrn = /^([^0-9\W]*)$/;
//     if(ptrn.test(document.myform.usr.value)){
//         document.getElementById('u1').textContent = 'User is valid';
//         document.getElementById('u1').style.color = 'green';
//     }else{
//         document.getElementById('u1').textContent = 'User is Invalid, enter only alphabate';
//         document.getElementById('u1').style.color = 'red';
//     }
// }
// document.myform.usr.addEventListener('keyup', validateData);

// document.cookie = 'username=sarita';

// document.cookie = 'username=sarita; max-age=' + 60*60*24*10;

// document.cookie = 'username=sarita; expires=Monday, 3-Sep-2021 09:00:00 UTC';


// document.cookie = 'username = sarita';
// document.cookie = 'userId = sarita';

// function setCookie(){
//     document.cookie = 'name=' + document.myfm.name.value;
//     document.cookie = 'email=' + document.myfm.email.value;
//     document.cookie = 'language=' + document.myfm.lang.value;
// }

// // name=rahul; email=rahul@gmail.com; language=hindi

// function getCookie(){
//     var cookieArray = document.cookie.split(';');
//     for(i=0; i<cookieArray.length; i++){
//         // console.log(cookieArray[i]); 
//         var valueArray = cookieArray[i].split('=');
//         console.log(valueArray);
//         if(valueArray[0].trim()=='name'){
//             document.myfm.name.value = valueArray[1];
//         }
//         else if(valueArray[0].trim() == 'email'){
//             document.myfm.email.value = valueArray[1];
//         }
//         else if(valueArray[0].trim() == 'language'){
//             document.myfm.lang.value = valueArray[1];
//         }
//     }
// }

// window.localStorage.setItem('username','sarita');
// window.localStorage.setItem('email','s@gmail.com');
// console.log(localStorage);
// console.log(localStorage.length);

// console.log(localStorage.getItem('username'));
// console.log(localStorage.key(0));

// console.log(localStorage.removeItem('username'));
// localStorage.clear();
// console.log(localStorage);


// sessionStorage.setItem('username','sarita');
// console.log(sessionStorage); 

// console.log(sessionStorage.length);

// console.log(sessionStorage.getItem('username'));

// console.log(sessionStorage.key(0));

// sessionStorage.removeItem('username');
// console.log(sessionStorage); 

// try{
//     write();
//     console.log('skipped code');
// }
// catch(e){
//     console.log('message: ' + e.message );
//     console.log('name: ' + e.name );
//     console.log('stack: ' + e.stack );
// }

// try{
//     add();
// }
// catch(e){
//     console.log('your function is not defined');
// }

// try{
//     add();
// }
// catch(e){
//     console.log('your function is not defined');
// }
// finally{
//     console.log('this block of code is executed whether exception or not');
// }

// function getRectArea(w,h){
//     if (isNaN(w) || isNaN(h)){
//         throw 'Parameter is not a number';
//     }
// }

// try{
//     getRectArea(10,20);
// }
// catch(e){
//     console.log(e);
// }
// console.log('I have no idea what is happening above ');

// console.dir(navigator);
// console.log(navigator.userAgent);
// console.log(navigator.cookieEnabled)

// if(navigator.cookieEnabled){
//     console.log('cookie is enabled');
// }else{
//     console.log('cookie is disabled');
// }


// function geeky(callback){
//     var a = 10;
//     callback();
// }
// geeky(() => {
//     console.log('I am show function ');
//     console.log('we are using arrow function');
// });    


// var arr = [10,20,30,40,50];
// var newArr = arr.map(function(value, index){
//     value++;
//     console.log(value);
//     // console.log(index);
// })

// var arr = [
//     {price:'100', product:'Mobile'},
//     {price:'300', product:'Mic'},
//     {price:'200', product:'pc'}
//     ];
//     var newArr = arr.map(value => value.price); // return value.price 
//     console.log(newArr);

// var a = ['java', 'six', 'geeky'];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

// var [courseName, duration, tutor] = a;
// console.log(courseName);
// console.log(duration);
// console.log(tutor);

// var [courseName,,tutor] = a;
// console.log(courseName);
// console.log(tutor);

// var arr = [10, 20, 30];

// function show(v1, v2, v3){
//     console.log(v1);
//     console.log(v2);
//     console.log(v3);
// }

// show(arr);

// var arr = [10,20,30];
// function show([value1, value2, value3]){
//     console.log(value1); // 10
//     console.log(value2); // 20 
//     console.log(value3); // 30
// }
// show(arr);


// var arr = [10,20,30,40,50,60];
// function show([value1, value2, ...rest]){
//     console.log(value1); // 10
//     console.log(value2); // 20 
//     console.log(rest); // 30
// }
// show(arr);

// var arr = [10, 20, 30];

// function show(z){
//     return z;
// }

// var x = show(arr);
// [v1, v2, v3] = x;
// console.log(v1);
// console.log(v2);
// console.log(v3);


// var a = [10,20,30,['rahul','riya']];

// var [v1, v2, v3, [stu,stu1]] = a;
// console.log(v1);
// console.log(v2);
// console.log(v3);
// console.log(stu);
// console.log(stu1);

// var course = {
//     name:'java',
//     duration:'6',
//     tutor:'sarita'
// };

// var {name, duration, tutor} = course;
// console.log(name);
// console.log(duration);
// console.log(tutor);



// var course = {
//     name:'java',
//     duration:'6',
//     tutor:'sarita'
// };

// function show(z){
//     return z
// }

// var {name,tutor} = show(course);
// console.log(name);
// console.log(tutor);


// var course = {
//     name:'java',
//     duration:'6',
//     tutor:'sarita',
//     student:{
//         stu1:'Rahul',
//         stu2:'sarita'
//     }
// };

// var course = {
//     name:'java',
//     duration:'6',
//     tutor:'sarita',
//     student:{
//         stu1:'Rahul',
//         stu2:'sarita'
//     }
// };

// var {name,duration,tutor,student:{stu1,stu2}} = course;
// console.log(name);
// console.log(duration);
// console.log(tutor);
// console.log(stu1);
// console.log(stu2);


// console.log('start');

// function getName(name, callback){
//     setTimeout(()=>{
//         console.log("Inside set time out");
//         callback(name);
//     },2000 );
// };

// getName('sarita', (nm)=>{console.log(nm)});
// console.log('end');


// console.log('start');

// function getName(name, callback){
//     setTimeout(()=>{
//         console.log("Inside set time out");
//         callback(name);
//     },2000 );
// };

// function getHobbies(name, callback){
//     setTimeout(()=> {
//         console.log('Inside hobby');
//         callback(['cricket','dance','reading']);
//     },2000);
// };
// getName('sarita', (nm)=>{
//     console.log(nm);
//     getHobbies(nm, (hobby)=>{console.log(hobby)});
// });
// console.log('end');

// const promiseObj = new Promise((resolve, reject)=>{
//     let req = true;
//     if (req==true){
//         resolve('Request success');
//     }else{
//         reject('Request Rejected');
//     }
// });

// promiseObj.then(
//     (value)=>{
//         console.log(value);
//     },
//     (error)=>{
//         console.log(error);
//     }
// );

// var promiseObj = new Promise((resolve, reject)=>{
//     let req = false;
//     if(req==true){
//         resolve('reuest success');
//     }else{
//         reject('Request Rejected');
//     }
// });

// promiseObj.then(
//     (value)=>{
//         console.log(value);
//     },
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// )


// const promiseObj = new Promise((resolve, reject)=>{
//     let num = 10;
//     resolve(num);
// }).then(
//     (value)=>{
//         console.log(value);
//         return value+10;
// }).then(
//     (value)=>{
//         console.log(value);
// });

// var promiseObj = new Promise((resolve, reject)=>{
//     let req = true;
//     if(req == true){
//         resolve('Request success');
//     }else{
//         reject('request rejected');
//     }
// }).then(
//     (value)=>{
//         console.log(value);
//     }
// ).catch(
//     (error)=>{
//         console.log(error);
//     }
// ).finally(()=>{
//     console.log('Finally executed');
// // })

// console.log('start');

function getName(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Inside set time out');
            resolve(name);
        }, 2000);
    })
}

function getHobbies(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('Inside hobby function');
            resolve(['cricket','dancing']);
        }, 1000);
    })
}

// getName('sarita')
// .then(nm=>getHobbies(nm))
// .then(hobby=>console.log(hobby))

// console.log('End')

// async function showHobby(){
//     const nm = await getName('sonam')
//     const hobby = await getHobbies(nm);
//     console.log(hobby)
// }

// showHobby();
// console.log('end');

