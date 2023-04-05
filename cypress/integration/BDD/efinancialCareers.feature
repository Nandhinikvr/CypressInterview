Feature: EfinancialCareers Login validation

    application Regression
    @Regression
    Scenario: Navigate to EfinancialCareers page and Login and verify the user is Logged in
    Given I Visit EfinancialCareers Page
    When I provide Log in details and Log in
    |userId | password |
    |testuser123@mailinator.com| testing123   |
    Then verify the user is Logged in
    

   



