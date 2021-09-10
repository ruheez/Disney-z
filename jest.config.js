module.exports = {
  verbose: true,
  moduleFileExtensions: [
    "js",
    "json",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  testURL: "http://localhost:8080/",
  testEnvironment: "jsdom",
  setupFiles: ['<rootDir>/.jest/register-context.js'],
  transformIgnorePatterns: [
    "node_modules/(?!jest-runtime/)"
  ],
  transform: {
    // process `*.js` files with `babel-jest`
    ".*\\.(js)$": "babel-jest",
    ".*\\.(vue)$": "vue-jest"
  }
}