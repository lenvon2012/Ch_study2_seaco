function setHtml(e){for(var i=[],a=0;a<e.length;a++){var t=e[a],s=!0;if((0==parseFloat(t.orderprice)||"0.0"==t.orderprice.toString())&&(s=!1),i.push('<ul class="ui-list ui-list-text ui-border-tb item">'),i.push("<li>"),i.push('<h4 class="ordernum" name="'+t.ordercode+'">订单编号：</h4>'),i.push('<div class="ui-list-text">'+t.ordercode+"</div>"),i.push("</li>"),i.push("<li>"),i.push('<h4 class="list_next">应付金额：</h4>'),i.push('<div class="price'+a+'" data="'+t.orderprice+'">¥'+t.orderprice+"</div>"),i.push("</li>"),s){i.push('<li class="">'),i.push('<h4 class="select_pay" id="'+t.payid+'">支付方式：</h4>');var r,o;isWeiXin()?(TmpPayWayId=0,r="weixin",o="微信支付"):(TmpPayWayId=1,r="alipayDirect",o="支付宝支付"),i.push('<div class="ui-list-text">'+o+"</div>"),i.push("</li>"),i.push('<div class="btn"><a href="javascript:void(0);" class="go_payment" name="'+a+'" data="'+r+'">立即支付</a></div></ul>')}else i.push('<div class="ui-border-t btn haspay">已付款</div></ul>');i.push('<input type="hidden" name="payid'+a+'" value="'+t.payid+'" />')}$(".success-block").after(i.join(""))}function gotoPay(e){var i=$(e.target).attr("name"),a=$('input[name="payid'+i+'"]').val(),t=$(e.target).attr("data"),s=($(".price"+i).attr("data"),$(".item").eq(i).find(".ordernum").attr("name")),r=xigou.getLocalStorage("openid"),o="";isWeiXin()&&(o=xigou.getQueryString("pay_openid"),""==o||null==o?(o=xigou.getLocalStorage("pay_openid"),(""==o||null==o)&&(callURL=getXgOpenIdUrl+"&redictBackUrl="+encodeURIComponent(location.href),window.location.href=callURL)):xigou.setLocalStorage("pay_openid",o),r=o);var n={token:UserToken,ordercode:s,payid:a,payway:t,openid:r};xigou.activeHtClearing.payNow({requestBody:n,callback:function(e,i){if(i==xigou.dictionary.success)if(null==e)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else switch(e.code){case"0":if(isWeiXin())onBridgeReady(e.data,a,s);else if(e.data.actionurl){var t=$("#submit_pay"),r=xigou.getPaymentForm({el:t,datas:e.data,payway:TmpPayWayId});r&&t.submit()}break;case"-1003":window.location.href="payresult.html?pid="+a+"&ordercode="+s;break;default:$.tips({content:e.msg||"支付提交失败",stayTime:2e3,type:"warn"})}else $.tips({content:"请求失败，详见"+e,stayTime:2e3,type:"warn"})}})}function InitPage(){var e=xigou.getSessionStorage("haitao_clearing_orders");if(e){e=JSON.parse(e).data,$(".ordercount").html("1");var i=[],a=!0;if((0==parseFloat(e.price)||"0.0"==e.price.toString())&&(a=!1),i.push('<ul class="ui-list ui-list-text ui-border-tb item">'),i.push("<li>"),i.push('<h4 class="ordernum" name="'+e.ordercode+'">订单编号：</h4>'),i.push('<div class="ui-list-text">'+e.ordercode+"</div>"),i.push("</li>"),i.push("<li>"),i.push('<h4 class="list_next">应付金额：</h4>'),i.push('<div class="price" data="'+e.price+'">¥'+e.price+"</div>"),i.push("</li>"),a){i.push('<li class="">'),i.push('<h4 class="select_pay" id="'+e.payid+'">支付方式：</h4>');var t,s;isWeiXin()?(TmpPayWayId=0,t="weixin",s="微信支付"):(TmpPayWayId=1,t="mergeAlipay",s="支付宝支付"),i.push('<div class="ui-list-text">'+s+"</div>"),i.push("</li>"),i.push('<div class="btn"><a href="javascript:void(0);" class="go_payment" data="'+t+'">立即支付</a></div></ul>')}else i.push('<div class="ui-border-t btn haspay">已付款</div></ul>');return i.push('<input type="hidden" value="'+e.payid+'" />'),$(".success-block").after(i.join("")),void gotopaymerge(e)}$.tips({content:"您还没有提交订单，请先回到购物车页面提交订单",stayTime:2e3,type:"warn"})}function gotopaymerge(e){$(".go_payment")[xigou.events.click](function(){var i=$("#submit_pay"),a=xigou.getPaymentForm({el:i,datas:e,payway:"mergeAlipay"});a&&i.submit()})}var UserToken=xigou.getToken(),TmpPayWayId=0;$(function(){xigou.getLoginUserInfo({callback:function(e,i){i==xigou.dictionary.success?isWeiXin()?(getOrderlist(),$(".go_payment")[xigou.events.click](function(e){gotoPay(e)})):InitPage():window.location.href="index.html"}}),isWeiXin()&&($("header").hide(),$("title").html("订单支付"))});var getOrderlist=function(){var e=xigou.getSessionStorage("haitao_clearing_orders");if(e){e=JSON.parse(e);var i=e.data;if(i.length>0){var a=e.data.length;return $(".ordercount").html(a),void setHtml(i)}}$.tips({content:"您还没有提交订单，请先回到购物车页面提交订单",stayTime:2e3,type:"warn"})};