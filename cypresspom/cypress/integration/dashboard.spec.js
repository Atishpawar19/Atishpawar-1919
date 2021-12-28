import {Login} from "../pages/login";
import {Dashboard} from "../pages/dashboard";



let login = new Login()
let dashboard = new Dashboard()

describe('validate the dashboard logo',function(){

    it('validate the login functionality',()=>{
        login.navigate()
        login.login("Admin","admin123")
        dashboard.validateLoginDasbaord()


    })



})