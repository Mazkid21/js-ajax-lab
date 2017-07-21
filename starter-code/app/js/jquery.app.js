$('document').ready(function(){
	execute();
});

function execute() {

$("body").append("<ul></ul>");

$.ajax ( {
	url: "https://ga-cat-rescue.herokuapp.com/api/cats", 
	dataType: 'json',
	method: 'GET',
	success: function(data) {
	   data.forEach( function(element) {
	   	 $("ul").append("<li>" + element.name + " - " + element.note + "</li>");
	   });
	}
});





$("form").submit(function(event) {
	event.preventDefault();
	
	var newCat =  { 
			name: $('#cat-name').val(),
			note: $('#cat-note').val(),

	};


	console.log(newCat);
	
	$.ajax ( {
		url: "https://ga-cat-rescue.herokuapp.com/api/cats", 
		dataType: 'json', 
		method: 'POST',
		data: JSON.stringify(newCat),
		success: function(element) {
			
			
				$("ul").append("<li>" + element.name + "-" + element.note + "</li>");
				alert ("your form has been submitted!!!!!");
			}
		});
			
		
		
	});
	



	 


}