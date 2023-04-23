describe("Should test Authentication flow e2e", () => {
  it("Should land on auth page and test content key", () => {
    cy.clearAllSessionStorage();
    cy.visit("/authentication");
    cy.findByTestId("content-welcome_message").should("exist");
    cy.findByTestId("content-login_signup_message").should("exist");
    cy.findByTestId("login-button").should("exist");
    cy.findByTestId("signin-button").should("exist");
  });
  describe("Should test login page", () => {
    beforeEach(() => {
      cy.clearAllSessionStorage();
      cy.visit("/authentication");
      cy.findByTestId("login-button").should("exist").click();
    });
    it("Should test content key", () => {
      cy.findByTestId("content-welcome_title").should("exist");
      cy.findByTestId("content-login_email_label").should("exist");
      cy.findByTestId("content-login_password_label").should("exist");
      cy.findByTestId("content-recover_password").should("exist");
      cy.findByTestId("continue-button").should("exist").click();
      cy.findByTestId("content-login_redirect_signup_message").should("exist");
      cy.findByTestId("content-signup_redirect_button").should("exist");
    });

    it("Should go to signin page and go back", () => {
      cy.findByTestId("content-signup_redirect_button").should("exist").click();
      cy.findByTestId("content-create_your_account").should("exist");
      cy.findByTestId("content-login").should("exist").click();
      cy.findByTestId("content-welcome_title").should("exist");
    });

    //* TO DO
    it("Should recover password", () => {});

    it("Should authenticate", () => {
      cy.findByTestId("login_email_label")
        .should("exist")
        .click()
        .type("abeautifullemail@woovi.com");
      cy.findByTestId("login_password_label")
        .should("exist")
        .click()
        .type("@SuperSecretPassword!");
    });
  });
});

