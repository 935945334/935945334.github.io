    //手机模式下保证底部icon位置在底部
    if(screen.width < 1365){
            window.onload = function () {
            var div = document.getElementById("mydiv");
            document.getElementById("mydiv").style.marginTop= document.documentElement.clientHeight - 390 + "px";  //将mydiv改变为网页可见区域高度减390
            //将mydiv改变为网页可见区域高度减390

            setTimeout(function(){  document.querySelector("#jz").style.display ='none'; }, 1000);
            setTimeout(function(){  document.body.style.backgroundColor ='#eee'; }, 1000);
      }
    }
    if(screen.width > 1365){
            window.onload = function () {
  

            setTimeout(function(){  document.querySelector("#jz").style.display ='none'; }, 1000);
            setTimeout(function(){  document.body.style.backgroundColor ='#eee'; }, 1000);
      }
    }

    //点击电话icon弹出号码弹窗
    function myFunction() {
            if (screen.width > 1366) {
             document.querySelector("#th").style.display='block'; //显示弹窗
             document.getElementById("th").className = "th-dh-1"; //弹窗背景图切换到PC模式（默认手机模式）
            }else{
             document.querySelector("#th").style.display='block'; //直接显示弹窗
      }
    }

    //点击返回后隐藏号码弹窗
     function myTel() {
             document.querySelector("#th").style.display='none';
    }
    //点击微信icon弹出二维码
    function myWeoxin() {
             document.querySelector("#weixin").style.display='block';
    }
    //点击X隐藏微信二维码
    function xWeoxin() {
             document.querySelector("#weixin").style.display='none';
    }
    //点击邮箱icon弹出邮箱弹窗
    function myYouxiang() {
             document.querySelector("#youxiang").style.display='block';
    }
    //复制邮箱账号
    function copyYouxiang() {
              var e = document.getElementById("youxiang-copy");
              e.select(); // 选择对象
              document.execCommand("Copy"); // 执行浏览器复制命令
              document.querySelector("#youxiang").style.display='none'; //隐藏邮箱弹窗
              document.querySelector("#copy-2").style.display='block'; //显示复制成功弹窗
              setTimeout(function(){ document.querySelector("#copy-2").style.display='none'; }, 1000); //两秒后隐藏复制成功弹窗
    }
    //点击返回隐藏邮箱弹窗
    function xYouxiang() {
             document.querySelector("#youxiang").style.display='none';
    }
    //号码弹窗函数
    function copyTel(){
      if (screen.width > 1366) {
      var e = document.getElementById("tel-copy");
      e.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      document.querySelector("#th").style.display='none'; //隐藏号码弹窗
      document.querySelector("#copy-1").style.display='block'; //显示复制成功弹窗
      setTimeout(function(){ document.querySelector("#copy-1").style.display='none'; }, 1000); //一秒后隐藏复制成功弹窗
      }else{
      document.querySelector("#th").style.display='none'; //隐藏号码弹窗
      }
    }
 //    var mySwiper = new Swiper('.swiper-container');
	// var swiper = new Swiper('.gallery-top');
    var mySwiper1 = new Swiper('.gallery-top');
    function myShouye(){
    mySwiper1.slideTo(0, 500, false);
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
    function myTaobao(){
    mySwiper1.slideTo(4, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myBanner(){
    mySwiper1.slideTo(5, 500, false);
    var x = document.getElementById("caidan");
                    setTimeout(function(){ x.style.opacity='1'; }, 50);
                    setTimeout(function(){ x.style.opacity='0.8'; }, 100);
                    setTimeout(function(){ x.style.opacity='0.6'; }, 150);
                    setTimeout(function(){ x.style.opacity='0.4'; }, 200);
                    setTimeout(function(){ x.style.opacity='0.2'; }, 250);
                    setTimeout(function(){ x.style.display = "none" }, 300);
    }
    function myHaibao(){
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
	