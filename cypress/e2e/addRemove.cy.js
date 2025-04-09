describe('Add/Remove Elements functionality', () => {
  beforeEach(() => {
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    cy.visit('/add_remove_elements/');
  });

  it('add/remove elements', () => {
    // Hacer clic dos veces en "Add Element" usando el comando personalizado
    cy.clickAddElement();
    cy.clickAddElement();

    // Verificar que ambos botones "Delete" sean visibles
    cy.get('button') // Selecciona todos los botones
      .filter(':contains("Delete")') // Filtra los que contienen el texto "Delete"
      .should('have.length', 2) // Verifica que hay exactamente 2 botones
      .and('be.visible'); // Verifica que ambos sean visibles

      cy.clickDelete();
      cy.get('button')
      .filter(':contains("Delete")') // Filtra los que contienen el texto "Delete"
      .should('have.length', 1) // Verifica que hay exactamente 2 botones
      cy.clickDelete();

      cy.get('button')
      .filter(':contains("Delete")') // Filtra los que contienen el texto "Delete"
      .should('not.exist')

      cy.get('button')
      .should('have.length', 1) // Verifica que hay exactamente 1 boton
  });


});


