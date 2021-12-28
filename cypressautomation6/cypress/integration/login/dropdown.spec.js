describe('verify the functionality for dropdown with select tag',()=>{

    it('verify the functionality of dropdown',()=>{

        cy.visit('http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        // css selector --    .className , #idName , tagName[attribute='value']
        //cy.get('#dropdowm-menu-1').select('java')
        // select - either pass value of value attribute and html element -- text
        
        cy.get('#dropdowm-menu-1').select('JAVA').should('have.value',"java")
        cy.get('#dropdowm-menu-1').select('java').should('have.value',"java")
        



    })



})