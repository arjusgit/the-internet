describe('Challenging DOM', () => {
    beforeEach(()=> {
        cy.visit('/challenging_dom')
    })
    it('should interact with the challenging DOM elements', () => {
        // Test implementation goes here

        cy.get('.button').not('.alert, .success')
        cy.get('.button').filter('.alert')
        cy.get('.button').filter('.success')
    });

    it()
});