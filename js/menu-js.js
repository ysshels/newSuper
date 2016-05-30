// JavaScript Document
$(function(){
	 $(".mainlevel:has(div)").hover(function(){
	  $(this).children("div").stop(true,true).slideDown(300)
	  },function(){
	  $(this).children("div").stop(true,true).slideUp(1)
	  })
});
//ËØ²Ä¼ÒÔ° - www.sucaijiayuan.com