module.exports = {
    testEnvironment: 'jest-environment-jsdom', 
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy', 
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/__mocks__/fileMock.js', 
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], 
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest', 
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], 
  };
  
