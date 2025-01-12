function scrollright() {
    document.querySelector('.scroll-pane-items').scrollBy({ top: 0, left: 500 });
    document.querySelector('.scroll-pane span:first-child').style.display='block';
}
function scrollleft() {
    if(document.querySelector('.scroll-pane-items').scrollLeft==0){
        document.querySelector('.scroll-pane span:first-child').style.display='none';
    }
    document.querySelector('.scroll-pane-items').scrollBy({ top: 0, left: -500 });
}