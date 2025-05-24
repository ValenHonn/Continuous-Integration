describe('Contador de Clicks', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); 
  });

  it('debe incrementar el contador al hacer clic', () => {
    cy.contains('Clicks: 0');
    cy.get('#botonClick').click();
    cy.get('#botonClick').click();
    cy.contains('Clicks: 2');
  });
});