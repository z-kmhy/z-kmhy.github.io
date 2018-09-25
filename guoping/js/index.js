var banner = document.getElementById('banner');
var imgs = banner.getElementsByTagName('a');
var lis = banner.getElementsByTagName('li');
var num = 0;
var num1 =0;
var time = null;
var region = document.getElementById('region');
var popup = region.getElementsByClassName('popup')[0];

popup.onmouseenter = function(){
	popup.style.background = "#fff";
	popup.style.color = "#000000"
}


var mySwiper1 = new Swiper('#swiper-container1', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})
var mySwiper2 = new Swiper('#swiper-container2', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})
var mySwiper3 = new Swiper('#swiper-container3', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})
var mySwiper4 = new Swiper('#swiper-container4', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})
var mySwiper5 = new Swiper('#swiper-container5', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})
var mySwiper6 = new Swiper('#swiper-container6', {
	autoplay:true,	//自动轮播
  	loop : true,	//无缝轮播
	pagination: {
	    el: '.swiper-pagination',
	    clickable :true,
	},
})


timer(imgs,lis,num);
banners(imgs,lis,num);

function banners(obj,lis,number,way){
	if(way){
		
		for (var i= 0;i<lis.length;i++) {
			let index = 0;
			lis[i].index = i;
			lis[i].onclick = function(){
				ban(obj,lis,this.index,way);
				number=this.index ;
				clearInterval(time);
				timer(obj,lis,number,way);
			}
		}
	}else{
		for (var  i= 0;i<lis.length;i++) {
			let index = 0;
			lis[i].index = i;
			lis[i].onclick = function(){
				ban(obj,lis,this.index);
			 	number=this.index ;
			 	clearInterval(time);
			 	timer(obj,lis,number);
			}
		}
	}
	
}
function timer(obj,lis,num,way){
	if(way){
		time = setInterval(function(){
			num++;
			if(num>lis.length-1){
				num=0;
			}
			ban(obj,lis,num,way);
		},7000)
	}else{
		time = setInterval(function(){
			num++;
			if(num>2){
				num=0;
			}
			ban(obj,lis,num);
		},4000)
	}
		
}
function ban(obj,lis,num,way){
	if(way){
		for(var j=0;j<lis.length;j++){
			lis[j].className = '';
		}
		way.style.left=(-num)*250+"px"
		lis[num].className = 'active';
	}else{
		for(var j=0;j<lis.length;j++){
			lis[j].className ='';
			obj[j].style.opacity = 0;
		}
	
		obj[num].style.opacity =1;
		lis[num].className = 'active';
	}
	
}


function tab(){
	let sale = document.getElementById("sale");
	let pages = sale.getElementsByClassName("page")[0];
	let page = pages.getElementsByTagName("li");
	let saleDetails = sale.getElementsByClassName("sale-details")[0];
	let ul = saleDetails.getElementsByTagName("ul")[0]
	let liss = saleDetails.getElementsByTagName("li");

	for(var i = 0;i<liss.length;i++){
		liss[i].style.left = i*250 +"px";
		
	}
	banners(liss,page,num1,ul)
	timer(liss,page,num1,ul)
}
tab();











function times(year,mos,day,hours,min,sec){
	var sales = document.getElementById('sale');
	var down = document.getElementsByClassName('down');
	var toDate = new Date(year,mos,day,hours,min,sec);
	var nowDate = new Date();
	
	//换成时间戳
	var toTime = toDate.getTime();
	var nowTime = nowDate.getTime();
	

	
	var dis = parseInt((toTime - nowTime)/1000);//计算两个时间点的差值换算成秒并取整

	var d = parseInt(dis/(60*60*24));
	
	dis = dis-d*60*60*24
	var h = parseInt(dis/(60*60));//取小时
	var m = parseInt((dis - h*60*60)/60);//取分钟
	var s = dis - h*60*60 - m*60;//取秒
//	u.innerHTML ='<span>'+d+'</span>天<span>'+h+'</span>小时<span>'+m+'</span>分<span>'+s+'</span>秒';

	return {d,h,m,s};
}

var dates = setInterval(kelleg,1000);

function kelleg(){
	var sales = document.getElementById('sale');
	var u = sales.getElementsByClassName('u');
	
	for (var i=0;i<u.length;i++) {
		var arr = times(2018,8,(15+i),00,00,00);
		u[i].innerHTML = '<span>'+arr.d+'</span>天<span>'+arr.h+'</span>小时<span>'+arr.m+'</span>分<span>'+arr.s+'</span>秒'
	}
}





var vm = new Vue({
	el:"#switch",
	data:{
		onoff:true
	},
	methods:{
		cut(){
			this.onoff = true;
		},
		cut1(){
			this.onoff = false;
		}
	}
})

