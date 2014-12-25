(function(){
    Template.user_loggedout.events({
      
        "click #login": function(e, tmpl){
            Meteor.loginWithGoogle({
            requestPermissions: ['email', 'profile'] } , function(err) {
        if (err){
          console.log(err.reason);
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
          }
                         );
           Meteor.call('removeAllPosts')
            deleteMarkers();
        }
    });

    Template.user_loggedin.events({
        "click #logout": function(e, tmpl) {
            Meteor.logout(function(err) {
                if(err) {
                    //sow err message
                } else {
                    //show alert that says logged out
                  Session.set('queries', undefined)
                    //alert('logged out');
                }
              deleteMarkers();
            });
        }
    });
}());  


  

  


