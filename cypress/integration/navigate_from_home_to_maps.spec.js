describe('Navigate from home to maps',function(){
  it('click link to maps', function() {
    cy.visit('/')
    cy.contains('Find').click()
    cy.get('h1').should('contain','Map!')
  })
})
