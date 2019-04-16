'use strict';
require('chai-as-promised');
require('chai/register-assert');
require('chai/register-expect');// Using Expect style
require('chai/register-should');

// Main Page elements
module.exports = {  
    addButton:                  element(by.xpath("//button[@ng-show='isCreateForm']")),
    firstNameInpField:          element(by.xpath("//span[contains(text(), 'First name:')]/..//input")),
    lastNameInpField:           element(by.xpath("//span[contains(text(), 'Last name:')]/..//input")),
    startDateInpField:          element(by.xpath("//span[contains(text(), 'Start date:')]/..//input")),
    emailInpField:              element(by.xpath("//span[contains(text(), 'Email:')]/..//input")),
    updateButton:               element(by.xpath("//button[contains(text(), 'Update')]")),
    deleteButton:               element(by.xpath("//p[@ng-click='deleteEmployee()']")),
};