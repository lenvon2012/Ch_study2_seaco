function registr(){$(".div_agree input").change(function(){var e=this.checked;e?$(".div-register").removeClass("disable"):$(".div-register").addClass("disable")}),$(".div-register")[xigou.events.click](function(){if(!$(this).hasClass("disable")&&nickNameCheck()&&confirmPws()&&xigou.valiformdata.check(null,valiDataCallBack)){var e={mobile:$("#input-telnum").val(),captcha:$("#input-code").val(),gender:$(".gender:checked").val(),nickName:$("#input-nickname").val(),passWord:$("#input-pwd").val(),inviter:xigou.getQueryString("i"),userAgreed:$(".div_agree input")[0].checked},a={requestBody:e,callback:function(e,a){if(a==xigou.dictionary.success)if(null==e)$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"});else{var t=e.code;switch(xigou.debugPrint("注册成功返回的code值："+t),t){case"0":if(e.data.promoterinfo&&"{}"!=e.data.promoterinfo){var i=JSON.parse(e.data.promoterinfo);i.token=e.data.token,xigou.setSessionStorage("dssUser",i,!0)}var n={token:e.data.token,telephone:e.data.tel,name:e.data.name};xigou.removeSessionStorage("realname"),xigou.removeSessionStorage("realnum"),xigou.setSessionStorage("userinfo",n,!0),e.data.tel&&xigou.setLocalStorage("login_name",e.data.tel),xigou.setLocalStorage("show_name",e.data.tel||e.data.name),xigou.setLocalStorage("token",e.data.token),xigou.setSessionStorage("dssregister","注册成功"),window.location.href="dss/dsshome.html";break;case"-2":$.tips({content:e.msg||"验证码错误",stayTime:2e3,type:"warn"});break;default:$.tips({content:e.msg||"注册失败",stayTime:2e3,type:"warn"})}}else xigou.alert("请求失败，详见"+e)}};xigou.activeUser.dssregistr(a)}}),$("#div_get_code")[xigou.events.click](function(){showpopgeetest()})}function setCodeTime(e){var a=$("#div_get_code");a.text(e);var t=setInterval(function(){return 0>=e?(clearInterval(t),a.text("获取验证码"),a.removeClass("disble"),void(allowGetTheCode=!0)):void a.text(--e)},1e3)}function valiDataCallBack(e,a){$.tips({content:e,stayTime:2e3,type:"warn"}),$("#"+a).focus()}function nickNameCheck(){var e=/^[\u4E00-\u9FA5A-Za-z0-9_]+$/,a=$("#input-nickname").val();return e.test(a)?!0:($.tips({content:"请输入正确格式的昵称",stayTime:2e3,type:"warn"}),!1)}function initValiData(){var e={methods:{"input-pwd":{required:"required",password:!0},"input-pwd-cfm":{required:"required",password:!0},"input-telnum":{required:"required",mobile:!0},"input-credential-code":{required:"required"}},errors:{"input-pwd":{required:"请输入密码",password:"密码只能为字母，数字(6-30位)"},"input-pwd-cfm":{required:"请输入确认密码",password:"密码只能为字母，数字(6-30位)"},"input-telnum":{required:"请输入手机号",mobile:"手机号码不正确，请重新输入"},"input-credential-code":{required:"请输入身份证号码"}}};return xigou.valiformdata.initValiData(e)}function InitPage(){var e=xigou.getSessionStorage("registerinfo",!0);e&&(e.tel&&$("#input-telnum").val(e.tel),e.code&&$("#input-code").val(e.code),e.pwd&&$("#input-pwd").val(e.pwd),e.pwdcfm&&$("#input-pwd-cfm").val(e.pwdcfm),e.nickname&&$("#input-nickname").val(e.nickname),e.inviter&&($("#genderm").removeClass().addClass("gender-label-m2"),$("#genderf").removeClass().addClass("gender-label-f1"),$("#gender-f")[0].checked=!0,$(".label_m").removeClass("select"),$(".label_f").addClass("select")),e.userAgreed&&($(".div_agree input")[0].checked=!0,$(".div-register").removeClass("disable"))),xigou.removeSessionStorage("registerinfo"),$(".read")[xigou.events.click](function(){var e={};e.tel=$("#input-telnum").val(),e.code=$("#input-code").val(),e.pwd=$("#input-pwd").val(),e.pwdcfm=$("#input-pwd-cfm").val(),e.nickname=$("#input-nickname").val(),e.inviter=$("#genderm").hasClass("gender-label-m2")?!0:!1,e.userAgreed=$(".div_agree input")[0].checked,xigou.setSessionStorage("registerinfo",e,!0),window.location.href="dss/useragreement.html"})}function getopenid(){var e=xigou.getSessionStorage("weixin_code");xigou.activeUser.openid({requestBody:{code:e},callback:function(e){xigou.setLocalStorage("openid",e.data.openid),InitPage(),registr(),$(".gender").change(function(){$(this).hasClass("gender-m")?($("#genderm").removeClass().addClass("gender-label-m1"),$("#genderf").removeClass().addClass("gender-label-f2"),$(".label_m").addClass("select"),$(".label_f").removeClass("select")):($("#genderm").removeClass().addClass("gender-label-m2"),$("#genderf").removeClass().addClass("gender-label-f1"),$(".label_m").removeClass("select"),$(".label_f").addClass("select"))})}})}$(function(){window.navigator.userAgent.toLowerCase();if(isWeiXin()){var e=xigou.getLocalStorage("openid");if(!e){var a=xigou.getQueryString("code");if(a)xigou.setSessionStorage("weixin_code",a),getopenid();else{var t="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx6f7f5f0bab32e7d3&redirect_uri="+location.href.replace(/&+/g,"%26")+"&response_type=code&scope=snsapi_base&state=1#wechat_redirect";window.location.href=t}return}}InitPage(),registr(),$(".gender").change(function(){$(this).hasClass("gender-m")?($("#genderm").removeClass().addClass("gender-label-m1"),$("#genderf").removeClass().addClass("gender-label-f2"),$(".label_m").addClass("select"),$(".label_f").removeClass("select")):($("#genderm").removeClass().addClass("gender-label-m2"),$("#genderf").removeClass().addClass("gender-label-f1"),$(".label_m").removeClass("select"),$(".label_f").addClass("select"))})});var handlerEmbed=function(e){$(".div_img_code .div_code_btn2,#achieve")[xigou.events.click](function(){var a=e.getValidate();if(a){var t={geetest_challenge:$("[name=geetest_challenge]").val(),geetest_validate:$("[name=geetest_validate]").val(),geetest_seccode:$("[name=geetest_seccode]").val(),tel:$("#input-telnum").val(),randid:$("#randid").val(),type:"5"},i={requestBody:t,callback:function(e,a){a==xigou.dictionary.success?null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?($.tips({content:e.msg,stayTime:2e3,type:"warn"}),destroy(),setCodeTime(60,$("#div_get_code"))):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"}):xigou.alert("请求失败，详见"+e)}};xigou.activeUser.sendGeeCode(i)}else $.tips({content:"请先完成验证",stayTime:2e3,type:"warn"})}),e.appendTo("#embed-captcha"),e.onReady(function(){})};