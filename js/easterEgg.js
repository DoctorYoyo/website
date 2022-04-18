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
var p = window.open( 'egg.html','name', 'top= 100, left=100, height=800, width=800');
p.focus();
}
