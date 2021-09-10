describe('Ongs', () => {
    it('devem poder realizar um login no sistema', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3333/ongs',
            body: {
                name: 'gatos queridos',
                email: 'gato@mail.com',
                whatsapp: '11955555555',
                city: 'guarulhos',
                uf: 'sp',
            }
        }).then(res => {
            expect(res.body.id).is.not.null;

            cy.visit('http://localhost:3000');
            cy.get('[placeholder="Sua ID"]').type(res.body.id);
            cy.get('.button').click();
        });
    });
})