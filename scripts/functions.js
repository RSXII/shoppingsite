const sliderMenu = document.getElementById('sliderMenu');
let sliderPosition = document.getElementById('sliderMenu').offsetLeft;
let moveSlider;



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






