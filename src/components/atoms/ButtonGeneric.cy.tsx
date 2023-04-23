import React from "react";
import ButtonGeneric from "./ButtonGeneric";

describe("Should test button functionalities", () => {
  it("Should test click function", () => {
    cy.mount(
      <ButtonGeneric onClick={() => alert("tested")} dataTestId='test-button'>
        <p>Test</p>
      </ButtonGeneric>
    );

    cy.findByTestId("test-button").should("exist").should("have.text", "Test");
    cy.findByTestId("test-button").should("exist").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("tested");
    });
  });
});

