const clock = document.querySelector('.clock');

//we make a fucniton that is responsibe for updating the time on the clock every seconds
const tick = ()=>{

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const html = `<span>${hours}</span> :
                  <span>${minutes}</span> :
                  <span>${seconds}</span :
    `;

    clock.innerHTML= html;

};

setInterval(tick, 1000);   // what this does is it executes the fucntion tick every 1 second