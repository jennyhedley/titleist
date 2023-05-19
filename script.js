const container = document.getElementById("container");
const gif = document.getElementById("gif");

const imageSources = [
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza1.gif?v=1684490173091",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza2.gif?v=1684490457036",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza3.gif?v=1684490633309",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza4.gif?v=1684490864078",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza5.png?v=1684491171177",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza6.png?v=1683515590083",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza7.gif?v=1684491101570",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza8.png?v=1683515591962",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza9.gif?v=1684491369720",
  "https://cdn.glitch.global/727b2820-834a-4734-a47f-405787cb18d7/Stanza10.png?v=1683515593794",
];

const popupImgs = [];

// Add popup images to the popupImgs array
for (let i = 0; i < imageSources.length; i++) {
  const popupImg = new Image();
  popupImg.src = imageSources[i];
  popupImg.classList.add("popup-img");
  popupImgs.push(popupImg);
}

// Add click event listener to the document
document.addEventListener("click", () => {
  positionPopupImgs();
});

// Position the popup images based on the number of clicks
function positionPopupImgs() {
  const numOfPopups = popupImgs.filter(
    (img) => img.parentElement === container
  ).length;
  if (numOfPopups >= 10) {
    return;
  }

  const lastPopupImg =
    popupImgs.find((img) => img.parentElement === container) || container;
  const lastPopupImgBoundingRect = lastPopupImg.getBoundingClientRect();
  let popupImgX, popupImgY;
  //position first popup
  if (numOfPopups === 0) {
    popupImgX = (container.offsetWidth - popupImgs[0].width) / 3.5;
    popupImgY = (container.offsetHeight - popupImgs[0].height) / 3.5;
  } //position second popup
  else if (numOfPopups === 1) {
    popupImgX = lastPopupImgBoundingRect.right -200;
    popupImgY = lastPopupImgBoundingRect.bottom - 100;
  }
  //position third popup
  else if (numOfPopups === 2) {
    popupImgX = lastPopupImgBoundingRect.right - 650;
    popupImgY = lastPopupImgBoundingRect.top - 175;
  } //position fourth popup
  else if (numOfPopups === 3) {
    popupImgX = lastPopupImgBoundingRect.right +200;
    popupImgY = lastPopupImgBoundingRect.top + 300;
  }
  //position fifth popup
  else if (numOfPopups === 4) {
    popupImgX = lastPopupImgBoundingRect.right;
    popupImgY = lastPopupImgBoundingRect.top -100;
  } //position sixth popup
  else if (numOfPopups === 5) {
    popupImgX = lastPopupImgBoundingRect.left + 125;
    popupImgY = lastPopupImgBoundingRect.bottom +100;
  }
  //position seventh popup
  else if (numOfPopups === 6) {
    popupImgX = lastPopupImgBoundingRect.left +525;
    popupImgY = lastPopupImgBoundingRect.top +50;
  } //position eighth popup
  else if (numOfPopups === 7) {
    popupImgX = lastPopupImgBoundingRect.left + 100;
    popupImgY = lastPopupImgBoundingRect.top - 175;
  }
  //position ninth popup
  else if (numOfPopups === 8) {
    popupImgX = lastPopupImgBoundingRect.right -200;
    popupImgY = lastPopupImgBoundingRect.top;
  } else {
    popupImgX = lastPopupImgBoundingRect.left -200;
    popupImgY = lastPopupImgBoundingRect.top +100;
  }

  const popupImg = popupImgs[numOfPopups];
  popupImg.style.left = `${popupImgX}px`;
  popupImg.style.top = `${popupImgY}px`;
  container.appendChild(popupImg);
}