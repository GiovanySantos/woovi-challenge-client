import React from "react";
import Content from "./Content";

describe("Should test Content", () => {
  it("Should test basic properties", () => {
    cy.mount(<Content contentKey='test_content' />);

    cy.findByTestId("content-test_content")
      .should("exist")
      .should("have.have.text", "this is a test");
  });
});

