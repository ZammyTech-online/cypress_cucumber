const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {
  // Esto es necesario para que el preprocesador pueda generar informes JSON después de cada ejecución
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );
  allureWriter(on, config);

  // Asegúrate de devolver el objeto de configuración ya que podría haber sido modificado por el plugin
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",  // Patrón para encontrar archivos feature
    baseUrl: "https://api-test.iesa.es/tucoban",  // Ajuste de baseUrl a la raíz del sistema
    chromeWebSecurity: false,  // Desactiva la seguridad del navegador para evitar problemas con CORS
    env: {
      allureReuseAfterSpec: true,  // Configuración de Allure para reutilizar el reporte después de cada spec
    },
    defaultCommandTimeout: 10000,  // Incrementa el timeout por defecto para comandos (10 segundos)
    pageLoadTimeout: 60000,  // Incrementa el timeout para cargar la página (60 segundos)
    video: true,  // Habilita la grabación de video para facilitar la depuración de fallos
    retries: {
      runMode: 2,  // Reintenta 2 veces en modo de ejecución si una prueba falla
      openMode: 0,  // No reintenta en modo interactivo (cuando ejecutas en la UI de Cypress)
    },
  },
});
