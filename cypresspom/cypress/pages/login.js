export class Login {

    navigate() {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    }

    login(username, password) {
        cy.get('#txtUsername').type(username)
        cy.get('#txtPassword').type(password)
        cy.get('#btnLogin').click()
    }

    validateLogo() {
        cy.get('#divLogo').should('be.visible')

    }

}