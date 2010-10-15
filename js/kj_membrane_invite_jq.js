var init;
var loadInterval;
$(document).ready(function(){
	
	init = function() {
		if(  $("#formFieldEl4").val() != "" ) {
			$("#formFieldEl4").val("");
			clearInterval( loadInterval );
		}
	}
	
	init();
	
	loadInterval = setInterval( "init()", 500);

});
