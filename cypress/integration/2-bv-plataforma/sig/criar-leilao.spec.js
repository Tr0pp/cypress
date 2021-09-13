describe('Sig', () => {
    it('Criar leilão', () => {
        //Função para logar no sig
        cy.loginSig('http://sig.bomvalorjudicial.bomvalor-dev/');

        //Form criar leilão
        cy.get('[href="/montagem/leilao-formulario"]').click(); //Entra na aba "Cadastrar Leilão"
        cy.get('#statusmontagem_id').select('2'); //Seleciona o status do leilão como Listagem Parcial
        cy.get('#leiloeiro_id').select('9999'); // Seleciona casaleiloeira Mercado Comprova
        cy.get('.multiselect').click(); //Seleciona leiloeiro divulgar
        cy.get(':nth-child(3) > a > .checkbox > input').click(); //Seleciona o Abaleilões
        cy.get('.multiselect').click(); //Sai da listagem de leiloeirodivulgar
        cy.get('#comitente_id').selectNth(1); //Seleciona o primeiro comitente
        cy.get('#filial_id').selectNth(1); //Seleciona a primeira localidade
        cy.get('#nm').type('Leilão test by Cypress'); // Titulo leilao
        cy.get('#statusleilao_id').selectNth(1); //Primeiro status de leilão
        cy.get('#statustipoleilao_id').select('4'); //Define como Praça única
        cy.newDate('#dt'); //Cria data +1 dia para que seja testado normalmente o leilão
        cy.get('#dt_hora').type('0900'); // Preenche hora

        cy.intercept('POST', '**/montagem/salva-leilao').as('salvaLeilao');
        //Salva leilão
        cy.get('#btn_salvar').click();

        cy.wait('@salvaLeilao').then((xhr) => {
            expect(xhr.response.statusCode).be.eq(200); // Verifica status
            console.log(xhr.response);
        })


    });
});