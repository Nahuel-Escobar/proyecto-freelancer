// Initialite and the map 

function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
      mapTypeId: 'roadmap'
  };
                  
  // Display a map on the web page
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map.setTilt(50);
      
  // Multiple markers location, latitude, and longitude
  var markers = [
      ['Brooklyn Museum, NY', 40.671349546127146, -73.96375730105808],
      ['Central Library, Brooklyn, NY', 40.67254944015601, -73.9682162170653],
      ['Prospect Park Zoo, NY', 40.66427511834109, -73.96512605857858],
      ['Barclays Center, Brooklyn, NY', 40.68268267107631, -73.97546296241961]
  ];
                      
  // Info window content
  var infoWindowContent = [
      ['<div class="info_content">' +
      '<h2>Brooklyn Museum</h2>' +
      '<h3>200 Eastern Pkwy, Brooklyn, NY 11238</h3>' +
      '<p>The Brooklyn Museum is an art museum located in the New York City borough of Brooklyn.</p>' + 
      '</div>'],
      ['<div class="info_content">' +
      '<h2>Central Library</h2>' +
      '<h3>10 Grand Army Plaza, Brooklyn, NY 11238</h3>' +
      '<p>The Central Library is the main branch of the Brooklyn Public Library, located at Flatbush Avenue.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h2>Prospect Park Zoo</h2>' +
      '<h3>450 Flatbush Ave, Brooklyn, NY 11225</h3>' +
      '<p>The Prospect Park Zoo is a 12-acre zoo located off Flatbush Avenue on the eastern side of Prospect Park, Brooklyn, New York City.</p>' +
      '</div>'],
      ['<div class="info_content">' +
      '<h2>Barclays Center</h2>' +
      '<h3>620 Atlantic Ave, Brooklyn, NY 11217</h3>' +
      '<p>Barclays Center is a multi-purpose indoor arena in the New York City borough of Brooklyn.</p>' +
      '</div>']
  ];
      
  // Add multiple markers to map
  var infoWindow = new google.maps.InfoWindow(), marker, i;
  
  // Place each marker on the map  
  for( i = 0; i < markers.length; i++ ) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      marker = new google.maps.Marker({
          position: position,
          map: map,
          title: markers[i][0]
      });
      
      // Add info window to marker    
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
              infoWindow.setContent(infoWindowContent[i][0]);
              infoWindow.open(map, marker);
          }
      })(marker, i));

      // Center the map to fit all markers on the screen
      map.fitBounds(bounds);
  }

  // Set zoom level
  var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      this.setZoom(14);
      google.maps.event.removeListener(boundsListener);
  });
}

window.initMap = initMap;