Feature: User Login to Demoblaze

  Scenario: Login with valid username and password
    Given I navigate to the Demoblaze webapp
    When I click on the login link
    And I enter username "Prabhu123"
    And I enter password "Jackman"
    And I click on the login button
    Then I should see the logout link
