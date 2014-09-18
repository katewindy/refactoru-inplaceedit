$(document).ready(function(){

	$(document).on('click', '.textblock', function(e){
		var editbox = $('<textarea class="textarea" style="width: 100%"></textarea>');
		var original = $(this).text();

		$(this).replaceWith(editbox);
		editbox.val(original);
		$('textarea').focus();
		// e.stopPropagation();

		$(document).on('blur', '.textarea', function(){
			var newtext = $(this).val();
			var newparagraph = $('<p class="textblock"></p>');
			
			newparagraph.text(newtext);
			$(this).replaceWith(newparagraph);
	

		});
	});

});