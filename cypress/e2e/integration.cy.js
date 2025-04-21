/// <reference types="cypress" />

describe("frontend-backend integration", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders message from the backend", () => {
    cy.contains("Hello from Fastapi").should("be.visible");
  });
});
