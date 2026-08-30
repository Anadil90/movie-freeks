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

    // Live validation for each field
    $("#contact-name").on("input", function () {
        const value = $(this).val().trim();
        setInputColor($(this), value.length >= 2);
    });

    $("#contact-email").on("input", function () {
        const value = $(this).val().trim();
        setInputColor($(this), validEmail(value));
    });

    $("#contact-message").on("input", function () {
        const value = $(this).val().trim();
        setInputColor($(this), value.length >= 10);
    });

    // Submit handler
    $("#contact-form").submit(function (event) {
        event.preventDefault();

        const name = $("#contact-name").val().trim();
        const email = $("#contact-email").val().trim();
        const message = $("#contact-message").val().trim();

        // Validation checks
        if (name.length < 2) {
            hint.text("Please enter your name (at least 2 characters).");
            setInputColor($("#contact-name"), false);
            return;
        }

        if (!validEmail(email)) {
            hint.text("Please enter a valid email address.");
            setInputColor($("#contact-email"), false);
            return;
        }

        if (message.length < 10) {
            hint.text("Your message must be at least 10 characters long.");
            setInputColor($("#contact-message"), false);
            return;
        }

        // Success
        hint.css("color", "green");
        hint.text("Message sent successfully! We will get back to you soon.");

        // Clear fields
        $("#contact-name").val("").css("background-color", "");
        $("#contact-email").val("").css("background-color", "");
        $("#contact-message").val("").css("background-color", "");
    });

});