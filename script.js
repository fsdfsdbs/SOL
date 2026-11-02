const LINKS=[
  "https://linkvertise.com/000000/lien-1",
  "https://linkvertise.com/000000/lien-2",
  "https://linkvertise.com/000000/lien-3",
  "https://linkvertise.com/000000/lien-4",
  "https://linkvertise.com/000000/lien-5"
];

const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const P={
key:'<circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/>',
home:'<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .7-1.5l7-6a2 2 0 0 1 2.6 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
sliders:'<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>',
terminal:'<path d="m4 17 6-6-6-6M12 19h8"/>',
help:'<circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01"/>',
search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
min:'<path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7"/>',
chev:'<path d="m6 9 6 6 6-6"/>',
out:'<path d="M7 7h10v10M7 17 17 7"/>',
ok:'<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
zap:'<path d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.5L12.1 9A1 1 0 0 0 13 10h7a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.5l1.9-6A1 1 0 0 0 11 14z"/>',
eye:'<path d="M2.1 12.4a1 1 0 0 1 0-.8 10.8 10.8 0 0 1 19.8 0 1 1 0 0 1 0 .8 10.8 10.8 0 0 1-19.8 0"/><circle cx="12" cy="12" r="3"/>',
user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
shield:'<path d="M20 13c0 5-3.5 7.5-7.7 9a1 1 0 0 1-.6 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.2-2.7a1.2 1.2 0 0 1 1.5 0C14.500 3.800 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>'};
$$('.ic').forEach(e=>e.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${P[e.dataset.i]||''}</svg>`);

function toast(t,m,d=3000){const e=document.createElement('div'),w=$('#toasts');e.className='toast';e.style.setProperty('--d',d+'ms');e.innerHTML=`<b>${t}</b><span>${m}</span>`;w.appendChild(e);const k=()=>{e.classList.add('out');setTimeout(()=>e.remove(),300)};e.onclick=k;setTimeout(k,d);while(w.children.length>3)w.firstChild.remove()}

const META={home:['Get Key','Complete a few steps to unlock the hub.'],script:['Script','Run the loader once you have your key.'],faq:['FAQ','Quick answers to common questions.']};
function moveInd(){const t=$('.tab.on'),i=$('.ind');if(t&&i){i.style.top=t.offsetTop+'px';i.style.height=t.offsetHeight+'px'}}
function show(id){
  $$('.tab').forEach(t=>{const on=t.dataset.tab===id;t.classList.toggle('on',on);t.setAttribute('aria-selected',on)});
  $$('.page').forEach(p=>p.classList.toggle('on',p.id==='p-'+id));
  $$('.page.on .box').forEach((b,i)=>b.style.setProperty('--i',i));
  $('#ptitle').textContent=META[id][0];$('#pdesc').textContent=META[id][1];
  $('.pages').scrollTop=0;moveInd();
}
$$('.tab').forEach(t=>t.onclick=()=>show(t.dataset.tab));
$$('[data-go]').forEach(a=>a.onclick=e=>{e.preventDefault();show(a.dataset.go)});
addEventListener('resize',moveInd);

$$('.bh').forEach(h=>h.onclick=()=>h.closest('.box').classList.toggle('c'));
let hinted=false;
$$('.tg').forEach(t=>{t.classList.toggle('on',t.getAttribute('aria-checked')==='true');t.onclick=()=>{t.classList.toggle('on');t.setAttribute('aria-checked',t.classList.contains('on'));if(!hinted){hinted=true;toast('Preview only','Get your key to use features in the hub.')}}});
$$('input[type=range]').forEach(r=>{const o=$('output',r.closest('.row')),u=()=>{r.style.setProperty('--p',(r.value-r.min)/(r.max-r.min)*100+'%');o.textContent=r.value};r.oninput=u;u()});

$('#q').oninput=e=>{const v=e.target.value.trim().toLowerCase();$$('.sr').forEach(el=>el.hidden=!!v&&!el.textContent.toLowerCase().includes(v));if(v){const f=$$('.sr').find(el=>!el.hidden);if(f)show(f.closest('.page').id.slice(2))}};

$('#copy').onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText($('#loader-code').textContent);b.textContent='Copied';toast('Copied','Script copied to your clipboard.',2200)}catch{b.textContent='Error'}setTimeout(()=>b.textContent='Copy',1600)};

function toggleMin(f){const m=f??!$('#win').classList.contains('min');$('#win').classList.toggle('min',m);$('#island').classList.toggle('on',m)}
$('#minb').onclick=()=>toggleMin(true);
$('#island').onclick=e=>{if(!e.target.closest('.getkey'))toggleMin(false)};
addEventListener('keydown',e=>{if(e.code==='ControlRight'&&!e.repeat)toggleMin()});

let busy=false;
function ripple(b,e){const r=b.getBoundingClientRect(),d=Math.max(r.width,r.height)*2,s=document.createElement('span');s.className='rip';const x=(e.clientX||r.left+r.width/2)-r.left-d/2,y=(e.clientY||r.top+r.height/2)-r.top-d/2;s.style.cssText=`width:${d}px;height:${d}px;left:${x}px;top:${y}px`;b.appendChild(s);setTimeout(()=>s.remove(),600)}
function setBtns(txt,on){$$('.getkey').forEach(b=>{b.classList.toggle('loading',on);b.disabled=on;$('.lbl',b).textContent=txt})}
function getKey(e){
  if(busy)return;busy=true;ripple(e.currentTarget,e);
  toggleMin(false);show('home');
  const n=LINKS.length,pick=Math.floor(Math.random()*n),T=RM?3:16;
  setBtns('Picking a link…',true);
  const pk=$('#picker');pk.classList.add('show');const chips=$$('i',pk);let k=0;
  (function step(){
    chips.forEach(c=>c.className='');
    chips[(((pick-(T-1-k))%n)+n)%n].className=k===T-1?'pick':'hot';
    if(k===T-1){setBtns('Checkpoint '+(pick+1)+' · redirecting…',true);toast('Checkpoint '+(pick+1),'Redirecting you to Linkvertise…',1800);setTimeout(()=>{location.href=LINKS[pick]},RM?200:700);return}
    k++;setTimeout(step,(RM?40:50)+k*k*1.1);
  })();
}
$$('.getkey').forEach(b=>b.addEventListener('click',getKey));
addEventListener('pageshow',()=>{busy=false;setBtns('Get Key',false);$('#picker').classList.remove('show');$$('#picker i').forEach(c=>c.className='')});

function count(e){const to=+e.dataset.count,t0=performance.now(),D=RM?1:1400;(function f(t){const p=Math.min((t-t0)/D,1);e.textContent=Math.round(to*(1-Math.pow(1-p,4))).toLocaleString('en-US');if(p<1)requestAnimationFrame(f)})(t0)}

(function(){
  const L=$('#loader'),lis=$$('li',L),bar=$('.bar i',L),pct=$('#pct');let seen=false;
  try{seen=sessionStorage.getItem('seen')}catch(e){}
  const g=RM||seen?70:520;
  lis.forEach((li,i)=>{setTimeout(()=>{li.className='act';bar.style.width=(i+.6)/lis.length*100+'%'},i*g);setTimeout(()=>li.className='done',(i+1)*g-40)});
  setTimeout(()=>bar.style.width='100%',lis.length*g);
  setTimeout(()=>{L.classList.add('out');$('#win').classList.add('in');$$('[data-count]').forEach(count);moveInd();show('home')},lis.length*g+250);
  setTimeout(()=>L.remove(),lis.length*g+900);
  (function f(){pct.textContent=Math.round(bar.offsetWidth/bar.parentNode.offsetWidth*100)+'%';if(L.isConnected)requestAnimationFrame(f)})();
  try{sessionStorage.setItem('seen','1')}catch(e){}
})();

(function(){
  if(RM)return;const c=$('#snow'),x=c.getContext('2d');let w,h;const S=[];
  const rs=()=>{w=c.width=innerWidth;h=c.height=innerHeight};rs();addEventListener('resize',rs);
  for(let i=0;i<70;i++)S.push({x:Math.random()*w,y:Math.random()*h,r:Math.random()*2+.6,v:Math.random()*.6+.25,d:Math.random()*6.28});
  (function f(){x.clearRect(0,0,w,h);x.fillStyle='#fff';for(const p of S){p.y+=p.v;p.d+=.01;p.x+=Math.sin(p.d)*.3;if(p.y>h+5){p.y=-5;p.x=Math.random()*w}x.globalAlpha=.12+p.r/7;x.beginPath();x.arc(p.x,p.y,p.r,0,6.283);x.fill()}requestAnimationFrame(f)})();
})();
