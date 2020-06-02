# NextLevelWeek 1 WIP

Project for a [Course](https://nextlevelweek.com/aulas/booster/1/edicao/1) that has the purpose to code a an ecological project named Ecoleta using Node, ReactJS and React Native. This project connects companies or entities that collect disposable materials with people who need to dispose it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

Node, npm and a text editor. I'm using VSCode.

## Installing
cd to the cloned folder.
```
$ cd /server
$ npm install
$ npm run knex:migrate
$ npm run knex:seed
$ npm run dev
```
The Backend will be running in the http://localhost:3333. To test the routes, i'm leaving this [Insomnia file](Insomnia_2020-06-02.json).

Go to another terminal.
```
$ cd /web
$ npm install
$ npm start
```
Go to http://localhost:3000 and the project is up and running!

## Built With

* [JavaScript](https://devdocs.io/javascript/) - Main Language
* [Node.js](https://nodejs.org/en/) - The web framework used
* [React.js](https://reactjs.org/) - Js framework for WEB
* [React Native](https://facebook.github.io/react-native/) - JS framework for APPs
* [SQLite](https://www.sqlite.org/index.html) - Database

## Authors

* **Renan Oliveira** - [GitHub](https://github.com/lmaoclost)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details