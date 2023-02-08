import React from "react";
import Home from "../../src/components/generic/Home";
import { mount } from "cypress/react18";

describe("<Home />", () => {
  it("renders App link", () => {
    // see: https://on.cypress.io/mounting-react
    // mount(<Home />);
    cy.visit("/");
    cy.contains(/Hello friend/i).should("be.visible");
  });
});
