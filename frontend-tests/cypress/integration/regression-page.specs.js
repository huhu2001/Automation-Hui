/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as targets from '../targets/targets'
import * as dashboardFuncs from '../pages/dashboardPage'

before(() => {
    cy.visit(targets.base_url)  
  })

  //this is test suite
describe("Regression test suite",() =>{
  
   beforeEach(() => {
      indexFuncs.loginUse(cy)
    })
    
    afterEach(() => {
      dashboardFuncs.loginOut(cy) 
    })
    
    //this is test case1
     it('Confirm use',() => {
      dashboardFuncs.confirmUse(cy)
    })
  
  
  
    //this is test case2
      it('Rooms view',() => {
          cy.get('#app')
          cy.get('.blocks')
          cy.get('.blocks > :nth-child(1)')
          cy.get(':nth-child(1) > .btn').click()
  
      })
  
    //this is test case3
      it('Bill view',() => {
          cy.get('#app')
          cy.get('.blocks')
          cy.get('.blocks > :nth-child(3)')
          cy.get(':nth-child(3) > .btn').click()
      }) 
  
    //this is test case4
      it('Create bill',() => {
         cy.get('#app')
         cy.get('.blocks')
         cy.get('.blocks > :nth-child(3)')
         cy.get(':nth-child(3) > .btn').click()
         cy.contains("Bills")
         cy.get('h2 > .btn').click()
         cy.get('#app')
         cy.get('#app > :nth-child(2)')
         cy.get('input').type('5000')
         cy.get('.checkbox').click()
         cy.get('.blue').click()
      })
  
      //this is test case5
      it('Confirm bill',() => {
          cy.get('#app')
          cy.get('.blocks')
          cy.get('.blocks > :nth-child(3)')
          cy.get(':nth-child(3) > :nth-child(2)').should('have.text','Total: 1 (5000kr)')
        
       })
  }) 
  
  
after(() => {
})  