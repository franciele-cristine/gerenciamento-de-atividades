const { cyan } = require("@material-ui/core/colors")

context("Activities Register", () =>{
    it("register activity with success", () =>{
        cy.visit("http://localhost:3000/activities")
    })
})