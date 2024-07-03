// eslint-disable-next-line no-undef
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '\\.(gif|ttf|eot|svg|jpg|jpeg|png)$': '<rootDir>/src/__mocks__/fileMock.js',
    },
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };
  