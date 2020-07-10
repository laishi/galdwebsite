


var svgviewbox = document.getElementById("svgviewbox");
var curveBg = document.getElementById("curveBg");
var navPath = document.getElementById("navPath");

var menuhome = document.querySelector(".menuhome")
var menuprojects = document.querySelector(".menuprojects")
var menuserver = document.querySelector(".menuserver")
var menuflow = document.querySelector(".menuflow")
var menuabout = document.querySelector(".menuabout")

var testnav = document.getElementById("testnav")

var strokeWidth = 3


// FUNCTIONS

function setviewbox(el) {
    el.setAttribute("viewBox", "0 0 " + document.body.clientWidth + " " + (window.innerHeight / 2 + strokeWidth));
}

function setpath(el) {
    el.setAttribute("d",
        "M 0 " + (window.innerHeight / 2 - 100) + " C 0 " + (window.innerHeight / 2 - 100) + " " + (document.body.clientWidth / 5) + " " + (window.innerHeight / 2) + " " + (document.body.clientWidth / 2) + " " + (window.innerHeight / 2) + " " + (document.body.clientWidth - document.body.clientWidth / 5) + " " + (window.innerHeight / 2) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " V 0 H 0 Z");
}

function setNavPath(el) {
    el.setAttribute("stroke-width", strokeWidth);
    el.setAttribute("stroke-linecap", "square");
    el.setAttribute("d",
        curveBg.getAttribute("d").split(" V")[0])
    // el.setAttribute("transform", "translate(0, " + -strokeWidth / 1 + ")");
}





function flowangle(cx, cy, ex, ey) {
    var dy = ey - cy;
    var dx = ex - cx;
    var theta = Math.atan2(dy, dx); // range (-PI, PI]
    theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
    return theta;
}


var navmenus = document.querySelectorAll(".menu")





function navToCurve(nav, prcnt, offset) {

    var pathLength = navPath.getTotalLength()

    prcnt = prcnt + offset


    if (prcnt == 0.5) {
        newprcnt = prcnt * pathLength;
    } else {
        newprcnt = (prcnt + 0.1) * pathLength;
    }



    var prcnt = prcnt * pathLength


    pt = navPath.getPointAtLength(prcnt);
    newpt = navPath.getPointAtLength(newprcnt);


    pt.x = Math.round(pt.x);
    pt.y = Math.round(pt.y);

    newpt.x = Math.round(newpt.x);
    newpt.y = Math.round(newpt.y);
    var rotateangle = Math.round(flowangle(pt.x, pt.y, newpt.x, newpt.y))


    // nav.css("transform", 'translate(' + pt.x + 'px, ' + pt.y + 'px)');
    nav.style.webkitTransform = 'translate3d(' + pt.x + 'px,' + pt.y + 'px, 0)' + "rotate(" + rotateangle + "deg)";

}



// INIT VIEWBOX

setviewbox(svgviewbox)
setpath(curveBg)
setNavPath(navPath)




// Initialize

var navspace = 0.1


navToCurve(menuprojects, 0.5 - navspace * 2, 0)
navToCurve(menuserver, 0.5 - navspace, 0)
navToCurve(menuhome, 0.5, 0)
navToCurve(menuflow, 0.5 + navspace, 0)
navToCurve(menuabout, 0.5 + navspace * 2, 0)






var winw = document.body.clientWidth

// RESIZE WINDOW VIEWBOX

window.addEventListener('resize', reportWindowSize);
window.onresize = reportWindowSize;

function reportWindowSize() {



    // winw = document.body.clientWidth

    setviewbox(svgviewbox)
    setpath(curveBg)
    setNavPath(navPath)


    navToCurve(menuprojects, 0.5 - navspace * 2, 0)
    navToCurve(menuserver, 0.5 - navspace, 0)
    navToCurve(menuhome, 0.5, 0)
    navToCurve(menuflow, 0.5 + navspace, 0)
    navToCurve(menuabout, 0.5 + navspace * 2, 0)


}




// onscroll

var menuOffset = 0;

