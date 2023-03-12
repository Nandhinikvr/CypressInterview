import test from '../objects/test.obj'
describe('NewLook Product validation', () => {

    it('Accepting Cookies', () => {

        //Visit the Newlook Page 
        let resultCount, filteredResultCount
        cy.visit('')
        //Accepting Cookies
        cy.get(test.cookieAcceptBtn).should('be.visible')
            .click()
        //Close Signup Button
        cy.get(test.signUpCloseBtn).should('be.visible')
            .click()
        //Navigate to Mens clothing
        cy.get(test.mensClothing).click({ force: true })
        //Finding the overall count of items 
        cy.get(test.resultsCount).then(function (logoelement) {
            let attrValue = logoelement.text();
            let totalcountarray = attrValue.split(" ")
            resultCount = totalcountarray.slice(3, 4);
        })
        //Selecting a category as Mens Jeans
        cy.get(test.filterBar).each(($el, index, $list) => {
            const labelText = $el.find('strong').text()
            if (labelText.includes('Category')) {
                cy.wrap($el).click()
            }
        })
        cy.get(test.selectorBtn).contains('Mens Jeans').click()

        //selecting a brand as New Look
        cy.get(test.filterBar).each(($el, index, $list) => {
            const labelText = $el.find('strong').text()
            if (labelText.includes('Brand')) {
                cy.wrap($el).click()
            }
        })
        cy.get(test.selectorBtn).contains('New Look').click()
        //selecting a colour
        cy.get(test.filterBar).each(($el, index, $list) => {
            const labelText = $el.find('strong').text()
            if (labelText.includes('Colour')) {
                cy.wrap($el).click()
            }
        })
        cy.get(test.selectColour).contains('Black')
            .click({ force: true })
        cy.intercept('https://collector-px5ba1zfsb.px-cloud.net/api/v2/collector').as('filterWait')
        cy.wait('@filterWait')
        cy.get(test.resultsCount).should('be.visible')
            .then(function (logoelement) {
                let attrValue = logoelement.text();
                let totalcountArray1 = attrValue.split(" ")
                filteredResultCount = totalcountArray1[0];
                cy.log("total value text" + filteredResultCount)
                expect(parseInt(resultCount)).greaterThan(parseInt(filteredResultCount))
            })
    })
})
