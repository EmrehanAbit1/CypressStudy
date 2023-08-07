/// <reference types="cypress" />

class SearchWikiPage {
    visitWikiSearchPage(url) {
        cy.visit(url);
    }

    mainSearchBox(selector, searchInput) {
        cy.sendKeys(selector, searchInput);
    }

    clickSearchButton() {
        cy.clickElement(data.searchButton);
    }

    advancedSearch() {
        cy.clickContains(data.widgetDownButton, data.advancedSearhText);
    }

    searchIn() {
        cy.clickContains(data.widgetDownButton, data.searchInText);
    }

    theseWords(selector, text) {
        cy.sendKeys(selector, text);
    }

    exactlyThisText(selector, text) {
        cy.sendKeys(selector, text);
    }

    notTheseWords(selector, text) {
        cy.sendKeys(selector, text);
    }

    oneOfTheseWords(selector, text) {
        cy.sendKeys(selector, text);
    }

    fileTypeSelection(selectorField, fileType, text) {
        cy.clickElement(selectorField);
        cy.clickContains(fileType, text);
    }

    sortingOrderSelection(selectorField, fileType, text) {
        cy.clickElement(selectorField);
        cy.clickContains(fileType, text)
    }

    assertPage(selector, text) {
        cy.assertIfElementTextExist(selector, text);
    }

    selectSearchInType(selector) {
        cy.clickElement(selector);
    }

}

export default SearchWikiPage;