describe('Angular_App_Scenario_2', ()=>{

  it('scenario_2', ()=>{

    cy.visit('/')
    cy.get('.sidebar-toggle').click()
    cy.get('a.ng-tns-c7-4 > .menu-title').click()
    cy.get('.ng-tns-c7-5 > .menu-title').click()
    cy.get('.sidebar-toggle').click()
    cy.contains('Using the Grid').should('be.visible')
    // first radio
    const isRadio1 = cy.xpath(`//nb-card-body/form[1]/div[3]/div[1]/nb-radio-group[1]/nb-radio[1]/label[1]/span[2]`).should('be.visible')

    try {
      if(isRadio1){

        cy.log(` First radio found`)
        cy.xpath(`//nb-card-body/form[1]/div[3]/div[1]/nb-radio-group[1]/nb-radio[1]/label[1]/span[2]`).click()
        cy.log(`First radio checked`)
  
      }else
      {
  
        cy.log(` First radio not found`)
  
      }
      
    } catch (error) {
      
    }


    // cy.log(` --- First radio : ${ isRadio1 ? 'found' : 'not found'}`)

    // second radio
    const isRadio2 = cy.xpath(`//nb-card-body/form[1]/div[3]/div[1]/nb-radio-group[1]/nb-radio[2]/label[1]/span[2]`).should('be.visible')

    try {
      if(isRadio1){

        cy.log(` Second radio found`)
        cy.xpath(`//nb-card-body/form[1]/div[3]/div[1]/nb-radio-group[1]/nb-radio[2]/label[1]/span[2]`).click()
        cy.log(`Second radio checked`)
  
      }else
      {
  
        cy.log(` Second radio not found`)
  
      }
      
    } catch (error) {
      
    }

    // cy.log(` --- Second radio : ${ isRadio2 ? 'found' : 'not found'}`)


    // Check radio button 1 is not selected 
    
    if(cy.get('input[type="radio"]').eq(0).should('not.be.checked')){
      cy.log(` --- radio 1 button is not selected `)
    } else{
      cy.log(` --- radio  1 button is selected `)
    }


    // thrid radio 
    const isRadio3 = cy.xpath(`//nb-card-body/form[1]/div[3]/div[1]/nb-radio-group[1]/nb-radio[3]/label[1]/span[2]`).should('be.visible')

    cy.log(` --- Third radio : ${ isRadio3 ? 'found' : 'not found'}`)



    const isDisabledRadio3 = cy.get('input[type="radio"]').eq(2).should('be.disabled')

    if(isDisabledRadio3){
      cy.log(` --- Third radio is disabled`)
    }else{
      cy.log(` --- Third radio is not disabled`)
    }
    

    
    // cy.log(` --- The third radio button is ${isDisabledRadio3 ? 'disabled' : 'enabled' }`


  })

})

