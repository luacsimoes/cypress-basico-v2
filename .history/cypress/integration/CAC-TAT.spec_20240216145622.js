/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
    beforeEach(() => {
        cy.visit("./src/index.html");
      });
  it("verifica o título da aplicação", function () {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
  it("preenche os campos obrigatórios e envia o formulário", function () {
    cy.get('input[id="firstName"]').type('Luana').should('have.value', 'Luana')
    cy.get('input[id="lastName"]').type('Simoes').should('have.value', 'Simoes')
    cy.get('input[id="email"]').type('simoesluana2001@gmail.com', { delay:0 }).should('have.value', 'simoesluana2001@gmail.com')
    cy.get('textarea[id="open-text-area"]').type('teste').should('have.value', 'teste')
    cy.get('button[type="submit"]').click()
    cy.get(".success").should('be.visible')
  })
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", function () {
    cy.get('input[id="firstName"]').type('Luana').should('have.value', 'Luana')
    cy.get('input[id="lastName"]').type('Simoes').should('have.value', 'Simoes')
    cy.get('input[id="email"]').type('simoesluana2001,gmail.com').should('have.value', 'simoesluana2001,gmail.com')
    cy.get('textarea[id="open-text-area"]').type('teste').should('have.value', 'teste')
    cy.get('button[type="submit"]').click()
    cy.get(".error").should('be.visible')
  })
});
