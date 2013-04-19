# PRAXIS

## put js below DOM
JavaScript blocks rendering. Put your JavaScript above the content, and your server stalls, and you get a blank page.
source: http://remysharp.com/2013/04/19/i-know-jquery-now-what/
is this true with modern browser look-ahead parsing?

## retrieve from input element
use: --this.value
    $('input').on('change', function () {
        alert('The new value is' + this.value);
    });
