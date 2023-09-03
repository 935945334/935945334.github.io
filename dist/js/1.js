var LT_TXT_1 = "你好";
var LT_TXT_2 = "吃了吗";
var LT_TXT_3 = "啊啊啊啊";



























    //手机模式下保证底部icon位置在底部
    // if(screen.width < 1365){
    //         window.onload = function () {
    //         // document.getElementsByClassName("jiantou").style.marginTop= document.documentElement.clientHeight - 20 + "px"; 
    //         setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 1000);
    //         setTimeout(function(){document.body.style.backgroundColor ='#eee'; }, 1000);
    //         setTimeout(function(){document.querySelector("#status-bar").style.display ='none'; }, 1000);
            

    //   }
    // }
    //加载动画

    // function myTishi(){
    // 	document.querySelector("#tishi-1").style.display='none';
    // }
    //点击电话icon弹出号码弹窗
    // function myFunction() {
    //         if (screen.width > 1366) {
    //          document.querySelector("#thpc").style.display='block'; //显示弹窗
    //          document.querySelector("#weixin").style.display='none';
    //          document.querySelector("#youxiang").style.display='none';
    //         }else{
    //          document.querySelector("#thpe").style.display='block'; //直接显示弹窗
    //          document.querySelector("#weixin").style.display='none';
    //          document.querySelector("#youxiang").style.display='none';
    //   }
    // }

    // //点击返回后隐藏号码弹窗
    //  function myTel() {
    //          document.querySelector("#thpc").style.display='none';
    //          document.querySelector("#thpe").style.display='none';
    // }
    // //点击微信icon弹出二维码
    // function myWeoxin() {
    //          document.querySelector("#weixin").style.display='block';
    //          document.querySelector("#thpc").style.display='none';
    //          document.querySelector("#thpe").style.display='none';
    //          document.querySelector("#youxiang").style.display='none';
    // }
    // //点击X隐藏微信二维码
    // function xWeoxin() {
    //          document.querySelector("#weixin").style.display='none';
    // }
    // //点击邮箱icon弹出邮箱弹窗
    // function myYouxiang() {
    //          document.querySelector("#youxiang").style.display='block';
    //          document.querySelector("#thpc").style.display='none';
    //          document.querySelector("#thpe").style.display='none';
    //          document.querySelector("#weixin").style.display='none';
    // }
    // //复制邮箱账号
    // function copyYouxiang() {
    //           var e = document.getElementById("youxiang-copy");
    //           e.select(); // 选择对象
    //           document.execCommand("Copy"); // 执行浏览器复制命令
    //           document.querySelector("#youxiang").style.display='none'; //隐藏邮箱弹窗
    //           document.querySelector("#copy-2").style.display='block'; //显示复制成功弹窗
    //           setTimeout(function(){ document.querySelector("#copy-2").style.display='none'; }, 1000); //两秒后隐藏复制成功弹窗
    // }
    // //点击返回隐藏邮箱弹窗
    // function xYouxiang() {
    //          document.querySelector("#youxiang").style.display='none';
    // }
    //号码弹窗函数
    // function copyTel(){
    //   if (screen.width > 1366) {
    //   var e = document.getElementById("tel-copy");
    //   e.select(); // 选择对象
    //   document.execCommand("Copy"); // 执行浏览器复制命令
    //   document.querySelector("#thpc").style.display='none'; //隐藏号码弹窗
    //   document.querySelector("#thpe").style.display='none'; //隐藏号码弹窗
    //   document.querySelector("#copy-1").style.display='block'; //显示复制成功弹窗
    //   setTimeout(function(){ document.querySelector("#copy-1").style.display='none'; }, 1000); //一秒后隐藏复制成功弹窗
    //   }else{
    //   document.querySelector("#thpc").style.display='none'; //隐藏号码弹窗
    //   document.querySelector("#thpe").style.display='none'; //隐藏号码弹窗
    //   }
    // }
 //    var mySwiper = new Swiper('.swiper-container');
	// var swiper = new Swiper('.gallery-top');
    // var mySwiper1 = new Swiper('.gallery-top');
    function myShouye(){
    mySwiper1.slideTo(8, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myJianli(){
    mySwiper1.slideTo(1, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myXtx(){
    mySwiper1.slideTo(2, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myIconi(){
    mySwiper1.slideTo(3, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myBanner(){
    mySwiper1.slideTo(4, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myHaibao(){
    mySwiper1.slideTo(5, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myChahua(){
    mySwiper1.slideTo(6, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myXiangsu(){
    mySwiper1.slideTo(7, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myQaunbu(){
    mySwiper1.slideTo(8, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    
    function myCaidan1(){
        var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myZhuti(){
    	document.querySelector("#zhuti").style.display ='block';
    }
    function xZhuti(){
    	document.querySelector("#zhuti").style.display ='none';
    }
	

function myXXX(){
      document.querySelector("#play").style.display='block';
      // document.getElementsByTagName("index").id = "index1";
      
    }


















