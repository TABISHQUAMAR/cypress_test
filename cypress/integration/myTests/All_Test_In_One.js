describe('Test', () => {
    const password = Cypress.env('password')

    it('Shopping_cart', () => {
        cy.visit("https://www.saucedemo.com");
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type(password);
        cy.get('#login-button').click();

        cy.wait(2000)
        cy.get('[data-test="product_sort_container"]').select('Name (Z to A)') 
        cy.get('[data-test="product_sort_container"]').should('have.value', 'za')
        cy.log('Products sorted Z to A')

        cy.wait(2000)
        cy.get('[data-test="product_sort_container"]').select('Price (high to low)')
        cy.get('[data-test="product_sort_container"]').should('have.value', 'hilo')
        cy.log('Products sorted on price High to Low')
        cy.wait(2000)

        cy.contains('.inventory_item', 'Sauce Labs Fleece Jacket').contains('Add to cart').click()
        cy.wait(2000)

        cy.get('.shopping_cart_badge').click()
        cy.get('.shopping_cart_badge').should('contain',1)
        cy.wait(2000)

        cy.get('[data-test="continue-shopping"]').click()
        cy.wait(2000)

        cy.contains('.inventory_item', 'Sauce Labs Bike Light').contains('Add to cart').click()
        cy.get('.shopping_cart_badge').should('contain',2)
        cy.wait(2000)

        cy.get('.shopping_cart_badge').click()
        cy.wait(2000)

        cy.get('.inventory_item_name').should('contain.text','Sauce Labs Fleece Jacket')
        cy.get('.inventory_item_name').should('contain.text','Sauce Labs Bike Light')

        cy.get('[data-test="checkout"]').click()
        cy.wait(1000)
        cy.get('[data-test="firstName"]').type('ABC')
        cy.get('[data-test="lastName"]').type('XYZ')
        cy.get('[data-test="postalCode"]').type('1001')

        cy.get("input[name=firstName]").should('have.value', 'ABC')
        cy.get("input[name=lastName]").should('have.value', 'XYZ')
        cy.get("input[name=postalCode]").should('have.value', '1001')
        
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

