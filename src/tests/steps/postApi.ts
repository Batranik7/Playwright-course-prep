import { Given,Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { getAPIContext } from "../utils/apicontext";

let response:any;

Given('',async()=>{
const user={
    "name":"Nick",
    "job":"Test Automation Engineer"
}
const api= await getAPIContext()

})

Then('',async()=>{
    
})
