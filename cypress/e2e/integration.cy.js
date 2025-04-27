/// <reference types="cypress" />

beforeEach(() => {
  cy.visit("/");
});

describe("frontend-backend integration", () => {
  it("renders message from the backend", () => {
    cy.contains("Hello from Fastapi").should("be.visible");
  });
});
