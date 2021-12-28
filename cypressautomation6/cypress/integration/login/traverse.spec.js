

// <h1 id = "value">Hello<h1>
describe('transver method in cypress',()=>{

    beforeEach(function(){

        cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")

    })

    it('To get children of DOM elements, use the .children() command.',()=>{
        
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]')
        .children('.active')
        .should('have.text','Contact Us')
        //cy.get('.breadcrumb.traversal-breadcrumb')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .eq(1)
        .should('have.text','Tea')

    })
    it('To get the first DOM element within elements, use the .first() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .first()
        .should('have.text','Coffee')
    })

    it('To get the first DOM element within elements, use the .first() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .first()
        .should('have.text','Ce')
    })

    it('To get the last DOM element within elements, use the .last() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ul[class="traversal-drinks-list"]')
        .children()
        .last()
        .should('have.attr','id','sugar')
        
    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#sugar').closest('ul').should('have.attr','class','traversal-drinks-list')
        cy.get('#sugar').closest('div').should('have.attr','class','thumbnail')

    })

    it('To get the closest ancestor DOM element, use the .closest() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#sugar').closest('ul').should('have.attr','class','traversal-drinks-list')
        cy.get('#sugar').closest('div').should('have.attr','class','thumbnail')

    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"] >li').filter('.active')
        .should('have.text',"Contact Us")
        .should('have.attr','aria-current','page')
        .should('contain','Contact')
    
    })

    it('To get DOM elements that match a specific selector, use the .filter() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('ol[class="breadcrumb traversal-breadcrumb"] >li').filter('.active')
        .should('have.text',"Contact Us")
        .should('have.attr','aria-current','page')
        .should('contain','Contact')
    
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list ').find('li').should('have.length',5)
        cy.get('.traversal-drinks-list ')
        .find('li')
        .filter('#sugar')
        .should('have.text','Sugar')
        
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list ').find('li').should('have.length',5)
        cy.get('.traversal-drinks-list ')
        .find('li')
        .filter('#sugar')
        .should('have.text','Sugar')
        
    })

    it('To get descendant DOM elements of the selector, use the .find() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list ').find('li').should('have.length',5)
        cy.get('.traversal-drinks-list ')
        .find('li')
        .filter('#sugar')
        .should('have.text','Sugar')
        
    })

    it('To get the next sibling DOM element within elements, use the .next() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list')
        .children('li')
        .eq(0).next()
        .should('have.length',1)
        .should('have.text','Tea')
        .should('have.attr','id','tea')
        
    })

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-drinks-list')
        .children('li')
        .eq(0).nextAll()
        .should('have.length',4)
        
    })

    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#fruits')
        .nextUntil('#veggie')
        .should('have.length',5)
        cy.get('.traversal-food-list > li').should('have.length',11)
        
    })
    it('To get all sibling DOM elements of elements, use the .siblings() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.active').first().siblings().should("have.length",2)  
            
    })

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#veggie')
        .prevUntil('#fruits')
        .should('have.length',5)
        cy.get('.traversal-food-list > li').should('have.length',11)
        
    })

    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.contains('Lentils').prevAll().should('have.length',10)
        
    })

    // <h1 id = "hello">Add me!<h1> // contains --- regular expression --- only text

    //"chinmay deshpade" -> chinmay --> regular

    

    it('To get the previous sibling DOM element within elements, use the .prev() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.contains('Lentils').prev().should('have.text',"Kidney beans")
        
    })

    it('To get parent DOM element of elements, use the .parent() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('#coffee').parent().should('have.attr','class','traversal-drinks-list')
    })


    it('To get parents DOM element of elements, use the .parents() command.',()=>{
        //cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.breadcrumb-item.active').parents().find('nav').eq(1).should('have.attr','aria-label','breadcrumb')
        //cy.get('.breadcrumb-item.active').parent()
        //cy.get('.breadcrumb-item.active').closest('nav') only immediate ancesto
        // next() , nextAll() , prev(),nextUntil(),prevAll(),prevUntil(),siblings()
        //first() last() eq()
        // children(),closest(),filter(),find()
        // parent parents parentsUntil()



    })


    it('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.contains('Firstname').parentsUntil('#thumbnail-1').should('have.length',3)

        
    })

    // it.only('To get parents DOM element of elements until other element, use the .parentsUntil() command.',()=>{
    //     cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
    //     cy.contains('#milk').parentsUntil('.traversal-drinks-list').should('have.length',0)

        
    // })

    it.only('To remove DOM element(s) from the set of elements, use the .not() command.',()=>{
       // cy.visit("http://www.webdriveruniversity.com/Data-Table/index.html")
        cy.get('.traversal-button-states').find('button').not('.disabled').should('have.length',3)

        
    })











    

})