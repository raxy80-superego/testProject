$(function() {

	var form = $('form');
	form.on('submit', function(e) {
		e.preventDefault();
		var name = $('input[type="text"]').val();
		var age = $('input[type="number"]').val();
		var holder = $('<div>', {
			class: 'holder'
		});
		holder.insertAfter(form);
		holder.html('Your name is ' + name + ' and you are ' + age + ' years old.' );
	});

});