function setShopName(e){if(e.mobile||e.shopmobile){$(".default_shop").hide();var i="";i=e.nickname||e.shopnickname?e.nickname||e.shopnickname:e.name,isWeiXin()?i?($(".home-name-val").html(i+"的西客屋"),$("title").html(i+"的西客屋")):$(".home-name-val").html("西客商城"):$(".home-name-val").html(i?i+"的西客屋":"西客商城"),dssIndex()}}function dssIndex(){$("#slider").hide(),$(".ui-header").hide(),$(".div_top_icon").hide(),$(".div_top_icon1").show(),$(".ui-header-a").show(),$(".content").css("margin-top","0px"),$("#backDsshome").attr("href","dss/dsshome.html"),"dsshome"==fromDsshome&&$(".home-name a").addClass("act")}function getDssUserInfo(){var e=xigou.getLocalStorage("dssUser"),i=xigou.getQueryString("shop");if(e&&"{}"!=e){if(e=JSON.parse(e),e.token&&e.token==xigou.getToken()&&(e.mobile||e.shopmobile))return setShopName(e),dssUserMobile=e.mobile||e.shopmobile,void InitPage(dssUserMobile);if(!i)return setShopName(e),dssUserMobile=e.mobile||e.shopmobile,void InitPage(dssUserMobile)}xigou.getDssUserInfo({requestBody:{shop:xigou.getQueryString("shop"),token:xigou.getToken(),priority:0},showLoading:showLoading,callback:function(e,s){s==xigou.dictionary.success&&null!=e&&e.mobile&&(dssUserMobile=e.mobile,0==parseInt(e.source)?dssUserMobile.token=xigou.getToken():dssUserMobile.shop=i,(null==xigou.getLocalStorage("dssUser",!0)||""==xigou.getLocalStorage("dssUser",!0)||"{}"==xigou.getLocalStorage("dssUser",!0)||xigou.getLocalStorage("dssUser",e,!0).mobile!=e.mobile)&&xigou.setLocalStorage("dssUser",e,!0),setShopName(e),InitPage(dssUserMobile))}})}function moduleInfo(){function e(e){if(e&&0!=e.length){var i=[];i.push('<div class="ui-slider">'),i.push('<ul class="ui-slider-content">');for(var o=0;o<e.length;o++){var t=s(e[o]);i.push("<li>"),i.push('	<a href="'+t+'">'),i.push('	<img src="'+e[o].imageurl+'"/>'),i.push("	</a>"),i.push("</li>")}i.push("</ul>"),i.push("</div>"),$("#slider").empty().html(i.join(""));{new fz.Scroll(".ui-slider",{role:"slider",indicator:!0,autoplay:!0,interval:3e3})}}}function i(e){var i=[];$.each(e,function(e,o){var t=o.linkurl||s(o);i.push('<div><a href="'+t+'"><img src="'+o.imageurl+'">'+o.title+"</a></div>")}),i.length>0?($(".div_top_icon").html(i.join("")),$(".div_top_icon").show()):$(".div_top_icon").hide()}function s(e){var i=e.content.text,s=e.content.tid,o=e.content.sku;switch(e.type){case"0":i+=i.indexOf("?")<0?"?mtoapp=0":"&mtoapp=0";break;case"1":i="hd.html?tid="+s+"&from=shop";break;case"2":i="item.html?tid="+s+"&sku="+o;break;case"3":i="spike.html?mtoapp=3";break;case"4":i="cart.html?mtoapp=4";break;case"5":i="logon.html";break;case"6":i="registr.html";break;case"7":i="coupon.html?mtoapp=7";break;case"8":i="coupon.html?mtoapp=7";break;case"9":i="orders.html";break;case"10":i="aftersaleslist.html";break;default:i="javascript:void(0);"}return i}xigou.activeIndex.module({showLoading:showLoading,callback:function(s,o){if(o==xigou.dictionary.success){var t=s||null;if(null==t||0==t.length)return!1;var a=t.code;if(0==a){if(!s.data)return;e(s.data.banners),i(s.data.labs)}}}})}function todayHave(e,i,s){"Y"==todayHave_max&&(isScrolling=!1,$(".dropload-down").hide(),$(".ui-refresh-down>span:first-child").removeClass()),"Y"!=todayHave_max&&xigou.activeIndex.todayHave({p:"curpage="+e+"&shopmobile="+s,showLoading:!1,callback:function(o,t){if(isScrolling=!1,$("#todayNew_product_group_item .ui-refresh-down").remove(),t==xigou.dictionary.success){var a=o||null;if(null==a||0==a.length)return!1;var n=a.code;if(0==n){if("undefined"==typeof o.data){if(todayHave_max="Y",$(".dropload-down").hide(),i&&i.lock(),1==e){$("#indexlists").empty(),$("#indexlists").append('<div class="div_empty"></div>');var l=!1,r=xigou.getLocalStorage("dssUser");r&&"{}"!=r&&(r=JSON.parse(r),r.token&&r.token==xigou.getToken()&&(l=!0)),l?($("#indexlists").append('<div class="div_empty_desc">你还木有可售商品，快去添加哟</div>'),$("#indexlists").append('<a href="dss/hotcommodity.html"><div class="div_go_add">选品上架</div></a>')):$("#indexlists").append('<div class="div_empty_desc">该店铺木有商品哟!</div>')}return}if(null==o.data.list||0==o.data.list.length){if(todayHave_max="Y",$(".dropload-down").hide(),i&&i.lock(),1==e){$("#indexlists").empty(),$("#indexlists").append('<div class="div_empty"></div>');var l=!1,r=xigou.getLocalStorage("dssUser");r&&"{}"!=r&&(r=JSON.parse(r),r.token&&r.token==xigou.getToken()&&(l=!0)),l?($("#indexlists").append('<div class="div_empty_desc">你还木有可售商品，快去添加哟</div>'),$("#indexlists").append('<a href="dss/hotcommodity.html"><div class="div_go_add">选品上架</div></a>')):$("#indexlists").append('<div class="div_empty_desc">该店铺木有商品哟!</div>')}return}if(null!=o.data.list&&o.data.list.length>0){var d=createItemData(o.data.list);1==e&&$("#indexlists").empty(),d.length>0&&$("#indexlists").append(d.join(" ")),$(".ui-imglazyload").imglazyload(),$(".todayHave").each(function(e,i){var s=Date.parse(new Date),o=$(i).attr("endtime");getTimeRest(s,o,$(i))});var c=JSON.stringify(o.data.list);1==e&&xigou.setSessionStorage("speciallist2","");var u=xigou.getSessionStorage("speciallist2");if(u){for(var p=o.data.list,g=JSON.parse(u),h=0,m=p.length;m>h;h++)g.push(p[h]);xigou.setSessionStorage("speciallist2",JSON.stringify(g))}else xigou.setSessionStorage("speciallist2",c);xigou.setSessionStorage("historypage2",e),xigou.setSessionStorage("historypageshop2",s),$(".ui-scroller-a").each(function(e,i){new fz.Scroll(i,{scrollX:!0})})}}}}})}function loadHistoryData(){listCount=xigou.getSessionStorage("historypage2");var e=xigou.getSessionStorage("speciallist2");if(e){var i=JSON.parse(e),s=createItemData(i);if(s.length>0)$("#indexlists").append(s.join(" "));else{$("#indexlists").append('<div class="div_empty"></div>');var o=!1,t=xigou.getLocalStorage("dssUser");t&&"{}"!=t&&(t=JSON.parse(t),t.token&&t.token==xigou.getToken()&&(o=!0)),o?($("#indexlists").append('<div class="div_empty_desc">你还木有可售商品，快去添加哟</div>'),$("#indexlists").append('<a href="dss/hotcommodity.html"><div class="div_go_add">选品上架</div></a>')):$("#indexlists").append('<div class="div_empty_desc">该店铺木有商品哟!</div>')}$(".ui-imglazyload").imglazyload(),$(".todayHave").each(function(e,i){var s=Date.parse(new Date),o=$(i).attr("endtime");getTimeRest(s,o,$(i))});var a=xigou.getSessionStorage("specialid"),n=xigou.getSessionStorage("specialSku");if(n){var l=$('a[href$="'+n+'"]')[0];l&&setTimeout(function(){l.scrollIntoView()},500)}else if(a){var l=$('a[href$="'+a+'"]')[0];l&&setTimeout(function(){l.scrollIntoView()},500)}$(".ui-scroller-a").each(function(e,i){new fz.Scroll(i,{scrollX:!0})}),xigou.setSessionStorage("specialid",""),xigou.setSessionStorage("specialSku","")}}function solveNull(e,i){return null==e||"undefined"==typeof e?i:e}function InitWeixin(){xigou.loading.open(),showLoading=!1;var e=[],i=location.href.split("#")[0].replace(/&+/g,"%26");e.push("url="+i),imgUrl=xigou.activeHost+"img/bg_style1.png",xigou.activeUser.config({p:e.join("&"),showLoading:!1,callback:function(e,i){if(i==xigou.dictionary.success&&e&&0==e.code){var s=e.data;wx.config({appId:s.appid,timestamp:s.timestamp,nonceStr:s.nonceStr,signature:s.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode"]})}}})}function wxunionlogin(e){if(!isWeiXin())return void forceBindTel();var i=xigou.getLocalStorage("token");if(i)return void forceBindTel();var s=xigou.getLocalStorage("openid"),o={uniontype:"1",unionval:s,signature:"af288db869b27f21cc1440385d63d4d5",curtime:(new Date).valueOf().toString()};e&&(o.shopMobile=e),xigou.activeUser.unionlogon({requestBody:o,showLoading:!1,callback:function(e,i){if(i==xigou.dictionary.success&&0==e.code){if(e.data.promoterinfo&&"{}"!=e.data.promoterinfo){var s=JSON.parse(e.data.promoterinfo);s.token=e.data.token,xigou.setLocalStorage("dssUser",s,!0),setShopName(s)}var o={token:e.data.token,telephone:e.data.tel,name:e.data.name};xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",o,!0),xigou.setLocalStorage("show_name",e.data.tel||e.data.name),xigou.setLocalStorage("token",e.data.token),forceBindTel()}}})}function forceBindTel(){xigou.forceBindTel({callback:function(){InitPage(dssusermobile)}})}function InitPage(e){if(e){xigou.setSessionStorage("productdetails_backurl",window.location.href),$("#slider").hide();var i=xigou.getLocalStorage("dssUser");if(i){var s=JSON.parse(i);showFlag=s.mobile&&s.token?!0:!1,showFlag&&$(".div_icon").show()}var i=xigou.getLocalStorage("dssUser");if(i){var s=JSON.parse(i);showFlag=s.mobile&&s.token?!0:!1,showFlag?$(".div_icon").show():($(".dsshomeBtn").hide(),$(".home-name").addClass("centerAlign"))}$(".dropload-refresh").hide(),xigou.getSessionStorage("speciallist2")&&(null==e&&"null"==xigou.getSessionStorage("historypageshop2")||xigou.getSessionStorage("historypageshop2")==e)?loadHistoryData():todayHave(listCount,null,e),listCount++,$(".content").dropload({scrollArea:window,loadDownFn:function(i){i.resetload(),todayHave(listCount,i,e),listCount++}}),isWeiXin()&&InitWeixin()}}function createItemData(e){var i=[];return $.each(e,function(s,o){if(1==o.type){firstssale&&(firstssale=!1,i.push('<div class="div_star"></div>'));var t=o.price.split(".")[0]||"00",a=o.price.split(".")[1]||"00";o.countryname||(o.countryname=""),o.channel||(o.channel=""),i.push('<a href="item.html?tid='+o.tid+"&sku="+o.sku+'">'),i.push(s<e.length-1&&e[s+1].type&&1==e[s+1].type?'<div class="div_item ssale_desc_bottom">':'<div class="div_item">'),i.push('		<div class="div_item_img">'),i.push('			<img src="'+o.imgurl+'">'),i.push("		</div>"),i.push('		<div class="div_item_desc">'),i.push('			<div class="div_desc">'),o.countryimg&&i.push('<img class="contry-img" src="'+o.countryimg+'">'),o.countryname&&i.push('<span class="country-info">'+o.countryname+"</span>"),o.channel&&i.push('<span class="country-info">'+o.channel+"</span>"),i.push("			</div>"),i.push('			<div class="div_name">'+o.name+"</div>"),i.push("		</div>"),i.push('		<div class="div_price_info">'),i.push('			<div class="new_price">¥<span>'+t+"</span>."+a+"</div>"),i.push(dssUserMobile&&o.commision&&showFlag?'<div class="old_price"><span>¥'+o.oldprice+' </span>&nbsp;&nbsp;返佣：<span class="return">¥'+o.commision+"</span></div>":'<div class="old_price"><span>¥'+o.oldprice+" </span></div>"),i.push("		</div>"),i.push("	</div>"),i.push("</a>")}else if(2==o.type){i.push('<a href="hd.html?tid='+o.tid+'&from=shop" class="hot_link"">'),i.push(o.itemlist&&o.itemlist.length>0?'<p class = "div_img">':'<p class = "div_img div_none_item">'),i.push('	<img class="ui-imglazyload" data-url="'+o.imgurl+'"/>'),i.push("</a>"),i.push("</p>");var n=Math.round($(".content").width()/2.6),l=Math.round(n+70);if(dssUserMobile&&showFlag&&(l+=15),o.itemlist&&o.itemlist.length>0){i.push('<div style = "height:'+l+'px" class="ui-scroller-a seckill-new-container">'),i.push('<ul class="ui-slider-content">');for(var r=o.itemlist,d=0;d<r.length;d++){var c=r[d].price.split(".")[0],u=r[d].price.split(".")[1];i.push('<li style = "width:'+n+'px"><a style="display:block;width:100%;height:'+n+'px;overflow: hidden;" href="item.html?tid='+r[d].tid+"&sku="+r[d].sku+'"><img src = '+r[d].imgurl+" /></a>"),i.push('<div class="seckill-item-price">'),i.push('<span class="seckill-new-title">'+r[d].name+"</span>"),i.push('<span class="seckill-new-price"><b class = "mS">¥</b>'+c+'<b class = "mB">.'+u+'</b><b class="mS" style = "padding-left:0.5em;color:#999;text-decoration:line-through;">¥'+r[d].oldprice+"</b></span>"),dssUserMobile&&r[d].commision&&showFlag&&i.push('<span class="span_return">返佣：<span>¥'+r[d].commision+"</span></span>"),i.push("</div></li>")}i.push('<li><a href="hd.html?tid='+o.tid+'&from=shop"><img src = "img/zt_more.png" /></a></li>'),i.push("</ul>"),i.push("</div>")}}}),i}var refreshComp,myScroll,listCount=1,firstssale=!0,firsttun=!0,imgUrl="",dssUserMobile=null,fromDsshome=xigou.getQueryString("from"),showFlag="",showLoading=!0;$(function(){isWeiXin()&&($(".ui-header").hide(),$(".content").css({"margin-top":"0"}),$(".home-name").addClass("home-name_wx")),getDssUserInfo(),isWeiXin()||($(".home-name").removeClass("home-name_wx"),window.onscroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;e>30?$(".home-name").addClass("fixed"):30>e&&$(".home-name").removeClass("fixed")})});var todayHave_max="N";wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType","previewImage"],success:function(){}});var e=location.href.split("?")[0];null!=dssUserMobile&&"undefined"!=dssUserMobile&&""!=dssUserMobile&&(e=e+"?shop="+dssUserMobile);var i="西客商城｜是电商，也是shopping mall",s="全国首家跨境生活综合体，线下商场与线上商城，同步更新，同享优惠。现在注册，立享150元优惠券，3月更多活动，精彩不断。";wx.onMenuShareAppMessage({title:i,desc:s,link:e,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareTimeline({title:i,link:e,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQQ({title:i,desc:s,link:e,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareWeibo({title:i,desc:s,link:e,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQZone({title:i,desc:s,link:e,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),xigou.loading.close(),xigou.wxreadyalert()}),wx.error(function(){});