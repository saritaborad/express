// File system - promise API

import * as fs from 'fs/promises';

// creating directory - path should be there

// try {
//     await fs.mkdir('//home//jalpesh//nodejs//ch1//demo')
//     console.log('directory created')
// } catch (error) {
//     console.log(error)
// }


// creating directory - path should not be there

// try {
//     await fs.mkdir('//home//jalpesh//nodejs//ch1//demo//test',{recursive:true})
//     console.log('directory created')
// } catch (error) {
//     console.log(error)
// }



// Read content of directory

// try {
//      const files = await fs.readdir('//home//jalpesh//nodejs//ch1//demo//')
//      for(const file of files){
//          console.log(file)
//      }
// } catch (error) {
//     console.log(error)
// }

// Remove directory - Directory should be empty

// try {
//     await fs.rmdir('//home//jalpesh//nodejs//ch1//demo')
//     console.log('Directory Removed')
// } catch (error) {
//     console.log(error)
// }

// Create and Write file
// try {
//     await fs.writeFile('readme.txt','Hello Node JS')
// } catch (error) {
//     console.log(error)
// }

// Read file - Buffer Data
// try {
//     const data = await fs.readFile('readme.txt')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }


// Actual data in text formate
// try { 
//     const data = await fs.readFile('readme.txt','utf-8')
//     console.log(data)
// } catch (error) {
//     console.log(error)
// }


// Append data into files
// try {
//     await fs.appendFile('readme.txt',' Hello Geeky shows')
// } catch (error) {
//     console.log(error)
// }

// Copy file
// try {
//     await fs.copyFile('readme.txt','//home//jalpesh//nodejs//ch1//demo//info.txt')
//     console.log('File copied')
// } catch (error) {
//     console.log(error)
// }


// try {
//     await fs.copyFile('readme.txt','info.txt')
// } catch (error) {
//     console.log(error)
// }


// Get file information

try {
   const states =  await fs.stat('//home//jalpesh//nodejs//ch1//demo//info.txt')
   console.log(states.isDirectory());
   console.log(states.isFile());
   console.log(states);

} catch (error) {
    console.log(error)
}