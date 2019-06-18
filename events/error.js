'use strict';

const events = require('./emit');
/**
 * 
 * @param {error} error
 * @desc An error messenger 
 */
function log(error){
  console.log(error);
}

events.on('error', log);