var crsr = document.querySelector(".cursor")
var blur = document.querySelector(".cursorblur")



document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x - 10 + "px",
        crsr.style.top = dets.y - 10 + "px"
    blur.style.left = dets.x - 200 + "px",
        blur.style.top = dets.y - 200 + "px"

})

var ancall = document.querySelectorAll("nav a");
ancall.forEach(function (a) {
    a.addEventListener("mouseenter", function (e) {
        crsr.style.height = "60px"
        crsr.style.width = "60px"
        crsr.style.border = "1.5px solid white";
        crsr.style.backgroundColor = "transparent";

    })
    a.addEventListener("mouseleave", function (e) {
        crsr.style.height = "20px"
        crsr.style.width = "20px"
        crsr.style.border = "0 solid white";
        crsr.style.backgroundColor = "#ff9400";
    })
})

gsap.to("nav", {
    backgroundColor: "black",
    duration: 0.5,
    height: "98px",
    scrollTrigger: {
        trigger: "nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 0.5
    }
})

gsap.to(".main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -30%",
        end: "top -90%",
        // markers:true,
        scrub: 2
    }
})


gsap.from(".about-us img ,.aboutus-in h3,.aboutus-in #line,.aboutus-in p", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
    trigger: ".about-us img ,.aboutus-in h3,.aboutus-in #line,.aboutus-in p",
     scroller: "body",
     start: "top 68%",
     end: "top 60%",
     scrub: 2.5
    }
})

gsap.from("#comma1",{
    y:-60,
    x:-30,
    opacity:0,
    duration:1.5,
    scrollTrigger: {
        trigger:"#comma1" ,
        scroller: "body",
        start: "top 60%",
        end: "top 47%",
        scrub: 2.5
    }
})
gsap.from("#comma2",{
    y:60,
    x:30,
    opacity:0,
    duration:1.5,
    scrollTrigger: {
        trigger:"#comma1" ,
        scroller: "body",
        start: "top 60%",
        end: "top 45%",
        scrub: 2.5
    }
})
gsap.from(".page3 p",{
    scale:.5,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".page3 p",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:3
    }
})

gsap.from(".page4 img",{
    scale:1.2,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".page4 img",
        scroller: "body",
        start: "top 60%",
        end: "top 65%",
        scrub:3}
})

gsap.from(".page5 h2",{
    y:15,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger:".page5 h2",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub:1
    }
})


//MENU

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
