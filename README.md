 Configuring Webpack to work with React

  Setting up Webpack
 To run the React application, we need to install Webpack 5 (at the time of writing, 
the current stable version of Webpack is version 5) and the Webpack CLI as 
devDependencies. Webpack is a library that lets us create a bundle out of JavaScript/
 React code that can be used in a browser. The following steps will help you set  
up Webpack:
 1. Install the required packages from npm using the following command:

 npm install --save-dev webpack webpack-cli
 
 3. After installation, these packages are included inside the package.json file where 
we can have them run in our start and build scripts. But first, we need to add 
some files to the project:

 chapter-1
  |- node_modules
  |- package.json
 + |- src
 +    |- index.js

To do this, configuration files for both Webpack and Babel need to be created in the src 
directory of the project:
 + |- babel.config.json
 + |- webpack.config.js


 chapter-1
  |- node_modules
  |- package.json
 + |- babel.config.json
 + |- webpack.config.js
  |- dist
     |- main.js 
  |- src
     |- index.js

   
 Now that we've set up a basic development environment with Webpack for  
a JavaScript application, we can start installing the packages we need in order to run any 
React application. 
These packages are react and react-dom, where the former is the generic core package 
for React and the latter provides an entry point to the browser's DOM and renders React. 
Install these packages by executing the following command in the command line:

 npm install react react-dom
 
 Installing only the dependencies for React is not sufficient to run it, since, by default, not 
every browser can read the format (such as ES2015+ or React) that your JavaScript code 
is written in. Therefore, we need to compile the JavaScript code into a readable format for 
every browser.
 For this, we'll use Babel and its related packages to create a toolchain to use React in 
the browser with Webpack. These packages can be installed as devDependencies by 
running the following command:

 npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
 
 Next to the Babel core package, we'll also install babel-loader, which is a helper so 
that Babel can run with Webpack and two preset packages. These preset packages help 
determine which plugins will be used to compile our JavaScript code into a readable 
format for the browser (@babel/preset-env) and to compile React-specific code 
(@babel/preset-react). With the packages for React and the correct compilers 
installed, the next step is to make them work with Webpack so that they are used when  
we run our application

To use the Babel presets, create babel.config.json


The final step in rendering our React component is extending Webpack so  
that it adds the minified bundle code to the body tags as scripts when running. 
Therefore, we should install the html-webpack-plugin package into  
our devDependencies:

npm install --save-dev html-webpack-plugin

To use this new package to render our files with React, the Webpack configuration 
in the webpack.config.js file must be extended

The webpack-dev-server package can be installed with npm:

 npm install --save-dev webpack-dev-server
 
 Also, we need to edit the dev script in the package.json file so that it uses webpack
dev-server instead of Webpack. This way, you don't have to recompile and reopen the 
bundle in the browser after every code change

Webpack is unable to compile CSS files by itself; we need to add the appropriate loaders  
to make this happen. We can install these by running the following command:

 npm install --save-dev css-loader style-loader
 
 We need to add these packages as a rule to the Webpack configuration

 Install ESLint from npm by running the following command:
 
 npm install --save-dev eslint eslint-webpack-plugin eslint-plugin-react
 
 The first package, called eslint, is the core package and helps us identify any potentially 
problematic patterns in our JavaScript code. eslint-webpack-plugin is a package 
that is used by Webpack to run ESLint every time we update our code. Finally, eslint
plugin-react adds specific rules to ESLint for React applications.
 To configure ESLint, we need to create a file called .eslintrc in the project's root 
directory and add the code to it
