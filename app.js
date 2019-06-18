'use strict';

const reader = require('./fileHandler/readFile');
const toUp = require('./fileHandler/toUpper');
const writer = require('./fileHandler/writeFile');
const event = require('./events');


const alterFile = file => {
  reader(file)
    .then(data => {
      writer(file, Buffer.from(toUp(data) ) )
    })
    .then(event.emit('log', 'saved'))
    .catch(event.emit('error', log));
}

//function alterfile
//function readFile
//after reading emit file for writing 
//function writeFile
let file = process.argv.slice(2).shift();
alterFile(file);
