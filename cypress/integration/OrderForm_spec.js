describe('Order Form flow', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Should have a form for order input', () => {
    cy.get('form').should('be.visible')
  });

  it('Should have input for Name', () => {
    cy.get('form').get('input').should('have.attr', 'placeholder')
  });

  it('Should allow user to input their name', () => {
    cy.get('form').get('input').type('Cosmo Flusterpants')
  });

  it('Should have twelve ingredient buttons and a submit button', () => {
    cy.get('form').find('button').should('have.length', 13)
  });

  it('Should not have an active submit button if the input is empty, or if there are no chosen ingredients', () => {
    cy.get('form').find('.submit').should('be.disabled')
    cy.get('form').get('input').type('Custer McSchniedle')
      cy.get('form').find('.submit').should('be.disabled')
  });

  it('Should enable the button once a name is entered, and at least one ingredient is selected', () => {
    cy.get('form').get('input').type('Kim Carpasion')
      cy.get('form').find('.beans').click()
      cy.get('form').find('.submit').should('be.enabled')
  });

  it('Should POST the order once the submit button is clicked', () => {
    cy.intercept({
      method: 'POST', 
      url: 'http://localhost:3001/api/v1/orders',
    }).as('postCheck')
    cy.get('form').get('input').type('David Fiddlesmith')
      cy.get('form').find('.beans').click()
      cy.get('form').find('.carnitas').click()
      cy.get('form').find('.cilantro').click()
      cy.get('form').find('.submit').click()
  });

});
