function dssLogin(){var o=xigou.getToken(),e={token:o};xigou.promoterFunc.dssLogin({requestBody:e,callback:function(o,e){if(e==xigou.dictionary.success){{$(".home-top").height()}if(null!=o&&0==o.code){var i=o,n=null!=i.data.isshopdss&&1==i.data.isshopdss,s=null!=i.data.iscoupondss&&1==i.data.iscoupondss,t=null!=i.data.isscandss&&1==i.data.isscandss,a="",c=0;n&&(a='<div class="myDss"><i></i><div>我的西客</div></div>',c++),s&&(a+='<div class="myCard"><i></i><div>我的卡券</div></div>',c++),t&&(a+='<div class="myScanCode"><i></i><div>我的推广码</div></div>',c++),$(".div_dss_info ").append(a),c>1&&($(".div_dss_info").removeClass("show_arr"),$(".div_dss_info > div > div").eq(0).addClass("bdr"),c>2&&$(".div_dss_info > div >div").eq(1).addClass("bdr")),$(".myDss")[xigou.events.click](function(){setTimeout(function(){window.location.href="dss/dsshome.html"},250)}),$(".myCard")[xigou.events.click](function(){setTimeout(function(){window.location.href="dss/dsscouponhome.html"},250)}),$(".myScanCode")[xigou.events.click](function(){setTimeout(function(){window.location.href="dss/dssScancodeHome.html"},250)})}}bindState()}})}function initUserInfo(){xigou.activeUser.initCount({requestBody:{token:xigou.getToken()},callback:function(o,e){if(e==xigou.dictionary.success)if(null==o)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else if("0"==o.code){o.data.unpaycount>0?($(".home-unpay").html(o.data.unpaycount),$(".home-unpay").show()):$(".home-unpay").hide(),o.data.unreceiptcount>0?($(".home-unrecv").html(o.data.unreceiptcount),$(".home-unrecv").show()):$(".home-unrecv").hide(),o.data.unusecount>0?($(".home-unuse").html(o.data.unusecount),$(".home-unuse").show()):$(".home-unuse").hide(),o.data.couponcount>0&&$(".coupon_count").html(o.data.couponcount+"张");var i=xigou.getLocalStorage("show_name")||xigou.getLocalStorage("login_name")||"西客会员",n=xigou.getLocalStorage("wxnickname")||xigou.getLocalStorage("show_name")||xigou.getLocalStorage("login_name")||"西客会员";if(i){var s=document.createElement("script");s.type="text/javascript",s.src="https://qiyukf.com/script/6e39dddabff63d902f55df3961c2793d.js?name="+i+"&mobile="+i,$("body")[0].appendChild(s)}n&&($(".home-name")[0].innerHTML=n);var t=xigou.getLocalStorage("wxImage");t&&($("div.div_icon_bg img").attr("onerror","this.onerror=null;this.src='img/home/icon.png';xigou.removelocalStorage('wxImage');"),$("div.div_icon_bg img").attr("src",t)),dssLogin()}else"-100"==o.code&&(window.location.href="logon.html")}})}function bindState(){var o={token:xigou.getToken()},e={requestBody:o,callback:function(o,e){if(e==xigou.dictionary.success)if(null==o)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var i=o.code;0==i&&$("#bindTel a").attr("href","changeTel.html?mobile="+o.data.tel)}else $.tips({content:"请求失败，详见"+o,stayTime:2e3,type:"warn"})}};xigou.activeUser.logon(e)}$(function(){var o=xigou.getSessionStorage("success"),e=$(window).width()/2-59;$(".tips").css({left:e+"px"}),void 0!=o&&null!=o&&""!=o&&($(".tips").show(),xigou.removeSessionStorage("success")),xigou.getLoginUserInfo({callback:function(o,e){e!=xigou.dictionary.success?(xigou.setSessionStorage("loginjump_url","home.html"),window.location.href="logon.html"):(initUserInfo(),isWeiXin()&&$("#bindTel").show())}}),isWeiXin()||(window.onscroll=function(){var o=document.documentElement.scrollTop||document.body.scrollTop;o>10?$(".home-name").addClass("fixed"):30>o&&$(".home-name").removeClass("fixed")})});