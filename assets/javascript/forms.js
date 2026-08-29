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
        return true;
    } 
    
    if(!validateFormData()) {
        return;//stop the function execution at this point and prevent the user data from being stored
    }

    function registerUser() {
        let userData = { //Take in data from the signup form and create a user object as database
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        username: event.target.username.value,
        password: event.target.password.value,
        email: event.target.email.value,
        comment: {//The values of the keys of this object are set when the user posts a comment
            date: undefined,
            title: undefined,
            commentText: undefined
        }
    }

    store.push(userData);//Push the userData object into the store array
    hint.text("Registration successful! You can now log in to your account.")//Let the user know of the registration sucess
    }

    registerUser()
})