it('passes', () => {
  cy.visit('https://trello.com')
  cy.get('.Buttonsstyles__ButtonGroup-sc-1jwidxo-3 > [href="/login"]').click()
  cy.get('#user').type('vishnuraj13224@gmail.com')
  cy.get('#login',).click()
  cy.origin('https://id.atlassian.com', () => {
    cy.get('input[type="password"]').type('Welcome@123')
    cy.get('#login-submit > .css-178ag6o').click()
  })
  cy.wait(5000)
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false
  })
  cy.get('p > span').click()
  cy.get('[data-testid="create-board-title-input"]').type('Task')
  cy.get('[data-testid="create-board-submit-button"]').click()
  cy.get('.list-name-input').type('List A')
  cy.get('.list-add-controls > .nch-button').click()
  cy.get('.list-name-input').type('List B')
  cy.get('.list-add-controls > .nch-button').click()
  cy.get('.list-add-controls > .icon-lg').click()
  cy.get(':nth-child(1) > .list > .card-composer-container > .open-card-composer').click()
  cy.get('.list-card-composer-textarea').type('Card 1')
  cy.get('.cc-controls > :nth-child(1) > .nch-button').click()
  cy.get('[data-testid="header-member-menu-button"] > .OUdAuicP657Tka > .DweEFaF5owOe02').click()
  cy.get('[data-testid="account-menu-logout"]').click()
  cy.origin('https://id.atlassian.com', () => {
      cy.get('.css-178ag6o > span').click()

})
})