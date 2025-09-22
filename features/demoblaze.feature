Feature: Purchase Samsung Galaxy S6

  Scenario: User purchases Samsung Galaxy S6 successfully
    Given I navigate to the Demoblaze website
    Then the page title should be "STORE"
    When I login with username "Prabhu123" and password "Jackman"
    Then I should see the welcome message "Welcome Prabhu123"
    When I select the product "Samsung galaxy s6"
    Then I should see the product details page for "Samsung galaxy s6"
    When I add the product to the cart
    And I proceed to checkout
    Then the "Place order" dialog should be displayed
    When I enter the order details:
  | Name        | Prabhu        |
  | Country     | India         |
  | City        | Myl           |
  | Credit Card | 6376161727161 |
  | Month       | August        |
  | Year        | 2025          |

    And I confirm the purchase
    Then I should see the message "Thank you for your purchase!"
    And I close the confirmation
