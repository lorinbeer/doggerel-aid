#JS Fu

## Contents
### injectionjank.js
script to conditionally inject a dependency
### shimavodroc.js
cordova shim, broadcasts a device ready event

### Miscellaneous

###blin
    var $ = document.querySelectorAll.bind(document);
    Element.prototype.on = Element.prototype.addEventListener;

    $('#somelink')[0].on('touchstart', handleTouch);



