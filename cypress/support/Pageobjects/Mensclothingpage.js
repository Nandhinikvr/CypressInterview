import test from '../../objects/test.obj'
class MensclothingPage {

    totalResultCount() {
        return cy.get(test.resultsCount)
    }

    filterBarSection() {
        return cy.get(test.filterBar)
    }

    selectorButton() {
        return cy.get(test.selectorBtn)
    }

    colorSelector(){
        return cy.get(test.selectColour)
    }

}

export default MensclothingPage;
