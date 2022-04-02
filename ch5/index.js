// URL module

import {URL} from 'url';

const myURL = new URL('https://engmyworld.blogspot.com:8080/p/a/t/h/?query=string#hash')

console.log(myURL.hash)
console.log(myURL.host)
console.log(myURL.hostname)
console.log(myURL.href)
console.log(myURL.pathname)
console.log(myURL.password)
console.log(myURL.port)
console.log(myURL.protocol)
console.log(myURL.search)
console.log(myURL.searchParams)
console.log(myURL.toString())
console.log(myURL.toJSON())