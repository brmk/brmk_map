Deps.autorun(function(){
                        if(Meteor.userId()!==null)
                        Meteor.subscribe('queries', Meteor.userId());
                       }
             );