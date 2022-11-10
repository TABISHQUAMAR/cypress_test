describe('Test', () => {
    const password = Cypress.env('password')

    it('Add_to_cart', () => {
        cy.visit("https://www.saucedemo.com")
        cy.get('#user-name').type("standard_user")
        cy.get('#password').type(password)
        cy.get('#login-button').click()

        cy.contains('.inventory_item', 'Sauce Labs Fleece Jacket').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain',1)
        cy.wait(2000)

        cy.get('.shopping_cart_badge').click()
        cy.wait(2000)

        cy.get('[data-test="continue-shopping"]').click()
        cy.wait(2000)

        cy.contains('.inventory_item', 'Sauce Labs Bike Light').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain',2)
        cy.wait(2000)

        cy.get('.shopping_cart_badge').click()
        cy.wait(2000)
    })

})

