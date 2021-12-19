module.exports = {
  testEnvironment: 'node',
  coverageProvider: 'v8',
  transform: {
    '^.+\\.ls$': 'livescript-jest',
    '^.+\\.(j|t)sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ls', 'ts', 'tsx'],
};
