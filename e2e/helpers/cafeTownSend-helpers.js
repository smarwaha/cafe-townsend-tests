// Require
'use strict';
require('chai-as-promised');
require('chai/register-assert');
require('chai/register-expect');// Using Expect style
require('chai/register-should');

let until = protractor.ExpectedConditions;

// Helper methods used by the Step definations
module.exports = {

  formPage: require('../features/pages/formPage.js'),
  loginPage: require('../features/pages/loginPage.js'),
  landingPage: require('../features/pages/landingPage.js'),


  getElementName: function (webElement) {
    return webElement.getText()
  },


  // Enter username in username name field
  userEntersUserName: function (userName) {

    let self = this;
    this.loginPage.userNameField.sendKeys(userName).then(function () {

    });
  },

  // Enter password in password field
  userEntersPassword: function (passWord) {

    let self = this;
    this.loginPage.passwordField.sendKeys(passWord).then(function () {

    });
  },

  // User Clicks on Login button
  userClicksOnLoginBtn: function () {

    let self = this;
    this.loginPage.loginButton.click().then(function () {
      browser.wait(until.presenceOf(self.landingPage.userNameGreeting), 1000, 'Element may not be present at all in the DOM.');
      self.getElementName(self.landingPage.userNameGreeting).then(function (text) {
        let parameterString = "Hello Luke";
        expect(text).contains(parameterString);
        return true;
      });
    }).catch(function (e) {
      browser.wait(until.presenceOf(self.loginPage.errorMessage), 1000, 'Element may not be present at all in the DOM.');
      self.getElementName(self.loginPage.errorMessage).then(function (text) {
        let parameterString = "Invalid username or password!";
        expect(text).contains(parameterString);
        return false;
      });
    });
  },

  userVerifiesGreetingText: function () {
    let self = this;
    browser.wait(until.presenceOf(self.landingPage.userNameGreeting), 1000, 'Element may not be present at all in the DOM.');
    self.getElementName(self.landingPage.userNameGreeting).then(function (text) {
      let parameterString = "Hello Luke";
      expect(text).contains(parameterString);
    });
  },

  verifyLogoutButtonPresent: function () {
    let self = this;
    browser.wait(until.presenceOf(self.landingPage.logoutButton), 1000, 'Element may not be present at all in the DOM.');
    self.getElementName(self.landingPage.logoutButton).then(function (text) {
      let parameterString = "Logout";
      expect(text).contains(parameterString);
    });

  },

  verifyCreateButtonPresent: function () {
    let self = this;
    browser.wait(until.presenceOf(self.landingPage.createButton), 1000, 'Element may not be present at all in the DOM.');
    self.getElementName(self.landingPage.createButton).then(function (text) {
      let parameterString = "Create";
      expect(text).contains(parameterString);
    });

  },

  verifyEditButtonPresentAndDisabled: function () {
    let self = this;
    self.landingPage.editButton.getAttribute('disabled').then(function (attribute) {
      let boolValue = attribute == "true" ? false : true;
      expect(boolValue).to.equal(true);
      browser.wait(until.presenceOf(self.landingPage.editButton), 1000, 'Element may not be present at all in the DOM.');
      self.getElementName(self.landingPage.editButton).then(function (text) {
        let parameterString = "Edit";
        expect(text).contains(parameterString);
      });
    });
  },


  verifyDeleteButtonPresentAndDisabled: function () {
    let self = this;
    self.landingPage.deleteButton.getAttribute('disabled').then(function (attribute) {
      let boolValue = attribute == "true" ? false : true;
      expect(boolValue).to.equal(true);
      browser.wait(until.presenceOf(self.landingPage.deleteButton), 1000, 'Element may not be present at all in the DOM.');
      self.getElementName(self.landingPage.deleteButton).then(function (text) {
        let parameterString = "Delete";
        expect(text).contains(parameterString);
      });
    });
  },

  userClicksCreateButton: function () {
    let self = this;
    this.landingPage.createButton.click().then(function () {
      browser.wait(until.presenceOf(self.formPage.addButton), 1000, 'Element may not be present at all in the DOM.');
      self.getElementName(self.formPage.addButton).then(function (text) {
        let parameterString = "Add";
        expect(text).contains(parameterString);
      });
    });
  },

  userEntersFirstName: function (firstName) {
    let self = this;
    this.formPage.firstNameInpField.sendKeys(firstName).then(function () {
    });
  },

  userEntersLastName: function (lastName) {
    let self = this;
    this.formPage.lastNameInpField.sendKeys(lastName).then(function () {
    });
  },


  userEntersStartDate: function (startDate) {
    let self = this;
    this.formPage.startDateInpField.sendKeys(startDate).then(function () {
    });
  },

  userEntersEmail: function (emailInput) {
    let self = this;
    this.formPage.emailInpField.sendKeys(emailInput).then(function () {
    });
  },

  userClicksOnAddButton: function () {
    let self = this;
    this.formPage.addButton.click();
  },

  userFindsTheEmpDetails: function (firstName) {
    let self = this;
    let employeeDetails = element(by.xpath("//ul[@id='employee-list']//li[contains(text(), '"+firstName+"')]"));
    browser.executeScript("arguments[0].scrollIntoView();", employeeDetails.getWebElement()).then(function () { });    
    browser.actions().doubleClick(employeeDetails).perform();
  },

  userClicksOnDeleteButton: function () {

    let self = this;
    this.formPage.deleteButton.click().then(function () {
      browser.switchTo().alert().accept();   
    });
  },


  userClearsEmailAndEntersNewEmail: function (newemailInput) {

    let self = this; 
    this.formPage.emailInpField.clear();
    this.formPage.emailInpField.sendKeys(newemailInput);
          
  },

  userClicksOnUpdateBtn: function () {

    let self = this; 
    this.formPage.updateButton.click();
    
  },

  userClicksOnLogoutBtn: function () {

    let self = this; 
    this.landingPage.logoutButton.click();
    
  },

  verifyUserIsLoggedOut: function () {

    let self = this; 
    browser.wait(until.presenceOf(self.loginPage.loginButton), 1000, 'Login Button may not be present at all in the DOM.');
    self.getElementName(self.loginPage.loginButton).then(function (text) {
      let parameterString = "Login";
      expect(text).contains(parameterString);
        
    });
   
  },
};

