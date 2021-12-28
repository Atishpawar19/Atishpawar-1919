describe('verify the functionality of radio button',()=>{

    // We can pass value of 'value attribute' to check() method.
    //incase checkbox and radio button

    it('verify the radio button functionality with check method',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').check()
        cy.get('input[value="blue"]').should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')
    })

    it('verify the radio button functionality with click',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value="blue"]').click()
        cy.get('input[value="blue"]').should('be.checked')
        cy.get('input[value="yellow"]').should('not.be.checked')
    })

    it.only('verify the radio button functionality with value',()=>{
        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[type="radio"]').check('yellow')
        cy.get('input[value="yellow"]').should('be.checked')
        cy.get('input[type="radio"]').check('blue')
        cy.get('input[value="yellow"]').should('not.be.checked')
        
       
    })
})