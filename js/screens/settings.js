import { store } from '../utils/storage.js';
export function render(){
  const dark=store.get('darkMode')||false;
  return`
    <h2>Settings</h2>
    <label>Dark mode <input id="dark" type="checkbox" ${dark?'checked':''}></label><br>
    <button id="saveS">Save</button>`;
}
