Feature: Login test suite

    Background:
        Given I visit "https://www.saucedemo.com/"

    Scenario:  Login With credetials + Select Name (A to Z) and product and price
        Given I fill "username" with the value "standard_user"
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


# El test en general stá muy bien, pero te dejo algunas sugerencias:

# Cambia el nombre de la "Feature" esta no es la "login test suite"

# Al no ser un test de login, los pasos del login deberían de ir en el background

# Intenta que los steps indiquen claramente lo que hacen,  Por ejemplo:
# - I check that is not visible the "error" message
# - I check that the active value is "az" (con respecto a esto teniendo en cuenta que usas cucumber sería mejor práctica es que compruebes el texto que se muestra en el select, no el value)
# - I select the option "az" from the filter (Igual que arriba preferible poner el etxto que el value) 

# Recuerda usar la partícula "Then" para las aserciones principales, y empezar el test siempre por given
