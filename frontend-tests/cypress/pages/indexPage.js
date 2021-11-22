/// <reference types="cypress" />

const targets = require("../targets/targets")


//elements
const loginText = 'h2'
const usernameTextfield = ':nth-child(1) > input'
const passwordTextfield = ':nth-child(2) > input'
const loginButton = '.btn'



//Actions/functions
function loginUse(cy){
    cy.get(loginText).should('have.text', 'Login')
    cy.get(usernameTextfield).type(targets.username)
    cy.get(passwordTextfield).type(targets.password)
    cy.get(loginButton).click()
}



//exports
module.exports = {
    loginUse
}
