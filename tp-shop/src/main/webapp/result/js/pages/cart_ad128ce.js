function initCart(){$("#origin_tab li").removeClass("active").eq(1).addClass("active"),$(".floor_origin").removeClass("hide").eq(0).addClass("hide"),$(".total_fixed_left").removeClass("hide").eq(0).addClass("hide"),loadCart()}function GetTabGroupMoney(){return"seaGroupMoney"}function goHome(){var t=$(".ui-btn-primary");t[xigou.events.click](function(){window.location.href="index.html"})}function shopcart(){var t=$("#shopcart-settle");t.unbind("ontouchend"in document?"tap":"click"),t[xigou.events.click](function(){var t=$(".cart-list input:checked"),e=t.parents(".div_check_box").siblings(".ui-list-item-info").find(".cart_shop_opt"),i=[];if($.each(e,function(){var t={};t.sku=$(this).attr("sku"),t.tid=$(this).attr("tid"),t.count=$(this).find(".car_item").text(),i.push(t)}),0!=i.length){if(0==$("#shopcart-settle").hasClass("disabled")){var a={eshopPromoterId:shopId,products:i,type:"7",token:xigou.getToken()};xigou.activeShoppingCart.authprice({requestBody:a,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i||0==i.length)return!1;if(0==i.code)xigou.removeClearingData(),window.location.href="settle.html?from=cart";else{var a=$.dialog({title:"",content:i.msg,button:["确认"]});a.on("dialog:action",function(t){1==t.index})}}}})}}else{console.log(i.length);{$.dialog({title:"",content:"请选择至少一款商品",button:["确认"]})}}})}function loadCart(){var t={eshopPromoterId:shopId,token:xigou.getToken()};xigou.activeShoppingCart.loadCart({requestBody:t,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i||0==i.length)return!1;0==i.code&&(GroupBackFun(i.data),needSelectAll(this))}}})}function GroupBackFun(t){for(var e=[],i=[],a=0;a<t.mergeitems.length;a++){var s=t.mergeitems[a],n=parseInt(0);e.push('<li class="clearfix div_channel" channelcode="'+s.channelcode+'" warehouseid="'+s.warehouseid+'">'),e.push('	<div class="div_item_channel" channelcode="'+s.channelcode+'">'+s.channel+"</div>"),e.push('	<ul class="ui-list">');for(var c=0;c<s.products.length;c++){var l=s.products[c],o="item.htm?sku="+l.sku+"&tid="+l.tid+"&url=cart.html";e.push('<li class="li-item-info" tid="'+l.tid+'" sku="'+l.sku+'">'),e.push('	<div class="div_check_box">'),e.push('		<div class="ui-checkbox">'),e.push("1"==l.selected?'			<label class="ui-checkbox-s"><input type="checkbox" checked="checked" onclick="productSelectChange(this)"></label>':'			<label class="ui-checkbox-s"><input type="checkbox" onclick="productSelectChange(this)"></label>'),e.push("		</div>"),e.push("	</div>"),e.push('	<div class="ui-list-item-info">'),e.push('		<div class="ui-list-img">'),e.push('			<a href="'+o+'"><img src="'+l.imgurl+'" alt="" ></a>'),e.push("		</div>"),e.push('		<div class="ui-list-info">'),e.push('			<div class="delete"><img src="img/delete.png" sku="'+l.sku+'" tid="'+l.tid+'" alt="" onclick="del(this,0);"></div>'),e.push('			<span class="delete_span"></span>'),e.push('			<div class="cart_product_name">'),e.push('				<a href="'+o+'">'+l.name+"</a>"),e.push("			</div>");var r="";l.taxrate&&(r="税率:"+parseInt(l.taxrate)+"% "),l.limitcount&&(r+="限购:"+solveNull(l.limitcount,"")+"件"),e.push('			<div class="cart_product_spe">'+r+"</div>"),e.push("			<div>");var u=l.limitcount?l.limitcount:parseInt(data[a].stock)>99?99:data[a].stock;e.push('				<div class="cart_shop_opt" maxnum="'+u+'" price="'+l.lineprice+'" oldprice="'+l.oldprice+'" sku="'+l.sku+'" tid="'+l.tid+'">'),e.push("1"==l.count?'<a href="javascript:void(0);" class="quantity_decrease disabled">-</a>':'<a href="javascript:void(0);" class="quantity_decrease">-</a>'),e.push('					<intput class="car_item quantity_txt" maxlength="'+l.count+'" readyonly="readyonly">'+l.count+"</intput>"),e.push(parseInt(l.count)==parseInt(u)?'<a href="javascript:void(0);" class="quantity_increase disabled">+</a>':'<a href="javascript:void(0);" class="quantity_increase">+</a>'),e.push("					</div>");var d=l.lineprice.split(".")[0]||"00",p=l.lineprice.split(".")[1]||"00";e.push('					<div class="line_price"><span class="product-price">¥<span class="product-price1">'+d+"</span>."+p+"</span>"),e.push("				</div>"),e.push("			</div>"),e.push("		</div>"),e.push("	</div>"),e.push("</li>"),"1"==l.selected&&(n+=parseInt(l.count))}e.push("	</ul>"),e.push('	<div class="div_sel_channel_info">'),e.push('		<div class="sel-count">已选'+n+"件</div>"),e.push('		<div class="sel_info">'),e.push('			<div class="sel_info_tax">税费<span>¥'+s.taxes+"</span></div>"),e.push('			<div class="sel_info_price">总计<span>¥'+s.price+"</span></div>"),e.push("		<div>"),e.push("	<div>"),e.push("</li>")}for(var a=0;a<t.invaliditems.length;a++){var h=t.invaliditems[a],v=h.sku,g=h.tid,d=h.lineprice.split(".")[0]||"00",p=h.lineprice.split(".")[1]||"00",o="item.htm?sku="+h.sku+"&tid="+h.tid+"&url=cart.html";i.push('<li class="ui-border-t clearfix">'),i.push('	<div class="invalid_label"></div>'),i.push('	<div class="ui-list-img">'),i.push('		<a href="'+o+'">'),i.push('			<img src="'+h.imgurl+'" alt="alt" width="90" height="90"/>'),i.push("		</a>"),i.push('		<div class="ui-list-img-gray2">'+h.statusdesc+"</div>"),i.push("	</div>"),i.push('	<div class="ui-list-info">'),i.push('		<div class="delete">'),i.push('			<img src="img/delete.png" style="width: 12px;height: 12px;display: block"  sku='+v+" tid="+g+' alt="" onclick="del(this,0);"/>'),i.push("		</div>"),i.push('		<span class="delete_span"></span>'),i.push('		<div class="cart_product_name">'),i.push('			<a href="'+o+'">'+h.name+"</a>"),i.push("		</div>");var r="";h.taxrate&&(r="税率:"+parseInt(h.taxrate)+"% "),h.limitcount&&(r+="限购:"+solveNull(h.limitcount,"")+"件"),i.push('		<div class="cart_product_spe">'+r+"</div>"),i.push("		<div>"),i.push('			<span class="product-invalid-price">¥<span class="product-price1">'+d+"</span>."+p+"</span>"),i.push("		</div>"),i.push("	</div>"),i.push("</li>")}0!=t.mergeitems.length&&($("#cart-list").append(e.join(" ")),$("#cart-list").show(),$(".cartnull").hide()),0!=t.invaliditems.length&&($(".cartnull").hide(),$(".car_invalid").show(),$(".warm_tip").hide(),$(".split_bg").hide(),$("#cart-invalid-list").append(i.join(" "))),0==t.mergeitems&&0==t.invaliditems&&($(".cartnull").show(),$("#cart-list").hide(),$(".warm_tip").hide(),$(".split_bg").hide(),goHome()),$(".cart_shop_opt").cartshopopt(function(t,e,i){editNumFun(i,t)}),setTotalMoney(t.totalprice,t.disprice)}function editNumFun(t,e){var i=($(t).parent(),$(t).parents(".car_item"),$(t).parents(".cart_shop_opt")),a={eshopPromoterId:shopId,type:"5",products:[{tid:i.attr("tid"),sku:i.attr("sku"),count:e}],token:xigou.getToken()};xigou.activeShoppingCart.authprice({requestBody:a,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i)return!1;changeNum(i.data.mergeitems,a),setTotalMoney(i.data.totalprice,i.data.disprice);var s=i.code;0!=s&&$.tips({content:i.msg,stayTime:2e3,type:"warn"})}}})}function changeNum(t,e){if(1==e.type||2==e.type)return void changeAllNum(t);for(var i=[],a={},s=0;s<e.products.length;s++)for(var n=e.products[s].sku,c=e.products[s].tid,l=$('li.li-item-info[sku="'+n+'"][tid="'+c+'"]'),o=l.parents("li.div_channel").index(),r=0;r<t.length;r++){for(var u=!1,d=0;d<t[r].products.length;d++)if(t[r].products[d].sku==n&&t[r].products[d].tid==c){var p=l.find("div.line_price");p.html(createPriceHTML(t[r].products[d].lineprice));var h=l.find("label.ui-checkbox-s input")[0];h.checked="1"==t[r].products[d].selected?!0:!1,-1==$.inArray(i,o)&&(i.push(i,o),a[o]=r),u=!0;break}if(1==u)break}$.each(a,function(e,i){for(var a=parseInt(0),s=t[i],n=0;n<s.products.length;n++)"1"==s.products[n].selected&&(a+=parseInt(s.products[n].count));var c=$($("#cart-list li.div_channel")[e]);c.find(".sel-count").html("已选"+a+"件"),c.find(".sel_info_tax span").html("¥"+s.taxes),c.find(".sel_info_price span").html("¥"+s.price)})}function changeAllNum(t){var e=[],i={};$.each(t,function(t,a){$.each(a.products,function(a,s){var n=s.sku,c=s.tid,l=$('li.li-item-info[sku="'+n+'"][tid="'+c+'"]'),o=l.parents("li.div_channel").index(),r=l.find("div.line_price");r.html(createPriceHTML(s.lineprice));var u=l.find("label.ui-checkbox-s input")[0];u.checked="1"==s.selected?!0:!1,-1==$.inArray(e,o)&&(e.push(e,o),i[o]=t)})}),$.each(i,function(e,i){for(var a=parseInt(0),s=t[i],n=0;n<s.products.length;n++)"1"==s.products[n].selected&&(a+=parseInt(s.products[n].count));var c=$($("#cart-list li.div_channel")[e]);c.find(".sel-count").html("已选"+a+"件"),c.find(".sel_info_tax span").html("¥"+s.taxes),c.find(".sel_info_price span").html("¥"+s.price)})}function setTotalMoney(t,e){var i=$(" .totalMoney"),a=$(" .totalFreeMoney");i.html("总计：¥"+(t||"0")),a.html("已优惠：¥"+(e||"0")),shopcart()}function del(t,e){var i=$.dialog({title:"",content:"确定删除此商品吗？",button:["取消","确认"]});i.on("dialog:action",function(i){1==i.index&&getstoreid(t,e)})}function selectAll(t){var e={eshopPromoterId:shopId,type:t,token:xigou.getToken()},i=document.getElementById("cart-list").getElementsByTagName("input");if(0==i.length)return $.tips({content:"购物车内无商品",stayTime:2e3,type:"warn"}),!1;if("1"==t)for(var a=0;a<i.length;a++)i[a].checked=!0;else for(var a=0;a<i.length;a++)i[a].checked=!1;xigou.activeShoppingCart.authprice({requestBody:e,callback:function(t,i){if(i==xigou.dictionary.success){var a=t||null;if(null==a)return!1;changeNum(a.data.mergeitems,e),setTotalMoney(a.data.totalprice,a.data.disprice);var s=a.code;0!=s&&$.tips({content:a.msg,stayTime:2e3,type:"warn"})}}})}function authpriceSelect(t){var e=$(t),i=e.parents("li"),a=i.find(".car_item")[0],s=i.find(".cart_shop_opt")[0],n=0;a&&(n=a.innerHTML);var c={eshopPromoterId:shopId,products:[{sku:s.getAttribute("sku"),tid:s.getAttribute("tid"),count:n}],type:"3",token:xigou.getToken()};xigou.activeShoppingCart.authprice({requestBody:c,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i)return!1;changeNum(i.data.mergeitems,c),setTotalMoney(i.data.totalprice,i.data.disprice);var a=i.code;0!=a&&$.tips({content:i.msg,stayTime:2e3,type:"warn"})}}})}function authpriceSelectCancel(t){var e=$(t),i=e.parents("li"),a=i.find(".car_item")[0],s=i.find(".cart_shop_opt")[0],n=0;a&&(n=a.innerHTML);var c={eshopPromoterId:shopId,type:4,products:[{sku:s.getAttribute("sku"),tid:s.getAttribute("tid"),count:n}],token:xigou.getToken()};xigou.activeShoppingCart.authprice({requestBody:c,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i)return!1;changeNum(i.data.mergeitems,c),setTotalMoney(i.data.totalprice,i.data.disprice);var a=i.code;0!=a&&$.tips({content:i.msg,stayTime:2e3,type:"warn"})}}})}function productSelectChange(t){$(t).prop("checked")?authpriceSelect(t):authpriceSelectCancel(t),needSelectAll(this)}function allproductSelectChange(t){selectAll($(t).prop("checked")?"1":"2")}function needSelectAll(){var t=document.getElementById("cart-list").getElementsByTagName("input"),e=document.getElementById(GetTabGroupMoney()).getElementsByTagName("input");if(e=e[0],t.length>0){for(var i=0,a=0;a<t.length;a++)t[a].checked&&i++;e.checked=i==t.length?!0:!1}else e.checked=!1}function getstoreid(t){var e=[],i={};i.sku=$(t).attr("sku"),i.tid=$(t).attr("tid"),e.push(i);var a={eshopPromoterId:shopId,token:xigou.getToken(),products:e,type:"6"};xigou.activeShoppingCart.authprice({requestBody:a,callback:function(t,e){if(e==xigou.dictionary.success){var i=t||null;if(null==i)return!1;var a=i.code;0==a?location.reload():$.tips({content:"删除失败!",stayTime:2e3,type:"warn"})}}})}function solveNull(t,e){return null==t||"undefined"==typeof t?e:t}function onSelAllProductItem(t){for(var e=t.checked,i=document.getElementById("cart-list").getElementsByTagName("input"),a=0;a<i.length;a++)i[a].checked=e;allproductSelectChange(t)}function createPriceHTML(t){var e="00",i="00",a=t.split(".");return a.length>0&&(e=a[0],a.length>1&&(i=a[1])),htmlPrice='<span class="product-price">¥<span class="product-price1">'+e+"</span>."+i+"</span>"}var time=(new Date).getTime();xigou.removeSessionStorage("buy_now_details_url");var shopId=xigou.getLocalStorage("promoterid");$(function(){xigou.getLoginUserInfo({callback:function(t,e){e==xigou.dictionary.success?initCart():(xigou.setSessionStorage("loginjump_url","cart.html"),window.location.href="logon.html")}})});