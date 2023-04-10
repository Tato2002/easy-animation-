
$("form").fadeOut(0);

$(".searchIcon").click(function(){
	$("form").animate({
		"opacity": "1",
		"z-index": "1"
	},1000, function(){
		$("form").fadeIn(1000);
		$("form").animate({
			"border-radius":"0",
			"width":"100%",
			"height": "100%"
		},3000)
	})
});