
Cypress.Commands.add("mockSSR", (payload) => {
    const endpoint = Cypress.env("SSR_ENDPOINT") || "/mock"
    cy.request('POST', endpoint, payload).then(() => {
        // throw error and point to @cypress/nextjs-mock-test-server
    })
})

Cypress.Commands.add("clearNock", () => {
    cy.request("/clearNock")
})