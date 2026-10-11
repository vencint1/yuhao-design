const motionButton=document.querySelector('.motion-toggle');
if(motionButton){motionButton.addEventListener('click',()=>{const paused=document.body.classList.toggle('paused');motionButton.textContent=paused?'动效：已暂停':'暂停动效';motionButton.setAttribute('aria-pressed',String(paused))})}
