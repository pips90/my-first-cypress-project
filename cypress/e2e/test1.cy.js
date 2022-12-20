/// <reference types="cypress"/>

it("Google Search", () => {
  cy.visit("https://google.com");
  cy.get(".gLFyf").type("Automation Step by Step{Enter}");
  // we can use {Enter} instead of what is below
  //cy.contains("Google Search").click();
  // add , {timeout:5000} for timeout errors
  cy.contains("Videos", { timeout: 5000 }).click();
});
