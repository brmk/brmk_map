Template.venuesList.helpers({
  venues: function() {
    return Venues.find();
  }
});