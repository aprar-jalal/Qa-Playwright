# QA Homework — Playwright E2E Tests

A **Quality Assurance** homework project using **Playwright** with TypeScript for end-to-end browser testing. Covers authentication flows and page-level test scenarios.

## 🛠️ Tech Stack

- **Language:** TypeScript (100%)
- **Testing Framework:** Playwright
- **Test Runner:** Playwright Test

## 📁 Project Structure

```
Qa-Hw/
├── auth/                  # Authentication helpers / fixtures
├── pages/                 # Page Object Models
├── tests/                 # Test files
├── playwright.config.ts   # Playwright configuration
├── tsconfig.json          # TypeScript configuration
├── .env                   # Environment variables
└── package.json
```

## ✨ Features

- End-to-end browser tests with Playwright
- Page Object Model (POM) design pattern
- Authentication test scenarios
- TypeScript for type-safe tests
- Environment-based configuration via `.env`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aprar-jalal/Qa-Hw.git
   cd Qa-Hw
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
4. Configure environment variables in `.env`.

### Running Tests

```bash
# Run all tests
npx playwright test

# Run with UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/<file>.spec.ts
```

## 📄 License

This project is open source and available for educational use.
