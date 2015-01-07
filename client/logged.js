if(Meteor.userId()!==null){
  console.log('logged in');
  Session.set('logged',true);
}
else{
  Session.set('logged',false);
  console.log('logged out');
}