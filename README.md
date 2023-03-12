Thank you  for the oppurtunity 

Repository information: 

This repository contains Javascript -Cypress Automation code to automate testing for an ecommerce web page 

Pre Requisuites: 

Install node JS 
Install Cypress using 
npm init
once done, run the command 
npm install cypress --save-dev to install cypress
open cypress using npx cypress open 
For insalling Cucumber framework, run the command below to install cucumber framework package
npm install @badeball/cypress-cucumber-preprocessor
Update setupNodeEvents in cypress.config file and also update broserify depedancy and import in config file
Update the spec pattern in config file -> Specify the file path to Run in Spec pattern.

Directory Structure: 

![image](https://user-images.githubusercontent.com/122528540/224563139-7693a45b-ed62-4416-a898-7fed471c36f0.png)


Cypress.Integration folder: Consist of JS files written in Cypress and code flow using describe() and it()
Cypress.Integration.BDD Folder : Contains Feature file and Step definition
Cypress.Integration.BDD.Feature file : Contains feature and scenario of e-commerce page testing flow in basic english understandable by Business people or non-Technical people
Cypress.Integration.BDD.Step Definition file: Imported the page object model adn imported the cucumber framework. Post that, this fiel contains the actual implementation of the features mentioned int he feature file. 

Cypress.Object folder: Consists objects stating all the xpath,css locators.

Cypress.Support Folder : Contains Page Objects and write all the objects present in the page and export the pages in test file

Cypress.config - Contains  the standard configurations like View port,Default time out,Url,Retries,Specpattern 



