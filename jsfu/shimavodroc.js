
console.log("I'm a janky Cordova Shim. Just say no to jank.");


var deviceready = document.createEvent('event');
deviceready.initEvent ('deviceready', 
                  true, //my bubbles 
                  true );

window.setTimeout(function() {
   document.dispatchEvent(deviceready);
}, 500);
