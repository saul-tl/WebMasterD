var xhrNav = new XMLHttpRequest();
xhrNav.open('GET', 'nav.html');
xhrNav.setRequestHeader('Content-Type', 'text/html');
xhrNav.send();
xhrNav.onload = function () {
    if (xhrNav.status === 200) {
        document.querySelector("nav").innerHTML = xhrNav.responseText;
    }
};

var xhrFooter = new XMLHttpRequest();
xhrFooter.open('GET', 'footer.html');
xhrFooter.setRequestHeader('Content-Type', 'text/html');
xhrFooter.send();
xhrFooter.onload = function () {
    if (xhrFooter.status === 200) {
        document.querySelector("footer").innerHTML = xhrFooter.responseText;
    }
};


