cypress.commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('input[id="firstName"]').type('Luana').should('have.value', 'Luana')
    cy.get('input[id="lastName"]').type('Simoes').should('have.value', 'Simoes')
    cy.get('input[id="email"]').type('simoesluana2001@gmail.com', { delay:0 }).should('have.value', 'simoesluana2001@gmail.com')
    cy.get('textarea[id="open-text-area"]').type('teste').should('have.value', 'teste')
    cy.get('button[type="submit"]').click()
})