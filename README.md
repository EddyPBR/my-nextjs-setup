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

