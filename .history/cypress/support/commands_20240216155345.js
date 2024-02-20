Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('input[id="firstName"]').type('Luana')
    cy.get('input[id="lastName"]').type('Simoes')
    cy.get('input[id="email"]').type('simoesluana2001@gmail.com')
    cy.get('textarea[id="open-text-area"]').type('teste')
    cy.get('button[type="submit"]').click()
})