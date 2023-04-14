<h2 align="center">
  <a href="https://github.com/justinmahar/react-kindling" target="_blank" rel="noopener noreferrer">🔥 React Kindling</a>
</h2>
<h3 align="center">
  A template to build, test, and share React components and hooks easily.
</h3>
<p align="center">
  <a href="https://github.com/justinmahar/react-kindling/generate" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/></a>&nbsp;
  <a href="https://github.com/justinmahar/react-kindling/" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Source-success" alt="View project on GitHub" /></a>&nbsp;
  <a href="https://github.com/justinmahar/react-kindling/actions?query=workflow%3ADeploy" target="_blank" rel="noopener noreferrer"><img src="https://github.com/justinmahar/react-kindling/workflows/Deploy/badge.svg" alt="Deploy Status"/></a>&nbsp;
  <a href="https://github.com/sponsors/justinmahar" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86" alt="Sponsor"/></a>
</p>

Read the **[official documentation](https://justinmahar.github.io/react-kindling/)**.

<h3>
  <a href="https://justinmahar.github.io/react-kindling/" target="_blank" rel="noopener noreferrer">
  👁️ Live Demo
  </a>
</h3>

## Overview

This is a starter for [React](https://reactjs.org/) component and [hook](https://reactjs.org/docs/hooks-intro.html) libraries.

React Kindling includes everything you need to build a React library including a standalone documentation site via GitHub Pages ([see demo](https://justinmahar.github.io/react-kindling/)).

See the [10+ projects using React Kindling](https://github.com/justinmahar/react-kindling#projects-using-react-kindling), and build your own.

### Features include:

- **✨ [TypeScript](https://www.typescriptlang.org/) support**
  - For type checking and safety.
- **📖 [Storybook](https://storybook.js.org/) stories**
  - Use stories to visualize as you build.
- **👓 [README template](https://github.com/justinmahar/react-kindling/blob/master/README.template.md)**
  - Just fill it out. Includes npm and deploy badges for street cred.
- **🌎 [GitHub Pages](https://pages.github.com/) pre-configuration**
  - Auto-deploy your Storybook documentation site to GitHub Pages with a single opt-in project config.
- **📦 Easy [npm publish](https://docs.npmjs.com/cli/publish)**
  - Build, version, and ship it to [npm](https://www.npmjs.com/) with one command: `npm run ship`
- And more!

## Table of Contents 

- [Overview](#overview)
  - [Features include:](#features-include)
- [Table of Contents](#table-of-contents)
- [Quick Start](#quick-start)
  - [Click the button below to get started with React Kindling:](#click-the-button-below-to-get-started-with-react-kindling)
  - [Install dependencies](#install-dependencies)
  - [Title and URL](#title-and-url)
  - [Favicon](#favicon)
  - [Use Storybook to develop your components and hooks](#use-storybook-to-develop-your-components-and-hooks)
  - [Export modules from `index.tsx`](#export-modules-from-indextsx)
  - [Updater](#updater)
  - [Automatic Deploy to GitHub Pages](#automatic-deploy-to-github-pages)
  - [Markdown Pages](#markdown-pages)
  - [README Template](#readme-template)
  - [Using For Non-React Projects](#using-for-non-react-projects)
  - [npm Publish Checklist](#npm-publish-checklist)
  - [Publish to npm](#publish-to-npm)
  - [Celebrate!](#celebrate)
- [Projects Using React Kindling](#projects-using-react-kindling)
- [⭐ Found It Helpful? Star It!](#-found-it-helpful-star-it)
- [License](#license)
- [Synchronized README Blocks](#synchronized-readme-blocks)
- [Donate](#donate)
- [TypeScript](#typescript)
- [Icon Attribution](#icon-attribution)
- [Contributing](#contributing)

You can use [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) to keep your project's table of contents updated automatically. Highly recommended!

## Quick Start

### Click the button below to get started with React Kindling:

<a href="https://github.com/justinmahar/react-kindling/generate" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/GitHub-Use%20this%20template-brightgreen"/></a>

You will be prompted for a repo name and description, and GitHub will do the rest.

**Note:** This approach is recommended over cloning or forking because [repositories created from a template](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) start with a single commit and are not treated as forks, but instead as an entirely new project.

Then `git clone` your project once it's set up.

### Install dependencies

```
npm install
```

### Title and URL

Update the site title in `.storybook/theme.js`.

### Favicon

Favicon files can be customized in the `public` directory. You can get a free one from [favicon.io](https://favicon.io/emoji-favicons/).

You must also update the links in `.storybook/manager-head.html`.

### Use Storybook to develop your components and hooks

[Storybook](https://storybook.js.org/) lets you develop your React components and hooks in isolation. Each "storybook" is a file that contains "stories", which are just the different visual states of your component or hook.

You can run Storybook using:

```
npm start
```

Your browser will automatically open to [localhost:6006](http://localhost:6006/).

In `src/stories`, an example story is provided. Use this as a starting point for your own components.

You can add MDX files to this directory as well. These will become pages in Storybook and can be used for additional documentation.

Storybook will automatically generate documentation for your components using JSDoc comments.

### Export modules from `index.tsx`

Export anything you'd like to make available to the outside world in `index.tsx`.

These will be the modules that can be imported from your npm package after it's installed.

### Updater

This project uses [LockBlocks](https://github.com/justinmahar/lockblocks) for updater support. This keeps boilerplate in sync with the main `react-kindling` starter.

To update, make sure your working directory is clean and run:

```
npm run update
```

Changes will be logged to `lockblocks.log`.

### Automatic Deploy to GitHub Pages

With zero config, your Storybook documentation is auto-deployed to [GitHub Pages](https://pages.github.com/).

A [GitHub Action](https://github.com/features/actions) has already been configured for you in `.github/deploy.yml`.

When pushing to GitHub, the action will build and deploy your Storybook static site for you automatically. 🎉

Simply open your repo's project Settings, select Pages, choose `Deploy from a branch`, and select the `gh-pages` branch `/ (root)`, and click `Save`.

Links to your Storybook site and deploy status are available in the template README. If this is your first deploy, it can take up to 10 minutes for your GitHub Pages site to show up.

### Markdown Pages

The following Markdown files are generated as Storybook pages by default:

- [README.md](https://justinmahar.github.io/react-kindling/?path=/story/home--page)
- [LICENSE.md](https://justinmahar.github.io/react-kindling/?path=/story/license--page)
- [CODE_OF_CONDUCT.md](https://justinmahar.github.io/react-kindling/?path=/story/code-of-conduct--page)

### README Template

The file README.template.md contains a template README. Just fill it out.

### Using For Non-React Projects

This starter can be used to publish non-React specific projects, too. In order to do this, you'll want to make sure the included React peer dependencies are removed.

You can add the following script to `package.json` to remove them automatically when running the updater:

```json
"postupdate": "node remove-peer-deps.js"
```

This script will remove all peerDependencies from `package.json` for you.

### npm Publish Checklist

About to wrap up and publish to npm? Double-check the following:

- No unwanted `console.log` calls
- Code is fully documented
- All components render properly in Storybook
- **Most important: Components and hooks are exported from `src/index.tsx`**
  - If you forget to export, none of your hard work will be available via npm!

### Publish to npm

When you're finished developing, you can easily ship it to npm with one command. Once published to npm, others can install and use your package with `npm install`.

If you haven't already, log into npm:

```
npm login
```

Then publish with a single command:

```
npm run ship
```

This command will build your project, add/commit the freshly built `dist` directory, increment the package version, publish to npm, and push to GitHub.

If you have any unsaved changes, this script will immediately fail until your working directory is clean.

### Celebrate!

You've done it! Your project is ready for the world.

## Projects Using React Kindling

The following projects were built on React Kindling:

| Name                                                                                          | Description                                                                                                              |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [easyjre](https://github.com/justinmahar/easyjre)                                             | ☕ Easily create an OpenJDK JRE using jlink!                                                                              |
| [react-social-media-embed](https://github.com/justinmahar/react-social-media-embed)           | 📰 Easily embed social media posts from Facebook, Instagram, LinkedIn, Pinterest, TikTok, Twitter, and YouTube in React.  |
| [react-use-precision-timer](https://github.com/justinmahar/react-use-precision-timer)         | ⏱️ A versatile precision timer hook for React. Doubles as a stopwatch.                                                    |
| [react-html-props](https://github.com/justinmahar/react-html-props)                           | ⚛️ Convenient TypeScript types for all React HTML props.                                                                  |
| [github-projectv2-csv-exporter](https://github.com/justinmahar/github-projectv2-csv-exporter) | 📂 Export GitHub project cards as CSV files. Uses the ProjectV2 API.                                                      |
| [gumroad-api-tester](https://github.com/justinmahar/gumroad-api-tester)                       | 🌀 A web tool for easily testing the Gumroad API.                                                                         |
| [articulate-nlg](https://github.com/justinmahar/articulate-nlg)                               | 💬 A natural language generator (NLG) that articulates concepts as words, phrases, and sentences.                         |
| [react-super-seo](https://github.com/justinmahar/react-super-seo)                             | 🔱 React SEO component that handles metadata so you don't have to. Supports Google, OpenGraph, Twitter, and beyond.       |
| [react-timed-image](https://github.com/justinmahar/react-timed-image)                         | 🎆 React image component that re-renders at timed intervals. Includes optional cache busting.                             |
| [react-use-window-scroll](https://github.com/justinmahar/react-use-window-scroll)             | ↕️ React hooks for scrolling the page to any location, or by any amount. Supports smooth scrolling.                       |
| [random-seed-weighted-chooser](https://github.com/justinmahar/random-seed-weighted-chooser)   | 🎲 A random weighted item chooser with custom seed option for JS.                                                         |
| [react-use-query-param-string](https://github.com/justinmahar/react-use-query-param-string)   | 🔡 React hook for easily getting and setting query param strings.                                                         |
| [lockblocks](https://github.com/justinmahar/lockblocks)                                       | 🔄 Node.js utility for updating projects created from starters.                                                           |
| [react-uncached-image](https://github.com/justinmahar/react-uncached-image)                   | 🌅 React image component that bypasses caching using query param cache busting.                                           |
| [react-timed-renderer](https://github.com/justinmahar/react-timed-renderer)                   | ⏳ React component that re-renders at the interval provided.                                                              |
| [react-build-status-badge](https://github.com/justinmahar/react-build-status-badge)           | 🚥 React build status badge component for any CI/CD service. Shows real-time status and supports Markdown for easy setup. |
| [simple-form-submit](https://github.com/justinmahar/simple-form-submit)                       | ✅ Submit your form data with a simple JavaScript call.                                                                   |
| [react-sub-unsub](https://github.com/justinmahar/react-sub-unsub)                             | 🔔 Manage React effect listeners with ease.                                                                               |
| [react-storage-complete](https://github.com/justinmahar/react-storage-complete)               | 🗄️ React hooks for accessing localStorage and sessionStorage, with syncing and prefix support. The complete package.      |

## ⭐ Found It Helpful? [Star It!](https://github.com/justinmahar/react-kindling/stargazers)

If you found this project helpful, let the community know by giving it a [star](https://github.com/justinmahar/react-kindling/stargazers): [👉⭐](https://github.com/justinmahar/react-kindling/stargazers)

## License

See [LICENSE.md](https://justinmahar.github.io/react-kindling/?path=/story/license--page).

---

## Synchronized README Blocks

The following sections of the README are synchronized with projects generated from this starter using the included [updater](#updater). 

These sections are included for you in the README template. You can remove the `[lock][/lock]` tags around them to stop them from syncing with the starter.

[lock:donate]::🚫---------------------------------------

## Donate 

I hope this project makes your life a little easier! If it does and you'd like to show your appreciation, consider supporting the project with a coffee or sponsorship. 

Your support helps keep the project going and will earn you some serious virtual high fives. Maybe even a virtual fist bump if you're feeling extra cool.

<a href="https://github.com/sponsors/justinmahar">
  <img src="https://justinmahar.github.io/react-kindling/support/sponsor.png" alt="Sponsor via GitHub" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/5">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-1.png" alt="Buy me a coffee" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/15">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-3.png" alt="Buy me 3 coffees" height="35" />
</a> <a href="https://paypal.me/thejustinmahar/25">
  <img src="https://justinmahar.github.io/react-kindling/support/coffee-5.png" alt="Buy me 5 coffees" height="35" />
</a>

[/lock:donate]::---------------------------------------🚫

[lock:typescript]::🚫---------------------------------------

## TypeScript

Type definitions have been included for [TypeScript](https://www.typescriptlang.org/) support.

[/lock:typescript]::---------------------------------------🚫

[lock:icon]::🚫---------------------------------------

## Icon Attribution

Favicon by [Twemoji](https://github.com/twitter/twemoji).

[/lock:icon]::---------------------------------------🚫

[lock:contributing]::🚫---------------------------------------

## Contributing

Open source software is awesome and so are you. 😎

Feel free to submit a pull request for bugs or additions, and make sure to update tests as appropriate. If you find a mistake in the docs, send a PR! Even the smallest changes help.

For major changes, open an issue first to discuss what you'd like to change.

[/lock:contributing]::---------------------------------------🚫