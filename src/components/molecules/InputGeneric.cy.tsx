import React from "react";
import InputGeneric from "./InputGeneric";

describe("Should test InputGeneric component", () => {
  it("Should test basic properties", () => {
    cy.mount(
      <InputGeneric
        name='test_InputGeneric'
        label='test_InputGeneric'
        type='text'
        dataTestId='test-input'
      />
    );

    cy.findByTestId("test-input").should("exist");
    cy.findByTestId("content-test_InputGeneric").should("exist");
    cy.findByText("Test for InputGeneric").should("exist");
  });
});

