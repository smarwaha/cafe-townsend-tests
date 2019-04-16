'use strict';
require('chai-as-promised');
require('chai/register-assert');
require('chai/register-expect');// Using Expect style
require('chai/register-should');

// Landing Page elements
module.exports = {  
    userNameGreeting:        element(by.xpath("//p[@id='greetings']")),
    logoutButton    :        element(by.xpath("//p[@class='main-button']")),
    createButton    :        element(by.xpath("//a[@id='bAdd']")),
    editButton      :        element(by.xpath("//a[@id='bEdit']")),
    deleteButton    :        element(by.xpath("//a[@id='bDelete']")),
};