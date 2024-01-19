import './style.css';
import qianningLogo from './qianning.webp';
import { registerSchool } from '../lib/main';
import { Wust } from './wust';

// interface I {
//   t: EasType;
// }

// let t = JSON.parse('{"t":"Postgraduate"}') as I;
registerSchool(new Wust());

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.zhiwya.com/" target="_blank">
      <img src="${qianningLogo}" class="logo vanilla" alt="QianNing logo" />
    </a>
    <h1>Vite + QianNing Campus</h1>
    
    <p class="read-the-docs">
      千凝校园
    </p>
  </div>
`;
