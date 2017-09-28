function $(id) {
    return document.getElementById(id);
}

function findCookieValue(cookieName) {
    var allcookies = document.cookie;
    var pos = allcookies.indexOf(cookieName + "=");

    if (pos != -1) {
        var start = pos + cookieName.length + 1;
        var end = allcookies.indexOf(";", start);
        if (end == -1) end = allcookies.length;
        var value = allcookies.substring(start, end);
        value = decodeURIComponent(value);
        return value;
    }
}

function init() {
    var lastModified = findCookieValue('lastModified');
    var date = new Date();
    var cookieStr = '';

    if (lastModified) {
        $('result').innerHTML = lastModified;
        cookieStr += 'lastModified=' + encodeURIComponent(date.getMonth()) + ';';
        cookieStr += 'max-age=' + date.getMonth() + ';';
        document.cookie = cookieStr;
    } else {
        $('result').innerHTML = '';
        cookieStr += 'lastModified=' + encodeURIComponent(date.getMonth()) + ';';
        cookieStr += 'max-age=' + date.getMonth() + ';';
        document.cookie = cookieStr;
    }
}

window.addEventListener('load', init, false);
