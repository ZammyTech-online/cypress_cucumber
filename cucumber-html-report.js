const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "jsonlogs", // Ruta a los logs JSON generados por Cucumber
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: "Windows",
      version: "11",
    },
  },
});

