## Software testing and its importance 
Software testing is a vital part of the SDLC (Software Development Life Cycle) that mainly aims to improve sofware quality through thorough tests. 
Testing ensures that:
- The features of the application fuction properly as expected.
- The application is secure. 
- The needs of the business owners or users are met.
- The application provides value to the end users.

Testing helps to:
- Mitigate risks by identifying defects and failures in the early stages of the development process, when they are less expensive to fix.
- Bolsters confidence in knowing that the software application works in the way that was intended before the release.
- Ensure compliance by making sure that the sofware is in line with the standards, regulations and compliance requirements.
- Provide user satisfaction by testing from the perspective of the user to verify the usability, functionality and compatibility of the software.
- Optimize the software by providing vital feedback to continuously improve the quality of the software, the user experience, security, performace, or other factors.
- Reduce the cost of defects found after the release of the software by finding and fixing bugs earlier in the development cycle.

By reading the following source, all of the points above has been made evident: [The Importance of Software Testing](https://www.computer.org/resources/importance-of-software-testing)

## Types of tests
Behaviour Driven Development (BDD) and Test Driven Development (TDD) are both software testing approaches that aim to improve software quality and reliability through a methodology that is centered towards testing the software features beforehand. BDD is more concerned with the behaviour of the software application, while TDD is based on a process of writing the tests even before the code is written. While BDD is a manual testing procedure, TDD is an automatic testing procedure. More can be read about the testing procedures here: [Difference between BDD Vs TDD in Software Engineering](https://www.geeksforgeeks.org/software-engineering/difference-between-bdd-vs-tdd-in-software-engineering/)

For this project, BDD forms the proper testing procedure as:
- The size of the project allows a number of manual tests to be concluded individually.
- This kind of approach helps to test the features in order to ensure that the user expectations can be met.

## Concluded BDD tests
The tests are outlined in scenarios, in which the user goal is defined, and then the situations that follow the user interaction along with the outcome that should occur. They are outlined in the format:
Given - A specific event, such as when the user is logged in.
When - A particular action is carried out, such as clicking the log out button.
Then - A set of observable consequences occur, such as the user has been logged out and the user is shown feedback to confirm that the action has occured.

### Scenario:
The user does not fill in any form fields and clicks the submit button on the form directly 

**Given** the user is on the sign up page, **when** the user accidently cicks on the submit button without filling in form fields, **then** the user is warned that an empty form cannot be submitted.

The test has been concluded with success. When the user attempts to submit an empty form, the user is prompted with a message on the hint element of the form stating that the user cannot sumbit an empty form. 
![Empty form](../assets/images/form_empty.png)

### Scenario:
The user does not fill out one field of a form and then clicks on the submit button

**Given** the user is on the signup page, **when** the user accidentally leaves out one field empty, **then** the user is propmpted with a message on the hint element stating that the particular field must be filled in. 

The form has been tested with the first name field empty, and it results in the message displaying in the hint element warning the user of the mistake. Test has been concluded to be successful. The screenshots below show each empty field being validated.

Fist name unfilled
![Empty form field submission](../assets/images/test_empty_field.png)

Last name unfilled
![Last name unfilled](../assets/images/last_name_unfilled.png)

Username unfilled
![Username unfilled](../assets/images/username_unfilled.png)

Password unfilled
![Password unfilled](../assets/images/password_unfilled.png)

Email unfilled
![Email unfilled](../assets/images/email_unfilled.png)

