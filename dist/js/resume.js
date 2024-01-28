var icon_div = document.getElementsByClassName("icon-div");
console.log(icon_div);
var theme_icon = document.getElementsByClassName("theme-icon");
var WEB_icon = document.getElementsByClassName("WEB-icon");
var menu_Btn = document.getElementsByClassName("menu-Btn");
var icon_box = document.getElementsByClassName("icon-box");
var icon = document.getElementsByClassName("icon");
var dial_Btn_Num = document.getElementsByClassName("dial-Btn-Num");
var PC_body_Nva_Arr = document.getElementsByClassName("PC-body-Nva");
var dial = document.getElementById("dial");
var index = document.getElementById("index");
var theme_Num = 0;
var index_bg = [document.getElementById("index-bg-0"),document.getElementById("index-bg-1"),document.getElementById("index-bg-2"),document.getElementById("index-bg-3")];
var index_bg_0_2 = document.getElementById("index-bg-0-2");
var jz_img = document.getElementById("jz-img");
var subject = document.getElementById("subject");
var PC_body = document.getElementById("PC-body");
var PC_bg_anim = document.getElementById("PC-bg-anim");
var WEB = document.getElementById("WEB");
var PC_body_Nva = document.getElementById("PC-body-Nva");
var PC_contact = document.getElementById("PC-contact");
var PC_page = document.getElementById("PC-page");
var iphone_page = document.getElementById("iphone-page");
var iphone_contact = document.getElementById("iphone-contact");
var iphone_body_Nva = document.getElementById("iphone-body-Nva");
var PC_img = document.getElementsByClassName("PC-img");
var iphone_img = document.getElementsByClassName("iphone-img");
var PC_contact_img = document.getElementsByClassName("PC-contact-img");
var iphone_contact_img = document.getElementsByClassName("iphone-contact-img");
var PC_contact_arr = PC_contact.getElementsByClassName("PC-contact-icon");
var iphone_contact_arr = document.getElementsByClassName("iphone-contact-icon");
var iphone_body = document.getElementById("iphone-body");
var PC_swiper_slide_arr = PC_body.getElementsByClassName("swiper-slide");
var liaotian = document.getElementById("liaotian");
var Popup_state = false;
var Page = 0;
var equipment;
var PC_Nva_Num;
var iphone;
var img_equipment;
var Refresh = false;
var Tips = true;
var ship_sj = document.getElementById("ship-sj");
var ship_pc = document.getElementById("ship-pc");
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	console.log("手机");
	ship_pc.style.display = "none";
	equipment = "pc";
	img_equipment = "iphone";
	document.querySelector("#status-bar").style.display = "none";
	index_bg_0_2.style.height = window.screen.width + "px";
	document.getElementsByClassName("jingli")[0].style.width = "100%";
	document.getElementsByClassName("jingli")[1].style.width = "100%";
	document.getElementsByClassName("jingli")[2].style.width = "100%";
	if (window.screen.height < 700) {
		var meun_width = 48;
	}else{
		var meun_width = 60;
	}
	for (var i = 0; i < iphone_contact_arr.length; i++) {
		iphone_contact_arr[i].index = i;
		iphone_contact_arr[i].style.background = "url(images/iphone/contact.png)";
		iphone_contact_arr[i].style.backgroundSize = "140px";
		iphone_contact_arr[i].style.backgroundPosition = -i*35 + "px" + " " + "0";
	}
	var mySwiper_iphone = new Swiper('.swiper-container-iphone',{
		// direction: 'vertical',
		mousewheel: true,
		on:{
			init: function(){
				swiperAnimateCache(this); //隐藏动画元素 
				// this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
			}, 
			slideChangeTransitionStart: function(){
				swiperAnimate(this);
				console.log(this.activeIndex);
				console.log(iphone_page);
				if (this.activeIndex == 2) {
					setTimeout(function(){document.getElementById("k-s").play();}, 200);
				}else{
					document.getElementById("k-s").pause();
				}
				if (this.activeIndex < 10) {
					iphone_page.innerHTML = "0" + this.activeIndex;
				}else{
					iphone_page.innerHTML = this.activeIndex;
				}
				// var iphone_Num = this.activeIndex;
				var iphone_Nva_Color_Arr = ["#d02a2e","#08f70c","#13b5b1","#ea68a2","#6f84f1","#fff100"];
				var iphone_body_Nva_Arr = document.getElementsByClassName("iphone-body-Nva");
				if (this.activeIndex == 0) {
					iphone_body_Nva.style.opacity = 1;
					iphone_contact.style.mixBlendMode = "overlay";
				}else{
					iphone_body_Nva.style.opacity = 0.5;
					iphone_contact.style.mixBlendMode = "overlay";
				}
				if (this.activeIndex == 0) {
					iphone_Nva_Num = 0;
				}else if (this.activeIndex > 0 && this.activeIndex < 2) {
					iphone_Nva_Num = 1;
				}else if (this.activeIndex > 2 && this.activeIndex < 7) {
					iphone_Nva_Num = 2;
				}else if (this.activeIndex > 6 && this.activeIndex < 10) {
					iphone_Nva_Num = 3;
				}else if (this.activeIndex > 9 && this.activeIndex < 15) {
					iphone_Nva_Num = 4;
				}else if (this.activeIndex > 14) {
					iphone_Nva_Num = 5;
				}
				for (var i = 0; i < iphone_body_Nva_Arr.length; i++) {
					iphone_body_Nva_Arr[i].index = i;
					if (i == iphone_Nva_Num) {
						iphone_body_Nva_Arr[i].style.color = iphone_Nva_Color_Arr[iphone_Nva_Num];
					}else {
						iphone_body_Nva_Arr[i].style.color = "#c5e5da";
					}
				}
			},
			slideChangeTransitionEnd: function(){ 
				swiperAnimate(this); //每个slide切换结束时运行当前slide动画
				// this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
				} 
		}
	});
}else{
	console.log("电脑"); 
	ship_sj.style.display = "none";
	equipment = "pc";
	img_equipment = "PC";
	if (window.screen.height < 800) {
		var meun_width = 48;
		subject.style.width = "375px";
		subject.style.height = "600px";
		PC_body.style.width = "1000px";
		PC_body.style.minWidth = "1000px";
		PC_body.style.height = "600px";
		PC_body.style.left = "calc(50% - 500px)";
		PC_body.style.top = "calc(50% - 300px)";
		for (var i = 0; i < PC_swiper_slide_arr.length; i++) {
			PC_swiper_slide_arr[i].style.top = "0";
			PC_swiper_slide_arr[i].style.left = "0";
		} 
	}else{
		var meun_width = 60;
		subject.style.width = "375px";
		subject.style.height = "812px";
	}
	index_bg_0_2.style.height = "375px";
	subject.style.top = "20px";
	subject.style.border = "4px solid #fcfefd";
	subject.style.borderRadius = "10px";
	subject.style.boxShadow = "10px 10px 50px #999999";
	document.getElementsByClassName("jingli")[0].style.height = "100%";
	document.getElementsByClassName("jingli")[1].style.height = "100%";
	document.getElementsByClassName("jingli")[2].style.height = "100%";
	document.getElementsByClassName("swiper-container");
	for (var i = 0; i < PC_contact_arr.length; i++) {
		PC_contact_arr[i].index = i;
		PC_contact_arr[i].style.background = "url(images/PC/contact.png)";
		PC_contact_arr[i].style.backgroundSize = "140px";
		PC_contact_arr[i].style.backgroundPosition = -i*35 + "px" + " " + "0";
	}
	var mySwiper_PC = new Swiper('.swiper-container-pc',{
		direction: 'vertical',
		mousewheel: true,
		on:{
			init: function(){
				swiperAnimateCache(this); //隐藏动画元素 
				// this.emit('slideChangeTransitionEnd');//在初始化时触发一次slideChangeTransitionEnd事件
			}, 
			slideChangeTransitionStart: function(){
				swiperAnimate(this);
				console.log(this.activeIndex);
				if (this.activeIndex == 2) {
					setTimeout(function(){document.getElementById("k-pc").play();}, 200);
				}else{
					document.getElementById("k-pc").pause();
				}
				if (this.activeIndex < 10) {
					PC_page.innerHTML = "0" + this.activeIndex;
				}else{
					PC_page.innerHTML = this.activeIndex;
				}
				var PC_Nva_Color_Arr = ["#d02a2e","#08f70c","#13b5b1","#ea68a2","#6f84f1","#fff100"];
				var PC_body_Nva_Arr = document.getElementsByClassName("PC-body-Nva");
				if (this.activeIndex == 0) {
					PC_body_Nva.style.opacity = 1;
					PC_contact.style.mixBlendMode = "normal";
				}else{
					PC_body_Nva.style.opacity = 0.5;
					PC_contact.style.mixBlendMode = "overlay";
				}
				if (this.activeIndex == 0) {
					PC_Nva_Num = 0;
				}else if (this.activeIndex > 0 && this.activeIndex < 2) {
					PC_Nva_Num = 1;
				}else if (this.activeIndex > 2 && this.activeIndex < 7) {
					PC_Nva_Num = 2;
				}else if (this.activeIndex > 6 && this.activeIndex < 10) {
					PC_Nva_Num = 3;
				}else if (this.activeIndex > 9 && this.activeIndex < 15) {
					PC_Nva_Num = 4;
				}else if (this.activeIndex > 14) {
					PC_Nva_Num = 5;
				}
				for (var i = 0; i < PC_body_Nva_Arr.length; i++) {
					PC_body_Nva_Arr[i].index = i;
					if (i == PC_Nva_Num) {
						PC_body_Nva_Arr[i].style.color = PC_Nva_Color_Arr[PC_Nva_Num];
					}else {
						PC_body_Nva_Arr[i].style.color = "#c5e5da";
					}
				}
			},
			slideChangeTransitionEnd: function(){ 
				swiperAnimate(this); //每个slide切换结束时运行当前slide动画
				// this.slides.eq(this.activeIndex).find('.ani').removeClass('ani');//动画只展示一次
				} 
		}
	});
}


