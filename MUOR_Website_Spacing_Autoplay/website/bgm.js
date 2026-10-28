(()=>{
const button=document.querySelector('#bgm-toggle');
let context,buffer,source,gain,playing=false,offset=0,started=0,userPaused=false,decoding;
const loaded=fetch('assets/muor-loop.mp3').then(r=>{if(!r.ok)throw Error('audio');return r.arrayBuffer()});
loaded.catch(()=>{});
function update(){button.textContent=playing?'♫ SOUND OFF':'♫ SOUND ON';button.setAttribute('aria-pressed',String(playing));button.setAttribute('aria-label',playing?'배경음악 끄기':'배경음악 재생');button.dataset.state=playing?'playing':'paused';}
async function start(){
 if(playing||userPaused)return;
 try{
  context??=new (window.AudioContext||window.webkitAudioContext)();
  await context.resume();
  if(context.state!=='running'||userPaused)return;
  decoding??=loaded.then(data=>context.decodeAudioData(data.slice(0)));
  buffer=await decoding;
  if(playing||userPaused)return;
  if(!gain){gain=context.createGain();gain.connect(context.destination);}
  source=context.createBufferSource();source.buffer=buffer;source.loop=true;source.connect(gain);
  gain.gain.setValueAtTime(0,context.currentTime);gain.gain.linearRampToValueAtTime(.38,context.currentTime+.35);
  source.start(0,offset);started=context.currentTime;playing=true;update();
 }catch(e){update();}
}
button.onclick=()=>{
 if(playing){userPaused=true;offset=(offset+context.currentTime-started)%buffer.duration;source.stop();source=null;playing=false;update();}
 else{userPaused=false;start();}
};
function firstInteraction(event){
 if(event.target?.closest?.('#bgm-toggle')||userPaused||playing)return;
 start();
}
// Retry only through a normal user gesture when the browser blocks autoplay.
window.addEventListener('click',firstInteraction);
window.addEventListener('touchend',firstInteraction,{passive:true});
window.addEventListener('keydown',firstInteraction);
update();start();
})();
