import verses from '../json/verses.json' assert { type: 'json' };
const tips=[
  "Baby-Step 1: Build R5 000 emergency fund.",
  "Baby-Step 2: Smallest debt first – snowball!",
  "Baby-Step 3: 3-6 months expenses saved.",
  "Baby-Step 4: Invest 15 % in TFSA (Satrix Top40).",
  "Baby-Step 5: Save for kids’ education.",
  "Baby-Step 6: Pay off home early.",
  "Baby-Step 7: Build wealth & give!"
];
export function render(){
  const v=verses[new Date().getDate()%verses.length];
  return`
    <h2>Coach</h2>
    <p>${tips[new Date().getDay()%tips.length]}</p>
    <seed-verse>${v.text}</seed-verse>`;
}
