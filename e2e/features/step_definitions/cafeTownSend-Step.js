'use strict';
var { setDefaultTimeout } = require('cucumber');
setDefaultTimeout(60 * 1000);
var { And, But, Given, Then, When } = require('cucumber');
var {After, Before} = require('cucumber');
var assert = require('assert');
require('../../helpers/cafeTownSend-helpers.js');
let cafeTownSend = require('../../helpers/cafeTownSend-helpers.js');

//Constants
const URL = 'http://cafetownsend-angular-rails.herokuapp.com'
const MainURL = 'cafetownsend-angular-rails.herokuapp.com/login'
const LandingPageURL = 'cafetownsend-angular-rails.herokuapp.com/employees'
const NewEmployeeURL = 'cafetownsend-angular-rails.herokuapp.com/employees/new'

// Given When and Then methods used by the BDD scenarios
When(/^The user starts the browser and access the main link$/, function () {

    browser.waitForAngularEnabled(true);
    browser.get(URL);
    if (browser.getCurrentUrl()) {
        return browser.getCurrentUrl().then(function (text) {
            expect(text).to.contain('cafetownsend-angular-rails.herokuapp.com');
        });
    }
});


Then(/^The user enters the username([^]*)$/, function (userName) {

    cafeTownSend.userEntersUserName(userName);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(MainURL);
    });

});

Then(/^The user enters the password([^]*)$/, function (passWord) {

    cafeTownSend.userEntersPassword(passWord);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(MainURL);

    });

});

Then(/^The user clicks on login button$/, function () {

   var returnFlag = cafeTownSend.userClicksOnLoginBtn();

    return browser.getCurrentUrl().then(function (text) {
        switch (returnFlag) {
            case (false):
                expect(text).to.contain(MainURL);
                break;
            case (true):
                expect(text).to.contain(LandingPageURL);
                break;
        }

    });

});

Then(/^The user verifies the greeting text$/, function () {

    cafeTownSend.userVerifiesGreetingText();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});


Then(/^The user verifies logout button is present on landing screen$/, function () {

    cafeTownSend.verifyLogoutButtonPresent();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user verifies create button is present on landing screen$/, function () {

    cafeTownSend.verifyCreateButtonPresent();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user verifies edit button is present on landing screen and is disabled$/, function () {

    cafeTownSend.verifyEditButtonPresentAndDisabled();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user verifies delete button is present on landing screen and is disabled$/, function () {

    cafeTownSend.verifyDeleteButtonPresentAndDisabled();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user clicks on the create button$/, function () {

    cafeTownSend.userClicksCreateButton();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(NewEmployeeURL);

    });

});

Then(/^The user enters the first name([^]*)$/, function (firstName) {

    cafeTownSend.userEntersFirstName(firstName);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(NewEmployeeURL);
    });

});


Then(/^The user enters the last name([^]*)$/, function (lastName) {

    cafeTownSend.userEntersLastName(lastName);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(NewEmployeeURL);
    });

});

Then(/^The user enters the start date([^]*)$/, function (startDate) {

    cafeTownSend.userEntersStartDate(startDate);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(NewEmployeeURL);
    });

});


Then(/^The user enters the email([^]*)$/, function (emailInput) {

    cafeTownSend.userEntersEmail(emailInput);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(NewEmployeeURL);
    });

});


Then(/^The user clicks on Add button$/, function () {

    cafeTownSend.userClicksOnAddButton();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user searches the employee details([^]*)$/, function (firstName) {

    cafeTownSend.userFindsTheEmpDetails(firstName);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain('/edit');

    });

});


Then(/^The user clicks on Delete button$/, function () {

    cafeTownSend.userClicksOnDeleteButton();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user enters the new email address([^]*)$/, function (newemailInput) {

    cafeTownSend.userClearsEmailAndEntersNewEmail(newemailInput);

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain('/edit');

    });

});

Then(/^The user clicks on Update button$/, function () {

    cafeTownSend.userClicksOnUpdateBtn();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Given(/^The user is logged in$/, function () {

    cafeTownSend.userVerifiesGreetingText();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(LandingPageURL);

    });

});

Then(/^The user clicks on logout button$/, function () {

    cafeTownSend.userClicksOnLogoutBtn();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(MainURL);

    });

});
Then(/^The User is logged out$/, function () {

    cafeTownSend.verifyUserIsLoggedOut();

    return browser.getCurrentUrl().then(function (text) {

        expect(text).to.contain(MainURL);

    });
});

