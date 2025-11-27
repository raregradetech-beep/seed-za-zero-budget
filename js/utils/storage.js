export const store={
  get(k){return JSON.parse(localStorage.getItem(k)||'null')},
  set(k,v){localStorage.setItem(k,JSON.stringify(v))}
};
