function details(e){var i={p:"tid="+specialid,showLoading:showLoading,callback:function(i,t){if(t==xigou.dictionary.success){var o=i||null;if(null==o||0==o.length)return!1;if(0==o.code){if(o.data.status&&0==parseInt(o.data.status))return void(window.location.href="specialsaleend.html?specialname="+o.data.name);"全球购商城"==title&&o.data.name&&(title=o.data.name),void 0!=typeof tophtml&&$(".hd-tophtml").append(o.data.tophtml),$("title").text(o.data.name);var s=[];$("#headerImage").append(o.data.shareurl),s.push('<div class="floor_top_filter">'),s.push('<div class="filter_box">'),s.push('	<div class="filter_box_right" style="width:44%">'),s.push('		<span class="filter_price" id="order_price">价格<u></u></span>'),s.push("	</div>"),s.push("</div>"),s.push("</div>"),$("#details").append(s.join("")),$(".ui-imglazyload").imglazyload(),$("#headerTitle").html(o.data.name),order_price(e);var a=$(".zhuangchang"),n=Date.parse(new Date),r=($(a).attr("starttime"),$(a).attr("endtime"));parseInt(r-n)/1e3/60/60/24<=7&&getTimeRest(n,r,$(a),!0),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var l=$('script[src*="bokecc.com"]');if(l&&0!=l.length){var d=document.createElement("script");d.src=l[0].src;var c=$("#headerImage")[0];c.appendChild(d),l.remove()}var u=$("img")[0];u&&(imgUrl=u.getAttribute("src"))}}}};haitao?xigou.activeSpecialsale.htdetails(i):xigou.activeSpecialsale.details(i)}function product(e,i,t){if(t&&"Y"==specialsale_max)return t&&t.lock(),!1;"undefined"==typeof i&&(i="");var o=[];o.push("tid="+specialid),o.push("curpage="+e),o.push("sort="+i),o.push("shopmobile="+shopMobileVal);var s={p:o.join("&"),showLoading:!1,callback:function(i,o){if(o==xigou.dictionary.success){var s=i||null;if(null==s||0==s.length)return!1;if(0==s.code){if(o==xigou.dictionary.success){var s=i||null;if(null==s||0==s.length)return!1;if(0==s.code){{var a=[],n=s.data.list,r=!1;xigou.default_img}if("undefined"==typeof i.data||""==i.data||"undefined"==typeof i.data.list||0==i.data.list.length)t.lock(),$(".dropload-down").hide();else{for(var l=0;l<n.length;l++){var d=n[l].imgurl||xigou.default_img,c=specialid,u=n[l].sku,p="item.htm?tid="+c+"&sku"+u;shop&&(p=p+"&shop="+shop);var g="00",h="00",f=n[l].price.split(".");f.length>0&&(g=f[0],f.length>1&&(h=f[1])),a.push('<div class="product_item">'),a.push('	<div class="product_item_box" tid="'+c+'" sku="'+u+'">'),a.push(shop?'		<a href="item.htm?tid='+c+"&sku="+u+"&shop="+shop+'">':'		<a href="item.htm?tid='+c+"&sku="+u+'">'),a.push('			<img class="product_img" src="'+d+'" >'),a.push('			<div class="product_name">'+n[l].name+"</div>"),a.push('			<div class="product_price">¥<span class="product_price_yuan">'+g+"</span>."+h+"&nbsp;"),a.push('				<span class="product_old_price">¥'+n[l].oldprice+"</span>"),a.push("			</div>"),a.push('			<div class = "fy_price" style = "display: none;">返佣:¥<span>'+n[l].commision+"</span></div>"),a.push("		</a>"),a.push("	</div>"),a.push("</div>")}1==e&&$("#hd-products-id").empty(),$("#hd-products-id").append(a.join(" ")),$(".product_item")[xigou.events.click](function(){}),$(".ui-imglazyload").imglazyload(),$(".store_timer").each(function(e,i){var t=$(i).attr("starttime"),o=$(i).attr("endtime");getTimeRest(t,o,$(i))}),s.data.list.length>0&&($(".ui-refresh-down").show(),r=!0),s.data.totalpagecount==e&&(specialsale_max="Y"),(window.location.href.indexOf("=6885")>-1||window.location.href.indexOf("=7498")>-1||window.location.href.indexOf("=7348")>-1||window.location.href.indexOf("=7707")>-1)&&(xigou.setSessionStorage("comeFromAd","1"),$(".floor_top_filter").addClass("hide"),$(".products_list").addClass("hide"));var m=xigou.getSessionStorage("hdlistid"),v=JSON.stringify(n);(1==e||m!=specialid)&&xigou.setSessionStorage("hdlist","");var x=xigou.getSessionStorage("hdlist");if(x){for(var S=JSON.parse(x),_=0,w=n.length;w>_;_++)S.push(n[_]);xigou.setSessionStorage("hdlist",JSON.stringify(S))}else xigou.setSessionStorage("hdlist",v);xigou.setSessionStorage("historyhdpage",e),xigou.setSessionStorage("hdlistid",specialid)}}else t.lock(),$(".dropload-down").hide()}}}}};xigou.activeSpecialsale.product(s)}function order_price(e){$(".div_sort")[xigou.events.click](function(){switch(isascending){case"0":isascending="1",$(this).addClass("div_sort_down"),$(this).removeClass("div_sort_up");break;case"1":isascending="2",$(this).removeClass("div_sort_down"),$(this).addClass("div_sort_up");break;case"2":isascending="0",$(this).removeClass("div_sort_down"),$(this).removeClass("div_sort_up")}specialsale_max="N",listCount=1,$("#hd-products-id").empty(),e.unlock(),e.resetload(),product(listCount++,isascending,e)})}function getDssUserInfo(){var e=xigou.getLocalStorage("dssUser");if(e&&"{}"!=e){if(e=JSON.parse(e),e.token&&e.token==xigou.getToken())return void(shopOwer=e.mobile||e.shopmobile);if(!xigou.getQueryString("shop"))return void(shopOwer=e.mobile||e.shopmobile)}xigou.getDssUserInfo({requestBody:{shop:xigou.getQueryString("shop"),token:xigou.getToken(),priority:0},callback:function(e,i){i==xigou.dictionary.success&&null!=e&&e.mobile&&(shopOwer=e.mobile,0==parseInt(e.source)?e.token=xigou.getToken():e.shop=xigou.getQueryString("shop"),(null==xigou.getLocalStorage("dssUser",!0)||""==xigou.getLocalStorage("dssUser",!0)||"{}"==xigou.getLocalStorage("dssUser",!0)||xigou.getLocalStorage("dssUser",e,!0).mobile!=e.mobile)&&xigou.setLocalStorage("dssUser",e,!0))}})}function InitWeixin(){showLoading=!1,xigou.loading.open();var e=[],i=location.href.split("#")[0].replace(/&+/g,"%26"),t=xigou.channelcode;if("hhb"==t){var o=xigou.getLocalStorage("login_name");e.push("url="+i+"&tel="+o)}else e.push("url="+i);xigou.activeUser.config({p:e.join("&"),showLoading:!1,callback:function(e,i){if(i==xigou.dictionary.success&&e&&0==e.code){var t=e.data;wx.config({appId:t.appid,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","onMenuShareQZone","scanQRCode"]})}}})}function loadHistoryData(){listCount=xigou.getSessionStorage("historyhdpage");var e=xigou.getSessionStorage("hdlist");if(e){for(var i=JSON.parse(e),t=[],o=0,s=i.length;s>o;o++){var a=i[o].imgurl||xigou.default_img,n=specialid,r=i[o].sku,l="00",d="00",c=i[o].price.split(".");c.length>0&&(l=c[0],c.length>1&&(d=c[1])),t.push('<div class="product_item">'),t.push('	<div class="product_item_box" tid="'+n+'" sku="'+r+'">'),t.push(shop?'		<a href="item.htm?tid='+n+"&sku="+r+"&shop="+shop+'">':'		<a href="item.htm?tid='+n+"&sku="+r+'">'),t.push('			<img class="product_img" src="'+a+'" >'),t.push('			<div class="product_name">'+i[o].name+"</div>"),t.push('			<div class="product_price">¥<span class="product_price_yuan">'+l+"</span>."+d+"&nbsp;"),t.push('				<span class="product_old_price">¥'+i[o].oldprice+"</span>"),t.push("			</div>"),t.push('			<div class = "fy_price" style = "display: none;">返佣:¥<span>'+i[o].commision+"</span></div>"),t.push("		</a>"),t.push("	</div>"),t.push("</div>")}$("#hd-products-id").empty().append(t.join(" "));var n=xigou.getSessionStorage("specialid"),r=xigou.getSessionStorage("specialSku");if(n==specialid&&r){var u=$('a[href$="'+r+'"]')[0];u&&setTimeout(function(){u.scrollIntoViewIfNeeded()},500)}}}function Initkf(){var e="["+xigou.getSessionStorage("eshopName")+"]"+(xigou.getLocalStorage("show_name")||xigou.getLocalStorage("login_name")||"会员");if(e){var i=document.createElement("script");i.type="text/javascript",i.src="https://qiyukf.com/script/6e39dddabff63d902f55df3961c2793d.js?name="+e+"&mobile="+e,$("body")[0].appendChild(i)}$("body").append('<div class="kt-btn" id="header_img2" onclick="ysf.open();return false;"></div><div class="header_imgs header_img2" id="header_img2" style="display:none;" onclick="ysf.open();return false;"></div>')}var specialid=xigou.getQueryString("tid");specialid.indexOf("#")>-1&&(specialid=specialid.substring(0,specialid.indexOf("#")));var shop=xigou.getQueryString("shop");xigou.setSessionStorage("specialid",specialid),xigou.setSessionStorage("shop",shop);var brandStory="",tmnotice=xigou.getQueryString("tmnotice"),isTmrNotice=0;""!=tmnotice&&(isTmrNotice=1);var refreshComp;tmnotice=tmnotice?"&tmnotice="+tmnotice:"";var haitao=xigou.getQueryString("haitao"),comefromAd=xigou.getSessionStorage("comeFromAd"),isascending="0",title="",desc="",imgUrl="",listCount=1,showLoading=!0,shopMobileVal=null;$(function(){var e=xigou.getQueryString("tel");if(null!=e&&""!=e&&xigou.setSessionStorage("tel",e),isWeiXin()){var i=xigou.getSessionStorage("channelInfo");if(i){var t=JSON.parse(i);title=t.sharetitle,desc=t.sharecontent}InitWeixin()}var o=xigou.getLocalStorage("dssUser");if(o&&"{}"!=o){var s=JSON.parse(o);shopMobileVal=s&&s.mobile&&s.token?s.mobile:null}var a=$(".body").dropload({scrollArea:window,loadDownFn:function(e){1==listCount&&xigou.getSessionStorage("hdlist")&&specialid==xigou.getSessionStorage("hdlistid")?loadHistoryData():product(listCount,isascending,e),listCount++,e.resetload()}});getDssUserInfo(),details(a),shop?xigou.setSessionStorage("productdetails_backurl","hd.htm?tid="+specialid+"&shop="+shop+"&tel="+xigou.getLocalStorage("login_name")):xigou.setSessionStorage("productdetails_backurl","hd.htm?tid="+specialid+"&tel="+e),"shop"==xigou.getQueryString("from")&&$("a.hd-back").attr("href","shop.html"),Initkf()});var specialsale_max="N",shopOwer=null;wx.ready(function(){wx.checkJsApi({jsApiList:["getNetworkType","previewImage"],success:function(){}});var e=xigou.getQueryString("tid"),i=location.href.split("?")[0]+"?tid="+e;shopOwer&&(i=i+"&shop="+shopOwer),wx.onMenuShareAppMessage({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareTimeline({title:title,link:i,imgUrl:imgUrl,trigger:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQQ({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareWeibo({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),wx.onMenuShareQZone({title:title,desc:desc,link:i,imgUrl:imgUrl,trigger:function(){},complete:function(){},success:function(){},cancel:function(){},fail:function(){}}),xigou.loading.close(),xigou.wxreadyalert()}),wx.error(function(){});var beforeUrl=document.referrer;beforeUrl.indexOf("51seaco.com")>0?$(".group-back").attr("href","javascript:history.go(-1);"):$(".group-back").attr("href","index.html");