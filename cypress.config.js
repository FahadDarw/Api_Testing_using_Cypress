// cypress.config.js
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://gorest.co.in/public/v2/users",
    bearerRest: "bff2a5bcf68198c1cee45c0db8a3a5b713b11bab0f46e24d458730444e620b10",
    URL2: "https://gorest.co.in/public/v2/posts/",
    URL3: "https://pokeapi.co/api/v2/pokemon/",
    URL4: "https://gorest.co.in/public/v2/graphql",
    video: false,
    screenshotsFolder: "cypress/screenshots",
    reporter: "junit",
    reporterOptions: {
      mochaFile: "cypress/results/test-results-[hash].xml",
      toConsole: true,
    }
  }
})
