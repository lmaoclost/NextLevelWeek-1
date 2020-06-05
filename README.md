# NextLevelWeek #01

<div align="center">
  <img alt="Ecoleta" src="https://github.com/lmaoclost/NextLevelWeek-1/blob/master/web/src/assets/logo.svg">
</div>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-191A1E">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>

  <a href="https://www.linkedin.com/in/renansmoliveira/">
    <img alt="Follow me Linkedin" src="https://img.shields.io/badge/Follow%20up-renansmoliveira-191A1E?style=social&logo=linkedin">
  </a>
</p>

Project for a [Course](https://nextlevelweek.com/aulas/booster/1/edicao/1) that has the purpose to code a an ecological project named Ecoleta using Node, ReactJS and React Native. This project connects companies or entities that collect disposable materials with people who need to dispose it.

## Some Images

### WEB
<div align="center">
  <img alt="Web" src="https://github.com/lmaoclost/NextLevelWeek-1/blob/master/imgs/web.png">
</div>

### Mobile
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