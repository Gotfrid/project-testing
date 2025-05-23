const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
