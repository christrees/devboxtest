Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  @dev
  Scenario: Running Cucumber with Protractor
    Given I run Cucumber with Protractor
    Then it should still do normal tests
    Then it should expose the correct global variables

  @dev
  Scenario: Login Page exists
    Given I go to the login
    Then the title should equal "http://127.0.0.1:7999/#/login"

  @dev
  Scenario Outline: Login
    Given I go to the login
    When I login with <user> and <password>
    Then I expect to be taken to <page>
  Examples:
    | user | password | page |
    | customer_user | test | http://127.0.0.1:7999/#/ |
    | customer_user | notpass | http://127.0.0.1:7999/#/login?returnTo=%2Flogin |

  @dev
  Scenario Outline: Navigate to View
    Given I am on the <currentPage> page as <user> with <password>
    When I click <navLink> 
    Then I expect to be taken to <page>
  Examples:
    | currentPage | user | password | navLink | page |
    | currentPage | customer_user | test | View | http://127.0.0.1:7999/#/list/view |

