# XRShowcase
### [https://xrshowcase.xyz](https://xrshowcase.xyz)

[![image](https://user-images.githubusercontent.com/63426722/179009684-082dc438-245b-40db-a61a-cc22a4fa3e9d.png)](https://xrshowcase.xyz)


We seek to lift up other XR creators and guide the community towards open access for all. XRShowcase is the first open product we've launched, intended to link-to and showcase other XR creations.

To contribute your project to XR Showcase, we just need a URL. It is recommended that you use tools, and frameworks that result in cross-compatible experiences.

To improve XRShowcase, please fork and submit a PR. Save me from myself. <3

# What does AngellXR do?

AngellXR is dedicated to the open Metaverse. We believe anyone can add value to and benefit from the Metaverse. We believe in lifting each other up as the Metaverse is bigger than all of us. We value as it lowering the barriers to entry for users to experience the Metaverse.

We strive to make everything we do leverage and contribute towards open source protocols. It has to be bigger than one person.

This repo is federated with the AngellXR `#xrshowcase` [discord channel](https://discord.gg/6YyVdhzkHH)

# Adding experiences to this site 
Option 1: 
- Visit [this google form](https://forms.gle/UfpUuKmvXQGjuX737) to submit new experiences  

Option 2: 
- Fork this repo 
- navigate to src
- navigate to utils 
- find the file constants.js 
- Look at the code chunks. When you see the pattern, copy a chunk and paste it before or after another experience chunk of code. 
    - careful that you don't erase a "," or ";" 
- Replace your new chunk of code with your new information: 
    - add a title
    - description (short and sweet - max 200 characters)
    - add a link to your experience 
    - add a link to a gif or image of your experience (currently only supports gifs) 
- save, and submit your Pull request! 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses StorybookJS and Figma to consolodate a design system.

This project is intended to help XR creators federate and co-create their XR work. To add your project to the page visit utils -> constants.js and add the following:

{
title: "{{Your Title}}",
imgURL: "your image URL",
description: Brief Description like: Aerial view of a Marlboro Hunt Club, Fall 2020",
link: "URL to your project, you can use glitch, codesandbox, github pages, or any resource of your choice with a URL",
},

AngellXR is a community devoted to an open Metaverse. Feel free to make contributions based on your own expertise. We are always looking to add new members to our community.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Runs the app in the storybook mode. We leverage an atomic design system paired with figma using storybook for better design consistency and communication.\
Open [http://localhost:6006](http://localhost:6006) to view components in both coded and figma formats.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `python3 -m http.server`

Runs the app in the development mode (alternate).\
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

### `npm run deploy`

After installing gh-pages and adding deploy scripts to the package.json, this command builds the app for production to the github pages\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [gh-pages-deployment](https://create-react-app.dev/docs/deployment/#github-pages) for more information.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
