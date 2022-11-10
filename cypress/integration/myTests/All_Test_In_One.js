describe('Test', () => {
    const password = Cypress.env('password')

    it('Shopping_cart', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type(password);
        cy.get('#login-button').click();

        cy.contains('.inventory_item', 'Sauce Labs Fleece Jacket').contains('Add to cart').click()
        cy.wait(2000)

        cy.get('.shopping_cart_badge').click()
        cy.wait(2000)
        cy.get('[data-test="checkout"]').click()
        cy.wait(1000)
        cy.get('[data-test="firstName"]').type('ABC')
        cy.get('[data-test="lastName"]').type('XYZ')
        cy.get('[data-test="postalCode"]').type('1001')
        cy.wait(1000)
        cy.get('[data-test="continue"]').click()
        cy.wait(2000)
        cy.get('[data-test="finish"]').click()
        cy.wait(2000)
        cy.get('[data-test="back-to-products"]').click()
        cy.wait(2000)
        cy.get('#react-burger-menu-btn').click()
        cy.wait(1000)
        cy.get('#logout_sidebar_link').click()
    })

})

