let count = 1;
document.getElementById ('radio_1').checked = true;

setInterval( function() {
   slide__auto();
   }
,3000)

function slide__auto() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById('radio_'+count).checked = true;
}