for (var i = 0; i < icon_div.length; i++) {
	icon_div[i].index = i;
	icon_div[i].style.background = "url(images/theme/desktop-icon-" + equipment + ".png)";
	icon_div[i].style.backgroundSize = "1140px 240px";
	icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + theme_Num*78 + "px";
}
for (var i = 0; i < theme_icon.length; i++) {
	theme_icon[i].style.background = "url(images/theme/theme-icon.png)";
	theme_icon[i].style.backgroundSize = "300px 60px";
	theme_icon[i].style.backgroundPosition = -i*60 + "px" + " " + theme_Num*78 + "px";
}
console.log(icon.length);
for (var i = 0; i < icon.length/2; i++) {
	var x = Math.floor(i/16);

	icon[i].index = i;
	icon[i+64].index = i+64;
	icon[i].style.background = "url(images/icon/icon.png)";
	icon[i+64].style.background = "url(images/icon/icon.png)";
	icon[i].style.backgroundSize = "960px";
	icon[i+64].style.backgroundSize = "960px";
	icon[i].style.backgroundPosition = -i*60 + "px" + " " + -x*60 + "px";
	icon[i+64].style.backgroundPosition = -i*60 + "px" + " " + -x*60 + "px";
}


for(var i = 1; i < 51; i++) {
	var loading = document.getElementById("jz-loading-2");
	(function(i) {
		setTimeout(function() {
			loading.style.width = i*5 + "px";
		}, (i + 1) * 10);
	})(i)
}
var dial_Btn = document.getElementsByClassName("dial-Btn");




