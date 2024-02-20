/// <reference types="Cypress" />

describe("Central de Atendimento ao Cliente TAT", function () {
  it("verifica o título da aplicação", function () {
    beforeEach(() => {
      cy.visit("./src/index.html");
    });
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });
});
