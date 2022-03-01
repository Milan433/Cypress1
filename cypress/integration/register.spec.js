/// <reference types="cypress" />

describe('login test', () => {
    it('visit gallery page', () => {
        cy.visit('/');
    });
});


it('click on the register button', () => {
    cy.visit("/");
    cy.get('.nav-link').eq(2).click();
    cy.get('#first-name').type('nikola');
    cy.get('#last-name').type('nikolic');
    cy.get('#email').type('nikola@nikolic.com');
    cy.get('#password').type('nikola1234');
    cy.get('#password-confirmation').type('nikola1234');
    cy.get('.form-check-input').click();
    cy.get('button').click();

});
