gsap.registerPlugin(ScrollTrigger);
let circle = document.getElementById('circle');
let white = document.getElementById('white');
let btn = document.getElementById('btn');
let h4 = document.getElementById('h4');
let temp = 1;
let more = document.getElementById('more');
let blackbox = document.getElementById('blackbox');
let see = document.getElementById('see');

gsap.to('#content1',{
    scrollTrigger: {
        trigger:"#container",
        start:"top bottom-=30%",
        marker:true,
        toggleActions:"play pause resume reverse"
    },
    opacity:1,
    duration:3
    })
gsap.to('.image1 img',{
    scrollTrigger: {
        trigger:".image1",
        start:"top 5%",
        marker:true,
        toggleActions:"play pause resume reverse"
    },
    opacity:0,
    duration:3
    })
gsap.to('.image2 img',{
    scrollTrigger: {
        trigger:".image2",
        start:"top 5%",
        marker:true,
        toggleActions:"play pause resume reverse"
    },
    opacity:0,
    duration:3
    })
gsap.to('.image2 img',{
    scrollTrigger: {
        trigger:".image2",
        start:"top 5%",
        marker:true,
        toggleActions:"play pause resume reverse"
    },
    opacity:0,
    duration:3
    })
      
btn.addEventListener('click', () => {
    if (temp == 1) {
        white.style.transform = "translate(0,-5%)";
        white.style.height = "350px";
        white.style.background = "slate"
        white.style.opacity = 0.8
        more.style.display = "flex";
        btn.classList.remove("ri-arrow-drop-down-line");
        btn.classList.add("ri-arrow-drop-up-line");
        h4.style.opacity = 0;
        document.getElementsByClassName("view")[0].innerText = "View less"
        temp = 0;
        see.style.display = "none";
        gsap.to('.line', {
            duration: 1,
            width: 100,
            ease: 'Expo.easeInOut'
        })

    }
    else {
        white.style.transform = "translate(0,-15%)";
        white.style.height = "126px";
        btn.classList.remove("ri-arrow-drop-up-line");
        btn.classList.add("ri-arrow-drop-down-line");
        h4.style.opacity = 1;
        more.style.display = "none";
        white.style.opacity = 0.8
        see.style.display = "block"
        temp = 1;
        document.getElementsByClassName("view")[0].innerText = "View more"
        gsap.to('.line', {
            duration: 1,
            width: 30,
            ease: 'Expo.easeInOut'
        })
    }

})
see.addEventListener('click', () => {
    if (temp == 1) {
        gsap.to('#white', {
            duration: 2,
            width: 0,
            opacity:0.3,
            ease: 'Expo.easeInOut'
        })
        gsap.to('#blackbox', {
            duration: 0.7,
            opacity: 0,

            ease: 'Expo.easeInOut'
        })
        see.classList.remove("ri-arrow-right-s-line");
        see.classList.add("ri-arrow-left-s-line");
        temp = 0;
    }
    else {
        gsap.to('#white', {
            duration: 2,
            width: "36%",
            ease: 'Expo.easeInOut',
            opacity:0.8,
        })
        gsap.to('#blackbox', {
            duration: 3,
            opacity: 1,
            ease: 'Expo.easeInOut'
        })
        see.classList.remove("ri-arrow-left-s-line");
        see.classList.add("ri-arrow-right-s-line");
        temp = 1;
    }
})
var time = gsap.timeline();
time
    .from('#wrap', {
        duration: 3,
        scale: .3,
        opacity: 0,
        ease: 'Expo.easeInOut'
    })

    .from('#white', {
        duration: 2,
        width: 0,

        ease: 'Expo.easeInOut'
    }, '-=1.25')
    .to('#see', {
        duration: 1,
        opacity: 0.8,
        ease: 'Expo.easeInOut'
    }, '-=2')

    .to('#blackbox', {
        duration: 2,
        opacity: 1,
        ease: 'Expo.easeInOut'
    },'-=1')

    .from('#main>h4', {
        duration: 2,
        x: 50,
        opacity: 0,
        ease: 'Expo.easeInOut'
    }, '-=1.25')
    .from('.line', {

        width: 0
    }, '-=1.25')

