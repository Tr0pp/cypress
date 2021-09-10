describe('Ongs', () => {
    it.skip('devem poder realizar um cadastro', () => {
        cy.visit('http://localhost:3000/register')
        //cy.get busca um elemento
        //preenche o campo
        cy.get('[placeholder="Nome da ONG"]').type('Dogs queridos');
        cy.get('[placeholder="Email"]').type('dogs@email.com');
        cy.get('[placeholder="WhatsApp"]').type('11982939132');
        cy.get('[placeholder="Cidade"]').type('Guarulhos');
        cy.get('[placeholder="UF"]').type('SP');

        /* @Routing
        * Start server com cy.server()
        * Criar uma rota com cy.route()
        * atribuir a rota a um alias
        * Esperar com cy.wait e fazer uma validação
        **/

        cy.intercept('POST', '**/ongs').as('postOngs');

        cy.get('.button').click();

        cy.wait('@postOngs').then((xhr) => {
            expect(xhr.response.statusCode).be.eq(200); // Verifica status
            expect(xhr.response.body).has.property('id'); // Verifica se vem a propriedade id
            expect(xhr.response.body.id).is.not.null; // Verifica se não é nulo o id
        })


    });

    it('devem poder realizar um login no sistema', () => {
        let ongId = Cypress.env('createdOngId');

        cy.visit('http://localhost:3000');
        cy.get('[placeholder="Sua ID"]').type(ongId);
        cy.get('.button').click();
    });
})