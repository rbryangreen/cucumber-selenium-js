Feature: Example Feature

  Scenario: Open Google
    Given I open Google
    Then the title should contain "Google"
    Then I search for "Selenium-Cucumber"
    Then the title should contain "Selenium-Cucumber"
