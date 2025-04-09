//"estamos comprobando el funcionamiento de"
describe('Checkboxes', () => {
    beforeEach(()=> {
        cy.visit('/checkboxes')
    })
        //"esto deberia"
    it('should check the checkboxes functionality', () => {
        cy.contains('h3', 'Checkboxes')
        .should("be.visible")

    // Verificar que el primer checkbox esté desactivado (no marcado)
    cy
        .get('input')
        .eq(0)
        .as('input0')
        .check()

    cy 
        .get('@input0')
        .should('be.checked')
    


    cy
        .get('input')
        .eq(1)
        .as('input1')
        .uncheck()
        
    cy
        .get('@input1')
        .should('not.be.checked')

    })
})