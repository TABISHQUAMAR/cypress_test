describe('Test', () => {
    const password = Cypress.env('password')

    it('Shopping_cart', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type(password);
        cy.get('#login-button').click();
    })
    
    it('Sort_Items', () => {
        cy.wait(2000)
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)') 
        cy.get('[data-test="product_sort_container"]').should('have.value', 'za')
        cy.log('Products sorted Z to A')

        cy.wait(2000)
        cy.get('[data-test="product_sort_container"]').select('Price (high to low)')
        cy.get('[data-test="product_sort_container"]').should('have.value', 'hilo')
        cy.log('Products sorted on price High to Low')
        cy.wait(2000)
    
    })

})

