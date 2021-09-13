describe('Sig', () => {
    it('Login Sig', () => {
        cy.visit('http://sig.bomvalorjudicial.bomvalor-dev/');

        cy.get('#email').type('adm3@bomvalor.com.br');
        cy.get('#senha').type('123456');

        cy.get('.buttonM').click();
    });

    it.skip('Criar leilão', () => {
        cy.visit('http://sig.bomvalorjudicial.bomvalor-dev/');

        cy.get(':nth-child(3) > .noBorderB');
        cy.get('#statusmontagem_id');
    });
});