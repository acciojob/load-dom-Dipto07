document.addEventListener("DOMContentLoaded", function() {

	var paragraph = document.createElement("p");

	paragraph.textContent = "DOM load success";

	document.body.appendChild(paragraph);
});

describe("DOM Load Success Test", () => {
    it("should display 'DOM load success' on DOM load", () => {

		cy.visit("index.html");

        cy.contains("DOM load success").should("exist");
    });
});
