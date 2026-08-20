 
 document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault()
    //take in data from the signup form and create a user object as database
    let userData = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        username: event.target.username.value,
        password: event.target.password.value,
        email: event.target.email.value,
        comment: {
            date: undefined,
            title: undefined,
            commentText: undefined
        }
    }

    handleSignup.user = userData;//assign user data to user variable in handleSignup
 })

 function UserDatabase() {
    let user;//user object with user data
 }

 module.exports = { userDatabase } 