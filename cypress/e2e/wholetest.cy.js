// Import the 'faker' function from the '@faker-js/faker' module
import { faker } from '@faker-js/faker'

// Start of the test suite for API Testing 2
describe('API Testing 2', function () {

    // Describe block for API Testing
    describe('API Testing', function () {
        let att1; // Declare variable 'att1' for later use
        let att2; // Declare variable 'att2' for later use
        let bearerRest; // Declare variable 'bearerRest' for later use

        // Before each test, configure 'bearerRest' based on Cypress configuration
        beforeEach(() => {
            bearerRest = Cypress.config("bearerRest");
            bearerRest = Cypress.config("bearerRest"); // (Note: Reassigning 'bearerRest' does not change its value)
        })

        // Test: API - GET details
        it('API - GET details', () => {
            cy.request({
                method: 'GET',
                url: Cypress.config("baseUrl"),
                failOnStatusCode: false,
            }).as('details')

            // Validate status code: 200 (OK) - Indicates a successful request
            cy.get('@details').its('status').should('eq', 200)

            // Log the response body as a JSON string
            cy.get('@details').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        // Test: API - POST Request
        it('API - POST Request', () => {
            cy.request({
                method: 'POST',
                url: Cypress.config("baseUrl"),
                failOnStatusCode: false,
                'auth': {
                    'bearer': bearerRest
                },
                body: {
                    'name': faker.internet.userName(),
                    'gender': 'male',
                    'email': faker.internet.email(),
                    'status': 'active'
                }
            }).as('details')

            // Validate status code: 201 (Created) - Indicates successful creation of a new resource
            cy.get('@details').its('status').should('eq', 201)

            // Log 'id' and 'user' properties from the response
            cy.get('@details').then((response) => {
                let res = response.body
                att1 = res.id
                att2 = res.user
                cy.log(att1)
            })

            // Log the entire response body as a JSON string
            cy.get('@details').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        // Test: API Post - POST Request
        it('API Post - POST Request', () => {
            cy.request({
                method: 'POST',
                url: Cypress.config("URL2"),
                failOnStatusCode: false,
                'auth': {
                    'bearer': bearerRest
                },
                body: {
                    'user': att2,
                    'user_id': att1,
                    'email': faker.internet.email(),
                    'title': 'This is a title',
                    'body': 'This is a message'
                }
            }).as('details')

            // Validate status code: 201 (Created) - Indicates successful creation of a new resource
            cy.get('@details').its('status').should('eq', 201)

            // Log 'id' property from the response
            cy.get('@details').then((response) => {
                let res = response.body
                let post_id = res.id
                cy.log(post_id)
            })

            // Log the entire response body as a JSON string
            cy.get('@details').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        // Test: API - PUT Request
        it('API - PUT Request', () => {
            cy.request({
                method: 'PUT',
                url: `${Cypress.config("baseUrl")}/${att1}`,
                failOnStatusCode: false,
                'auth': {
                    'bearer': bearerRest
                },
                body: {
                    'name': faker.internet.userName(),
                    'gender': 'female',
                    'email': faker.internet.email(),
                    'status': 'active'
                }
            }).as('details')

            // Validate status code: 200 (OK) - Indicates a successful request
            cy.get('@details').its('status').should('eq', 200)

            // Log the entire response body as a JSON string
            cy.get('@details').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

        // Test: API - DELETE Request
        it('API - DELETE Request', () => {
            cy.request({
                method: 'DELETE',
                url: `${Cypress.config("baseUrl")}/${att1}`,
                failOnStatusCode: false,
                'auth': {
                    'bearer': bearerRest
                },
            }).as('details')

            // Validate status code: 204 (No Content) - Indicates a successful request with no content in the response
            cy.get('@details').its('status').should('eq', 204)

            // Log the entire response body as a JSON string
            cy.get('@details').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
        })

    })

})
