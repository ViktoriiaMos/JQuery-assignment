//The code above tells the browser to start executing our commands only when the page has finished loading. This is important because otherwise, you might ask jQuery to change HTML code that hasn't been loaded yet.
$(document).ready(function(){

 $('img').click(function() {
   $(this).attr('src', $(this).attr('alt-pic'));
 });
});