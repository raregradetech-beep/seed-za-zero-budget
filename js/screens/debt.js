import { store } from '../utils/storage.js';
export function render(){
  const key='debts';
  let debts=store.get(key)||[];
  const html=`
    <h2>Debt Snowball</h2>
    <button id="addDebt">+ Add Debt</button>
    <div id="list">${debts.map((d,i)=>`
      <div>${d.name} – R${(d.balance/100).toFixed(2)}
        <button data-i="${i}">Payoff</button>
      </div>`).join('')}</div>`;
  setTimeout(()=>{
    document.getElementById('addDebt').onclick=()=>{
      const name=prompt('Name?'); const bal=parseFloat(prompt('Balance R?'))*100;
      debts.push({name,balance:bal});
      store.set(key,debts);
      location.hash='debt';
    };
    document.querySelectorAll('#list button').forEach(b=>b.onclick=function(){
      const i=+this.dataset.i; debts[i].balance=0; store.set(key,debts); location.hash='debt';
    });
  },0);
  return html;
}
