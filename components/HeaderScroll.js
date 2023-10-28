gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const main = document.querySelector("main"), footer = document.querySelector("footer");



main.style.height = main.getBoundingClientRect().height + footer.getBoundingClientRect().height + "px"

const smoother = ScrollSmoother.create({
  wrapper: "#wrapper",
        content: "#content",
        smooth: 0.7, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: false, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.4, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
        
        normalizeScroll: false,
      });





ScrollTrigger.create({
            trigger: "header",
            start: "top top",
            end: 99999,
            pin: true,
            pinSpacing: false,
          });

const showAnim = gsap
            .from("header", {
              yPercent: -100,
              paused: true,
              duration: 0.5,
              autoAlpha: 0,
              ease: "power2.in",
            })
            .progress(1);

          ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
              self.direction === -1 ? showAnim.play() : showAnim.reverse();
            },
          });

      gsap.set(".footer-content", { yPercent:150 });

      const uncover = gsap.timeline({ paused: true });

      uncover.to(".footer-content", { yPercent: 0, ease: "linear" });

ScrollTrigger.create({
  trigger: "main",
  start: "bottom-=400px bottom",
  end: "+=400px",
  animation: uncover,
  scrub: true,
})