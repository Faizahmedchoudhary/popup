popup = document.querySelector('.popup');
btn = document.querySelector('.btn')
closeimg = document.querySelector('#closeimg')


btn.addEventListener("click", ()=>{
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
        popup.style.animation = "popupani 6s linear"
    }
})

closeimg.addEventListener("click" ,()=>{
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
})