// cypress/integration/spec.js
context('Simple render and routing', () => {
  it('loads page that do not exists', () => {
    cy.visit('/not-found')
    cy.get('.not-found-page')
  })

  it('loads normal page and try to access user page without login', () => {
    cy.visit('/')

    // check if header is rendered
    cy.get('.header-component').should('be.visible')

    // check if footer is rendered
    cy.get('.footer-component').should('be.visible')

    // expect to have many offers as mock call have many of them
    cy.waitUntil(() => {
      return cy.get('.ant-spin')
        .should('not.exist')
        .then(() => {
          cy.get('.offer-card-component').its('length').should('be.gte', 1)
        })
    })
  })
})
