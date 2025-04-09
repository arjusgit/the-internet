describe('Basic Auth functionality', () => {
    beforeEach(() => {
      // Centraliza la visita a la página con autenticación básica
      cy.visit('/basic_auth', {
        auth: {
          username: 'admin',
          password: 'admin',
        },
      });
    });




    it('should display the success message', () => {
        // Verificar que el encabezado esté visible
        cy.contains('h3', 'Basic Auth').should('be.visible');

        // Verificar que el mensaje de éxito esté visible
        cy.contains('p', 'Congratulations! You must have the proper credentials.').should('be.visible');
      });
    
      it('should not display an error', () => {
        // Verificar que no haya mensajes de error
        cy.contains('Error').should('not.exist');
      });
  
  
  });