$(document).ready(function () {

const hint = $("#contact-hint");

    // Helper: color inputs red/green
    function setInputColor($input, isValid) {
        $input.css("background-color", isValid ? "lightgreen" : "lightcoral");
    }

    // Email validation regex
    function validEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    // Submit handler
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const name = $("#contact-name").val().trim();
        const email = $("#contact-email").val().trim();
        const message = $("#contact-message").val().trim();

       function validateContactForm() {
            const nameEmpty = name.length < 1;
            const emailEmpty = email.length < 1;
            const messageEmpty = message.length < 1;

            if(nameEmpty && emailEmpty && messageEmpty) {
                hint.text("Form fields cannot be empty")
                setInputColor($("#contact-name"), false);
                setInputColor($("#contact-email"), false);
                setInputColor($("#contact-message"), false);
                return
            }

            // Validation checks
            if (name.length < 2) {
                setInputColor($("#contact-name"), false);
                hint.text("Please enter your name.");
                return
            }
            else {
                setInputColor($("#contact-name"), true);
            }
        
            if (!validEmail(email)) {
                hint.text("Please enter a valid email address.");
                setInputColor($("#contact-email"), false);
                return;
            }
            else { 
                setInputColor($("#contact-email"), true);
            }
            
            if (message.length < 10) {
                hint.text("Your message must be at least 10 characters long.");
                setInputColor($("#contact-message"), false);
                return;
            }
            else {
                setInputColor($("#contact-message"), false);
            }

            // Success
            hint.css("color", "green");
            hint.text("Message sent successfully! We will get back to you soon.");

            // Clear fields
            $("#contact-name").val("").css("background-color", "");
            $("#contact-email").val("").css("background-color", "");
            $("#contact-message").val("").css("background-color", "");
        }
        validateContactForm()
    });
})