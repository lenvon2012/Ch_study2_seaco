function allbillinfo(e,t){if("Y"==bills_max)return t.disable("down",!1),$(".ui-refresh-down>span:first-child").removeClass(),!1;if("Y"!=bills_max){var n=xigou.getToken(),a={type:type,token:n,curpage:e};xigou.promoterFunc.queryBillInfo({requestBody:a,callback:function(n,a){if(a==xigou.dictionary.success)if(null==n)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var o=n.code;0==o?(setHtmlView(n,e),n.data.curpage>=n.data.totalpagecount&&(t.lock(),$(".dropload-down").hide())):(t.lock(),$(".dropload-down").hide())}}})}}function setHtmlView(e,t){for(var n=["订单提佣","新人注册","退款","提现"],a='<div class="info-item"><img class="info-icon" src="img/accoutinfo-icon.png" /><div class="info-content"><div class="info-content-top"><span class="info-content-text"><%=bussinesstype%></span><span class="info-content-value"><%=amount%></span></div><div class="info-content-bottom"><span class="info-content-text"><%=accounttime%></span><span class="info-content-value">余额:¥<%=surplusamount%></span></div></div></div>',o=[],i=0;i<e.data.list.length;i++){var s=e.data.list[i];s.bussinesstype=2==s.bussinesstype?s.refereeName?s.refereeName:s.refereeNickName:n[--s.bussinesstype];var l=$.tpl(a,s);o.push(l)}(""==e.data.pagesize||0==e.data.pagesize||"0"==e.data.pagesize||e.data.curpage==e.data.totalcount)&&(bills_max="Y"),1==t&&0==o.length?($("#accountInfoList").empty(),$("#accountInfoList").hide(),$("#infoNull").show()):($("#accountInfoList").show(),$("#infoNull").hide(),$("#accountInfoList").append(o.join("")))}function setdefaulesel(e){var t=$(".ui-tab-content")[0],n=$(".ui-tab-nav")[0];$(t.children[0]).removeClass("current"),$(n.children[0]).removeClass("current"),$(t.children[e]).addClass("current"),$(n.children[e]).addClass("current");var a=-1*t.clientWidth*e/3;t.style.transform="translate("+a+"px, 0px)",$(t.children)[0].height="0px"}var type=xigou.getQueryString("type");null==type&&(window.location.href="../logon.html"),$(function(){var e=1;0==type||"0"==type?$(".goBack").attr("href","dsscouponhome.html"):1==type||"1"==type?$(".goBack").attr("href","dsshome.html"):2==type||"2"==type?$(".goBack").attr("href","dssScancodeHome.html"):$(".goBack").attr("href","../home.html"),xigou.getLoginUserInfo({callback:function(t,n){if(n==xigou.dictionary.success){$(".info-list").dropload({scrollArea:window,loadDownFn:function(t){allbillinfo(e,t),t.resetload(),1==e&&$(".dropload-refresh").hide(),e++}});var a=xigou.getQueryString("defaule");a&&setdefaulesel(a)}else window.location.href="../logon.html"}})});var bills_max="N";