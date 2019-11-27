// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 41.834873, lng: -87.627007};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
  