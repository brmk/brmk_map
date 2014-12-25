Deps.autorun(function(){
                        Meteor.subscribe('queries', Meteor.userId());
                        console.log(Meteor.userId());
                        Meteor.subscribe('venues', Meteor.userId());
                       }
             );