function pay_success(e){function t(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()}$(".content").show(),$(".viewshop")[xigou.events.click](function(){window.location.href="index.html"}),$(".vieworder")[xigou.events.click](function(){window.location.href="orderdetails.html?ordercode="+xigou.getQueryString("ordercode")});var o=e.data,n=o.orderRedeemItemList;if(n.length>0){var i=n[0].effectTimeEnd,r=new Date(i),a=t(r);$(".div_add_info").hide(),$(".coupon_code").show(),$(".couponcode_message_name").html(n[0].shopName),$(".couponcode_message_time").html(a);for(var s=[],c=0;c<n.length;c++)s.push('<li><p><span class="redeem_name">'+n[c].redeemName+'</span><span class="redeem_code_nub">'+n[c].redeemCode+"</p></li>");$("#redeem_code").html(s.join(""))}}$(function(){$(".content").hide();var e={token:xigou.getToken(),ordercode:xigou.getQueryString("ordercode"),payid:xigou.getQueryString("pid")};xigou.activePayresults.status({requestBody:e,callback:function(e,t){if(t==xigou.dictionary.success){var o=e||null;null==o||0==o.length?$.tips({content:"网络错误123!",stayTime:2e3,type:"warn"}):($.tips({content:o.msg||"网络错误！",stayTime:2e3,type:"warn"}),pay_success(o),$("#div_payrest").html(e.data.statusdesc))}else window.location.href="orders.html"}})});