/// <reference types="cypress" />

beforeEach(() => {
  cy.clearSSRMocks()
})

it('fetches a random joke', () => {
  cy.visit('/')
  cy.get('[data-cy=joke]').should('not.be.empty')
})

it('getServerSideProps returns mock', () => {
  const joke = 'Our wedding was so beautiful, even the cake was in tiers.'
  cy.mockSSR({
    hostname: 'https://icanhazdadjoke.com',
    method: 'GET',
    path: '/',
    statusCode: 200,
    body: {
      id: 'NmbFtH69hFd',
      joke,
      status: 200
    }
  })

  const title = "This is the best blog post!!"
  cy.mockSSR({
    hostname: 'https://jsonplaceholder.typicode.com',
    method: 'GET',
    path: '/posts/1',
    statusCode: 200,
    body: {
      id: 1,
      title,
      status: 200
    }
  })
  cy.visit('/')
  // nock has worked!
  cy.contains('[data-cy=post]', title)
})
