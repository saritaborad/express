// File system - Callback API


import { error } from 'console'
import * as fs from 'fs'

// Creating directory -path should be there
// fs.mkdir('//home//jalpesh//nodejs//ch1//demo',{recursive:true}, (error) => {
// if(error) throw error;
// console.log('Directory Created')
// })

// Read content of directory

// fs.readdir('//home//jalpesh//nodejs//ch1//demo',(error,files)=>{
//     if(error) throw error;
//     for(const file of files){
//         console.log(file);
//     }
// })

// remove directory -should be empty
// fs.rmdir('//home//jalpesh//nodejs//ch1//demo',(error)=>{
//     if(error) throw error;
//     console.log('Directory removed')
// })

// fs.rmdir('//home//jalpesh//nodejs//ch1//demo',(error)=>{
//     if(error) throw error;
//     console.log('Directory removed')
// })


// Create and Write file
// fs.writeFile('readme.txt','Hello everyone',(error)=>{
//     if(error) throw error;
//     console.log('write in file')
// })

// fs.writeFile('//home//jalpesh//nodejs//ch1//demo',(error)=>{
//     if(error) throw error;
//     console.log('write in file')
// })


// Read file
// fs.readFile('readme.txt',(error, data)=>{
//      if(error) throw error;
//      console.log(data)
// })

//  

// fs.appendFile('readme.txt','Geeky Show',(error)=>{
//          if(error) throw error;
//          console.log('DATA APPEND')
//     })

// COPY file

// fs.copyFile('readme.txt','info.txt',(error)=>{
//     if(error)throw error;
//     console.log('File copied ')
// })

// Get INFO

// fs.stat('//home//jalpesh//nodejs//ch1//demo//info.txt',(error,data)=>{
//     if(error) throw error;
//     console.log(data.isDirectory())
//     console.log(data.isFile())
//     console.log(data)
// })