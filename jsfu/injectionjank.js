function injectionjank(envvar, alib, blib) {
    var cdvsrc = document.createElement('script');
    cdvsrc.setAttribute('type', 'text/javascript');
    if (envvar) {
        cdvsrc.setAttribute('src', alib);
    } else {
        cdvsrc.setAttribute('src', blib);
    }
    document.getElementsByTagName('head')[0].appendChild(cdvsrc);
}
