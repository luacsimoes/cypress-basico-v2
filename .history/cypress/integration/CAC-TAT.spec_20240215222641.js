/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function () {
    it('verifica o título da aplicação', function () {
        cy.visit('./src/index.html').title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })
})