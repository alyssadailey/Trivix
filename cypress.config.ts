import { defineConfig } from "cypress";
import  viteConfig  from "./vite.config"; // Adjust the path as necessary

export default defineConfig({
  component: {
    port: 3001,
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
    indexHtmlFile: 'client/index.html',
  },

  e2e: {
    baseUrl: 'http://localhost:3001',
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
    },
  },
});