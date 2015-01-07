if(Meteor.userId()!==null){
  Template.qlist.helpers({
  queries: function() {
    return Queries.find({});
  }
  });
  console.log('setting helper to MongoDB');
   }
else {
  Template.qlist.helpers({
        queries: function () {
      return Session.get('queries')
    }  
  }
    ); 
  console.log('setting helper to session');
}
setHelperToMongo = function(){
  Template.qlist.helpers({
  queries: function() {
    return Queries.find({});
  }
  });
  console.log('setting helper to MongoDB');
   };


setHelperToSession = function()
{
  Template.qlist.helpers({
        queries: function () {
      return Session.get('queries')
    }  
  }
    ); 
  console.log('setting helper to session');
};