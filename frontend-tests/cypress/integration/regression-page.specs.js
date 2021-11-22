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
          dashboardFuncs.roomsView(cy)
  
      })
  
    //this is test case3
      it('Bill view',() => {
          dashboardFuncs.billView(cy)
      }) 
  
    //this is test case4
      it('Create bill',() => {
         dashboardFuncs.creareBill(cy)
      })
  
      //this is test case5
      it('Confirm bill',() => {
          dashboardFuncs.confirmBill(cy)
        
       })
  }) 
  
  
after(() => {
})  