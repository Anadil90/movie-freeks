## Movie Freeks
Movie freeks is a movie review website that aims to present a straightforward and quick way to determine good movies to watch. The user can find out movies worthwhile watching relatively easily owing to the information architechture that aims for the user to quickly take in the information and make a decision.

## Features 
- A rating system that makes use of effective iconography to let the user know in a flash whether a movie is good or not. The rating system is made to convey to the user a simple "good" or "bad" with the combination of text and icons. Users can log in and rate movies by allocating popcorn icons, the maximum of which is 5, and the minimum of which is 1.
- A sidebar that cycles the best rated movies with a minimum of 3 popcorns and above.
- A pleasing interface that makes use of bold colors and text that best makes an impact upon the user.
- The ability for the users to leave comments on a particular movie review to add their perspective of the movie direction, plot, acting, or other elements.

## User stories
- When I visit the website for the first time, I am clear about the purpose of the website by reading the text on the landing page. I have a good idea of what to expect when I click on the button on the landing page.
- Upon clicking the button on the landing page, I come accross the web page where I can see an input field and a button to search for a movie. 
- When I type in the name of the movie and click the search button, it results in the information of the movie showing up almost instantly, and is arranged in a way such that it is easy to get an idea of the movie in a relatively short time. I can see all the relevant information of the movie such as movie title, year released, director, and plot. I am not provided with too much information, such that I need a bit of time to go through it, which leads to information overload.
- When the search results for the movie being searched for loads, I can also see the corresponding rating for the movie that helps to make a clearer decision in terms of whether to watch it, or not.
- On the content page, where the movie search results can be seen, I can also see a sidebar with shuffling movies with ratings of 3 popcorns or above. This gives me a quicker way to discern whats good without neccessarily searching for a movie.

## Project Wireframes
The wireframing of the project was done on a Lenovo P12 tablet with pen input. The rough drawings helped to capture visually the appearance of the website close to its' final iteration.

Landing page:
The landing page of Movie Freeks is poised to be a simple page with a convincing call-to-action text, and 5 randomly generated icons that fall out from a random position on the viewport. The icons are camera reel, popcorn bucket, movie ticket, and a drink bottle with straw. These icons aim to give a more vivid meaning to the purpose of the website. The call-to-action text also serves the purpose of drawing in the user, and keeping them focused on their train of thoughts leading to the first visit of the content page. The navbar and the footer has been left out from the landing page, so as to not distract the user from the main purpose of the website. Upon reading, it has been found out that this is actually a common practice, and having navigation links can actually hurt the conversion rates of websites. On this source, this is stated: ![Should Landing Pages Have Navigation? (Here's What the Data Says)](https://www.seedprod.com/landing-page-navigation/)

![Movie Freeks landing page](./wireframes/movie-freeks-landing.png)

Movie search results page: 
The website search results page has the input element with the search button for searching the movie, and the section with the movie search results apended to it dynamically. Below it is the comments section where users voice in their opinions about the movie. A rating system is also present here where users leave thier ratings. The ratings in terms of popcorn icons can be seen on the search results div.

![Movie Freeks search results](./wireframes/search-results-wireframe.png)

Login page: 
The login page presents the user with a simple login form with a background image of a movie theatre to keep the user focused on the purpose of the website. The user is dynamically informed of the action being performed upon login. For example, if they cick on the post comment button, they will be taken to the login page where the heading will read "login to post a comment" When they login to leave a comment, and "login to leave a review" when the user logs in to leave a review.

![Movie Freeks login wireframe](./wireframes/login-wireframe.png)

signup wireframe:
The signup page consists of a background image of a form being filled out to keep the relevance of the page clear, and draw a relation between the user action being performed, that is, filling out a form to register for a service. This has been done as an attempt to improve the user experience, by leading the user from the main content page to the login page, and keeping the user focused on the user action to be performed, without distracting the user.

The signup form consists of input element with placeholder text of semantic meaning to make it easier for the user to fill out the field quickly without thinking what should be done. Intelligble user feedback is given to the user in case the field is empty, or not completed properly, or is too short in terms of characters. A first name for example, should be a minimum of 2 characters. Normally a first name can be thought to be longer in terms of letters, but it has been considered that some names of Chinese origin may consist of only two letters, for example; Bo. If a minimum of three characters is to be assigned as the minimun length, then some people with 2 letter first names would not be able to register with their first name, leading to major frustration with the user experience. 

The signup form also contains a hint element, that helps the user to fill out a field when incorrect text input has been given. This is particularly for the password field, as it is validated with a combination of numbers, letters, and special characters for security. The useful information on what the user has to do in order to fill out a particular field is given on the hint element on top of the form. 

![Movie Freeks signup wireframe](./wireframes/signup-wireframe.png)