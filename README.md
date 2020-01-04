# React starter project

A bare-bones starter kit for a React project. Bootstrapped with create-react-app.

## What's included

- `mdbreact` from [Material Design Bootstrap](https://mdbootstrap.com/docs/react/)
- `node-sass` for SASS
- `gh-pages` for easy deploying to Github Pages
- `react-router-dom` for routing

### Already built

- Header including a navbar, fixed to the top of the page
- Footer with grid layout
- Basic routing - see instructions below
- Default favicon - use [Real Favicon Generator](https://realfavicongenerator.net/) to make your own and place the generated images in `public/favicon`

## Instructions

### Getting set up

- Make sure you have an SSH key set up on the jimgroome account with Github
- Clone the repository: `git clone git@github.com:jimgroome/react-starter.git --depth 1`
- Rename the `react-starter` directory to your project name: `mv react-starter project-name-here`
- `cd` into the directory
- Create a new repository on Github and copy the remote URL
- Change the remote URL: `git remote set-url origin remote-url-here`
- Check the remote URL has been changed: `git remote -v`
- `npm i` to install
- `npm start` to start development server
- Then just `commit`, `push`, and `pull` as normal

### Development

- Use `_custom_variables.scss` to set a `$default-color` etc
- Use `_custom_styles.scss` for your own styles

### Routing/adding a page

- Create a new page in `src/pages` and export it `withRouter`
- Add a `<Route>` in `App.js`
- If necessary, add it to the nav by adding a link in `src/components/Header.js`

### Deploying to Github Pages

- Set a `name` and `homepage` URL in `package.json`
- `npm run deploy` builds the project and deploys it to Github Pages
