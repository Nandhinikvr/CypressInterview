import test from '../../objects/test.obj'
class HomePage {

    acceptCookies() {
        return cy.get(test.cookieAcceptBtn)
    }

    closeSignupFormButton() {
        return cy.get(test.signUpCloseBtn)
    }

    mensCLothingTab() {
        return cy.get(test.mensClothing)
    }

}

export default HomePage;
