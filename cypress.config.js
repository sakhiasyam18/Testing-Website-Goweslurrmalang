const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // INI KUNCI AGAR TIDAK DI-BLOKIR SERVER (403):
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",

    // Ini tambahan agar Cypress lebih santai soal keamanan web
    chromeWebSecurity: false,
  },
});
