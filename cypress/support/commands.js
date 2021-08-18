
Cypress.Commands.add("interceptSSR", (payload) => {
    cy.request('POST', "/nock", payload)
})

Cypress.Commands.add("clearNock", () => {
    cy.request("/clearNock")
})