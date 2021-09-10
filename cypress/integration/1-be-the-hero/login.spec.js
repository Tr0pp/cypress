describe('Ongs', () => {
    it('devem poder realizar um login no sistema', () => {
        let ongId = Cypress.env('createdOngId');

        cy.visit('http://localhost:3000');
        cy.get('[placeholder="Sua ID"]').type(ongId);
        cy.get('.button').click();
    });
})