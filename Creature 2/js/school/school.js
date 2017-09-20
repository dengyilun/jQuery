//新手礼包JS
$('.ck-slide').ckSlide({
		autoPlay: true
});

//校园大事件JS
$('#pic1>li').eq(0).css('display','block');
$('.tab>li').eq(0).addClass('ta1');
$('.tab>li').click(function(){
	var index=$(this).index();
	for(var i=0;i<5;i++){
		$('.tab>li').eq(i).addClass('tab'+(i+1)+'');
		$('.tab>li').eq(i).removeClass('ta'+(i+1)+'');
	}
	$('#pic1>li').eq(index).fadeIn().siblings().fadeOut();
	$('.tab>li').eq(index).addClass('ta'+(index+1)+'');
});


//手指动画
var muse = setInterval(tou,800);
function tou(){
	$('.finger').animate({'opacity':1,'bottom':'-10px'},800,function(){
		$('.finger').css({'opacity':0,'bottom':'-30px'});
	});
	$('.mouse2').animate({'opacity':1,'top':'430px'},800,function(){
		$('.mouse2').css({'opacity':0,'top':'460px'});
	});
	
};

//搞事不嫌多
var index=0;
$('.btn_r').click(function(){
	index++;
	if(index>5){
		index=0;
	}
	$('#pic2').animate({'left':-(index*283)},500);
//	283指图片的大小
})
$('.btn_l').click(function(){
	index--;
	if(index<0){
		index = 5;
	}
	$('#pic2').animate({'left':-(index*283)},500);

})

//自动轮播
var time = setInterval(plays,3000);
$('.temp_con').mouseenter(function(){
	clearInterval(time);
})
$('.temp_con').mouseleave(function(){
	clearInterval(time);
	time = setInterval(plays,3000);
})
$('.btn_l').mouseenter(function(){
	clearInterval(time);
})
$('.btn_l').mouseleave(function(){
	clearInterval(time);
	time = setInterval(plays,3000);
})
$('.btn_r').mouseenter(function(){
	clearInterval(time);
})
$('.btn_r').mouseleave(function(){
	clearInterval(time);
	time = setInterval(plays,3000);
})
function plays(){
	if(index>5){
		index=0;
	}
	$('#pic2').animate({'left':-(index*283)},500);
	index++;
}




//校园兴起
var pics = 0;
$('#pic3>li').eq(0).css('display','block');
var time2 = setInterval(playe,3000);
$('#pic3').mouseenter(function(){
	clearInterval(time2);
})
$('#pic3').mouseleave(function(){
	clearInterval(time2);
	time2 = setInterval(playe,3000);
})
$('.h_btn1').mouseenter(function(){
	clearInterval(time2);
})
$('.h_btn1').mouseleave(function(){
	clearInterval(time2);
	time2 = setInterval(playe,3000);
})
$('.h_btn2').mouseenter(function(){
	clearInterval(time2);
})
$('.h_btn2').mouseleave(function(){
	clearInterval(time2);
	time2 = setInterval(playe,3000);
})

//自动轮播函数
function playe(){
	if(pics>4){
		pics=0;
	}
	$('#pic3>li').eq(pics).fadeIn().siblings().fadeOut();
	pics++;
}



$('.h_btn1').click(function(){
	pics--;
	if(pics<0){
		pics=4;
	}
	$('#pic3>li').eq(pics).fadeIn().siblings().fadeOut();
	
});
$('.h_btn2').click(function(){
	pics++;
	if(pics>4){
		pics=0;
	}
	$('#pic3>li').eq(pics).fadeIn().siblings().fadeOut();
	
	
});
