    //手机模式下保证底部icon位置在底部
    if(screen.width < 1365){
            window.onload = function () {
            // document.getElementsByClassName("jiantou").style.marginTop= document.documentElement.clientHeight - 20 + "px"; 
            document.getElementById("mydiv").style.marginTop= document.documentElement.clientHeight - 390 + "px";  //将mydiv改变为网页可见区域高度减390
            //将mydiv改变为网页可见区域高度减390
            setTimeout(function(){document.querySelector("#huancun").style.display ='none'; }, 500);
            setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 1000);
            setTimeout(function(){document.body.style.backgroundColor ='#eee'; }, 1000);
            setTimeout(function(){document.getElementById("tishi").className = "tishi1"; }, 1000);
    		setTimeout(function(){document.getElementById("tishi").id = 'tishi-1'; }, 4500);

      }
    }
    //加载动画
    if(screen.width > 1365){
            window.onload = function () {
            setTimeout(function(){document.querySelector("#huancun").style.display ='none'; }, 500);
            setTimeout(function(){document.querySelector("#jz").style.display ='none'; }, 1000);
            setTimeout(function(){document.body.style.backgroundColor ='#eee'; }, 1000);
            setTimeout(function(){document.getElementById("tishi").className = "tishi1"; }, 1000);
    		setTimeout(function(){document.getElementById("tishi").id = 'tishi-1'; }, 4500);
      }
    }
    function myTishi(){
    	document.querySelector("#tishi-1").style.display='none';
    }
    //点击电话icon弹出号码弹窗
    function myFunction() {
            if (screen.width > 1366) {
             document.querySelector("#thpc").style.display='block'; //显示弹窗
             document.querySelector("#weixin").style.display='none';
             document.querySelector("#youxiang").style.display='none';
            }else{
             document.querySelector("#thpe").style.display='block'; //直接显示弹窗
             document.querySelector("#weixin").style.display='none';
             document.querySelector("#youxiang").style.display='none';
      }
    }

    //点击返回后隐藏号码弹窗
     function myTel() {
             document.querySelector("#thpc").style.display='none';
             document.querySelector("#thpe").style.display='none';
    }
    //点击微信icon弹出二维码
    function myWeoxin() {
             document.querySelector("#weixin").style.display='block';
             document.querySelector("#thpc").style.display='none';
             document.querySelector("#thpe").style.display='none';
             document.querySelector("#youxiang").style.display='none';
    }
    //点击X隐藏微信二维码
    function xWeoxin() {
             document.querySelector("#weixin").style.display='none';
    }
    //点击邮箱icon弹出邮箱弹窗
    function myYouxiang() {
             document.querySelector("#youxiang").style.display='block';
             document.querySelector("#thpc").style.display='none';
             document.querySelector("#thpe").style.display='none';
             document.querySelector("#weixin").style.display='none';
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
      document.querySelector("#thpc").style.display='none'; //隐藏号码弹窗
      document.querySelector("#thpe").style.display='none'; //隐藏号码弹窗
      document.querySelector("#copy-1").style.display='block'; //显示复制成功弹窗
      setTimeout(function(){ document.querySelector("#copy-1").style.display='none'; }, 1000); //一秒后隐藏复制成功弹窗
      }else{
      document.querySelector("#thpc").style.display='none'; //隐藏号码弹窗
      document.querySelector("#thpe").style.display='none'; //隐藏号码弹窗
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
	function myZhuti1() {
				mySwiper1.slideTo(0, 500, false);
				document.getElementById("jz").style.backgroundColor ='#2b6584';
				document.body.style.backgroundColor ='#2b6584';
				setTimeout(function(){  document.body.style.backgroundColor ='#eee'; }, 1000);
				document.getElementById("jz-1").src="imges/zhuti-1/jz.gif";
				document.querySelector("#jz").style.display ='block';
				setTimeout(function(){  document.querySelector("#jz").style.display ='none'; }, 1000);
				
				document.getElementById("icon-jianli").src="imges/zhuti-1/jianli.png"; 
				document.getElementById("icon-xtx").src="imges/zhuti-1/xtx.png"; 
				document.getElementById("icon-icon").src="imges/zhuti-1/icon.png"; 
				document.getElementById("icon-banner").src="imges/zhuti-1/banner.png"; 
				document.getElementById("icon-haibao").src="imges/zhuti-1/haibao.png"; 
				document.getElementById("icon-chahua").src="imges/zhuti-1/chahua.png"; 
				document.getElementById("icon-xiangsu").src="imges/zhuti-1/xiangsu.png"; 
				document.getElementById("icon-quanbu").src="imges/zhuti-1/quanbu.png"; 
				document.getElementById("icon-zhuti").src="imges/zhuti-1/zhuti.png"; 
				document.getElementById("icon-dianhua").src="imges/zhuti-1/dianhua.png"; 
				document.getElementById("icon-weixin").src="imges/zhuti-1/weixin.png"; 
				document.getElementById("icon-youxiang").src="imges/zhuti-1/youxiang.png"; 
				document.getElementById("icon-xiazai").src="imges/zhuti-1/xiazai.png"; 
				document.getElementById("c-shouye").src="imges/zhuti-1/shouye-c.png";
				document.getElementById("c-jianli").src="imges/zhuti-1/jianli-c.png";
				document.getElementById("c-xtx").src="imges/zhuti-1/xtx-c.png";
				document.getElementById("c-icon").src="imges/zhuti-1/icon-c.png";
				document.getElementById("c-banner").src="imges/zhuti-1/banner-c.png";
				document.getElementById("c-haibao").src="imges/zhuti-1/haibao-c.png";
				document.getElementById("c-chahua").src="imges/zhuti-1/chahua-c.png";
				document.getElementById("c-xiangsu").src="imges/zhuti-1/xiangsu-c.png";
				document.getElementById("c-quanbu").src="imges/zhuti-1/quanbu-c.png";
				document.getElementById("c-caidan").src="imges/zhuti-1/X.png";
				document.getElementById("thpc").className = "th-dh-1-pc";
				document.getElementById("thpe").className = "th-dh-1-pe";
				document.getElementById("youxiang").className = "youxiang-1";
				document.getElementById("zhuti-1").className = "zhuti-bj-1";
				document.getElementById("zhuti-x").src="imges/zhuti-1/X.png";
				document.getElementById("erweima").src="imges/zhuti-1/erweima.png";
				document.getElementById("weixin-x").src="imges/zhuti-1/X.png";
				document.getElementById("copy-1-1").src="imges/zhuti-1/copy-1.png";
				document.getElementById("copy-2-1").src="imges/zhuti-1/copy-2.png";
				document.getElementById("Stonehearth").src="imges/zhuti-1/Stonehearth.png";
				document.getElementById("StardewValley").src="imges/zhuti-1/Stardew Valley.png";
				document.getElementById("tuya").src="imges/zhuti-1/tuya.png";
				document.getElementById("shigong").src="imges/zhuti-1/shigong.png";
				document.querySelector("#zhuti").style.display ='none';

				document.getElementById("index").className = "swiper-slide index-1-1";
	}
	function myZhuti2() {
				mySwiper1.slideTo(0, 500, false);
				document.getElementById("jz").style.backgroundColor ='#ffd789';
				document.body.style.backgroundColor ='#ffd789';
				setTimeout(function(){  document.body.style.backgroundColor ='#eee'; }, 1000);
				document.getElementById("jz-1").src="imges/zhuti-2/jz.gif";
				document.querySelector("#jz").style.display ='block';
				setTimeout(function(){  document.querySelector("#jz").style.display ='none'; }, 1000);
				
				document.getElementById("icon-jianli").src="imges/zhuti-2/jianli.png"; 
				document.getElementById("icon-xtx").src="imges/zhuti-2/xtx.png"; 
				document.getElementById("icon-icon").src="imges/zhuti-2/icon.png"; 
				document.getElementById("icon-banner").src="imges/zhuti-2/banner.png"; 
				document.getElementById("icon-haibao").src="imges/zhuti-2/haibao.png"; 
				document.getElementById("icon-chahua").src="imges/zhuti-2/chahua.png"; 
				document.getElementById("icon-xiangsu").src="imges/zhuti-2/xiangsu.png"; 
				document.getElementById("icon-quanbu").src="imges/zhuti-2/quanbu.png"; 
				document.getElementById("icon-zhuti").src="imges/zhuti-2/zhuti.png"; 
				document.getElementById("icon-dianhua").src="imges/zhuti-2/dianhua.png"; 
				document.getElementById("icon-weixin").src="imges/zhuti-2/weixin.png"; 
				document.getElementById("icon-youxiang").src="imges/zhuti-2/youxiang.png"; 
				document.getElementById("icon-xiazai").src="imges/zhuti-2/xiazai.png";
				document.getElementById("c-shouye").src="imges/zhuti-2/shouye-c.png";
				document.getElementById("c-jianli").src="imges/zhuti-2/jianli-c.png";
				document.getElementById("c-xtx").src="imges/zhuti-2/xtx-c.png";
				document.getElementById("c-icon").src="imges/zhuti-2/icon-c.png";
				document.getElementById("c-banner").src="imges/zhuti-2/banner-c.png";
				document.getElementById("c-haibao").src="imges/zhuti-2/haibao-c.png";
				document.getElementById("c-chahua").src="imges/zhuti-2/chahua-c.png";
				document.getElementById("c-xiangsu").src="imges/zhuti-2/xiangsu-c.png";
				document.getElementById("c-quanbu").src="imges/zhuti-2/quanbu-c.png";
				document.getElementById("c-caidan").src="imges/zhuti-2/X.png";
				document.getElementById("thpc").className = "th-dh-2-pc";
				document.getElementById("thpe").className = "th-dh-2-pe";
				document.getElementById("youxiang").className = "youxiang-2";
				document.getElementById("zhuti-1").className = "zhuti-bj-2";
				document.getElementById("zhuti-x").src="imges/zhuti-2/X.png";
				document.getElementById("erweima").src="imges/zhuti-2/erweima.png";
				document.getElementById("weixin-x").src="imges/zhuti-2/X.png";
				document.getElementById("copy-1-1").src="imges/zhuti-2/copy-1.png";
				document.getElementById("copy-2-1").src="imges/zhuti-2/copy-2.png";
				document.getElementById("Stonehearth").src="imges/zhuti-2/Stonehearth.png";
				document.getElementById("StardewValley").src="imges/zhuti-2/Stardew Valley.png";
				document.getElementById("tuya").src="imges/zhuti-2/tuya.png";
				document.getElementById("shigong").src="imges/zhuti-2/shigong.png";
				document.querySelector("#zhuti").style.display ='none';

				document.getElementById("index").className = "swiper-slide index-1-2";

 
	}
	function myZhuti3() {
				mySwiper1.slideTo(0, 500, false);
				document.getElementById("jz").style.backgroundColor ='#daf2d2';
				document.body.style.backgroundColor ='#daf2d2';
				setTimeout(function(){  document.body.style.backgroundColor ='#eee'; }, 1000);
				document.getElementById("jz-1").src="imges/zhuti-3/jz.gif";
				document.querySelector("#jz").style.display ='block';
				setTimeout(function(){  document.querySelector("#jz").style.display ='none'; }, 1000);
				
				document.getElementById("icon-jianli").src="imges/zhuti-3/jianli.png"; 
				document.getElementById("icon-xtx").src="imges/zhuti-3/xtx.png"; 
				document.getElementById("icon-icon").src="imges/zhuti-3/icon.png"; 
				document.getElementById("icon-banner").src="imges/zhuti-3/banner.png"; 
				document.getElementById("icon-haibao").src="imges/zhuti-3/haibao.png"; 
				document.getElementById("icon-chahua").src="imges/zhuti-3/chahua.png"; 
				document.getElementById("icon-xiangsu").src="imges/zhuti-3/xiangsu.png"; 
				document.getElementById("icon-quanbu").src="imges/zhuti-3/quanbu.png"; 
				document.getElementById("icon-zhuti").src="imges/zhuti-3/zhuti.png"; 
				document.getElementById("icon-dianhua").src="imges/zhuti-3/dianhua.png"; 
				document.getElementById("icon-weixin").src="imges/zhuti-3/weixin.png"; 
				document.getElementById("icon-youxiang").src="imges/zhuti-3/youxiang.png"; 
				document.getElementById("icon-xiazai").src="imges/zhuti-3/xiazai.png";
				document.getElementById("c-shouye").src="imges/zhuti-3/shouye-c.png";
				document.getElementById("c-jianli").src="imges/zhuti-3/jianli-c.png";
				document.getElementById("c-xtx").src="imges/zhuti-3/xtx-c.png";
				document.getElementById("c-icon").src="imges/zhuti-3/icon-c.png";
				document.getElementById("c-banner").src="imges/zhuti-3/banner-c.png";
				document.getElementById("c-haibao").src="imges/zhuti-3/haibao-c.png";
				document.getElementById("c-chahua").src="imges/zhuti-3/chahua-c.png";
				document.getElementById("c-xiangsu").src="imges/zhuti-3/xiangsu-c.png";
				document.getElementById("c-quanbu").src="imges/zhuti-3/quanbu-c.png";
				document.getElementById("c-caidan").src="imges/zhuti-3/X.png";
				document.getElementById("thpc").className = "th-dh-3-pc";
				document.getElementById("thpe").className = "th-dh-3-pe";
				document.getElementById("youxiang").className = "youxiang-3";
				document.getElementById("zhuti-1").className = "zhuti-bj-3";
				document.getElementById("zhuti-x").src="imges/zhuti-3/X.png";
				document.getElementById("erweima").src="imges/zhuti-3/erweima.png";
				document.getElementById("weixin-x").src="imges/zhuti-3/X.png";
				document.getElementById("copy-1-1").src="imges/zhuti-3/copy-1.png";
				document.getElementById("copy-2-1").src="imges/zhuti-3/copy-2.png";
				document.getElementById("Stonehearth").src="imges/zhuti-3/Stonehearth.png";
				document.getElementById("StardewValley").src="imges/zhuti-3/Stardew Valley.png";
				document.getElementById("tuya").src="imges/zhuti-3/tuya.png";
				document.getElementById("shigong").src="imges/zhuti-3/shigong.png";
				document.querySelector("#zhuti").style.display ='none';

				document.getElementById("index").className = "swiper-slide index-1-3";

 
	}

function myXXX(){
      document.querySelector("#play").style.display='block';
      // document.getElementsByTagName("index").id = "index1";
      
    }