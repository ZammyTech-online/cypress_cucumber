require('cypress-xpath');

// Comando personalizado para texto visible y tipeo
Cypress.Commands.add("Texto_visible", (selector, texto, t) => { 
    cy.get(selector, { timeout: 20000 }).should('be.visible').type(texto);
    cy.wait(t);
});

// Comando para hacer clic en un botón usando XPath
Cypress.Commands.add("ClickBotonSubmit", (selector, tiempoEspera) => { 
    cy.xpath(selector, { timeout: 10000 }).should('be.visible').click();
    cy.wait(tiempoEspera);
});

// Comando para visitar una página web
Cypress.Commands.add("VisitarWeb", (url, tiempoEspera) => { 
    cy.visit(url);
    cy.wait(tiempoEspera);
});

// Comando para buscar un elemento por ID, escribir y enviar
Cypress.Commands.add("BuscarYEnviar", (id, texto, tiempoEspera) => {
    cy.get(`#${id}`, { timeout: 10000 }).should('be.visible').type(texto).wait(tiempoEspera).type('{enter}');
});

// Agrega más comandos según los necesites
