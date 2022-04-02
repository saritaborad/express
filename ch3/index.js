// File System - Synchronous API
import * as fs from 'fs'

// Creating Directory - path is required
// fs.mkdirSync('//home//jalpesh//nodejs//ch1//demo//test')

// Creating Directory - path is not required
// fs.mkdirSync('//home//jalpesh//nodejs//ch1//demo//test',{recursive:true })


// Read content of directory
// const files = fs.readdirSync('//home//jalpesh//nodejs//ch1//demo')
// for (const file of files)
//     console.log(file)


// remove file
//  fs.rmdirSync('//home//jalpesh//nodejs//ch1//demo',{recursive:true})

// Create and write file
// fs.writeFileSync('info.txt','your bro is fool')


// Read file
// const data = fs.readFileSync('info.txt')
// console.log(data)

// const data = fs.readFileSync('info.txt','utf-8')
// console.log(data)

//  fs.appendFileSync('info.txt','YOUR SIS IS ALSO FOOL')

// Copy file
// fs.copyFileSync('info.txt','readme.txt')

//  Get info

// const data = fs.statSync('//home//jalpesh//nodejs//ch2//demo')
// console.log(data.isFile)
// console.log(data.isDirectory)
// console.log(data)

