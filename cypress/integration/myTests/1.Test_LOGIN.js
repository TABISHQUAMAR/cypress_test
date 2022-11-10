describe('Test', () => {
    const password = Cypress.env('password')

    it('Login', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type(password);
        cy.get('#login-button').click();
    })

})

