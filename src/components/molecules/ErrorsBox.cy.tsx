import React from "react";
import ErrorsBox from "./ErrorsBox";

describe("Should test Toaster functionality", () => {
  it("Should test basic properties", () => {
    cy.mount(
      <ErrorsBox
        dataTestId='dismiss-button'
        errorsContentKey={["test_toaster"]}
      />
    );

    cy.findByTestId("content-test_toaster").should("exist");
    cy.findByTestId("dismiss-button").should("exist");
  });
});

