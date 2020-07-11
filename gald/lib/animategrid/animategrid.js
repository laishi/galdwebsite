// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;


const grid = document.querySelector(".grid");
const cards = document.querySelectorAll(".card");














var preCard
grid.addEventListener("click", ev => {

  if (preCard) {
    console.log(preCard)
    preCard.classList.remove("card--expanded");
  }


  let target = ev.target;
  while (target.tagName !== "HTML") {
    if (target.classList.contains("card") || target.classList.contains("card--expanded")) {
      target.classList.toggle("card--expanded");
      preCard = target
      return;
    }

    target = target.parentElement;
    
  }



});







Promise.all([...Array(10).keys()]).then(() => {
  animateCSSGrid.wrapGrid(grid, {
    duration: 350,
    stagger: 10,
    onStart: elements =>
      console.log(`started animation for ${elements.length} elements`),
    onEnd: elements =>
      console.log(`finished animation for ${elements.length} elements`)
  });
});















// window.addEventListener("scroll", function (e) {

//   for (let index = 0; index < card.length; index++) {
//     if (card[index].classList.contains("card--expanded")) {
//       card[index].classList.remove("card--expanded");
//     }
    
//   }



// })










// RESIZE WINDOW VIEWBOX

window.addEventListener('resize', reportWindowSize);
window.onresize = reportWindowSize;

function reportWindowSize() {

  // var cardHeight = card[0].offsetHeight

  // var cardimg = document.querySelector(".card__img")

  // var cardimgHeight = cardimg.clientHeight

  // if (cardimgHeight < cardHeight) {
  //   cardimg.style.height = cardHeight + "px"
  // }

// console.log(cardHeight)
// console.log(cardimgHeight)

}

