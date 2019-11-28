describe('Home', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('check the page title', () => {
    cy.contains('h1', 'Quanto vale meu carro?')
  })

  it('should render svg logo', () => {
    cy.get('img').should('be.visible')
  })
})
