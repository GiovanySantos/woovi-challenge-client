import React from "react";
import Toaster from "./Toaster";

describe("Should test InputGeneric component", () => {
  it("Should test basic properties", () => {
    cy.mount(<Toaster />);
  });
});

