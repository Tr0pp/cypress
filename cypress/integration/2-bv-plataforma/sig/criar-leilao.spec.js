describe('Sig', () => {
    it('Criar leilão', () => {
        cy.loginSig();
        cy.get('[href="/montagem/leilao-formulario"]').click();
        cy.get('#statusmontagem_id').select('2');
    });
});