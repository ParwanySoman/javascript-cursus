
# Becode Template for JavaScript Exercises

Hello ! This is a simple template to use in Becode's JavaScript exercises.

Simply copy the whole folder and modify what you want for each exercise.

## Usage guide

### Installing dependencies

This project uses [npm](https://www.npmjs.com/) to download its dependencies. To install everything it needs just type:

```bash
npm install
```

### Running the project

You can't just open the `index.html` file with your web browser as this project depends on a build system named [Parcel](https://parceljs.org/). It takes care of a lot of boring tasks like rewriting the JavaScript to work on older browsers or compiling SCSS files to CSS. It doesn't mean it's complicated to use.

Just type this command to launch a small web server that propose your JavaScript application and automatically recompile your code when you modify it:

```bash
npm run dev
```

Your application can then be consulted at `http://localhost:1234`.

### Building for production

If you want to deploy this website for real you must first build it with this command:

```bash
npm run build
```

It will then be available in the `dist` folder.

## Files

* [index.html](./index.html): The HTML file. Don't forget to modify the title of the exercise !
* [style.scss](./style.scss): A [SCSS](https://sass-lang.com/) file that will automatically be compiled to CSS to be loaded by the HTML file. Useful if you want to add some custom CSS.
* [script.js](./script.js): A JavaScript file that is loaded by the HTML file. Modify this for every exercise.

## Integrated libraries

This template already integrate some libraries and tools:

* [Bootstrap](https://getbootstrap.com/): A CSS framework containing a lot of useful components, both in CSS and JavaScript. This template uses the [Litera](https://bootswatch.com/litera/) Bootstrap template.
* [Font Awesome](https://fontawesome.com/): A library of icons that we can use to display nice little icons everywhere. There are even cats in it :smiley_cat: !
