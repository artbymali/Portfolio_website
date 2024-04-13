// function loader() {
//     let tl =  gsap.timeline();
  
//     document.getElementById('HeaderId').style.display = 'none';
  
//     tl.from("#loader h3", {
//       x: 120,
//       opacity: 0,
//       duration: 1,
//       stagger: .09
//     })
  
//     tl.to("#loader h3", {
//       opacity: 0,
//       x: -30,
//       duration: 1,
//       stagger: .09
//     })
  
//      tl.to("#loader", {
//       opacity: 0
//     })
  
//      tl.to("#loader", {
//       display: "none",
//       onComplete: function () {
//         document.getElementById('loader').style.display = 'none';
        
//         document.getElementById('HeaderId').style.display = 'block';
//         setTimeout(function () {
//           gsap.to("#bg-img", { opacity: 1, duration: 0.2 });
//         }, 200);
//         setTimeout(function () {
//           gsap.to("#boy-img", { opacity: 1, duration: 0.5, });
//         }, 500);
//       }
//     })
  
//     document.getElementById('boy-img').style.opacity = 0;
//     document.getElementById('bg-img').style.opacity = 0;
//     // document.body.style.overflow = 'hidden'
// }
// loader();

// function navAnima() {

//   const backToTop = document.querySelector('.mask');

//   gsap.set('.mask', {
//     yPercent: -190,
//     cursor: 'pointer' // Adding pointer cursor for better UX
//   });

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       start: 'top+=100',
//       end: '+=1',
//       toggleActions: 'play none none reverse',
//       scrub: 2
//     }
//   });

//   // Finally, reveal the icon
//   tl
//   .to('.mask', {
//     yPercent: 0
//   })
//   .to('menu', {
//     x: -30
//   }, "<")
//   .to('.Contact-button button', {
//     x: -80
//   },"<");

//   // Scroll to top of home page section when clicking on '.mask' element
//   backToTop.addEventListener('click', function() {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth' // Smooth scroll behavior
//     });
//   });
// }

// navAnima(); 

const nav = document.querySelector('header');
const navIcon = document.querySelector('.mask')
const navButton = document.querySelector('.Contact-button')

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;

  if(offset > 100) {
    nav.classList.add('scroll');
    navIcon.classList.add('BackToTop');
    navButton.classList.add('ContactButton');
  } else {
    nav.classList.remove('scroll');
    navIcon.classList.remove('BackToTop');
    navButton.classList.remove('ContactButton');
  }

  if (offset > 100) {
    navButton.style.transform = 'translateX(-60px)';
  } else {
    navButton.style.transform = 'translateX(0)';
  }
});




function TextReveal() {
    setTimeout(function () {
      gsap.from("#content-left h2", {
        x: -100,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.2, // Slight delay for h2
      });
  
      gsap.from("#content-left p", {
        x: -100,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.4, // Slight delay for p
      });
  
      gsap.from("#content-left button", {
        x: -100,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.6, // Slight delay for button
      });
  
    }, 10);
  
    setTimeout(function () {
      gsap.from("#content-right-avard-first", {
        x: 50,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.1, // Slight delay for h2
      });
  
      gsap.from("#content-right-avard-second", {
        x: 50,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.3, // Slight delay for h2
      });
  
      gsap.from("#content-right-avard-third", {
        x: 50,
        opacity: 0,
        ease: "power4.inOut",
        duration: 2,
        delay: 1.5, // Slight delay for h2
      });
    }, 10)
}
TextReveal();

function numberReveal() {
    setTimeout(() => {
      const counters = document.querySelectorAll('.counter');
      counters.forEach((counter) => {
        counter.innerHTML = '0'
  
        const updateCounter = () => {
          const target = +counter.getAttribute('data-target')
          const c = +counter.innerText;
  
          const increment = target / 1800;
  
          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10)
          }
        };
        updateCounter()
      })
    }, 1600)
}
numberReveal();

function attachMouseMoveEvent() {
    const btn = document.querySelector('button');
    btn.onmousemove = function (e) {
      const x = e.pageX - btn.offsetLeft;
      const y = e.pageY - btn.offsetTop - window.scrollY;
  
      btn.style.setProperty('--x', x + 'px');
      btn.style.setProperty('--y', y+ 'px');
    }
}
attachMouseMoveEvent();

function skillReveal() {
  const scrollers = document.querySelectorAll(".Skill-reveal-container");

  if (!window.matchMedia("(perfers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);

      const scrollerInner = scroller.querySelector('.Skill-reveal-inner');
      const scrollercontent = Array.from(scrollerInner.children);

      scrollercontent.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
      })
    });
  }
}
skillReveal();

function smoothScroll () {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou

  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
}

smoothScroll();