# Feature: delete Api

# Scenario Outline: Deleting some users
# Given I hit delete api for <userID>
# Then status code 204 must be returned
# When i hit Get Api for <userID>
# Then no response i should get

# Examples:
# |userID|
# |201   |
# |202   |
# |203   |