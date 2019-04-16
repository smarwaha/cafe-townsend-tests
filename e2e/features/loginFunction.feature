Feature: Verifying the Login process

  @Regression @CafeTownSend
  Scenario Outline: Browse to Main URL and Login with incorrect username and password
    When The user starts the browser and access the main link
    Then The user enters the username<userName> 
    Then The user enters the password<passWord>
    Then The user clicks on login button
    
    Examples:
      |userName |passWord   | 
      |Luke     |Skywalke   | 
      |Luk      |Skywalker  | 
      |Luk      |Skywalke   | 
      |Luke     |Skywalker  | 
      
  @Regression @CafeTownSend
     Scenario: Logout from the application
     Given The user is logged in
     Then The user clicks on logout button
     Then The User is logged out 
    