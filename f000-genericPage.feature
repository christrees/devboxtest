Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E ionic tests

  @dev
  Scenario: Running Cucumber with Protractor
    Given I run Cucumber with Protractor
    Then it should still do normal tests
    Then it should expose the correct global variables

  @dev
  Scenario Outline: Generic Page exists
    Given I am on a page
    When I go to <webAddress>
    Then I expect to see a tab <webTitle> with title <pageTitle>
  Examples:
    | webAddress | webTitle | pageTitle |
    | http://127.0.0.1:8100/ | http://127.0.0.1:8100/#/app/playlists | Playlists |

  @dev
  Scenario Outline: Navigate side menu
    Given I am on the <currentPage> page with <user> with <password>
    When I touch or click <navLink> 
    Then I expect to see the navagation sidemenu list
  Examples:
    | currentPage | user | password | navLink | pageNav |
    | http://127.0.0.1:8100/#/app/playlists | generic_user | no_password | nav-icon |

