const pages={
  dashboard:()=>import('./screens/dashboard.js').then(m=>m.render()),
  budget:   ()=>import('./screens/budget.js').then(m=>m.render()),
  debt:     ()=>import('./screens/debt.js').then(m=>m.render()),
  coach:    ()=>import('./screens/coach.js').then(m=>m.render()),
  settings: ()=>import('./screens/settings.js').then(m=>m.render())
};
export function router(){
  document.body.innerHTML=`
    <div id="page"></div>
    <div id="nav">
      <button data-page="dashboard">Home</button>
      <button data-page="budget">Budget</button>
      <button data-page="debt">Debt</button>
      <button data-page="coach">Coach</button>
      <button data-page="settings">Settings</button>
    </div>`;
  const page=document.getElementById('page');
  const nav=e=>{
    const k=e.target.dataset.page;
    if(k) pages[k]().then(html=>page.innerHTML=html);
  };
  document.getElementById('nav').addEventListener('click',nav);
  pages.dashboard(); // default
}
