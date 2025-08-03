import {test, expect} from '@playwright/test'
import{Given,When,Then} from '@cucumber/cucumber'
import {getAPIContext} from '../utils/apicontext'

let response:any;

Given('I hit the api with correct filter or parameter',async()=>{
    const api = await getAPIContext();
    response=await api.get('https://jsonplaceholder.typicode.com/users')
    console.log(await response.json())
})

Then('I should get a valid response',async function(){
  
})

Then('status code should be 200',async function(){
  expect(await response.status()).toBe(200)
})

// Given('I hit the api with incorrect filter or parameter',async function(){
//     const api = await getAPIContext();
//     response=await api.get('https://jsonplaceholder.typicode.com/users/20')
//     console.log(await response.json())
// })

// Then('status code should be 404',async function(){
//   expect(await response.status()).toBe(404)
// })

