var deleteMarkers = function() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
var calculateRadius = function() {
    bounds = map.getBounds();
    center = bounds.getCenter();
    ne = bounds.getNorthEast();
    // r = radius of the earth in statute miles
    var r = 3963.0;
    // Convert lat or lng from decimal degrees into radians (divide by 57.2958)
    var lat1 = center.lat() / 57.2958;
    var lon1 = center.lng() / 57.2958;
    var lat2 = ne.lat() / 57.2958;
    var lon2 = ne.lng() / 57.2958;
    // distance = circle radius from center to Northeast corner of bounds
    var dis = r * Math.acos(Math.sin(lat1) * Math.sin(lat2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1));
    return dis;
}
var markers = [];
var venues;
if (Session.get('queries') === undefined)
    var queries = [];
else
    var queries = Session.get('queries');
Template.input.events({
    'keypress input': function(event, template) {
        if (event.key == "Enter") {

            var _name = document.getElementById('searchBox').value;
            var _lon = map.getCenter().lng();
            var _lat = map.getCenter().lat();
            var _radius = calculateRadius();

            if (Meteor.userId() !== null) {
                Queries.insert({
                        name: _name,
                        lon: _lon,
                        lat: _lat,
                        radius: _radius.toFixed() + "km",
                        date: moment(Date()).format("MMM DD hh:mm"),
                        userId: Meteor.userId()
                    }

                );
            } else {
                queries.push({
                    name: _name,
                    lon: _lon,
                    lat: _lat,
                    radius: _radius.toFixed() + "km",
                    date: moment(Date()).format("MMM DD hh:mm"),
                });
                Session.set('queries', queries);
            }
            // Deletes all markers in the array by removing references to them.
            deleteMarkers();
            var client_id = '52GBYYOWZBCTUQCQFF34AWFVDAN4OHGBUVIT35R5NMXZQGOX';
            var client_secret = 'KS0TDOW2F3YGZGRNYYY4QVQ05YQBVXVVY1HPFJEOZVSRVD5C';
            var base_url = 'https://api.foursquare.com/v2/';
            var endpoint = 'venues/search?';
            var ll = "&ll=" + _lat + "," + _lon;
            var radius = "&radius=" + (_radius * 1000).toFixed();
            var query = "&query=" + _name;
            var key = '&client_id=' + client_id + '&client_secret=' + client_secret + '&v=' + '20140626';
            var url = base_url + endpoint + key + ll + radius + query;

            $.get(url, function(result) {

                $('#msg pre').text(JSON.stringify(result));

                venues = result.response.venues;
                Session.set('venues', venues);
                for (var i in venues) {
                    var venue = venues[i];
                    // place the a marker on the map
                    markers[i] = new google.maps.Marker({
                        position: new google.maps.LatLng(venue.location.lat, venue.location.lng),
                        map: map
                    });
                }
            });
        }
    }
});

