import { store } from '../utils/storage.js';
export function render(){
  const budget=store.get('budget2023-11')||{income:0,categories:[]};
  const spent=budget.categories.reduce((s,c)=>s+(c.spent||0),0);
  const remain=budget.income-spent;
  return`
    <h2>Dashboard</h2>
    <p>Income: <b>R${(budget.income/100).toFixed(2)}</b></p>
    <p>Spent: <b>R${(spent/100).toFixed(2)}</b></p>
    <p>Left: <b style="color:${remain<0?'red':'green'}">R${(remain/100).toFixed(2)}</b></p>
    <button onclick="location.hash='budget'">Fix Budget</button>
    <seed-verse></seed-verse>`;
}
