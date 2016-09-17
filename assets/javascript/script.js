$(document).ready(function(){
                                             

//  .o8           .                        
// "888         .o8                        
//  888oooo.  .o888oo ooo. .oo.    .oooo.o 
//  d88' `88b   888   `888P"Y88b  d88(  "8 
//  888   888   888    888   888  `"Y88b.  
//  888   888   888 .  888   888  o.  )88b 
//  `Y8bod8P'   "888" o888o o888o 8""888P' 
                                        
// Initial array of movies
	var gifs = ['Ducks', 'Birds', 'Lions', 'Alligators'];

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 
		$('#gifsView').empty();//empty div

			for(var x = 0; x<gifs.length;x++){//looping array
			var a = $('<button>');
			a.addClass('gif');
			a.attr('data-name', gifs[x]);
			a.text(gifs[x]);
			$('#gifsView').append(a);
		}
	}

	
	$('#findGif').on('click', function(){//click
		console.log($('#gif-input').val().trim())
		gifs.push($('#gif-input').val().trim());//input to array
		renderButtons();//running renderbuttons
		gifDisplay();
		return false;

	});
function gifDisplay(){
	if($('#gif-input').val().length > 0){ 
        
    $('#main').empty();
	var gifName = $('#gif-input').val().trim();
	
		
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({ url: queryURL, method: 'GET'}).done(function(response) {
        	console.log(response);

        	for(var x=0; x<=response.data.length;x++){

		    
		    $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating +'</h3><img src="' + response.data[x].images.downsized_still.url +'" data-animate="'+response.data[x].images.downsized.url+'" data-still="'+ response.data[x].images.downsized_still.url +'" data-state="still"></div>');} 
		}); 

	}}
	//printing render buttons                                        
                                        
//               o8o                       
//               `"'                       
//  .oooo.      oooo  .oooo.   oooo    ooo 
// `P  )88b     `888 `P  )88b   `88b..8P'  
//  .oP"888      888  .oP"888     Y888'    
// d8(  888      888 d8(  888   .o8"'88b   
// `Y888""8o .o. 88P `Y888""8o o88'   888o
//            `Y888P      


$(document).on('click', '.gif', function (){
	$('#main').empty();
	var gifName = $(this).data("name");
	console.log($('#gif-input').val().trim());
		
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({ url: queryURL, method: 'GET'}).done(function(response) {
        	console.log(response);

        for(var x=0; x<=response.data.length;x++){
		   $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating +'</h3><img src="' + response.data[x].images.downsized_still.url +'" data-animate="'+response.data[x].images.downsized.url+'" data-still="'+ response.data[x].images.downsized_still.url +'" data-state="still"></div>');} 
		}); 
	});
	// ========================================================

	// This calls the renderButtons() function
	renderButtons();


// ENTER KEY ADDS ITEM TO LIST

$(document).keypress(function(e) {
    if(e.which == 13 && $('#gif-input').val().length > 0){ 
        
    $('#main').empty();
	var gifName = $('#gif-input').val().trim();
	
		
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifName + "&api_key=dc6zaTOxFJmzC";
		
		$.ajax({ url: queryURL, method: 'GET'}).done(function(response) {
        	console.log(response);

        	for(var x=0; x<=response.data.length;x++){
		   // $('#main').append('<p><h3>Rating: </h3><p><h3>' + response.data[x].rating +'<h3>')
		    $('#main').append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="rating"><h3>Rating: ' + response.data[x].rating +'</h3><img src="' + response.data[x].images.downsized_still.url +'" data-animate="'+response.data[x].images.downsized.url+'" data-still="'+ response.data[x].images.downsized_still.url +'" data-state="still"></div>');} 
		}); 

	}

});


$(document).on('click', 'img', function(){
	console.log($(this));
	console.log($(this).attr('src'));
	
	if($(this).attr('src') == $(this)[0].attributes[2].value)
	{$(this).attr('src', $(this)[0].attributes[1].value);}
	
else if($(this).attr('src') == $(this)[0].attributes[1].value)
	{$(this).attr('src', $(this)[0].attributes[2].value);}
});















}); //END OF DOCUMENT READY























