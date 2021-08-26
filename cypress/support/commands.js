
Cypress.Commands.add("mockSSR", (payload) => {
    const endpoint = "/__cypress_server_mock"
    cy.request('POST', endpoint, payload)
    //.then(() => {
        // throw error and point to @cypress/nextjs-mock-test-server
    //})
})

Cypress.Commands.add("clearNock", () => {
    cy.request("/__cypress_clear_mock")
})