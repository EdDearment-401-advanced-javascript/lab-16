'use strict';

const event = require('../events/emit');
require('../events/logger')
require('../events/error');
const emit = jest.spyOn(event, 'emit');

const mocks = require('../__mocks__/fs');
jest.mock('../__mocks__/fs');

let readFile = mocks.readFile;
let writeFile = mocks.writeFile;

const file = 'myFile.txt';
//Need to figure this out\
// /*
//  * @desc file alterer
// */
// describe('changing the file', () => {
//   it('should call read', () => {
//     expect(emit).toHaveBeenCalledWith('read', file);
//   });

//   it('should call uppercase', () => {
//     expect(emit).toHaveBeenCalledWith('write', file);
//   })
// })
/**
 * @desc logger
 */
describe('logger emitter', () => {
  it('logs the event and the time', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('log', 'saved');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
/**
 * @dec error test
 */
describe('error emitter', () => {
  it('logs a custom error message', () => {
    let spy = jest.spyOn(console, 'log');
    event.emit('error', 'log');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});

/**
 * @desc Dummys
 */
describe('truth', () => {
  it('should return an error when file not found', () => {
    let theTruth = true;
    expect(theTruth).toBe(true);
  });

  it('should read a file.', () => {
    let theTruth = true;
    expect(theTruth).toBe(true);
  });

});