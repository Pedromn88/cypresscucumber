export class LoginPage {
    visitLink(url) {
        cy.visit(url);
    }
    getInputPage(id, text) {
        return cy.get(`[data-test=${id}]`).type(text).should("have.value", text)
    }
    getClearInputPage(id) {
        return cy.get(`[data-test=${id}]`).clear().should("have.value", "")
    }

    getNotMessageError(id) {
        return cy.get(`[data-test=${id}]`).should("not.exist")
    }

    getMessageError(id, state, text) {
        return cy.get(`[data-test=${id}]`).should(state).and("have.text", text)
    }

    getClickLoginButton(id, text) {
        return cy.get(`[data-test=${id}]`).should("have.value", text).click()
    }
}