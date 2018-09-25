var  j=0;
var k = 0;
$("#banner").mouseenter(function(){
	$("#banner .transition dl").eq(0).css({opacity:"1"})
})
$("#banner").mouseleave(function(){
	$("#banner .transition dl").eq(0).css({opacity:"0"})
})
$("#banner ul li").each(function(i){
	$(this).click(function(){
		clearInterval(set);
		set =  setInterval(clickR,3000);
		j = i;
		go();
		
	})
})
$('.transition dd').click(clickR);

$('.transition dt').click(function(){
	j--;
	if (j < 0) {
		j = $("#banner a").length - 1;
	}
	go();
})
function go(){
		clearInterval(set);
		set =  setInterval(clickR,3000);
		$("#banner a").css({zIndex:'0'})
		$("#banner ul li").removeClass("active");
		$("#banner ul li").eq(j).addClass("active");
		$("#banner a").eq(j).css({zIndex:'2',display:'none'}).fadeIn(1000);
		$("#banner a").eq(k).css({zIndex:'1'})
		k = j;
}
function clickR(){
	j++;
	if (j == $("#banner a").length) {
		j=0;
	}
	go();
}
var set =  setInterval(clickR,3000);
$("#banner a").mouseenter(function(){
	clearInterval(set);
})
$('#banner a').mouseleave(function(){
	clearInterval(set);
	set =  setInterval(clickR,3000);
})
