Template.venuesList.events({
      
        "click #export": function(e, tmpl){
            venues = Session.get('venues');
            csvString='Name; City; Address; Latitude; Longitude%0A';
            for( i=0; i<venues.length; i++)
              csvString += venues[i].name +"; " + venues[i].location.city + "; " + venues[i].location.address + "; " + venues[i].location.lat + "; " + venues[i].location.lng + "%0A";
            console.log(e.target);
            var a = document.createElement('a');
            a.href     = "data:text/csv;charset=utf-8,\uFEFF" + csvString;
            a.target   = '_blank';
            a.download = 'myFile.csv';
            document.body.appendChild(a);
            a.click();
        }
});
