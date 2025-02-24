let zIndexval = 0;
function toanimate(box) {
  let xcordi = 0;
  let ycordi = 0;

  let newx = 0;
  let newy = 0;

  let thisclicked = false;

  box.addEventListener("mousedown", (e) => {
    zIndexval += 1;
    box.style.zIndex += zIndexval;
    xcordi = e.clientX;
    ycordi = e.clientY;
    newx = e.clientX - box.offsetLeft;
    newy = e.clientY - box.offsetTop;

    console.log(box.style.zIndex);
    box.style.cursor = "grabbing";
    thisclicked = true;
  });

  window.addEventListener("mousemove", (e) => {
    if (thisclicked) {
      console.log("mouse moving");

      xcordi = e.clientX - newx;
      ycordi = e.clientY - newy;

      box.style.top = ycordi + "px";
      box.style.left = xcordi + "px";
    }

    window.addEventListener("mouseup", (e) => {
      console.log("moiuse release");
      thisclicked = false;
    });
  });
}

const boxs = Array.from(document.querySelectorAll(".tomove"));

console.log(boxs);

boxs.forEach((element) => {
  toanimate(element);
});
