const url = "https://api.meetup.com/801labs/events?&sign=true&photo-host=public&page=5"

$(document).ready(function(){
  $.ajax({
       url: url,
       dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
       success:function(json){
         console.log(json);
         $("#calBlocks").html(json.data.map((event)=>{
           const descriptionLength = 200
           if (event.description.length > descriptionLength){
             event.description = event.description.match(/\<p\>(.+?)\<\/p\>/)[0].replace('</p>', ' [...]</p>')
           }
            const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
            let dateTime = new Date(`${event.local_date} ${event.local_time}`)
            dateTimeString = dateTime.toLocaleDateString("en-US", options);

           return `<div class="block">
            <p class="date-time">${dateTimeString}</p>
            <h2 class="title">${event.name}</h2>
            <h3 class="subtitle location">At ${event.venue.name}</h3>
            <div class="content">
              ${event.description}
              <p class="has-text-success">${event.yes_rsvp_count} people confirmed going, the rest are anonymous</p>
              <a href="${event.link}" class="button is-danger link">
              Attend</a>
            </div>
           </div>`
         }))
       },
       error:function(){
           console.log("there was an error loading meetup api");
       }
  });
});
