# Cafe Townsend Automated Test

## About the approach used for writing tests
Page object model is used for writing tests
Tools used - protractor with Cucumber and chai

The framework is divided into 4 parts
1. Pages following page object model : formPage.js, landingPage.js, loginPage.js 
2. Step Defination to execute tests
3. Features : loginFunction, landingPage, editFunction, deleteFunction, createFunction which contains BDD scenarios.
4. Helper file which includes all the methods used by step definations : cafeTownSend-helpers.js

package.json : Contains meta-data about project like dependencies and necessary scripts 

## Steps to run Tests

Prerequisites - Java, npm

### Step 1 - Clone the project. Location of git - https://github.com/smarwaha/cafe-townsend-tests.git

### Step 2 - Install packages

```
npm install
```

If Package json is not used then below steps would have been used

```
npm install -g protractor
```
Install cucumber
```
npm install cucumber
npm install protractor-cucumber-framework
```
install chai
```
npm install chai
npm install chai-as-promised
```
### Step3 - Start Selenium Webdriver
```
webdriver-manager update
webdriver-manager start
```

### Step 4 - Execute following command to run tests
```
protractor protractor.conf.js
```