// Data (demo)
const FRIDGES=[
  {id:'smarinn', name:'Smárinn Freedge', area:'Kópavogur', distance:'3.0 km', coords:[64.082,-21.897]},
  {id:'blom', name:'Blómaskeið Freedge', area:'Reykjavík', distance:'2.6 km', coords:[64.132,-21.922]},
  {id:'sport', name:'Sveitarport Hall', area:'Reykjavík', distance:'4.0 km', coords:[64.143,-21.90]},
];
const ITEMS={
  smarinn:[
    {title:'Top carrots', exp:'2025-05-02', qty:3},
    {title:'Cakes', exp:'2025-05-04', qty:10},
    {title:'Spinach', exp:'2025-05-03', qty:5},
  ]
};

const $=(s,r=document)=>r.querySelector(s);
function onHome(){
  const list=$('#list'); if(!list) return;
  const q=$('#q');
  function draw(){
    const t=(q.value||'').toLowerCase();
    list.innerHTML=FRIDGES.filter(f=>!t||f.name.toLowerCase().includes(t)||f.area.toLowerCase().includes(t))
    .map(f=>`<article class="card item-card">
      <div><strong>${f.name}</strong><div class="item-meta">📍 ${f.area} • ${f.distance}</div></div>
      <a class="btn btn-outline" href="fridge.html?id=${f.id}">Open</a>
    </article>`).join('');
  }
  q.addEventListener('input',draw); draw();
}
function onFridge(){
  const wrap = $('#items');
  if (!wrap) return;

  const idParam = new URLSearchParams(location.search).get('id') || 'smarinn';
  const fridge  = FRIDGES.find(f => f.id === idParam) || FRIDGES[0];
  const id = fridge.id;

  // Header
  $('#fName').textContent = fridge.name;
  const now = new Date();
  $('#lastUpdated').textContent =
    `Today, last updated ${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`;

  // Render items (note type="button")
  const items = ITEMS[id] || [];
  wrap.innerHTML = items.map((it, i) => `
    <article class="card food-card">
      <div>
        <div><strong>${it.title}</strong> <span class="badge">Available ${it.qty}</span></div>
        <div class="meta">Exp. ${it.exp}</div>
      </div>
      <div>
        <button type="button" class="btn btn-outline" data-hold="${i}">Mark as taken</button>
      </div>
    </article>
  `).join('') || '<p>No items listed right now.</p>';

  // Single delegated handler; block other listeners, then redirect
  wrap.onclick = (e) => {
    const btn = e.target.closest('[data-hold]');
    if (!btn) return;

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();

    const idx = +btn.dataset.hold;
    const it  = items[idx];
    if (!it) return;

    try {
      localStorage.setItem('last_taken', JSON.stringify({ title: it.title, fridge: id, qty: 1, time: Date.now() }));
    } catch {}

    window.location.href =
      `taken.html?fridge=${encodeURIComponent(id)}&item=${encodeURIComponent(it.title)}&qty=1`;
  };
}

function onDonate(){
  const sel=$('#d-fridge'); if(!sel) return;
  sel.innerHTML=FRIDGES.map(f=>`<option value="${f.id}">${f.name}</option>`).join('');
  $('#donForm').addEventListener('submit',(e)=>{
    e.preventDefault();
    const exp=$('#d-exp').value.trim();
    if(!/^\d{4}-\d{2}-\d{2}$/.test(exp)){ alert('Use YYYY-MM-DD'); return; }
    location.href='thank-you.html';
  });
}
function onThanks(){
  const wrap=$('#nearby'); if(!wrap) return;
  wrap.innerHTML=FRIDGES.map(f=>`<article class="card center">
    <div><strong>${f.name}</strong></div>
    <div class="item-meta">📍 ${f.area} — ${f.distance}</div>
    <a class="btn btn-outline" href="fridge.html?id=${f.id}" style="margin-top:.5rem">Book Now</a>
  </article>`).join('');
}
onHome(); onFridge(); onDonate(); onThanks();