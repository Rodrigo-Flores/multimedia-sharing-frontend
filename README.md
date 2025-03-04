# Multimedia Sharing (Frontend)

A modern media player and viewer application that lets you browse, view, and share your family photos and videos much like Google Drive. This project is built with React, Tailwind CSS, and shadcn UI components.

> [!NOTE]
> This project represents the frontend of a multimedia sharing application.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
  - [Building for Production](#building-for-production)
- [Shadcn UI](#shadcn-ui)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dark/Light Theme Toggle:** Switch between light, dark, or system themes using a dropdown menu.
- **Interactive UI Components:** Utilizes custom buttons, inputs, and toast notifications.
- **Responsive Layout:** Designed to work well on different screen sizes.
- **Initial Setup:** Provides a simple home page showcasing component usage (dark theme, input, button, and toast).

## Getting Started

### Prerequisites

> [!IMPORTANT]
> Ensure you are using **Node.js version 18.20.5** or higher for full compatibility.

- **Node.js:** Version **18.20.5** or higher.
- **Yarn:** Used as the package manager. (Installation instructions for Yarn are not required here as it is assumed you already have it.)

### Installation

1. **Clone the repository:**

   ```bash
   git clone git@github.com:Rodrigo-Flores/multimedia-sharing-frontend.git
   cd multimedia-sharing-frontend
   ```

2. **Install dependencies using Yarn:**

   ```bash
   yarn
   ```

> [!TIP]
> If you run into dependency issues, try removing the `yarn.lock` file and reinstalling the packages.

### Running the Project

- **Development Server:** Start the dev server with hot-reloading.

  ```bash
  yarn dev
  ```

- **Production Build:** Create a production build of the app.

  ```bash
  yarn build
  ```

## Shadcn UI

The project uses shadcn UI packages for various UI components. 

> [!TIP]
> To add additional shadcn UI packages, run:
>
> ```bash
> npx shadcn@latest add <package_name>
> ```
> Replace `<package_name>` with the desired package you want to add.

## Project Structure

Below is an overview of the project structure:

```
.
├── LICENSE
├── README.md
├── components.json
├── dist
│   ├── assets
│   │   ├── index-B_ZqyS0V.css
│   │   └── index-k1bOrHg-.js
│   ├── index.html
│   └── vite.svg
├── eslint.config.js
├── index.html
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── theme-context.tsx
│   │   ├── theme-provider.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── dropdown-menu.tsx
│   │       └── input.tsx
│   ├── hooks
│   │   └── useTheme.tsx
│   ├── index.css
│   ├── lib
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages
│   │   └── Home.tsx
│   └── vite-env.d.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

> [!NOTE]
> Familiarize yourself with the project structure to quickly locate components, hooks, and configuration files.

## Contributing

Contributions are welcome! Please follow these guidelines to ensure a smooth process:

1. **Fork the Repository:** Create your fork and clone it locally.
2. **Create a Feature Branch:** Use a descriptive name for your branch (e.g., `feature/add-new-component`).
3. **Commit Your Changes:** Make sure your commits are well-documented.
4. **Submit a Pull Request:** Explain your changes in detail so that reviewers can understand the context.
5. **Follow Code Style Guidelines:** Maintain consistency with the existing codebase (e.g., using ESLint and Prettier).

> [!IMPORTANT]
> Before submitting a pull request, ensure that your code passes all linting checks and aligns with the project's coding standards.

Feel free to open an issue if you have any questions or need guidance.

## License

This project is licensed under the [MIT License](LICENSE).

> [!CAUTION]
> Do not include any sensitive or personal data in your commits or pull requests.