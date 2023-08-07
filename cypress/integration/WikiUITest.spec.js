/// <reference types="cypress" />

import SearchWikiPage from "../support/PageObject/SearchWikiPage"

describe("Case study for searching on Wiki", function () {
    const swp = new SearchWikiPage();
    const url = Cypress.config().baseUrl;

    before(function () {
        cy.fixture("TestData").then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(function () {
        swp.visitWikiSearchPage(url);
    })

    it("TC1: Search with Advanced settings in Wiki", function () {
        swp.mainSearchBox(data.searchBox, data.mainSearchInput);
        swp.advancedSearch();
        swp.theseWords(data.theseWordsField, data.chelseaText);
        swp.exactlyThisText(data.exactTextField, data.exactText);
        swp.notTheseWords(data.notTheseWordsField, data.notTheseWordsText);
        swp.oneOfTheseWords(data.oneOfTheWordsField, data.oneOfTheWordsText);
        swp.fileTypeSelection(data.fileTypeField, data.imageFileTypeClass, data.imageFileTypeText);
        swp.sortingOrderSelection(data.sortingOrderField, data.editDateClass, data.editDateText);
        swp.clickSearchButton();
        swp.assertPage(data.searchResultElement);
    })

    it("TC2: Search with Search In option in Wiki", function () {
        swp.mainSearchBox(data.searchBox, data.searchInputBasketball);
        swp.searchIn();
        swp.selectSearchInType(data.selectAllSearchIn);
        swp.clickSearchButton();
        swp.assertPage(data.searchResultForNba);
    })
})