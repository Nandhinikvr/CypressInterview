Feature: Ecommerce validation
    //Feature file for a given scenario
    application Regression
    @Regression
    Scenario: Compare quantity of items present in the Mens clothing without and with filter
    Given I Visit ECommerce Page
    When I accept cookies and close sign up form
    When Navigate to Mens Clothing
    When Check results for mens clothing
    When Select category as mens jeans
    When Select brand as New Look
    When select Color as Black
    Then Compare Count of filtered results of mens clothing with the result we received without any filter

   



