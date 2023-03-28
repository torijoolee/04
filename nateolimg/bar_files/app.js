$(document).foundation();


$('.storeapr').mouseover(function(){
	$('.aprimg').attr('src','../assets/img/ico-store-ap-b.png');
	$('.storexp').attr('src','../assets/img/ico-close-b.png');
});
$('.storeapr').mouseleave(function(){
	$('.aprimg').attr('src','../assets/img/ico-store-ap.png');
	$('.storexp').attr('src','../assets/img/ico-close.png');
});

$('.storeacc').mouseover(function() {
	$('.accimg').attr('src','../assets/img/ico-store-acc-b.png');
	// $('.storexc').attr('src','../assets/img/ico-close-b.png');
});
$('.storeacc').mouseleave(function() {
	$('.accimg').attr('src','../assets/img/ico-store-acc.png');
	// $('.storexc').attr('src','../assets/img/ico-close.png');
});
$('.storecam').mouseover(function() {
	$('.actcamimg').attr('src','../assets/img/ico-ng-actioncam-b.png');
	// $('.storexc').attr('src','../assets/img/ico-close-b.png');
});
$('.storecam').mouseleave(function() {
	$('.actcamimg').attr('src','../assets/img/ico-ng-actioncam.png');
	// $('.storexc').attr('src','../assets/img/ico-close.png');
});
$('.storebra').mouseover(function() {
	$('.brandimg').attr('src','../assets/img/ico-store-brand.png');
	$('.storexc').attr('src','../assets/img/ico-close-b.png');
});
$('.storebra').mouseleave(function() {
	$('.brandimg').attr('src','../assets/img/ico-store-brand-b.png');
	$('.storexc').attr('src','../assets/img/ico-close.png');
});


//매거진
$('.magazine').mouseover(function(){
	$('.magimg').attr('src','../assets/img/ico-mag-b.png');
	$('.storexp').attr('src','../assets/img/ico-close-b.png');
});
$('.magazine').mouseleave(function(){
	$('.magimg').attr('src','../assets/img/ico-mag.png');
	$('.storexp').attr('src','../assets/img/ico-close.png');
});

$('.traveler').mouseover(function() {
	$('.trvimg').attr('src','../assets/img/ico-trv-b.png');
	$('.storexc').attr('src','../assets/img/ico-close-b.png');
});
$('.traveler').mouseleave(function() {
	$('.trvimg').attr('src','../assets/img/ico-trv.png');
	$('.storexc').attr('src','../assets/img/ico-close.png');
});


//$('.st-container').show();

$('.loadPulgin').fadeOut();
$('.loadPulgin').remove();




