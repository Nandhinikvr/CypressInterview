Repository information: 

This repository contains Javascript -Cypress Automation code to automate testing for an ecommerce web page 

Pre Requisuites: 

Install node JS 
Set up environmental variables
Install Cypress using 
npm init
once done, run the command 
npm install cypress --save-dev to install cypress
open cypress using npx cypress open 
For insalling Cucumber framework, run the command below to install cucumber framework package
npm install @badeball/cypress-cucumber-preprocessor
Update setupNodeEvents in cypress.config file and also update browserify depedancy and import in config file and package.json file
Update the spec pattern in config file -> Specify the file path to Run in Spec pattern.

To execute the code, clone the code and copy it in your local and execute all the commands given using terminal

we can run code by 2 ways

through terminal:
npx cypress run --spec cypress\integration\BDD*.feature --headed --browser chrome npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome npx cypress run --spec cypress/integration/BDD/*.feature --headed --browser chrome --env url="www.efinancialcareers.com"

Through Cypress

Open the cypress by npx cypress open and select E2E testing, Choose the desired browser and click Start E2E testing, Select the Step file/ Feature file pointed in the Spec

Cypress.Integration folder: Consist of JS files written in Cypress and code flow using describe() and it()
Cypress.Integration.BDD Folder : Contains Feature file and Step definition
Cypress.Integration.BDD.Feature file : Contains feature and scenario of efinancialCareer page Login testing flow in basic english understandable by Business people or non-Technical people
Cypress.Integration.BDD.Step Definition file: Imported the page object model and imported the cucumber framework. Post that, this field contains the actual implementation of the features mentioned int he feature file. 

Cypress.Object folder: Consists objects stating all the xpath,css locators.

Cypress.Support Folder : Contains Page Objects and write all the objects present in the page and export the pages in test file

Cypress.config - Contains  the standard configurations like View port,Default time out,Url,Retries,Specpattern 
