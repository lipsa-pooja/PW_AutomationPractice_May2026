# Playwright Automation Practice Framework

This is a Playwright TypeScript automation practice framework created for the SauceDemo application.

The purpose of this project is to practice real-time SDET automation framework concepts like Page Object Model, test data handling, reusable methods, assertions, reporting, and GitHub code maintenance.

## Application Under Test

SauceDemo:

https://www.saucedemo.com/

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model
- JSON test data
- Playwright HTML Report
- Git and GitHub

## Project Structure

```text
PW_AutomationPractice_May2026
│
├── pages
│   ├── loginPage.ts
│   ├── productPage.ts
│   └── checkoutPage.ts
│
├── tests
│   ├── login.spec.ts
│   ├── product.spec.ts
│   ├── checkout.spec.ts
│   └── logout.spec.ts
│
├── test-data
│   └── loginData.json
│
├── playwright.config.ts
├── package.json
├── .gitignore
└── README.md



Scenarios Covered
1.Valid user login
2.Invalid user login
3.Add product to cart
4.Checkout product successfully
5.Logout from application

Framework Design:
This framework follows the Page Object Model design pattern.
Page classes are created under the pages folder. These classes contain locators and reusable page methods.
Test files are created under the tests folder. Test files contain only the scenario flow.
Test data is maintained separately in JSON format under the test-data folder.

How to Install:

Install project dependencies:
npm install

Install Playwright browsers:
npx playwright install

How to Run Tests

Run all tests:
npx playwright test

Run tests in headed mode:
npx playwright test --headed

Run a specific test file:
npx playwright test tests/login.spec.ts --headed

Reports

To open Playwright HTML report:
npx playwright show-report


Failure Artifacts
The framework can capture failure artifacts like:

Screenshot
Video
Trace

These help debug failed test cases.
