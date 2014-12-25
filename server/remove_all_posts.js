Meteor.startup(function() {
    return Meteor.methods({
      removeAllPosts: function() {
        return Venues.remove({});
      }
    });

  });
