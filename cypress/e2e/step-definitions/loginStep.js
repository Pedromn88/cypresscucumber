import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../pages/loginPage";

const loginPage = new LoginPage();

Given("I visit {string}", (url) => {
    loginPage.visitLink(url);
});

When("I not fill out the field {string}", (id) => {
    loginPage.getClearInputPage(id)
});

When("I fill {string} with the value {string}", (id, text) => {
    loginPage.getInputPage(id, text)
})

When("I click the button with id {string} and text {string}", (id, text) => {
    loginPage.getClickLoginButton(id, text);
});
When("Not visible the {string} message", (id) => {
    loginPage.getNotMessageError(id)
})

Then("I should see an error message with id {string} and state {string} that contains text {string}", (id, state, text) => {
    loginPage.getMessageError(id, state, text);
});

