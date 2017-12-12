const sliderMenu = document.getElementById('sliderMenu');
let sliderPosition = document.getElementById('sliderMenu').offsetLeft;
let moveSlider;
const theProducts = document.getElementById('theProducts');

const theLoop = function(section){
    let theList = productsData[section];
    for(let item in theList){
        theProducts.innerHTML += "<div class='col-sm-12 col-md-6 col-lg-4 itemContainer'><div class='product col-sm-12' style='background-image: url(images/" 
                + theList[item] + "); background-position: center'> <div class='overlay'></div></div> </div>";
    }
    
}

sliderMenu.addEventListener("mousedown", function(e){
    e = e || window.event;
    let x = e.clientX;
    let y = sliderPosition;

    let mouseMoveCall = function(e){
        let newPosition = e.clientX;
        document.getElementById('sliderMenu').style.left = newPosition - x + y + "px";
    }
        sliderMenu.addEventListener("mousemove", mouseMoveCall);
    
    sliderMenu.addEventListener('mouseup', function(){
        sliderPosition = sliderMenu.offsetLeft;
        sliderMenu.removeEventListener('mousemove', mouseMoveCall);
    }, true)
}, false);

document.onload = fillContent('showAll');

function fillContent(section){
    let theSection = section;
    theProducts.innerHTML = "";
    let sectionLinks = document.getElementsByClassName('sectionLinks');
    for(i = 0; i < sectionLinks.length; i++){
        sectionLinks[i].style.color = "white";
    }
    document.getElementById(section).style.color = "gold";
    if(section != 'showAll'){
           theLoop(theSection);
    }else{
     for(let list in productsData){
         theLoop(list);
     }
    }
}







