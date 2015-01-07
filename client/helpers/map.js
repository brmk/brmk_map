
Template.map.rendered = function () {
    // Create map
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(35.7038767,139.7292708)
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
    Session.set('map', true);
    /*
   var marker = new google.maps.Marker({
    position: new google.maps.LatLng(35.7029009, 139.6698759),
    title:'Meine Position',
    icon:'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  });
  marker.setMap(map);  */
}

