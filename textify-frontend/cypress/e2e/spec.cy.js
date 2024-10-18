describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://ex.cypress.io')
  })
  it.only('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})