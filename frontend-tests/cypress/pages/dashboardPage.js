/// <reference types="cypress" />

//elements

const overviewLayer = '#app'
const overviewblock = '.blocks'
const roomBlock2 = '.blocks > :nth-child(1)'
const viewButton = ':nth-child(1) > .btn'
const billBlock = '.blocks > :nth-child(3)'
const billButton = ':nth-child(3) > .btn'
const createButton = 'h2 > .btn'
const billLayer = '#app > :nth-child(2)'
const billpriceValuefield = 'input'
const billpaidBox = '.checkbox'
const billsaveButton = '.blue'
const loginoutButton = '.user > .btn'

//Actions/functions
function confirmUse(cy){
    cy.contains('Tester Hotel Overview')
    cy.get('.username').should('have.text','Welcome tester01!')
}
function roomsView(cy){
    cy.get(overviewLayer)
    cy.get(overviewblock)
    cy.get(roomBlock2)
    cy.get(viewButton).click()
}

function billView(cy){
    cy.get(overviewLayer)
    cy.get(overviewblock)
    cy.get(billBlock)
    cy.get(billButton).click()
}

function creareBill(cy){
    cy.get(overviewLayer)
    cy.get(overviewblock)
    cy.get(billBlock)
    cy.get(billButton).click()
    cy.contains('Bills')
    cy.get(createButton).click()
    cy.get(overviewLayer)
    cy.get(billLayer)
    cy.get(billpriceValuefield ).type('5000')
    cy.get(billpaidBox).click()
    cy.get(billsaveButton).click()
}

function confirmBill(cy){
    cy.get(overviewLayer)
    cy.get(overviewblock)
    cy.get(billBlock)
    cy.get(':nth-child(3) > :nth-child(2)').should('have.text','Total: 1 (5000kr)')
}

function loginOut(cy){
    cy.get(loginoutButton).click() 
}
//exports
module.exports = {
    confirmUse,
    roomsView,
    billView,
    creareBill,
    confirmBill,
    loginOut
}