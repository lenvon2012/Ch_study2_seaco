(function(a){var c=this;c.activeShoppingCart=c.activeShoppingCart||{},c.activeShoppingCart.loadCart=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.cart.load,c.dictionary.success);else{var i=c.activeHost+c.activeUrl.cart.load;ajaxPost(t,i)}},c.activeShoppingCart.getstoreid=function(t){if(c.locationData)a.isFunction(t.callback)&&t.callback(static_data.shopping["delete"],c.dictionary.success);else{var i=c.activeHost+c.activeUrl.shoppingCart.getstoreid;ajaxPost(t,i)}},c.activeShoppingCart.authprice=function(t){if(c.locationData)switch(t.requestBody.type){case"1":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"2":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"3":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"4":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"5":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"6":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success);break;case"7":a.isFunction(t.callback)&&t.callback(static_data.cart.operation,c.dictionary.success)}else{var i=c.activeHost+c.activeUrl.cart.operation;ajaxPost(t,i)}}}).call(xigou,Zepto);