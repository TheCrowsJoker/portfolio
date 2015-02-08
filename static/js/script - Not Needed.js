$(document).ready( function() {
 
 var query = "https://api.flickr.com/services/feeds/photos_public.gne?tags=rabbit&format=json";
 

 var mycallback = function (data) {
   console.log('success');
   console.log(data);
   var htmlString = '';
   $.each(data.items, function(i,item){
     var imageLink = item.media.m;
     console.log(imageLink);
     htmlString += '<a href="' + imageLink + '" data-lightbox="gallery">';
     htmlString += '<img src="' + imageLink + '">';
     htmlString += '</a>';
   });
   $('#gallery').html(htmlString);
 }

 $.getJSON(query, mycallback);
 
});  