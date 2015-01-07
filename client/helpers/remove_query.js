Template.qlist.events = {
    'click .remove': function(event, tmpl) {
        event.preventDefault();
        if (Meteor.userId() !== null)
            Queries.remove({
                _id: event.target.id
            });
        else {
            var queries = Session.get('queries');
            var index = queries.indexOf(this);
            queries.splice(index, 1);
            Session.set('queries', queries);
        }
    }
}