/// <reference types="cypress" />

describe("example buttons app", () => {

    it('Get on jsonplaceholder and use should and expect on the response is a object', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a("object");
        });
    });

    it('Get on jsonplaceholder and check status, the response is a object, the id is a number, title and body are a string  ', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('object');
            expect(response.body.userId).to.be.a("number").to.be.eq(1)
            expect(response.body.title).to.be.a('string').to.be.contain("sunt aut ")
            expect(response.body.body).to.be.a('string').to.be.contain("quia et suscipit\nsuscipit ")
        });
    });

    it.only('Get on jsonplaceholder and check status, lenght response equal to 5 ....', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/1/comments').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.a('array')
            expect(response.body).to.have.length(5);
            let itemWithId5 = response.body.find(item => item.id === 5);
            expect(itemWithId5.email).to.be.a('string').to.be.eq('Hayden@althea.biz')
            expect(itemWithId5).to.have.property('email', 'Hayden@althea.biz');
        });
    });

})