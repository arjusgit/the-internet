describe('Note App', () => {
    beforeEach(() => {
        cy.visit('/broken_images')
    }
    )

    it('broken images', () => {
        cy.intercept('GET', '/img/avatar-blank.jpg').as('avatar1')
        cy.intercept('GET', '/img/hjkl.jpg').as('avatar2')
        cy.intercept('GET', '/img/asdf.jpg').as('avatar3')
        
        cy.wait('@avatar1')
        .its('response.statusCode')
        .should('not.eq',404)
                            
    })

    })
