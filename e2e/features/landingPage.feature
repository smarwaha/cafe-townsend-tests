Feature: Verifying the Landing page


    Background: Browse to Main URL and Login with correct username and password
        When The user starts the browser and access the main link
        Then The user enters the username Luke
        Then The user enters the password Skywalker
        Then The user clicks on login button


    @Regression @CafeTownSend
    Scenario: Verifying the Landing page after the user is logged in
        Then The user verifies the greeting text
        Then The user verifies logout button is present on landing screen
        Then The user verifies create button is present on landing screen
        Then The user verifies edit button is present on landing screen and is disabled
        Then The user verifies delete button is present on landing screen and is disabled

    @Regression @CafeTownSend
    Scenario: Logout from the application
        Given The user is logged in
        Then The user clicks on logout button
        Then The User is logged out
