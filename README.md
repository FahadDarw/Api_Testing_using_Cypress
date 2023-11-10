# REST API Testing on a React Project

## Introduction

Welcome to the REST API Testing guide for React projects! This document will walk you through the process of leveraging Cypress, a powerful JavaScript-based end-to-end testing framework, for API testing in your React applications. API testing is a critical component of software development, ensuring the proper functioning of backend services and endpoints. Cypress simplifies this process with its intuitive features and tools.

## Key Features of Cypress for API Testing

### 1. Automatic Request and Response Handling
Cypress automates HTTP requests and responses, eliminating the need for extensive boilerplate code. This streamlines the testing process, allowing you to focus on defining test cases and assertions.

### 2. Easy-to-Read Assertions
Cypress provides clear and easy-to-read assertions for testing various aspects of the API response. This includes verifying the status code, response body, and other critical elements, facilitating better understanding and debugging.

### 3. Automatic Screenshot Capture
Cypress captures screenshots during test execution, offering valuable visual context for debugging. This feature aids in efficiently identifying and rectifying issues.

### 4. Version Control
Integrate API tests into the same codebase as your production code, simplifying test maintenance and ensuring synchronization with code changes. This integration helps catch issues early in the development process.

### 5. Pipeline Integration
Cypress tests seamlessly integrate into continuous integration (CI) and continuous delivery (CD) pipelines, such as GitHub Actions or CircleCI. This ensures automatic execution of API tests with each codebase change, maintaining application quality throughout development.

### 6. API Setup
Cypress allows setting up front-end tests, such as logging in and navigating to specific pages. This ensures API tests can be coupled with end-to-end tests for a comprehensive testing strategy.

## Setting Up the Project

### 1. Install React:
To create a React project, run the following commands in your terminal:

```bash
npx create-react-app my-react-project
cd my-react-project
```

### 2. Install Cypress:
To install Cypress for API testing, use the following command:

```bash
npm install cypress -D
```

### 3. Open Cypress:
After installation, open Cypress using the following command:

```bash
npx cypress open
```

This opens the Cypress Test Runner for test creation and management.

## Writing Cypress Tests for API Endpoints

### Step-by-Step Guide

1. **Create Test Suite and Blocks:**
   Organize your tests by creating a new test suite and blocks. For example:

   ```javascript
   describe('API Testing 2', function () {
     // Create test blocks here
   });
   ```

2. **Declare Variables:**
   Define variables for essential components like the bearer authentication token, API base URL, and user ID:

   ```javascript
   let bearerRest;
   let baseUrl = '<https://gorest.co.in/public/v2/users>';
   let userId;
   ```

3. **Configure Authentication and Base URL:**
   Before each test, configure the bearer authentication token and the base URL of the API:

   ```javascript
   beforeEach(() => {
     bearerRest = Cypress.config('bearerRest');
     baseUrl = Cypress.config('baseUrl');
   });
   ```

4. **Write Tests:**
   Write Cypress tests for various API endpoints. The example below demonstrates tests for `GET /users` and `POST /users`:

   ```javascript
   it('GET /users', () => {
     // Test logic for GET /users
   });

   it('POST /users', () => {
     // Test logic for POST /users
   });
   ```

   Extend these tests for additional endpoints following similar patterns.

5. **GitHub Repository:**
   Find the project on GitHub: [Api_Testing_using_Cypress](https://github.com/FahadDarw/Api_Testing_using_Cypress)

https://www.loom.com/share/bbba2de4f1f64edc93cb1a758619588e?sid=f93b717f-3bac-4c55-972e-6e234086ec1c
