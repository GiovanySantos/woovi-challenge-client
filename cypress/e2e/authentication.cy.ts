describe("Should test authentication page", () => {
  beforeEach(() => {
    cy.visit("/authentication");
  });
  it("Should land on authentication page and test content in it", () => {
    cy.findByTestId("content-welcome_message").should("exist");
    cy.findByTestId("content-login_signup_message").should("exist");
    cy.findByTestId("login-button").should("exist");
    cy.findByTestId("signin-button").should("exist");
  });
  it("Should go to login page", () => {
    cy.findByTestId("login-button").should("exist").click();
    cy.findByTestId("");
  });
});

