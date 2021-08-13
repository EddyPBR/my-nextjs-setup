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

## ABOUT

This project is my base structure for NEXTJS applications. I researched a lot and learned a lot with other devs and other configurations, so I decided to create my own project setup with `NEXTJS`, `TYPESCRIPT`, `STYLED-COMPONENTS`, `ESLINT` and `PRETTIER`.

I hope it will be useful to all who are watching/studying this project, and any tips, suggestions, or if you want to improve or create another project on top of this one, feel free and share it with me too.

You can follow this README step-by-step or simply download the project and use all its structure, packages and configurations. That's it at last, I hope you like it!

<br />

## ESTRUTURA BASE

- Execute the command:
```
  yarn create next-app . --typescript
```
- Remove api folder;
- Remove styles folder;
- In the file `_app.tsx` remove the import from global.css;
- In the file `index.tsx`: Remove the following tags `<main>` and `<footer>` and their respective child tags, remove component Image import, 
remove link tag from favicon, remove import styles from `Home.modules.css`, and the `className` of the `<div>` tag;
- Delete the `README.md` file;
- Create a folder called `src`;
- Put the `pages` folder into the `src` folder;

<br />

## ESLINT E PRETTIER

First install the necessary packages to configure eslint and prettier, white the command:

```
yarn add eslint eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser -D
```

<br />

With the packages installed, let's configure the Prettier files.

- First create a `.prettierrc` file, copy and paste the following code snippet:
```
  {
    "semi": true, // ponto e virgula
    "singleQuote": false // aspas simples
  }
```

<br />

- Now create a `.prettierignore` file, copy and paste the following code snippet:
```
node_modules
.next
yarn.lock
package-lock.json
public
```

<br />

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

<br />

- Now create the `.eslintignore` file and copy the following code snippet:
```
  **/node_modules/*
  **/out/*
  **/.next/*
```

<br />

With everything set up, now run the `yarn lint` command in your terminal. So eslint must have returned some syntax errors, so you can either solve it one-by-one or just run the `yarn lint --fix` command and it will force the code and fix it.

PS: In case of error with eslint or prettier, remove the folder `node_modules` and `yarn-lock` and run the command `yarn` in your terminal again!

<br />

## PATHS SNIPPETS

Do you know when you need to access a certain component or file inside a folder, and we have to type 4x the `../` just to get to the folder where the components are? - So the stretches of paths compose to help you.

Inside the `tsconfig.json` file, inside `compiler-options` add the following:
```
  "baseUrl": ".",
  "paths": {
    "@components/*": ["./src/components/*"],
    "@styles/*": ["./src/styles/*"],
    "@pages/*": ["./src/pages/*"],
    "@services/*": ["./src/services/*"],
    "@utils/*": ["./src/utils/*"],
    "@assets/*": ["./src/assets/*"]
  }
```

<br />

PS: Need to restart VSCODE if using it.

With this you can import your components with `import { YourComponent } from "@components/YourComponent";`, you can also create your own snippets following the examples already created.

<br />

## EDITOR CONFIG

Editor config is used to maintain a certain pattern of indentation, charset and other text editing settings, just create a `.editorconfig` file and copy and paste the following code snippet:

```
  root = true

  [*]
  indent_style = space
  indent_size = 2
  charset = utf-8
  end_of_line = lf
  trim_trailing_whitespace = true
  insert_final_newline = true
```

<br />

## STYLED-COMPONENTS

