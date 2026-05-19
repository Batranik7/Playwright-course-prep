Feature:Login and Logout functionality

Scenario: Logging in with valid creds
Given I am on hrm loging page
When I enter valid Id and password
And click on Login
Then I should see dashboard page
Then I Logout

Scenario: Logging in with invalid creds
Given I am on hrm loging page
When I enter invalid Id and password
And click on Login
Then I should see error message




