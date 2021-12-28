export class Dashboard{

    validateLoginDasbaord(){
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    }




}