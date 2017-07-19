$("body").append("<ul></ul>");

$.ajax ( {
	url: "https://ga-cat-rescue.herokuapp.com/api/cats", 
	dataType: 'json',
	success: function(data) {
	   data.forEach( function(l) {
	   	 $("ul").append("<li>" + l.name + " - " + l.note + "</li>");
	   });
	}
});





$("form").on("submit", function(event) {
	event.preventDefault();
	
	var newCat =  { 
			name: $('#cat-name').val(),
			note: $('#cat-note').val(),

	};


	console.log(newCat);
	
	$.ajax ( {
		url: "https://ga-cat-rescue.herokuapp.com/api/cats", 
		dataType: 'json', 
		method: "POST",
		data: JSON.stringify(newCat),
		success: function() {
			
			$(document).load(this.href);
			$("ul").append("<li>" + newCat + "</li>");

			alert('form was submitted');

			$(document).load(this.href);
		}
		
	});
	



	 
});