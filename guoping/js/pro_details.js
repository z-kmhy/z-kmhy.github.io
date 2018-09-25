let vm = new Vue({
	created:function(){
		window.location.hash = ""
	},
	el:"#pro_details",
	data:{
		onoff:true,
		selected:"details",
	},
	templates:"#details",
	watch:{
		selected:{
			handler(){
				if(this.selected == "details"){
					this.onoff = true;
				}else if(this.selected == "valute"){
					this.onoff = false;
				}
			}
		}
	}
})

window.onhashchange = function(){
	var hash = window.location.hash.substring(1);
	vm.selected = hash;
}

let vm1 = new Vue({
	mounted(){
		this.$refs.lis.map((item)=>{
			item.className = '';
		})
		this.$refs.lis[0].className = "active";
	},
	el:"#details",
	data:{
		active:true,
		onoff:false,
		num:0,
		titleImg:"img/details-1.png",
		img:["img/details-1.png","img/details-2.png","img/details-3.png"]
	},
	methods:{
		check(){
			this.active=true;
		},
		check1(){
			this.active=false;
		},
		subNum(){
			if(this.num>=1){
				this.num--;
			} 
			if(this.num<1){
				this.onoff = false;
			}
			
		},
		addNum(){
			this.num++;
			if(this.num>0){
				this.onoff = true;
			}
		},
		cut(ev){
			
		this.$refs.lis.map((item)=>{
			item.className = '';
		})
		ev.currentTarget.className = "active";
		this.titleImg = ev.path[0].src
//			ev.currentTarget
		}
	}
})