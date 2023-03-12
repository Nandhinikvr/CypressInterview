/// <reference types="Cypress" />
//Import Hme page Objects, Mensclothing page objects and Cucumber dependancies
import HomePage from '../../../support/pageObjects/HomePage'
import MensclothingPage from '../../../support/pageObjects/MensclothingPage'
import { Given,When,And,Then } from "@badeball/cypress-cucumber-preprocessor";

//cypress run --spec cypress\integration\examples\BDD\*.feature --headed --browser chrome
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
// npx cypress run --spec cypress/integration/examples/BDD/*.feature --headed --browser chrome --env url="https://www.newlook.com/uk"
const homePage=new HomePage()
const mensclothingPage=new MensclothingPage()
var resultCount, filteredResultCount
Given('I Visit ECommerce Page',()=>
{
    cy.visit(Cypress.env('url'))
})

// When I accept cookies and close sign up form
When('I accept cookies and close sign up form',function ()
{
    homePage.acceptCookies().should('be.visible').click()
    homePage.closeSignupFormButton().should('be.visible').click()
})

//Navigating to Mens Clothing page
When('Navigate to Mens Clothing',function()
{
    homePage.mensCLothingTab().click({ force: true })

})

//Checking Results for Mens Clothing
When('Check results for mens clothing',function()
{
    mensclothingPage.totalResultCount().then(function (logoelement) {
        let attrValue = logoelement.text();
        let totalcountarray = attrValue.split(" ")
        resultCount = totalcountarray.slice(3, 4);
    })
})

//Select Category as Mens Jeans in Mens clothing page
When('Select category as mens jeans',function()
{
    mensclothingPage.filterBarSection().each(($el, index, $list) => {
        const labelText = $el.find('strong').text()
        if (labelText.includes('Category')) {
            cy.wrap($el).click()
        }
    })
    mensclothingPage.selectorButton().contains('Mens Jeans').click()
})

//Selce Brand as New Look in Mens clothing page
When('Select brand as New Look',function()
{
    mensclothingPage.filterBarSection().each(($el, index, $list) => {
        const labelText = $el.find('strong').text()
        if (labelText.includes('Brand')) {
            cy.wrap($el).click()
        }
    })
    mensclothingPage.selectorButton().contains('New Look').click()        
})

//Select Color as Black in Mens Clothing page
When('select Color as Black',function()
{
    mensclothingPage.filterBarSection().each(($el, index, $list) => {
        const labelText = $el.find('strong').text()
        if (labelText.includes('Colour')) {
            cy.wrap($el).click()
        }
    })
    mensclothingPage.colorSelector().contains('Black')
        .click({ force: true })     
    
    //To click outside the Filter tab and to see the result
    mensclothingPage.totalResultCount().click()
})

//Then Compare Count of filtered results of mens clothing with the result we received without any filter

    Then('Compare Count of filtered results of mens clothing with the result we received without any filter',()=>
    {
        cy.intercept('https://collector-px5ba1zfsb.px-cloud.net/api/v2/collector').as('filterWait')
        cy.wait('@filterWait')
        mensclothingPage.totalResultCount().should('be.visible')
            .then(function (logoelement) {
                let attrValue = logoelement.text();
                let totalcountArray1 = attrValue.split(" ")
                filteredResultCount = totalcountArray1[0];
                expect(parseInt(resultCount)).greaterThan(parseInt(filteredResultCount))
            })
    })
