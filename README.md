# Interactive Frontend Development Milestone Project  

This is a frontend-only website built for Interactive Frontend Development Milestone Project    **google maps api**.

## UX

- The Monkees - project [PDF](https://github.com/dmtry/ucfdmp-dn/blob/master/dev/the_monkees_project.pdf) with sketches and wieframes included in dev folder.
    - or locate manually in folder ../dev/the_monkees_project.pdf

#User stories

- As a user I want to:
  - Find tourist attractions around me /reviews, ratings, photos
    - Nearby current location
    - At selected destination
  - Find accommodation / Hotel / Hostel etc. around me (with radius) / reviews, ratings, photos
    - Nearby current location
    - At selected destination
  - Find bars and restaurants (with radius) around me / reviews, ratings, photos
    - Nearby current location
    - At selected destination
  - Find events or activities (with radius) around me
    - Nearby current location
    - At selected destination



## Features

- **News page** provides option to show news using bootstrap cards.

- **Listen page** provides option to view embeded youtube videos and listen to spotify albums. Both options redirect to reevant official pages.

- **Band page** provides some description of band itself and it's members.

- **Book event page** provides option to send request to book event with short description and preferred date.

- **Contact page** provides option to send any question using simple form.

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [HTML](https://w3c.github.io/html/)
    - The project uses **HTML** as core language.

- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - The project uses **CSS** to describe colors, layout, and fonts.

- [JavaScript](https://www.javascript.com/)
    - The project uses **JQuery** as part of **bootstrap**.

- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to build responsive web site and utilise it's components.


## Testing

- HTML validated - [Markup Validation Service](https://validator.w3.org/)

- CSS validated - [CSS Validation Service](https://jigsaw.w3.org/css-validator/)

1. Tested on various browsers and devices:
    1. Chrome, Firefox, Edge on windows PC and Tablet;
        1. general resiszing and using developer tools.
        2. tablet rotation
        3. screen resolution from 2560x1440 down to 1280x800
    2. Chrome, Firefox, Safari on MAC
        1. general resiszing and using developer tools
    3. Iphone SE, 6S Plus
        1. Chrome, Safari
    4. Galaxy S3
        1. Built-in android browser, Chrome, Firefox

2. All links where checked manually and using [checker tool](https://www.deadlinkchecker.com/website-dead-link-checker.asp)
    > 100% scanned - 36/36 URLs checked, 36 OK


3. Contact form:
    1. /contact.html
    2. Empty form submission highlights that Name field is required
        1. required warning appears for any field that was left empty on time of submission - Name, email, message
    3. Submitting form with incorrect email format will produce warning message **please include an @ in the email address**
    4. Submitting form with all correct fields produces no error, as there is no post method implemented, page simply refreshes to empty form.

4. Book event form:
    1. /book-event.html
    2. Empty form submission highlights that Name field is required
        1. required warning appears for any field that was left empty on time of submission - Name, email, phonr number, message, date pick
    3. Submitting form with incorrect email format will produce warning message **please include an @ in the email address**
    4. Submitting form with all correct fields produces no error, as there is no post method implemented, page simply refreshes to empty form.

### Bugs / Issues

## Deployment

Project is deployed on [github pages](https://dmtry.github.io/ucfdmp-dn/).

No additional setup is needed to run project locally.
- Download repositary.
- Open index.html

## Credits

- [BootstrapCDN](https://www.bootstrapcdn.com/) and [BootstrapCDN](https://www.bootstrapcdn.com/fontawesome/) for fontawesome
- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [Geolocation: Displaying User or Device Position on Maps](https://developers.google.com/maps/documentation/javascript/geolocation)
- [Place Autocomplete Hotel Search](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#try-it-yourself)
- [Place Details](https://developers.google.com/places/web-service/details)
- [Place Library](https://developers.google.com/maps/documentation/javascript/places#place_details)


### Content

### Media

- Icon for favicon downloaded from [icons8.com](https://icons8.com/icons/set/travel) 

### Acknowledgements

- I received inspiration for this project from:
    -  https://elfsight.com/blog/2018/06/google-maps-not-working-website/
    -  https://colorlib.com/wp/jquery-map-plugins/
