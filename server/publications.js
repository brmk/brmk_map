Meteor.publish('queries', function(Id) {
  return Queries.find({userId : Id});
});
