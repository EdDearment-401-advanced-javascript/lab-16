'use strict';

const fs = require('fs');
const reader = require('./fileHandler/readFile');
const toUp = require('./fileHandler/toUpper');
const write = require('./fileHandler/writeFile');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { throw err; }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { throw err; }
      console.log(`${file} saved`);
    });
  });
};
//function alterfile
//function readFile
//after reading emit file for writing 
//function writeFile
let file = process.argv.slice(2).shift();
alterFile(file);
