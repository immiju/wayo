$(document).ready(function(){
	
	/* sub menu open */
	$("nav").on("mouseover",function(){
		$(".sub-bg").stop().slideDown(300);
		$(".sub-menu").stop().slideDown(300);
	});

	$("nav").on("mouseout",function(){
		$(".sub-bg").stop().slideUp(300);
		$(".sub-menu").stop().slideUp(300);
	});
	


	/* main visual slide */
	var $slides = $(".slide");
	var current = 0;
	$slides.css("display","none");
	$slides.eq(0).css("display","block");

	function fnFade(idx){
		$slides.fadeOut(1000);
		$slides.eq(idx).fadeIn(1000);
		current = idx;
	}

	function setSlide(){
		if(current == 1){
			fnFade(0);
		}else{
			fnFade(current+1);
		}
	}
	
	setInterval(setSlide, 3000);

	

	/* sect 01 tab */
	$(".cont").hide();
	$(".cont").first().show();
	$(".tabs li").first().addClass("select");

	$(".tabs li").on("click",function(){
		var idx = $(this).index();
		$(".cont").hide();
		$(".cont").eq(idx).show();
		$(".tabs li").removeClass("select");
		$(this).addClass("select");
	});
	
	$(".tabs li").on("mouseover",function(){
		$(".tabs li").removeClass("mouseover");
		$(this).addClass("mouseover");
	});
	$(".tabs li").on("mouseout",function(){
		$(".tabs li").removeClass("mouseover");
	});
	

	/* sect 02 slide */
	$(".next").on("click",function(){
		$(".sect-02-slide ul").stop().animate({
			left:"-280px"
		},{
			complete:function(){
			var $clone = $(".review").first().clone();
			$(".sect-02-slide ul").stop().append($clone);
			$(".review").stop().first().remove();
			$(".sect-02-slide ul").stop().css({"left":"0"});
		},
		duration:1000
		});
	});
	
	$(".prev").on("click",function(){
		$(".sect-02-slide ul").stop().css({"left":"-280px"});
		$(".sect-02-slide ul").stop().animate({
			left:"0px"
		},{
			start:function(){
				var $clone = $(".review").stop().last().clone();
				$(".sect-02-slide ul").stop().prepend($clone);
				$(".review").stop().last().remove();
			},
			duration:1000
		});
	});



	/* banner1 svg */
	/*var obj = document.getElementById("dog01");
	var x = obj.getTotalLength();
	alert(x);*/

	$(window).on("scroll",function(){
		var pos = $("html").scrollTop();
		
		$("#scroll").text(pos);
		if(pos >= 1250){
			$("path").addClass("on");
			$("circle").addClass("on");
		}else{
			$("path").removeClass("on");
			$("circle").removeClass("on");
		}
	});
	


	/* banner2 transition */
	$(window).on("scroll",function(){
		var pos = $("html").scrollTop();
		
		if(pos >= 1722){
			$(".banner2-txt").addClass("on");
			$(".banner2-img").addClass("on");
		}else{
			$(".banner2-txt").removeClass("on");
			$(".banner2-img").removeClass("on");
		}
	});
	


	/* aside #app-downroad */
	var startPos = $("#app-downroad").offset().top;

	$(window).on("scroll",function(){
		var scrollPos = $("html").scrollTop();
		var newPos = startPos + scrollPos;

		$("#app-downroad").stop().animate({
			top : newPos
		},400,"swing");
	});
	

	/* pop-up layer */
	/* 브라우저가 서버에 페이지를 요청하면 서버는 헤더에 Set-Cookie:name=value
	라는 정보를 보낸다. 이후 브라우저는 서버에 요청을 보낼 때 마다 Cookie:name=value를
	전송한다. 이 정보를 이용해서 서버는 클라이언트의 접속에 대한 파악을 한다.*/
	//닫기 버튼 실행 함수
	function closePopup(){
		if($("input[name='chkbox']").is(":checked")==true){ //더보지않기에 체크했다면
			setCookie("close","Y",1); //쿠키이름, 값, 유효기간을 쿠키 데이터에 저장한다.
		}
		$(".modal").hide();
	}
	
	//더보지않기에 체크 > 쿠키에 정보를 저장
	function setCookie(name, value, exdays){ //쿠키이름, 쿠키값, 종료일을 매개 변수로 사용한다.
		var today = new Date();
		today.setTime(today.getTime() + (exdays * 24 * 60 * 60 * 1000)); //toda 변수에 안보여줄 시간(현재시간 + ms로 계산된 하루 시간)을 저장
		var expires = "expires=" + today.toUTCString(); //expires 변수에 안보여줄 시간을 날자로 변환해서 저장
		document.cookie = name + "=" + value + ";" + expires; //쿠키에 쿠키 이름+쿠키값+유효기간을 저장
	}
	var cookiedata = document.cookie; //쿠키값 저장
	
	//더보지않기에 체크 > 팝업을 감춤
	if(cookiedata.indexOf("close=Y")<0){
		$(".modal").show();
	}else{
		$(".modal").hide();
	}

	$("#close").on("click",function(){
		closePopup();
	});	


	/* time info */
	function timeDesign(){	
		var today = new Date();
		var H = today.getHours();
		
		if(H>=9 && H<18){
			$(".cs-info p").eq(0).text("오전 9시 - 오후 6시");
			$(".cs-info p").eq(1).text("Tel. 012 3456 7890");
		}
	}
	timeDesign();
	setInterval(timeDesign, 1000);

});