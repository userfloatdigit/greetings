let zIndexval = 0;

function toanimateM(box) {
  let thisclicked = false;
  let offsetX = 0;
  let offsetY = 0;

  // Touch start event
  box.addEventListener("touchstart", (e) => {
    e.preventDefault();
    zIndexval += 1;
    box.style.zIndex = zIndexval;
    box.style.cursor = "grabbing";
    thisclicked = true;
    box.st;
    // Touch events have a touches array - we need to use the first touch
    const touch = e.touches[0];
    const rect = box.getBoundingClientRect();

    // Calculate offset between touch position and element position
    offsetX = touch.clientX - rect.left;
    offsetY = touch.clientY - rect.top;
  });

  // Touch move event
  box.addEventListener("touchmove", (e) => {
    if (thisclicked) {
      e.preventDefault(); // Prevent scrolling
      const touch = e.touches[0];

      // Apply the offset to maintain the grab point
      box.style.left = touch.clientX - offsetX + "px";
      box.style.top = touch.clientY - offsetY + "px";
    }
  });

  // Touch end event - note this should be on the box, not inside the touchmove
  box.addEventListener("touchend", () => {
    thisclicked = false;
    box.style.cursor = "grab";
  });
}

function toanimate(box) {
  let xcordi = 0;
  let ycordi = 0;

  let newx = 0;
  let newy = 0;

  let thisclicked = false;

  box.addEventListener("mousedown", (e) => {
    zIndexval += 1;
    box.style.zIndex = zIndexval;
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
  // Make sure the element has the right positioning
  element.style.position = "absolute";
  element.style.cursor = "grab";
  toanimate(element);
  toanimateM(element);
});

const img = document.getElementById("img");

let factor = 1.5;
img.addEventListener("click", (e) => {
  img.style.transform = `scale(${factor})`;
  factor += 0.5;
});
