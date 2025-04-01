//your JS code here. If required.
document.querySelector('input[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var fontSize = document.querySelector('#fontsize').value;
    var fontColor = document.querySelector('#fontcolor').value;
    setCookie('fontsize', fontSize, 30); // Store the font size for 30 days
    setCookie('fontcolor', fontColor, 30); // Store the font color for 30 days
});
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

window.onload = function() {
    var fontSize = getCookie('fontsize');
    var fontColor = getCookie('fontcolor');
    if (fontSize) document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    if (fontColor) document.documentElement.style.setProperty('--fontcolor', fontColor);
}

