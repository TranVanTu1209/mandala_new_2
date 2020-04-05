var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-to-hotel'), {
    center: { lat: 21.03, lng: 105.644 },
    zoom: 6
  });
}