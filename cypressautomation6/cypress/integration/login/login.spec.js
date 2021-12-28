describe('validate the login functionality',()=>{

    it('validate with valid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type('dmin')
        cy.get('input[id="txtPassword"]').type('admin123')
        cy.get('input[id="btnLogin"]').click()
        cy.get('img[alt="OrangeHRM"]').should('be.visible')
    })

    it('validate with invalid credentials',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="txtUsername"]').type('ddd')
        cy.get('input[id="txtPassword"]').type('ag')
        cy.get('input[id="btnLogin"]').click()
        cy.get('span[id="spanMessage"]').should('be.visible')

        
    })


    //<h1 name="id" class = "name" name = "new">Heading</h1>
    // tagName[attribute = "value"]
    // h1[name="id"]





})






// let h = [233,55,66,7,8]

// let human = {
//     'age':12,
//     'rollNo':13,
//     display(){
//         console.log('human')
//     }

// }

// // human.age
// // human.display()











// describe('validate the login functionality',function(){

// })