(function() {
  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger-mobile");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }



	$('#acilia-form-news-email').on('click', function(){

		$('.show_hide').show();
	});




})();
/*매거진 레이어 팝업*/
function mag_layer(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	if(bg){
		$('.maglayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
	}else{
		temp.fadeIn();
	}
	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(window).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(window).width() ) temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');
	else temp.css('left', '0px');


	$('body').bind('touchmove', function(e) {e.preventDefault();});

	temp.find('a.cbtn').click(function(e){
		if(bg){
		$('.maglayer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
		temp.fadeOut();
		}
		e.preventDefault();
		$('body').unbind('touchmove');
	});

	$('.maglayer .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.maglayer').fadeOut();
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}
/*스토어 레이어 팝업*/
function store_layer(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	if(bg){
		$('.stlayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
	}else{
		temp.fadeIn();
	}
	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(window).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(window).width() ) temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');
	else temp.css('left', '0px');


	$('body').bind('touchmove', function(e) {e.preventDefault();});

	temp.find('a.cbtn').click(function(e){
		if(bg){
		$('.stlayer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
		temp.fadeOut();
		}
		e.preventDefault();
		$('body').unbind('touchmove');
	});

	$('.stlayer .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.stlayer').fadeOut();
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}

function store_layer_2(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	if(bg){
		$('.stlayer_2').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
	}else{
		temp.fadeIn();
	}
	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(window).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(window).width() ) temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');
	else temp.css('left', '0px');


	$('body').bind('touchmove', function(e) {e.preventDefault();});

	temp.find('a.cbtn').click(function(e){
		if(bg){
		$('.stlayer_2').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
		temp.fadeOut();
		}
		e.preventDefault();
		$('body').unbind('touchmove');
	});

	$('.stlayer_2 .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.stlayer_2').fadeOut();
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}
/*비디오 레이어 팝업*/
function video_layer(el,url){

	var temp = $('#' + el);
	var link = 'https://www.youtube.com/embed/'+url+'?fs=1&autoplay=1&rel=0';
//	var link = 'http://www.youtube.com/v/'+url+'&fs=1&autoplay=1&rel=0';

	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	if(bg){

		$('.videolayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
		$('#vdplayer').attr('src',link);
	}else{
		temp.fadeIn();
		$('#vdplayer').attr('src',link);
	}
	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(window).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(window).width() ) temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');
	else temp.css('left', '0px');

	$('body').bind('touchmove', function(e) {e.preventDefault();});
	temp.find('a.cbtn').click(function(e){
		if(bg){
		$('.videolayer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		$('#vdplayer').attr('src','');
		}else{
		temp.fadeOut();
		$('#vdplayer').attr('src','');
		}
		e.preventDefault();
		$('body').unbind('touchmove');
	});

	$('.videolayer .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.videolayer').fadeOut();
		$('#vdplayer').attr('src','');
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}
/*파트너 레이어 팝업*/
function partner_layer(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	if(bg){
		$('.ptlayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
	}else{
		temp.fadeIn();
	}
	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(document).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');
	if (temp.outerWidth() < $(document).width() ) temp.css('margin-left', '-'+temp.outerWidth()/2+'px');
	else temp.css('left', '0px');

	temp.find('a.cbtn').click(function(e){
		if(bg){
		$('.ptlayer').fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		}else{
		temp.fadeOut();
		}
		e.preventDefault();
	});

	$('.ptlayer .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게 하는 이벤트 핸들러
		$('.ptlayer').fadeOut();
		e.preventDefault();
	});
}

/*파트너 체크 레이어 팝업*/
function ptcheck_layer(el){
	var temp = $('#' + el);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	var w = $(window).width();

	if(w <= 1024){
		if(bg){	$('.ptchecklayer').fadeIn();}   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
		else{temp.fadeIn();}

		// 화면의 중앙에 레이어
		if(temp.outerHeight() < $(window).height()){temp.css('margin-top', '-'+temp.outerHeight()/2+'px');}else{temp.css('top', '0px');}
		if (temp.outerWidth() < $(window).width()){temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');}else{temp.css('left', '0px');}
	}else{
		window.location.href="/partners.php";
		return;
	}

	$('body').bind('touchmove', function(e) {e.preventDefault();});

	temp.find('a.cbtn').click(function(e){
		if(bg){$('.ptchecklayer').fadeOut();} //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
		else{temp.fadeOut();}
		e.preventDefault();
		$('body').unbind('touchmove');
	});

	$('.ptchecklayer .bg').click(function(e){  //배경을 클릭하면 레이어를 사라지게
		$('.ptchecklayer').fadeOut();
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}

/*채널 포토 슬라이드 레이어 팝업*/
function phosli_layer(el,number){
	var temp = $('#' + el);
	var num = number;
	var img = "#img"+num;
//	console.log(img);
	var bg = temp.prev().hasClass('bg');    //dimmed 레이어를 감지하기 위한 boolean 변수
	var fullw = $(window).width();
	var fullh = $(window).height();
	if(fullw>1024){
		var h = $(window).height()*0.8;
		if(bg){
			$('#phoslidepop').css('height','');
			$('#phoslidepop').css('width','100%');

			$('#pholslideh').css('height',h+'px');
			$('#pholslideh').css('width','100%');

			$('.phoslilayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.

			var phoh = $('#phoslidepop').height();
			$('.orbit-image').css('height',poph+'px');
			$('.orbit-image').css('width','auto');

			var textw = $('.orbit-image').width();
			$('.imgtext').css('width',textw+'px');
			$('.imgtext').css('margin','0 auto');

			$('.is-active').css('display','none');
			$('.is-active').removeClass('is-active');
			$('.is-in').removeClass('is-in');

			$(img).addClass('is-active');
			$(img).addClass('is-in');
			$(img).css('position','absolute');
			$(img).css('top','0px');
			$(img).css('display','block');


		}else{
			$('#pholslideh').css('height',h+'px');

			temp.fadeIn();

			var poph = $('#phoslidepop').height();
			$('.orbit-image').css('height',poph+'px');
			$('.orbit-image').css('width','auto');

			$('.is-active').css('display','none');
			$('.is-active').removeClass('is-active');
			$('.is-in').removeClass('is-in');

			$(img).addClass('is-active');
			$(img).addClass('is-in');
			$(img).css('position','absolute');
			$(img).css('top','0px');
			$(img).css('display','block');
		}
	}else{//모바일일때
		if(fullh<fullw){//눕혔을때
			var h = $(window).height();
			$('.btn-p').addClass('fixed');
		}else{//세웠을때
			var h = $(window).height()*0.7;
		}
//		var h = $(window).height()*0.7;
		if(bg){

			$('#phoslidepop').css('height',h+'px');
			$('#phoslidepop').css('width',fullw+'px');

			$('#pholslideh').css('height',h+'px');
			$('#pholslideh').css('width',fullw+'px');

			$('.phoslilayer').fadeIn();   //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.

			$('.orbit-slide').css('height',h+'px');
			$('.orbit-slide').css('line-height',h+'px');

			if(fullh < fullw){//눕혔을때
				$('#phoslidepop').css('margin-top','0px');
			}else{//세웠을때
//				console.log(fullw);
//				console.log(fullh);
				var poph =$('#phoslidepop').height();
				var mgt = (fullh - poph)/2;
//				console.log(mgt);
				$('#phoslidepop').css('margin-top',mgt+'px');
			}

			$('.is-active').css('display','none');
			$('.is-active').removeClass('is-active');
			$('.is-in').removeClass('is-in');

			$(img).addClass('is-active');
			$(img).addClass('is-in');
			$(img).css('position','absolute');
			$(img).css('top','0px');
			$(img).css('display','block');

		}else{
			$('#pholslideh').css('height',h+'px');
			$('#pholslideh').css('width',fullw+'px');

			$('.orbit-slide').css('height',h+'px');
			$('.orbit-slide').css('line-height',h+'px');

			temp.fadeIn();

			$('.is-active').css('display','none');
			$('.is-active').removeClass('is-active');
			$('.is-in').removeClass('is-in');

			$(img).addClass('is-active');
			$(img).addClass('is-in');
			$(img).css('position','absolute');
			$(img).css('top','0px');
			$(img).css('display','block');

		}
	}

	$('body').bind('touchmove', function(e) {e.preventDefault();});

	// 화면의 중앙에 레이어를 띄운다.
	if (temp.outerHeight() < $(window).height() ) temp.css('margin-top', '-'+temp.outerHeight()/2+'px');
	else temp.css('top', '0px');

	if(fullw>1024){
		if (temp.outerWidth() < $(window).width() ) temp.css('margin-left', '-' + temp.outerWidth() /2 +'px');
		else temp.css('left', '0px');
	}else{
		temp.css('left', '0px');
	}


	temp.find('a.cbtn').click(function(e){
		$('.is-active').css('position','relative');
		$('.is-active').css('display','none');
		$('.is-active').removeClass('is-active');
		$('.is-in').removeClass('is-in');
		$('.btn-p').removeClass('fixed');
		$('#phoslidepop').css('margin-top','0px');

		$('#phoslidepop').css('height','0px');
		$('#phoslidepop').css('width','0px');
		$('#pholslideh').css('height','0px');
		$('#pholslideh').css('width','0px');

		if(bg){$('.phoslilayer').fadeOut();}
		else{temp.fadeOut();}
		e.preventDefault();
		$('body').unbind('touchmove');
	});
	$('.phoslilayer .bg').click(function(e){
		$('.is-active').css('position','relative');
		$('.is-active').css('display','none');
		$('.is-active').removeClass('is-active');
		$('.is-in').removeClass('is-in');
		$('.btn-p').removeClass('fixed');
		$('#phoslidepop').css('margin-top','0px');

		$('#phoslidepop').css('height','0px');
		$('#phoslidepop').css('width','0px');
		$('#pholslideh').css('height','0px');
		$('#pholslideh').css('width','0px');

		$('.phoslilayer').fadeOut();
		e.preventDefault();
		$('body').unbind('touchmove');
	});
}