var shipin_pc_sj = document.getElementById("shipin-pc-sj");
var shipin_pc_bg = document.getElementById("shipin-pc-bg");
var shipin_sj_bg = document.getElementById("shipin-sj-bg");
var Mask = document.getElementById("Mask");
var index = document.getElementById("index");
var theme = document.getElementById("theme");
var menu = document.getElementById("menu");
var theme_X = document.getElementById("theme-X");
var WEB_X = document.getElementById("WEB-X");
var WEB_Popup = document.getElementById("WEB-Popup");
var WEB_download = document.getElementById("WEB-download");
var WEB_tishi = document.getElementById("WEB-tishi");
var WEB_url;
shipin_pc_bg.addEventListener("click",function(e){
	ship_pc.style.pointerEvents = "none"
	ship_pc.style.opacity = "0";
	ship_pc.style.marginTop = "30px";
	ship_pc.style.zIndex = 1;
	document.getElementById("shipin-pc").pause();
	setTimeout(function(){shipin_pc_bg.style.display = "none";}, 500);
});
shipin_sj_bg.addEventListener("click",function(e){
	ship_sj.style.pointerEvents = "none"
	ship_sj.style.opacity = "0";
	ship_sj.style.top = "30%";
	ship_sj.style.zIndex = 1;
	document.getElementById("shipin-sj").pause();
	setTimeout(function(){shipin_sj_bg.style.display = "none";}, 500);
});
index.addEventListener("click",function(e){
	if (e.target.index != undefined) {
		var e = e.target.index -1;
		if (e < 0)  {
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				ship_sj.style.pointerEvents = "auto"
				ship_sj.style.opacity = "1";
				ship_sj.style.zIndex = 100;
				ship_sj.style.top = "calc(50% - " + ship_sj.offsetHeight + "px)";
				ship_pc.style.zIndex = -100;
				setTimeout(function(){document.getElementById("shipin-sj").play();}, 200);
				shipin_sj_bg.style.display = "block";
			}else{
				ship_pc.style.pointerEvents = "auto"
				ship_pc.style.opacity = "1";
				ship_pc.style.zIndex = 100;
				ship_pc.style.marginTop = 0;
				ship_sj.style.zIndex = -100;
				shipin_pc_bg.style.display = "block";
				setTimeout(function(){document.getElementById("shipin-pc").play();}, 200);
			}
		}
		if (e < 7) {
			if (course_state == 1) {
				icon_box[0].style.zIndex = 1;
				icon_box[1].style.zIndex = 1;
				course_1.style.display = "none";
				course_state = 2
				course2();
			}
			mySwiper2.slideTo(e+1, (e+1)*100, false);
			Page = e;
			console.log(e);
		}
		
		switch (e){
			case 7:
			Mask.style.display = "block";
			WEB_Popup.style.display = "flex";
			Popup_state = true;
			WEB_url = "https://xlg-bj.netlify.app/";
			break;
			case 8:
			Mask.style.display = "block";
			WEB_Popup.style.display = "flex";
			Popup_state = true;
			WEB_url = "https://xlg-nn.netlify.app/";
			break;
			case 9:
			Mask.style.display = "block";
			WEB_Popup.style.display = "flex";
			Popup_state = true;
			WEB_url = "https://b-canvas.netlify.app/";
			break;
			case 10:
			Mask.style.display = "block";
			WEB_Popup.style.display = "flex";
			Popup_state = true;
			WEB_url = "https://taluo.netlify.app/";
			break;
			case 11:
			Mask.style.display = "block";
			theme.style.display = "flex";
			Popup_state = true;
			break;
			case 12:
			course1();
			break;
			case 13:
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				var PC_subject = iphone_body;
				var PC_Swiper = mySwiper_iphone;
			}else{
				var PC_subject = PC_body;
				var PC_Swiper = mySwiper_PC;
			}
			Img_load();
			setTimeout(function(){ subject.style.opacity='0.8'; }, 100);
			setTimeout(function(){ subject.style.opacity='0.6'; }, 120);
			setTimeout(function(){ subject.style.opacity='0.4'; }, 140);
			setTimeout(function(){ subject.style.opacity='0.2'; }, 160);
			setTimeout(function(){ subject.style.opacity='0'; }, 180);
			setTimeout(function(){ subject.style.display = "none"; }, 180);
			for (var i = 0; i < 100; i++) {
				(function(i) {
					setTimeout(function() {
						PC_bg_anim.style.width= i + 1 + "%";
						// PC_bg_anim.style.height= i + 1 + "%";
					}, (i + 200) * 2);
				})(i)
			}
			setTimeout(function(){ PC_subject.style.zIndex = "100"; }, 800);
			setTimeout(function(){ PC_subject.style.opacity = "0"; }, 800);
			setTimeout(function(){ PC_subject.style.opacity = "0.2"; }, 850);
			setTimeout(function(){ PC_subject.style.opacity = "0.4"; }, 900);
			setTimeout(function(){ PC_subject.style.opacity = "0.6"; }, 950);
			setTimeout(function(){ PC_subject.style.opacity = "0.8"; }, 1000);
			setTimeout(function(){ PC_subject.style.opacity = "1"; }, 1050);
			setTimeout(function(){
				PC_Swiper.slideTo(1, 0, true);
				PC_Swiper.slideTo(0, 0, true);
			}, 1050);
			break;
			case 14:
			fun_dial();
			break;
			case 15:
			console.log(e);
			liaotian.style.display = "flex";
			if (liaotian_ == 1){
				hf = hf_6;
				hf_changdu = [0]
			}else if (liaotian_ == 0){
				hf = ["你好","欢迎来到我的个人网站","images/liaotian/1.png"];
				hf_changdu = [0,0,1]
			}
			
			setTimeout(function(){
				hf_shuru();
			}, hf_sudu);
			setTimeout(function(){
				LT_windows.style.pointerEvents = "auto"
				swiper_LiaoTian.update();
				var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
				NeiLanH = NeiLan.offsetHeight;
				if (LiaoTianChuangKouH < NeiLanH){
      				if (LiaoTianChuangKouH - NeiLanH < 0){
        				swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH);
      				}
    			}
			}, hf_sudu * 4 * (hf.length+1));
			var status_bar = document.getElementById("status-bar");
			status_bar.style.width = "96%";
			status_bar.style.marginTop = "5px";
			status_bar.style.marginLeft = "0px";
			break;
			case 16:
			Mask.style.display = "block";
			mail.style.display = "flex";
			Popup_state = true;
			mail.style.backgroundPosition = -theme_Num*300 + "px";
			mail_Popup.style.backgroundPosition = -theme_Num*300 + "px";
			break;
			case 17:
			Mask.style.display = "block";
			WEB_download.style.display = "flex";	
			Popup_state = true;
			WEB_url = "https://pan.baidu.com/s/1BYPYTSi8PAL1s7CTE6z_9w ";
			download_JianLi();
			// download_Zip();
			break;
		}

	}
})
function A123(e) {
	console.log(e);
		if (theme_Num != n && n != 4) {
			theme_Num = n;
			document.querySelector("#jz").style.display ="block";
			for (var i = 0; i < icon_div.length; i++) {
				icon_div[i].index = i;
				icon_div[i].style.background = "url(images/theme/desktop-icon-" + equipment + ".png)";
				icon_div[i].style.backgroundSize = "1140px 240px";
				icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
			}
			for (var i = 0; i < theme_icon.length; i++) {
				theme_icon[i].index = i;
				theme_icon[i].style.background = "url(images/theme/theme-icon.png)";
				theme_icon[i].style.backgroundSize = "300px 60px";
				theme_icon[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
			}
			document.getElementById("bar").src = "images/bar-" + theme_Num + ".png";
			var color_Arr = ["#dcdcdc","#7f2d00","#464243","#7f6c61"];
			document.getElementById("time").style.color = color_Arr[theme_Num];
			if (theme_Num == 3) {
				var status_bar = document.getElementById("status-bar");
				status_bar.style.width = "86%";
				status_bar.style.marginTop = "24px";
				status_bar.style.marginLeft = "-4px";
				for (var i = 0; i < icon_box.length; i++) {
					icon_box[i].style.width = "78%";
				}
			}else{
				var status_bar = document.getElementById("status-bar");
				status_bar.style.width = "96%";
				status_bar.style.marginTop = "5px";
				status_bar.style.marginLeft = "0px";
				for (var i = 0; i < icon_box.length; i++) {
					icon_box[i].style.width = "88%";
				}
			}
			theme.style.backgroundPosition = -theme_Num*300 + "px";
			WEB_Popup.style.backgroundPosition = -theme_Num*300 + "px";
			WEB_download.style.backgroundPosition = -theme_Num*300 + "px";
			WEB_tishi.style.backgroundPosition = -theme_Num*300 + "px";
			theme_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
			download_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
			for (var i = 0; i < index_bg.length; i++) {
				if (i == theme_Num) {
					index_bg[i].style.display = "flex";
				}else{
					index_bg[i].style.display = "none";
				}
			}
			theme.style.display = "none";
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
				icon_box[0].style.marginTop = "40px";
			}
			function_load(n);
			for(var i = 1; i < 51; i++) {
				var loading = document.getElementById("jz-loading-2");
				(function(i) {
					setTimeout(function() {
						loading.style.width = i*5.6 + "px";
					}, (i + 1) * 10);
				})(i)
			}
			setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 1000);
			Mask.style.display = "none";
			Popup_state = false;
			e.cancelBubble = true;
			e.stopPropagation();
		}
}
var liaotian = document.getElementById("liaotian");
var LiaoTianChuangKou = document.getElementById("LiaoTianChuangKou");
var liaotian_1 = document.getElementById("liaotian-1");
var LT_windows = document.getElementById("liaotian-3");
var liaotian_1_1 = document.getElementById("liaotian-1-1");
var liaotian_3_1 = document.getElementById("liaotian-3-1");
var liaotian_text = document.getElementById("liaotian-text");
var xuanxiang = document.getElementById("xuanxiang");
var NeiLan = document.getElementById("NeiLan");
var QiPao_text = document.getElementsByClassName("QiPao-text");
var QiPao_img = document.getElementsByClassName("QiPao-img");
var LT_color = ["#dcdcdc","#7f2d00","#464243","#7f6c61"];
var LT_bj = ["#214a61","#ffcb7b","#daf2d2","#f1e8d9"];
var LT_QiPao = ["#265772","#fff0ba","#fbf1ac","#ffc388",];
var LT_QiPao_border = ["#2b6584","#5b2b2a","#464243","#7f6c61"];
var new_theme_Num = 0;
function theme_fun(n) {
	new_theme_Num = n;
	if (new_theme_Num == theme_Num) {
		console.log("正在使用该主题");
	}else {
		console.log("切换为主题" + new_theme_Num);
		theme_Num = new_theme_Num;
		LiaoTianChuangKou.style.background = LT_bj[theme_Num];
		liaotian.style.background = LT_bj[theme_Num];
		liaotian_1.style.background = LT_bj[theme_Num];
		LT_windows.style.background = LT_bj[theme_Num];
		liaotian_1.style.color = LT_color[theme_Num];
		liaotian_1_1.style.background = "url(../resume/images/liaotian/top-" + theme_Num + ".png)"
		liaotian_3_1.style.background = "url(../resume/images/liaotian/top-" + theme_Num + ".png)"
		liaotian_text.style.color = LT_color[theme_Num];
		xuanxiang.style.color = LT_color[theme_Num];
		NeiLan.style.background = LT_bj[theme_Num];
		console.log(QiPao_text);

		mySwiper2.slideTo(0, Math.abs(theme_Num-Page)*100, false);
		theme.style.backgroundPosition = -theme_Num*300 + "px";
		WEB_Popup.style.backgroundPosition = -theme_Num*300 + "px";
		WEB_download.style.backgroundPosition = -theme_Num*300 + "px";
		WEB_tishi.style.backgroundPosition = -theme_Num*300 + "px";
		theme_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
		download_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
		document.querySelector("#jz").style.display ="block";
		document.getElementById("bar").src = "images/bar-" + theme_Num + ".png";
		var color_Arr = ["#dcdcdc","#7f2d00","#464243","#7f6c61"];
		document.getElementById("time").style.color = color_Arr[theme_Num];
		icon_1080(icon_div);
		icon_300(theme_icon);
		index_bg_fun();
		if (theme_Num == 3) {
			var status_bar = document.getElementById("status-bar");
			status_bar.style.width = "86%";
			status_bar.style.marginTop = "24px";
			status_bar.style.marginLeft = "-4px";
			for (var i = 0; i < 5; i++) {
				icon_box[i].style.width = "78%";
			}
			icon_box[4].style.top = "calc(100% - 130px)";
		}else{
			var status_bar = document.getElementById("status-bar");
			status_bar.style.width = "96%";
			status_bar.style.marginTop = "5px";
			status_bar.style.marginLeft = "0px";
			for (var i = 0; i < 5; i++) {
				icon_box[i].style.width = "88%";
			}
			icon_box[4].style.top = "calc(100% - 120px)";
		}
		theme.style.display = "none";
		if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			icon_box[0].style.marginTop = "40px";
		}
		function_load(theme_Num);
		for(var i = 1; i < 51; i++) {
			var loading = document.getElementById("jz-loading-2");
			(function(i) {
				setTimeout(function() {
					loading.style.width = i*5.6 + "px";
				}, (i + 1) * 10);
			})(i)
		}
		setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 1000);
		Mask.style.display = "none";
		Popup_state = false;
	}
}
function icon_1080(o) {
	for (var i = 0; i < o.length; i++) {
		o[i].index = i;
		o[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*60 + "px";
		var color_Arr = ["#dcdcdc","#7f2d00","#464243","#7f6c61"];
		o[i].style.color = color_Arr[theme_Num];
		console.log(o[i]);
	}
}
function icon_300(o) {
	for (var i = 0; i < o.length; i++) {
		o[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*60 + "px";
		var color_Arr = ["#dcdcdc","#7f2d00","#464243","#7f6c61"];
		o[i].style.color = color_Arr[theme_Num];
		console.log(o[i]);
	}
}
function index_bg_fun() {
	for (var i = 0; i < index_bg.length; i++) {
		if (i == theme_Num) {
			index_bg[i].style.display = "flex";
		}else{
			index_bg[i].style.display = "none";
		}
	}
}
function function_load(e) {
	var jz_0 = ["#2b6584","#ffd789","#daf2d2","#ffe3ab"];
	var jz_1 = ["#312b26","#d68f54","#daf2d2","#8c8a9b"];
	var jz_2 = ["#e8cf57","#eeac68","#cfe8f2","#fcb574"];
	document.getElementById("jz").style.background = jz_0[e];
	document.getElementById("jz-gif").style.background = "url(images/theme/jz-" + e + ".gif)";
	document.getElementById("jz-loading-1").style.background = jz_1[e];
	document.getElementById("jz-loading-2").style.background = jz_2[e];
	document.getElementById("jz-loading-3").style.backgroundPosition = -e*300 + "px" + " " + "0px";
}
menu.addEventListener("click",function(e){
	var e = e.target.index;
	if (e != undefined) {
		console.log(e);
		if (e != 8) {
			mySwiper2.slideTo(e, Math.abs(e-Page)*100, false);
			Page = e;
			theme.style.display = "none";
			WEB.style.display = "none";
			mail.style.display = "none";
			WEB_Popup.style.display = "none";
			WEB_download.style.display = "none";
			WEB_tishi.style.display = "none";
			Mask.style.display = "none";
			dial_Del();
			Popup_state = false;
		}
		if (Popup_state == false) {
			Mask.style.display = "none";
		}
		if (course_state == 2) {
			course_state = 3;
			course3();
		}
		setTimeout(function(){ menu.style.opacity='1'; }, 50);
		setTimeout(function(){ menu.style.opacity='0.8'; }, 100);
		setTimeout(function(){ menu.style.opacity='0.6'; }, 150);
		setTimeout(function(){ menu.style.opacity='0.4'; }, 200);
		setTimeout(function(){ menu.style.opacity='0.2'; }, 250);
		setTimeout(function(){ menu.style.display = "none" }, 300);
		Mask.style.zIndex = "15";
		course_2.style.display = "none";
	}
})
theme_X.addEventListener("click",function(e){
	Mask.style.display = "none";
	theme.style.display = "none";
	Popup_state = false;
})
WEB_X.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB.style.display = "none";
	Popup_state = false;
})
var download_X = document.getElementById("download-X");
download_X.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB_download.style.display = "none";
	Popup_state = false;
})
var mail = document.getElementById("mail");
var mail_0 = mail.getElementsByTagName("div")[0];
var mail_1 = mail.getElementsByTagName("div")[1];
var WEB_0 = WEB_Popup.getElementsByTagName("div")[0];
var WEB_1 = WEB_Popup.getElementsByTagName("div")[1];
var WEB_tishi_0 = WEB_tishi.getElementsByTagName("div")[0];
var WEB_tishi_1 = WEB_tishi.getElementsByTagName("div")[1];
var tel = dial_Btn[9];
var mail_Popup = document.getElementById("mail-Popup");
var tel_Popup = document.getElementById("tel-Popup");
mail_0.addEventListener("click",function(e){
	mail.style.display = "none";
	mail_Popup.style.display = "block";
	var e = document.getElementById("mail-text");
	e.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	setTimeout(function(){
		mail_Popup.style.display = "none"
		Mask.style.display = "none";
		Popup_state = false;
	}, 1000);
})
mail_1.addEventListener("click",function(e){
	Mask.style.display = "none";
	mail.style.display = "none";
	Popup_state = false;
})
WEB_0.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB_Popup.style.display = "none";
	Popup_state = false;
	window.open(WEB_url);
})
WEB_1.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB_Popup.style.display = "none";
	Popup_state = false;
})
WEB_tishi_0.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB_tishi.style.display = "none";
	Popup_state = false;
	course1();
	localStorage.explain = 0;
})
WEB_tishi_1.addEventListener("click",function(e){
	Mask.style.display = "none";
	WEB_tishi.style.display = "none";
	localStorage.explain = 0;
})
tel.addEventListener("click",function(e){
	mail.style.display = "none";
	tel_Popup.style.display = "block";
	var e = document.getElementById("tel-text");
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		tel_Popup.style.display = "none"
		window.location.href = 'tel:15510100531';
		dial_Del();
		Popup_state = false;
		console.log("非首次开启页面，关闭教程提示。");
	}else{
		e.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		// console.log("非首次开启页面，关闭教程提示。");
		dial_Del();
		Mask.style.display = "block";
		setTimeout(function(){
			tel_Popup.style.display = "none"
			Mask.style.display = "none";
			Popup_state = false;
		}, 1000);
	}
})




