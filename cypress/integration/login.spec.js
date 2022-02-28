/// <reference types="cypress" />
describe('login test', () => {
    it('visit gallery page', () => {
        cy.visit('/');
    });


it('click on the login button' , () => {
    cy.visit("/");
    cy.get('a[href="/login"]').click();
    // cy.get('.nav-link').eq(1).click();
    cy.get('#email').type('md@gmail.com');
    cy.get('#password').type('test1234');
    cy.get('button').click();
    //logout
    //cy.wait(1000);
   
});

it('logout',() => {
    cy.get('.nav-link').should('have.length', 4);
    cy.get('.nav-link').eq(3).click();
})

});