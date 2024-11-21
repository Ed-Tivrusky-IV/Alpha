//if using get**ClassName, addEventListener can only be used once; however, get**ID is different.
//Adding a popup by right clicking on the audio file icons.
const openMenu = document.getElementsByClassName("audio");
for (let x in openMenu) {
  openMenu[x].addEventListener("contextmenu", (e) => {
    rightClick(e);
  });
}

function rightClick(e) {
  e.preventDefault();

  if (document.getElementById("context").style.display == "block") hideMenu();
  else {
    let menu = document.getElementById("context");

    menu.style.display = "block";
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}

function hideMenu() {
  document.getElementById("context").style.display = "none";
}
