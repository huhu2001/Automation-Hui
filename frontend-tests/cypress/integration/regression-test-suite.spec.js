/// <reference types="cypress" />




before(() => {
  cy.visit("http://localhost:3000")  
})

//this is test suite
describe("Regression test suite",() =>{

  beforeEach(() => {
    cy.get("h2").should("have.text", "Login")
    cy.get(":nth-child(1) > input").type("tester01")
    cy.get(":nth-child(2) > input").type("GteteqbQQgSr88SwNExUQv2ydb7xuf8c")
    cy.get(".btn").click()
  })
  
  afterEach(() => {
    cy.get(".user > .btn").click()  
  })
  
  //this is test case1
   it("confirm use",() => {
    cy.contains("Tester Hotel Overview")
    cy.get(".username").should("have.text","Welcome tester01!")
  })



  //this is test case2
    it("rooms view",() => {
        cy.get('#app')
        cy.get(".blocks")
        cy.get(".blocks > :nth-child(1)")
        cy.get(":nth-child(1) > .btn").click()

    })

  //this is test case3
    it("Bill view",() => {
        cy.get('#app')
        cy.get('.blocks')
        cy.get('.blocks > :nth-child(3)')
        cy.get(':nth-child(3) > .btn').click()
    }) 

  //this is test case4
    it("Create bill",() => {
       cy.get('#app')
       cy.get('.blocks')
       cy.get('.blocks > :nth-child(3)')
       cy.get(':nth-child(3) > .btn').click()
       cy.contains("Bills")
       cy.get("h2 > .btn").click()
       cy.get('#app')
       cy.get("#app > :nth-child(2)")
       cy.get('input').type('5000')
       cy.get(".checkbox").click()
       cy.get(".blue").click()
    })

    //this is test case5
    it("Confirm bill",() => {
        cy.get('#app')
        cy.get('.blocks')
        cy.get('.blocks > :nth-child(3)')
        cy.get(":nth-child(3) > :nth-child(2)").should("have.text","Total: 1 (5000kr)")
      
     })
}) 


after(() => {
})
