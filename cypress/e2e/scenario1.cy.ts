// Test suite name 
describe('Angular_App_Scenario_1', () => {
// Test case
  it('scenario_1', () => {

  // Test steps
    cy.visit('/')
    cy.get('.sidebar-toggle').click()
    cy.get('a.ng-tns-c7-4 > .menu-title').click()
    cy.get('.ng-tns-c7-5 > .menu-title').click()
    cy.get('.sidebar-toggle').click()
    cy.get('[data-cy="signInButton"]').should('be.visible')
    cy.get(':nth-child(3) > .col-md-6').contains('Horizontal')
    .scrollIntoView()
    .should("be.visible")
    cy.get('#inputEmail3').type('abc123@gmail.com')
    cy.get('#inputPassword3').type('12345')
    cy.get('.checkbox > nb-checkbox > .label > .custom-checkbox').click()
    cy.get(':nth-child(3) > .col-md-6 > nb-card > nb-card-body')
      .find('button')
      .contains('Sign in')
      .should('exist')
  })
})