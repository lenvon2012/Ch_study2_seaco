function dologin(e){xigou.hhblogin.dologin({params:{openId:e},callback:function(e){var o=e.code;switch(o){case"0":var t=xigou.getSessionStorage("loginjump_url"),a={token:e.data.token,telephone:e.data.tel,name:e.data.name};if(xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",a,!0),$("input.name").val()&&xigou.setLocalStorage("login_name",$("input.name").val()),xigou.setLocalStorage("show_name",e.data.tel||e.data.name),xigou.setLocalStorage("token",e.data.token),xigou.getSessionStorage("refer_data"))params=xigou.getSessionStorage("refer_data",!0),params.token=e.data.token,xigou.activeUser.addshopping({requestBody:params,callback:function(e,o){xigou.removeSessionStorage("refer_data"),o==xigou.dictionary.success||$.tips({content:"添加购物车失败！",stayTime:2e3,type:"warn"}),window.location.href="cart.html"}});else if(xigou.getSessionStorage("buy_now_refer_data"))params=xigou.getSessionStorage("buy_now_refer_data",!0),params.token=e.data.token,xigou.activeUser.buynow({requestBody:params,callback:function(e,o){xigou.getSessionStorage("buy_now_tun_type");if(xigou.removeSessionStorage("buy_now_refer_data"),xigou.removeSessionStorage("buy_now_tun_type"),o==xigou.dictionary.success){var t=e||null;if(null==t||0==t.length)return!1;xigou.setSessionStorage("buy_now_uuid",t.data.uuid),window.location.href="settle.html"}else window.location.href=xigou.getSessionStorage("buy_now_details_url")}});else if(t)xigou.setSessionStorage("loginjump_url",""),window.location.href=decodeURIComponent(t);else if(xigou.getSessionStorage("refer",!1).indexOf("login.html")>-1||xigou.getSessionStorage("refer",!1).indexOf("logon.html")>-1)window.location.href="home.html";else{if(xigou.getSessionStorage("refer",!1).indexOf("/wxhb")>-1||xigou.getSessionStorage("refer",!1).indexOf("/wxhb.html")>-1)return void(window.location.href="home.html");window.location.href="index.html"}break;case"-99":var a={token:e.data.token,telephone:e.data.tel,name:e.data.name};xigou.setSessionStorage("userinfo",a,!0),$("input.name").val()&&xigou.setLocalStorage("login_name",$("input.name").val()),xigou.setLocalStorage("token",e.token),window.location.href="binding.html";break;default:$("input#name").unbind("change"),$.tips({content:e.msg||"登录失败",stayTime:2e3,type:"warn"})}}})}var openId=xigou.getQueryString("openId");$(function(){dologin(openId)});