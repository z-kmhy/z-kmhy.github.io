
$(".content-left ul li img").each(function(i){
	$(this).click(function(){
	
		$(".content-left div img").attr("src",$(".content-left ul li img").eq(i).attr("src")) 
		$(".content-left ul li img").removeClass("active")
		$(".content-left ul li img").eq(i).addClass("active")
	})

})
