// building a digital clock...

//1. grab reference element of clock div

const clock = document.querySelector('.clock');

// Now the next thing we want to do is create a function which is going to
// be responsible for updating the time on that digital clock every second..

const tick = () => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  // console.log(h,m,s);

  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;
}

setInterval(tick, 1000); // 1000 milliseconds