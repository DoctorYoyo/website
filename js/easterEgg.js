$(document).ready(function(){
    var keys     = [];
    var konami  = '38,38,40,40,37,39,37,39,66,65';
    $(document)
        .keydown(
            function(e) {
            keys.push( e.keyCode );
            if ( keys.toString().indexOf( konami ) >= 0 ){
     
                // do something when the konami code is executed
                show_popup();
                // empty the array containing the key sequence entered by the user
                keys = [];
            }
            }
        );
});
function show_popup()
{
var p = window.open( './../egg.html','name', 'top= 150, left=150, height=350, width=550');
p.focus();
}
