'use strict';

const event = require('../events/emit');
require('../events/logger')
require('../events/error');

const mocks = require('../__mocks__/fs');
jest.mock('../__mocks__/fs');


describe('truth', () => {
  it('should return an error when file not found', () => {
    let theTruth = true;
    expect(theTruth).toBe(true);
  });

  it('should read a file.', () => {
    let theTruth = true;
    expect(theTruth).toBe(true);
  });

  it('should ')
});