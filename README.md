# Project description

This is the client app for showing charts with generated random numbers by [server](https://github.com/antonsapyanov/react-test-task).

# App content

The client app has 4 pages:
- **Home**: hello-page

- **Line Chart**: Chart with the next data:
  - - x-axis: time of a received number (look at timestamp payload field)
  - - y-axis: number values

  To start numbers generating - please, click on "Start Calculation" button. To pause this - on button "Stop Calculation". You   can continue by clicking on "Start Calculation" again.
  
- **Bar Chart**: Chart with the next data:
  - - x-axis: range categories (-100 - -80, -80 - -60, -60 - -40 etc)
  - - y-axis: the amount of numbers in each category

  To start numbers generating - please, click on "Start Calculation" button. To pause this - on button "Stop Calculation". You   can continue by clicking on "Start Calculation" again.
  
- **Treshold Play**: On this page user can play with threshold

# Project setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

