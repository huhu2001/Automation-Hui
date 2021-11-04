/// <reference types="cypress" />


//elements
const loginText = 'h2'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'



//Actions/functions
function loginUse(cy){
    cy.get(loginText).should('have.text', 'Login')
    cy.get(usernameTextfield).type('tester01')
    cy.get(passwordTextfield).type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get(loginButton).click()
}



//exports
module.exports = {
    loginUse
}
