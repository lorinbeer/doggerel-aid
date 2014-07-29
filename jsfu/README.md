#JS Fu

## Contents
### injectionjank.js
script to conditionally inject a dependency
### shimavodroc.js
cordova shim, broadcasts a device ready event
### detectmobilebrowser.js
go here for canonical version:
http://detectmobilebrowsers.com/
contents of file are slightly modified from website, writes boolean flag to window object, window.__motile if a mobile browser is found

### Miscellaneous

###blin
    var $ = document.querySelectorAll.bind(document);
    Element.prototype.on = Element.prototype.addEventListener;

    $('#somelink')[0].on('touchstart', handleTouch);



