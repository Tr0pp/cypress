// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Ignora erro do site
Cypress.Commands.add('ignoreErrors', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.log(err);
            return false;
        });
})

Cypress.Commands.add('loginSig', (url) => {
    cy.visit(url);
    cy.get('#email').type('adm3@bomvalor.com.br');
    cy.get('#senha').type('123456');

    cy.get('.buttonM').click();
});

Cypress.Commands.add('newDate', (id) => {
    let data = new Date();
    let dia = String(data.getDate() + 1).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();
    let dataAtual = dia + '/' + mes + '/' + ano;

    cy.get(id).type(dataAtual);
})

Cypress.Commands.add('selectNth', { prevSubject: 'element' }, (subject, pos) => {
    cy.wrap(subject)
        .children('option')
        .eq(pos)
        .then(e => {
            cy.wrap(subject).select(e.val())
        })
})