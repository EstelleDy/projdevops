

In the project directory, you can run:
=> npm start

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
Our project is the simple arithmetic operations ( addition, substraction, multiplication and division) between two numbers.

The page will reload if you make edits and save.


=> npm test

Launches the test runner in the interactive watch mode.
There are 6 tests available and they all pass. 

=>npm run build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!


Automatic Deployment
We use Travis to automate the deployment.
You need to clone our project to have it in your repository. Then log in with your Git Hub Account.
Click to your settings at the right on your sidebar, just behind your name.
You will see all your repositories from Git Hub. Press the button after searching our repository so the button becomes green.
If our repository doesn't appear, please do not forget to refresh the link with git by clicking on "Sync account" on the left bar.
Then click on Travis CI ( at the left of dashboard). Our repository is supposed to be there.
Go to the button next to "More Options" and click "trigger build".
Then fill  custom config with what is inside the .travis.yml or copy past this:
*

language: node_js

node_js: 

    -"v16.12.0"
    
    
 *
Without the stars (*).
Then click on Trigger custom build. We did a screenshot of our results from our PCs that is in the repository.
