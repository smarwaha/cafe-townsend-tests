'use strict';
require('chai-as-promised');
require('chai/register-assert');
require('chai/register-expect');// Using Expect style
require('chai/register-should');

// Login Page Form Elements
module.exports = {
    userNameField:           element(by.xpath("//input[@ng-model='user.name']")),
    passwordField:           element(by.xpath("//input[@ng-model='user.password']")),
    loginButton  :           element(by.xpath("//button[contains(text(), 'Login')]")),
    errorMessage :           element(by.xpath("//p[@class='error-message ng-binding']")),
};


 