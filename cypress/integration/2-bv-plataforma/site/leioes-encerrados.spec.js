describe('Site', () => {
    it('clicando leilão encerrados', () =>{
        cy.visit('http://rodrigo-serrano.abaleiloes.judicial.bomvalor.com.br/');

        cy.setCookie('PHPSESSID', '3d15q08touggg90j7rq20dj2l4');
        cy.setCookie('ccbv_et', '8gGsO3pSEUw2W3U0alUGU3BIukcGgV');
        cy.setCookie('ccbv_alias', 'Rodrigo');

        // cy.get('.input-group > a').click();
    })
})