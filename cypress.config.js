const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // won't run tests when changes are made
    watchForFileChanges: false,
    // setting initial timeout to 3 seconds
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
