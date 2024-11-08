/// <reference types="cypress" />

describe("example buttons app", () => {

    it('Get on typicode.com and use should and expect on the response', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a("object");
        });
    });

    it('Get on typicode.com and check status, lenght and its an array and not a number', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('object');
            expect(response.body.userId).to.be.a("number");
            expect(response.body.title).to.be.a('string');
            expect(response.body.body).to.be.a('string')
        });
    });

    it.only('Get on typicode.com and check status, lenght and its an array and not a number', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1/comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('array')
            expect(response.body).to.have.length(5);
            let itemWithId5 = response.body.find(item => item.id === 5);
            expect(itemWithId5.email).to.be.a('string');
            expect(itemWithId5).to.have.property('email', 'Hayden@althea.biz');
        });
    });

})