var cmbc=cmbc||{};!function(e){function n(e,n){var o=CryptoJS.enc.Utf8.parse(n),t=CryptoJS.DES.encrypt(e,o,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});return t.toString()}function o(e,n){var o=CryptoJS.enc.Utf8.parse(n),t=CryptoJS.DES.decrypt({ciphertext:CryptoJS.enc.Base64.parse(e)},o,{mode:CryptoJS.mode.ECB,padding:CryptoJS.pad.Pkcs7});return t.toString(CryptoJS.enc.Utf8)}var t=e,r="MiN2SHeNg0DiAnS1S6Tb";t.initCmbcInfo=function(e){e=e.replace(/\r\n+/g,""),e=decodeURIComponent(e),e=e.replace(/%2B/g,"+");var n=o(e,r);if(n&&(n=JSON.parse(n),n&&n.Package&&n.Package.Header&&n.Package.Header.UUID)){var t=n.Package.Header.UUID;xigou.setSessionStorage("cmbcuuid",t),xigou.setSessionStorage("cmbctuuid",n.Package.Header.TUUID)}},t.getChannelCode=function(e){var n=xigou.getSessionStorage("cmbcuuid"),o="";return n&&(o="cmbc",e&&(o+=n)),o},t.getTuuid=function(){var e=xigou.getSessionStorage("cmbcuuid"),n="";return e&&(n=xigou.getSessionStorage("cmbctuuid")),n},t.getUnionType=function(){return"cmbc"==t.getChannelCode(!1)?"4":""},t.getUnionVal=function(){return"cmbc"==t.getChannelCode(!1)?xigou.getSessionStorage("cmbcuuid"):""},t.initInfo=function(){var e={Package:{Header:{PurposeRemark:"01",RegSource:"2",ComId:"020160001",TUUID:"2,7",UUID:"4",SendTime:"2016-05-12 10:34:39",SalesChannel:"02",RequestType:"C02",ComSerial:"472"}}},o=JSON.stringify(e);o=n(o,r).replace(/\+/g,"%2B"),o=encodeURIComponent(o),console.log(o)}}(cmbc);