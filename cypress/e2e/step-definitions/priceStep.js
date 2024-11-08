import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { PrincePage } from "../pages/pricePage";

const pricePage = new PrincePage();

When("The select active value is {string}", (value) => {
    pricePage.selectSortingOption(value)
});

When('The select the value {string}', (value) => {
    pricePage.checkSortingOption(value);
});

Then("In the {string} the first {string} name is {string}", (id, idSecondary, value) => {
    pricePage.FirstProductNamePrice(id, idSecondary, value)
})

Then("In the {string} the first {string} price is {string}", (id, idSecondary, value) => {
    pricePage.FirstProductNamePrice(id, idSecondary, value)
})

Then("In the {string} the last {string} name is {string}", (id, idSecondary, value) => {
    pricePage.LastProductNamePrince(id, idSecondary, value)
})

Then("In the {string} the last {string} price is {string}", (id, idSecondary, value) => {
    pricePage.LastProductNamePrince(id, idSecondary, value)
})





