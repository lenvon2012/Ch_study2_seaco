function loadDssAccount(){var e=xigou.getToken(),a={type:type,token:e};xigou.promoterFunc.loadDssAccount({requestBody:a,callback:function(e,a){if(a==xigou.dictionary.success){var t=e||null;if(null==t||0==t.length)return!1;0==t.code&&InitAccountDetailPage(t)}}})}function InitAccountDetailPage(e){setValue("#passTime",e.data.passtime),setValue("#nickName",e.data.nickname),setValue("#weixin",e.data.weixin),setValue("#userName",e.data.name),setValue("#qq",e.data.qq),setValue("#mobile",e.data.mobile),setValue("#email",e.data.email),setValue("#name",e.data.name),setValue("#credential",e.data.credential),setValue("#credentialCode",e.data.credentialcode),setValue("#bank",e.data.bank),setValue("#bankAccount",e.data.bankaccount),setValue("#alipay",e.data.alipay)}function setValue(e,a){a=a||" ",$(e).text(a)}var type=xigou.getQueryString("type");null==type&&(window.location.href="../logon.html"),$(function(){isWeiXin()&&($(".basic-body").hide(),$(".line-split").css({"margin-top":"0"})),0==type||"0"==type?$(".goBack").attr("href","dsscouponhome.html"):1==type||"1"==type?$(".goBack").attr("href","dsshome.html"):$(".goBack").attr("href","../home.html"),xigou.getLoginUserInfo({callback:function(e,a){a==xigou.dictionary.success?loadDssAccount():window.location.href="../logon.html"}})});