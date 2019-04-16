Feature: Verifying the create employee function


    Background: Browse to Main URL and Login with correct username and password
        When The user starts the browser and access the main link
        Then The user enters the username Luke
        Then The user enters the password Skywalker
        Then The user clicks on login button


    @Regression @CafeTownSend
    Scenario Outline: Creating the employee details
        When The user clicks on the create button
        Then The user enters the first name<firstName>
        Then The user enters the last name<lastName>
        Then The user enters the start date<startDate>
        Then The user enters the email<emailInput>
        Then The user clicks on Add button
        Then The user searches the employee details<firstName>


        Examples:
            | firstName | lastName | startDate  | emailInput          |
            | QAtest    | user123  | 2019-04-15 | test.user@gmail.com |


    @Regression @CafeTownSend
    Scenario: Logout from the application
        Given The user is logged in
        Then The user clicks on logout button
        Then The User is logged out