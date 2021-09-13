describe('Sig', () => {
    it.skip('Criar leilão', () => {
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

        //Salva leilão
        cy.get('#btn_salvar').click();

        cy.reload();

    });

    it('Editar leilão - cria condições de vendas', () => {
        cy.loginSig('http://sig.bomvalorjudicial.bomvalor-dev/');

        let id = 148; //Setar leilão id a ser editado

        cy.visit(`http://sig.bomvalorjudicial.bomvalor-dev/montagem/edita-leilao/id/${id}`); // Link de editar leilão

        cy.get(`[href="/montagem/condicoes/id/${id}/leilao_id/${id}"]`).click(); // Aba de editar condições

        cy.get('[title="Show Source"]').click(); // Seleciona o iframe deixando como textarea para inserir o texto
        cy.get('#nm_descricao').type('Deu certo, João');
        cy.get('[title="Show Rich Text"]').click(); // Voltando campo para html

        cy.get('#salvaCondicoes').click(); // Salva condições

        cy.get('.subNav > :nth-child(5) > a').click(); // Editar leilão
        cy.get('#statusmontagem_id').select('3'); // Status montagem: Listagem completa

        cy.get('#btn_salvar').click(); // Salva leilão
    })
});