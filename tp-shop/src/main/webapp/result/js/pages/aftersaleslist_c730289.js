function initList(){$(".content").dropload({scrollArea:window,loadDownFn:function(s){s.resetload(),requestsalelist(cur_list_page,s),cur_list_page++}})}function requestsalelist(s,a){if("Y"==list_max)return isScrolling=!1,$(".dropload-down").hide(),void $(".ui-refresh-down>span:first-child").removeClass();var i={token:xigou.getToken(),curpage:s};xigou.aftersales.list({requestBody:i,callback:function(i,t){if(isScrolling=!1,t==xigou.dictionary.success){if(1==i.data.curpage&&(i.data.list&&0!=i.data.list.length?$(".after_sales_list").removeClass("after_sales_list_none"):$(".after_sales_list").addClass("after_sales_list_none")),!(i.data&&i.data.list&&i.data.curpage&&i.data.totalpagecount))return list_max="Y",a.lock(),void $(".dropload-down").hide();if(0==i.data.list.length)return list_max="Y",a.lock(),void $(".dropload-down").hide();i.data.curpage==i.data.totalpagecount&&(list_max="Y",a.lock(),$(".dropload-down").hide());for(var e=[],l=0;l<i.data.list.length;l++){var o=i.data.list[l],r=o.itemprice.split(".")[0]||"00",n=o.itemprice.split(".")[1]||"00",d=o.returnprice.split(".")[0]||"00",p=o.returnprice.split(".")[1]||"00";e.push('<li class="after_sales_item">'),e.push('<a href="returndetail.html?asid='+o.asid+'">'),e.push(' <div class="after_sales_info">'),e.push(2==o.status?'     <span class="color_red">'+o.statusdesc+"</span>":"     <span>"+o.statusdesc+"</span>"),e.push("     <div>售后单号："+o.ascode+"</div>"),e.push(" </div>"),e.push(' <div class="item_info">'),e.push('     <div class="div_item_img">'),e.push('         <img src="'+o.itemimg+'" alt="" width="75" height="75">'),e.push("     </div>"),e.push('     <div class="item_price_info">'),e.push('         <span class="lineprice">¥<span>'+r+"</span>."+n+"</span>"),e.push('         <div class="item_name">'+o.itemname+"</div>"),e.push('         <span class="lineprice">×'+o.buycount+"</span>"),e.push('         <div class="item_format"> </div>'),e.push("     </div>"),e.push(" </div>"),e.push(' <div class="total_price">'),e.push('     <div class="total_price_info">'),e.push("         共"+o.buycount+"件 退款金额："),e.push('         <span class="price_fen">¥<span class="price_yuan">'+d+".</span>"+p+"</span>"),e.push("     </div>"),e.push(" </div>"),e.push("</div>"),e.push("</a>"),e.push("</li>")}$(".after_sales_list").append(e.join(" "));var u=JSON.stringify(i.data.list);if(1==s)xigou.setLocalStorage("aftersaleslist",u);else{for(var c=xigou.getLocalStorage("aftersaleslist"),h=JSON.parse(c),_=0,g=i.data.list.length;g>_;_++)h.push(i.data.list[_]);xigou.setLocalStorage("aftersaleslist",JSON.stringify(h))}}}})}var cur_list_page=1,list_max="N";$(function(){xigou.getLoginUserInfo({callback:function(s,a){a==xigou.dictionary.success?initList():(xigou.setSessionStorage("loginjump_url","cart.html"),window.location.href="logon.html")}})});