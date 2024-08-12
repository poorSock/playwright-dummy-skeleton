# Playwright Dummy Project / Skeleton

This project is a skeleton setup for Playwright, including examples for core functionalities such as page objects, fixtures, and tags/annotations. Follow the instructions below to set up and run the tests.

## Prerequisites

1. **Install Node.js and npm**
   - Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Install Project Dependencies**
   - Navigate to the project directory and run the following command to install all necessary dependencies:
        npm install

3. **Install Playwright**
   - Install the latest version of Playwright: 
         npm init playwright@latest

## Running Tests

Run all Tests for all projects via ***npx playwright test***

1. **Run Tests in Headed Mode**
   - This command runs tests in headed mode: </br>
         ***npx playwright test --headed***
   - This is useful for debugging or demonstration purposes, as you see visuallly how Plywright interacts with the website. 

2. **Run Specific Test by Test Name**
   - This command selects a test via its name for execution: </br>
         ***npx playwright test -g "test name"***

3. **Run Tests in Selected Browser(s)**
   - This command allows you to run tests in a selected browser: </br>
         ***npx playwright test --project firefox***

The project includes several npm scripts to facilitate running tests. Here are the available shortcuts:

1. **Run Debug Last Failed Test**
   - This script runs the last failed test in debug mode:</br>
        ***npm run debugLastFailedTest***
   - This is useful for debugging purposes, allowing you to identify and fix issues.

2. **Run Dummy Tests**
   - This script runs tests tagged with `@dummyTag` for the `chromium` project:</br>
        ***npm run dummyTests***
   - Use this to quickly run a subset of tests that are marked as dummy tests.

3. **Run Desktop Tests**
   - This script runs tests for the desktop `chromium`, `firefox` and `webkit` projects:</br>
        ***npm run desktopTests***
   - This is useful for testing on desktop browser configurations.

4. **Run Mobile Tests**
   - This script runs tests for both `Mobile Chrome` and `Mobile Safari` projects:</br>
        ***npm run mobileTests***
   - This is useful for testing on mobile browser configurations.

## Additional Information

- **Page Objects**: The project follows the page object model to organize and manage page-specific code.
- **Fixtures**: Fixtures are used to set up the test environment, providing reusable data and context for tests.
- **Tags/Annotations**: Tags are used to categorize and selectively run tests.