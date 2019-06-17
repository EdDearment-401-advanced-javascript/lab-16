'use strict'; 

const fs = require('fs');

const writer = async (file) => {
  fs.writeFile(file,Buffer.from(text), (err,data) => {
    if(err) {throw err;}
    console.log(`${file} saved`);
  });
};

module.exports = writer;


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