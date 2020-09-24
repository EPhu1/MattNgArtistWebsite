function animateTitleText(){
    document.getElementById("name").style.animation = "animateName .4s ease-in-out forwards";
    document.getElementById("occupation").style.animation = "animateOccupation .4s ease-in-out forwards";
}
function deanimateTitleText(){
    document.getElementById("name").style.animation = "none";
    document.getElementById("occupation").style.animation = "none";
}

function handlePages(){
    if(document.URL.includes("index.html")){
        document.getElementById("name").style.color = "cyan";
        document.getElementById("occupation").style.color = "cyan";
        document.getElementById("footerOverlay").style.background = "rgb(49, 49, 49, 1)";
    }
    else if(document.URL.includes("portfolioMiscellaneous.html")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.getElementsByTagName("li")[5].style.color = "cyan";
        document.body.style.background = "black";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else if(document.URL.includes("portfolioTerraByte.html")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.getElementsByTagName("li")[3].style.color = "cyan";
        document.body.style.background = "black";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else if(document.URL.includes("portfolioZBrush.html")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.getElementsByTagName("li")[4].style.color = "cyan";
        document.body.style.background = "black";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else if(document.URL.includes("resume.html")){
        document.getElementsByTagName("li")[1].style.color = "cyan";
    }
    else if(document.URL.includes("contact.html")){
        document.getElementsByTagName("li")[2].style.color = "cyan";
    }
    else if(document.URL.includes("terrabyteImage")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.body.style.background = "rgb(25, 25, 25)";
        document.getElementById("navigationBarOverlay").style.background = "rgba(0, 0, 0, 1)";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else if(document.URL.includes("zbrushImage")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.body.style.background = "rgb(25, 25, 25)";
        document.getElementById("navigationBarOverlay").style.background = "rgba(0, 0, 0, 1)";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else if(document.URL.includes("miscImage")){
        document.getElementsByTagName("li")[0].style.color = "cyan";
        document.body.style.background = "rgb(25, 25, 25)";
        document.getElementById("navigationBarOverlay").style.background = "rgba(0, 0, 0, 1)";
        document.getElementsByClassName("mainGrid")[0].style.gridGap = "10px";
    }
    else{//handles default page, same as index.html
        document.getElementById("name").style.color = "cyan";
        document.getElementById("occupation").style.color = "cyan";
        document.getElementById("footerOverlay").style.background = "rgb(49, 49, 49, 1)";
    }
}

function captionON(x){
    document.getElementsByClassName("imageCaption")[x].style.animation = "animateCaption .3s ease-in-out forwards";
}
function captionOff(x){
    document.getElementsByClassName("imageCaption")[x].style.animation = "none";
}

