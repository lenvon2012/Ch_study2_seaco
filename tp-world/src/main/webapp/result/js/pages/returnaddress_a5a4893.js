$(function(){for(var e=xigou.getQueryString("asid"),i=xigou.getLocalStorage("aftersaleslist"),t=JSON.parse(i),d=0;d<t.length;d++){var a=t[d];if(a.asid==e)return a.returnaddress?$(".returnaddress").text(a.returnaddress):$(".div_address_detail").hide(),a.linkname?$(".div_name span").text(a.linkname):$(".div_name").hide(),void(a.linktel?$(".div_tel span").text(a.linktel):$(".div_tel").hide())}isWeiXin()&&($(".ui-header").hide(),$(".div_desc").css({"margin-top":"0"}),$("title").html("退货地址"))});