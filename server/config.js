
(function(){
    Meteor.startup(function () {
        Accounts.loginServiceConfiguration.remove({
            service: "google"
        });

        Accounts.loginServiceConfiguration.insert({
             service: "google",
           
            clientId: "771513959302-t1mgnp6nvec5shmdckd2cq961kslkq1i.apps.googleusercontent.com",
            secret: "-w3AE4Ad93DHgZlQKUhX85Wb"
        });
    }
                  
                  );
}());
