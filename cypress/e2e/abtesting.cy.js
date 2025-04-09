describe('AB/Testing functionality', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    });

    it('should display the correct content based on the test version', () => {
        cy.visit('/abtest');
        
        // Verificar que el elemento <h3> contiene el texto "A/B Test"
        cy.contains('h3', 'A/B Test').should('be.visible');
    });
});