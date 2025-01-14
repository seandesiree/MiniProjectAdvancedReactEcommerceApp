import '@testing-library/jest-dom';


global.fetch = jest.fn();
global.sessionStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};