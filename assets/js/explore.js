var map, places, infoWindow;
var markers = [];
var autocomplete;
var image;
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');

function reset() {
  location.reload();
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: { lat: 53.3498, lng: -6.2603 },
    mapTypeControl: false,
    panControl: false,
    zoomControl: true,
    streetViewControl: false,
    fullscreenControl: true
  });

  infoWindow = new google.maps.InfoWindow({
    content: document.getElementById('info-content')
  });

  // Cities
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */
    (
      document.getElementById('autocomplete')), {
      types: ['(cities)'],
    });
  places = new google.maps.places.PlacesService(map);

  autocomplete.addListener('place_changed', onPlaceChanged);

}

// Zoom in for City selected
function onPlaceChanged() {
  var place = autocomplete.getPlace();
  if (place.geometry) {
    map.panTo(place.geometry.location);
    map.setZoom(15);
    search();
  }
}

// Search for locations in selected city
function search() {
  var locations = document.getElementById("locations").value;

  var search = {
    bounds: map.getBounds(),
    types: [locations]
  };

  places.nearbySearch(search, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      clearResults();
      clearMarkers();

      for (var i = 0; i < results.length; i++) {

        // Use marker animation to drop the icons incrementally on the map.
        markers[i] = new google.maps.Marker({
          position: results[i].geometry.location,
          animation: google.maps.Animation.DROP,
        });
        // Info window
        markers[i].placeResult = results[i];
        google.maps.event.addListener(markers[i], 'click', showInfoWindow);
        setTimeout(dropMarker(i), i * 10);
        addResult(results[i], i);
      }
    }
  });
}

function clearMarkers() {
  for (var i = 0; i < markers.length; i++) {
    if (markers[i]) {
      markers[i].setMap(null);
    }
  }
  markers = [];
}


function dropMarker(i) {
  return function() {
    markers[i].setMap(map);
  };
}

function addResult(result, i) {
  var results = document.getElementById('results');
  var markerLetter = String.fromCharCode('A'.charCodeAt(0) + (i % 26));
  var markerIcon = MARKER_PATH + markerLetter;

  var tr = document.createElement('tr');
  tr.style.backgroundColor = (i % 2 === 0 ? '#F0F0F0' : '#FFFFFF');
  tr.onclick = function() {
    google.maps.event.trigger(markers[i], 'click');
  };

  var iconTd = document.createElement('td');
  var nameTd = document.createElement('td');
  var icon = document.createElement('img');
  icon.setAttribute('class', 'placeIcon');
  icon.setAttribute('className', 'placeIcon');
  var name = document.createTextNode(result.name);
  iconTd.appendChild(icon);
  nameTd.appendChild(name);
  tr.appendChild(iconTd);
  tr.appendChild(nameTd);
  results.appendChild(tr);
}

function clearResults() {
  var results = document.getElementById('results');
  while (results.childNodes[0]) {
    results.removeChild(results.childNodes[0]);
  }
}

// Get the place details for current selection in an info window.
function showInfoWindow() {
  var marker = this;
  places.getDetails({ placeId: marker.placeResult.place_id },
    function(place, status) {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        return;
      }
      infoWindow.open(map, marker);
      buildIWContent(place);
    });
}

// Load the place information into the HTML elements used by the info window.
function buildIWContent(place) {
  document.getElementById('iw-icon').innerHTML = '<img class="hotelIcon" ' +
    'src="' + place.icon + '"/>';
  document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
    '" target="_blank" >' + place.name + '</a></b>';
  document.getElementById('iw-address').textContent = place.vicinity;

  if (place.formatted_phone_number) {
    document.getElementById('iw-phone-row').style.display = '';
    document.getElementById('iw-phone').textContent =
      place.formatted_phone_number;
  }
  else {
    document.getElementById('iw-phone-row').style.display = 'none';
  }

  // opening hours - no result if undefined

  if (place.opening_hours) {
    document.getElementById('iw-hours-mon').textContent = place.opening_hours.weekday_text[0];
  } else {
    document.getElementById('iw-hours-mon').textContent = '';
  }

  if (place.opening_hours) {
    document.getElementById('iw-hours-tue').textContent = place.opening_hours.weekday_text[1];
  } else {
    document.getElementById('iw-hours-tue').textContent = '';
  }
    
    
  if (place.opening_hours) {
    document.getElementById('iw-hours-wed').textContent = place.opening_hours.weekday_text[2];
  } else {
    document.getElementById('iw-hours-wed').textContent = '';
  }
  
  if (place.opening_hours) {
    document.getElementById('iw-hours-thr').textContent = place.opening_hours.weekday_text[3];
  } else {
    document.getElementById('iw-hours-thr').textContent = '';
  }
    
  
  if (place.opening_hours) {
    document.getElementById('iw-hours-fr').textContent = place.opening_hours.weekday_text[4];
  } else {
    document.getElementById('iw-hours-fr').textContent = '';
  }
  
  if (place.opening_hours) {
    document.getElementById('iw-hours-sat').textContent = place.opening_hours.weekday_text[5];
  } else {
    document.getElementById('iw-hours-sat').textContent = '';
  }
  
  if (place.opening_hours) {
    document.getElementById('iw-hours-sun').textContent = place.opening_hours.weekday_text[6];
  } else {
    document.getElementById('iw-hours-sun').textContent = '';
  }


  // Assign a five-star rating , using a black star ('&#10029;')
  // to indicate the rating the location has earned, and a white star ('&#10025;')
  // for the rating points not achieved.
  if (place.rating) {
    var ratingHtml = '';
    for (var i = 0; i < 5; i++) {
      if (place.rating < (i + 0.5)) {
        ratingHtml += '&#10025;';
      }
      else {
        ratingHtml += '&#10029;';
      }
      document.getElementById('iw-rating-row').style.display = '';
      document.getElementById('iw-rating').innerHTML = ratingHtml;
    }
  }
  else {
    document.getElementById('iw-rating-row').style.display = 'none';
  }

  // The regexp isolates the first part of the URL (domain plus subdomain)
  // to give a short URL for displaying in the info window.
  if (place.website) {
    var fullUrl = place.website;
    var website = hostnameRegexp.exec(place.website);
    if (website === null) {
      website = 'http://' + place.website + '/';
      fullUrl = website;
    }
    document.getElementById('iw-website-row').style.display = '';
    document.getElementById('iw-website').textContent = website;
  }
  else {
    document.getElementById('iw-website-row').style.display = 'none';
  }
}