var mySwiper2 = new Swiper('.gallery-top',{
	threshold : 20,
	on:{  
		touchStart: function(swiper,event){
			// course_3.style.display = "none";
		},
		slideChangeTransitionEnd: function(){
			// console.log(1111);
			// if (Tips == true) {
			//   Tips = false;
			//   document.getElementById("time_Tips").style.display = "none";
			//   document.getElementById("WEB_tishi").style.display = "none";
			//   for (var i = 0; i < icon_div.length; i++) {
			//   icon_div[i].style.opacity = "1";
			//   }
			// }
			theme.style.display = "none";
			WEB.style.display = "none";
			mail.style.display = "none";
			WEB_Popup.style.display = "none";
			WEB_tishi.style.display = "none";
			Mask.style.display = "none";
			Mask.style.zIndex = "15";
			dial_Num_box.innerHTML = "";
			document.getElementById("dial").style.top = subject.offsetHeight + "px";
			ii = 0;
			Popup_state = false;  
		},
		slideChangeTransitionStart: function(){
			menu.style.opacity='0';
			menu.style.display = "none"
			if (course_state == 3) {
				console.log(course_state);
				course_state = 4;
				course_3.style.display = "none"
				course4();

			}
			Page = this.activeIndex;
		},
		doubleTap: function(event){
			console.log(this.activeIndex);
			if(menu.style.display == "none" && this.activeIndex != 0){
				Mask.style.display = "block";
				Mask.style.zIndex = "21";
				menu.style.display = "flex";
				for (var i = 0; i < menu_Btn.length; i++) {
					menu_Btn[i].style.width = meun_width + "px";
					menu_Btn[i].style.height = meun_width + "px";
					menu_Btn[i].index = i;
					menu_Btn[i].style.background = "url(images/theme/menu-icon.png)";
					menu_Btn[i].style.backgroundSize = 9*meun_width + "px" + " " + 4*meun_width + "px";
					menu_Btn[i].style.backgroundPosition = -i*meun_width + "px" + " " + -theme_Num*meun_width + "px";
				}
				setTimeout(function(){ menu.style.opacity='0.2'; }, 50);
				setTimeout(function(){ menu.style.opacity='0.4'; }, 100);
				setTimeout(function(){ menu.style.opacity='0.6'; }, 150);
				setTimeout(function(){ menu.style.opacity='0.8'; }, 200);
				setTimeout(function(){ menu.style.opacity='1'; }, 250);
				if (course_state != 0) {
					for(var i = 1; i < menu_Btn.length; i++) {
						menu_Btn[i].style.opacity = 0.3;
						menu_Btn[i].style.pointerEvents = "none";
					}
				}else{
					for(var i = 1; i < menu_Btn.length; i++) {
						menu_Btn[i].style.opacity = 1;
						menu_Btn[i].style.pointerEvents = "flex";
					}
				}
				document.getElementById("arrow").style.display = "block";
				document.getElementById("course-2-img").style.display = "none";
				document.getElementById("arrow").style.top = menu.offsetTop + "px";
				document.getElementById("arrow").style.left = menu.offsetLeft - (menu.offsetLeft)*0.9 + "px";
				document.getElementById("arrow").style.width = (menu.offsetLeft)*0.9 + "px";
				// document.getElementById("arrow").style.height = meun_width + "px";
				// console.log(menu.offsetTop);
				// console.log(menu.offsetLeft);
			}
		}
	}
})
var swiperV = new Swiper('.swiper-container-v', {
	pagination: '.swiper-pagination-v',
	paginationClickable: true,
	direction: 'vertical',
	mousewheel: true,
	// touchAngle : 20,
	on: {
		slideChangeTransitionStart: function(){
			// console.log(course_state);
			if (course_state == 4) {
				course_state = 0;
				course_4.style.display = "none";
				course_5.style.display = "flex"; 
				setTimeout(function(){
					swiperV[Page-1].slideTo(0, Page*100, false);
					mySwiper2.slideTo(0, Page*100, false);
					course_5.style.display = "none";
					course_X.style.display = "none";
				}, 2000); 
			}
		},
	},
});

