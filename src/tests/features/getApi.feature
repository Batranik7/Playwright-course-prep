Feature: Automating get Api

Scenario: Get api with valid parameter
Given I hit the api with correct filter or parameter
Then I should get a valid response 
And status code should be 200




# Scenario: Get api with invalid parameter
# Given I hit the api with incorrect filter or parameter
# Then status code should be 404