# API Token configuration

Go to `src/axios/axiosInstance.js` and change the authorization token to the user that is in your django mysql database.
Token can be created for user from django Admin.
Note: restrict the api token in deployment.

# For search bar

`yarn add material-ui-search-bar`

# For FAQ

`yarn add react-icons`

# For captcha

## First install react-google-recaptcha

`yarn install react-google-recaptcha`

## For Google Recaptcha API

1. Create `.env` file outside src folder.
2. Put the following in the file:
   > REACT_APP_API_KEY=TOKEN FROM BACKEND
   > REACT_APP_RECAPTCHA_KEY=6LdLFQEbAAAAADLLw3gxEdYm8uoJcNsCRsPUGo8z
3. If env variables are cached:
   npm start -- --reset-cache

# Usage of Notice and Pop Up

1. Create Notice
2. Check the Pop Up field if you want the pop up in the home screen.
3. Hidden date is the date when the pop up will be auto disabled. By default Pop Up date is 15 days at creation of the Post.
4. Status of the notice is Published and Draft.

#Google Charts

`yarn add react-google-charts`
