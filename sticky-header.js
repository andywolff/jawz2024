document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function onWindowResize() {
let root = document.querySelector(':root');
if (!root) {
  console.warn("resize failed to find root");
  return;
}
let topnav = document.querySelector(".topnav");
if (!topnav) {
  console.warn("resize failed to find topnav");
}
let newHeight = Math.round(topnav.getBoundingClientRect().height);
//console.log("NEWHEIGHT: "+newHeight);
root.style.setProperty('--topnav-height', newHeight+"px");
}
window.addEventListener( 'resize', onWindowResize, false );
onWindowResize();