describe('verify the check box',()=>{

    it('verify the check box',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // cy.get('input[type="checkbox"]').first().click()
        // cy.get('input[type="checkbox"]').first().should('be.checked')
        // cy.get('input[type="checkbox"]').first().click()
        // cy.get('input[type="checkbox"]').first().should('not.be.checked')


        // css--->  tagName[attribute=value]

        cy.get('input[type="checkbox"]').first().check()
        cy.get('input[type="checkbox"]').first().should('be.checked')
        cy.get('input[type="checkbox"]').first().uncheck()
        cy.get('input[type="checkbox"]').first().should('not.be.checked')

    })

    it('verify the functionality to select  checkboxes using check method',()=>{
        // check()
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]').check('option-1')
    })

    it.only('verify the functionality to select  mutliple checkboxes using check method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="checkbox"]')
        .check(['option-1','option-2','option-3','option-4'])

        cy.get('input[type="checkbox"]')
        .uncheck(['option-1','option-2','option-3','option-4'])
    })



})