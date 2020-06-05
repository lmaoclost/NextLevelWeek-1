# NextLevelWeek #01

<div align="center">
  <img alt="Ecoleta" src="https://github.com/lmaoclost/NextLevelWeek-1/blob/master/web/src/assets/logo.svg">
</div>

<div align="center">

![GitHub issues][github_issues_badge] ![GitHub][repository_license_badge] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge] [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

</div>

Project for a [Course](https://nextlevelweek.com/aulas/booster/1/edicao/1) that has the purpose to code a an ecological project named Ecoleta using Node, ReactJS and React Native. This project connects companies or entities that collect disposable materials with people who need to dispose it.

## Some Images

<div align="center">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-1/blob/master/imgs/web.png">
</div>

<div align="center">
  <img alt="Mobile" src="https://github.com/lmaoclost/NextLevelWeek-1/blob/master/imgs/mobile.png">
</div>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Node, npm and a text editor. I'm using VSCode.

## Day 1, 2: BackEnd
cd to the cloned folder. Go to [ItemsControllers](server/src/controllers/ItemsController.ts) and change the image_url to your local IP.
```
$ cd /server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
$ npm run dev
```
The Backend will be running in the http://localhost:3333. To test the routes, i'm leaving this [Insomnia file](Insomnia_2020-06-02.json).

## Day 3: FrontEnd
Go to another terminal.
```
$ cd /web
$ npm install
$ npm start
```
Go to http://localhost:3000 and the project is up and running!

## Day 4: Mobile
I'm using Expo, so make sure that you have it. Go to another terminal.
```
$ cd /mobile
$ npm install
$ npm start
```
Go to the expo page and connect.

## Built With

* [JavaScript](https://devdocs.io/javascript/) - Main Language
* [Node.js](https://nodejs.org/en/) - The web framework used
* [React.js](https://reactjs.org/) - Js framework for WEB
* [React Native](https://facebook.github.io/react-native/) - JS framework for APPs
* [SQLite](https://www.sqlite.org/index.html) - Database
* [Expo](https://expo.io/) - Used to improve the app development

## Authors

* **Renan Oliveira** - [GitHub](https://github.com/lmaoclost), [LinkedIn](https://www.linkedin.com/in/renansmoliveira/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

Made with ❤️ by Renan Oliveira.