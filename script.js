const bubblesContainer = document.querySelector('.bubbles-container');


function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');


    const size = Math.random() * 60 + 20;
    bubble.style.width= `${size}px`;
    bubble.style.height=`${size}px`;


    bubble.style.left = `${Math.random() * 100}%`;

    bubblesContainer.appendChild(bubble);

    bubble.addEventListener('animationend', () => {
        bubble.remove()
    
    });


}

let slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
    showSlides(slideIndex += n);
}


function showSlides(n){

    let i;
    let slides = document.getElementsByClassName("slide");

    if(n> slides.length) {slideIndex=1}
    if(n <1) {slideIndex= slides.length}

    for(i=0; i < slides.length;i++){
        slides[i].style.display ="none";
    }
    slides[slideIndex-1].style.display="block";
}

setInterval(() =>{
    plusSlides(1);
}, 5000);
setInterval(createBubble,5000);
