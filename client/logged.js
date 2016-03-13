if(Meteor.userId()!==null){
  Session.set('logged',true);
}
else{
  Session.set('logged',false);
}