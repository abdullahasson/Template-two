let i = 0;
let a = 1;
let landing = document.querySelector(`.landing`);
let left = document.querySelector(`.fa-angle-left`);
let right = document.querySelector(`.fa-angle-right`);
let Bullets = document.querySelectorAll(`.landing .bullets li`);
let listOfBackgroundImg = ["../image/landing.jpg" , "../image/modest-black-dell-logo-47ycwm01waoaliom.jpg" , "../image/black-dell-alienware-ibkoj3utgia9ffgi.jpg"]

document.styleSheets[2].rules[33].style.setProperty("background-image" , `url(${listOfBackgroundImg[0]})` , "important");
Bullets[0].classList.add(`active`)

right.onclick = function() {
    if (i < 2) {
        i += 1;
        console.log(i)
    } else {
        i = 0;
        console.log(i)
    }  
    document.styleSheets[2].rules[33].style.setProperty("background-image" , `url(${listOfBackgroundImg[i]})` , "important");
    Bullets.forEach((bt) => {bt.classList.remove(`active`)});
    Bullets[i].classList.add(`active`);

}

left.onclick = function() {
    if (i === 0) {
        i = listOfBackgroundImg.length;
    }
    document.styleSheets[2].rules[33].style.setProperty("background-image" , `url(${listOfBackgroundImg[i -= 1]})` , "important");
    Bullets.forEach((ebl) => {ebl.classList.remove(`active`)});
    Bullets[i].classList.add(`active`);
}
