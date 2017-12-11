const sliderMenu = document.getElementById('sliderMenu');
let sliderPosition = document.getElementById('sliderMenu').offsetLeft;
let moveSlider;
const theProducts = document.getElementById('theProducts');
const theLoop = function(section){
    for(let i = 1; i < 3; i++){
        theProducts.innerHTML += "<div class='product col-sm-12 col-md-6 col-lg-4' style='background-image: url(images/" 
        + section + i + ".png); background-position: center'></div>";
    }
}


sliderMenu.addEventListener("mousedown", function(e){
    e = e || window.event;
    let x = e.clientX;
    let y = sliderPosition;

    let mouseMoveCall = function(e){
        let newPosition = e.clientX;
        document.getElementById('sliderMenu').style.left = newPosition - x + y + "px";
        console.log(newPosition);
    }
        sliderMenu.addEventListener("mousemove", mouseMoveCall);
    
    sliderMenu.addEventListener('mouseup', function(){
        sliderPosition = sliderMenu.offsetLeft;
        sliderMenu.removeEventListener('mousemove', mouseMoveCall);
    }, true)
}, false);

document.onload = fillContent("m-c-");

function fillContent(section){
    theProducts.innerHTML = "";
    if(section != 'showall'){
           theLoop(section);
    }else{
        let allProd = ['m-c-', 'w-c-'];
        allProd.forEach(function(section){
           theLoop(section);
        })
    }
}







