/* Multi-step form parameter passing */

window.onload = function() {
	var querystring = window.location.href.split('?')[1];
	var parameters = querystring.split('&');

	for(i = 0; i < parameters.length; i++) {
		var pair = parameters[i].split('=');
		var hiddenfield = document.createElement("input");
		hiddenfield.type = "hidden";
		hiddenfield.name = pair[0];
		hiddenfield.value = pair[1];
		document.forms[0].appendChild(hiddenfield);
	}
};