var icon_div = document.getElementsByClassName("icon-div");
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
var Popup_state = false;
var Page = 0;
var equipment;
var PC_Nva_Num;
var iphone;
var img_equipment;
var Refresh = false;
var Tips = true;
if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    console.log("手机");
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
                if (this.activeIndex < 3) {
                    iphone_Nva_Num = 0;
                }else if (this.activeIndex > 2 && this.activeIndex < 9) {
                    iphone_Nva_Num = 1;
                }else if (this.activeIndex > 8 && this.activeIndex < 14) {
                    iphone_Nva_Num = 2;
                }else if (this.activeIndex > 13 && this.activeIndex < 16) {
                    iphone_Nva_Num = 3;
                }else if (this.activeIndex > 15 && this.activeIndex < 20) {
                    iphone_Nva_Num = 4;
                }else if (this.activeIndex > 19) {
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
                if (this.activeIndex < 3) {
                    PC_Nva_Num = 0;
                }else if (this.activeIndex > 2 && this.activeIndex < 9) {
                    PC_Nva_Num = 1;
                }else if (this.activeIndex > 8 && this.activeIndex < 14) {
                    PC_Nva_Num = 2;
                }else if (this.activeIndex > 13 && this.activeIndex < 16) {
                    PC_Nva_Num = 3;
                }else if (this.activeIndex > 15 && this.activeIndex < 20) {
                    PC_Nva_Num = 4;
                }else if (this.activeIndex > 19) {
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
    icon_div[i].style.backgroundSize = "1080px 624px";
    icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + theme_Num*78 + "px";
}
for (var i = 0; i < theme_icon.length; i++) {
    theme_icon[i].style.background = "url(images/theme/theme-icon.png)";
    theme_icon[i].style.backgroundSize = "300px 312px";
    theme_icon[i].style.backgroundPosition = -i*60 + "px" + " " + theme_Num*78 + "px";
}
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
index.addEventListener("click",function(e){
    if (e.target.index != undefined) {
        var e = e.target.index;
        if (e < 8) {
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
            case 8:
            Mask.style.display = "block";
            theme.style.display = "flex";
            Popup_state = true;
            break;
            case 9:
            Mask.style.display = "block";
            WEB_Popup.style.display = "flex";
            Popup_state = true;
            WEB_url = "http://bishengming.gitee.io/stardewvalleyfarm/";
            break;
            case 10:
            Mask.style.display = "block";
            WEB_Popup.style.display = "flex";
            Popup_state = true;
            WEB_url = "http://bishengming.gitee.io/pixel/";
            break;
            case 11:
            Mask.style.display = "block";
            WEB_Popup.style.display = "flex";
            Popup_state = true;
            WEB_url = "http://bishengming.gitee.io/canvas/";
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
            Mask.style.display = "block";
            erweima.style.display = "block";
            Popup_state = true;
            console.log(theme_Num);
            erweima.style.backgroundPosition = -theme_Num*300 + "px";
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
                icon_div[i].style.backgroundSize = "1080px 624px";
                icon_div[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
            }
            for (var i = 0; i < theme_icon.length; i++) {
                theme_icon[i].index = i;
                theme_icon[i].style.background = "url(images/theme/theme-icon.png)";
                theme_icon[i].style.backgroundSize = "300px 312px";
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
            erweima_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
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
var new_theme_Num = 0;
function theme_fun(n) {
    new_theme_Num = n;
    if (new_theme_Num == theme_Num) {
        console.log("正在使用该主题");
    }else {
        theme_Num = new_theme_Num;
        mySwiper2.slideTo(0, Math.abs(theme_Num-Page)*100, false);
        theme.style.backgroundPosition = -theme_Num*300 + "px";
        WEB_Popup.style.backgroundPosition = -theme_Num*300 + "px";
        WEB_download.style.backgroundPosition = -theme_Num*300 + "px";
        WEB_tishi.style.backgroundPosition = -theme_Num*300 + "px";
        theme_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
        erweima_X.style.backgroundPosition = "60px" + " " + -theme_Num*60 + "px";
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
        o[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
    }
}
function icon_300(o) {
    for (var i = 0; i < o.length; i++) {
        o[i].style.backgroundPosition = -i*60 + "px" + " " + -theme_Num*78 + "px";
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
        if (e != 9) {
            mySwiper2.slideTo(e, Math.abs(e-Page)*100, false);
            Page = e;
            theme.style.display = "none";
            WEB.style.display = "none";
            erweima.style.display = "none";
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
var erweima_X = document.getElementById("erweima-X");
erweima_X.addEventListener("click",function(e){
    var erweima = document.getElementById("erweima");
    Mask.style.display = "none";
    erweima.style.display = "none";
    Popup_state = false;
})
var mail = document.getElementById("mail");
var mail_0 = mail.getElementsByTagName("div")[0];
var mail_1 = mail.getElementsByTagName("div")[1];
var WEB_0 = WEB_Popup.getElementsByTagName("div")[0];
var WEB_1 = WEB_Popup.getElementsByTagName("div")[1];
var WEB_download_0 = WEB_download.getElementsByTagName("div")[0];
var WEB_download_1 = WEB_download.getElementsByTagName("div")[1];
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
WEB_download_0.addEventListener("click",function(e){
    Mask.style.display = "none";
    WEB_download.style.display = "none";
    Popup_state = false;
    window.open(WEB_url);
})
WEB_download_1.addEventListener("click",function(e){
    Mask.style.display = "none";
    WEB_download.style.display = "none";
    Popup_state = false;
})
WEB_tishi_0.addEventListener("click",function(e){
    Mask.style.display = "none";
    WEB_tishi.style.display = "none";
    Popup_state = false;
    course1();
    console.log(1111);
})
WEB_tishi_1.addEventListener("click",function(e){
    Mask.style.display = "none";
    WEB_tishi.style.display = "none";
    Popup_state = false;
})
tel.addEventListener("click",function(e){
    mail.style.display = "none";
    tel_Popup.style.display = "block";
    var e = document.getElementById("tel-text");
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        tel_Popup.style.display = "none"
        dial_Del();
        Popup_state = false;
    }else{
        e.select(); // 选择对象
        document.execCommand("Copy"); // 执行浏览器复制命令
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
            console.log(1111);
            if (Tips == true) {
                Tips = false;
                document.getElementById("time_Tips").style.display = "none";
                document.getElementById("tishi").style.display = "none";
                for (var i = 0; i < icon_div.length; i++) {
                    icon_div[i].style.opacity = "1";
                }
            }
            theme.style.display = "none";
            WEB.style.display = "none";
            erweima.style.display = "none";
            mail.style.display = "none";
            WEB_Popup.style.display = "none";
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
                    menu_Btn[i].style.backgroundSize = 10*meun_width + "px" + " " + 4*meun_width + "px";
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
var TEL_Num = "17150024672";
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
        icon_div[i].style.backgroundSize = "1080px 624px";
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
        icon_div[i].style.backgroundSize = "1080px 624px";
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
        icon_div[i].style.backgroundSize = "1080px 624px";
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
    }else{
        var PC_subject = PC_body;
        var PC_Swiper = mySwiper_PC;
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
}, 5000);

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
    Img_load()
    setTimeout(function(){time_Tips() }, 5000);
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






function PC_canvas() {
    window.open("http://bishengming.gitee.io/canvas/");
}
function PC_xlg() {
    window.open("http://bishengming.gitee.io/stardewvalleyfarm/");
}
function PC_xlgnn() {
    window.open("http://bishengming.gitee.io/pixel/");
}

function download_JianLi() {
    window.open("https://github.com/935945334/resume/raw/master/%E6%AF%95%E6%99%9F%E9%93%AD-%E7%AE%80%E5%8E%86-17150024672.pdf");
}
function download_ZuoPinJi() {
    window.open("https://github.com/935945334/resume/raw/master/%E6%AF%95%E6%99%9F%E9%93%AD-%E4%BD%9C%E5%93%81%E9%9B%86-17150024672.pdf");
}
function download_Zip() {
    window.open("https://github.com/935945334/resume/raw/master/%E6%AF%95%E6%99%9F%E9%93%AD-%E7%AE%80%E5%8E%86-%E4%BD%9C%E5%93%81%E9%9B%86.zip");
}