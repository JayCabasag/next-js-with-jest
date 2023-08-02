# Next.js with Jest

This repository provides a Next.js project configured to use Jest as the testing library. It is designed to help you learn how to use Jest and React Testing Library for testing your Next.js applications.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

[Jest](https://jestjs.io/) is a popular JavaScript testing framework with a focus on simplicity and ease of use. It provides a powerful and flexible testing environment for your JavaScript applications. [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) is a library that helps you test your React components in a user-centric way, simulating how users interact with your application.

This repository sets up a basic Next.js application and integrates Jest and React Testing Library for testing purposes. The goal is to give you a foundation to start writing tests for your Next.js projects and to learn best practices in testing React applications.

## Getting Started

### Prerequisites

To get started with this project, you will need the following software installed on your machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (npm comes bundled with Node.js)

### Installation

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/JayCabasag/next-js-with-jest.git
   ```

2. Change into the project directory:

   ```bash
   cd next-js-with-jest
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will launch Jest and execute all the test files in the `__tests__` folder.

## Writing Tests

You can start writing tests in the `__tests__` folder using the `.test.js` extension. For example, if you have a component named `Button.js`, you can create its corresponding test file as `Button.test.js` in the `__tests__` folder.

It is recommended to use React Testing Library to interact with your components in a way that simulates user behavior and verify the expected outcomes.

## Folder Structure

The folder structure of this project is as follows:

```
next-js-with-jest/
├── __tests__/
│   ├── exampleComponent.test.js
├── components/
│   ├── exampleComponent.js
├── pages/
│   ├── index.js
├── package.json
└── ... (other configuration files)
```

- `__tests__/`: This folder contains the test files for your components.
- `components/`: This folder holds the React components of your Next.js application.
- `pages/`: This folder contains the Next.js page components.

## Contributing

Contributions to this project are welcome! If you find any issues or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute this code as you see fit. See the [LICENSE](LICENSE) file for more details.

Happy testing! 🚀
