#JS Fu

##bling
    var $ = document.querySelectorAll.bind(document);
    Element.prototype.on = Element.prototype.addEventListener;

    $('#somelink')[0].on('touchstart', handleTouch);
