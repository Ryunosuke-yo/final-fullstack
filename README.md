Description - A fortune telling app. After you fill out a form, you can get the result of fortune telling, which fetched from a database.

Features
- fetching user and fortune-telling data from a database
- simple yet beautiful interface implemented by Chakra UI library
- people today section never show a submitted user but only if it is a single user. I wanted to implement this feature using ID but I couldn't handle that.
- there is a simple validation on the form. I tried to implement a more complex validation using Formik and I tried sevarla ways but  I couldn't find a way to do that with Chakra Ui

how to install
- npm run dev and npm run watch

how to use
- fill out a form , click the button and the application shows the result.

API doc
- EndPoints
/postUser - post submitted user
/get/user, thinking, luck, outfit - get all of each

-Response format
json

Expected body format
json

Examples
/postUser - to submit a user
/get/user, thinking, luck, outfit - to display those