window.addEventListener("scroll", function (e) {

    var scrollPos = window.scrollY || window.pageYOffset // pageYOffset for ie

    var newcurvevaule = (window.innerHeight / 2) - (scrollPos / 1)

    var menuOffsetScroll = Math.min(menuOffset + scrollPos / document.body.clientWidth, 0.3)


    navToCurve(menuprojects, 0.5 - navspace * 2, -menuOffsetScroll)
    navToCurve(menuserver, 0.5 - navspace, -menuOffsetScroll / 2)
    navToCurve(menuhome, 0.5, 0)
    navToCurve(menuflow, 0.5 + navspace, menuOffsetScroll / 2)
    navToCurve(menuabout, 0.5 + navspace * 2, menuOffsetScroll)



    var scrollPath = "M 0 " + (window.innerHeight / 2 - 100) + " C 0 " + (window.innerHeight / 2 - 100) + " " + (document.body.clientWidth / 5) + " " + newcurvevaule + " " + (document.body.clientWidth / 2) + " " + newcurvevaule + " " + (document.body.clientWidth - document.body.clientWidth / 5) + " " + newcurvevaule + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " V 0 H 0 Z"

    if (scrollPos >= 0 && scrollPos < window.innerHeight) {

        curveBg.setAttribute("d", scrollPath)
        navPath.setAttribute("d", scrollPath.split(" V")[0])
        // navPath.setAttribute("transform", "translate(0, " + -strokeWidth / 2 + ")");
    }

})





var clipImg = document.querySelectorAll(".clipImg")
var svgheader = document.getElementById("svgheader")

svgheader.addEventListener('mousemove', function (event) {


    var mousex = event.offsetX - document.body.clientWidth / 2;
    var mousey = event.offsetY - window.innerHeight / 2;

    poselevel01 = clipImg[2].getAttribute("x")


    // console.log("mousex: " + event.offsetX )
    // console.log(clipImg[3].getAttribute("x"))

    clipImg[0].setAttribute("x", -mousex / 4 + 300)
    clipImg[1].setAttribute("x", -mousex / 3 - 300)

    clipImg[2].setAttribute("x", mousex / 50)
    clipImg[3].setAttribute("x", mousex / 9 - 100)

    clipImg[4].setAttribute("x", mousex / 8 - 400)
    clipImg[5].setAttribute("x", mousex / 8 + 400)

    clipImg[6].setAttribute("x", mousex / 7 + 0)

    clipImg[7].setAttribute("x", mousex / 5 + 320)
    clipImg[8].setAttribute("x", mousex / 5 - 320)


    clipImg[9].setAttribute("x", mousex / 3 + 200)
    clipImg[10].setAttribute("x", mousex / 2 - 200)







});





// pages



var pages = document.querySelectorAll(".page")


function sourceclassname() {
    
    navmenus.forEach(function (item, index) {    
        pages[index].className = "page homepage"    
        
    })
}



function menuRipple() {
    navmenus.forEach(function (item, index) {


        if (item.classList.contains("menuRipple")) {
    
            item.classList.toggle("menuRipple");
        }
    
    
    })   
}


var maskimghome = document.querySelector(".maskimghome")
var maskimgpage = document.querySelector(".maskimgpage")



navmenus.forEach(function (item, index) {



  
    
    item.addEventListener('click', function (el) {

        sourceclassname()
        
        menuRipple()
        item.classList.toggle("menuRipple");
        pages[index].classList.toggle("pagedown");

        


        if (item.classList.contains("menuprojects")) {
            maskimghome.style.display = "none"
            maskimgpage.style.display = "block"
            maskimgpage.children[0].setAttribute("xlink:href", "img/Skyscrapers.png")
        }

        if (item.classList.contains("menuserver")) {
            maskimghome.style.display = "none"
            maskimgpage.style.display = "block"
            maskimgpage.children[0].setAttribute("xlink:href", "img/djrmgy.jpg")
        }

        if (item.classList.contains("menuhome")) {
            maskimghome.style.display = "none"
            maskimgpage.style.display = "block"
            maskimgpage.children[0].setAttribute("xlink:href", "img/ta.jpg")
        }

        if (item.classList.contains("menuflow")) {
            maskimghome.style.display = "none"
            maskimgpage.style.display = "block"
            maskimgpage.children[0].setAttribute("xlink:href", "img/Lights.png")
        }

        if (item.classList.contains("menuabout")) {
            maskimghome.style.display = "none"
            maskimgpage.style.display = "block"
            maskimgpage.children[0].setAttribute("xlink:href", "img/eyessvg.png")
        }





        console.log("menuitem: " + item)

    })
})










