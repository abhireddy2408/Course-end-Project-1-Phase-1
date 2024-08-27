describe( 'Angular App Scenario3', ()=>{

it('scenario3', ()=>{

  cy.visit('/')
  cy.get('.sidebar-toggle').click()
  cy.get('a.ng-tns-c7-7 > .menu-title').click()
  cy.get('.ng-tns-c7-11 > .menu-title').click()
  cy.get('.sidebar-toggle').click()
  cy.get('nb-checkbox')
      .find('input[type="checkbox"]').eq(0) // Adjust this selector if necessary
      .check({force: true})
  cy.get('nb-checkbox')
      .find('input[type="checkbox"]').eq(1) // Adjust this selector if necessary
      .check({force: true})
  cy.get('nb-checkbox')
      .find('input[type="checkbox"]').eq(2) // Adjust this selector if necessary
      .check({force: true})


  // cy.contains('nb-checkbox', 'Hide on click').click()
  // cy.contains('nb-checkbox', 'Prevent arising of duplicate toast').click()
  // cy.contains('nb-checkbox', 'Show toast with icon').click()

  
    
      // Locate all checkboxes 
      cy.get('input[type="checkbox"]').then(($checkboxes) => {
        // Inspect all checkboxes 
        $checkboxes.each((index, checkbox) => {
          cy.wrap(checkbox).should('exist'); // Inspect each checkbox
          cy.log(` checkbox : ${index + 1}`)
          
        });
  
        // Click only the second checkbox 
        cy.wrap($checkboxes).eq(1).click({force: true}); // Clicks the second checkbox
      });  

  

})


})