const navMenu = document.querySelector(".links");
const bars = document.querySelector(".bars");
const clos = document.querySelector(".links-nav .close");
// ************************************************************
const bottonUp = document.querySelector(".to-up");
// ************************************************************
const stats = document.querySelector(".stats");
const nums = document.querySelectorAll("[data-goal]");
// ************************************************************
const lastest  = document.querySelector(".lastest-episodes");
const boxLastest1 = document.querySelector(".lastest-episodes .box1");
const boxLastest2 = document.querySelector(".lastest-episodes .box2");
// ************************************************************
const topics = document.querySelector(".topics");
const boxTopic1 = document.querySelector(".topics .box1");
const boxTopic2 = document.querySelector(".topics .box2");
const boxTopic3 = document.querySelector(".topics .box3");
const boxTopic4 = document.querySelector(".topics .box4");
// ************************************************************
const trending = document.querySelector(".trending-episodes");
const boxTrending1 = document.querySelector(".trending-episodes .box1");
const boxTrending2 = document.querySelector(".trending-episodes .box2");
const boxTrending3 = document.querySelector(".trending-episodes .box3");

// ======================= nav-menu ================================ //
bars.addEventListener("click" , () =>{
navMenu.classList.add("appear");
});

clos.addEventListener("click" , () =>{
navMenu.classList.remove("appear");
});
// ======================= swiper ================================ //

var swiper = new Swiper(".slide-content", {
    slidesPerView:4,
    spaceBetween: 50,
    centeredSlides: true,
    loop:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets:true,
    },
    effect: "coverflow",
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 132,
    modifier: 1,
    slideShadows: true,
},
autoplay: {
    delay: 2500,
    disableOnInteraction: true,
},
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        969: {
            slidesPerView:3,
        },
        1000: {
            slidesPerView:4,
        },
    },
});
// ======================= TO-TOP ================================== //
window.onscroll = () => {
    
    // console.log(window.scrollY);

    this.scrollY > 1200 ? bottonUp.classList.add("show") : bottonUp.classList.remove("show");
}
bottonUp.addEventListener("click", () => {
window.scrollTo({
    top :0,
    behavior:"smooth"
})
})
// ======================= incerment-num-stats ================================== //
let started = false;
window.addEventListener("scroll",()=>{
    if (window.scrollY >= stats.offsetTop - 650) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
})
function startCount(el) {
    let goal = parseInt(el.dataset.goal);
    let count = setInterval(() => {
        el.textContent = parseInt(el.textContent) + 1;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 4000 / goal);
}
// ======================= apper topics-boxes ================================== //
window.addEventListener("scroll",()=>{
    if (window.scrollY >= topics.offsetTop -600) {
        boxTopic1.classList.add("show1");
        boxTopic2.classList.add("show2");
        boxTopic3.classList.add("show3");
        boxTopic4.classList.add("show4");
}
})
// ======================= apper Trending-boxes ================================== //
window.addEventListener("scroll",()=>{
    if (window.scrollY >= trending.offsetTop -450) {
        boxTrending1.classList.add("show1");
        boxTrending2.classList.add("show2");
        boxTrending3.classList.add("show3");
}
})
// ======================= apper lastest-boxes ================================== //
window.addEventListener("scroll",()=>{
    if (window.scrollY >= lastest.offsetTop -500) {
        boxLastest1.classList.add("show1");
        boxLastest2.classList.add("show2");
}
})