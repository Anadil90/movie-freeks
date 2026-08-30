let store = []//Store the data of each user registration as an object that is an item in the array

const hint = $("#hint");//Select the hint element in the DOM

$("#signup").submit(function(event) {//Attach a submit event to the signup form to listen for the submit event
    event.preventDefault()//Prevent the default behaviour of the form

    //assign the value of each form input field for quick reference
    const first_name = event.target.firstName.value;
    const last_name = event.target.lastName.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const email = event.target.email.value;

        //Toggle the class to apply the class only shown when the submit event occurs. 
        $("#hint").addClass("space");

    /**Function checks the form input fields for valid user input, and then 
     * allows the user registration data to be pushed to the store array to
     * hold the user data
     */
    function validateFormData() {
        //Assign each empty form field to corresponding variables to be validated for empty form submission
        const firstNameEmpty = first_name.length < 1;
        const lastNameEmpty = last_name.length < 1;
        const usernameEmpty = username.length < 1;
        const passwordEmpty = password.length < 1;
        const emailEmpty = email.length < 1;

        //check to ensure an empty form is not submitted
        if(firstNameEmpty && lastNameEmpty && usernameEmpty && passwordEmpty && emailEmpty) {//Prevent form data from being submitted when all fields are empty 
            hint.text("An empty form cannot be sumbitted. Please fill in the fields.")
            return false;
        }

        //Check if any individual form field is not filled in and warn user when field is empty
        if(firstNameEmpty) {
            hint.text("First name is required to register");
            return false;
        }

        if(lastNameEmpty) {
            hint.text("Last name is required to register");
            return false;
        }

        if(usernameEmpty) {
            hint.text("Username is required");
            return false;
        }

        if(passwordEmpty) {
            hint.text("Password is required");
            return false;
        }

        if(emailEmpty) {
            hint.text("Email is required to register");
            return false;
        }

        //Checks to ensure that the fields are of a minimum length
        if(first_name.length < 2) {
            hint.text("First name must be at least 2 letters");
            return false;
        }

        if(last_name.length < 2) {
            hint.text("Last name must be at least 2 letters");
            return false;
        }

        if(username.length < 3) {
            hint.text("Username must be at least 3 characters long. For example: Lt8, Jil, Boh");
            return false;
        }

        if (password.length < 8) {
            hint.text("Password must be at least 8 characters long");
            return false;
        }

        //Check if email is of the proper format
        if(!properEmailFormat(email)) {
            hint.text("Email address must be like the following example format: john.doe@gmail.com, or john@gmail.com. Make sure all the characters are present")
            return false;
        }

        //Check to see whether the password contains the combination of characters for security
        if(!securePassword(password)) {
            return false;
        }

        return true;   
    } 

    /**Function checks the form email input to determine whether the user has entered an email adddress 
     * that is of the proper format by running the user email input through a regex pattern. When the 
     * email input matches that of the one stated in the escape regex pattern, the email is valid.
     */
    function properEmailFormat(email) {//run the escape regex function here and check for a valid email address format
        //Match pattern to the following format: characters + @ + domain name. (example@gmail.com)
        const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//Check to see if the entered email has an @, a domain, and a . after the domain, and no spaces
        return regexPattern.test(email);
    }

    function securePassword(password) {
        //Create patterns to test for and validate
        const upperCaseTest = /[A-Z]/.test(password);//Test case for the regex to match when upper case letters are present
        const numbersPresent = /[0-9]/.test(password);//Test case for numbers being present.
        const specialCharactersPresent = /[!@#&.]/.test(password);//Test case for characters !, @, #, &, and . being present 

        //Check for a secure password
        if (!upperCaseTest) {
            hint.text("Password must contain at least one uppercase letter");
            return false;
        }
            
        if (!numbersPresent) {
            hint.text("Password must contain at least one number");
            return false;
        }

        if (!specialCharactersPresent) {
            hint.text("Password must contain at least one special character from the following: ! @ # & .");
            return false;
        }

        return true;
    }
    
    if(!validateFormData()) {
        return;//stop the function execution at this point and prevent the user data from being stored
    }

    function registerUser() {
        let userData = { //Take in data from the signup form and create a user object as database
        firstName: first_name,
        lastName: last_name,
        username: username,
        password: password,
        email: email,
        comment: {//The values of the keys of this object are set when the user posts a comment
            date: undefined,
            title: undefined,
            commentText: undefined
        }
        
    }

    store.push(userData);//Push the userData object into the store array
    hint.text("Registration successful! You can now log in to your account.")//Let the user know of the registration sucess
    }

    
    registerUser()//Register the user with the form data
    localStorage.setItem("users", JSON.stringify(store));//Set local storage for the store object
})


//login form submit event handler handles login procedure
$("#login").submit(function(event) {
    const user = event.target.username.value;
    const password = event.target.password.value
    event.preventDefault()//prevent the form action attribute from prematurely redirecting away from page
    console.log(store.username, user, password,  store.password)

    let users = JSON.parse(localStorage.getItem("users")) || [];//load users from the local storage if they exist, otherwise declare empty array.
    const foundUser = users.find(found => found.username === user && found.password === password);//Get users from the localstorage and find matching user

    //If user if found, redirect to the main-content page
    if(foundUser) {
        //Replicate the behaviour of a button click, and navigate back to the main-content page
        $(location).attr('href', '/main-content.html');  
    }
    else {//If no user details don't match, prompt the user of the login credentials being incorrect
        $("#login-hint").text("Your username or password is not correct.")
    }
    
})