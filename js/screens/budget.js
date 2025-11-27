import { store } from '../utils/storage.js';
const DEFAULT=[
 {id:'food',name:'Food',budgeted:0,spent:0,locked:true},
 {id:'rent',name:'Rent/Bond',budgeted:0,spent:0,locked:true},
 {id:'trans',name:'Transport',budgeted:0,spent:0,locked:true},
 {id:'save',name:'Emergency Fund',budgeted:0,spent:0,locked:true},
 {id:'tithe',name:'Tithes',budgeted:0,spent:0,locked:true}
];
export function render(){
  const key='budget2023-11';
  let data=store.get(key)||{income:0,categories:DEFAULT};
  const html=`
    <h2>Zero-Based Budget</h2>
    <label>Income R<input id="inc" type="number" value="${(data.income/100).toFixed(0)}"></label>
    <div id="cats">${data.categories.map((c,i)=>`
      <div>${c.name} <input data-i="${i}" type="number" value="${(c.budgeted/100).toFixed(0)}"></div>`).join('')}</div>
    <button id="saveB">Save</button>`;
  setTimeout(()=>{
    document.getElementById('saveB').onclick=()=>{
      data.income=parseInt(document.getElementById('inc').value)*100;
      document.querySelectorAll('#cats input').forEach((inp,i)=>data.categories[i].budgeted=parseInt(inp.value)*100);
      store.set(key,data);
      alert('Every rand assigned!');
    };
  },0);
  return html;
}
