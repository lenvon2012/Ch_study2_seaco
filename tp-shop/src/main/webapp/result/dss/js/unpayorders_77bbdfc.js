function unpayOrders(e,s){if("Y"==unpayorder_max)return s.disable("down",!1),$(".ui-refresh-down>span:first-child").removeClass(),!1;if("Y"!=unpayorder_max){var r=xigou.getToken(),a={token:r,orderstatus:2,curpage:e,type:type};xigou.promoterFunc.queryOrders({requestBody:a,callback:function(r,a){if(a==xigou.dictionary.success)if(null==r)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var t=r.code;0==t?(setUnpayOrderHtmlView(r,e),r.data.curpage>=r.data.totalpagecount&&(s.lock(),$(".dropload-down").hide())):(s.lock(),$(".dropload-down").hide())}}})}}function setUnpayOrderHtmlView(e,s){for(var r=e,a=r.data.list.length,t=(r.allpage,r.count,r.data.list),o=[],d=0;a>d;d++){o.push('<div class="orders-item" ordercode="'+t[d].ordercode+'">'),o.push('	<div class="order_time_status">'+t[d].ordertime),t[d].statusdesc||(t[d].statusdesc=" "),o.push('		<span class="order_status">'+t[d].statusdesc+"</span></div>");for(var i=0;i<t[d].lines.length;i++){var n=t[d].lines[i];o.push('<div class="order_info" sku="'+n.sku+'" tid = '+n.tid+">"),o.push('	<div class="order_image">'),o.push('		<img src="'+n.imgurl+'">'),o.push("	</div>"),o.push('	<div class="oder_info2">'),o.push('		<div class="order_name_price">'),o.push('			<div class="order_price">¥'+n.price+"</div>"),o.push('			<div class="order_name">'+n.name+"</div>"),o.push("		</div>"),o.push('		<div class="order_size_count">'),o.push('			<div class="order_count">×'+n.count+"</div>"),n.specs.length>0&&o.push("			<div>"+n.specs[0]+"</div>"),o.push("		</div>"),o.push("	</div>"),o.push("</div>")}o.push('	<div class="order_totle_count_price">'),o.push('		<span class="float_right ">共 '+t[d].linecount+' 件 实付：<span class="order_lineprice">¥'+t[d].orderprice+"</span></span>"),o.push("	</div>"),o.push('<div class="order_incomes">'),o.push('<div class="bottom_income">'),o.push('<span class="bottom_income_text">收入：</span>'),o.push('<span class="bottom_income_value">+'+t[d].commision+"</span>"),o.push("</div>"),o.push("</div>"),o.push("</div>")}if((""==e.data.pagesize||0==e.data.pagesize||"0"==e.data.pagesize||e.data.curpage==e.data.totalcount)&&(unpayorder_max="Y"),1==s&&0==o.length){$(".orders-pending").empty();var p=[];p.push('<div class="order_empty"><div class="empty-tip">还木有订单哟~</div></div>'),$(".orders-pending").append(p.join(""))}else $(".orders-pending").append(o.join(""))}function setdefaulesel(e){var s=$(".ui-tab-content")[0],r=$(".ui-tab-nav")[0];$(s.children[0]).removeClass("current"),$(r.children[0]).removeClass("current"),$(s.children[e]).addClass("current"),$(r.children[e]).addClass("current");var a=-1*s.clientWidth*e/3;s.style.transform="translate("+a+"px, 0px)",$(s.children)[0].height="0px"}var type=xigou.getQueryString("type");null==type&&(window.location.href="../logon.html"),$(function(){var e=1;0==type||"0"==type?$(".goBack").attr("href","dsscouponhome.html"):1==type||"1"==type?$(".goBack").attr("href","dsshome.html"):2==type||"2"==type?$(".goBack").attr("href","dssScancodeHome.html"):$(".goBack").attr("href","../home.html"),xigou.getLoginUserInfo({callback:function(s,r){if(r==xigou.dictionary.success){$(".orders-pending").dropload({scrollArea:window,loadDownFn:function(s){unpayOrders(e,s),s.resetload(),1==e&&$(".dropload-refresh").hide(),e++}});var a=xigou.getQueryString("defaule");a&&setdefaulesel(a)}else window.location.href="../logon.html"}})});var unpayorder_max="N";