var index_bg_1_img = [];
var index_bg_1_height = [];
var index_bg_2_img = [];
var index_bg_2_height = [];
var index_bg_3_img = [];
var index_bg_3_height = [];
var TEL_Num = "15510100531";
var dial_Num = document.getElementById("dial-Num");
var dial_Num_box = document.getElementById("dial-Num-box");
var ii = 0;
function fun_dial(){
	dial_Num_box.innerHTML = "";
	var dial_Width = document.getElementById("dial-body").offsetWidth;
	dial_Num.style.backgroundPosition = -theme_Num*dial_Width + "px";
	dial.style.backgroundPosition = -theme_Num*100 + "%";
	for(var i = 0; i < dial_Btn.length; i++) {
		dial_Btn[i].style.backgroundPosition = -i*100 + "%" + " " + -theme_Num*100 + "%";
	}
	for(var i = 0; i < 10 + 1; i++) {
		(function(i) {
			setTimeout(function() {
				dial.style.top = subject.offsetHeight - (dial.offsetHeight/10)*i + "px";
			}, (i + 1)*5);
		})(i)
	}
	dial.style.display = "block";
	Mask.style.display = "block";
	for(var i = 0; i < TEL_Num.length + 1; i++) {
		(function(i) {
			setTimeout(function() {
				dial_Btn[ii].style.background = "url(images/theme/dial-Btn-Num-0.png)";
				dial_Btn[ii].style.backgroundSize = "1200%";
				dial_Btn[ii].style.backgroundPosition = -ii*100 + "%" + " " + -theme_Num*100 + "%";
				if (i < TEL_Num.length) {
					var Img = document.createElement("img");
					Img.src = "images/theme/dial-" + theme_Num + "-" + TEL_Num[i] + ".png";
					dial_Num_box.appendChild(Img).className = "dial-Btn-Num";
					dial_Btn_Num[i].style.width = dial_Btn_Num[i].offsetHeight/240*90 + "px";
					if (TEL_Num[i] == 0) {
						ii = 10;
					}else{
						ii = TEL_Num[i] - 1;
					}
					dial_Btn[ii].style.background = "url(images/theme/dial-Btn-Num-1.png)";
					dial_Btn[ii].style.backgroundSize = "1200%";
					dial_Btn[ii].style.backgroundPosition = -ii*100 + "%" + " " + -theme_Num*100 + "%";
				}
			}, (i + 1)*100);
		})(i)
	}
}
function dial_Del() {
	for(var i = 0; i < 10 + 1; i++) {
		(function(i) {
			setTimeout(function() {
				document.getElementById("dial").style.top = (subject.offsetHeight - dial.offsetHeight) + (dial.offsetHeight/10)*i + "px";
			}, (i + 1)*5);
		})(i)
	}
	Mask.style.display = "none";
	ii = 0;
}
var course_state = 0;
var course_1 = document.getElementById("course-1");
var course_2 = document.getElementById("course-2");
var course_3 = document.getElementById("course-3");
var course_4 = document.getElementById("course-4");
var course_5 = document.getElementById("course-5");
var course_X = document.getElementById("course-X");
function course1() {
	document.getElementById("time_Tips").style.display = "none";
	document.getElementById("WEB-tishi").style.display = "none";
	for (var i = 0; i < icon_div.length; i++) {
		icon_div[i].style.opacity = "1";
	}
	for (var i = 0; i < icon_div.length; i++) {
		icon_div[i].index = i;
		icon_div[i].style.background = "url(images/theme/desktop-icon-" + equipment + ".png)";
		icon_div[i].style.backgroundSize = "1140px 240px";
		icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + -(theme_Num+4)*78 + "px";
	}
	course_X.style.display = "block";
	course_state = 1;
	console.log("course1()");
	icon_box[0].style.zIndex = 22;
	icon_box[1].style.zIndex = 22;
	course_1.style.display = "flex";
	document.getElementById("course-1-img").style.marginTop = icon_box[2].offsetTop - 20 + "px";
}
function course2() {
	console.log("course2()");
	arrow.style.display = "none";
	course_2.style.display = "flex";
	document.getElementById("course-2-img").src = "images/course/2-1.png"
	document.getElementById("course-2-img").style.display = "block";
	for (var i = 0; i < icon_div.length; i++) {
		icon_div[i].index = i;
		icon_div[i].style.background = "url(images/theme/desktop-icon-" + equipment + ".png)";
		icon_div[i].style.backgroundSize = "1140px 240px";
		icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
	}
}
function course3() {
	console.log("course3()");
	course_3.style.display = "flex";
}
function course4() {
	console.log("course4()");
	course_4.style.display = "flex";
}
course_X.addEventListener("click",function(e){
	for (var i = 0; i < icon_div.length; i++) {
		icon_div[i].index = i;
		icon_div[i].style.background = "url(images/theme/desktop-icon-" + equipment + ".png)";
		icon_div[i].style.backgroundSize = "1140px 240px";
		icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
	}
	course_1.style.display = "none";
	course_2.style.display = "none";
	course_3.style.display = "none";
	course_4.style.display = "none";
	course_5.style.display = "none";
	course_X.style.display = "none";
	course_state = 0;
	mySwiper2.slideTo(0, Page*100, false);
	icon_box[0].style.zIndex = 1;
	icon_box[1].style.zIndex = 1;
})
function PC_Nva(n) {
	mySwiper_PC.slideTo(n, 100, true);
}
function iphone_Nva(n) {
	mySwiper_iphone.slideTo(n, 100, true);
}
PC_contact.onmouseover = function(e) {
	PC_contact.style.mixBlendMode = "normal";
	if (e.target.index < 3) {
		for (var i = 0; i < PC_contact_img.length; i++) {
			PC_contact_img[i].style.display = "none";
		}
		PC_contact_img[e.target.index].style.display = "block";
	}
}
PC_contact.onmouseout = function() {
	PC_contact.style.mixBlendMode = "overlay";
	for (var i = 0; i < PC_contact_img.length; i++) {
		PC_contact_img[i].style.display = "none";
	}
}
PC_body_Nva.onmouseover = function(e) {
	var PC_Nva_Color_Arr = ["#d02a2e","#08f70c","#13b5b1","#ea68a2","#6f84f1","#fff100"];
	if (e.target.index != undefined) {
		PC_body_Nva_Arr[e.target.index].style.color = PC_Nva_Color_Arr[e.target.index];
	}
	
}
PC_body_Nva.onmouseout = function(e) {
	var PC_Nva_Color_Arr = ["#d02a2e","#08f70c","#13b5b1","#ea68a2","#6f84f1","#fff100"];
	for (var i = 0; i < PC_body_Nva_Arr.length; i++) {
		if (i == PC_Nva_Num) {
			PC_body_Nva_Arr[i].style.color = PC_Nva_Color_Arr[PC_Nva_Num];
		}else {
			PC_body_Nva_Arr[i].style.color = "#c5e5da";
		}
	}
}
function return_iphone() {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		var PC_subject = iphone_body;
		var PC_Swiper = mySwiper_iphone;
		document.getElementById("k-s").pause();
	}else{
		var PC_subject = PC_body;
		var PC_Swiper = mySwiper_PC;
		document.getElementById("k-pc").pause();
	}
	setTimeout(function(){ PC_subject.style.opacity = "0.8"; }, 50);
	setTimeout(function(){ PC_subject.style.opacity = "0.6"; }, 100);
	setTimeout(function(){ PC_subject.style.opacity = "0.4"; }, 150);
	setTimeout(function(){ PC_subject.style.opacity = "0.2"; }, 200);
	setTimeout(function(){ PC_subject.style.opacity = "0"; }, 250);
	setTimeout(function(){ PC_subject.style.zIndex = "-100"; }, 300);
	for (var i = 0; i < 100; i++) {
		(function(i) {
			setTimeout(function() {
				PC_bg_anim.style.width= 99 - i + "%";
				// PC_bg_anim.style.height= 99 - i + "%";
			}, (i + 300) * 2);
		})(i)
	}
	setTimeout(function(){ subject.style.display = "flex"; }, 750);
	setTimeout(function(){ subject.style.opacity='0.2'; }, 750);
	setTimeout(function(){ subject.style.opacity='0.4'; }, 800);
	setTimeout(function(){ subject.style.opacity='0.6'; }, 850);
	setTimeout(function(){ subject.style.opacity='0.8'; }, 900);
	setTimeout(function(){ subject.style.opacity='1'; }, 950);
}
setInterval(function(){
	var today = new Date()
	var h = today.getHours()
	var m = today.getMinutes()
	h = checkTime(h)
	m = checkTime(m)
	var x = h;
	if (h == 0) {
		var x = 12;
		var y = "深夜";
	}else if (h > 0 && h < 3) {
		var y = "深夜";
	}else if (h > 2 && h < 6) {
		var y = "凌晨";
	}else if (h > 5 && h < 8) {
		var y = "早晨";
	}else if (h > 7 && h < 11) {
		var y = "上午";
	}else if (h > 10 && h < 13) {
		var y = "中午";
	}else if (h > 12 && h < 17) {
		var x = h - 12;
		var y = "下午";
	}else if (h > 16 && h < 20) {
		var x = h - 12;
		var y = "傍晚";
	}else if (h > 18 && h < 23) {
		var x = h - 12;
		var y = "晚上";
	}else if (h > 22) {
		var x = h - 12;
		var y = "深夜";
	}
	document.querySelector("#time").innerHTML = y + x + ":" + m;
}, 500);
function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}

