Template.venuesList.helpers({
  venues: function() {
    return Session.get('venues');
  }
});
