function getTheCode(){}function setCodeTime(e){var t=$(".get_code");$(".get_code").addClass("status"),t.text(e+"秒后重新获取");var o=setInterval(function(){return 0>=e?(clearInterval(o),$(".get_code").removeClass("status"),t.text("获取验证码"),void(allowGetTheCode=!0)):void t.text(--e+"秒后重新获取")},1e3)}function setCodeTime1(e){var t=$(".get_code1");$(".get_code1").addClass("status"),t.text(e+"秒后重新获取");var o=setInterval(function(){return 0>=e?(clearInterval(o),$(".get_code1").removeClass("status"),t.text("获取验证码"),void(allowGetTheCode=!0)):void t.text(--e+"秒后重新获取")},1e3)}function isWeiXin(){var e=window.navigator.userAgent.toLowerCase();return"micromessenger"==e.match(/MicroMessenger/i)?!0:!1}$(function(){isWeiXin()||initgeetest(),getTheCode(),xigou.modifymobile.init({requestBody:{token:xigou.getToken()},callback:function(e,t){t==xigou.dictionary.success?$(".oldMobile").text(e.data.tel):(xigou.setSessionStorage("loginjump_url","changeTel.html"),window.location.href="logon.html")}})}),$("#input-telnum").bind("focus",function(){$(".get_code1").removeClass("status"),$(".clear").show(),$(".clear")[xigou.events.click](function(){$("#password").val(""),$("#input-telnum").val("")})}),$("#password, #validateCode").bind("focus",function(){$(".clear").show(),$(".btn_pre, .btn_next").css({background:"#333"})}),$(".btn_pre").click(function(){var e=$("#oldMobile").text(),t=$("#validateCode").val(),o={token:xigou.getToken(),tel:e,captcha:t};xigou.modifymobile.checkmobile({requestBody:o,callback:function(e){"0"==e.code&&e.data?($.tips({content:e.msg,stayTime:2e3,type:"info"}),window.location.href="changeTel2.html"):$.tips({content:e.msg,stayTime:2e3,type:"warn"})}})});var allowGetTheCode=!0,uuid="",fanli=xigou.getQueryString("fanli"),handlerEmbed=function(e){$(".get_code,#achieve")[xigou.events.click](function(){var t=e.getValidate();if(t){var o=$("#input-telnum").val()||$("#oldMobile").text(),i={geetest_challenge:$("[name=geetest_challenge]").val(),geetest_validate:$("[name=geetest_validate]").val(),geetest_seccode:$("[name=geetest_seccode]").val(),tel:o,randid:$("#randid").val(),type:"11"},n={requestBody:i,callback:function(e,t){t==xigou.dictionary.success?null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?(setCodeTime(60),$.tips({content:e.msg,stayTime:2e3,type:"warn"})):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"}):xigou.alert("请求失败，详见"+e)}};xigou.activeUser.sendGeeCode(n)}else $.tips({content:"请先完成验证",stayTime:2e3,type:"warn"})}),e.appendTo("#embed-captcha"),e.onReady(function(){})};$(".btn_next").click(function(){var e=$("#input-telnum").val(),t=$("#validateCode").val(),o={token:xigou.getToken(),tel:e,captcha:t};xigou.modifymobile.modifymobile({requestBody:o,callback:function(e){if("0"==e.code){$(".oldMobile").text(e.data.tel),xigou.setLocalStorage("show_name",e.data.tel),xigou.setLocalStorage("login_name",e.data.tel);var t={token:e.data.token,telephone:e.data.tel,name:e.data.tel};xigou.setSessionStorage("userinfo",t,!0),xigou.setLocalStorage("token",e.data.token),$.tips({content:e.msg,stayTime:2e3,type:"warn"}),xigou.setSessionStorage("success",e.msg),window.location.href="home.html"}else $.tips({content:e.msg,stayTime:2e3,type:"warn"})}})}),$("#getCode").click(function(){var e=$("#oldMobile").text(),t={tel:e,randid:$("#randid").val(),type:"11"},o={requestBody:t,callback:function(e,t){t==xigou.dictionary.success?null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?(setCodeTime(60),$.tips({content:e.msg,stayTime:2e3,type:"warn"})):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"}):xigou.alert("请求失败，详见"+e)}};xigou.modifymobile.getcaptcha(o)}),$("#getCode1").click(function(){var e=$("#input-telnum").val(),t={tel:e,randid:$("#randid").val(),type:"11"},o={requestBody:t,callback:function(e,t){t==xigou.dictionary.success?null==e?$.tips({content:xigou.dictionary.chineseTips.server.value_is_null,stayTime:2e3,type:"warn"}):"0"==e.code?(setCodeTime1(60),$.tips({content:e.msg,stayTime:2e3,type:"warn"})):$.tips({content:e.msg||"获取验证码失败",stayTime:2e3,type:"warn"}):xigou.alert("请求失败，详见"+e)}};xigou.modifymobile.getcaptchaNew(o)});