it("Assertions Demo", () => {
  cy.visit("https://example.cypress.io");
  cy.contains("get").click();
  // cy.contains("Querying", { timeout: 4000 }).click();
  cy.get("#query-btn")
    .should("contain", "Button")
    .and("have.class", "query-btn")
    .and("be.visible")
    .and("be.enabled");

  expect(true).to.be.true;

  // this test WILL pass
  assert.equal(4, "4", "NOT EQUAL");
  // to make equal 'strict' use strictEqual
  assert.strictEqual(4, "4", "NOT EQUAL");
});
