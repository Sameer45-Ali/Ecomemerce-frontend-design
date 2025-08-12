document.getElementById('searchBtn').addEventListener('click', function(){
  const q = document.getElementById('searchInput').value.trim();
  alert(q ? 'Search: ' + q : 'Please type a search query');
});
document.getElementById('learnMore').addEventListener('click', function(){
  alert('Learn more clicked — this is a static demo page.');
});

// countdown
(function(){
  const end = new Date(Date.now() + 4*24*60*60*1000 + 13*60*60*1000 + 34*60*1000 + 56*1000);
  function tick(){
    const now = new Date();
    let diff = Math.max(0, Math.floor((end - now) / 1000));
    const d = Math.floor(diff / (3600*24)); diff -= d*3600*24;
    const h = Math.floor(diff / 3600); diff -= h*3600;
    const m = Math.floor(diff / 60); diff -= m*60;
    const s = diff;
    document.getElementById('days').textContent = String(d).padStart(2,'0');
    document.getElementById('hours').textContent = String(h).padStart(2,'0');
    document.getElementById('mins').textContent = String(m).padStart(2,'0');
    document.getElementById('secs').textContent = String(s).padStart(2,'0');
  }
  tick(); setInterval(tick, 1000);
})();
