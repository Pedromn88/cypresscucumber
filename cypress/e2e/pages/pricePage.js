export class PrincePage {
    visitLink(url) {
        cy.visit(url);
    }
    selectSortingOption(value) {
        return cy.get('[data-test="product-sort-container"]')
            .select(value)
    }
    checkSortingOption(value) {
        cy.get('[data-test="product-sort-container"]').should("have.value", value);
    }
    FirstProductNamePrice(id, idSecondary, value) {
        return cy.get(`[data-test=${id}]`).first().find(`[data-test=${idSecondary}]`).should("have.text", value)
    }
    LastProductNamePrince(id, idSecondary, value) {
        return cy.get(`[data-test=${id}]`).last().find(`[data-test=${idSecondary}]`).should("have.text", value)
    }


}