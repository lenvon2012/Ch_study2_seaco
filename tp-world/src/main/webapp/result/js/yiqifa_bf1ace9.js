xigou.removelocalStorage("channelsource"),xigou.removelocalStorage("clientcode"),xigou.removelocalStorage("distributecode"),xigou.removelocalStorage("channelcode"),xigou.removelocalStorage("yiqifarddate");var channel=xigou.getQueryString("channel"),cid=xigou.getQueryString("cid"),wi=xigou.getQueryString("wi"),aid=xigou.getQueryString("aid"),url=decodeURIComponent(xigou.getQueryString("url")),yiqifarddate=new Date;xigou.setLocalStorage("channelsource",channel),xigou.setLocalStorage("clientcode",cid),xigou.setLocalStorage("distributecode",wi),xigou.setLocalStorage("channelcode",aid),xigou.setLocalStorage("yiqifarddate",yiqifarddate.getTime()),location.href=url;