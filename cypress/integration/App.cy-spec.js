// cypress/integration/spec.js
context('Simple render and routing', () => {
  it('loads page that do not exists', () => {
    cy.visit('/not-found')
    cy.get('.not-found-page')
  })

  it('loads normal page and try to access user page without login', () => {
    cy.visit('/')
  })
})
