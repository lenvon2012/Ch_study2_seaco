function loadDssAccount(){var t=xigou.getToken(),i={token:t,type:"2"};xigou.promoterFunc.loadDssAccount({requestBody:i,callback:function(t,i){if(i==xigou.dictionary.success){var o=t||null;if(null==o||0==o.length)return!1;0==o.code&&InitCouponAccountPage(o)}}})}function InitCouponAccountPage(t){var i=t.data.status,o=t.data.withdrawstatus;null==i||i>3||(statusDivShow(i),withdrawButtionShow(i),$("#userName").text(t.data.name),$("#mobile").text(t.data.mobile),$("#fuserName").text(t.data.name),$("#fmobile").text(t.data.mobile),$("#accumulatedAmount").text(t.data.totalfees),$("#withdrawedAmount").text(t.data.withdrawedfees),$("#surplusAmount").text(t.data.surplusamount),$("#orderAmount").text(t.data.orderamount),$("#scancount").text(t.data.scancount),$("#credentialcode").val(t.data.credentialcode),$("#curWithdraw").val(t.data.surplusamount),$("#Alipay").val(t.data.alipay),accountDetail(),billinfo(),orderinfo(),withdraw(),t.data.surplusamount>0&&($("#withdrawDisableBtn").hide(),$("#canWithdrawBtn").show(),$("#withdrawingBtn").hide()),2==i&&null!=o&&1==o&&($("#canWithdrawBtn").hide(),$("#withdrawingBtn").show(),$("#withdrawingAmount").text(t.data.withdrawingamount)),$(".div_dsslogo_cord").html("<img width='140px' style='margin:15px 10px 10px 10px;' src='data:image/png;base64,"+t.data.img+"'/>"))}function accountDetail(){$(".main-info").click(function(){window.location.href="scancodeDetail.html?type=2"}),$(".top_right").click(function(){window.location.href="scancodeDetail.html?type=2"})}function billinfo(){$("#accountFlowQuery")[xigou.events.click](function(){window.location.href="billinfo.html?type=2"})}function orderinfo(){$("#orderQuery")[xigou.events.click](function(){window.location.href="dssorders.html?type=2"})}function withdraw(){$("#canWithdrawBtn")[xigou.events.click](function(){window.location.href="withdrawals.html?type=2";var t=$("#surplusAmount").html();if(null!=t){var i=parseFloat(t);return.001>i?void $.tips({content:"余额不足",stayTime:2e3,type:"warn"}):void 0}})}function statusDivShow(t){0==t?($("#normalStatusDiv").hide(),$("#unpayStatusDiv").show(),$("#forbiddenStatusDiv").hide()):1==t?($("#normalStatusDiv").show(),$("#unpayStatusDiv").hide(),$("#forbiddenStatusDiv").hide(),$("#normalStatusDiv .wrz").show()):2==t?($("#normalStatusDiv").show(),$("#unpayStatusDiv").hide(),$("#forbiddenStatusDiv").hide(),$("#normalStatusDiv .yrz").show()):($("#normalStatusDiv").hide(),$("#unpayStatusDiv").hide(),$("#forbiddenStatusDiv").show())}function withdrawButtionShow(t){2==t?($("#withdrawDisableBtn").hide(),$("#canWithdrawBtn").show(),$("#withdrawingBtn").hide()):($("#withdrawingBtn").hide(),$("#withdrawDisableBtn").show(),$("#canWithdrawBtn").hide())}function CodeDescription(){var t=xigou.getLocalStorage("erCodeIsFirst");if(null==t||void 0==t||""==t){$(".gift_box").removeClass("shake_leftright"),$(".cover").show(),$(".code_description").show(),$(".gift_box").click(function(){$(".cover").show(),$(".code_description").show(),$(".gift_box").removeClass("shake_leftright")}),$(".code_description_btn").click(function(){$(".cover").hide(),$(".code_description").hide(),$(".gift_box").addClass("shake_leftright")});var t=1;xigou.setLocalStorage("erCodeIsFirst",t)}$(".gift_box").click(function(){$(".cover").show(),$(".code_description").show(),$(".gift_box").removeClass("shake_leftright")}),$(".code_description_btn").click(function(){$(".cover").hide(),$(".code_description").hide(),$(".gift_box").addClass("shake_leftright")})}$(function(){isWeiXin()&&$(".div_name").hide(),xigou.getLoginUserInfo({callback:function(t,i){i==xigou.dictionary.success?loadDssAccount():window.location.href="../logon.html"}}),$("#withdrawingBtn")[xigou.events.click](function(){window.location.href="cashInfo.html?type=2"}),$(".share_button").on("click",function(){if(null!=xigou.getLocalStorage("login_name")&&""!=xigou.getLocalStorage("login_name"))window.location.href="./dssScanShareShop.html?i="+xigou.getLocalStorage("login_name");else{var shopMobile="",userinfo=xigou.getSessionStorage("userinfo"),dssUserInfo=eval("("+userinfo+")");window.location.href="./dssScanShareShop.html?i="+dssUserInfo.telephone}}),CodeDescription()});