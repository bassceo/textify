describe('Calculator App', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5173');
    });
  
    it('calculator title', () => {
      cy.contains('h1', 'Calculator');
    });
  
    it('should subtract two numbers correctly', () => {
      cy.get('input[placeholder="First number"]').type('10');
      cy.get('input[placeholder="Second number"]').type('4');
      cy.contains('-').click();
      cy.contains('h2', 'Result: 6');
    });
  
    it('should multiply two numbers correctly', () => {
      cy.get('input[placeholder="First number"]').type('6');
      cy.get('input[placeholder="Second number"]').type('7');
      cy.contains('*').click();
      cy.contains('h2', 'Result: 42');
    });
  
    it('should divide two numbers correctly', () => {
      cy.get('input[placeholder="First number"]').type('20');
      cy.get('input[placeholder="Second number"]').type('5');
      cy.contains('/').click();
      cy.contains('h2', 'Result: 4');
    });
});
