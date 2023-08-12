# GCB tech assessement
Dynamic Form Builder and Renderer

## Installation and Setup
1/ install dependencies `npm install`
2/ start the application `npm run start` and open [http://localhost:3000]
3/ on another terminal, start the json local db `npm run db` (json file is accessible here [http://localhost:3500/forms])

### Usage
* On home page, you'll create a new form by drag and drop'ing the needed elements(which are generic at this point). On submit you'll be redirected to `/forms` where you'll see a table of all created forms.
* On `/forms` path you'll be able to view, edit and delete the forms.
* When clicking the [edit] button of a form, you'll get redirected where you can update all form's elements.
* Data is stored in a json file, which can be viewed on `/jsondb`.
* Three possible themes are available: light, dark and marine.

#### #### #### #### #### #### ####

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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
