import '../styles/main.scss';
import { effect1 } from './effect_1';
import { effect2 } from './effect_2'; 
import { effect3 } from './effect_3'; 

window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('app').innerText = "CSS DEMO!";
    effect1();
    effect2();
    effect3();
});






