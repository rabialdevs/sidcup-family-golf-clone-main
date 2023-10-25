var cursor = document.querySelector("#cursor");
let cursor_blur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {

    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y + "px";
    cursor_blur.style.left = dets.x-200+ "px";
    cursor_blur.style.top = dets.x - 200 + "px"; 
    

})







gsap.to(".nav", {
    backgroundColor: "#000",
    duration:0.5,
    heigth: "110px",
    scrollTrigeer: {
        trigeer: ".nav",
        scroller: "body",
        markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub:1,
    }
    
})