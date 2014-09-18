$(document).ready(function(){

	$(document).on('click', '.editable', function(e){
		var editbox = $('<textarea class="textarea" style="width: 100%"></textarea>');
		var original = $(this).text();

		$(this).replaceWith(editbox);
		editbox.val(original);
		$('textarea').focus();
		// e.stopPropagation();

		$(document).on('blur', '.textarea', function(){
			var newtext = $(this).val();
			var newparagraph = $('<p class="editable"></p>');
			
			newparagraph.text(newtext);
			$(this).replaceWith(newparagraph);
	

		});
	});

});