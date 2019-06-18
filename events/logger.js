'use strict';

const events = require('./emit');
/**
 * 
 * @param {Object} event
 * @desc A logger emitter 
 */
function log(event) {
  let time = new Date();
  console.log({event, time});
}
events.on('log', log);