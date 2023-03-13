

Repository information: 

This repository contains Javascript -Cypress Automation code to automate testing for an ecommerce web page 

Pre Requisuites: 

Install node JS 
set up environment variable
Install Cypress using 
npm init
once done, run the command 
npm install cypress --save-dev to install cypress
open cypress using npx cypress open 
For insalling Cucumber framework, run the command below to install cucumber framework package
npm install @badeball/cypress-cucumber-preprocessor
Update setupNodeEvents in cypress.config file and also update broserify depedancy and import in config file
Update the spec pattern in config file -> Specify the file path to Run in Spec pattern.

To execute the code, clone the code and copy it in your local and execute all the commands given using terminal

we can run code by 2 ways

through terminal: 

npx cypress run --spec cypress\integration\BDD\*.feature --headed --browser chrome
npx cypress-tags run -e TAGS="@Regression" --headed --browser chrome
npx cypress run --spec cypress/integration/BDD/*.feature --headed --browser chrome --env url="https://www.newlook.com/uk"

Through Cypress

Open the cypress by npx cypress open and select E2E testing, Choose the desired browser and click Start E2E testing, Select the Step file/ Feature file pointed in the Spec. 




