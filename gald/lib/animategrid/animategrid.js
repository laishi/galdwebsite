// window.CP.PenTimer.MAX_TIME_IN_LOOP_WO_EXIT = 6000;


const grid = document.querySelector(".grid");
// const cards = document.querySelectorAll(".card");




// Get all panels
const cards = document.querySelectorAll(".card");

var preCard
var thisCard

var clickNum = 0

function toggleOpen() {

  if (this.classList.contains("card--expanded")) {    
    this.classList.remove('card--expanded')  
  }else{
    this.classList.add('card--expanded')
    if (preCard) {
      console.log("preCard")
      preCard.classList.remove('card--expanded')
    }
    preCard = this
  }

  thisCard = this

}

function toggleActive(event) {
	// If flex transition has ended
	if (event.propertyName.includes('transform')) {
		// Toggle 'active' class
  }




  console.log(event.propertyName)
}



cards.forEach(panel => {
	// On click, toggle open
	panel.addEventListener('click', toggleOpen)
	// After open is done toggling, toggle active
	panel.addEventListener('transitionend', toggleActive)
})









// var preCard
// var thisCard
// grid.addEventListener("click", ev => {

//   if (preCard) {
//     console.log(preCard)
//     preCard.classList.remove("card--expanded");
//   }


//   let target = ev.target;
//   while (target.tagName !== "HTML") {
//     if (target.classList.contains("card") || target.classList.contains("card--expanded")) {
//       target.classList.toggle("card--expanded");
//       thisCard = target
//       preCard = target
//       return;
//     }

//     target = target.parentElement;
    
//   }


  
// });













Promise.all([...Array(10).keys()]).then(() => {
  animateCSSGrid.wrapGrid(grid, {
    duration: 250,
    stagger: 10,
    // onStart: elements =>
    //   console.log(`started animation for ${elements.length} elements`),
    // onEnd: elements =>
    //   console.log(`finished animation for ${elements.length} elements`)
  });
});















// window.addEventListener("scroll", function (e) {

//   var cadExpanded = document.querySelector(".card--expanded")


//   if (cadExpanded) {
//     console.log("thisCard")
//     cadExpanded.classList.toggle('card--expanded')
//     cadExpanded.removeAttribute("style")
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

