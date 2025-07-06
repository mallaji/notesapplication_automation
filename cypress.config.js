require('dotenv').config();
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://practice.expandtesting.com',
    supportFile: 'cypress/support/commands.js',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Test Report',
    embeddedScreenshots: true,
    inlineAssets: true
  },
  projectId: 'your_project_id_here' // Get this from Cypress Dashboard
}
);

/* # Run all tests
npx cypress run

# Or specific categories
npx cypress run --spec "cypress/e2e/smoke/*.cy.js"
npx cypress run --spec "cypress/e2e/regression/*.cy.js"*/