# Interactive Frontend Development Milestone Project  

This is a frontend-only website built for Interactive Frontend Development Milestone Project - **google maps api**.

## UX

- Wieframes included in ../assets/wireframes folder.

# User stories

- As a user I want to:
  - Find tourist attractions, hotels, bars and restaurants in desired city.
  - Check nearby locations.

## Features

- **Explore Map** Google maps page with option to entire city name with autocomplete option. After selected city is populated on map user can select desired locations from the drop down list.

- **Around Me** Deafult google maps page with option to use geolocation if users accepts. Map will show default locations on map to explore. Allwoing to open navigation in native app if used on hanheld device.

## Technologies Used

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
    > 100% scanned - 13/13 URLs checked, 13 OK

### Bugs / Issues

Current bug for desktop browsers, geolocation might not show correct location as being determied via IP address which might not reflect actual user location.

## Deployment

Project is deployed on [github pages](https://dmtry.github.io/ucfdmp-dn/).

To run project in your own environment you will need to have your own google maps [api key](https://developers.google.com/maps/documentation/embed/get-api-key).
- Current api access is restircted to github pages.
- You will need to enable Maps JavaScript API and Places API in cloud console.

Deployment:
- Download repositary.
- Edit index.html and around.html, to update script section with your api key or replace with full script tag.
- Open index.html to run the project.

## Credits

- [BootstrapCDN](https://www.bootstrapcdn.com/) and [BootstrapCDN](https://www.bootstrapcdn.com/fontawesome/) for fontawesome
- [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)
- [Geolocation: Displaying User or Device Position on Maps](https://developers.google.com/maps/documentation/javascript/geolocation)
- [Place Autocomplete Hotel Search](https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch#try-it-yourself)
- [Place Details](https://developers.google.com/places/web-service/details)
- [Place Library](https://developers.google.com/maps/documentation/javascript/places#place_details)

### Media

- Icon for favicon downloaded from [icons8.com](https://icons8.com/icons/set/travel) 

### Acknowledgements

- I received inspiration for this project from:
    -  https://elfsight.com/blog/2018/06/google-maps-not-working-website/
    -  https://colorlib.com/wp/jquery-map-plugins/
