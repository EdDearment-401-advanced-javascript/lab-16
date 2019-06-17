'use strict'; 

const fs = require('fs');

const reader = async (file) => {
  fs.readFile(file, (err, data) =>{
    if(err) {throw err;}
  })
}

module.exports = reader;

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };