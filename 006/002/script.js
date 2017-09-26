window.addEventListener('load', init, false);

function init() {
    document.body.addEventListener('keypress', function(e){
        var el = document.getElementById('text');
        switch (e.keyCode) {
            case 114:
                el.style.color = '#ff0000';
                break;
            case 103:
                el.style.color = '#008000';
                break;
            case 98:
                el.style.color = '#0000ff';
        }
    }, false);

}