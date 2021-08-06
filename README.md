<h1 align="center">
  <img alt="eddypbr" src="./.github/nextjs-logo.png" width="240px" />
  <br />
  <br />
  NextJS + Typescript - Setup
</h1>

<br />

<p align="center">
  <img alt="EddyPBR" src="https://img.shields.io/badge/Developed%20by%3A-EddyPBR-%23DD3B3F" />
  <img alt="License MIT" src="https://img.shields.io/badge/License-MIT-%2398C611" />
  <img alt="Typescript" src="https://img.shields.io/badge/Main%20lenguage-Typescript-%232F74C0" />
</p>

<br />

## About

This project is my base structure for NEXTJS applications. I researched a lot and learned a lot with other devs and other configurations, so I decided to create my own project setup with `NEXTJS`, `TYPESCRIPT`, `STYLED-COMPONENTS`, `ESLINT` and `PRETTIER`.

I hope it will be useful to all who are watching/studying this project, and any tips, suggestions, or if you want to improve or create another project on top of this one, feel free and share it with me too.

You can follow this README step-by-step or simply download the project and use all its structure, packages and configurations. That's it at last, I hope you like it!

## ESTRUTURA BASE

- Execute the command: `yarn create next-app . --typescript`
- Remove api folder;
- Remove styles folder;
- In the file `_app.tsx` remove the import from global.css;
- In the file `index.tsx`: Remove the following tags `<main>` and `<footer>` and their respective child tags, remove component Image import, 
remove link tag from favicon, remove import styles from `Home.modules.css`, and the `className` of the `<div>` tag;
- Delete the README.md file;
- Create a folder called "src";
- Put the "pages" folder into the "src" folder;

<br />

## ESLINT E PRETTIER

First install the necessary packages to configure eslint and prettier, white the command:

```
yarn add eslint eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

With the packages installed, let's configure the Prettier files.

- First create a `.prettierrc` file, copy and paste the following code snippet:
```
  {
    "semi": true, // ponto e virgula
    "singleQuote": false // aspas simples
  }
```


- Now create a `.prettierignore` file, copy and paste the following code snippet:
```
node_modules
.next
yarn.lock
package-lock.json
public
```

- With prettier configured, let's now configure Eslint, copy the following code snippet into the file `.eslintrc`:
```
  {
    "parser": "@typescript-eslint/parser",
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "prettier",
      "eslint-plugin-import-helpers",
      "import"
    ],
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "next",
      "next/core-web-vitals"
    ],
    "env": {
      "es6": true,
      "browser": true,
      "jest": false,
      "node": true
    },
    "rules": {
      "comma-dangle": ["error", "always-multiline"],
      "semi": "error",
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": 0,
      "react/display-name": 0,
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/explicit-function-return-type": 0,
      "@typescript-eslint/explicit-member-accessibility": 0,
      "@typescript-eslint/indent": 0,
      "@typescript-eslint/member-delimiter-style": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-var-requires": 0,
      "@typescript-eslint/no-use-before-define": 0,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          "argsIgnorePattern": "^_"
        }
      ],
      "no-console": [
        "warn",
        {
          "allow": ["warn", "error"]
        }
      ],
      "import/no-duplicates": ["error", { "considerQueryString": true }],
      "import-helpers/order-imports": [
        "warn",
        {
          "newlinesBetween": "always",
          "groups": [
            ["/^react/"],
            ["module"],
            ["/^~//"],
            ["parent", "sibling", "index"]
          ],
          "alphabetize": { "order": "asc", "ignoreCase": true }
        }
      ]
    }
  }
```

- Now create the `.eslintignore` file and copy the following code snippet:
```
  **/node_modules/*
  **/out/*
  **/.next/*
```

With everything set up, now run the `yarn lint` command in your terminal. So eslint must have returned some syntax errors, so you can either solve it one-by-one or just run the `yarn lint --fix` command and it will force the code and fix it.

PS: In case of error with eslint or prettier, remove the directory `node_modules` and `yarn-lock` and run the command `yarn` in your terminal again!

<br />

## PATHS SNIPPETS

Do you know when you need to access a certain component or file inside a directory, and we have to type 4x the `../` just to get to the directory where the components are? - So the stretches of paths compose to help you.

Inside the `tsconfig.json` file, inside `compiler-options` add the following:
```
  "paths": {
    "@components/*": ["./src/components/*"],
    "@styles/*": ["./src/styles/*"],
    "@pages/*": ["./src/pages/*"],
    "@services/*": ["./src/services/*"],
    "@utils/*": ["./src/utils/*"],
    "@assets/*": ["./src/assets/*"]
  }
```

PS: Need to restart VSCODE if using it.

With this you can import your components with `import { YourComponent } from "@components/YourComponent";`, you can also create your own snippets following the examples already created.
