window.onresize=screen;
window.onload=screen;
function screen() {
    mywidth=window.innerWidth;
    document.getElementById("size").innerHTML="Your actual Screen Width is: <strong>" + mywidth + "px</strong>. Beautiful!";
}