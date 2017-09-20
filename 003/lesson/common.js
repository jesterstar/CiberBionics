
/**
 * Created by Sergey on 20.09.2017.
 */
window.onload = function(){

    function test() {
        window.open('window.html',
                    'New Window',
                    'width=' + screen.availWidth/2 + ',height=' + screen.availHeight/2 + ',top=' + screen.availHeight/4 + ',left=' + screen.availWidth/4);
    }
    setTimeout(test, 5000);
};