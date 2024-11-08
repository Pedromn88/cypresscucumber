Feature: Login test suite

    Background:
        Given I visit "https://www.saucedemo.com/"

    Scenario: Show error message when fields are empty
        When I not fill out the field "username"
        And I not fill out the field "password"
        When Not visible the "error" message
        When I click the button with id "login-button" and text "Login"
        Then I should see an error message with id "error" and state "be.visible" that contains text "Epic sadface: Username is required"

    Scenario: Show error message when fields password are empty
        When I fill "username" with the value "locked_out_user"
        And I not fill out the field "password"
        When Not visible the "error" message
        And I click the button with id "login-button" and text "Login"
        Then I should see an error message with id "error" and state "be.visible" that contains text "Epic sadface: Password is required"

    Scenario: Show error message when fields username are empty
        When I fill "password" with the value "secret_sauce"
        And I not fill out the field "password"
        When Not visible the "error" message
        And I click the button with id "login-button" and text "Login"
        Then I should see an error message with id "error" and state "be.visible" that contains text "Epic sadface: Username is required"