function contact_Popup(e) {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		console.log(e);
		iphone_contact_img[0].style.display = "none";
		iphone_contact_img[1].style.display = "none";
		iphone_contact_img[2].style.display = "none";
		iphone_contact_img[e].style.display = "block";
	}
}
function contact_Popup_X() {
	iphone_contact_img[0].style.display = "none";
	iphone_contact_img[1].style.display = "none";
	iphone_contact_img[2].style.display = "none";
}

setTimeout(function(){
	if (Refresh == false) {
		location.reload();
	}
}, 20000);

window.onload = function () {
	var dial_box_width = document.getElementById("dial-box").offsetWidth;
	var dial_Btn_width = parseInt(((dial_box_width-22)/3)/6);
	console.log(dial_Btn_width);
	for (var i = 0; i < dial_Btn.length; i++) {
		dial_Btn[i].style.width = dial_Btn_width*6 + "px";
		dial_Btn[i].style.height = dial_Btn_width*4 + "px";
	}
	setTimeout(function(){
		loading.style.width = "260px";
	}, 100);
	setTimeout(function(){
		loading.style.width = "270px";
	}, 200);
	setTimeout(function(){
		loading.style.width = "280px";
	}, 300);
	setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 400);
	setTimeout(function(){document.body.style.backgroundColor ='#eee'; }, 400);
	Refresh = true;
	// Img_load();
	if (localStorage.explain == 0) {
			console.log("非首次开启页面，关闭教程提示。");
		}else{
			setTimeout(function(){time_Tips()}, 5000);
		}
	
}

