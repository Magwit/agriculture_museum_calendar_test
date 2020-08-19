/// <reference types="Cypress" />

describe("Event calendar", () => {
    beforeEach(() => {
        cy.eyesOpen({
            // appname: 'nzm, Czech Republic',
            testName: 'Looking at the event calendar',
            browser: {
                width: 1000,
                height: 660,
            }
        })
    })
    // GIVEN The user is at the National Museum of Agriculture's (NZM) events calendar
    // WHEN The user chooses Prague as location, August 1, 2020 as start date and August 31, 2020 as end date
    it("Fills in date range and location", () => {
        Cypress.config()
        cy.visit("/kalendar-akci")
        cy.get('.select2-selection__arrow').click()
        cy.get('.select2-search__field').type('Praha{enter}')
        cy.get('#DatumOD').type('01.08.2020')
        cy.get('#DatumDO').type('31.08.2020')
        cy.get('.btn > .fa').click()

        // THEN The user can see NZM events that take place in Prague during August 2020

        cy.url().should('include', 'coHledate')
        cy.eyesCheckWindow()

    })

    afterEach(() => {
        cy.eyesClose();
    });

})