/// <reference types="Cypress" />
//Importing Page object model to feature file
import HomePage from '../../../support/pageObjects/HomePage'
// importing cucumber 
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//To run commands in command line
//cypress run --spec cypress\integration\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome
// npx cypress run --spec cypress/integration/BDD/*.feature --headed --browser chrome --env url="www.efinancialcareers.com"

const homePage = new HomePage()
let userid;

//Visiting the EfinancialCareers page
Given('I Visit EfinancialCareers Page', () => {
      cy.visit(Cypress.env('url'))
})

// When I Provide Login details and Logged in
When('I provide Log in details and Log in', function (dataTable) {
    //clicking Signin/Register Button
    homePage.signinOrRegisterButton().should('be.visible').click()
    //To wait for the Sign in Form to open
    cy.intercept('https://gum.criteo.com/sid/json?origin=onetag&domain=efinancialcareers.com&sn=ChromeSyncframe&so=0&topUrl=www.efinancialcareers.com&cw=1&lsw=1&topicsavail=0&fledgeavail=0').as('filterWait')
    cy.wait('@filterWait')
    // getting the input from cucumber file and storing it in a variable
    userid = dataTable.rawTable[1][0]
    //fetching data from feature file
    homePage.getUserEmail().should('be.visible',{timeout: 10000})
    homePage.getUserEmail().eq(2).clear().type(dataTable.rawTable[1][0],{force: true})
    homePage.continueLoginButton().should('be.visible').click()
    //fetching data from feature file
    homePage.getPassword().should('be.visible')
    .clear().type(dataTable.rawTable[1][1])
    homePage.submitButton().should('be.visible').click()
})

Then('verify the user is Logged in', () => {
    // Waiting for the submit button function to load 
    cy.intercept('https://events-publisher.efinancialcareers.com/pusher/auth').as('filterWait1')
    cy.wait('@filterWait1')
    homePage.profileDetailsButton().should('be.visible',{timeout: 10000}).click()
    //Comparing data from the fixture file(User id) and Loggedin Profile Id
    homePage.profileID().should('have.text',userid)
})