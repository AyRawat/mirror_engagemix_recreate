# EngageMix Frontend

This project is the frontend for EngageMix, built using React, TypeScript, and Vite. It includes a variety of components, hooks, contexts, and pages to provide a comprehensive user interface.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Expanding the ESLint Configuration](#expanding-the-eslint-configuration)
- [Dependencies](#dependencies)
- [Development Guidelines](#development-guidelines)

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-repo/engagemix_frontend.git
    cd engagemix_frontend
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Run the development server:**

    ```sh
    npm run dev
    ```

4. **Build the project:**

    ```sh
    npm run build
    ```

5. **Preview the production build:**

    ```sh
    npm run preview
    ```

## Project Structure

The project is organized as follows:



### Explanation:

1. **`apis/`**: Contains all API-related files, organized by functionality.
2. **`assets/`**: Contains static assets like icons and images, organized into subfolders.
3. **[`components/`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Fsrc%2Fcomponents%2FCustom%2FStatusbar.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A7%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition")**: Divided into subfolders to separate different types of components.
   - **`blocks/`**: Larger, reusable components that form sections of the UI.
   - **[`Custom/`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Fsrc%2Fcomponents%2FCustom%2FStatusbar.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A0%2C%22character%22%3A18%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition")**: Custom components specific to the application.
   - **[`ui/`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Fpackage.json%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A12%2C%22character%22%3A12%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition")**: Basic UI components like buttons, cards, avatars, etc.
4. **`contexts/`**: Contains context providers, organized by functionality.
5. **`hooks/`**: Contains custom hooks.
6. **`lib/`**: Contains utility functions and other library code.
7. **`pages/`**: Contains page components, each representing a route in the application.
8. **`router/`**: Contains routing-related files.
9. **`store/`**: Contains Redux slices and the store configuration.
10. **[`managed_context/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Fmanaged_context%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "/home/ritesh/Recreate/engagemix_frontend/managed_context/")** and **[`test_suite_analysis/`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Ftest_suite_analysis%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "/home/ritesh/Recreate/engagemix_frontend/test_suite_analysis/")**: Specific to the project setup.

## Available Scripts

In the project directory, you can run:

- **`npm run dev`**: Runs the app in the development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build.
- **`npm run lint`**: Lints the codebase using ESLint.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- Configure the top-level [`parserOptions`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A27%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2FREADME.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A13%2C%22character%22%3A27%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition") property like this:

    ```js
    export default tseslint.config({
      languageOptions: {
        // other options...
        parserOptions: {
          project: ['./tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
        },
      },
    })
    ```

- Replace [`tseslint.configs.recommended`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Feslint.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A9%2C%22character%22%3A41%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition") with [`tseslint.configs.recommendedTypeChecked`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Feslint.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A7%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition") or [`tseslint.configs.strictTypeChecked`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fritesh%2FRecreate%2Fengagemix_frontend%2Feslint.config.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A4%2C%22character%22%3A7%7D%7D%5D%2C%222cb710ce-f1d7-4dc4-aec5-b48a31097288%22%5D "Go to definition").
- Optionally add `...tseslint.configs.stylisticTypeChecked`.
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

    ```js
    // eslint.config.js
    import react from 'eslint-plugin-react'

    export default tseslint.config({
      // Set the react version
      settings: { react: { version: '18.3' } },
      plugins: {
        // Add the react plugin
        react,
      },
      rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules,
      },
    })
    ```

## Dependencies

The project uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Redux**: A predictable state container for JavaScript apps.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Lucide React**: A collection of simply beautiful open-source icons for React.

## Development Guidelines

- Follow the folder structure and naming conventions.
- Write clean, readable, and maintainable code.
- Use TypeScript for type safety.
- Use ESLint to maintain code quality.
- Write unit tests for your components and functions.
- Keep your dependencies up to date.

For more information, refer to the documentation of the respective libraries and tools used in this project.

---

Happy coding!


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
