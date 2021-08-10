describe('App flow', () => {
  
  it('Should initially have no orders on file', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
        {
          status: 200,
          body: {
            orders: []
          }
        }).as('getCheck1')
        cy.visit('http://localhost:3000/')
    cy.get('main').get('p').contains('No orders yet!')
  });

  it('Should be able to display orders that are in state', () => {    
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
    {
      status: 200,
      body: {
        orders: [{id: 12345, name: 'Krystal Feinglass', ingredients: ['beans', 'steak', 'cilantro']}]
      }
    }).as('getCheck2')
    cy.visit('http://localhost:3000/')
    cy.get('form').get('input').type('Krystal Feinglass')
      cy.get('form').find('.beans').click()
      cy.get('form').find('.steak').click()
      cy.get('form').find('.cilantro').click()
      cy.get('form').find('.submit').click()
      cy.get('main').find('.order').should('have.length', 1)
  });

  it('Should display customer name for each order', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
    {
      status: 200,
      body: {
        orders: [{id: 12345, name: 'Krystal Feinglass', ingredients: ['beans', 'steak', 'cilantro']}]
      }
    }).as('getCheck2')
    cy.visit('http://localhost:3000/')
    cy.get('form').get('input').type('Krystal Feinglass')
      cy.get('form').find('.beans').click()
      cy.get('form').find('.steak').click()
      cy.get('form').find('.cilantro').click()
      cy.get('form').find('.submit').click()
      cy.get('main').find('.order').contains('Krystal Feinglass')
  });

  it('Should display ingredients for each order', () => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
    {
      status: 200,
      body: {
        orders: [{id: 12345, name: 'Krystal Feinglass', ingredients: ['beans', 'steak', 'cilantro']}]
      }
    }).as('getCheck2')
    cy.visit('http://localhost:3000/')
    cy.get('form').get('input').type('Krystal Feinglass')
      cy.get('form').find('.beans').click()
      cy.get('form').find('.steak').click()
      cy.get('form').find('.cilantro').click()
      cy.get('form').find('.submit').click()
      cy.get('main').find('.order').find('li').should('have.length', 3)
  });



});

// cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
// {
//   status: 200,
//   body: {
//     orders: [{id: 12345, name: 'Krystal Feinglass', ingredients: ['beans', 'steak', 'cilantro', 'queso fresco', 'sour cream', 'pico de gallo']}]
//   }
// }).as('getCheck')