Some extra settings are needed with styled-components using nextjs, without these settings what would happen is that the page would load without any styling and then it would load the styles (that's why the styles would be loaded via javascript) causing a horrible "flash" on page load.

When in fact it's interesting that this styling comes as a common css, without the need for a style loading script at all, so let's configure the styled-components.

- First let's install the babel package with the following command: 
```
  yarn add babel-plugin-styled-components -D
```

<br />

- Now you need to create a `.babelrc` file and copy the following code snippet:
```
  {
    "presets": [
      "next/babel"
    ],
    "plugins": [
      [
        "styled-components",
        {
          "ssr": true,
          "displayName": true,
          "preprocess": false
        }
      ]
    ]
  }
```

<br />

- Install styled-components, with the following command:
```
  yarn add styled-components
```

- Install the types:
```
  yarn add @types/styled-components  -D
```

- With the styled-components installed and babel configured, we have to configure nextjs to render the styled-components with css, for that inside the `pages` folder add the file `_document.tsx` and copy the following code snippet:
```
  import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from "next/document";
  import { ServerStyleSheet } from "styled-components";

  export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;

      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
          });

        const initialProps = await Document.getInitialProps(ctx);
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          )
        }
      } finally {
        sheet.seal();
      }
    }

    render(): JSX.Element {
      return (
        <Html lang="pt">
          <Head>
            <meta charSet="utf-8" />
            <link rel="shortcut icon" href="/favicon.png" type="image/png" />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
```

<br />

## STYLED-COMPONENTS THEME PROVIDER AND GLOBAL CONFIG

It's a common practice to create a theme file containing colors, fonts and the like, and also a global configuration file, but do you know the best practices and how to define typeses using typescript? - if you don't know, this topic will be useful to you.

- Now let's create a theme for our application. Inside the `src` folder create the `styles` folder and now create a file called `theme.ts` and copy the following code snippet:
```
  export const theme = {
    colors: {
      link: "#645CEE",
      text: "#AAB1BB",
      background: "#090E14",
    },
    fonts: {
      title: "700 2rem 'Roboto', sans-serif",
      text: "400 1rem 'Roboto', sans-serif",
    },
  };
```

<br />

- That done we have a problem, if by chance you try to access a property of `theme.ts` like for example: theme.colors.background, the typescript still won't understand its type, so we must tell the typescript what type of the `theme.ts` which is pretty simple. Create a folder called `@types` within that folder create a file called `styled.d.ts` and copy the following code snippet:
```
  import "styled-components";

  import { theme } from "@styles/theme";

  export type Theme = typeof theme;

  declare module "styled-components" {
    export interface DefaultTheme extends Theme {};
  };
```

<br />

- Nice! with the theme created and typing defined, let's create the global styling of our project. To do this create a `global.ts` file inside the `styles` directory and copy the following code snippet:
```
  import { createGlobalStyle } from "styled-components";

  export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background-color: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font: ${props => props.theme.fonts.text};
    }
  `;
```

<br />

- Once that's done, let's create a ThemeProvider, inside the `_app.tsx` file, let's import the `ThemeProvider` of the styled components and the `theme.ts` that we just created, the code will look like this:
```
  import { ThemeProvider } from "styled-components";
  import { theme } from "@styles/theme";
  import { GlobalStyle } from "@styles/global";

  import type { AppProps } from "next/app";

  function MyApp({ Component, pageProps }: AppProps) {
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
  export default MyApp;
```

<br />

With that the global styling of our project would be defined, BUT... I advise you to see the next topic!

<br />

## HACK TO USE `REM` AND NOT `PX`

Firstly, using the `rem` size when inserting `px` is almost mandatory due to the responsiveness issues of any and all projects, but in some cases this takes time, because we need to perform that simple calculation of transforming `px` elements to `rem`.

This calculation is determined by: `elementsize / 16`. For example: I want to convert a text of size `28px to rem` we would calculate `28 / 16 = 1.75rem` that over and over again slows down our development, so comes the hack I will teach.

It's pretty simple, inside `global.ts` we'll add the following `css` snippet:
```
  body { 
    font-size: 62.5%;
  }
```

<br />

Looking like this:
```
  import { createGlobalStyle } from "styled-components";

  export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
    }

    body {
      background-color: #121212;
      color: #f5f5f5;
    }
  `;
```

<br />

What exactly will this entail? - Simple instead of having to do the calculation, let's just divide the value by 10. You must be finding it complicated, but it's not, follow the examples:

- We have an element with `230px` and we want to convert it to `rem`, just do the following: `23.0rem`;
- We have an element with `27px` and we want to convert it to `rem`, just put: `2.7rem`;
- Now an element with `8px` let's convert it it will be `0.8rem`;

In case you haven't understood yet, just add a point to the left of the first digit. :)

<br />

## HACK TO SCORING BETTER ON GOOGLE PAGESPEED INSIGHTS

When I built my blog, I had a big problem with google PageSpeed ​​Insights, more specifically with the import of google fonts in the project, it happens that I imported the fonts directly from the project's html, putting the google fonts link inside the `<head>`, which required 1.5 seconds of loading.

So to solve this I started importing the fonts directly into css, and it saved my score by about 8 points... how is this done? - follow right below.

First let's install the `Roboto` font. Open the terminal and run the following command:
```
  yarn add @fontsource/roboto
```

Now inside the global styles file `global.ts` add the following code snippet:
```
  import { createGlobalStyle, css } from "styled-components";

  import RobotoRegular from "@fontsource/roboto/400.css";
  import RobotoBold from "@fontsource/roboto/700.css";

  const Fonts = css`
    ${RobotoRegular}
    ${RobotoBold}
  `;

  export default createGlobalStyle`
    ${Fonts};

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html { 
      font-size: 62.5%;
    }

    body {
      background-color: #121212;
      color: #f5f5f5;
    }
  `;
```

<br />

But we have to add the typing for the font file extension types in the typescript, for that inside the `@types` folder create the `fonts.d.ts` file and copy the following code snippet:
```
  declare module "*.woff";
  declare module "*.ttf";
  declare module "*.css";
```

<br />

Basically what is happening is that we are importing css files that are already created and optimized for importing fonts, you can add as many fonts as you want (recommended 2 fonts and up to 2 styles for each (regular and bold)).

<br />

## STANDARDIZE COMMITS

When working on projects that involve a team, a series of code standardization is recommended, but the standardization of commits also helps the team a lot.

So this topic will teach you how to standardize commits in an interactive and easy way for all devs working on your project. There are several commit patterns, but in this topic apply the angular community pattern. For this we will need three packages, they are:

- commitlint
- husky
- commitizen

Well let's get started, First let's install commitlint:
```
  yarn add @commitlint/{config-conventional,cli} -D
```

With commitlint installed, create a file called `.commitlintrc` and add the following code snippet:
```
  {
    extends: ["@commitlint/config-conventional"]
  }
```

<br />

- Let's install husky:
```
  yarn add husky -D
```

- Create a config for husky with:
```
  yarn husky install
```

- Adding hook for commits:
```
  npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

With that we already have standardized commits, if you try for example to make a commit with `:octocat: testing a commit`, we will get an error, because it runs away from the commitlint patterns of the angular pattern. You can successfully commit using `feat: testing a commit`.

Okay we are with a standardization, but it may be that some devs mainly from open souce projects find it difficult to follow the standards, and have to look for the project's commit documentation, so to solve that, let's add some interactivity at commit time.

For this we will use commitizen. Open your command interface and run the following:

- Install commitizen: 
```
  yarn add commitizen -D
```

- Initialize commitizen: 
```
  commitizen init cz-conventional-changelog --yarn --dev --exact
```

- Setting up husky hook to execute commitize during `git commit` command. 
```
  npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"
```
