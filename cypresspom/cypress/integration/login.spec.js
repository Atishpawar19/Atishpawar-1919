
import {Login} from "../pages/login";

let login =  new Login()

describe('login functionality',()=>{

    beforeEach(function(){
        login.navigate()
    })

    it('verify the login functionality',()=>{
        
        login.login("Admin",'admin123')

    })

    it('validate the logo',()=>{
        login.validateLogo()
    
    })


    // it('verify the login functionality',()=>{
    //     login.navigate()
    //     login.login("",'admin123')

    // })






})

