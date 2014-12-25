Venues = new Meteor.Collection('venues');
Venues.allow({
  insert: function() {
    return true;
  }
});
