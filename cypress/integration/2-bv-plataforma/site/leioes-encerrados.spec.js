describe('Site', () => {
    it('clicando leilão encerrados', () =>{
        cy.visit('http://rodrigo-serrano.abaleiloes.judicial.bomvalor.com.br/');

        cy.get('.input-group > a').click();
    })
})