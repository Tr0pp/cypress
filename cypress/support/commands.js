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

Cypress.Commands.add('createOng', () => {
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

        Cypress.env('createdOngId', res.body.id);
    });
})