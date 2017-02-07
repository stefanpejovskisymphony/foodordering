$(function () {
	var Mustache = require('Mustache');

	$.getJSON('js.data.json', function(data){
		var template = $('#userstpl').html();
		var html = Mustache.to_html(template, data);
		$("#users").html(html);
	})
})