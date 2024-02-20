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
  it("Verificar que o campo telefone só aceita números", function () {
    cy.get('#phone').type('djdksks').should('have.value', '')
  })
  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", function () {
    cy.get('input[id="firstName"]').type('Luana').should('have.value', 'Luana')
    cy.get('input[id="lastName"]').type('Simoes').should('have.value', 'Simoes')
    cy.get('input[id="email"]').type('simoesluana2001@gmail.com', { delay:0 }).should('have.value', 'simoesluana2001@gmail.com')
    cy.get('textarea[id="open-text-area"]').type('teste').should('have.value', 'teste')
    cy.get('#phone-checkbox').click()
    cy.get('button[type="submit"]').click()
    cy.get(".error").should('be.visible')
  })
  it("preenche e limpa os campos nome, sobrenome, email e telefone", function () {
    cy.get('input[id="firstName"]').type('Luana').should('have.value', 'Luana').clear().should('have.value', '')
    cy.get('input[id="lastName"]').type('Simoes').should('have.value', 'Simoes').clear().should('have.value', '')
    cy.get('input[id="email"]').type('simoesluana2001@gmail.com', { delay:0 }).should('have.value', 'simoesluana2001@gmail.com').clear().should('have.value', '')
  })
  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", function () {
    cy.get('button[type="submit"]').click()
    cy.get(".error").should('be.visible')
  })
  it("envia o formuário com sucesso usando um comando customizado", function () {
    cy.fillMandatoryFieldsAndSubmit()
    cy.get('.success').should('be.visible')
  })
  it("seleciona um produto (YouTube) por seu texto", function () {
    cy.get('select').select('YouTube').should('have.value', 'youtube')
  })
  it("seleciona um produto (mentoria) por seu value", function () {
    cy.get('select').select('mentoria').should('have.value', 'mentoria')
  })
  it("seleciona um produto (Blog) por seu índice", function () {
    cy.get('select').select(1).should('have.value', 'blog')
  })
});
