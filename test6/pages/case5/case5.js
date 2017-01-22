Page({
	data:{
		seladdr:'北京',
		selcour:'HTML5',
		selnum:'1601',
		value:[0,0,0],
		address:["北京","深圳","大连","武汉"],
		course:['HTML5','Android','VR','JAVA'],
		num:[1601,1602,1603,1604,1605]
	},
	change:function(e){
		var val=e.datail.value;
		this.setData({
			seladdr:this.data.address[val[0]],
			selcour:this.data.course[val[1]],
			selnum:this.data.num[val[2]]
		});
	},
	onLoad:function(options){
		
	},
	onReady:function(){
		
	},
	onShow:function(){
		
	},
	onHide:function(){
		
	},
	onUnload:function(){
		
	},
	onPullDownRefresh:function(){
		
	},
	onReachBottom:function(){
		
	}
})		