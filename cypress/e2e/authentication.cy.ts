describe("Should test Authentication flow e2e", () => {
  describe("Should test auth page", () => {
    beforeEach(() => {
      cy.clearAllSessionStorage();
      cy.visit("/authentication");
    });
    it("Should land on auth page and test content key", () => {
      cy.findByTestId("content-welcome_message").should("exist");
      cy.findByTestId("content-login_signup_message").should("exist");
      cy.findByTestId("login-button").should("exist");
      cy.findByTestId("signin-button").should("exist");
    });
  });

  describe("Should test login page", () => {
    beforeEach(() => {
      cy.clearAllSessionStorage();
      cy.visit("/authentication");
      cy.findByTestId("login-button").should("exist").click();
    });

    const email = "uchiha_sem_susano@morri.com";
    const password = "@SuperSecretPassword!1";

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

    it("Should test error messages", () => {
      cy.findByTestId("login_email_label").should("exist").click().type(email);
      cy.findByTestId("login_password_label")
        .should("exist")
        .click()
        .type(password);
      cy.findByTestId("content-continue_button").should("exist").click();
      cy.findByTestId("content-email_or_password_error_message").should(
        "exist"
      );
      cy.findByTestId("dismiss-button").should("exist").click();
      cy.findByTestId("content-email_or_password_error_message").should(
        "not.exist"
      );
    });

    //* TO DO
    it.skip("Should recover password", () => {});

    //* TO DO
    it.skip("Should authenticate", () => {
      cy.findByTestId("login_email_label").should("exist").click().type(email);
      cy.findByTestId("login_password_label")
        .should("exist")
        .click()
        .type(password);
    });
  });

  describe("Should test signin page", () => {
    beforeEach(() => {
      cy.clearAllSessionStorage();
      cy.visit("/authentication");
      cy.findByTestId("signin-button").should("exist").click();
    });

    it("Should test content keys", () => {
      cy.findByTestId("content-create_your_account").should("exist");
      cy.findByTestId("content-already_have_an_account").should("exist");
      cy.findByTestId("content-already_have_an_account").should("exist");
      cy.findByTestId("content-login").should("exist");
      cy.findByTestId("content-validations_title").should("exist");
      cy.findByTestId("content-email_validation_1").should("exist");
      cy.findByTestId("content-password_validation_1").should("exist");
      cy.findByTestId("content-password_validation_2").should("exist");
    });

    it("Should go to login page and go back", () => {
      cy.findByTestId("content-login").should("exist").click();
      cy.findByTestId("content-welcome_title").should("exist");
      cy.findByTestId("content-signup_redirect_button").should("exist").click();
      cy.findByTestId("content-create_your_account").should("exist");
    });

    it("Should test error messages", () => {
      cy.findByTestId("content-signin_name_label")
        .should("exist")
        .type("Shisui Uchiha");
      cy.findByTestId("content-signin_email_label")
        .should("exist")
        .click()
        .type("uchiha_sem_susano@morri.com");
      cy.findByTestId("signin_password_label")
        .should("exist")
        .type("senhabadaras@123");
      cy.findByTestId("content-continue_button").should("exist").click();
      cy.findByTestId("content-email_validation_2").should("exist");
    });
  });
});