function time_Tips() {
	// console.log(icon_div);
	if (Tips == true) {
		Mask.style.display = "block";
		WEB_tishi.style.display = "flex"; 
	}
}

function Img_load() {
	if (img_equipment == "PC") {
		for (var i = 0; i < PC_img.length; i++) {
			PC_img[i].src = "images/PC/" + i + ".png";
		}
	}else if (img_equipment == "iphone") {
		for (var i = 0; i < iphone_img.length; i++) {
			iphone_img[i].src = "images/iphone/" + i + ".png";
		}
	}
	
}






function PC_tarot() {
	window.open("https://taluo.netlify.app/");
}
function PC_canvas() {
	window.open("https://b-canvas.netlify.app/");
}
function PC_xlg() {
	window.open("https://xlg-bj.netlify.app/");
}
function PC_xlgnn() {
	window.open("https://xlg-nn.netlify.app/");
}

function download_JianLi() {
	console.log(111);
	window.open("平面设计-简历-15510100531-毕晟铭.pdf");
}
function download_ZuoPinJi() {
	window.open("https://github.com/935945334/resume/raw/master/%E6%AF%95%E6%99%9F%E9%93%AD-%E4%BD%9C%E5%93%81%E9%9B%86-17150024672.pdf");
}
function download_Zip() {
	window.open("https://github.com/935945334/resume/raw/master/%E6%AF%95%E6%99%9F%E9%93%AD-%E7%AE%80%E5%8E%86-%E4%BD%9C%E5%93%81%E9%9B%86.zip");
}
var time = 0;//计时
var timeX = 0//时间状态
var cloud_1 = document.getElementById("cloud-1");
var cloud_2 = document.getElementById("cloud-2");
var cloud_3 = document.getElementById("cloud-3");
var cloud_4 = document.getElementById("cloud-4");
var bird_1 = document.getElementById("bird-1");
var bird_2 = document.getElementById("bird-2");
var cloudX1 = cloud_1.offsetLeft;//云1
var cloudX2 = cloud_2.offsetLeft;//云2
var cloudX3 = cloud_3.offsetLeft;//云1
var cloudX4 = cloud_4.offsetLeft;//云2
var birdX1 = bird_1.offsetLeft;//云2
var birdX2 = bird_2.offsetLeft;//云2
var animation = setInterval("cloud()",50)//每50毫秒运行一次动画
function cloud() {
	if (timeX == 0) {
		bird_1.style.transform = "scaleX(1)";
		bird_2.style.transform = "scaleX(1)";
		window.time = time + 1;
		if (time == 300) {
			window.timeX = 1
		}
	}else if (timeX == 1) {
		bird_1.style.transform = "scaleX(-1)";
		bird_2.style.transform = "scaleX(-1)";
		window.time = time - 1;
		if (time == 1) {
			window.timeX = 0
		}
	}
	cloud_1.style.left = cloudX1 + time +"px";
	cloud_2.style.left = cloudX2 - time +"px";
	cloud_3.style.left = cloudX1 + time +"px";
	cloud_4.style.left = cloudX2 - time +"px";
	bird_1.style.left = birdX1 - time*3 +"px";
	bird_2.style.left = birdX1 - time*3 +"px";
}





// var hf_text = ["马修","黄毛","艾梅达",];
var swiper_LiaoTian = new Swiper('.swiper-container-LiaoTian', {
	direction: 'vertical',
	slidesPerView: 'auto',
	freeMode: true,
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	on: {
		touchStart: function(swiper,event){
			swiper_LiaoTian.update();
			tel_Popup.style.display = "none";
			mail_Popup.style.display = "none";
		},
	},
	mousewheel: true,
});



var jishu = 0;
var LT_PanDuan = false;
var NeiLan = document.getElementById("NeiLan");
var text_pianyi = 130;
var PanYiZ = 0;
function LT_text() {
	if (LT_PanDuan == false){
		var LT_windows = document.getElementById("liaotian-3");
		var xuanxiang = document.getElementById("xuanxiang");
		var LiaoTianChuangKou = document.getElementById("LiaoTianChuangKou");
		var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
		var LiaoTianChuangKouT = document.getElementById("swiper-wrapper-LiaoTian").offsetTop;
		LiaoTianChuangKou.style.height = LiaoTianChuangKouH - text_pianyi + "px";

		if (LiaoTianChuangKouH < NeiLan.offsetHeight){
			document.getElementById("swiper-wrapper-LiaoTian").style.top = LiaoTianChuangKouT - LiaoTianChuangKouT - text_pianyi + "px";
			PanYiZ = text_pianyi;
		}
		console.log(LiaoTianChuangKouH);
		console.log(text_pianyi);
		LT_windows.style.height = "180px";
		xuanxiang.style.display = "flex";
		// console.log(LiaoTianChuangKouT);
		document.getElementById("LT-X").style.display = "flex";
		LT_PanDuan = true;
	}
	
}
var hf_sudu = 200;
var hf = [];
var hf_changdu = []
var hf_6 = ["很高兴再次见到你"];
var liaotian_ = 0;//判断是否第一次打开聊天页面
var panduan_jianli = false;
var panduan_lianxifangshi = false;
function LT_text_X(e) {
	console.log("选项1");
	
	LT_X();
	var xuanxiang = document.getElementById("xuanxiang");
	var div = document.createElement("div");
	var div1 = document.createElement("div");
	LT_windows.style.pointerEvents = "none"
	div.appendChild(div1).className = "QiPao-text";
	div1.style.background = LT_QiPao[theme_Num];
	div1.style.color = LT_color[theme_Num];
	div1.style.border = "2px solid " + LT_QiPao_border[theme_Num];
	NeiLan.appendChild(div).className = "LiaoTianLan-r LiaoTianLan";
	swiper_LiaoTian.update();
	switch (e){
		case 0:
			div1.innerHTML = "介绍一下这个网站";
			hf_changdu = [0,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0]
			hf = ["这里是我的个人网站","主要用来展示作品","以下部分为视觉作品 点击对应图标即可直接浏览","images/liaotian/1-1.png","以下部分为工具类网站作品 点击点击图标后会直接打开对应网站","images/liaotian/1-2.png","images/liaotian/1-3.png","以下图标分别为更换主题风格、操作说明和宽屏模式","images/liaotian/1-4.png","跟换主题可以将主页替换为其他风格","images/liaotian/1-5.png","操作说明可以具体演示本网站浏览方式","详细说明请返回主页点击“操作说明”","宽屏模式是更加接近传统作品集的显示方式","images/liaotian/1-6.png","手机浏览宽屏模式需要将手机横向放置"];
		break;
		case 1:
			div1.innerHTML = "这个网站应该怎么用";
			hf_changdu = [0,0,0,0]
			hf = ["左右滑动可以切换分类","上下滑动可以翻页","双击屏幕可以呼出快速导航","详细演示请返回主页点击“操作说明”"];
		break;
		case 2:
			panduan_jianli = true;
			div1.innerHTML = "可以发一份简历吗";
			hf_changdu = [1,0,0];
			hf = ["images/liaotian/jl.png","百度网盘：点击下载","阿里云盘：点击下载"];
		break;
		case 3:
			panduan_lianxifangshi = true;
			div1.innerHTML = "有什么联系方式吗";
			hf_changdu = [0,0,1,0];
			hf = ["电话：15510100531","邮箱：935945334@qq.com","images/liaotian/1-7.png","微信二维码↑↑↑",];
		break;
		case 4:
			div1.innerHTML = "不聊了";
			hf_changdu = [0];
			hf = ["再见"];
		break;
	}

	
	setTimeout(function(){
		hf_shuru();
	}, hf_sudu);
	setTimeout(function(){xuanxiang.style.pointerEvents = "auto"}, hf_sudu * 4 * (hf.length+1));
	if (e == 4){
		setTimeout(function(){
			LT_windows.style.pointerEvents = "auto";
			NeiLan.replaceChildren();
			liaotian_ = 1;
			liaotian.style.display = "none";
			var status_bar = document.getElementById("status-bar");
			status_bar.style.width = "86%";
			status_bar.style.marginTop = "24px";
			status_bar.style.marginLeft = "-4px";
		}, hf_sudu * 4 * (hf.length+1));
	}
}


