// Mood Garden - simple interactive SPA
const moodInput = document.getElementById('moodInput');
const preset = document.getElementById('presetMood');
const growBtn = document.getElementById('growBtn');
const clearBtn = document.getElementById('clearBtn');
const garden = document.getElementById('garden');
const logList = document.getElementById('logList');
const tpl = document.getElementById('plantTemplate');

const storageKey = 'moodGarden.v1';

function loadGarden(){
  const data = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if(!data.length){
    garden.innerHTML = '<div class="empty">Your garden is empty — add a mood to grow a plant.</div>';
  } else {
    garden.innerHTML = '';
    data.forEach(item=>garden.appendChild(createPlantElement(item)));
  }
  renderLog(data);
}

function saveGarden(items){
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function createPlantElement(item){
  const frag = tpl.content.cloneNode(true);
  const node = frag.querySelector('.plant');
  const moodText = frag.querySelector('.moodText');
  moodText.textContent = item.mood;
  applyMoodStyle(node, item.mood);
  // animate grow
  setTimeout(()=> node.classList.add('grow'), 80);
  return frag;
}

function applyMoodStyle(node, mood){
  // basic mood mapping
  const svg = node.querySelector('.plant-svg');
  const circle = svg.querySelector('.flower circle');
  const leftLeaf = svg.querySelector('.leaf.left path');
  const rightLeaf = svg.querySelector('.leaf.right path');
  const stem = svg.querySelector('.stem rect');

  const m = (mood||'').toLowerCase();
  if(m.includes('happy') || m.includes('joy') || m.includes('excited')){
    circle.setAttribute('fill','#ffd166');
    leftLeaf.setAttribute('fill','#7bd389');
    rightLeaf.setAttribute('fill','#7bd389');
    stem.setAttribute('fill','#2b7a2b');
  } else if(m.includes('sad') || m.includes('down') || m.includes('tired')){
    circle.setAttribute('fill','#9fb4ff');
    leftLeaf.setAttribute('fill','#9bbf9b');
    rightLeaf.setAttribute('fill','#9bbf9b');
    stem.setAttribute('fill','#4b6b4b');
    node.style.opacity = '0.9';
  } else if(m.includes('calm') || m.includes('relaxed') || m.includes('peace')){
    circle.setAttribute('fill','#bde0fe');
    leftLeaf.setAttribute('fill','#a8e6cf');
    rightLeaf.setAttribute('fill','#a8e6cf');
    stem.setAttribute('fill','#2f8b57');
  } else if(m.includes('angry') || m.includes('mad') || m.includes('frustrat')){
    circle.setAttribute('fill','#ff6b6b');
    leftLeaf.setAttribute('fill','#b2d6a4');
    rightLeaf.setAttribute('fill','#b2d6a4');
    stem.setAttribute('fill','#2f5f33');
    node.style.transform = 'translateY(0)';
  } else {
    // neutral
    circle.setAttribute('fill','#ffd9b3');
    leftLeaf.setAttribute('fill','#9fd9a2');
    rightLeaf.setAttribute('fill','#9fd9a2');
    stem.setAttribute('fill','#3a8f43');
  }
}

function renderLog(items){
  logList.innerHTML = '';
  items.slice().reverse().forEach(it=>{
    const li = document.createElement('li');
    li.textContent = `${new Date(it.time).toLocaleString()}: ${it.mood}`;
    logList.appendChild(li);
  });
}

growBtn.addEventListener('click', ()=>{
  const mood = (moodInput.value || preset.value || '').trim();
  if(!mood) { alert('Please type a mood or select a preset.'); return; }
  const items = JSON.parse(localStorage.getItem(storageKey) || '[]');
  const entry = {mood, time: Date.now()};
  items.push(entry);
  saveGarden(items);
  // add plant
  if(garden.querySelector('.empty')) garden.innerHTML = '';
  garden.appendChild(createPlantElement(entry));
  renderLog(items);
  moodInput.value = '';
  preset.value = '';
});

preset.addEventListener('change', ()=>{
  if(preset.value) moodInput.value = preset.value;
});

clearBtn.addEventListener('click', ()=>{
  if(!confirm('Clear your garden and mood log?')) return;
  localStorage.removeItem(storageKey);
  loadGarden();
});

document.addEventListener('DOMContentLoaded', loadGarden);
