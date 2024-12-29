// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import LocomotiveScroll from 'locomotive-scroll';

// const Avatar = () => {
//   const mainRef = useRef(null);
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const locoScroll = new LocomotiveScroll({
//       el: mainRef.current,
//       smooth: true,
//     });

//     locoScroll.on("scroll", ScrollTrigger.update);

//     ScrollTrigger.scrollerProxy("#main", {
//       scrollTop(value) {
//         return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//       },
//       getBoundingClientRect() {
//         return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
//       },
//       pinType: mainRef.current.style.transform ? "transform" : "fixed",
//     });

//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
//     ScrollTrigger.refresh();

//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     window.addEventListener("resize", function () {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       render();
//     });

//     const images = [];
//     const imageSeq = { frame: 1 };
//     const frameCount = 300;

//     for (let i = 1; i <= frameCount; i++) {
//       const img = new Image();
//       img.src = `../src/images/male${String(i).padStart(4, '0')}.png`;
//       images.push(img);
//     }

//     gsap.to(imageSeq, {
//       frame: frameCount - 1,
//       snap: "frame",
//       ease: "none",
//       scrollTrigger: {
//         scrub: 0.15,
//         trigger: canvas,
//         start: "top top",
//         end: "600% top",
//         scroller: "#main",
//       },
//       onUpdate: () => render(),
//     });

//     function render() {
//       scaleImage(images[imageSeq.frame], context);
//     }

//     function scaleImage(img, ctx) {
//       const hRatio = canvas.width / img.width;
//       const vRatio = canvas.height / img.height;
//       const ratio = Math.max(hRatio, vRatio);
//       const centerShift_x = (canvas.width - img.width * ratio) / 2;
//       const centerShift_y = (canvas.height - img.height * ratio) / 2;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
//     }

//     return () => {
//       locoScroll.destroy();
//     };
//   }, []);

//   return (
//     <div id="main" ref={mainRef} style={{ position: 'relative', overflow: 'hidden', height: '100%', width: '100%' }}>
//       <div id="page" style={{ position: 'relative', height: '100vh', width: '100vw', backgroundColor: '#f1f1f1' }}>
//         <canvas ref={canvasRef} style={{ position: 'relative', zIndex: 9, maxWidth: '100vw', maxHeight: '100vh' }}></canvas>
//       </div>
//       {/* Additional pages and elements can be added here */}
//     </div>
//   );
// };

// export default Avatar;
