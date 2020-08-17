/// <reference types="Cypress" />
require('dotenv').config();

describe("Event calendar", () => {
    // beforeEach(() => {
    //     cy.eyesOpen({
    //         appname: 'nzm, Czech Republic',
    //         testName: 'Looking at the event calendar',
    //         browser: {
    //             width: 800,
    //             height: 600
    //         }
    //     })
    // })
    // GIVEN The user is at the National Museum of Agriculture's (NZM) events calendar
    it("successfully loads", () => {
        cy.visit("https://www.nzm.cz/kalendar-akci")
    })
    // WHEN The user chooses Prague as location, August 1, 2020 as start date and August 31, 2020 as end date
    it("Fills in date range and location", () => {
        cy.get('.select2-selection__arrow').click()
        cy.get('.select2-search__field').type('Praha{enter}')
        // more


        // THEN The user can see NZM events that take place in Prague during August 2020

        cy.get('#DatumDO').type("")

        cy.url().should('include', 'coHledate')

        cy.get('.btn > .fa').click()
    })


})