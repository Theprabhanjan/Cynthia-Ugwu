// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function finalfuntion() {
  function firstPageAnimation() {
    var t1 = gsap.timeline();

    t1.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeINOut,
    })
      .to(".bounding-elem", {
        y: "0",

        duration: 1.5,
        delay: -1,
        stagger: 0.2,
        ease: Expo.easeINOut,
      })

      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -5,
        stagger: 0.2,
        ease: Expo.easeINOut,
      });
  }
 
  function resizeCircle() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

      xprev = dets.clientX;
      yprev = dets.clientY;
      mouseFollower(xscale, yscale);
    });
  }
  function mouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (det) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${det.clientX}px, ${det.clientY}px ) scale(${xscale}, ${yscale})`;
    });
  }
  document.querySelectorAll(" .elem").forEach(function (elem) {
    //selects all the 'elem' divs

    var rotate = 0;
    var diff = 0;
    elem.addEventListener("mouseleave", function (det) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        duration: 0.5,
      }); //select the individual tags in each elem
    });
    elem.addEventListener("mousemove", function (det) {
      diff = det.clientX - rotate;
      rotate = det.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        top: det.clientY - elem.getBoundingClientRect().top, //to get location-details of the div on page
        rotate: gsap.utils.clamp(-20, 20, diff * 2),
        duration: 0.5,
        left: det.clientX,
        ease: Power1,
      }); //select the individual tags in each elem
    });
  });
  firstPageAnimation();
  mouseFollower();
  resizeCircle();

}

finalfuntion();
        