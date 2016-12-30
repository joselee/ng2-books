### NG2 Books
This is a learn-by-doing project for Angular 2. It is a progression after completing a Todo app.

The project architecture is based on the official quickstart project at [angular.io](https://angular.io/docs/ts/latest/guide/setup.html).
It uses [gulp-typescript](https://www.npmjs.com/package/gulp-typescript) to transpile TS to JS.
In dev mode, the JS files are used directly from the `build/` folder. For production builds, 
[systemjs-builder](https://www.npmjs.com/package/systemjs-builder) is used to bundle all app code and all dependencies into one JS file.

Styling is done with [SASS](http://sass-lang.com/) and [ng-bootstrap](https://ng-bootstrap.github.io).


#### Prerequisites
* node, npm


#### Setup and run in development mode
* `npm install`
* `npm start`

#### Building for production
* `npm install`
* `npm run prod`