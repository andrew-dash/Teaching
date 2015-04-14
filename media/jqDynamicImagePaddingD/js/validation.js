$(function(){
	$('.submit-btn').click(function(event){
	
		//Prevent default button action
		event.preventDefault();

		var inputs = $('input');
		var isError = false;

		//Remove old errors
		$('.input-frame').removeClass('error');
		$('.error-data').remove();
		
		for (var i = 0; i < inputs.length; i++) {
			var input = inputs[i];
			if ($(input).hasClass('required') && validateRequired($(input).val())) {
				addErrorData($(input), "This is a required field");
				isError = true;
			}
		}

		if (isError === false) {
			// No errors? submit the form!
			$('#webForm').submit();
		}
	});
});

function validateRequired(value) {
	if (value == "") return true;
	return false;
}

function addErrorData(element, error) {
	element.parent().addClass("error");
	element.after("<div class='error-data'>" + error + "</div>");
}