/* ============================================================
   SDGKU MDI1 — Shared slide engine
   Keyboard + click navigation, progress bar, slide counter,
   and a presenter-notes panel (press N).
   Usage: place chrome markup (see any deck) then
   <script src="../shared/sdgku-slides.js"></script>
   Reads talk points from each .slide's data-notes attribute.
   ============================================================ */
(function(){
  const slides=[...document.querySelectorAll('.slide')];
  if(!slides.length)return;
  let i=0;
  const counter=document.getElementById('counter');
  const progress=document.getElementById('progress');
  const notesBody=document.getElementById('notes-body');

  function render(){
    slides.forEach((s,n)=>s.classList.toggle('active',n===i));
    if(counter)counter.textContent=(i+1)+' / '+slides.length;
    if(progress)progress.style.width=((i+1)/slides.length*100)+'%';
    if(notesBody)notesBody.innerHTML=slides[i].dataset.notes||'<p class="ntext" style="color:#8a8a8f">No notes for this slide.</p>';
  }
  function go(n){i=Math.max(0,Math.min(slides.length-1,n));render();}

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();go(i+1);}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();go(i-1);}
    else if(e.key==='Home'){go(0);}
    else if(e.key==='End'){go(slides.length-1);}
    else if(e.key==='n'||e.key==='N'){document.body.classList.toggle('notes-on');}
    else if(e.key==='f'||e.key==='F'){
      if(!document.fullscreenElement)document.documentElement.requestFullscreen();
      else document.exitFullscreen();
    }
  });

  const deck=document.getElementById('deck');
  if(deck)deck.addEventListener('click',e=>{
    if(e.target.closest('#notes'))return;
    const x=e.clientX/window.innerWidth;
    if(x>0.6)go(i+1);else if(x<0.4)go(i-1);
  });

  document.body.classList.add('show-hint');
  setTimeout(()=>document.body.classList.remove('show-hint'),4200);

  render();
})();
