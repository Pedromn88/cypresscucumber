Feature: Login test suite

    Background:
        Given I visit "https://www.saucedemo.com/"

    Scenario:  Login With credetials + Select Name (A to Z) and product and price
        When I fill "username" with the value "standard_user"
        When I fill "password" with the value "secret_sauce"
        When Not visible the "error" message
        And I click the button with id "login-button" and text "Login"
        When The select active value is "az"
        And The select the value "az"
        And In the "inventory-item" the first "inventory-item-name" name is "Sauce Labs Backpack"
        And In the "inventory-item" the first "inventory-item-price" price is "$29.99"
        And In the "inventory-item" the last "inventory-item-name" name is "Test.allTheThings() T-Shirt (Red)"
        And In the "inventory-item" the last "inventory-item-price" price is "$15.99"
        When The select active value is "lohi"
        And The select the value "lohi"
        And In the "inventory-item" the first "inventory-item-name" name is "Sauce Labs Onesie"
        And In the "inventory-item" the first "inventory-item-price" price is "$7.99"
        And In the "inventory-item" the last "inventory-item-name" name is "Sauce Labs Fleece Jacket"
        And In the "inventory-item" the last "inventory-item-price" price is "$49.99"
        When The select active value is "hilo"
        And The select the value "hilo"
        And In the "inventory-item" the first "inventory-item-name" name is "Sauce Labs Fleece Jacket"
        And In the "inventory-item" the first "inventory-item-price" price is "$49.99"
        And In the "inventory-item" the last "inventory-item-name" name is "Sauce Labs Onesie"
        And In the "inventory-item" the last "inventory-item-price" price is "$7.99"



