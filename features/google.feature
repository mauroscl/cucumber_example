Feature: Search in google
    In order to learn more about cucumber
    As a web develop
    I want find articles about cucumber in the internet

Scenario: Search in Google
    Given I visit the Google page
    When I type "cucumber js" in the search field
    And type ENTER
    Then the first link will be "https://github.com/cucumber/cucumber-js"