const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // Integrar el preprocesador de Cucumber
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  // Configurar Esbuild para procesar los archivos .feature
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Configurar Allure para reportes
  allureWriter(on, config);

  // Configurar el plugin de Mochawesome
  require("cypress-mochawesome-reporter/plugin")(on);

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://www.saucedemo.com",
    chromeWebSecurity: false,
    video: false,
    reporter: "cypress-multi-reporters", // Usar múltiples reportes
    reporterOptions: {
      reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter", // Mochawesome y JUnit
      cypressMochawesomeReporterReporterOptions: {
        reportDir: "cypress/reports/mochawesome",
        overwrite: false,
        html: true,
        json: true,
        charts: true,
      },
      mochaJunitReporterReporterOptions: { // Referencia correcta para mocha-junit-reporter
        mochaFile: "cypress/reports/junit/results-[hash].xml",
        toConsole: true, // Opcional: Mostrar resultados en consola
      },
    },
    env: {
      allureReuseAfterSpec: true,
    },
  },
});
