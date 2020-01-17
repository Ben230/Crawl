describe('Navigate from home to maps',function(){
  it('click link to maps', function() {
    cy.visit('/')
    cy.contains('Find').click()
    cy.get('h5').should("Touch the pints and we'll build the crawl!")
  })
})
