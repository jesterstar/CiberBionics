function KeyPress(e) {
    var evtobj = window.event? event : e;
    evtobj.preventDefault();
    if (evtobj.keyCode == 83  && !evtobj.shiftKey && evtobj.ctrlKey) {
        alert("сохранено");
    } else if (evtobj.keyCode == 65 && evtobj.ctrlKey) {
        alert("выбрано все");
    } else if (evtobj.keyCode == 83 && evtobj.shiftKey && evtobj.ctrlKey) {
        alert("сохранено все");
    }
}

document.onkeydown = KeyPress;