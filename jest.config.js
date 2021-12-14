module.exports = {
  setupFilesAfterEnv: [
    './jest.setup.js',
    'given2/setup.js',
    'jest-plugin-context/setup.js',
  ],
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
  testEnvironment: 'jsdom',
};
