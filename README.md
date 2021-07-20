This project was created with CodeSandbox. It uses https://create-react-app.dev/ in behind.

## Exercise 1
Make the form work using controlled components, **and 1 state variable per input**

When the form is submitted, verify:
* Password:
   * Password must be at least 10 characters long.
   * Password and repeated password must be the same
* Email:
   * Email and repeated email must be the same
   
If the conditions are not met, show the user the errors. You can be creative here:
   * An alert
   * Error messages next to each input.
   ...
 
If the conditions are met, reset the form and log to the console the information as an object:
```js
{
  username: string,
  email: string,
  password: string,
}
```

## Exercise 2
Make the form work using controlled components, **and only 1 state object for all the inputs**
