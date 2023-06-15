// const curveText = document.querySelector('#curveText');
// const curveLength = document.querySelector('#curve').getTotalLength();

// window.addEventListener('scroll', () => {
//   const currentScroll = window.scrollY;

//   if(currentScroll < curveLength){
//     curveText.setAttribute('startOffset', -currentScroll/2);
//   }
// })

let todayText = document.querySelector('.header-left-text h3');
let today = new Date();

todayText.innerHTML = `${today.getMonth()+1 < 10 ? '0'+(today.getMonth()+1) : (today.getMonth()+1)} / ${today.getDate() < 10 ? '0'+(today.getDate()) : today.getDate()}`;


window.addEventListener('mousemove', (e) => {
  let titleText = document.querySelector('.title');
  let pageX = e.pageX;
  let pageY = e.pageY;
  let standardX = window.innerWidth/2 - pageX;
  let standardY = window.innerHeight/2 - pageY;
  titleText.style.transform = `translate(${-standardX/50}px,${-standardY/50}px)`;
})


gsap.registerPlugin(ScrollTrigger);

const zoomOutImg = gsap.timeline({  
  scrollTrigger: {
    trigger: ".main-bg", // 객체기준범위
    scrub: 1, // 모션바운스
    start: 'top',
    markers: false,
  }, y: 100
})

zoomOutImg.fromTo('.main-bg', {
  scale: 1},{
  scale: 1.1},'sameTime');


let scrollBtn = document.querySelector('.bottom-right');
let introSection = document.querySelector('.intro-content').offsetTop;

scrollBtn.addEventListener('click',() => {
  console.log('d');
  window.scrollTo({
    top: introSection,
    left: 0,
    behavior: "smooth"
  })
})

gsap.registerPlugin(ScrollTrigger);

gsap.set(".intro-img", { y: -60});

gsap.to(".intro-img", {
  y: 20,
  ease: "none",
  scrollTrigger: {
    trigger: "#section01",
    scrub: 0.5,
    markers: false,
    end: 'bottom center'
  }, 
});

gsap.set(".intro-box", { y: 60});

gsap.to(".intro-box", {
  y: -20,
  ease: "none",
  scrollTrigger: {
    trigger: "#section01",
    scrub: 0.5,
    markers: false,
    end: 'bottom center'
  }, 
});


  // const scrollEvent1 = gsap.fromTo( '.inner-part-wall', 
  //       {
  //         autoAlpha: 0,
  //         opacity: 0,
  //         scale: 0.8,
  //         y: 200
  //       }, 
  //       {
  //         duration: 1,
  //         autoAlpha: 1,
  //         opacity: 1,
  //         scale: 1,
  //         y: 0,
  //       });
  
  // ScrollTrigger.create({
  //   trigger: '.inner-part-wall',
  //   animation: scrollEvent1,
  //   toggleActions: 'restart none none reset',
  //   ease:Expo.easeIn,
  // });


  gsap.registerPlugin(ScrollTrigger);

  let firstEvent = gsap.utils.toArray(".title");

  firstEvent.forEach((top)=> {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: top,
                end: "-=200",
            }
        })

        .from(top, {
            y: 200,
            opacity: 0,
            duration: 3,
            ease:"expo.out"
        })
})


  let scrollEvent = gsap.utils.toArray("#section01");

  scrollEvent.forEach((top)=> {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: top,
                end: "-=200",
            }
        })

        .from(top, {
            y: 400,
            opacity: 0,
            duration: 3,
            ease:"expo.out"
        })
})


  let scrollEvent1 = gsap.utils.toArray(".inner-part-wall");

  scrollEvent1.forEach((top)=> {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: top,
                end: "-=200",
            }
        })

        .from(top, {
            y: 400,
            opacity: 0,
            duration: 3,
            ease:"expo.out"
        })
})

let scrollEvent2 = gsap.utils.toArray(".inner-section02");

  scrollEvent2.forEach((top)=> {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: top,
                end: "-=200",
            }
        })

        .from(top, {
            y: 400,
            opacity: 0,
            duration: 3,
            ease:"expo.out"
        })
})


  
let textDesContainer = document.querySelector('.flow-text-desc');
let textName = ['javascript','responsive-website','image-slide','parallax-effect','mouse-effect','music-player','todo-list','word-search'];

console.log(textName.toString().replace(/,/g, ' '));
textDesContainer.textContent = `${textName.toString().replace(/,/g, ' ')}`;



gsap.to(".top-text", {
  scrollTrigger:{
    trigger: ".top-text", 
    start: "top bottom",
    end: "bottom top", 
    scrub: 1
  },
  x: 200
})

gsap.to(".bottom-text", {
  scrollTrigger:{
    trigger: ".bottom-text", 
    start: "top bottom",
    end: "bottom top", 
    scrub: 1
  },
  x: -200
})

gsap.to(".image", {
  scrollTrigger:{
    trigger: ".image",
    start: "top bottom", 
    end: "bottom top", 
    scrub: 1,
    markers: false
  },
  x: -250,
})



const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


const horSection = gsap.utils.toArray('.section03-contents .section-items');
let wrapWidth = document.querySelector('.section03-contents').offsetWidth;
console.log(wrapWidth);

const horiz = gsap.to(horSection, {
    xPercent: -80 * (horSection.length),
    
    scrollTrigger: {
        trigger: '#section03',
        start: 'top',
        end: '+=2000',
        pin: true,
        scrub: 1,
        markers: false,
    },
});

