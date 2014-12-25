Meteor.publish('queries', function(Id) {
  return Queries.find({userId : Id});
});
Meteor.publish('venues', function(Id) {
  return Venues.find({userId : Id});
});