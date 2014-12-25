Template.qlist.events={
'click .remove' : function(event, tmpl){
    event.preventDefault();
    console.log(event.target.id);
    Queries.remove({_id:event.target.id});
}
}