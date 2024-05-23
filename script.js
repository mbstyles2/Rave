function toggleNav() {
 var navigation = document.getElementById("navigation");
 navigation.classList.toggle("active");
}



let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
for(i =0; i < slides.length; i++) {
slides[i].style.display="none";
}
slideIndex++;
if(slideIndex > slides.length) {slideIndex=1}
slides[slideIndex-1].style.display="block";
setTimeout(showSlides,3000);// Change image every 3 seconds
}


function addList(){
    let add = document.querySelector('.myForm').value
    let textNode = document.createTextNode(add)
    let el = document.createElement('li')
    let ul = document.querySelector('.unorder')
    ul.appendChild(el)
    el.style.listStyleType = 'none';
    let form = document.querySelector('#ourForm');
    form.reset()
    console.log(el.appendChild(textNode))
}

