class TransferenciasPuntualesPage {
    elements = {
      transferMenu: () => cy.get('p.text-nav.link-active:contains("Transferencias")'), // Selector del menú de transferencias
      accederNuevaTransferencia: () => cy.get('div.icon-wrap img[src*="transfers"] + div.marked:contains("Acceder")'), // Selector del botón de acceder a nueva transferencia
    };
  
    clickTransferMenu() {
      this.elements.transferMenu().click();
    }
  
    clickAccederNuevaTransferencia() {
      this.elements.accederNuevaTransferencia().click();
    }
  }
  
  export const transferenciasPuntualesPage = new TransferenciasPuntualesPage();
  