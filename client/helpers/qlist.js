if(Meteor.userId()===null){
     Template.qlist.helpers({
        queries: function () {
      return Session.get('queries')
    }  
  }
    ); 
  console.log('setting helper to session');
   }
else 
  Template.qlist.helpers({
  queries: function() {
    return Queries.find({});
  }
    
  });