function bdwp(){
	console.log("百度网盘");
	window.open("https://pan.baidu.com/s/1f7YJWnCjsJzZoWbHgCJ1tA?pwd=4u1c ");
}
function alyp(){
	console.log("阿里云盘");
	window.open("https://www.aliyundrive.com/s/dLR6a3BPR7q");
}
function dkjl(){
	document.getElementById("jl").style.display = "flex";
}
function gbjl(){
	document.getElementById("jl").style.display = "none";
	
}

function ddh(){
	console.log("打电话");
	tel_Popup.style.display = "block";
	var e = document.getElementById("tel-text");
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		window.location.href = 'tel:15510100531';
	}else{
		e.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		setTimeout(function(){
			tel_Popup.style.display = "none";
		}, 1000);
	}
}
function fzyx(){
	console.log("复制邮箱");
	mail_Popup.style.display = "block";
	var e = document.getElementById("mail-text");
	e.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	setTimeout(function(){
		mail_Popup.style.display = "none"
		Mask.style.display = "none";
		Popup_state = false;
	}, 1000);
}
function hf_shuru(){
	for (var i = 0; i < hf.length+1; i++) {
		(function(i) {
			setTimeout(function() {
				if (hf_changdu[i] == 0)
				{
					add_txt(i);
				}else if (hf_changdu[i] == 1){
					add_img(i);
				}
				if (i == hf.length){
					tiaoshi();
				}
			}, hf_sudu * 4.5 * i);
		})(i)
	}
}
function tiaoshi(){
	var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
	NeiLanH = NeiLan.offsetHeight;
	if (LiaoTianChuangKouH < NeiLanH){
		if (LiaoTianChuangKouH - NeiLanH < 0){
			swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH);
		}
	}
	LT_windows.style.pointerEvents = "auto"
	swiper_LiaoTian.update();
}
function add_txt(i){
	var div = document.createElement("div");
	var div1 = document.createElement("div");
	if (panduan_jianli == true) {
		if (i == 1){
			div1.onclick = bdwp;
		}
		if (i == 2){
			div1.onclick = alyp;
			panduan_jianli = false;
		}
	}
	if (panduan_lianxifangshi == true) {
		if (i == 0){
			div1.onclick = ddh;
		}
		if (i == 1){
			div1.onclick = fzyx;
			panduan_lianxifangshi = false;
		}
	}
	div.appendChild(div1).className = "QiPao-text";
	NeiLan.appendChild(div).className = "LiaoTianLan-l LiaoTianLan";
	div1.style.background = LT_QiPao[theme_Num];
	div1.style.color = LT_color[theme_Num];
	div1.style.border = "2px solid " + LT_QiPao_border[theme_Num];
	var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
	var NeiLanH = document.getElementById("NeiLan").offsetHeight;
	if (LiaoTianChuangKouH < NeiLanH){
		if (LiaoTianChuangKouH - NeiLanH < 0){
			swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH -21);
		}
	}
	setTimeout(function(){div1.innerHTML = "·";}, hf_sudu*0);
	setTimeout(function(){div1.innerHTML = "··";}, hf_sudu*1);
	setTimeout(function(){div1.innerHTML = "···";}, hf_sudu*2);
	setTimeout(function(){div1.innerHTML = hf[i];}, hf_sudu*3);
	setTimeout(function(){
		NeiLanH = NeiLan.offsetHeight;
		if (LiaoTianChuangKouH < NeiLanH){
			if (LiaoTianChuangKouH - NeiLanH < 0){
				swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH - 20);
			}
		}
		swiper_LiaoTian.update();
	}, hf_sudu*3+3);
}
function add_img(i){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	var div1 = document.createElement("div");
	if (panduan_jianli == true) {
		if (i == 0){
			Img.onclick = dkjl;
		}
	}
	div.appendChild(div1).className = "QiPao-text";
	NeiLan.appendChild(div).className = "LiaoTianLan-l LiaoTianLan";
	div1.style.background = LT_QiPao[theme_Num];
	div1.style.color = LT_color[theme_Num];
	div1.style.border = "10px solid " + LT_QiPao[theme_Num];
	Img.style.border = "2px solid " + LT_QiPao_border[theme_Num];
	Img.style.background = LT_QiPao[theme_Num];
	var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
	var NeiLanH = document.getElementById("NeiLan").offsetHeight;
	if (LiaoTianChuangKouH < NeiLan.offsetHeight){
		if (LiaoTianChuangKouH - NeiLanH < 0){
			swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH - 21);
		}
	}
	setTimeout(function(){div1.innerHTML = "·";}, hf_sudu*0);
	setTimeout(function(){div1.innerHTML = "··";}, hf_sudu*1);
	setTimeout(function(){div1.innerHTML = "···";}, hf_sudu*2);
	setTimeout(function(){
		div1.remove();
		Img.src = hf[i];
		div.appendChild(Img).className = "QiPao-img";
	}, hf_sudu*3);
	setTimeout(function(){
		NeiLanH = NeiLan.offsetHeight;
		if (LiaoTianChuangKouH < NeiLanH){
			if (LiaoTianChuangKouH - NeiLanH < 0){
				swiper_LiaoTian.setTranslate(LiaoTianChuangKouH - NeiLanH);
			}
		}
		swiper_LiaoTian.update();
	}, hf_sudu*3+10);
}

function LT_X() {
	if (LT_PanDuan == true){
		// console.log("?");
		var LT_windows = document.getElementById("liaotian-3");
		var xuanxiang = document.getElementById("xuanxiang");
		var LiaoTianChuangKou = document.getElementById("LiaoTianChuangKou");
		var LiaoTianChuangKouH = document.getElementById("LiaoTianChuangKou").offsetHeight;
		var LiaoTianChuangKouT = document.getElementById("swiper-wrapper-LiaoTian").offsetTop;
		LiaoTianChuangKou.style.height = LiaoTianChuangKouH + text_pianyi + "px";
		document.getElementById("swiper-wrapper-LiaoTian").style.top = 0;
		LT_windows.style.height = "50px";
		xuanxiang.style.display = "none";
		document.getElementById("LT-X").style.display = "none";
		swiper_LiaoTian.update();
		LT_PanDuan = false;
		
	}
	
}



