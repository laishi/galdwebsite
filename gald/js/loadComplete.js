document.addEventListener("DOMContentLoaded", () => {
    
    var projectImgs = document.querySelectorAll(".card__img")
    projectImgs.forEach(element => {

        var thumbnail = element.src
        var projectImg = thumbnail.replace("thumbnail/", "/")

        element.src = projectImg

        console.log(projectImg)
        
    });
    
});