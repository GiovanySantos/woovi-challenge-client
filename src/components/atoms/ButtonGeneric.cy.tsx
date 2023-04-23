import React from "react";
import ButtonGeneric from "./ButtonGeneric";

describe("Should test ButtonGeneric", () => {
  it("Should test basic properties", () => {
    cy.mount(
      <ButtonGeneric onClick={() => alert("tested")} dataTestId='test-button'>
        <div>Test</div>
      </ButtonGeneric>
    );

    cy.findByTestId("test-button").should("exist").should("have.text", "Test");
    cy.findByTestId("test-button").should("exist").click();
    cy.on("window:alert", (alert) => {
      expect(alert).to.contains("tested");
    });
  });
});

