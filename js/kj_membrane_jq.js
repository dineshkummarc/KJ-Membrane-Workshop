$(document).ready(function(){
	$("#formFieldEl2").val("");
	$(".fieldRequiredStar").html("");
	$("#formField3 .optionRow:eq(1)").append("<span class='fieldHelp'>" + $("#formField3Subtitle").text() + "</span>");
	$("#formField3Subtitle").remove();
});