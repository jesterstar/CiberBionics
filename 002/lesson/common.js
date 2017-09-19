const DEFAULT_BORDER_COLOR = '#dadada';

window.onload = resetSelection();

function resetSelection() {
    var el = document.body.childNodes;

    for (var i=0; i < el.length; i++) {
        var temp = el[i];
        if (temp.nodeType != 1) {
            continue;
        }

        temp.setAttribute('style', 'border: 1px solid transparent;');
    }
}

function getAllParagraph() {
    resetSelection();

    var paragraph = document.getElementsByTagName('p');
    for (var j=0; j < paragraph.length; j++) {
        var temp = paragraph[j];
        if (temp.nodeType != 1) {
            continue;
        }

        temp.setAttribute('style', 'border: 1px solid ' + DEFAULT_BORDER_COLOR);
    }
}

function getAllLink() {
    resetSelection();

    var link = document.getElementsByTagName('a');
    for (var k=0; k < link.length; k++) {
        var temp = link[k];
        if (temp.nodeType != 1) {
            continue;
        }

        temp.setAttribute('style', 'border: 1px solid ' + DEFAULT_BORDER_COLOR);
    }
}

function getDiv() {
    resetSelection();

    var div = document.getElementById('test_div');
    div.style.border = '1px solid ' + DEFAULT_BORDER_COLOR;
}