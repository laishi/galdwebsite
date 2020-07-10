// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;


const grid = document.querySelector(".grid");
const card = document.querySelectorAll(".card");


function cardinit() {
  card.forEach(function (item, index) {

    if (item.classList.contains("card--expanded")) {
      item.classList.remove("card--expanded");
    }
  })
}

var precard
grid.addEventListener("click", ev => {

  // cardinit()
  let target = ev.target;
  while (target.tagName !== "HTML") {
    if (target.classList.contains("card") || target.classList.contains("card--expanded")) {
      target.classList.toggle("card--expanded");
      // return;
    }

    target = target.parentElement;

    precard = target.parentElement;

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



window.addEventListener("scroll", function (e) {

  cardinit()

})


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

