document.addEventListener("DOMContentLoaded", () => {

    var projectImgs = document.querySelectorAll(".card__img")
    var gridImg = document.querySelectorAll(".gridImg")

    imgRename(projectImgs)
    imgRename(gridImg)



});


function imgRename(who) {
    who.forEach(element => {
        var thumbnail = element.src
        var projectImg = thumbnail.replace("thumbnail/", "/")
        element.src = projectImg
    });
}