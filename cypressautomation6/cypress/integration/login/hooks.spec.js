//beforeEach-- this block runs before every testcase
// afterEach -- this block runs after every testcase



//before --- this block runs before everthing 
//after  --  this block of code runs after  everthing



describe('verify the functionality of the hooks in cypress', function () {

    before(function () {
        cy.log('Before everything')
        // Db connection

    })
    after(function () {
        cy.log('This block of code runs after everything')

        // Close db session

    })

    beforeEach(function () {
        cy.log('This block of code runs before each testcase')
        // common url or functionality before every testCase
    })

    afterEach(function () {
        cy.log('This block of code runs after each testcase')
        // clearing session storage , cookies and storage 

    })

    it('TestCase one', () => {
        cy.log('Test case one')
    })

    it('TestCase two', () => {
        cy.log('Test case two')
    })





})













