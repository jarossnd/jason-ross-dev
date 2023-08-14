# Jason Ross Website

## 🚀 Quick start

## 💻 Environment

- Node version v18.17.0
- Gatsby version: v5.11.0

## 🔨 Cloning the repo and `npm install`

```
cd ~/repos
gh repo clone jarossnd/jason-ross-dev
npm install
```

## 🌈 Eslint and Prettier Setup

1. Eslint package

    ```Terminal
    cd ~/repos/jason-ross-dev
    npm install eslint-config-wesbos
    ```

2. ESlint RF file

    ```Terminal
    touch .eslintrc
    ```

3. Add the following to .eslintrc

    ```JSON
    {
    "extends": ["wesbos"]
    }
    ```

4. VSCode Settings

    ```JSON
    // These are all my auto-save configs
    "editor.formatOnSave": true,
    // turn it off for JS and JSX, we will do this via eslint
    "[javascript][javascriptreact][typescript][typescriptreact]": {
    "editor.formatOnSave": false
    },
    // tell the ESLint plugin to run on save
    "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
    },
    ```

5. Gatsby

    ```Terminal
    npx install-peerdeps --dev eslint-config-wesbos
    ```

6. Restart VSCode

## 📦 Packages

### package.json

These packages were installed during initial setup on 8/13/2023

- gatsby-plugin-google-gtag
- gatsby-plugin-image
- gatsby-plugin-sitemap
- gatsby-plugin-manifest
- gatsby-plugin-mdx
- npm install normalize.css
- npm install -D gatsby-plugin-netlify

Font Installation

```Terminal
npm i -S @fontsource/roboto-mono
```

gatsby-browser.js

```JavaScript
import '@fontsource/roboto-mono';
```

## 🚀 Build

- npm start
- netlify dev
- netlify build