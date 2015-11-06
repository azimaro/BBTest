$(function () {

	// Global variables

	// 	An array containing objects with information about the categories
	var categories = [];


	// the following are called on page load

	// Get data about categories from Best Buy API (returns json)
	$.getJSON( "http://www.bestbuy.ca/api/v2/json/category/Departments", function( data ) {
		// Write the data into our global variable.
		categories = data;

		// Call a function to create HTML for all the products.
		generateAllCategoriesHTML(categories);


	});





	// This function, called on page load, fills up the categories list via a handlebars template.
	// It recieves one parameter - the data we took from BB categories api.
	function generateAllCategoriesHTML(data){

		//the list we want is the categories-list ul inside the categories div
		//var list = $('.categories .categories-list');
/*
		//grab template script
		var theTemplateScript = $("#categories-template").html();
		//Compile the template​
		var theTemplate = Handlebars.compile (theTemplateScript);
		var theCompiledHtml = theTemplate(data);
		//list.append (theTemplate(data));
		$(document.body).categories(theCompiledHtml); */
		
		$.each( data.subCategories, function( i,cat ) {
			//list.append( cat.name );
			$("#catlist").append('<li>'+cat.name+'</li>');
		});
		

	}

	
	
});


